import localforage from 'localforage';

class DB {
  
  // add a Quote the the list
  addQuote( data ) {
    return localforage.getItem('quotes')
      .then( res => {
        if ( ! res ) {
          localforage.setItem('quotes', [ data ])
            .then( output => {
              return output;
            });
        }
        if ( res && res.length > 0 ) {
          const updated = res;
          updated.push(data);
          localforage.setItem('quotes', updated )
            .then( output => {
              return output;
            });
        }
      })
  }

  //find and return the quotes
  findQuotes() {
    return localforage.getItem('quotes')
      .then( (records) => {
        return records;
      });
  }

  //Cache quotes for offline use
  cacheQuotes( data ) {
    return localforage.getItem('cached')
      .then( res => {
        if ( ! res ) {
          localforage.setItem('cached', data.data)
            .then( output => {
              return output;
            })
        }
        /**
         * removeItem doesn't free any memory on indexedDB
         */
        // if ( res && res.length > 0 ) {
        //   localforage.removeItem('cached')
        //     .then( output => {
        //       localforage.setItem('cached', data.data)
        //         .then( output => {
        //           return output;
        //         })
        //     })
        // }
      })
  }

  //find cached quotes when offline
  findCachedQuotes() {
    return localforage.getItem('cached')
      .then( (records) => {
        return records;
      });
  }
}

export default new DB();