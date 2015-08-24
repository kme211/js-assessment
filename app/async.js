exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var promise = new Promise(function(resolve, reject) {
      if(value) {
        resolve(value);
      } else {
        reject(value);
      }
    });
    
    promise.then(function(data) {
      console.log('Got data! Promise fulfilled.');
    }, function(error) {
      console.log('Promise rejected.');
    });
    
    return promise;
  },

  manipulateRemoteData : function(url) {
    
    

  }
};
