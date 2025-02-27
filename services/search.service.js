import { addTerm, searchPrefix } from "../models/trieSearch.js";
import client from "../config/redis.config.js";
import { testData } from "../helper/testData.js";

export const indexTerm = async (term) => {
    try {
      addTerm(term);
      await client.sAdd("searchTerms", term);
    } catch (error) {
      console.error('Error indexing term:', error);
      throw error;
    }
};
  
export const searchPrefixService = async (prefix) => {
    try {
      const results = searchPrefix(prefix);
  
      for (const term of results) {
        await client.zIncrBy("searchFrequencies", 1, term);
      }
  
      const sortedTerms = await client.zRange("searchFrequencies", 0, -1);
      return results.sort((a, b) => sortedTerms.indexOf(b) - sortedTerms.indexOf(a));
    } catch (error) {
      console.error('Error searching prefix:', error);
      throw error;
    }
};


export const initializeTestData = async () => {
    try {
      for (const term of testData) {
        addTerm(term);
        await client.sAdd('searchTerms', term);
      }
      console.log('Test data initialized successfully');
    } catch (error) {
      console.error('Error initializing test data:', error);
    }
  };