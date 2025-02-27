    ### Installation
    Clone the repository:

git clone https://github.com/blakie001/trie_search_api
cd trie_search_api


    ### Install dependencies:


npm install

    ### Start the server:

npm start

      ### search new words : 
      
Endpoint: GET /search?prefix=ex

Description: Get auto-completion suggestions for a given prefix.

    ### Query Parameters:

prefix: The prefix to search for (e.g., ex).

Response:

{
  "results": ["example", "excellent"]
}


    ### Trie Data Structure:

The Trie is used to store all search terms. It allows for fast prefix-based searches with a time complexity of O(m), where m is the length of the prefix.

    ### Redis:

Redis is used for:

Caching: Storing all search terms in a set (searchTerms).
Ranking: Tracking search frequencies using a sorted set (searchFrequencies).

    ### Auto-Completion:

When a user types a prefix, the API:
Searches the Trie for matching terms.
Updates the search frequency in Redis.
Ranks the results based on frequency.
