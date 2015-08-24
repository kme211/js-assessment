exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    this.myObject = {
      name : 'Jory'
    };

    return this;
  },

  functions : function(flag) {
    
    var getValue;
    
    if (flag) {
      getValue = function() {
        return 'a';
      }
    } else {
      getValue = function() {
        return 'b';
      }
    }

    return getValue();
  },

  parseInt : function(num) {
    if(num.indexOf("x") !== -1) {
      var array = num.split("x");
      return parseInt(array[0], array[1]);
    } else {
      return parseInt(num);
    }
  },

  identity : function(val1, val2) {
    return val1 === val2;
  }
};
