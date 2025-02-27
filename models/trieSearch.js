import TrieSearch from "trie-search";

const trie = new TrieSearch('term');

export const addTerm = (term) =>{
    trie.add({ term });
}

export const searchPrefix = (prefix) =>{
    return trie.get(prefix).map(item => item.term);
}