docsearch({
    inputSelector: '.search-mobile',
    typesenseCollectionName: 'alan-docs', 
    typesenseServerConfig: { 
      nodes: [{
        host: 'p3ruwbq9y5k4jftnp-1.a1.typesense.net', // For Typesense Cloud use xxx.a1.typesense.net
        port: '443',      // For Typesense Cloud use 443
        protocol: 'https'   // For Typesense Cloud use https
      }],
      apiKey: 'AKnWF6KAzIZ1Sy1OtBThAz9ZKm2UZYyc', // Use API Key with only Search permissions
    },
    typesenseSearchParams: { // Optional.
      per_page: 50
    }
  });