function str(value) {
  return value.toString();
}

function int(value) {
  return parseInt(value);
}

function bool(value) {
  return Boolean(value);
}

function func(value) {
  return value;
}

function input(message) {
  return prompt(message);
}

function write(value) {
  console.log(value);
}

function data(value) {
  return value;
}

function array(elements) {
  return elements;
}

function object(properties) {
  return properties;
}

function map(entries) {
  return new Map(entries);
}

function type(value) {
  return typeof value;
}

function push(array, element) {
  array.push(element);
}

function pop(array) {
  return array.pop();
}

function shift(array) {
  return array.shift();
}

function unshift(array, element) {
  array.unshift(element);
}

function join(array, separator) {
  return array.join(separator);
}

function reverse(array) {
  array.reverse();
}

function sort(array, compareFn) {
  array.sort(compareFn);
}

function splice(array, start, deleteCount, ...items) {
  return array.splice(start, deleteCount, ...items);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function increment(a) {
  return a + 1;
}

function decrement(a) {
  return a - 1;
}

function equal(a, b) {
  return a === b;
}

function notEqual(a, b) {
  return a !== b;
}

function greaterThan(a, b) {
  return a > b;
}

function lessThan(a, b) {
  return a < b;
}

function greaterThanOrEqual(a, b) {
  return a >= b;
}

function lessThanOrEqual(a, b) {
  return a <= b;
}

function and(a, b) {
  return a && b;
}

function or(a, b) {
  return a || b;
}

function not(a) {
  return !a;
}

function If(condition, trueBranch, falseBranch) {
  return condition ? trueBranch() : falseBranch();
}

function IfElse(condition, trueBranch, falseBranch) {
  if (condition) {
    trueBranch();
  } else {
    falseBranch();
  }
}

function ElseIf(condition, trueBranch, falseBranch) {
  return condition ? trueBranch() : falseBranch();
}

function tryCatch(block, catchBlock) {
  try {
    block();
  } catch (error) {
    catchBlock(error);
  }
}

function For(initializer, condition, increment, body) {
  for (initializer; condition; increment) {
    body();
  }
}

function While(condition, body) {
  while (condition) {
    body();
  }
}

function DoWhile(body, condition) {
  do {
    body();
  } while (condition);
}

function abs(x) {
  return Math.abs(x);
}

function sqrt(x) {
  return Math.sqrt(x);
}

function pow(x, y) {
  return Math.pow(x, y);
}

function sin(x) {
  return Math.sin(x);
}

function cos(x) {
  return Math.cos(x);
}

function tan(x) {
  return Math.tan(x);
}

function asin(x) {
  return Math.asin(x);
}

function acos(x) {
  return Math.acos(x);
}

function atan(x) {
  return Math.atan(x);
}

function atan2(y, x) {
  return Math.atan2(y, x);
}

function ceil(x) {
  return Math.ceil(x);
}

function floor(x) {
  return Math.floor(x);
}

function round(x) {
  return Math.round(x);
}

function random() {
  return Math.random();
}

function max(...args) {
  return Math.max(...args);
}

function min(...args) {
  return Math.min(...args);
}

function length(str) {
  return str.length;
}

function charAt(str, index) {
  return str.charAt(index);
}

function charCodeAt(str, index) {
  return str.charCodeAt(index);
}

function fromCharCode(charCode) {
  return String.fromCharCode(charCode);
}

function substring(str, start, end) {
  return str.substring(start, end);
}

function slice(str, start, end) {
  return str.slice(start, end);
}

function substr(str, start, length) {
  return str.substr(start, length);
}

function indexOf(str, searchValue, fromIndex) {
  return str.indexOf(searchValue, fromIndex);
}

function lastIndexOf(str, searchValue, fromIndex) {
  return str.lastIndexOf(searchValue, fromIndex);
}

function replace(str, searchValue, newValue) {
  return str.replace(searchValue, newValue);
}

function replaceAll(str, searchValue, newValue) {
  return str.replaceAll(searchValue, newValue);
}

function split(str, separator) {
  return str.split(separator);
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function trim(str) {
  return str.trim();
}

function trimStart(str) {
  return str.trimStart();
}

function trimEnd(str) {
  return str.trimEnd();
}

function push(array, element) {
  array.push(element);
}

function pop(array) {
  return array.pop();
}

function shift(array) {
  return array.shift();
}

function unshift(array, element) {
  array.unshift(element);
}

function join(array, separator) {
  return array.join(separator);
}

function reverse(array) {
  array.reverse();
}

function sort(array, compareFn) {
  array.sort(compareFn);
}

function splice(array, start, deleteCount, ...items) {
  return array.splice(start, deleteCount, ...items);
}

function map(array, callback) {
  return array.map(callback);
}

function filter(array, callback) {
  return array.filter(callback);
}

function reduce(array, callback, initialValue) {
  return array.reduce(callback, initialValue);
}

function forEach(array, callback) {
  array.forEach(callback);
}

function some(array, callback) {
  return array.some(callback);
}

function every(array, callback) {
  return array.every(callback);
}

function find(array, callback) {
  return array.find(callback);
}

function findIndex(array, callback) {
  return array.findIndex(callback);
}

function flat(array, depth) {
  return array.flat(depth);
}

function flatMap(array, callback) {
  return array.flatMap(callback);
}

function keys(object) {
  return Object.keys(object);
}

function values(object) {
  return Object.values(object);
}

function entries(object) {
  return Object.entries(object);
}

function assign(target, ...sources) {
  return Object.assign(target, ...sources);
}

function create(proto, propertiesObject) {
  return Object.create(proto, propertiesObject);
}

function freeze(object) {
  return Object.freeze(object);
}

function seal(object) {
  return Object.seal(object);
}

function now() {
  return Date.now();
}

function getDate() {
  return new Date().getDate();
}

function getMonth() {
  return new Date().getMonth();
}

function getYear() {
  return new Date().getFullYear();
}

function getHours() {
  return new Date().getHours();
}

function getMinutes() {
  return new Date().getMinutes();
}

function getSeconds() {
  return new Date().getSeconds();
}

function getMilliseconds() {
  return new Date().getMilliseconds();
}

function getTime() {
  return new Date().getTime();
}

function setHours(hours) {
  return new Date().setHours(hours);
}

function setMinutes(minutes) {
  return new Date().setMinutes(minutes);
}

function setSeconds(seconds) {
  return new Date().setSeconds(seconds);
}

function setMilliseconds(milliseconds) {
  return new Date().setMilliseconds(milliseconds);
}

function setTime(time) {
  return new Date().setTime(time);
}

function getDay() {
  return new Date().getDay();
}

function getFullYear() {
  return new Date().getFullYear();
}

function getMonthName() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date().getMonth()];
}

function getDayName() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

function toISOString() {
  return new Date().toISOString();
}

function toLocaleString() {
  return new Date().toLocaleString();
}

function toLocaleDateString() {
  return new Date().toLocaleDateString();
}

function toLocaleTimeString() {
  return new Date().toLocaleTimeString();
}

// Start Coding From Here
