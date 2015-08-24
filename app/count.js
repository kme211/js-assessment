exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var currentNumber = start, 
        id;
    
    console.log(currentNumber);
    
    function countNums() {
      currentNumber++;
      console.log(currentNumber);
      if(currentNumber === end) {
        clearInterval(id);
      }
    }
    
    id = setInterval(countNums, 100);
    
    this.cancel = function() {
      clearInterval(id);
    }
    
    return this;
    
  }
};
