# circlearray

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

An immutable size circle array structure!

```js
var CircleArray = require('circlearray');

var circle = new CircleArray(3);

circle.add({value: 1});
circle.add({value: 2});
circle.add({value: 3});

```

##Methods
```js

// You can define the circle array sending a param with a regular array. 
var circle = new CircleArray([{value: 1}, {value: 2}, {value: 3}, {value: 4}]);

circle.maxSize(); // This return 4
circle.currentElement(); // this return the current element, by default is the element in the position 0
circle.prev(); // This return element in position 4
circle.prev(); // This return element in position 3
circle.next(); // This return element in position 4
circle.next(); // This return element in position 1
circle.isEmpty(); // false
circle.isFull(); // true
  
  
var circle2 = new CircleArray(2);
circle2.maxSize(); // This return 2
circle.size(); // This return 0
circle2.add({value: 1});
circle.size(); // This return 1
circle2.add({value: 2});
circle.size(); // This return 2
circle2.add({value: 3});
circle.size(); // This return 2
//You can't add more elements that the max size


```
###ScrollTop


## Usage

[![NPM](https://nodei.co/npm/circlearray.png)](https://www.npmjs.com/package/circlearray)
