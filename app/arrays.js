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
    
    var array = [];
    
    arr.forEach(function(elem) {
      array.push(elem);
    });
    
    array.push(item);
    
    return array;

  },

  truncate : function(arr) {
    
    return arr.filter(function(elem, index) {
      return index !== (arr.length - 1);
    })

  },

  prepend : function(arr, item) {
    
    var array = [item];
    
    arr.forEach(function(elem) {
      array.push(elem);
    });

    return array;

  },

  curtail : function(arr) {
    
    return arr.filter(function(elem, index) {
      return index !== 0;
    })

  },

  concat : function(arr1, arr2) {
    
    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {
    
    var array = [];
    
    arr.forEach(function(elem, i) {
      
      if(i === index) {
        array.push(item);
      }
      
      array.push(elem);
      
    });
    
    return array;

  },

  count : function(arr, item) {
    
    var len = arr.length,
        cnt = 0;
    
    for(var i = 0; i < len; i += 1) {
      
      if(arr[i] === item) {
        cnt += 1;
      }
        
    }
    
    return cnt;

  },

  duplicates : function(arr) {
    
    var array = [];
    
    arr.forEach(function(elem, index) {
      
      if(index !== arr.lastIndexOf(elem) && array.indexOf(elem) === -1) {
        array.push(elem);
      }
      
    });

    return array;

  },

  square : function(arr) {
    
    return arr.map(function(value) {
      return value * value;
    });

  },

  findAllOccurrences : function(arr, target) {
    
    var occurences = [];
    
    arr.forEach(function(elem, index) {
      
      if(elem === target) {
        occurences.push(index);
      }
      
    });
    
    return occurences;

  }
};
