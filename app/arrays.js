exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    
    return arr.indexOf(item);
    
  },

  sum : function(arr) {

    var sum = 0;

    arr.forEach(function(elem) {
      sum += elem;
    });

    return sum;
    
  },

  remove : function(arr, item) {
    
    return arr.filter(function(value) {
      return value !== item;
    });

  },

  removeWithoutCopy : function(arr, item) {
    
    while(arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }

    return arr;

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
