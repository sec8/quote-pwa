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
}

export default new DB;