module.exports = CircleArray;

var array = [];
var currentElement = {};
var currentIndex = -1;
var maxSize = 0;

function CircleArray(options) {
  if (!(this instanceof CircleArray))
    return new CircleArray(options);

  if(typeof options == 'number'){
    array = new Array(options);
    maxSize = options;
  }else{
    if( Object.prototype.toString.call( options ) === '[object Array]' ) {
      array = options;
      maxSize = options.length;
      currentElement = options[0];
      currentIndex = 0;
    }
  }
}

CircleArray.prototype.add = function(element) {
  if(this.size() < maxSize){
    currentIndex++;
    array[currentIndex]= element;
    currentElement = element;
  }
};

CircleArray.prototype.prev = function() {
  var index = array.indexOf(currentElement);
  if (index === 0){
    currentElement = array[array.length-1];
    currentIndex = array.length-1;
    return currentElement;
  }else{
    currentElement = array[index-1];
    currentIndex = index-1;
  }
};

CircleArray.prototype.next = function() {
  var index = array.indexOf(currentElement);
  if (index === array.length-1){
    currentElement = array[0];
    currentIndex = 0;
    return currentElement;
  }else{
    currentElement = array[index+1];
    currentIndex = index+1;
  }

};

CircleArray.prototype.remove = function(key, value) {
  if(arguments.length  > 1){
    removeByKey(key, value);
  }else{
    var index = array.indexOf(key);
    if (index > -1) {
      array.splice(index, 1);
      maxSize = maxSize - 1;
    }
  }

};

CircleArray.prototype.currentElement = function() {
  return currentElement;
};

CircleArray.prototype.size = function() {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'undefined'){
      count++;
    }
  }
  return count;
};

CircleArray.prototype.maxSize = function() {
  return array.length;
};

CircleArray.prototype.isFull = function() {
  return this.size() === maxSize ? true : false;
};

CircleArray.prototype.isEmpty = function() {
  return this.size() === 0;
};

CircleArray.prototype.print = function() {
  return array.toString();
};

var removeByKey = function (key, value){
  if(key && value){
    var iterator = array.length;
    while(iterator--){
       if( array[iterator] && array[iterator].hasOwnProperty(key) && (array[iterator][key] === value) ){ 
           array.splice(iterator,1);
          maxSize = maxSize - 1;
       }
    }
  }
};
