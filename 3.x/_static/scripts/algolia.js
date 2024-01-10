docsearch({
    inputSelector: '.sidebar-search',
    typesenseCollectionName: 'alan-docs', 
    typesenseServerConfig: { 
      nodes: [{
        host: 'bd0q6ipkxs57f1jyp-1.a1.typesense.net', // For Typesense Cloud use xxx.a1.typesense.net
        port: '443',      // For Typesense Cloud use 443
        protocol: 'https'   // For Typesense Cloud use https
      }],
      apiKey: 'vwvUgPJPXAtgMLZD2KQE58eJFbOTQcs1', // Use API Key with only Search permissions
    },
    typesenseSearchParams: { // Optional.
      per_page: 50
    },
  });