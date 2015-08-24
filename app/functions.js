exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(undefined, arr);
  },

  speak : function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction : function(str) {
    
    return function(str2) {
      
      return str + ", " + str2;
      
    }

  },

  makeClosures : function(arr, fn) {
    
    var funcs = [];
    
    var funcMaker = function(fn, x) {
      
      return function() {
        return fn(x); // Without the "return" it comes back undefined because nothing is being returned... duh!
      }
      
    }
    
    for(var i = 0; i < arr.length; i++) {
      
      var num = arr[i];
      funcs[i] = funcMaker(fn, num);
      
    }
    
    return funcs;

  },

  partial : function(fn, str1, str2) {

    return function(str3) {
      return fn(str1, str2, str3);
    }

  },

  useArguments : function() {
    
    var sum = 0;
    
    for(var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    
    return sum;

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
