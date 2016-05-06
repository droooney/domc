import { toStringTag } from './libs/toStringTag';

export const isArray = Array.isArray || function isArray(array) {
  return toStringTag(array) === 'Array';
};
export function isArrayLike(array) {
  if (!array || isFunction(array)) {
    return false;
  }
  
  const length = array.length;
  
  return isInteger(length) && length >= 0;
}
export function isBoolean(boolean) {
  return toStringTag(boolean) === 'Boolean';
}
export function isDate(date) {
  return toStringTag(date) === 'Date';
}
export function isDateLike(date) {
  date = new Date(date);
  
  return !isNaN(date.getTime());
}
export const isFinite = Number.isFinite || function isFinite(number) {
    return isNumber(number) && !isNaN(number) && number !== Infinity && number !== -Infinity;
  };
export function isFunction(func) {
  return toStringTag(func) === 'Function';
}
export const isInteger = Number.isInteger || function isInteger(integer) {
    return isNumber(integer) && integer % 1 === 0;
  };
export function isIntegerLike(integer) {
  integer = parseInt(Number(integer));
  return !!(integer || integer === 0);
}
export const isNaN = Number.isNaN || function isNaN(nan) {
    return nan !== nan;
  };
export function isNull(nul) {
  return nul === null;
}
export function isNullOrUndefined(nul) {
  return nul === null || typeof nul === 'undefined';
}
export function isNumber(number) {
  return toStringTag(number) === 'Number';
}
export function isNumberLike(number) {
  if (isNaN(number) || number === 'NaN') {
    return true;
  }
  
  number = Number(number);
  
  return !!(number || number === 0);
}
export function isObject(object) {
  return !!object && (toStringTag(object) === 'Object' || typeof object === 'object' || object instanceof Object);
}
export function isPromise(promise) {
  return toStringTag(promise) === 'Promise';
}
export function isRegExp(regexp) {
  return toStringTag(regexp) === 'RegExp';
}
export function isString(string) {
  return toStringTag(string) === 'String';
}
export function isUndefined(undef) {
  return typeof undef === 'undefined';
}