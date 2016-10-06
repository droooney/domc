/**
 * @module constants/constructors
 * @private
 * @description Exports constructors levels.
 */

/**
 * @const
 * @type {Array[]}
 */
var constructors = [[], [], []];

/**
 * @module helpers/toStringTag
 * @private
 * @description Exports toStringTag method.
 */

/**
 * @function toStringTag
 * @param {*} object - Object to get toStringTag of.
 * @returns {String} Cut string.
 * @description Cut "Type" string from "[object Type]" string that gotten from {}.toString,call(object).
 */
function toStringTag(object) {
  return {}.toString.call(object).replace(/^\[object |]$/g, '');
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/**
 * @module helpers/checkTypes
 * @private
 * @mixin
 * @description Exports is<Type> methods.
 */

/**
 * @function isArray
 * @public
 * @param {*} value - Value to check if it is an array.
 * @returns {Boolean} If the argument is an array or not.
 * 
 * @example
 * isArray([]);                             // true
 * isArray(0);                              // true
 * isArray(document.querySelectorAll('*')); // false
 */
function isArray(value) {
  return toStringTag(value) === 'Array';
}

/**
 * @function isArrayLike
 * @public
 * @param {*} value - Value to check if it is array-like.
 * @returns {Boolean} If the argument is array-like or not.
 * @description Basically returns if the argument has non-negative integer "length" property and isn't a function.
 * 
 * @example
 * isArrayLike([]);                             // true
 * isArrayLike('');                             // true
 * isArrayLike(() => {});                       // false
 * isArrayLike(document.querySelectorAll('*')); // true
 */
function isArrayLike(value) {
  if (!value || isFunction(value)) {
    return false;
  }

  var length = value.length;

  return isInteger(length) && length >= 0;
}

/**
 * @function isBoolean
 * @public
 * @param {*} value - Value to check if it is a boolean.
 * @returns {Boolean} If the argument is a boolean or not.
 * 
 * @example
 * isBoolean(true);               // true
 * isBoolean(new Boolean(false)); // true
 * isBoolean(null);               // false
 */
function isBoolean(value) {
  return toStringTag(value) === 'Boolean';
}

/**
 * @function isDate
 * @public
 * @param {*} value - Value to check if it is a date.
 * @returns {Boolean} If the argument is a date or not.
 * 
 * @example
 * isDate(new Date());                 // true
 * isDate('1999-12-31T23:59:59.999Z'); // false
 */
function isDate(value) {
  return toStringTag(value) === 'Date';
}

/**
 * @function isDateLike
 * @public
 * @param {*} value - Value to check if it is date-like.
 * @returns {Boolean} If the argument is date-like or not.
 * @description Basically returns if new Date(argument) is not invalid date.
 * 
 * @example
 * isDateLike(new Date());                 // true
 * isDateLike('1999-12-31T23:59:59.999Z'); // true
 * isDateLike(0);                          // true
 */
function isDateLike(value) {
  value = new Date(value);

  return !isNaN(value.getTime());
}

/**
 * @function isElement
 * @public
 * @param {*} value - Value to check if it is an element.
 * @returns {Boolean} If the argument is element or not.
 *
 * @example
 * isElement(document.querySelector('html')); // true
 */
function isElement(value) {
  return (/Element$/.test(toStringTag(value))
  );
}

/**
 * @function isFinite
 * @public
 * @param {*} value - Value to check if it is finite.
 * @returns {Boolean} If the argument is finite or not.
 * 
 * @example
 * isFinite(0);        // true
 * isFinite('0');      // false
 * isFinite(Infinity); // false
 * isFinite(NaN);      // false
 */
function isFinite(value) {
  if (!isNumber(value)) {
    return false;
  }

  value = Number(value);

  return !isNaN(value) && value !== Infinity && value !== -Infinity;
}

/**
 * @function isFunction
 * @public
 * @param {*} value - Value to check if it is a function.
 * @returns {Boolean} If the argument is a function or not.
 * 
 * @example
 * isFunction(() => {});            // true
 * 
 * const func = () => {};
 * Object.setPrototypeOf(func, {});
 * isFunction(func);                // true
 */
function isFunction(value) {
  return toStringTag(value) === 'Function' || typeof value === 'function';
}

/**
 * @function isInteger
 * @public
 * @param {*} value - Value to check if it is an integer.
 * @returns {Boolean} If the argument is an integer or not.
 *
 * @example
 * isInteger(0);             // true
 * isInteger(0.1);           // false
 * isInteger(new Number(0)); // true
 * isInteger('0');           // false
 * isInteger(Infinity);      // false
 * isInteger(NaN);           // false
 */
function isInteger(value) {
  return isNumber(value) && value % 1 === 0;
}

/**
 * @function isIntegerLike
 * @public
 * @param {*} value - Value to check if it is integer-like.
 * @returns {Boolean} If the argument is integer-like or not.
 *
 * @example
 * isIntegerLike(0);             // true
 * isIntegerLike(new Number(0)); // true
 * isIntegerLike(0.1);           // false
 * isIntegerLike('0');           // true
 */
function isIntegerLike(value) {
  value = parseInt(Number(value));

  return !!(value || value === 0);
}

/**
 * @function isNaN
 * @public
 * @param {*} value - Value to check if it is NaN.
 * @returns {Boolean} If the argument is NaN or not.
 *
 * @example
 * isNaN(0);               // false
 * isNaN('NaN');           // false
 * isNaN(NaN);             // true
 * isNaN(new Number(NaN)); // true
 */
function isNaN(value) {
  if (!isNumber(value)) {
    return false;
  }

  value = Number(value);

  return value !== value;
}

/**
 * @function isNull
 * @public
 * @param {*} value - Value to check if it is null.
 * @returns {Boolean} If the argument is null or not.
 *
 * @example
 * isNull(null);      // true
 * isNull(undefined); // false
 */
function isNull(value) {
  return value === null;
}

/**
 * @function isNullOrUndefined
 * @public
 * @param {*} value - Value to check if it is null or undefined.
 * @returns {Boolean} If the argument is null or undefined or not.
 *
 * @example
 * isNullOrUndefined(null);      // true
 * isNullOrUndefined(undefined); // true
 * isNullOrUndefined(false);     // false
 */
function isNullOrUndefined(value) {
  return value === null || typeof value === 'undefined';
}

/**
 * @function isNumber
 * @public
 * @param {*} value - Value to check if it is a number.
 * @returns {Boolean} If the argument is a number or not.
 *
 * @example
 * isNumber(0);             // true
 * isNumber(new Number(0)); // true
 * isNumber(NaN);           // true
 * isNumber('0');           // false
 */
function isNumber(value) {
  return toStringTag(value) === 'Number';
}

/**
 * @function isNumberLike
 * @public
 * @param {*} value - Value to check if it is number-like.
 * @returns {Boolean} If the argument is number-like or not.
 *
 * @example
 * isNumberLike(0);          // true
 * isNumberLike('0');        // true
 * isNumberLike('Infinity'); // true
 * isNumberLike('NaN');      // true
 * isNumberLike(NaN);        // true
 */
function isNumberLike(value) {
  if (isNaN(value) || value === 'NaN') {
    return true;
  }

  value = Number(value);

  return !!(value || value === 0);
}

/**
 * @function isObject
 * @public
 * @param {*} value - Value to check if it is an object.
 * @returns {Boolean} If the argument is an object or not.
 *
 * @example
 * isObject({});   // true
 * isObject(1);    // false
 * isObject(null); // false
 */
function isObject(value) {
  return !!value && (toStringTag(value) === 'Object' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || value instanceof Object);
}

/**
 * @function isPlainObject
 * @public
 * @param {*} value - Value to check if it is a plain object.
 * @returns {Boolean} If the argument is a plain object or not.
 *
 * @example
 * const obj = {};
 *
 * ifPlainObject(obj); // true
 *
 * Object.setPrototypeOf(object, null);
 *
 * ifPlainObject(obj); // true
 *
 * Object.setPrototypeOf(object, {});
 *
 * ifPlainObject(obj); // false
 */
function isPlainObject(value) {
  if (isPrimitive(value)) {
    return false;
  }

  var proto = Object.getPrototypeOf(value);

  if (isNull(proto)) {
    return true;
  }

  var constructor = proto.constructor;

  return isFunction(constructor) && constructor instanceof constructor && isNull(Object.getPrototypeOf(proto));
}

/**
 * @function isPrimitive
 * @public
 * @param {*} value - Value to check if it is primitive.
 * @returns {Boolean} If the argument is primitive or not.
 *
 * @example
 * isPrimitive(1);             // true
 * isPrimitive({});            // false
 * isPrimitive('');            // true
 * isPrimitive(new Number(0)); // false
 * isPrimitive(true);          // true
 * isPrimitive(Symbol('foo')); // true
 * isPrimitive(null);          // true
 * isPrimitive(undefined);     // true
 */
function isPrimitive(value) {
  return isNull(value) || /^(number|string|boolean|symbol|undefined)$/.test(typeof value === 'undefined' ? 'undefined' : _typeof(value));
}

/**
 * @function isRegExp
 * @public
 * @param {*} value - Value to check if it is a regular expression.
 * @returns {Boolean} If the argument is a regular expression or not.
 *
 * @example
 * isRegExp(/foo/);             // true
 * isRegExp('/foo/');           // false
 * isRegExp(new RegExp('foo')); // true
 */
function isRegExp(value) {
  return toStringTag(value) === 'RegExp';
}

/**
 * @function isString
 * @public
 * @param {*} value - Value to check if it is a string.
 * @returns {Boolean} If the argument is a string or not.
 *
 * @example
 * isString('0');             // true
 * isString(new String('0')); // true
 */
function isString(value) {
  return toStringTag(value) === 'String';
}

/**
 * @function isSymbol
 * @public
 * @param {*} value - Value to check if it is a symbol.
 * @returns {Boolean} If the argument is a symbol or not.
 *
 * @example
 * isSymbol(Symbol('1')); // true
 */
function isSymbol(value) {
  return toStringTag(value) === 'Symbol';
}

/**
 * @function isUndefined
 * @public
 * @param {*} value - Value to check if it is undefined.
 * @returns {Boolean} If the argument is undefined or not.
 *
 * @example
 * isUndefined(null);      // false
 * isUndefined(undefined); // true
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * @module D
 * @private
 * @description Exports D function.
 */

/**
 * @function D
 * @public
 * @param {*} [value] - Any value.
 * @returns {DWrap} Wrap of the argument.
 * @description Function for creating a D-wrap of an object.
 *
 * @example
 * D({});            // Super
 * D(() => {});      // Func
 * D([]);            // Arr
 * D(1);             // Num
 * D('1');           // Str
 * D(new Date());    // Dat
 * D(document.body); // Elem
 */
function D$2(value) {
  for (var i = constructors.length - 1; i >= 0; i--) {
    var levelConstructors = constructors[i];

    for (var k = 0, len = levelConstructors.length; k < len; k++) {
      var _constructor = levelConstructors[k];

      if (value instanceof _constructor.cls) {
        return value;
      }

      if (_constructor.check(value)) {
        return new _constructor.cls(value);
      }
    }
  }
}

/**
 * @module helpers/iterate
 * @private
 * @description Exports iterate method.
 */

/**
 * @callback IterationCallback
 * @param {*} value - Iteration value.
 * @param {String|Number} key - Iteration key.
 * @param {*} object - Initial iterable object.
 */

/**
 * @function iterate
 * @param {(Object|Array|null|undefined)} object - Value to iterate over.
 * @param {IterationCallback} callback - Callback that is called on every iteration.
 * @returns {*} If callback returns not undefined then iterate returns this value.
 * @description Function for iterating over all types of values.
 */
function iterate(object, callback) {
  var array = isArrayLike(object);

  var iterated = 0;

  for (var key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      if (array && iterated++ >= object.length) {
        break;
      }

      var value = callback(object[key], array ? Number(key) : key, object);

      if (!isUndefined(value)) {
        return value;
      }
    }
  }
}

/**
 * @module helpers/assign
 * @private
 * @description Exports Object.assign-like method.
 */

/**
 * @const
 * @function assign
 * @param {Object} target - Object to assign rest of arguments to.
 * @param {...Object} objects - Objects that are assigned to the target.
 * @returns {Object} Target.
 */
function assign$1(target) {
  iterate(arguments, function (source, index) {
    if (index) {
      iterate(source, function (value, key) {
        target[key] = value;
      });
    }
  });

  return target;
}

/**
 * @module helpers/defineProperty
 * @private
 * @description Exports defineProperty and dynamicDefineProperties methods.
 */

/**
 * @callback propertyGeneratorCallback
 * @param {String} name - Name of the property.
 * @returns {*} Generated property.
 */

/**
 * @function dynamicDefineProperties
 * @param {Object} target - Object to define properties for.
 * @param {Array} properties - Object which keys are properties.
 * @param {propertyGeneratorCallback} propertyGenerator - Callback for every property.
 * @returns {void}
 * @description Function for dynamic creating properties based on name of the method.
 */
function dynamicDefineProperties(target, properties, propertyGenerator) {
  iterate(properties, function (name) {
    Object.defineProperty(target, name, {
      value: propertyGenerator(name),
      writable: true,
      enumerable: false,
      configurable: true
    });
  });
}

/**
 * @function defineProperties
 * @param {Object} target - Target to define properties for.
 * @param {Object} properties - Object with properties needed to be assign to the target.
 * @returns {void}
 * @description Function for defining properties of an object.
 */
function defineProperties(target, properties) {
  iterate(properties, function (method, name) {
    if (/^get /.test(name)) {
      Object.defineProperty(target, name.replace(/^get /, ''), {
        get: method,
        set: undefined,
        enumerable: false,
        configurable: true
      });

      return;
    }

    if (/^set /.test(name)) {
      Object.defineProperty(target, name.replace(/^set /, ''), {
        set: method,
        get: undefined,
        enumerable: false,
        configurable: true
      });

      return;
    }

    if (/^get\/set /.test(name)) {
      Object.defineProperty(target, name.replace(/^get\/set /, ''), {
        get: method.get,
        set: method.set,
        enumerable: false,
        configurable: true
      });

      return;
    }

    if (name !== 'Symbol.toStringTag') {
      Object.defineProperty(target, name, {
        value: method,
        writable: true,
        enumerable: false,
        configurable: true
      });
    }
  });
}

/* eslint no-nested-ternary: 0 */
/* eslint no-negated-condition: 0 */
var global$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * @module helpers/Symbol
 * @private
 * @description Exports Symbol class.
 */

var _Symbol = global$1.Symbol || {
  toStringTag: 'Symbol.toStringTag',
  iterator: Math.random().toString(36)
};

/**
 * @module helpers/toArray
 * @private
 * @description Exports toArray method.
 */

/**
 * @function toArray
 * @param {*} value - Any value.
 * @param {Boolean} [createNewArray = false] - If it is needed to create new array.
 * @returns {Array} Create array.
 * @description Function for creating an array of any value.
 */
function toArray$1(value, createNewArray) {
  if (isArray(value) && !createNewArray) {
    return value;
  }

  var array = [];

  if (isArrayLike(value) && !isString(value)) {
    iterate(value, function (value) {
      array.push(value);
    });
  } else {
    array.push(value);
  }

  return array;
}

/**
 * @module constants/validateCheckExpressions
 * @private
 * @description Exports different types of validate expressions for {@link module:helpers/validate}.
 */

/**
 * @callback checkValidityCallback
 * @private
 * @param {*} value - Value to check.
 */

/**
 * @typedef {Object} validateExpr
 * @private
 * @property {String} text - Text of the thrown error.
 * @property {Error} error - Type of the thrown error.
 * @property {checkValidityCallback} check - Callback for checking value.
 */

/**
 * @type {validateExpr[]}
 * @private
 * @description Object of different types of validation.
 */
var checkExpressions = {
  '>0': {
    check: function check(n) {
      return n > 0;
    },
    text: '$n argument must be positive!',
    error: RangeError
  },
  '>=0': {
    check: function check(n) {
      return n >= 0;
    },
    text: '$n argument must be non-negative!',
    error: RangeError
  },
  '<0': {
    check: function check(n) {
      return n < 0;
    },
    text: '$n argument must be negative!',
    error: RangeError
  },
  '<=0': {
    check: function check(n) {
      return n <= 0;
    },
    text: '$n argument must be non-positive!',
    error: RangeError
  },
  '!!': {
    check: isNullOrUndefined,
    text: '$n argument must be not null or undefined!',
    error: TypeError
  },
  array: {
    check: isArray,
    text: '$n argument must be an array!',
    error: TypeError
  },
  'array||!': {
    check: function check(a) {
      return isArray(a) || isNullOrUndefined(a);
    },
    text: '$n argument must be an array, or undefined, or null!',
    error: TypeError
  },
  arrayLike: {
    check: isArrayLike,
    text: '$n argument must be array-like!',
    error: TypeError
  },
  'arrayLike||!': {
    check: function check(a) {
      return isArrayLike(a) || isNullOrUndefined(a);
    },
    text: '$n argument must be array-like, or undefined, or null!',
    error: TypeError
  },
  date: {
    check: isDate,
    text: '$n argument must be a date!',
    error: TypeError
  },
  'date||!': {
    check: function check(d) {
      return isDate(d) || isNullOrUndefined(d);
    },
    text: '$n argument must be a date, or undefined, or null!',
    error: TypeError
  },
  dateLike: {
    check: isDateLike,
    text: '$n argument must be date-like!',
    error: TypeError
  },
  'dateLike||!': {
    check: function check(d) {
      return isDateLike(d) || isNullOrUndefined(d);
    },
    text: '$n argument must be date-like, or undefined, or null!',
    error: TypeError
  },
  function: {
    check: isFunction,
    text: '$n argument must be a function!',
    error: TypeError
  },
  'function||!': {
    check: function check(f) {
      return isFunction(f) || isNullOrUndefined(f);
    },
    text: '$n argument must be a function, or undefined, or null!',
    error: TypeError
  },
  int: {
    check: isInteger,
    text: '$n argument must be an integer!',
    error: TypeError
  },
  'int||!': {
    check: function check(i) {
      return isInteger(i) || isNullOrUndefined(i);
    },
    text: '$n argument must be an integer, or undefined, or null!',
    error: TypeError
  },
  intLike: {
    check: isIntegerLike,
    text: '$n argument must be integer-like!',
    error: TypeError
  },
  'intLike||!': {
    check: function check(i) {
      return isIntegerLike(i) || isNullOrUndefined(i);
    },
    text: '$n argument must be integer-like, or undefined, or null!',
    error: TypeError
  },
  number: {
    check: isNumber,
    text: '$n argument must be a number!',
    error: TypeError
  },
  'number||!': {
    check: function check(n) {
      return isNumber(n) || isNullOrUndefined(n);
    },
    text: '$n argument must be a number, or undefined, or null!',
    error: TypeError
  },
  numberLike: {
    check: isNumberLike,
    text: '$n argument must be number-like!',
    error: TypeError
  },
  'numberLike||!': {
    check: function check(n) {
      return isNumberLike(n) || isNullOrUndefined(n);
    },
    text: '$n argument must be number-like, or undefined, or null!',
    error: TypeError
  },
  object: {
    check: isObject,
    text: '$n argument must be an object!',
    error: TypeError
  },
  'object||!': {
    check: function check(o) {
      return isObject(o) || isNullOrUndefined(o);
    },
    text: '$n argument must be an object, or undefined, or null!',
    error: TypeError
  },
  regexp: {
    check: isRegExp,
    text: '$n argument must be a regular expression!',
    error: TypeError
  },
  'regexp||!': {
    check: function check(r) {
      return isRegExp(r) || isNullOrUndefined(r);
    },
    text: '$n argument must be a regular expression, or undefined, or null!',
    error: TypeError
  },
  string: {
    check: isString,
    text: '$n argument must be a string!',
    error: TypeError
  },
  'string||!': {
    check: function check(s) {
      return isString(s) || isNullOrUndefined(s);
    },
    text: '$n argument must be a string, or undefined, or null!',
    error: TypeError
  }
};

/**
 * @module helpers/validate
 * @private
 * @description Exports validate method.
 */

var numbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];

/**
 * @function validate
 * @private
 * @param {Object} args - Arguments of function.
 * @param {Object} options - Object with validate parameters.
 * @param {String} [name] - Name of the function what called validate.
 * @returns {void}
 * @description Function for checking arguments of other functions.
 */
function validate$1(args, options, name) {
  iterate(options, function (array, number) {
    if (!isArray(array)) {
      array = [array];
    }

    iterate(array, function (checker) {
      checker = checkExpressions[checker];

      if (!checker.check(args[number])) {
        throw new checker.error(checker.text.replace('$n', numbers[number]) + (name ? ' (at ' + name + ')' : ''));
      }
    });
  });
}

/**
 * @module Alphabet
 * @private
 * @mixin
 * @description Exports Alphabet class.
 */

/**
 * @typedef {String} Char
 * @public
 * @description A string of one char.
 */

/**
 * @class Alphabet
 * @public
 * @param {ArrayLike} alphabet - Alphabet to wrap.
 * @returns {Alphabet} Instance of Alphabet.
 * @description Class for alphabet manipulations: add, delete symbols, generate a token from an alphabet,
 * check if an alphabet contains a word.
 *
 * @example
 * new Alphabet(['a', 'b', 'c']);
 */
var Alphabet = function () {
  function Alphabet() {
    var alphabet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, Alphabet);

    var a = {};

    for (var i = 0, length = alphabet.length; i < length; i++) {
      var char = alphabet[i];

      if (!check$1(char)) {
        throw new Error('Each element of an array must be a single char! (in Alphabet)');
      }

      a[char] = char;
    }

    /**
     * @member {Object} Alphabet#$$
     * @public
     * @description The alphabet.
     */
    Object.defineProperty(this, '$$', { value: a });
  }

  /**
   * @method Alphabet#add
   * @public
   * @param {...Char} chars - Chars to add.
   * @returns {Alphabet} Returns this.
   * @description Method for adding new letters to the alphabet.
   *
   * @example
   * const alphabet = new Alphabet(['a', 'b', 'c']);
   *
   * alphabet.add('d', 'e');
   *
   * alphabet.get().$; // ['a', 'b', 'c', 'd', 'e']
   */


  createClass(Alphabet, [{
    key: 'add',
    value: function add() {
      for (var _len = arguments.length, chars = Array(_len), _key = 0; _key < _len; _key++) {
        chars[_key] = arguments[_key];
      }

      for (var i = 0, length = chars.length; i < length; i++) {
        var char = chars[i];

        if (!check$1(char)) {
          throw new Error('Each argument must be a single char! (in Alphabet#add)');
        }

        this.$$[char] = char;
      }

      return this;
    }

    /**
     * @method Alphabet#contains
     * @public
     * @param {String} word - Word to check if it is in the alphabet or not.
     * @returns {Boolean} If the word in the alphabet or not.
     * @description Method that returns if a word is in alphabet or not.
     *
     * @example
     * const alphabet = new Alphabet(['f', 'b', 'o', 'a', 'r']);
     *
     * alphabet.contains('foo'); // true
     * alphabet.contains('bar'); // true
     * alphabet.contains('baz'); // false
     */

  }, {
    key: 'contains',
    value: function contains(word) {
      validate$1([word], ['string'], 'Alphabet#contains');

      var alphabet = this.$$;

      for (var i = 0, length = word.length; i < length; i++) {
        if (!alphabet[word[i]]) {
          return false;
        }
      }

      return true;
    }

    /**
     * @method Alphabet#delete
     * @public
     * @param {...Char} chars - Chars to delete.
     * @returns {Alphabet} Returns this.
     * @description Method for deleting letters from the alphabet.
     *
     * @example
     * const alphabet = new Alphabet(['a', 'b', 'c', 'd']);
     *
     * alphabet.delete('a');
     *
     * alphabet.get().$; // ['b', 'c', 'd']
     *
     * alphabet.delete('b', 'd');
     *
     * alphabet.get().$; // ['c']
     */

  }, {
    key: 'delete',
    value: function _delete() {
      for (var _len2 = arguments.length, chars = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        chars[_key2] = arguments[_key2];
      }

      for (var i = 0, length = chars.length; i < length; i++) {
        var char = chars[i];

        if (!check$1(char)) {
          throw new Error('Each argument must be a single char! (in Alphabet#delete)');
        }

        delete this.$$[char];
      }

      return this;
    }

    /**
     * @method Alphabet#get
     * @returns {Array} Wrap of an array of alphabet letters.
     * @description Method for getting array of alphabet letters.
     *
     * @example
     * new Alphabet(['a', 'b', 'c']).get().$; // ['a', 'b', 'c']
     */

  }, {
    key: 'get',
    value: function get() {
      return Object.keys(this.$$);
    }

    /**
     * @method Alphabet#token
     * @public
     * @param {Number} length - Token length.
     * @returns {String} Token.
     * @description Method for generating random token with given length.
     *
     * @example
     * new Alphabet(['a', 'b', 'c']).token(4); // 'abcb'
     */

  }, {
    key: 'token',
    value: function token(length) {
      validate$1([length], [['intLike', '>0']], 'Alphabet#token');

      var alphabet = Object.keys(this.$$);
      var len = alphabet.length;
      var token = '';

      for (var i = 0; i < length; i++) {
        token += alphabet[Math.floor(Math.random() * len)];
      }

      return token;
    }
  }]);
  return Alphabet;
}();

defineProperties(Alphabet.prototype, defineProperty({}, _Symbol.toStringTag, 'Alphabet'));

function check$1(char) {
  return isString(char) && char.length === 1;
}

/**
 * @function alphabet
 * @public
 * @param {String} string - String to generate an alphabet from.
 * @returns {Alphabet} New instance of Alphabet.
 * @description Function for creating an alphabet from a string that has format like this:
 * '&lt;char1&gt;-&lt;char2&gt; &lt;char3&gt;-&lt;char4&gt;'
 *
 * @example
 * const a1 = alphabet('a-c 1-3');
 * const a2 = alphabet('5-5f-g');
 *
 * a1.get().$; // ['1', '2', '3', 'a', 'b', 'c']
 * a2.get().$; // ['5', 'f', 'g']
 */
function alphabet(string) {
  validate$1([string], ['string']);

  var ranges = string.split(/([\s\S]\-+[\s\S])?/g);
  var length = ranges.length;
  var alphabet = [];

  for (var i = 0; i < length; i++) {
    var range = ranges[i];

    if (!range || range === ' ') {
      continue;
    }

    if (/\-/.test(range) && !/[\s\S]\-+[\s\S]/.test(range)) {
      throw new Error('Wrong part of the string (' + range + ')! (in alphabet)');
    }

    if (/\-/.test(range)) {
      var start = range.charCodeAt(0);
      var end = range.charCodeAt(2);

      if (start > end) {
        throw new Error('Start of the range must be before its end! (in alphabet)');
      }

      for (var k = 0, len = end - start + 1; k < len; k++) {
        alphabet.push(String.fromCharCode(start + k));
      }

      continue;
    }

    if (range.length === 1) {
      alphabet.push(range);
    }
  }

  return new Alphabet(alphabet);
}

/**
 * @module Switcher
 * @private
 * @mixin
 * @description Exports Switcher class.
 */

/**
 * @typedef {'boolean'|'equals'|'strictEquals'|'call'} SwitcherMode
 * @public
 * @description Enum type of switcher modes.
 */

/**
 * @callback SwitcherCallCallback
 * @public
 * @param {*} value - Switcher value.
 * @returns {Boolean|*} On what the callback returns depends if the case is a match (truthy for the match).
 */

/**
 * @callback SwitcherMatchCallback
 * @public
 * @param {...*} args - Arguments from the second argument that switcher was called with.
 * @param {*} value - Switcher value.
 * @param {*} matched - Switcher matched case.
 */

/**
 * @class Switcher
 * @public
 * @param {Object} [cases = {}] - Object of cases.
 * @param {SwitcherMode} [mode = 'equals'] - Switcher mode.
 * @param {*} [defaultValue] - Switcher default value.
 * @returns {Switcher} - Instance of Switcher.
 * @description Switcher class for creating functions working similar to switch (value) {} construction,
 * but with the value assignment. Switcher instance is a function that accepts a value argument and an optional
 * args argument. Args with additional switcher value and matched case
 * are passed into the function of the matched case (if it is a function).
 *
 * @example
 * const switcher = new Switcher();
 * const switcher = new Switcher({
 *   case1: 'value1',
 *   case2: 'value2'
 * });
 * const switcher = new Switcher('strictEquals');
 * const switcher = new Switcher({
 *   case1: 'value1',
 *   case2: 'value2'
 * }, 'strictEquals');
 * const switcher = new Switcher('strictEquals', 'defaultValue');
 * const switcher = new Switcher({
 *   case1: 'value1',
 *   case2: 'value2'
 * }, 'strictEquals', 'defaultValue');
 *
 * // See [switcher]{@link switcher} examples for more information.
 */

var Switcher = function (_Function) {
  inherits(Switcher, _Function);

  function Switcher() {
    var cases = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'equals';

    var _ret;

    var defaultValue = arguments[2];
    classCallCheck(this, Switcher);

    var _this = possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this));

    if (isString(cases)) {
      if (!isUndefined(arguments[1])) {
        defaultValue = mode;
      }

      mode = cases;
      cases = {};
    }

    var eventualCases = [];

    iterate(cases, function (value, Case) {
      eventualCases.push({ case: Case, value: value });
    });

    function switcher(value) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var _switcher$$$ = switcher.$$;
      var mode = _switcher$$$.mode;
      var def = _switcher$$$.default;
      var cases = _switcher$$$.cases;


      var ret = iterate(cases, function (_ref) {
        var val = _ref.value;
        var Case = _ref.case;

        if (mode === 'boolean' && Case ||
        /* eslint eqeqeq: 0 */
        mode === 'equals' && Case == value || mode === 'strictEquals' && Case === value || mode === 'call' && Case(value)) {
          return { case: Case, value: val };
        }
      });

      if (isUndefined(ret)) {
        ret = { value: def };
      }

      if (!isFunction(ret.value)) {
        return ret.value;
      }

      args = toArray$1(args, true);
      args.push(value, ret.case);

      return ret.value.apply(null, args);
    }

    /**
     * @member Switcher#$$
     * @type {Object}
     * @protected
     * @property {Array} cases - Array of cases.
     * @property {SwitcherMode} mode - Switcher mode.
     * @property {*} default - Switcher default value.
     * @description Config parameters.
     */
    Object.defineProperty(switcher, '$$', {
      value: {
        cases: eventualCases,
        mode: mode,
        default: defaultValue
      }
    });
    Object.setPrototypeOf(switcher, Switcher.prototype);

    return _ret = switcher, possibleConstructorReturn(_this, _ret);
  }

  /**
   * @method Switcher#case
   * @public
   * @param {*|SwitcherCallCallback|Array.<*|SwitcherCallCallback>} cases - Case or an array of cases.
   * @param {*|SwitcherMatchCallback} value - Value that has to be assigned or a function
   * that is called with switcher value, if it's the case.
   * @returns {Switcher} Returns this.
   * @description Method for defining new cases.
   *
   * @example
   * const sw = new Switcher()
   *   .case(1, 'one')
   *   .case(2, 'two');
   *
   * sw(1); // 'one'
   * sw(2); // 'two'
   */


  createClass(Switcher, [{
    key: 'case',
    value: function _case(cases, value) {
      var _this2 = this;

      if (!isArray(cases)) {
        cases = [cases];
      }

      iterate(cases, function (Case) {
        _this2.$$.cases.push({ case: Case, value: value });
      });

      return this;
    }

    /**
     * @method Switcher#default
     * @public
     * @param {*} def - New default value.
     * @returns {Switcher} Returns this.
     * @description Method for redefining default switcher value.
     *
     * @example
     * const sw = new Switcher()
     *   .case(1, 'one')
     *   .default('three');
     *
     * sw(1); // 'one'
     * sw(2); // 'three'
     */

  }, {
    key: 'default',
    value: function _default(def) {
      this.$$.default = def;

      return this;
    }

    /**
     * @method Switcher#mode
     * @public
     * @param {SwitcherMode} mode - New switcher mode.
     * @returns {Switcher} Returns this.
     * @description Method for redefining switcher mode.
     *
     * @example
     * const sw = new Switcher()
     *   .mode('strictEquals')
     *   .case(1, 'number')
     *   .case('1', 'string');
     *
     * sw(1);   // 'number'
     * sw('1'); // 'string'
     */

  }, {
    key: 'mode',
    value: function mode(_mode) {
      this.$$.mode = _mode;

      return this;
    }
  }]);
  return Switcher;
}(Function);

defineProperties(Switcher.prototype, defineProperty({}, _Symbol.toStringTag, 'Switcher'));

/**
 * @function switcher
 * @public
 * @param {Object} [cases = {}] - Object of cases.
 * @param {SwitcherMode} [mode = 'equals'] - Switcher mode.
 * @param {*} [defaultValue] - Switcher default value.
 * @returns {Switcher} New instance of Switcher.
 * @description Simple wrap of [new Switcher(...)]{@link Switcher}.
 * 
 * @example
 * const sw = switcher({
 *   1: 'foo',
 *   2: 'bar'
 * });
 * sw(1); // 'foo'
 * sw(2); // 'bar'
 * sw(3); // undefined
 * 
 * @example
 * const sw = switcher()
 *   .case([1, 2], 'foo')
 *   .case(3, 'bar');
 *   
 * sw(1); // 'foo'
 * sw(2); // 'foo'
 * sw(3); // 'bar'
 * 
 * @example
 * const sw = switcher('call')
 *   .case(isArray, 'array')
 *   .case(isString, 'string')
 *   .case(isNumber, 'number')
 *   .default('rest');
 *   
 * sw([]);    // 'array'
 * sw('foo'); // 'string'
 * sw(123);   // 'number'
 * sw({});    // 'rest'
 * 
 * @example
 * const sw = switcher({
 *   1: (value) => {
 *     console.log(value + 1);
 *   },
 *   2: () => {
 *     console.log(value - 1);
 *   }
 * });
 * 
 * sw(1); // 2
 * sw(2); // 1
 * 
 * @example
 * const sw = switcher({
 *   first: (array) => array[0],
 *   last: (array) => array[array.length - 1]
 * }, 'equals', (array, index) => array[index]);
 * const array = [1, 2, 3, 4];
 * 
 * sw('first', [array]); // 1
 * sw('last', [array]);  // 4
 * sw(1, [array]);       // 2
 * sw(2, [array]);       // 3
 */
function switcher(cases, mode, defaultValue) {
  return new (Function.prototype.bind.apply(Switcher, [null].concat(Array.prototype.slice.call(arguments))))();
}

/**
 * @function when
 * @public
 * @param {Boolean|*} condition - Condition used for returning the proper value.
 * @param {*} value1 - Value if the condition is truthy.
 * @param {*} value2 - Value if the condition is falsey.
 * @returns {*} value1 or value2.
 * @description Synonym for
 * [ternary operator]{@link https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operators/Conditional_Operator}.
 * 
 * @example
 * when(true, 'true', 'false'); // 'true'
 */
function when(condition, value1, value2) {
  return condition ? value1 : value2;
}

/**
 * @module Super
 * @private
 * @mixin
 * @description Exports Super class.
 */

/**
 * @typedef {Super|Arr|Func|Elem|Str|Num|Dat|BlobObject} DWrap
 * @public
 * @description Any kind of D-Wrap.
 */

/**
 * @typedef {String|Number|null} Key
 * @public
 * @description Key type used in many methods.
 */

/**
 * @typedef {TreeElement[]} Tree
 * @public
 */

/**
 * @typedef {Object} TreeElement
 * @public
 * @property {Key} key - Tree element key.
 * @property {*} value - Tree element value.
 * @description {@link Tree} element.
 */

/**
 * @callback DeepIterationCallback
 * @public
 * @param {*} value - Current iteration value.
 * @param {String|Number} key - Current iteration key/index.
 * @param {*} object - Iteration object.
 * @param {Tree} tree - Tree of { key, value } elements.
 */

/**
 * @callback DeepReduceCallback
 * @public
 * @param {*} previousValue - Previous value.
 * @param {*} value - Current iteration value.
 * @param {String|Number} key - Current iteration key/index.
 * @param {*} object - Iteration object.
 * @param {Tree} tree - Tree of { key, value } elements.
 */

/**
 * @callback IterationCallback
 * @public
 * @param {*} value - Current iteration value.
 * @param {String|Number} key - Current iteration key/index.
 * @param {*} object - Iteration object.
 */

/**
 * @callback JSONCallback
 * @public
 * @param {String|null} key - Current value.
 * @param {*} value - Current key.
 * @param {Object} object - Iteration object.
 */

/**
 * @callback ObjectCallback
 * @public
 * @param {Object} newObject - The new object.
 * @param {*} value - Current iteration value.
 * @param {String|Number} key - Current iteration key/index.
 * @param {*} object - Iteration object.
 */

/**
 * @callback ReduceCallback
 * @public
 * @param {*} previousValue - Previous value.
 * @param {*} value - Current iteration value.
 * @param {String|Number} key - Current iteration key/index.
 * @param {*} object - Iteration object.
 */

/**
 * @callback SuperMethod
 * @public
 * @this {DWrap}
 */

var cloneSwitcher = switcher('call', function (object) {
  return object;
}).case(function (object) {
  return new Super(object) === object;
}, function (object) {
  return new (object.proto().$.constructor)(object);
}).case(isElement, function (object, deep) {
  return object.clone(deep);
}).case(isDate, function (object) {
  return new Date(object);
}).case(isRegExp, function (object) {
  return new RegExp(object.source, object.toString().match(/[gimuy]*$/)[0]);
}).case(isArray, function () {
  return [];
}).case(isPlainObject, function () {
  return {};
});

/**
 * @class Super
 * @public
 * @param {*} [object] - An object to wrap.
 * @returns {DWrap} Instance of Super.
 * @description Wrap of any value. And there is no way to create a nested wrap.
 *
 * @example
 * new Super({}); // Super
 */

var Super = function () {
  function Super(object) {
    classCallCheck(this, Super);

    if (object instanceof Super) {
      return object;
    }

    /**
     * @member Super#$
     * @type {*}
     * @public
     * @description Wrapped object.
     */
    Object.defineProperty(this, '$', { value: object });
  }

  /**
   * @method Super.addStaticProperties
   * @public
   * @param {String|Object} property - Either a string of a property or an object
   * with properties keys and values values.
   * @param {Object} [value] - If a property parameter is a string this has to be a property value.
   * @returns {this} Returns this.
   * @description Sets static properties for DWrap constructors.
   *
   * @example
   * Super.addStaticProperties('cool', 42);
   * Super.addStaticProperties('superCool', 42*42);
   */


  createClass(Super, [{
    key: 'assign',


    /**
     * @method Super#assign
     * @public
     * @param {...(Object|Super|*)} objects - Objects to be assigned to the object.
     * @returns {DWrap} Returns this.
     * @description Synonym for
     * [Object.assign]
     * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign}.
     *
     * @example
     * new Super({ a: 1, b: 2 }).assign({ a: 3 }, { c: 3, d: 4 }, { d: 5 }).$; // { a: 3, b: 2, c: 3, d: 5 }
     */
    value: function assign() {
      for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
        objects[_key] = arguments[_key];
      }

      var object = this.$;

      iterate(object && arguments, function (o) {
        iterate(new Super(o).$, function (value, key) {
          object[key] = value;
        });
      });

      return this;
    }

    /**
     * @method Super#average
     * @public
     * @param {IterationCallback} [callback = null] - Callback that is passed to {@link Super#sum}.
     * @returns {Number} Average value.
     * @description Synonym for object.sum(callback) / object.count.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).average();                         // 2
     * new Super({ a: 1, b: 2, c: 5 }).average((value) => value * value); // 10
     */

  }, {
    key: 'average',
    value: function average() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      validate$1([callback], ['function||!'], 'Super#average');

      return this.sum(callback) / this.count;
    }

    /**
     * @method Super#call
     * @public
     * @param {SuperMethod} func - Function to be called with this context.
     * @param {...*} args - Arguments to be called with.
     * @returns {*} Return of function call.
     * @description Synonym for func.call(DObject, ...args);
     *
     * @example
     * new Super({ a: 1 }).call(function (b, c) {
     *   return this.a + b + c;
     * }, 2, 3); // 6
     */

  }, {
    key: 'call',
    value: function call(func) {
      validate$1([func], ['function'], 'Super#call');

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return func.apply(this, args);
    }

    /**
     * @method Super#clone
     * @returns {DWrap} New object.
     * @description Method assigns properties of the object to an empty one and returns the new one.
     *
     * @example
     * new Super({ a: 1, b: { c: 2 } }).clone().$; // { a: 1, b: { c: 2 } }
     */

  }, {
    key: 'clone',
    value: function clone() {
      var object = this.$;
      var clone = cloneSwitcher(object, [object, false]);

      if (clone !== object) {
        iterate(object, function (value, key) {
          clone[key] = value;
        });
      }

      return new this.constructor(clone);
    }

    /**
     * @member Super#count
     * @type {Number}
     * @public
     * @readonly
     * @description Returns number of own enumerable keys of the object.
     *
     * @example
     * new Super({ a: 1, b: 2 }).count; // 2
     */

  }, {
    key: 'create',


    /**
     * @method Super#create
     * @public
     * @param {Object} [descriptors] - Descriptors passed to Object.create.
     * @returns {DWrap} New instance of D-Wrap.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     * @description Synonym for
     * [Object.create]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create}.
     *
     * @example
     * new Super({}).create({
     *   a: {
     *     value: 1,
     *     enumerable: false,
     *     writable: true,
     *     configurable: false
     *   }
     * }).$; // { a: 1 }
     */
    value: function create(descriptors) {
      return D$2(isPrimitive(this.$) ? undefined : Object.create(this.$, descriptors));
    }

    /**
     * @method Super#deepAssign
     * @public
     * @param {...*} objects - Objects to be assigned to the object.
     * @returns {DWrap} Returns this.
     * @description Deep analogue of {@link Super#assign}.
     *
     * @example
     * new Super({ a: 1 }).deepAssign(
     *   {
     *     b: {
     *       c: 2
     *     }
     *   },
     *   {
     *     a: {
     *       b: 1
     *     }
     *   },
     *   {
     *     a: {
     *       c: {
     *         d: 1
     *       }
     *     },
     *     b: 2
     *   },
     *   null
     * });
     * // {
     * //   a: {
     * //     b: 1,
     * //     c: {
     * //       d: 1
     * //     }
     * //   },
     * //   b: 2,
     * // }
     */

  }, {
    key: 'deepAssign',
    value: function deepAssign() {
      for (var _len3 = arguments.length, objects = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        objects[_key3] = arguments[_key3];
      }

      var object = this.$;

      if (isPrimitive(object)) {
        return this;
      }

      iterate(arguments, function (o) {
        _deepAssign(object, o);
      });

      return this;
    }

    /**
     * @method Super#deepClone
     * @public
     * @returns {DWrap} New instance of DWrap.
     * @description Deep cloning method. Clones plain objects, arrays, regular expressions and elements, the rest stays the same.
     *
     * @example
     * new Super({ a: 1, b: [2, 3], c: { d: 4 } }).deepClone().$;
     * // {
     * //   a: 1,
     * //   b: [2, 3],
     * //   c: { d: 4 }
     * // }
     */

  }, {
    key: 'deepClone',
    value: function deepClone() {
      return new this.constructor(_deepClone(this.$));
    }

    /**
     * @method Super#deepEquals
     * @public
     * @param {*} [object] - Object to compare to.
     * @returns {Boolean} - If the objects are deep equal or not.
     * @description Method for deep comparison of two objects.
     *
     * @example
     * new Super({ a: 1 }).deepEquals({ a: '1' }); // true
     * new Super(/1/).deepEquals(/1/);             // true
     */

  }, {
    key: 'deepEquals',
    value: function deepEquals() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return deepEqual(this.$, object, false);
    }

    /**
     * @method Super#deepEvery
     * @public
     * @param {DeepIterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy iteration goes on and if falsey it stops.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @returns {Boolean} If all the callback calls returned truthy value.
     * @description Returns boolean if all the callback calls returned truthy value.
     * Otherwise false. Deep analogue of {@link Super#every}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepEvery((value) => value < 4); // true
     * new Super({ a: {}, b: {}, c: {} }).deepEvery(() => false);              // true
     */

  }, {
    key: 'deepEvery',
    value: function deepEvery(callback, n) {
      if (arguments.length === 1 && !isFunction(callback)) {
        n = callback;
        callback = Boolean;
      } else if (arguments.length === 1) {
        n = Infinity;
      } else if (!arguments.length) {
        n = Infinity;
        callback = Boolean;
      }

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepEvery');

      n = Number(n);

      return _deepEvery(this.$, callback, n, [{ key: null, value: this.$ }]);
    }

    /**
     * @method Super#deepFilter
     * @public
     * @param {DeepIterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy the element is included and if falsey it's excluded.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @returns {DWrap} New D-Wrap of filtered object.
     * @description Returns filtered by the callback object. Deep analogue of {@link Super#filter}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepFilter((value) => value%2).$;     // { a: 1, b: { d: 3 } }
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepFilter((value) => value === 1).$; // { a: 1 }
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepFilter((value) => value > 3).$;   // {}
     */

  }, {
    key: 'deepFilter',
    value: function deepFilter(callback, n) {
      if (arguments.length === 1 && !isFunction(callback)) {
        n = callback;
        callback = Boolean;
      } else if (arguments.length === 1) {
        n = Infinity;
      } else if (!arguments.length) {
        n = Infinity;
        callback = Boolean;
      }

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepFilter');

      var filtered = _deepFilter(this.$, callback, n, [{ key: null, value: this.$ }]);

      return D$2(isNullOrUndefined(filtered) ? filtered : filtered || {});
    }

    /**
     * @method Super#deepFind
     * @public
     * @param {DeepIterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy iteration stops and if falsey it continues.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @returns {Tree|null} Tree of { key, value } if something found and null if not.
     * @description Returns tree of the elements if something found and null if nothing found.
     * Deep analogue of {@link Super#find}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepFind((value) => value === 2);
     * // [
     * //   { key: 'c', value: 2 },
     * //   { key: 'b', value: { c: 2, d: 3 } },
     * //   { key: null, value: <initial object> }
     * // ]
     */

  }, {
    key: 'deepFind',
    value: function deepFind(callback, n) {
      if (arguments.length === 1 && !isFunction(callback)) {
        n = callback;
        callback = Boolean;
      } else if (arguments.length === 1) {
        n = Infinity;
      } else if (!arguments.length) {
        n = Infinity;
        callback = Boolean;
      }

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepFind');

      return _deepFind(this.$, callback, n, [{ key: null, value: this.$ }]);
    }

    /**
     * @method Super#deepForEach
     * @public
     * @param {DeepIterationCallback} callback - Called on each iteration.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @returns {DWrap} Returns this.
     * @description Method for iterating over any object. Deep analogue of {@link Super#forEach}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepForEach((value, key, object) => object[key] = value * value).$;
     * // { a: 1, b: { c: 4, d: 9 } }
     */

  }, {
    key: 'deepForEach',
    value: function deepForEach(callback) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepForEach');

      n = Number(n);

      _deepForEach(this.$, callback, n, [{ key: null, value: this.$ }]);

      return this;
    }

    /**
     * @method Super#deepFreeze
     * @public
     * @returns {DWrap} Returns this.
     * @description Deep analogue of {@link Super#freeze}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepFreeze(); // Super
     */

  }, {
    key: 'deepFreeze',
    value: function deepFreeze() {
      _deepFreeze(this.$);

      return this;
    }

    /**
     * @method Super#deepMap
     * @public
     * @param {DeepIterationCallback} callback - Called on each iteration.
     * Return value is used for creating a new object.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @returns {DWrap} D-Wrap of the new object.
     * @description Returns a wrap of a new object using the callback. Deep analogue of {@link Super#map}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepMap((value) => value * value).$;
     * // { a: 1, b: { c: 4, d: 9 } }
     */

  }, {
    key: 'deepMap',
    value: function deepMap(callback) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepMap');

      n = Number(n);

      return D$2(_deepMap(this.$, callback, n, [{ key: null, value: this.$ }]));
    }

    /**
     * @method Super#deepReduce
     * @public
     * @param {DeepReduceCallback} callback - Called on each iteration.
     * Return value is passed to the next callback call.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @param {*} [IV = <first value>|undefined] - Initial value.
     * @returns {*} Modified IV.
     * @description Returns modified IV. Deep analogue of {@link Super#reduce}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepReduce((sum, value) => sum + value * value, Infinity, 0); // 14
     */

  }, {
    key: 'deepReduce',
    value: function deepReduce(callback) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var IV = arguments[2];

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepReduce');

      n = Number(n);

      var object = this.$;
      var tree = [{ key: null, value: this.$ }];

      if (arguments.length < 3) {
        return _deepReduce(object, callback, n, false, undefined, tree).IV;
      }

      return _deepReduce(object, callback, n, false, { IV: IV }, tree).IV;
    }

    /**
     * @method Super#deepSome
     * @public
     * @param {DeepIterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy iteration stops and if falsey it continues.
     * @param {Number} [n = Infinity] - Iteration depth.
     * @returns {Boolean} If all the callback calls returned truthy value.
     * @description Returns true if some of the callback calls returned truthy value.
     * Otherwise false. Deep analogue of {@link Super#some}.
     *
     * @example
     * new Super({ a: 1, b: { c: 2, d: 3 } }).deepSome((value) => value > 4); // false
     * new Super({ a: {}, b: {}, c: {} }).deepSome(() => true);               // false
     */

  }, {
    key: 'deepSome',
    value: function deepSome(callback, n) {
      if (arguments.length === 1 && !isFunction(callback)) {
        n = callback;
        callback = Boolean;
      } else if (arguments.length === 1) {
        n = Infinity;
      } else if (!arguments.length) {
        n = Infinity;
        callback = Boolean;
      }

      validate$1([callback, n], ['function', ['numberLike', '>0']], 'Super#deepSome');

      n = Number(n);

      return _deepSome(this.$, callback, n, [{ key: null, value: this.$ }]);
    }

    /**
     * @method Super#deepStrictEquals
     * @public
     * @param {*} [object] - Object to compare to.
     * @returns {Boolean} - If the objects are deep strict equal or not.
     * @description Method for deep strict comparison of two objects.
     *
     * @example
     * new Super({ a: 1 }).deepStrictEquals({ a: '1' }); // false
     * new Super(/1/).deepStrictEquals(/1/);             // true
     */

  }, {
    key: 'deepStrictEquals',
    value: function deepStrictEquals() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return deepEqual(this.$, object, true);
    }

    /**
     * @method Super#define
     * @param {String|Object} property - Either a string of a property or a descriptors object.
     * @param {Object} [descriptor] - If a property parameter is a string this has to be a property descriptor.
     * @returns {DWrap} Returns this.
     * @description Synonym for both
     * [Object.defineProperty]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty}
     * and
     * [Object.defineProperties]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties}.
     *
     * @example
     * new Super({}).define('a', {
     *   value: 1,
     *   enumerable: false,
     *   writable: true,
     *   configurable: false
     * }).$; // { a: 1 }
     * new Super({}).define({
     *   a: {
     *     value: 1,
     *     enumerable: false,
     *     writable: true,
     *     configurable: false
     *   }
     * }).$; // { a: 1 }
     */

  }, {
    key: 'define',
    value: function define(property, descriptor) {
      if (arguments.length >= 2) {
        property = defineProperty({}, property, descriptor);
      }

      property = new Super(property).$;

      if (isObject(this.$)) {
        Object.defineProperties(this.$, property);
      }

      return this;
    }

    /**
     * @method Super#delete
     * @public
     * @param {...String} props - List of properties to delete.
     * @returns {DWrap} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete
     * @description Synonym for multiple
     * ["delete" operator]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/delete}.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).delete('c', 'a').$; // { b: 2 }
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var object = this.$;

      for (var _len4 = arguments.length, props = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        props[_key4] = arguments[_key4];
      }

      iterate(object && props, function (property) {
        delete object[property];
      });

      return this;
    }

    /**
     * @method Super#equals
     * @public
     * @param {*} [object] - Object to compare.
     * @returns {Boolean} If the objects are equal or not.
     * @description Returns true if objects are equal using '==' operator and false if not. NaNs are considered to be equal.
     *
     * @example
     * new Super(3).equals('3');   // true
     * new Super(NaN).equals(NaN); // true
     */

  }, {
    key: 'equals',
    value: function equals(object) {
      var o = this.$;

      object = new Super(object).$;

      /* eslint eqeqeq: 0 */
      return o == object || isNaN(o) && isNaN(object);
    }

    /**
     * @method Super#every
     * @public
     * @param {IterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy iteration goes on and if falsey it stops.
     * @returns {Boolean} If all the callback calls returned truthy value.
     * @description Returns boolean if all the callback calls returned truthy value.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).every((value) => value < 4); // true
     * new Super({}).every(() => false);                            // true
     */

  }, {
    key: 'every',
    value: function every() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Boolean;

      validate$1([callback], ['function'], 'Super#every');

      return iterate(this.$, function (value, key, object) {
        if (!callback(value, key, object)) {
          return false;
        }
      }) !== false;
    }

    /**
     * @method Super#filter
     * @public
     * @param {IterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy the element is included and if falsey it's excluded.
     * @returns {DWrap} New D-Wrap of filtered object.
     * @description Returns filtered by the callback object.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).filter((value) => value%2).$; // { a: 1, c: 3 }
     * new Super(null).filter((value) => value%2).$;                 // null
     */

  }, {
    key: 'filter',
    value: function filter() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Boolean;

      validate$1([callback], ['function'], 'Super#filter');

      var object = this.$;
      var array = isArrayLike(object);

      /* eslint no-nested-ternary: 0 */
      var o = array ? [] : isNullOrUndefined(object) ? object : {};

      iterate(object, function (value, key) {
        if (callback(value, key, object)) {
          if (array) {
            o.push(value);
          } else {
            o[key] = value;
          }
        }
      });

      return D$2(o);
    }

    /**
     * @method Super#find
     * @public
     * @param {IterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy iteration stops and if falsey it continues.
     * @returns {{ key: Key, value: * }|null} { key, value } if found and null if not.
     * @description Returns found { key, value } if something found and null if nothing found.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).find((value) => value === 2); // { key: 'b', value: 2 }
     * new Super([1, 2, 3]).find((value) => value === 2);            // { key: 1, value: 2 }
     */

  }, {
    key: 'find',
    value: function find(callback) {
      validate$1([callback], ['function'], 'Super#find');

      return iterate(this.$, function (value, key, object) {
        if (callback(value, key, object)) {
          return { key: key, value: value };
        }
      }) || null;
    }

    /**
     * @method Super#forEach
     * @public
     * @param {IterationCallback} callback - Called on each iteration.
     * @returns {DWrap} Returns this.
     * @description Method for iterating over any object.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).forEach((value, key, object) => {
     *   object[key] = value * value;
     * }).$; // { a: 1, b: { c: 4, d: 5 } }
     */

  }, {
    key: 'forEach',
    value: function forEach(callback) {
      validate$1([callback], ['function'], 'Super#forEach');

      iterate(this.$, function (value, key, object) {
        callback(value, key, object);
      });

      return this;
    }

    /**
     * @method Super#freeze
     * @public
     * @returns {DWrap} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
     * @description Synonym for
     * [Object.freeze]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze}.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).freeze(); // Super
     */

  }, {
    key: 'freeze',
    value: function freeze() {
      Object.freeze(this.$);

      return this;
    }

    /**
     * @method Super#get
     * @public
     * @param {String|Object.<String, Function>} property - Either a string of a property or a getters object.
     * @param {Function} [getter] - If a property parameter is a string this has to be a getter function.
     * @returns {DWrap} Returns this.
     * @description Method for defining getters.
     *
     * @example
     * const object1 = new Super({}).get('a', () => 1).$;
     * object1.a; // 1
     *
     * const object2 = new Super({}).get({
     *   a: () => 2
     * }).$;
     * object2.a; // 2
     */

  }, {
    key: 'get',
    value: function get(property, getter) {
      if (arguments.length >= 2) {
        property = defineProperty({}, property, getter);
      }

      var object = this.$;

      iterate(isObject(object) && new Super(property).$, function (getter, property) {
        Object.defineProperty(object, property, { get: getter });
      });

      return this;
    }

    /**
     * @method Super#has
     * @public
     * @param {String|*} key - Property to check.
     * @returns {Boolean} Returns true if the object has the key and false if not.
     * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/in
     * @description Synonym for
     * ["in" operator]{@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/in}.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).has('b'); // true
     */

  }, {
    key: 'has',
    value: function has(key) {
      var object = this.$;

      if (!isObject(object)) {
        return false;
      }

      return key in object;
    }

    /**
     * @method Super#hasOwn
     * @public
     * @param {String|*} key - Property to check.
     * @returns {Boolean} Returns true if the object has its own key and false if not.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     * @description Synonym for
     * [Object#hasOwnProperty]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty}.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).hasOwn('b');              // true
     * new Super({ a: 1, b: 2, c: 3 }).hasOwn('hasOwnProperty'); // false
     */

  }, {
    key: 'hasOwn',
    value: function hasOwn(key) {
      var object = this.$;

      if (!isObject(object)) {
        return false;
      }

      return {}.hasOwnProperty.call(object, key);
    }

    /**
     * @method Super#instanceof
     * @public
     * @param {Function} constructor - Constructor to check.
     * @returns {Boolean} If the object is an instance of constructor.
     * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof
     * @description Synonym for
     * ["instanceof" operator]{@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof}.
     */

  }, {
    key: 'instanceof',
    value: function _instanceof(constructor) {
      return this.$ instanceof constructor;
    }

    /**
     * @method Super#isFrozen
     * @public
     * @returns {Boolean} If the object is frozen.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
     * @description Synonym for
     * [Object.isFrozen]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen}.
     *
     * @example
     * new Super({}).freeze().isFrozen(); // true
     */

  }, {
    key: 'isFrozen',
    value: function isFrozen() {
      return Object.isFrozen(this.$);
    }

    /**
     * @method Super#json
     * @public
     * @param {JSONCallback|String[]} [replacer] - See the link.
     * @param {String|Number} [space] - See the link.
     * @returns {String} JSON string.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
     * @description Synonym for
     * [JSON.stringify]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify}.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).json(); // '{"a":1,"b":2,"c":3}'
     * new Super({ a: 1, b: 2, c: 3 }).json('    ');
     * // {
     * //     "a": 1,
     * //     "b": 2,
     * //     "c": 3
     * // }
     * new Super({ a: 1, b: 2, c: 3 }).json((key, value) => {
     *   if (typeof value === 'number') {
     *     return value%2 ? key + value0 : undefined;
     *   }
     *
     *   return value;
     * }, 2);
     * // {
     * //   "a": "a1",
     * //   "c": "c3"
     * // }
     */

  }, {
    key: 'json',
    value: function json(replacer, space) {
      if (arguments.length === 1 && !isFunction(replacer) && !isArray(replacer)) {
        [].unshift.call(arguments, null);
      }

      [].unshift.call(arguments, this.$);

      return JSON.stringify.apply(JSON, arguments);
    }

    /**
     * @method Super#keyOf
     * @public
     * @param {*} value - Value to find.
     * @returns {String|Number|null} A key or an index if found and null if not.
     * @description Method for finding equal to the argument value in the object. NaNs are considered to be equal.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).keyOf(2);   // 'b'
     * new Super({ a: 1, b: 2, c: 3 }).keyOf('2'); // 'b'
     */

  }, {
    key: 'keyOf',
    value: function keyOf(value) {
      var key = iterate(this.$, function (val, key) {
        if (val == value || isNaN(val) && isNaN(value)) {
          return key;
        }
      });

      return isUndefined(key) ? null : key;
    }

    /**
     * @method Super#keyOfStrict
     * @public
     * @param {*} value - Value to find.
     * @returns {String|Number|null} A key or an index if found and null if not.
     * @description Method for finding strict equal to the argument value in the object. NaNs are considered to be equal.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).keyOfStrict(2);   // 'b'
     * new Super({ a: 1, b: 2, c: 3 }).keyOfStrict('2'); // 'b'
     */

  }, {
    key: 'keyOfStrict',
    value: function keyOfStrict(value) {
      var key = iterate(this.$, function (val, key) {
        if (val === value || isNaN(val) && isNaN(value)) {
          return key;
        }
      });

      return isUndefined(key) ? null : key;
    }

    /**
     * @method Super#keys
     * @public
     * @returns {DWrap} A wrap of the keys array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
     * @description Synonym for
     * [Object.keys]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).keys().$; // ['a', 'b', 'c']
     * new Super(null).keys().$;                 // []
     */

  }, {
    key: 'keys',
    value: function keys() {
      var object = this.$;

      return D$2(isObject(object) ? Object.keys(object) : []);
    }

    /**
     * @method Super#map
     * @public
     * @param {IterationCallback} callback - Called on each iteration.
     * Return value is used for creating a new object.
     * @returns {DWrap} D-Wrap of the new object.
     * @description Returns a wrap of a new object using the callback.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).map((value) => value * 2).$; // { a: 2, b: 4, c: 6 }
     * new Super(null).map((value) => value * 2).$;                 // null
     */

  }, {
    key: 'map',
    value: function map(callback) {
      validate$1([callback], ['function'], 'Super#map');

      var object = this.$;
      var o = isArrayLike(object) ? [] : isNull(object) ? null : {};

      iterate(object, function (value, key) {
        o[key] = callback(value, key, object);
      });

      return D$2(o);
    }

    /**
     * @method Super#max
     * @public
     * @param {IterationCallback} callback - Called on each iteration.
     * Return value is used for comparison with the previous max value.
     * @returns {{key: Key, value: Number}} Object with max value and key of the max value.
     * @description Method for finding max value in the object.
     * If no callback is present comparison is between values of the object.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).max();                     // { key: 'c', value: 3 }
     * new Super({ a: 1, b: 2, c: 3 }).max((value) => 4 - value); // { key: 'a', value: 3 }
     * new Super({ a: 'a', b: 'b', c: 'c' }).max();               // { key: null, value: -Infinity }
     */

  }, {
    key: 'max',
    value: function max() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      validate$1([callback], ['function||!'], 'Super#max');

      return this.object(function (max, value, key, object) {
        var val = Number(callback ? callback(value, key, object) : value);

        if (val > max.value) {
          max.key = key;
          max.value = val;
        }
      }, { key: null, value: -Infinity }).$;
    }

    /**
     * @method Super#min
     * @public
     * @param {IterationCallback} callback - Called on each iteration.
     * Return value is used for comparison with the previous min value.
     * @returns {{key: Key, value: Number}} Object with min value and key of the min value.
     * @description Method for finding min value in the object.
     * If no callback is present comparison is between values of the object.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).min();                     // { key: 'a', value: 1 }
     * new Super({ a: 1, b: 2, c: 3 }).min((value) => 4 - value); // { key: 'c', value: 1 }
     * new Super({ a: 'a', b: 'b', c: 'c' }).min();               // { key: null, value: Infinity }
     */

  }, {
    key: 'min',
    value: function min() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      validate$1([callback], ['function||!'], 'Super#min');

      return this.object(function (min, value, key, object) {
        var val = Number(callback ? callback(value, key, object) : value);

        if (val < min.value) {
          min.key = key;
          min.value = val;
        }
      }, { key: null, value: Infinity }).$;
    }

    /**
     * @method Super#object
     * @public
     * @param {ObjectCallback} callback - Called on each iteration.
     * @param {Object|*} [object = {}] - Object that is passed to the callback.
     * @returns {DWrap} Wrap of the new object.
     * @description Type of {@link Super#reduce}.
     * The object is passed as an argument into the callback. The output is this object.
     *
     * @example
     * new Super({ a: 1, b: 2 }).object((object, value, key) => {
     *   object[key] = value;
     *   object[key + key] = value * 2;
     * }).$; // { a: 1, aa: 2, b: 2, bb: 4 }
     */

  }, {
    key: 'object',
    value: function object(callback) {
      var _object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      validate$1([callback], ['function'], 'Super#object');

      iterate(this.$, function (value, key, obj) {
        callback(_object, value, key, obj);
      });

      return D$2(_object);
    }

    /**
     * @method Super#prop
     * @public
     * @param {String|Object.<String, *>} property - Either a string of a property or an assigned object.
     * @param {*} [value] - If a property parameter is a string
     * this has to be an assigned value if it's present.
     * @returns {DWrap|*} Returns this if it's a setter or a value if getter.
     * @description Method for getting and setting properties.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).prop('a');              // 1
     * new Super({ a: 1, b: 2, c: 3 }).prop('a', 7).$;         // { a: 7, b: 2, c: 3 }
     * new Super({ a: 1, b: 2, c: 3 }).prop({ a: 7, b: 8 }).$; // { a: 7, b: 8, c: 3 }
     */

  }, {
    key: 'prop',
    value: function prop(property, value) {
      if (arguments.length <= 1 && isString(property)) {
        return this.$ ? this.$[property] : undefined;
      }

      if (arguments.length >= 2) {
        property = defineProperty({}, property, value);
      }

      return this.assign(property);
    }

    /**
     * @method Super#propertyDescriptor
     * @public
     * @param {String} property - Property of the object.
     * @returns {Object|undefined} Property descriptor.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
     * @descriptor Synonym for
     * [Object.getOwnPropertyDescriptor]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor}.
     *
     * @example
     * new Super({ a: 1 }).propertyDescriptor('a');
     * // {
     * //   value: 1,
     * //   enumerable: true,
     * //   writable: true,
     * //   configurable: true
     * // }
     */

  }, {
    key: 'propertyDescriptor',
    value: function propertyDescriptor(property) {
      var object = this.$;

      return isObject(object) ? Object.getOwnPropertyDescriptor(object, property) : undefined;
    }

    /**
     * @method Super#propertyNames
     * @public
     * @returns {DWrap} D-Wrap of the names array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
     * @descriptor Synonym for
     * [Object.getOwnPropertyNames]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames}.
     *
     * @example
     * new Super({ a: 1, b: 2 }).define('c', { value: 3 }).$; // ['a', 'b', 'c']
     */

  }, {
    key: 'propertyNames',
    value: function propertyNames() {
      var object = this.$;

      return D$2(isObject(object) ? Object.getOwnPropertyNames(object) : []);
    }

    /**
     * @method Super#propertySymbols
     * @public
     * @returns {DWrap} D-Wrap of the names array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
     * @descriptor Synonym for
     * [Object.getOwnPropertySymbols]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols}.
     *
     * @example
     * new Super({ [Symbol('foo')]: 1 }).define(Symbol('bar'), { value: 2 }).$; // [Symbol('foo'), Symbol('bar')]
     */

  }, {
    key: 'propertySymbols',
    value: function propertySymbols() {
      var object = this.$;

      return D$2(isObject(object) ? Object.getOwnPropertySymbols(object) : []);
    }

    /**
     * @method Super#proto
     * @public
     * @param {*} [proto] - If it's present it's set as a prototype to the object.
     * @returns {DWrap} In getter mode returns wrap of the prototype and in setter mode returns this.
     * @description Synonym for both
     * [Object.getPrototypeOf]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf}
     * and
     * [Object.setPrototypeOf]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf}.
     */

  }, {
    key: 'proto',
    value: function proto(_proto) {
      var object = this.$;
      var isContextObject = !isNullOrUndefined(object);

      if (arguments.length) {
        if (isContextObject && (isObject(_proto) || isNull(_proto))) {
          Object.setPrototypeOf(object, _proto);
        }

        return this;
      }

      return isContextObject ? new Super(Object.getPrototypeOf(object)) : new Super();
    }

    /**
     * @method Super#reduce
     * @public
     * @param {ReduceCallback} callback - Called on each iteration.
     * Return value is passed to the next callback call.
     * @param {*} [IV = <first value>|undefined] - Initial value.
     * @returns {*} Modified IV.
     * @description Returns modified IV. If the second argument is not present first value in the object is taken
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).reduce((sum, value) => sum + value * value, 0); // 14
     */

  }, {
    key: 'reduce',
    value: function reduce(callback, IV) {
      validate$1([callback], ['function'], 'Super#reduce');

      var object = this.$;

      var startKey = void 0;

      if (arguments.length === 1) {
        iterate(object, function (value, key) {
          startKey = key;
          IV = value;

          return true;
        });
      }

      iterate(object, function (value, key) {
        if (key !== startKey) {
          IV = callback(IV, value, key, object);
        }
      });

      return IV;
    }

    /**
     * @method Super#set
     * @public
     * @param {String|Object.<String, Function>} property - Either a string of a property or a setters object.
     * @param {Function} [setter] - If a property parameter is a string this has to be a setter function.
     * @returns {DWrap} Returns this.
     * @description Method for defining setters.
     *
     * @example
     * const object = new Super({})
     *   .get('public', function () {
     *     return this._private;
     *   })
     *   .set('public', function (value) {
     *     if (typeof value === 'number') {
     *       this._private = value;
     *     }
     *   });
     * object.prop('public', '1').$; // { public: undefined }
     * object.prop('public', 1).$;   // { public: 1, _private: 1 }
     *
     * new Super({}).set({
     *   public(value) {
     *     if (typeof value === 'number') {
     *       this._private = value;
     *     }
     *   }
     * });
     */

  }, {
    key: 'set',
    value: function set(property, setter) {
      if (arguments.length >= 2) {
        property = defineProperty({}, property, setter);
      }

      var object = this.$;

      iterate(isObject(object) && new Super(property).$, function (setter, property) {
        Object.defineProperty(object, property, { set: setter });
      });

      return this;
    }

    /**
     * @method Super#some
     * @public
     * @param {IterationCallback} [callback = Boolean] - Called on each iteration.
     * If returns truthy iteration stops and if falsey it continues.
     * @returns {Boolean} If all the callback calls returned truthy value.
     * @description Returns true if some of the callback calls returned truthy value. Otherwise false.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).some((value) => value > 4); // false
     * new Super({}).some(() => true);                             // false
     */

  }, {
    key: 'some',
    value: function some() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Boolean;

      validate$1([callback], ['function'], 'Super#some');

      return iterate(this.$, function (value, key, object) {
        if (callback(value, key, object)) {
          return true;
        }
      }) || false;
    }

    /**
     * @method Super#strictEquals
     * @public
     * @param {*} [object] - Object to compare.
     * @returns {Boolean} If the objects are equal or not.
     * @description Returns true if objects are equal using '===' operator and false if not.
     * NaNs are considered to be strict equal.
     *
     * @example
     * new Super(3).strictEquals('3');   // false
     * new Super(NaN).strictEquals(NaN); // true
     */

  }, {
    key: 'strictEquals',
    value: function strictEquals(object) {
      var o = this.$;

      object = new Super(object).$;

      return o === object || isNaN(o) && isNaN(object);
    }

    /**
     * @method Super#sum
     * @public
     * @param {IterationCallback} [callback = null] - Called on each iteration.
     * @returns {Number} Sum.
     * @description Type of {@link Super#reduce}.
     * If the callback is present it's used for summing. If not the value is used.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).sum();                         // 6
     * new Super({ a: 1, b: 2, c: 3 }).sum((value) => value * value); // 14
     */

  }, {
    key: 'sum',
    value: function sum() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      validate$1([callback], ['function||!'], 'Super#sum');

      return this.reduce(function (sum, value, key, object) {
        return sum + Number(callback ? callback(value, key, object) : value);
      }, 0);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.$;
    }

    /**
     * @member Super#toStringTag
     * @type {String}
     * @public
     * @readonly
     * @description Returns toString tag of the object.
     *
     * @example
     * new Super({}).toStringTag; // 'Object'
     * new Super([]).toStringTag; // 'Array'
     * new Super(1).toStringTag;  // 'Number'
     */

  }, {
    key: 'value',


    /**
     * @method Super#value
     * @public
     * @param {String|Object.<String, *>} property - Either a string of a property or a values object.
     * @param {Object.<String, *>} [value] - If a property parameter is a string this has to be a value to be set.
     * @returns {DWrap} Returns this.
     * @description Method for defining non-enumerable, non-writable, non-configurable values.
     * Synonym for object.define(property, { value: value }).
     *
     * @example
     * new Super({}).value('a', 1).$; // { a: 1 }
     * new Super({}).value({
     *   a: 1
     * }).$;                          // { a: 1 }
     */
    value: function value(property, _value) {
      if (arguments.length >= 2) {
        property = defineProperty({}, property, _value);
      }

      var object = this.$;

      iterate(isObject(object) && new Super(property).$, function (value, property) {
        Object.defineProperty(object, property, { value: value });
      });

      return this;
    }

    /**
     * @method Super#values
     * @public
     * @returns {DWrap} A wrap of the values array.
     * @description Returns D-Wrap of the values array.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).values().$; // [1, 2, 3]
     * new Super(null).values().$;                 // []
     */

  }, {
    key: 'values',
    value: function values() {
      var array = [];

      iterate(this.$, function (value) {
        array.push(value);
      });

      return D$2(array);
    }

    /**
     * @method Super#word
     * @public
     * @param {IterationCallback} callback - Called on each iteration.
     * @returns {String} Concatenated string.
     * @description Type of {@link Super#reduce}.
     * If the callback is present it's used for concatenating. If not the value is used.
     *
     * @example
     * new Super({ a: 1, b: 2, c: 3 }).word();                         // '123'
     * new Super({ a: 1, b: 2, c: 3 }).word((value) => value + value); // '112233'
     */

  }, {
    key: 'word',
    value: function word() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      validate$1([callback], ['function||!'], 'Super#word');

      return this.reduce(function (word, value, key, object) {
        return word + String(callback ? callback(value, key, object) : value);
      }, '');
    }
  }, {
    key: 'count',
    get: function get() {
      var object = this.$;

      if (!isObject(object)) {
        return 0;
      }

      return isArrayLike(object) ? object.length : Object.keys(object).length;
    }
  }, {
    key: 'toStringTag',
    get: function get() {
      return toStringTag(this.$);
    }

    /**
     * @member Super#type
     * @type {String}
     * @public
     * @readonly
     * @description Synonym for
     * ["typeof" operator]{@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof}..
     *
     * @example
     * new Super({}).type;   // 'object'
     * new Super(1).type;    // 'number'
     * new Super('1').type;  // 'string'
     * new Super(true).type; // 'boolean'
     */

  }, {
    key: 'type',
    get: function get() {
      return _typeof(this.$);
    }
  }], [{
    key: 'addStaticProperties',
    value: function addStaticProperties(property, value) {
      if (arguments.length >= 2) {
        property = defineProperty({}, property, value);
      }

      defineProperties(this, property);

      return this;
    }

    /**
     * @method Super.addInstanceProperties
     * @public
     * @param {String|Object} property - Either a string of a property or an object
     * with properties keys and values values.
     * @param {Object} [value] - If a property parameter is a string this has to be a property value.
     * @returns {this} Returns this.
     * @description Sets static properties for DWrap prototypes.
     *
     * @example
     * Super.addInstanceProperties('cool', 42);
     * Super.addInstanceProperties('superCool', 42*42);
     */

  }, {
    key: 'addInstanceProperties',
    value: function addInstanceProperties(property, value) {
      if (arguments.length >= 2) {
        property = defineProperty({}, property, value);
      }

      defineProperties(this.prototype, property);

      return this;
    }
  }]);
  return Super;
}();

defineProperties(Super.prototype, defineProperty({}, _Symbol.toStringTag, 'Super'));

/**
 * @function deepAssign
 * @private
 * @param {*} target - Object to assign properties to.
 * @param {*} object - Object to assign properties from.
 * @returns {void}
 */
function _deepAssign(target, object) {
  iterate(object, function (value, key) {
    if (isPrimitive(target[key]) || !{}.hasOwnProperty.call(target, key)) {
      target[key] = _deepClone(value);

      return;
    }

    if (!isPrimitive(target[key])) {
      _deepAssign(target[key], value);
    }
  });
}

/**
 * @function deepClone
 * @private
 * @param {*} object - Object to clone.
 * @description Does the deep cloning.
 */
function _deepClone(object) {
  var clone = cloneSwitcher(object, [object, true]);

  if (clone !== object) {
    iterate(object, function (value, key) {
      clone[key] = _deepClone(value);
    });
  }

  return clone;
}

/**
 * @function deepEqual
 * @private
 * @param {*} o1 - First object to compare.
 * @param {*} o2 - Second object to compare.
 * @param {Boolean} strict - If comparison should be strict or not.
 * @returns {Boolean} - If the object are deep equal or not.
 */
function deepEqual(o1, o2, strict) {
  if (o1 === o2) {
    return true;
  }

  if (isNaN(o1) && isNaN(o2) && isPrimitive(o1) && isPrimitive(o2)) {
    return true;
  }

  if (isNaN(o1) || isNaN(o2)) {
    return false;
  }

  if (isPrimitive(o1) || isPrimitive(o2)) {
    return strict ? o1 === o2 : o1 == o2;
  }

  if (isDate(o1) && isDate(o2)) {
    return o1.getTime() === o2.getTime();
  }

  if (isDate(o1) || isDate(o2)) {
    return false;
  }

  if (isRegExp(o1) && isRegExp(o2)) {
    return o1.source === o2.source && o1.toString().match(/[gimuy]*$/)[0] === o2.toString().match(/[gimuy]*$/)[0] && o1.lastIndex === o2.lastIndex;
  }

  if (isRegExp(o1) || isRegExp(o2)) {
    return false;
  }

  if (!isPlainObject(o1) && !isArray(o1) || !isPlainObject(o2) && !isArray(o2)) {
    return false;
  }

  var p1 = Object.getPrototypeOf(o1);
  var p2 = Object.getPrototypeOf(o1);

  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }

  if (p1 && p2 && toStringTag(p1.constructor) !== toStringTag(p2.constructor)) {
    return false;
  }

  return iterate(o1, function (value, key) {
    if (!(key in o2) || !deepEqual(value, o2[key], strict)) {
      return false;
    }
  }) !== false;
}

/**
 * @function deepEvery
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepIterationCallback} callback - Callback that is called on every element.
 * If returns truthy the iteration goes on and if not it stops.
 * @param {Number} n - Depth of iteration.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {Boolean} - If all the callback calls returned truthy value.
 */
function _deepEvery(object, callback, n, tree) {
  var end = n === 1;

  return iterate(object, function (value, key, object) {
    var newTree = [{ key: key, value: value }].concat(tree);

    if (end || isPrimitive(value) ? !callback(value, key, object, newTree) : !_deepEvery(value, callback, n - 1, newTree)) {
      return false;
    }
  }) !== false;
}

/**
 * @function deepFilter
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepIterationCallback} callback - Callback that is called on every element.
 * If returns truthy the element is included in the output and if not it's excluded.
 * @param {Number} n - Depth of iteration.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {*} Filtered object.
 */
function _deepFilter(object, callback, n, tree) {
  var array = isArrayLike(object);
  var nul = isNullOrUndefined(object);
  var o = array ? [] : nul ? object : {};
  var end = n === 1;

  iterate(object, function (value, key, object) {
    var newTree = [{ key: key, value: value }].concat(tree);

    if ((end || isPrimitive(value)) && callback(value, key, object, newTree)) {
      if (array) {
        o.push(value);
      } else {
        o[key] = value;
      }

      return;
    }

    if (!end) {
      var filtered = _deepFilter(value, callback, n - 1, newTree);

      if (filtered) {
        if (array) {
          o.push(filtered);
        } else {
          o[key] = filtered;
        }
      }
    }
  });

  if (array) {
    return o.length ? o : undefined;
  }

  if (!nul) {
    return Object.keys(o).length ? o : undefined;
  }

  return o;
}

/**
 * @function deepFind
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepIterationCallback} callback - Callback that is called on every element.
 * If returns truthy the iteration stops and if not it continues.
 * @param {Number} n - Depth of iteration.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {Tree|null} - If found the whole tree is returned and if not it's null what's returned.
 */
function _deepFind(object, callback, n, tree) {
  var end = n === 1;

  return iterate(object, function (value, key, object) {
    var newTree = [{ key: key, value: value }].concat(tree);

    if (end || isPrimitive(value)) {
      if (callback(value, key, object, newTree)) {
        return newTree;
      }

      return;
    }

    var result = _deepFind(value, callback, n - 1, newTree);

    if (result) {
      return result;
    }
  }) || null;
}

/**
 * @function deepFreeze
 * @private
 * @param {*} object - Object to freeze.
 * @returns {void}
 */
function _deepFreeze(object) {
  Object.freeze(object);
  iterate(object, _deepFreeze);
}

/**
 * @function deepForEach
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepIterationCallback} callback - Callback that is called on every element.
 * @param {Number} n - Depth of iteration.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {void}
 */
function _deepForEach(object, callback, n, tree) {
  var end = n === 1;

  iterate(object, function (value, key, object) {
    var newTree = [{ key: key, value: value }].concat(tree);

    if (end || isPrimitive(value)) {
      callback(value, key, object, newTree);
    } else {
      _deepForEach(value, callback, n - 1, newTree);
    }
  });
}

/**
 * @function deepMap
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepIterationCallback} callback - Callback that is called on every element.
 * Returned value is used to create to new object.
 * @param {Number} n - Depth of iteration.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {*} New object.
 */
function _deepMap(object, callback, n, tree) {
  var o = isArrayLike(object) ? [] : isNullOrUndefined(object) ? object : {};
  var end = n === 1;

  iterate(object, function (value, key, object) {
    var newTree = [{ key: key, value: value }].concat(tree);

    o[key] = end || isPrimitive(value) ? callback(value, key, object, newTree) : _deepMap(value, callback, n - 1, newTree);
  });

  return o;
}

/**
 * @function deepReduce
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepReduceCallback} callback - Callback that is called on every element.
 * Returned value is used to create to new object.
 * @param {Number} n - Depth of iteration.
 * @param {Boolean} start - If callback was called already or not.
 * @param {{ IV: * }|undefined} IV - If callback was called already or not.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {{ IV: * }} Transformed IV.
 */
function _deepReduce(object, callback, n, start, IV, tree) {
  var end = n === 1;

  iterate(object, function (value, key, object) {
    if (!IV && (end || isPrimitive(value)) && !start) {
      IV = { IV: value };
      start = true;

      return;
    }

    var newTree = [{ key: key, value: value }].concat(tree);

    IV = end || isPrimitive(value) ? { IV: callback(IV.IV, value, key, object, newTree) } : _deepReduce(value, callback, n - 1, start, IV, newTree);
  });

  return IV;
}

/**
 * @function deepSome
 * @private
 * @param {*} object - Object to iterate over.
 * @param {DeepIterationCallback} callback - Callback that is called on every element.
 * If returns truthy the iteration stops and if not it continues.
 * @param {Number} n - Depth of iteration.
 * @param {Tree} tree - Tree of { key, value } objects of iteration.
 * @returns {Boolean} - If some of the callback calls returned truthy value.
 */
function _deepSome(object, callback, n, tree) {
  var end = n === 1;

  return iterate(object, function (value, key, object) {
    var newTree = [{ key: key, value: value }].concat(tree);

    if (end || isPrimitive(value) ? callback(value, key, object, newTree) : _deepSome(value, callback, n - 1, newTree)) {
      return true;
    }
  }) || false;
}

constructors[0].push({
  check: function check() {
    return true;
  },
  cls: Super
});

/**
 * @module Arr
 * @private
 * @mixin
 * @description Exports Arr class.
 */

/**
 * @typedef {Array|*} ArrayLike
 * @public
 * @description Array-like type.
 */

/**
 * @callback ArrayCallback
 * @public
 * @param {Number} i - Iteration index.
 */

/**
 * @callback IterateCallback
 * @public
 * @param {Number} i - Iteration index.
 */

/**
 * @callback CompareFunction
 * @public
 * @param {*} x - First value to be compared.
 * @param {*} y - Second value to be compared.
 */

/**
 * @class Arr
 * @extends Super
 * @public
 * @param {Array} [array = []] - An array to wrap.
 * @returns {Arr} Instance of Arr.
 * @description Wrap of an array.
 *
 * @example
 * new Arr([1, 2]);
 */
var Arr = function (_Super) {
  inherits(Arr, _Super);

  function Arr() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, Arr);
    return possibleConstructorReturn(this, (Arr.__proto__ || Object.getPrototypeOf(Arr)).call(this, toArray$1(array instanceof Arr ? array.$ : array)));

    /**
     * @member Arr#$
     * @type {Array}
     * @public
     * @description Made array.
     */
  }

  /**
   * @method Arr#concat
   * @public
   * @param {...(Array|Arr|*)} values - Arrays or any other values to concat the array with.
   * @returns {Arr} New instance of Arr.
   * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   * @description Synonym for
   * [Array#concat]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat}.
   */


  createClass(Arr, [{
    key: 'concat',
    value: function concat() {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      var array = toArray$1(this.$, true);

      iterate(arguments, function (value) {
        value = new Super(value).$;

        if (isArrayLike(value) && !isString(value)) {
          iterate(value, function (value) {
            array.push(value);
          });

          return;
        }

        array.push(value);
      });

      return new this.constructor(array);
    }

    /**
     * @member Arr#first
     * @type {*}
     * @public
     * @readonly
     * @description Returns the first element of the array.
     *
     * @example
     * new Arr([1, 2, 3]).first; // 1
     * new Arr([]).first;        // undefined
     */

  }, {
    key: 'indexOf',


    /**
     * @method Arr#indexOf
     * @public
     * @param {*} value - Value to search.
     * @returns {Number} Index of the argument.
     * @description Almost the same as {@link Super#keyOf}. The difference is that if the value is not found
     * -1 returned instead of null and if found Number(key) returned.
     *
     * @example
     * new Arr([1, 2, 3]).indexOf(1);       // 0
     * new Arr([1, 2, 3]).indexOf('1');     // 0
     * new Arr([1, 2, 3]).indexOf(3);       // -1
     * new Arr([1, 2, NaN]).indexOf(NaN);   // 2
     */
    value: function indexOf(value) {
      var key = this.keyOf(value);

      return key === null ? -1 : Number(key);
    }

    /**
     * @method Arr#indexOfStrict
     * @public
     * @param {*} value - Value to search.
     * @returns {Number} Index of the argument.
     * @description Almost the same as {@link Super#keyOfStrict}. The difference is that if the value is not found
     * -1 returned instead of null and if found Number(key) returned.
     *
     * @example
     * new Arr([1, 2, 3]).indexOfStrict(1);       // 0
     * new Arr([1, 2, 3]).indexOfStrict('1');     // -1
     * new Arr([1, 2, 3]).indexOfStrict(3);       // -1
     * new Arr([1, 2, NaN]).indexOfStrict(NaN);   // 2
     */

  }, {
    key: 'indexOfStrict',
    value: function indexOfStrict(value) {
      var key = this.keyOfStrict(value);

      return key === null ? -1 : Number(key);
    }

    /**
     * @method Arr#join
     * @public
     * @param {String} [separator = ','] - See the link.
     * @returns {String} - String of joined array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     * @description Synonym for
     * [Array#join]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join}.
     */

  }, {
    key: 'join',
    value: function join(separator) {
      return this.$.join.apply(this.$, arguments);
    }

    /**
     * @member Arr#last
     * @type {*}
     * @public
     * @readonly
     * @description The last element of the array.
     *
     * @example
     * new Arr([1, 2, 3]).last; // 3
     * new Arr([]).last;        // undefined
     */

  }, {
    key: 'pop',


    /**
     * @method Arr#pop
     * @public
     * @returns {*} Returns deleted element.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
     * @description Synonym for
     * [Array#pop]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/pop}.
     */
    value: function pop() {
      return this.$.pop();
    }

    /**
     * @method Arr#push
     * @public
     * @param {...*} values See the link.
     * @this {Arr}
     * @returns {Arr} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push
     * @description Synonym for
     * [Array#push]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push}
     * besides returning this.
     */

  }, {
    key: 'push',
    value: function push() {
      for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      this.$.push.apply(this.$, arguments);

      return this;
    }

    /**
     * @method Arr#reverse
     * @public
     * @returns {Arr} A wrap of the reversed array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
     * @description Synonym for
     * [Array#reverse]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse}.
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this.$.reverse();

      return this;
    }

    /**
     * @method Arr#shift
     * @public
     * @returns {*} Returns deleted element.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
     * @description Synonym for
     * [Array#shift]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/shift}.
     */

  }, {
    key: 'shift',
    value: function shift() {
      return this.$.shift();
    }

    /**
     * @method Arr#shuffle
     * @public
     * @returns {Arr} Returns this.
     * @description Method for shuffling.
     *
     * @example
     * new Arr([1, 2, 3, 4]).shuffle().$; // [4, 2, 3, 1]
     * new Arr([1, 2, 3, 4]).shuffle().$; // [1, 3, 4, 2]
     */

  }, {
    key: 'shuffle',
    value: function shuffle() {
      var length = this.$.length;

      return this.forEach(function (value, index, array) {
        var randomIndex = index + Math.floor((length - index) * Math.random());

        array[index] = array[randomIndex];
        array[randomIndex] = value;
      });
    }

    /**
     * @method Arr#slice
     * @public
     * @param {Number} [begin = 0] - See the link.
     * @param {Number} [end = array.length] - See the link.
     * @returns {Arr} A wrap of a sliced array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     * @description Synonym for
     * [Array#slice]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}.
     */

  }, {
    key: 'slice',
    value: function slice(begin, end) {
      return new this.constructor(this.$.slice.apply(this.$, arguments));
    }

    /**
     * @method Arr#sort
     * @public
     * @param {CompareFunction} [compareFunction] - See the link.
     * @returns {Arr} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * @description Synonym for
     * [Array#sort]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}.
     */

  }, {
    key: 'sort',
    value: function sort(compareFunction) {
      validate$1([compareFunction], ['function||!'], 'Arr#sort');

      this.$.sort(compareFunction);

      return this;
    }

    /**
     * @method Arr#sortAsc
     * @public
     * @returns {Arr} Returns this.
     * @description Method for ascending sorting. Puts non-numbers first, then NaNs, then sorted values.
     *
     * @example
     * new Arr([NaN, 1, -7, '100', 5]).sortAsc().$; // ['100', NaN, -7, 1, 5]
     */

  }, {
    key: 'sortAsc',
    value: function sortAsc() {
      return this.sort(asc);
    }

    /**
     * @method Arr#sortDesc
     * @public
     * @returns {Arr} Returns this.
     * @description Method for descending sorting. Puts sorted values first, then NaNs, then non-numbers.
     *
     * @example
     * new Arr([NaN, 1, -7, '100', 5]).sortDesc().$; // [5, 1, -7, NaN, '100']
     */

  }, {
    key: 'sortDesc',
    value: function sortDesc() {
      return this.sort(function (y, x) {
        return asc(x, y);
      });
    }

    /**
     * @method Arr#splice
     * @public
     * @param {Number} [start] - See the link.
     * @param {Number} [deleteCount] - See the link.
     * @param {...*} [items] - See the link.
     * @returns {Arr} A wrap of return value of #splice call.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     * @description Synonym for
     * [Array#splice]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice}.
     */

  }, {
    key: 'splice',
    value: function splice(start, deleteCount) {
      for (var _len3 = arguments.length, items = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        items[_key3 - 2] = arguments[_key3];
      }

      return new Arr(this.$.splice.apply(this.$, arguments));
    }

    /**
     * @method Arr#string
     * @public
     * @returns {String} Concatenated array.
     * @description Synonym for array.join('').
     *
     * @example
     * new Arr([1, 2, 3]).string(); // '123'
     */

  }, {
    key: 'string',
    value: function string() {
      return this.join('');
    }

    /**
     * @method Arr#unshift
     * @public
     * @param {...*} [values] - See the link.
     * @returns {Arr} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
     * @description Synonym for
     * [Array#unshift]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift}
     * besides returning this.
     */

  }, {
    key: 'unshift',
    value: function unshift() {
      for (var _len4 = arguments.length, values = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        values[_key4] = arguments[_key4];
      }

      this.$.unshift.apply(this.$, arguments);

      return this;
    }
  }, {
    key: 'first',
    get: function get() {
      return this.$[0];
    }
  }, {
    key: 'last',
    get: function get() {
      var array = this.$;

      return array[array.length - 1];
    }

    /**
     * @member Arr#length
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     * @description Synonym for
     * [Array#length]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length}.
     */

  }, {
    key: 'length',
    get: function get() {
      return this.$.length;
    }
  }]);
  return Arr;
}(Super);

defineProperties(Arr.prototype, defineProperty({}, _Symbol.toStringTag, 'Arr'));

/**
 * @function asc
 * @private
 * @param {*} x - First value to be compared.
 * @param {*} y - Second value to be compared.
 * @returns {Number} Where to put the first element: before or after.
 */
function asc(x, y) {
  if (!isNumber(x) && !isNumber(y)) {
    return 0;
  }

  if (!isNumber(x)) {
    return -1;
  }

  if (!isNumber(y)) {
    return 1;
  }

  if (isNaN(x) && isNaN(y)) {
    return 0;
  }

  if (isNaN(x)) {
    return -1;
  }

  if (isNaN(y)) {
    return 1;
  }

  return x - y;
}

constructors[1].push({
  check: isArrayLike,
  cls: Arr
});

/**
 * @function array
 * @public
 * @param {Number} number - Length of the array.
 * @param {ArrayCallback} [callback] - If it's present it has to be a function
 * that returns the element that is pushed to the new array.
 * @returns {Arr} New instance of Arr.
 * @description Method for creating new array from the length using optional callback.
 *
 * @example
 * array(3).$;               // [0, 1, 2]
 * array(3, (i) => i * 2).$; // [0, 2, 4]
 */
function array(number, callback) {
  validate$1([number, callback], [['intLike', '>=0'], 'function||!'], 'array');

  var array = [];

  for (var i = 0; i < number; i++) {
    array.push(callback ? callback(i) : i);
  }

  return new Arr(array);
}

/**
 * @function iterate
 * @public
 * @param {Number} number - Number of iterations.
 * @param {IterateCallback} callback - Callback that is called on each iteration with the iteration index.
 * @returns {void}
 * @description Method for replacing for (...) construction.
 *
 * @example
 * iterate();
 */
function iterate$1(number, callback) {
  validate$1([number, callback], [['intLike', '>=0'], 'function'], 'iterate');

  for (var i = 0; i < number; i++) {
    callback(i);
  }
}

/**
 * @module Promise
 * @private
 * @mixin
 * @description Exports Promise class.
 */

var secret = {};
var iterator = _Symbol.iterator;

var Promise$1 = function () {
  function Promise(executor) {
    classCallCheck(this, Promise);

    if (!isFunction(executor)) {
      throw new TypeError('Promise resolver ' + {}.toString.call(executor) + ' is not a function');
    }

    var hiddenStatus = void 0;
    var hiddenValue = void 0;

    var onFulfill = [];
    var onReject = [];
    var realPromise = this;
    var hiddenPromise = {
      handled: false,
      get status() {
        return hiddenStatus;
      },
      set status(value) {
        hiddenStatus = value;
        realPromise.status = value;
      },
      get value() {
        return hiddenValue;
      },
      set value(val) {
        hiddenValue = val;
        realPromise.value = val;
      }
    };

    hiddenPromise.status = 'pending';
    hiddenPromise.value = undefined;

    /**
     * @typedef {Object} hiddenPromise
     * @private
     * @property {Boolean|Object} handled - If the promise is handled or not.
     * @property {'pending'|'fulfilled'|'rejected'} status - Status of the promise.
     * @property {*} value - Value of the promise.
     */

    /**
     * @member {Function} hiddenPromise#handle
     * @private
     * @param {('reject'|'resolve')} event - Type of the event to handle.
     * @param {Function} handler - Handler itself.
     * @param {Function} resolve - Resolve function.
     * @param {Function} reject - Reject function.
     * @param {Object} secret - Secret.
     * @description Private method for handling promises.
     */

    /**
     * @member {hiddenPromise} Promise#$$
     * @protected
     */
    defineProperties(this.$$ = {}, {
      'get/set handled': {
        get: function get() {
          return hiddenPromise.handled;
        },
        set: function set(key) {
          if (key === secret) {
            hiddenPromise.handled = true;
          }
        }
      },
      handle: function handle(status, f, resolve, reject, key) {
        if (key === secret) {
          var proxy = isFunction(f) ? function (value) {
            try {
              resolve(f(value));
            } catch (err) {
              return reject(err);
            }
          } : null;

          if (status === 'resolve') {
            onFulfill.push(proxy || function (value) {
              return resolve(value);
            });
          } else if (status === 'reject') {
            onReject.push(proxy || function (err) {
              return reject(err);
            });
          }
        }
      },
      'get status': function getStatus() {
        return hiddenPromise.status;
      },
      'get value': function getValue() {
        return hiddenPromise.value;
      }
    });

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }

    function reject(err) {
      if (hiddenPromise.status === 'pending') {
        hiddenPromise.status = 'rejected';
        hiddenPromise.value = err;

        for (var i = 0, length = onReject.length; i < length; i++) {
          hiddenPromise.handled = true;

          onReject[i](err);
        }

        setTimeout(function () {
          if (!hiddenPromise.handled) {
            console.error('%s %o', 'Uncaught (in promise)', err);
          }
        }, 1);
      }
    }

    function resolve(value) {
      if (hiddenPromise.status === 'pending') {
        if (value && isFunction(value.then)) {
          return value.then(function (value) {
            resolve(value);
          }, function (err) {
            reject(err);
          });
        }

        hiddenPromise.status = 'fulfilled';
        hiddenPromise.value = value;

        for (var i = 0, length = onFulfill.length; i < length; i++) {
          hiddenPromise.handled = true;

          onFulfill[i](value);
        }
      }
    }
  }

  createClass(Promise, [{
    key: 'abort',
    value: function abort() {}
  }, {
    key: 'catch',
    value: function _catch(onRejected) {
      return this.then(null, onRejected);
    }
  }, {
    key: 'then',
    value: function then(onFulfilled, onRejected) {
      var promise = this.$$;

      if (promise.status === 'pending') {
        return new Promise(function (resolve, reject) {
          promise.handle('reject', onRejected, resolve, reject, secret);
          promise.handle('resolve', onFulfilled, resolve, reject, secret);
        });
      }

      promise.handled = secret;

      var value = promise.value;


      var method = void 0;
      var handler = void 0;

      if (promise.status === 'fulfilled') {
        method = 'resolve';
        handler = onFulfilled;
      } else {
        method = 'reject';
        handler = onRejected;
      }

      if (!isFunction(handler)) {
        return Promise[method](value);
      }

      try {
        return Promise.resolve(handler(value));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }], [{
    key: 'all',
    value: function all(iterable) {
      var array = [];

      var toResolve = 0;

      if (iterable[iterator]) {
        iterable = iterable[iterator]();

        return new Promise(function (resolve, reject) {
          var next = void 0;
          var i = 0;

          var _loop = function _loop() {
            var promise = Promise.resolve(next.value);

            toResolve++;

            (function (i) {
              promise.then(function (value) {
                toResolve--;
                array[i] = value;

                setTimeout(function () {
                  if (next.done && !toResolve) {
                    resolve(array);
                  }
                }, 1);
              }, reject);
            })(i++);
          };

          while (!(next = iterable.next()).done) {
            _loop();
          }

          if (!i) {
            return Promise.resolve([]);
          }
        });
      }

      var length = iterable.length;

      if (!length) {
        return Promise.resolve([]);
      }

      toResolve = length;

      return new Promise(function (resolve, reject) {
        var _loop2 = function _loop2(i) {
          var promise = Promise.resolve(iterable[i]);

          promise.then(function (value) {
            toResolve--;
            array[i] = value;

            if (!toResolve) {
              resolve(array);
            }
          }, reject);
        };

        for (var i = 0; i < length; i++) {
          _loop2(i);
        }
      });
    }
  }, {
    key: 'race',
    value: function race(iterable) {
      if (iterable[iterator]) {
        iterable = iterable[iterator]();

        return new Promise(function (resolve, reject) {
          var next = void 0;

          while (!(next = iterable.next()).done) {
            next.value.then(resolve, reject);
          }
        });
      }

      return new Promise(function (resolve, reject) {
        for (var i = 0, length = iterable.length; i < length; i++) {
          iterable[i].then(resolve, reject);
        }
      });
    }
  }, {
    key: 'reject',
    value: function reject(value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    }
  }, {
    key: 'resolve',
    value: function resolve(value) {
      if (value && isFunction(value.then)) {
        return value;
      }

      return new Promise(function (resolve) {
        resolve(value);
      });
    }
  }]);
  return Promise;
}();

defineProperties(Promise$1.prototype, defineProperty({}, _Symbol.toStringTag, 'Promise'));

/**
 * @module BlobObject
 * @private
 * @mixin
 * @description Exports BlobObject class.
 */

/**
 * @typedef {{ buffer: String, binary: String, dataURL: String, text: String }} methods
 * @private
 * @description List of read blob methods.
 */
var methods = {
  buffer: 'ArrayBuffer',
  binary: 'BinaryString',
  dataURL: 'DataURL',
  text: 'Text'
};
var _global = global$1;
var URL = _global.URL;

/**
 * @typedef {('buffer'|'binary'|'dataURL'|'text')} ReadBlobMethod
 * @public
 * @description Enum type of read blob methods.
 */

/**
 * @typedef {ArrayBuffer|ArrayBufferView|Blob|String} BlobParts
 * @public
 * @description Allowed blob parts.
 */

/**
 * @callback ReaderEventListener
 * @public
 * @param {Event} e - Fired event.
 * @param {FileReader} reader - FileReader.
 */

/**
 * @class BlobObject
 * @extends Super
 * @public
 * @param {Blob} blob - Blob to wrap.
 * @returns {BlobObject} Instance of BlobObject.
 * @description Wrap of a blob.
 *
 * @example
 * new BlobObject(new Blob(['{"foo":"bar"}'], { type: 'application/json' }));
 */

var BlobObject = function (_Super) {
  inherits(BlobObject, _Super);

  function BlobObject() {
    classCallCheck(this, BlobObject);
    return possibleConstructorReturn(this, (BlobObject.__proto__ || Object.getPrototypeOf(BlobObject)).apply(this, arguments));
  }

  createClass(BlobObject, [{
    key: 'readAs',


    /**
     * @method BlobObject#readAs
     * @public
     * @param {ReadBlobMethod} method - Method that is used for reading from blob.
     * @param {ReaderEventListener} [progress] - Progress listener.
     * @returns {Promise} Promise that could be aborted.
     * @description Method for reading from blobs.
     *
     * @example
     * new BlobObject(new Blob(['{"foo":"bar"}'], { type: 'application/json' }))
     *   .readAs('text')
     *   .then((value) => {
     *     console.log(value); // '{"foo":"bar"}'
     *   });
     */
    value: function readAs(method, progress) {
      var _this2 = this;

      if (!methods[method]) {
        throw new Error('1st argument must be one of following values: buffer, binary, dataURL, text');
      }

      var reader = new FileReader();
      var toReject = void 0;

      if (isFunction(progress)) {
        reader.onprogress = function (e) {
          progress(e, this);
        };
      }

      var promise = new Promise$1(function (resolve, reject) {
        toReject = reject;

        reader.onerror = function (_ref) {
          var target = _ref.target;

          if (reader) {
            reject(target.error);
          }
        };

        reader.onload = function (_ref2) {
          var target = _ref2.target;

          resolve(target.result);
        };

        reader['readAs' + methods[method]](_this2.$);
      });

      promise.abort = function abort() {
        toReject(new Error('Reading was aborted'));

        reader.abort();

        reader = null;

        return this;
      };

      return promise;
    }

    /**
     * @method BlobObject#saveAs
     * @public
     * @param {String} [name] - Name that is used for saving file.
     * @returns {BlobObject} Returns this.
     * @description Method for saving blobs.
     *
     * @example
     * new BlobObject(new Blob(['{"foo":"bar"}'], { type: 'application/json' }))
     *   .saveAs('blob.json');
     */

  }, {
    key: 'saveAs',
    value: function saveAs() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'download';

      var anchor = document.createElement('a');

      anchor.href = this.dataURL;
      anchor.setAttribute('download', name);
      anchor.click();

      return this;
    }
  }, {
    key: 'dataURL',

    /**
     * @member BlobObject#$
     * @type {Blob}
     * @public
     * @description Original Blob.
     */

    /**
     * @member {String} BlobObject#dataURL
     * @type {String}
     * @public
     * @readonly
     * @description Returns dataURL representation of the blob.
     */
    get: function get() {
      return URL.createObjectURL(this.$);
    }
  }]);
  return BlobObject;
}(Super);

defineProperties(BlobObject.prototype, defineProperty({}, _Symbol.toStringTag, 'BlobObject'));

constructors[1].push({
  check: function check(blob) {
    return (/^(Blob|File)$/.test(toStringTag(blob))
    );
  },
  cls: BlobObject
});

/**
 * @function blob
 * @public
 * @param {(BlobParts[]|BlobParts)} blobParts - Blob parts that are passed to
 * [Blob]{@link https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob} constructor.
 * @param {Object} [options] - Options that are passed to
 * [Blob]{@link https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob} constructor.
 * @returns {BlobObject} New instance of BlobObject.
 * @description Function for creating blobs not involving BlobObject and Blob constructors.
 */
function blob$1(blobParts) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!isArray(blobParts)) {
    blobParts = [blobParts];
  }

  return new BlobObject(new Blob(blobParts, options));
}

/**
 * @module Func
 * @private
 * @mixin
 * @description Exports Func class.
 */

/**
 * @callback BeforeMiddleware
 * @param {Array} args - Previous arguments.
 * @param {Func} func - This function.
 * @returns {Array} - New arguments.
 */

/**
 * @callback AfterMiddleware
 * @param {*} returnValue - Previous return value.
 * @param {Func} func - This function.
 * @returns {*} - New return value.
 */

/**
 * @class Func
 * @extends Super
 * @public
 * @param {Function} [func = function () {}] - Function to wrap.
 * @returns {Func} Instance of Func.
 * @description A wrap of a function.
 *
 * @example
 * const func = new Func(Math.max);
 *
 * func(1, 4, -2, 5); // 5
 */
var Func = function (_Super) {
  inherits(Func, _Super);

  function Func() {
    var _ret;

    var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    classCallCheck(this, Func);

    var _this = possibleConstructorReturn(this, (Func.__proto__ || Object.getPrototypeOf(Func)).call(this));

    function proxy() {
      var _this2 = this,
          _arguments = arguments;

      if (++proxy.$$.called < proxy.$$.canBeCalled) {
        var _ret2 = function () {
          var _proxy$$$ = proxy.$$;
          var before = _proxy$$$.before;
          var after = _proxy$$$.after;
          var sync = _proxy$$$.sync;
          var contextLocked = _proxy$$$.contextLocked;
          var _proxy$$$2 = proxy.$$;
          var context = _proxy$$$2.context;
          var args = _proxy$$$2.args;

          var ret = void 0;

          context = contextLocked ? context : context || _this2;
          args = args.concat(toArray$1(_arguments));

          if (sync) {
            iterate(before, function (middleware) {
              args = middleware.call(context, toArray$1(args), proxy);
            });

            ret = func.apply(context, toArray$1(args));

            iterate(after, function (middleware) {
              ret = middleware.call(context, ret, proxy);
            });

            return {
              v: ret
            };
          }

          var promise = Promise$1.resolve(args);

          iterate(before, function (middleware) {
            promise = promise.then(function (args) {
              return middleware.call(context, toArray$1(args), proxy);
            });
          });

          promise = promise.then(function (args) {
            return func.apply(context, toArray$1(args));
          });

          iterate(after, function (middleware) {
            promise = promise.then(function (ret) {
              return middleware.call(context, ret, proxy);
            });
          });

          return {
            v: promise
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
    }

    /**
     * @member {Object} Func#$$
     * @type {Object}
     * @protected
     * @property {Array} after - After middleware array.
     * @property {Array} args - Locked and bound arguments.
     * @property {Array} argsLocked - Locked arguments.
     * @property {Array} before - Before middleware array.
     * @property {Number} called - How many times the function was called.
     * @property {Number} canBeCalled - How many times the function can be actually called.
     * @property {*} context - Locked or bound context.
     * @property {Boolean} contextLocked - Is context locked or not.
     * @property {Boolean} sync - Is function synchronous or not.
     * @description Config parameters.
     */
    Object.defineProperty(proxy, '$$', {
      value: {
        after: [],
        args: [],
        argsLocked: [],
        before: [],
        called: 0,
        canBeCalled: Infinity,
        context: null,
        contextLocked: false,
        sync: true
      }
    });

    /**
     * @member {Function} Func#$
     * @type {Function}
     * @public
     * @description Original function.
     */
    Object.defineProperty(proxy, '$', { value: func });
    Object.setPrototypeOf(proxy, Func.prototype);

    return _ret = proxy, possibleConstructorReturn(_this, _ret);
  }

  /**
   * @method Func#after
   * @public
   * @param {AfterMiddleware} middleware - After middleware.
   * @param {Boolean|*} [afterAll = true] - Boolean parameter where to put middleware.
   * Truthy parameter stands for "to the end" and falsey for "to the beginning".
   * @returns {Func} Returns this.
   * @description Adds after middleware.
   *
   * @example
   * const func = new Func((a) => a + 1)
   *   .after((result) => result * result);
   *
   * func(4);  // 25
   * func(-4); // 9
   */


  createClass(Func, [{
    key: 'after',
    value: function after(middleware) {
      var afterAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      validate$1([middleware], ['function'], 'Func#after');

      var after = this.$$.after;


      if (afterAll) {
        after.push(middleware);
      } else {
        after.unshift(middleware);
      }

      return this;
    }

    /**
     * @method Func#apply
     * @public
     * @param {*} [context] - Context to call with.
     * @param {(Array|Arguments)} [args] - Arguments to call with.
     * @returns {*} Return of function call.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
     * @description Synonym for
     * [Function#apply]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply}.
     */

  }, {
    key: 'apply',
    value: function apply(context, args) {
      return function () {}.apply.apply(this, arguments);
    }

    /**
     * @method Func#async
     * @public
     * @param {Boolean|*} [condition] - If the function should be synchronous or not.
     * @returns {Func} Returns this.
     * @description If the function should be synchronous or not.
     *
     * @example
     * const func = new Func((a) => a + 1).async();
     *
     * func(4).then((result) => {
     *   console.log(result); // 5
     * });
     */

  }, {
    key: 'async',
    value: function async() {
      var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.$$.sync = !condition;

      return this;
    }

    /**
     * @method Func#before
     * @public
     * @param {BeforeMiddleware} middleware - Before middleware.
     * @param {Boolean|*} [beforeAll = true] - Boolean parameter where to put middleware.
     * Truthy parameter stands for "to the beginning" and falsey for "to the end".
     * @returns {Func} Returns this.
     * @description Adds before middleware.
     *
     * @example
     * const func = new Func((a) => a + 1)
     *   .before(([arg]) => [arg * arg]);
     *
     * func(4); // 17
     * func(3); // 10
     */

  }, {
    key: 'before',
    value: function before(middleware) {
      var beforeAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      validate$1([middleware], ['function'], 'Func#before');

      var before = this.$$.before;


      if (beforeAll) {
        before.unshift(middleware);
      } else {
        before.push(middleware);
      }

      return this;
    }

    /**
     * @method Func#bind
     * @public
     * @param {*} context - Context to bind.
     * @param {...(Array|Arguments|*)} args - Arguments to bind.
     * @returns {Func} Returns this.
     * @description Composition of {@link Func#bindContext} and {@link Func#bindArgs}.
     *
     * @example
     * const func = new Func(function (a, b) {
     *   return this.a + a + b;
     * }).bind({ a: 2 }, 1);
     *
     * func(1); // 4
     * func(3); // 6
     */

  }, {
    key: 'bind',
    value: function bind(context) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.bindContext(context).bindArgs(args);
    }

    /**
     * @method Func#bindArgs
     * @public
     * @param {(Array|Arguments)} args - Arguments to bind.
     * @returns {Func} Returns this.
     * @description Binds arguments in addition to already locked and bound ones.
     *
     * @example
     * const func = new Func((...args) => {
     *   let sum = 0;
     *
     *   for (let i = 0; i < args.length; i++) {
     *     sum += args[i];
     *   }
     *
     *   return sum;
     * });
     *
     * func(1, 2, 3); // 6
     *
     * func.bindArgs([4]);
     *
     * func(1, 2, 3); // 10
     *
     * func.bindArgs([5]);
     *
     * func(1, 2, 3); // 15
     */

  }, {
    key: 'bindArgs',
    value: function bindArgs(args) {
      var func = this.$$;

      func.args = func.args.concat(toArray$1(args));

      return this;
    }

    /**
     * @method Func#bindContext
     * @public
     * @param {*} context - Context to bind.
     * @returns {Func} Returns this.
     * @description Bind new context if it's not already locked.
     *
     * @example
     * const func = new Func(function () {
     *   return this.a;
     * }).bindContext({ a: 1 });
     *
     * func(); // 1
     *
     * func.bindContext({ a: 2 });
     *
     * func(); // 2
     */

  }, {
    key: 'bindContext',
    value: function bindContext(context) {
      var func = this.$$;

      if (!func.contextLocked) {
        func.context = context;
      }

      return this;
    }

    /**
     * @method Func#call
     * @public
     * @param {*} [context] - Context to call with.
     * @param {...*} [args] - Arguments to call with.
     * @returns {*} Return of function call.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call
     * @description Synonym for
     * [Function#call]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call}.
     */

  }, {
    key: 'call',
    value: function call(context) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return function () {}.call.apply(this, arguments);
    }

    /**
     * @member {Number} Func#called
     * @public
     * @readonly
     * @description Returns how many times the function was called.
     *
     * @example
     * const func = new Func((a) => a + 1);
     *
     * func();
     * func();
     *
     * func.called // 2
     */

  }, {
    key: 'canBeCalled',


    /**
     * @method Func#canBeCalled
     * @public
     * @param {Number} times - Number of maximum times the function is called (middlewares are also taken for a count).
     * @returns {Func} Returns this.
     * @description Method for limiting call times of function.
     *
     * @example
     * const func = new Func((a) => a + 1)
     *   .canBeCalled(1);
     *
     * func(1); // 2
     * func(1); // undefined
     */
    value: function canBeCalled(times) {
      this.$$.canBeCalled = times;

      return this;
    }

    /**
     * @method Func#limitArgsTo
     * @public
     * @param {Number} number - Number of arguments to limit to.
     * @returns {Func} Returns this.
     * @description Built-in before middleware for limiting number of arguments
     * that is put to the end of before middlewares.
     *
     * @example
     * const func = new Func((a, b) => [a, b]);
     *
     * func(1, 2); // [1, 2]
     *
     * func.limitArgsTo(1);
     *
     * func(1, 2); // [1, undefined]
     */

  }, {
    key: 'limitArgsTo',
    value: function limitArgsTo(number) {
      return this.before(function (args) {
        return args.slice(0, number);
      }, false);
    }

    /**
     * @method Func#lock
     * @public
     * @param {*} context - Context to lock.
     * @param {(Array|Arguments|*)} args - Arguments to lock.
     * @returns {Func} Returns this.
     * @description Composition of {@link Func#lockContext} and {@link Func#lockArgs}.
     *
     * @example
     * const func = new Func(function (a, b) {
     *   return this.a + a + b;
     * }).lock({ a: 2 }, [1]);
     *
     * func(1); // 4
     * func(3); // 6
     */

  }, {
    key: 'lock',
    value: function lock(context, args) {
      return this.lockContext(context).lockArgs(args);
    }

    /**
     * @method Func#lockArgs
     * @public
     * @param {(Array|Arguments|*)} args - Arguments to lock.
     * @returns {Func} Returns this.
     * @description Erases bound arguments and adds new arguments to already locked ones.
     *
     * @example
     * const func = new Func((...args) => {
     *   let sum = 0;
     *
     *   for (let i = 0; i < args.length; i++) {
     *     sum += args[i];
     *   }
     *
     *   return sum;
     * });
     *
     * func(1, 2, 3); // 6
     *
     * func.lockArgs([4]);
     *
     * func(1, 2, 3); // 10
     *
     * func.bindArgs([6, 7]);
     * func.lockArgs([5]);
     *
     * func(1, 2, 3); // 15
     */

  }, {
    key: 'lockArgs',
    value: function lockArgs(args) {
      var func = this.$$;

      func.args = func.argsLocked = func.argsLocked.concat(toArray$1(args));

      return this;
    }

    /**
     * @method Func#lockContext
     * @public
     * @param {*} context - Context to lock.
     * @returns {Func} Returns this.
     * @description Locks context if it's not already locked.
     *
     * @example
     * const func = new Func(function () {
     *   return this.a;
     * }).lockContext({ a: 1 });
     *
     * func(); // 1
     *
     * func.lockContext({ a: 2 });
     *
     * func(); // 1
     */

  }, {
    key: 'lockContext',
    value: function lockContext(context) {
      var func = this.$$;

      if (!func.contextLocked) {
        func.context = context;
        func.contextLocked = true;
      }

      return this;
    }

    /**
     * @method Func#timing
     * @public
     * @param {String} mark - Argument that is passed to console.time() and console.timeEnd().
     * By default name of the original function, or if it's not present, 'anonymous' is used.
     * @returns {Func} Returns this.
     * @description Built-in before and after middlewares for noting calling time.
     * In case of asynchronous functions it notes time between calling function and resolving or rejecting the result.
     *
     * @example
     * const func = new Func((a) => a + 1)
     *   .timing('plus 1');
     *
     * func(2); // plus 1: 0.010ms
     *
     * const async = new Func(() => new Promise(() => {
     *     setTimeout(resolve, 1000);
     *   }))
     *   .async()
     *   .timing();
     *
     * async();
     * // After 1 second...
     * // anonymous: 1000.010ms
     */

  }, {
    key: 'timing',
    value: function timing(mark) {
      mark = arguments.length ? String(mark) : this.$.name || 'anonymous';

      this.before(function (args) {
        console.time(mark);

        return args;
      }, false);

      this.after(function (ret) {
        console.timeEnd(mark);

        return ret;
      }, false);

      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return function () {}.toString.call(this.$);
    }

    /**
     * @method Func#unbind
     * @public
     * @returns {Func} Returns this.
     * @description Composition of {@link Func#unbindContext} and {@link Func#unbindArgs}.
     *
     * @example
     * const func = new Func(function (a) {
     *   return this.foo + ' & ' +  a;
     * }).bind({ foo: 2 }, 1);
     *
     * func(); // '2 & 1'
     *
     * func.unbind();
     *
     * func(); // 'undefined & undefined'
     */

  }, {
    key: 'unbind',
    value: function unbind() {
      return this.unbindContext().unbindArgs();
    }

    /**
     * @method Func#unbindArgs
     * @public
     * @returns {Func} Returns this.
     * @description Erases all bound arguments.
     *
     * @example
     * const func = new Func((...args) => {
     *   let sum = 0;
     *
     *   for (let i = 0; i < args.length; i++) {
     *     sum += args[i];
     *   }
     *
     *   return sum;
     * }).bindArgs([4, 5]);
     *
     * func(1, 2, 3); // 15
     *
     * func.unbindArgs();
     *
     * func(1, 2, 3); // 6
     */

  }, {
    key: 'unbindArgs',
    value: function unbindArgs() {
      var func = this.$$;

      func.args = func.argsLocked;

      return this;
    }

    /**
     * @method Func#unbindContext
     * @public
     * @returns {Func} Returns this.
     * @description Erases context if it's not locked.
     *
     * @example
     * const func = new Func(function () {
     *   return this.foo;
     * }).bindContext({ foo: 1 });
     *
     * func(); // 1
     *
     * func.unbindArgs();
     *
     * func(); // undefined
     */

  }, {
    key: 'unbindContext',
    value: function unbindContext() {
      var func = this.$$;

      if (!func.contextLocked) {
        func.context = null;
      }

      return this;
    }
  }, {
    key: 'called',
    get: function get() {
      return this.$$.called;
    }
  }]);
  return Func;
}(Super);

defineProperties(Func.prototype, defineProperty({}, _Symbol.toStringTag, 'Func'));

constructors[1].push({
  check: isFunction,
  cls: Func
});

/**
 * @function method
 * @public
 * @param {String} method - Method to call.
 * @param {(Array|Arguments|*)} args - Arguments to call the method with.
 * @returns {Function} Function that calls stated method with given arguments.
 * @description Function that returns the function
 * that calls stated method of its first argument with given arguments.
 *
 * @example
 * [1.2345, 2.789, 3.14].map(method('toFixed', [2])); // ['1.23', '2.79', '3.14']
 */
function method(method) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return function (x) {
    return x[method].apply(x, toArray$1(args));
  };
}

/**
 * @function noop
 * @public
 * @returns {void}
 * @description Empty function.
 */
function noop() {}

/**
 * @function prop
 * @public
 * @param {String} prop - Property to return.
 * @returns {Function} Function that returns given property of its first argument.
 * @description Function that return the function that returns given property of its first argument.
 *
 * @example
 * ['foo', '12', '7890'].map(prop('length')); // [3, 2, 4]
 */
function prop$1(prop) {
  return function (_ref) {
    var value = _ref[prop];
    return value;
  };
}

/**
 * @function self
 * @public
 * @returns {*} First argument itself.
 * @description Function that returns the first argument.
 *
 * @example
 * [1, 2].map(self);                     // [1, 2]
 * [1, 3, NaN, 0, 7, null].filter(self); // [1, 3, 7]
 */
function self$1() {
  return arguments[0];
}

/**
 * @module Num
 * @private
 * @mixin
 * @description Exports Num class.
 */

var toRadian = Math.PI / 180;
var toDegree = 180 / Math.PI;
var ln2 = Math.LN2;
var ln10 = Math.LN10;

/**
 * @class Num
 * @extends Super
 * @public
 * @param {Number} [number = 0] - A number to wrap.
 * @returns {Num} Instance of Num.
 * @description Wrap of a number.
 *
 * @example
 * const num = new Num(1);
 */
var Num = function (_Super) {
  inherits(Num, _Super);

  function Num() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    classCallCheck(this, Num);
    return possibleConstructorReturn(this, (Num.__proto__ || Object.getPrototypeOf(Num)).call(this, number));

    /**
     * @member Num#$
     * @type {Number}
     * @public
     * @description Original number.
     */
  }

  /**
   * @member Num#abs
   * @type {Number}
   * @public
   * @readonly
   * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   * @description Synonym for
   * [Math.abs]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/abs}.
   *
   * @example
   * new Num(1).abs;  // 1
   * new Num(-1).abs; // 1
   */


  createClass(Num, [{
    key: 'acos',


    /**
     * @method Num#acos
     * @public
     * @param {Boolean|*} [toDegrees = false] If it is truthy the return value is transformed into degrees.
     * @returns {Number} Arccosine of the number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
     * @description Synonym for
     * [Math.acos]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/acos}.
     */
    value: function acos(toDegrees) {
      return (toDegrees ? toDegree : 1) * Math.acos(this.$);
    }

    /**
     * @member Num#acosh
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh
     * @description Synonym for
     * [Math.acosh]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh}.
     */

  }, {
    key: 'asin',


    /**
     * @method Num#asin
     * @public
     * @param {Boolean|*} [toDegrees = false] If it is truthy the return value is transformed into degrees.
     * @returns {Number} Arcsine of the number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/asin
     * @description Synonym for
     * [Math.asin]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/asin}.
     */
    value: function asin(toDegrees) {
      return (toDegrees ? toDegree : 1) * Math.asin(this.$);
    }

    /**
     * @method Num#atan
     * @public
     * @param {Boolean|*} [toDegrees = false] If it is truthy the return value is transformed into degrees.
     * @returns {Number} Arcsine of the number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atan
     * @description Synonym for
     * [Math.atan]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atan}.
     */

  }, {
    key: 'atan',
    value: function atan(toDegrees) {
      return (toDegrees ? toDegree : 1) * Math.atan(this.$);
    }

    /**
     * @member Num#atanh
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh
     * @description Synonym for
     * [Math.atanh]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh}.
     */

  }, {
    key: 'cos',


    /**
     * @method Num#cos
     * @public
     * @param {Boolean|*} [asDegrees = false] If it is truthy the number is treated as a degree value.
     * @returns {Number} Cosine of the number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
     * @description Synonym for
     * [Math.cos]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cos}.
     */
    value: function cos(asDegrees) {
      return Math.cos((asDegrees ? toRadian : 1) * this.$);
    }

    /**
     * @member Num#cosh
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh
     * @description Synonym for
     * [Math.cosh]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh}.
     */

  }, {
    key: 'interval',


    /**
     * @method Num#interval
     * @public
     * @param {Function} func - Function that is called every <number> milliseconds.
     * @param {Array} [args] - Arguments passed to the function.
     * @returns {Function} Function that aborts the interval. The context of the function (if it's not already bound)
     * is the object with the abort method.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/setInterval
     * @description Analogue of the
     * [setInterval]{@link https://developer.mozilla.org/en/docs/Web/API/WindowTimers/setInterval}.
     *
     * @example
     * const times = 0;
     * new Num(50).interval(function () {
     *   if (++times === 10) {
     *     this.abort();
     *   }
     * });
     */
    value: function interval(func) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      validate$1([func], ['function'], 'Num#interval');

      func = new Func(func).bindContext({ abort: abort });
      args = toArray$1(args);

      var number = this.$;

      var timeout = void 0;
      var aborted = void 0;

      setTimeout(function interval() {
        func.apply(null, args);

        if (!aborted) {
          timeout = setTimeout(interval, number);
        }
      }, 0);

      return abort;

      function abort() {
        aborted = true;

        return clearTimeout(timeout);
      }
    }

    /**
     * @member Num#ln
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log
     * @description Synonym for
     * [Math.log]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log}.
     */

  }, {
    key: 'log',


    /**
     * @method Num#log
     * @public
     * @param {Number} number - Number to get logarithm of.
     * @returns {Number} Logarithm of the argument number to the number base.
     * @description Returns the logarithm of the argument number to the number base.
     *
     * @example
     * new Num(2).log(16);  // 4
     * new Num(3).log(243); // 5
     */
    value: function log(number) {
      return Math.log(number) / Math.log(this.$);
    }

    /**
     * @member Num#log2
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log2
     * @description Synonym for
     * [Math.log2]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log2}.
     */

  }, {
    key: 'pow',


    /**
     * @method Num#pow
     * @public
     * @param {Number} power - Power the number should be raised to.
     * @returns {Number} The number to the <power> power.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
     * @description Synonym for
     * [Math.pow]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/pow}.
     *
     * @example
     * new Num(4).pow(.5); // 2
     * new Num(3).pow(2);  // 9
     */
    value: function pow(power) {
      return Math.pow(this.$, power);
    }

    /**
     * @method Num#root
     * @public
     * @param {Number} power - Power the number should be raised to.
     * @returns {Number} The <power> root of the number.
     * @description Synonym for number.pow(1 / power);
     *
     * @example
     * new Num(4).root(2);   // 0.5
     * new Num(243).root(5); // 3
     */

  }, {
    key: 'root',
    value: function root(power) {
      return Math.pow(this.$, 1 / power);
    }

    /**
     * @member Num#round
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     * @description Synonym for
     * [Math.round]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/round}.
     *
     * @example
     * new Num(1.1).floor;  // 1
     * new Num(-1.1).floor; // -1
     * new Num(1.5).floor;  // 2
     */

  }, {
    key: 'sin',


    /**
     * @method Num#sin
     * @public
     * @param {Boolean|*} [asDegrees = false] If it is truthy the number is treated as a degree value.
     * @returns {Number} Sine of the number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sin
     * @description Synonym for
     * [Math.sin]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sin}.
     */
    value: function sin(asDegrees) {
      return Math.sin((asDegrees ? toRadian : 1) * this.$);
    }

    /**
     * @member Num#sinh
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh
     * @description Synonym for
     * [Math.sinh]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh}.
     */

  }, {
    key: 'tan',


    /**
     * @method Num#tan
     * @public
     * @param {Boolean|*} [asDegrees = false] If it is truthy the number is treated as a degree value.
     * @returns {Number} Tangent of the number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
     * @description Synonym for
     * [Math.tan]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/tan}.
     */
    value: function tan(asDegrees) {
      return Math.tan((asDegrees ? toRadian : 1) * this.$);
    }

    /**
     * @member Num#tanh
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh
     * @description Synonym for
     * [Math.tanh]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh}.
     */

  }, {
    key: 'timeout',


    /**
     * @method Num#timeout
     * @public
     * @param {*} [value] - Value to be resolved by the promise.
     * @returns {Promise} Promise that could be aborted.
     * @see https://developer.mozilla.org/en/docs/Web/API/WindowTimers/setTimeout
     * @description Promise-based analogue of
     * [setTimeout]{@link https://developer.mozilla.org/en/docs/Web/API/WindowTimers/setTimeout}.
     *
     * @example
     * new Num(50).timeout('resolved').then((value) => {
     *   console.log(value); // 'resolved'
     * });
     *
     * const promise = new Num(50).timeout();
     * promise.abort();
     */
    value: function timeout(value) {
      var _this2 = this;

      var timeout = void 0;
      var reject = void 0;

      var promise = new Promise$1(function (resolve, rej) {
        reject = rej;
        timeout = setTimeout(resolve, _this2.$, value);
      });

      promise.abort = function abort() {
        clearTimeout(timeout);

        reject(new Error('Timeout was aborted'));

        return this;
      };

      return promise;
    }

    /**
     * @method Num#toBase
     * @public
     * @param {Number} [base = 10] - Base that the number should inverted to.
     * @returns {String} A string representation of the number in <base> base.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
     * @description Synonym for
     * [Number#toString]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toString}.
     *
     * @example
     * new Num(4).toBase(2); // 100
     * new Num(3).toBase();  // 3
     */

  }, {
    key: 'toBase',
    value: function toBase() {
      var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

      return this.$.toString(base);
    }

    /**
     * @method Num#toExponential
     * @public
     * @param {Number} [fractionDigits] - See the link.
     * @returns {String} A string representation of the number in the exponential format.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
     * @description Synonym for
     * [Number#toExponential]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential}.
     */

  }, {
    key: 'toExponential',
    value: function toExponential(fractionDigits) {
      return this.$.toExponential(fractionDigits);
    }

    /**
     * @method Num#toFixed
     * @public
     * @param {Number} [digits = 0] - See the link.
     * @returns {String} Fixed-point formatted number.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     * @description Synonym for
     * [Number#toFixed]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed}.
     */

  }, {
    key: 'toFixed',
    value: function toFixed(digits) {
      return this.$.toFixed(digits);
    }

    /**
     * @method Num#toPrecision
     * @public
     * @param {Number} [precision] - See the link.
     * @returns {String} A string representation of the number to the specified precision.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
     * @description Synonym for
     * [Number#toPrecision]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision}.
     */

  }, {
    key: 'toPrecision',
    value: function toPrecision(precision) {
      return this.$.toPrecision(precision);
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return Number(this.$);
    }
  }, {
    key: 'abs',
    get: function get() {
      return Math.abs(this.$);
    }
  }, {
    key: 'acosh',
    get: function get() {
      var number = this.$;

      return Math.log(number + Math.sqrt(number * number - 1));
    }

    /**
     * @member Num#asinh
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh
     * @description Synonym for
     * [Math.asinh]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh}.
     */

  }, {
    key: 'asinh',
    get: function get() {
      var number = this.$;

      return Math.log(number + Math.sqrt(number * number + 1));
    }
  }, {
    key: 'atanh',
    get: function get() {
      var number = this.$;

      return Math.log((1 + number) / (1 - number)) / 2;
    }

    /**
     * @member Num#cbrt
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
     * @description Synonym for
     * [Math.cbrt]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt}.
     */

  }, {
    key: 'cbrt',
    get: function get() {
      var cbrt = Math.pow(Math.abs(this.$), 1 / 3);

      return this.$ > 0 ? cbrt : -cbrt;
    }

    /**
     * @member Num#ceil
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
     * @description Synonym for
     * [Math.ceil]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil}.
     *
     * @example
     * new Num(1.1).ceil;  // 2
     * new Num(-1.1).ceil; // -1
     */

  }, {
    key: 'ceil',
    get: function get() {
      return Math.ceil(this.$);
    }
  }, {
    key: 'cosh',
    get: function get() {
      var exp = this.exp;

      return (exp + 1 / exp) / 2;
    }

    /**
     * @member Num#cube
     * @type {Number}
     * @public
     * @readonly
     * @description Cube of the number.
     *
     * @example
     * new Num(2).cube;  // 8
     * new Num(-3).ceil; // -27
     */

  }, {
    key: 'cube',
    get: function get() {
      return this.$ * this.$ * this.$;
    }

    /**
     * @member Num#exp
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/exp
     * @description Synonym for
     * [Math.exp]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/exp}.
     */

  }, {
    key: 'exp',
    get: function get() {
      return Math.exp(this.$);
    }

    /**
     * @member Num#floor
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
     * @description Synonym for
     * [Math.floor]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor}.
     *
     * @example
     * new Num(1.1).floor;  // 1
     * new Num(-1.1).floor; // -2
     */

  }, {
    key: 'floor',
    get: function get() {
      return Math.floor(this.$);
    }
  }, {
    key: 'ln',
    get: function get() {
      return Math.log(this.$);
    }
  }, {
    key: 'log2',
    get: function get() {
      return this.ln / ln2;
    }

    /**
     * @member Num#log10
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
     * @description Synonym for
     * [Math.log10]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/log10}.
     */

  }, {
    key: 'log10',
    get: function get() {
      return this.ln / ln10;
    }
  }, {
    key: 'round',
    get: function get() {
      return Math.round(this.$);
    }

    /**
     * @member Num#sign
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
     * @description Synonym for
     * [Math.sign]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sign}.
     */

  }, {
    key: 'sign',
    get: function get() {
      var number = this.$;

      if (!number) {
        return number;
      }

      return number > 0 ? 1 : -1;
    }
  }, {
    key: 'sinh',
    get: function get() {
      var exp = this.exp;

      return (exp - 1 / exp) / 2;
    }

    /**
     * @member Num#sq
     * @type {Number}
     * @public
     * @readonly
     * @description The square of the number.
     *
     * @example
     * new Num(2).sq;  // 4
     * new Num(-3).sq; // 9
     */

  }, {
    key: 'sq',
    get: function get() {
      return this.$ * this.$;
    }

    /**
     * @member Num#sqrt
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
     * @description Synonym for
     * [Math.sqrt]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt}.
     */

  }, {
    key: 'sqrt',
    get: function get() {
      return Math.sqrt(this.$);
    }
  }, {
    key: 'tanh',
    get: function get() {
      var number = this.$;

      if (!isFinite(number)) {
        return this.sign;
      }

      var exp = Math.exp(2 * number);

      return (exp - 1) / (exp + 1);
    }
  }]);
  return Num;
}(Super);

defineProperties(Num.prototype, defineProperty({}, _Symbol.toStringTag, 'Num'));

constructors[1].push({
  check: isNumber,
  cls: Num
});

/**
 * @function rand
 * @public
 * @param {Number} [start = 0] - Start of the range.
 * @param {Number} [end = 1] - End of the range.
 * @returns {Number} Random number.
 * @description Returns a random number in the range specified by the arguments.
 *
 * @example
 * rand(1, 5); // 2.315
 * rand(1, 5); // 4.356763
 */
function rand() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return start + (end - start) * Math.random();
}

/**
 * @function random
 * @public
 * @param {Integer} start - Start of the range.
 * @param {Integer} end - End of the range.
 * @returns {Number} Random integer.
 * @description Returns a random integer number in the range specified by the arguments.
 *
 * @example
 * random(1, 5); // 3
 * random(1, 5); // 1
 */
function random(start, end) {
  validate$1([start, end], ['intLike', 'intLike'], 'random');

  if (end <= start) {
    throw new Error('The second argument must be greater than the first!', 'random');
  }

  return Math.floor(rand(start, end + 1));
}

/**
 * @module constants/regexpSpecialCharacters
 * @private
 * @description Exports special characters for RegExp.
 */

/**
 * @const
 * @name module:constants/regexpSpecialCharacters~regexpSpecialCharacters
 * @type {String[]}
 */
var regexpSpecialCharacters = ['.', '+', '*', '?', '(', ')', '[', ']', '{', '}', '<', '>', '^', '$', '!', '=', ':', '-', '|', ',', '\\'];

/**
 * @module Str
 * @private
 * @mixin
 * @description Exports Str class.
 */

var htmlSpecials = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
var regexpSpecialsRegexp = new RegExp(new Super(regexpSpecialCharacters).word(function (x) {
  return '\\' + x + '|';
}).replace(/\|$/, ''), 'g');

/**
 * @class Str
 * @extends Super
 * @public
 * @param {String} [string = ''] - A string to wrap.
 * @returns {Str} Instance of Str.
 * @description Wrap of a string.
 *
 * @example
 * const s = new Num('1');
 */
var Str = function (_Super) {
  inherits(Str, _Super);

  function Str() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    classCallCheck(this, Str);
    return possibleConstructorReturn(this, (Str.__proto__ || Object.getPrototypeOf(Str)).call(this, string));

    /**
     * @member Str#$
     * @type {String}
     * @public
     * @description Original string.
     */
  }

  /**
   * @method Str#capitalizeFirst
   * @public
   * @returns {Str} Capitalized string.
   * @description Method capitalizing the first symbol.
   *
   * @example
   * new Str('foo').capitalizeFirst().$; // 'Foo'
   */


  createClass(Str, [{
    key: 'capitalizeFirst',
    value: function capitalizeFirst() {
      var string = this.$;

      return new Str(string.slice(0, 1).toUpperCase() + string.slice(1));
    }

    /**
     * @method Str#endsWith
     * @public
     * @param {String} searchString - See the link.
     * @param {Number} [position = string.length] - See the link.
     * @returns {Boolean} If the string ends with the argument string.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
     * @description Synonym for
     * [String#endsWith]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith}.
     */

  }, {
    key: 'endsWith',
    value: function endsWith(searchString, position) {
      if (arguments.length < 2) {
        position = this.$.length;
      }

      return this.slice(0, position).revert().startsWith(new Str(searchString).revert().$);
    }

    /**
     * @method Str#escapeHTML
     * @public
     * @returns {Str} New instance of Str.
     * @description Methods escaping "&", "<" and ">" symbols.
     *
     * @example
     * new Str('"1 < 2" & "7 > 4" are true expressions.').escapeHTML().$;
     * // '"1 &lt; 2" &amp "7 &gt; 2" are true expressions.'
     */

  }, {
    key: 'escapeHTML',
    value: function escapeHTML() {
      var string = this.$;

      iterate(htmlSpecials, function (escaped, symbol) {
        string = string.replace(new RegExp(symbol, 'g'), escaped);
      });

      return new Str(string);
    }

    /**
     * @method Str#escapeRegExp
     * @public
     * @returns {Str} New instance of Str.
     * @description Method escaping RegExp special characters.
     *
     * @example
     * new Str('(213.98 - [] {})').escapeRegExp().$; // '\(213\.98 \- \[\] \{\}\)'
     */

  }, {
    key: 'escapeRegExp',
    value: function escapeRegExp() {
      return this.replace(regexpSpecialsRegexp, '\\$&');
    }

    /**
     * @method Str#in
     * @public
     * @param {*} object - Object to check the string as a property in.
     * @returns {Boolean} If it is in the object or not.
     * @description Returns string in object.
     *
     * @example
     * new Str('a').in({ a: 1 }); // true
     * new Str('toFixed').in(1);  // false
     * new Str('a').in(null);     // false
     */

  }, {
    key: 'in',
    value: function _in(object) {
      if (!isObject(object)) {
        return false;
      }

      return this.$ in object;
    }

    /**
     * @method Str#indexOf
     * @public
     * @param {String} searchValue - See the link.
     * @param {Number} [fromIndex = 0] - See the link.
     * @returns {Number} Found index or -1.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
     * @description Synonym for
     * [String#indexOf]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf}.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(searchValue, fromIndex) {
      return this.$.indexOf.apply(this.$, arguments);
    }

    /**
     * @method Str#lastIndexOf
     * @public
     * @param {String} searchValue - See the link.
     * @param {Number} [fromIndex = string.length] - See the link.
     * @returns {Number} Found index or -1.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
     * @description Synonym for
     * [String#lastIndexOf]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf}.
     */

  }, {
    key: 'lastIndexOf',
    value: function lastIndexOf(searchValue, fromIndex) {
      return this.$.lastIndexOf.apply(this.$, arguments);
    }

    /**
     * @member Str#length
     * @type {Number}
     * @public
     * @readonly
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/length
     * @description Synonym for
     * [String#length]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/length}.
     */

  }, {
    key: 'match',


    /**
     * @method Str#match
     * @public
     * @returns {Arr|Super} D-Wrap of found match.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match
     * @description Synonym for
     * [String#match]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match}.
     */
    value: function match(regexp) {
      return D$2(this.$.match.apply(this.$, arguments));
    }

    /**
     * @method Str#repeat
     * @public
     * @param {Integer} times - Times to repeat the string.
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     * @description Synonym for
     * [String#repeat]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat}.
     *
     * @example
     * new Str('123').repeat(2).$; // '123123'
     * new Str('123').repeat(0).$; // ''
     */

  }, {
    key: 'repeat',
    value: function repeat(times) {
      validate$1([times], [['intLike', '>=0']], 'Str#repeat');

      times = +times;

      var string = this.$;

      var s = '';

      for (var i = 0; i < times; i++) {
        s += string;
      }

      return new Str(s);
    }

    /**
     * @method Str#replace
     * @public
     * @param {RegExp|String} regexp - See the link.
     * @param {String|Function} [replacer = ''] - See the link.
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     * @description Synonym for
     * [String#replace]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace}
     * besides that replacer has a default value of ''.
     */

  }, {
    key: 'replace',
    value: function replace(regexp) {
      var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return new Str(this.$.replace(regexp, replacer));
    }

    /**
     * @method Str#replaceString
     * @public
     * @param {String} string - String to replace.
     * @param {String} [replacer = ''] - String to replace with.
     * @returns {Str} New instance of Str.
     * @description Method for global string replaceing.
     *
     * @example
     * new Str('123123').replaceString('1', '4').$; // '423423'
     * new Str('123123').replaceString('1').$;      // '2323'
     */

  }, {
    key: 'replaceString',
    value: function replaceString(string) {
      var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      string = new Super(string).$;

      validate$1([string], ['string'], 'Str#replaceString');

      return new Str(this.$.split(string).join(replacer));
    }

    /**
     * @method Str#revert
     * @public
     * @returns {Str} New instance of string.
     * @description Method for reverting a string.
     *
     * @example
     * new Str('1234').revert().$; // '4321'
     */

  }, {
    key: 'revert',
    value: function revert() {
      var string = this.$;
      var str = '';

      for (var i = string.length - 1; i >= 0; i--) {
        str += string[i];
      }

      return new Str(str);
    }

    /**
     * @method Str#search
     * @public
     * @param {RegExp} regexp - See the link.
     * @returns {Number} Index of the first match, if found, and -1 if not.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/search
     * @description Synonym for
     * [String#search]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/search}.
     */

  }, {
    key: 'search',
    value: function search(regexp) {
      validate$1([regexp], ['regexp']);

      return this.$.search.apply(this.$, arguments);
    }

    /**
     * @method Str#slice
     * @public
     * @param {Number} [beginSlice = 0] - See the link.
     * @param {Number} [endSlice = string.length] - See the link.
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice
     * @description Synonym for
     * [String#slice]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice}.
     */

  }, {
    key: 'slice',
    value: function slice(beginSlice, endSlice) {
      return new Str(this.$.slice.apply(this.$, arguments));
    }

    /**
     * @method Str#split
     * @public
     * @param {RegExp|String} [separator] - See the link.
     * @returns {Arr|Super} D-Wrap of the array.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split
     * @description Synonym for
     * [String#split]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split}.
     */

  }, {
    key: 'split',
    value: function split(separator) {
      return D$2(this.$.split.apply(this.$, arguments));
    }

    /**
     * @method Str#startsWith
     * @public
     * @param {String} searchString - See the link.
     * @param {Number} [position = 0] - See the link.
     * @returns {Boolean} If the string ends with the argument string.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
     * @description Synonym for
     * [String#startsWith]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith}.
     */

  }, {
    key: 'startsWith',
    value: function startsWith(searchString) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this.$.indexOf.apply(this.$, arguments) === position;
    }

    /**
     * @method Str#substr
     * @public
     * @param {Number} [start = 0] - See the link.
     * @param {Number} [length = string.length] - See the link.
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr
     * @description Synonym for
     * [String#substr]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr}.
     */

  }, {
    key: 'substr',
    value: function substr(start, length) {
      return new Str(this.$.substr.apply(this.$, arguments));
    }

    /**
     * @method Str#substring
     * @public
     * @param {Number} [indexStart = 0] - See the link.
     * @param {Number} [indexEnd = string.length] - See the link.
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring
     * @description Synonym for
     * [String#substring]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring}.
     */

  }, {
    key: 'substring',
    value: function substring(indexStart, indexEnd) {
      return new Str(this.$.substring.apply(this.$, arguments));
    }

    /**
     * @method Str#toCamelCase
     * @public
     * @returns {Str} New instance of Str.
     * @description Removes following regexp /\s\-_\./ making the string camel cased.
     *
     * @example
     * new Str('spinal-case').toCamelCase().$;  // 'spinalCase'
     * new Str('_snake_case_').toCamelCase().$; // 'snakeCase'
     */

  }, {
    key: 'toCamelCase',
    value: function toCamelCase() {
      return new Str(trim(this.$).replace(/[\s\-_\.]+/g, '-').replace(/\-[^\-]/g, function (match) {
        return match[1].toUpperCase();
      }).replace(/^[\S]/, function (match) {
        return match.toLowerCase();
      }));
    }

    /**
     * @method Str#toCapitalCase
     * @public
     * @returns {Str} New instance of Str.
     * @description Removes following regexp /\-_\./ making the string capital letter cased.
     *
     * @example
     * new Str('spinal-case').toCapitalCase().$;  // 'Spinal Case'
     * new Str('_snake_case_').toCapitalCase().$; // 'Snake Case'
     */

  }, {
    key: 'toCapitalCase',
    value: function toCapitalCase() {
      return new Str(trim(this.$).replace(/[\s\-_\.]+/g, ' ').replace(/[\S]/g, function (match) {
        return match.toLowerCase() === match ? match : ' ' + match;
      }).replace(/\s[\S]/g, function (match) {
        return match.toUpperCase();
      }).replace(/\s+/g, ' ').replace(/^\s/, '').replace(/^[\S]/, function (match) {
        return match.toUpperCase();
      }));
    }

    /**
     * @method Str#toDotCase
     * @public
     * @returns {Str} New instance of Str.
     * @description Removes following regexp /\-_\./ making the string dot cased.
     *
     * @example
     * new Str('spinal-case').toDotCase().$;  // 'spinal.case'
     * new Str('_snake_case_').toDotCase().$; // 'snake.case'
     */

  }, {
    key: 'toDotCase',
    value: function toDotCase() {
      return new Str(trim(this.$).replace(/[\s\-_\.]+/g, '.').replace(/[^\.]/g, function (match) {
        return match.toLowerCase() === match ? match : '.' + match;
      }).replace(/\.+/g, '.').replace(/^\./, '').toLowerCase());
    }

    /**
     * @method Str#toHyphenCase
     * @public
     * @returns {Str} New instance of Str.
     * @description Removes following regexp /\s\-_\./ making the string camel cased.
     *
     * @example
     * new Str('camelCase').toSpinalCase().$;    // 'camel-case'
     * new Str('_snake_case_').toSpinalCase().$; // 'snake-case'
     */

  }, {
    key: 'toHyphenCase',
    value: function toHyphenCase() {
      return new Str(trim(this.$).replace(/[\s\-_\.]+/g, '-').replace(/[^\-]/g, function (match) {
        return match.toLowerCase() === match ? match : '-' + match;
      }).replace(/\-+/g, '-').replace(/^\-/, '').toLowerCase());
    }

    /**
     * @method Str#toLowerCase
     * @public
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
     * @description Synonym for
     * [String#toLowerCase]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase}.
     *
     * @example
     * new Str('UPPER-CASE').toLowerCase().$;  // 'upper-case'
     */

  }, {
    key: 'toLowerCase',
    value: function toLowerCase() {
      return new Str(this.$.toLowerCase());
    }

    /**
     * @method Str#toSnakeCase
     * @public
     * @returns {Str} New instance of Str.
     * @description Removes following regexp /\s\-\./ making the string spinal cased.
     *
     * @example
     * new Str('spinal-case').toSnakeCase().$; // 'spinal_case'
     * new Str('camelCase').toSnakeCase().$;   // 'camel_case'
     */

  }, {
    key: 'toSnakeCase',
    value: function toSnakeCase() {
      return new Str(trim(this.$).replace(/[\s\-_\.]+/g, '_').replace(/[^_]/g, function (match) {
        return match.toLowerCase() === match ? match : '_' + match;
      }).replace(/_+/g, '_').replace(/^_/, '').toLowerCase());
    }

    /**
     * @method Str#toSpaceCase
     * @public
     * @returns {Str} New instance of Str.
     * @description Removes following regexp /\-_\./ making the string space cased.
     *
     * @example
     * new Str('spinal-case').toSpaceCase().$;  // 'spinal case'
     * new Str('_snake_case_').toSpaceCase().$; // 'snake case'
     */

  }, {
    key: 'toSpaceCase',
    value: function toSpaceCase() {
      return new Str(trim(this.$).replace(/[\s\-_\.]+/g, ' ').replace(/[\S]/g, function (match) {
        return match.toLowerCase() === match ? match : ' ' + match;
      }).replace(/\s+/g, ' ').replace(/^\s/, '').toLowerCase());
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.$;
    }

    /**
     * @method Str#toUpperCase
     * @public
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
     * @description Synonym for
     * [String#toUpperCase]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase}.
     *
     * @example
     * new Str('lower-case').toUpperCase().$;  // 'LOWER-CASE'
     */

  }, {
    key: 'toUpperCase',
    value: function toUpperCase() {
      return new Str(this.$.toUpperCase());
    }

    /**
     * @method Str#trim
     * @public
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     * @description Synonym for
     * [String#trim]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trim}.
     */

  }, {
    key: 'trim',
    value: function trim() {
      return new Str(this.$.replace(/^[\s\ufeff\u00a0]+|[\s\ufeff\u00a0]+$/g, ''));
    }

    /**
     * @method Str#trimLeft
     * @public
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft
     * @description Synonym for
     * [String#trimLeft]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft}.
     */

  }, {
    key: 'trimLeft',
    value: function trimLeft() {
      return new Str(this.$.replace(/^[\s\ufeff\u00a0]+/, ''));
    }

    /**
     * @method Str#trimRight
     * @public
     * @returns {Str} New instance of Str.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight
     * @description Synonym for
     * [String#trimRight]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight}.
     */

  }, {
    key: 'trimRight',
    value: function trimRight() {
      return new Str(this.$.replace(/[\s\ufeff\u00a0]+$/, ''));
    }
  }, {
    key: 'length',
    get: function get() {
      return this.$.length;
    }
  }]);
  return Str;
}(Super);

defineProperties(Str.prototype, defineProperty({}, _Symbol.toStringTag, 'Str'));

function trim(string) {
  return string.replace(/^[\s\-_\.]+|[\s\-_\.]+$/g, '');
}

/**
 * @function parseJSON
 * @public
 * @param {String} [json = null] - String to parse.
 * @param {Object} [options] - Options.
 * @param {Boolean|*} [options.numbers] - If it is needed to parse number-like strings as numbers.
 * @param {Boolean|*} [options.dates] - If it is needed to parse date-like string as dates.
 * Date-like string is considered to match ^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ?$
 * @param {JSONCallback} [callback] - Callback that called on every iteration.
 * @returns {DWrap} D-Wrap of found match.
 * @description Method for parsing json.
 *
 * @example
 * parseJSON('{ "a": 1 }').$;                                           // { a: 1 }
 * parseJSON('{ "a": "1" }', { numbers: true }).$;                      // { numbers: true }
 * parseJSON('{ "a": "1999-12-31T23:59:59.999Z" }', { dates: true }).$; // { a: Date {...} }
 */
function parseJSON() {
  var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var callback = arguments[2];

  if (arguments.length <= 1) {
    return D$2(JSON.parse(json));
  }

  if (isFunction(options)) {
    callback = options;
    options = {};
  }

  var _options = options;
  var numbers = _options.numbers;
  var dates = _options.dates;

  var parsed = JSON.parse(json, function (key, value) {
    if (dates && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ?$/.test(value)) {
      value = new Date(value);
    } else if (numbers && isNumberLike(value) && isString(value)) {
      value = Number(value);
    }

    return callback ? callback.apply(this, arguments) : value;
  });

  return D$2(parsed);
}

constructors[2].push({
  check: isString,
  cls: Str
});

/**
 * @module constants/formats
 * @private
 * @description Exports different types of formatting for {@link Date#format}.
 */

var zero = new Str('0');
var daysOfTheWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var daysOfTheWeekAliases = new Super(daysOfTheWeekNames).map(function (value) {
  return value.slice(0, 3);
}).$;
var monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
var monthsAliases = new Super(monthsNames).map(function (value) {
  return value.slice(0, 3);
}).$;

/**
 * @callback module:constants/formats~matchCallback
 * @param {Dat} date - D-wrap of a date to apply format to.
 * @param {String} string - Matched applied expression.
 */

/**
 * @typedef {Object} module:constants/formats~formatExpr
 * @property {String} format - Matched format.
 * @property {module:constants/formats~matchCallback} match - Callback if there was a match.
 */

/**
 * @type {module:constants/formats~formatExpr[]}
 * @description Array of different formats.
 */
var formats = [{
  format: 'ccc',
  match: function match(date, utc) {
    return round(date[utc]('c'), 3);
  }
}, {
  format: 'c',
  match: function match(date, utc) {
    return date[utc]('c');
  }
}, {
  format: 'ss',
  match: function match(date, utc) {
    return round(date[utc]('s'), 2);
  }
}, {
  format: 's',
  match: function match(date, utc) {
    return date[utc]('s');
  }
}, {
  format: 'mm',
  match: function match(date, utc) {
    return round(date[utc]('m'), 2);
  }
}, {
  format: 'm',
  match: function match(date, utc) {
    return date[utc]('m');
  }
}, {
  format: 'hh',
  match: function match(date, utc) {
    return round(date[utc]('h'), 2);
  }
}, {
  format: 'h',
  match: function match(date, utc) {
    return date[utc]('h');
  }
}, {
  format: 'dddd',
  match: function match(date, utc) {
    return daysOfTheWeekNames[date[utc]('dw')];
  }
}, {
  format: 'ddd',
  match: function match(date, utc) {
    return daysOfTheWeekAliases[date[utc]('dw')];
  }
}, {
  format: 'dd',
  match: function match(date, utc) {
    return round(date[utc]('d'), 2);
  }
}, {
  format: 'd',
  match: function match(date, utc) {
    return date[utc]('d');
  }
}, {
  format: 'MMMM',
  match: function match(date, utc) {
    return monthsNames[date[utc]('M') - 1];
  }
}, {
  format: 'MMM',
  match: function match(date, utc) {
    return monthsAliases[date[utc]('M') - 1];
  }
}, {
  format: 'MM',
  match: function match(date, utc) {
    return round(date[utc]('M'), 2);
  }
}, {
  format: 'M',
  match: function match(date, utc) {
    return date[utc]('M');
  }
}, {
  format: 'yyyy',
  match: function match(date, utc) {
    return round(date[utc]('y'), 4);
  }
}, {
  format: 'yy',
  match: function match(date, utc) {
    return String(date[utc]('y')).slice(-2);
  }
}, {
  format: 'y',
  match: function match(date, utc) {
    return date[utc]('y');
  }
}];

/**
 * @function round
 * @private
 * @param {Number} number - Number to round.
 * @param {Number} digits - Number of the digits of the output.
 * @returns {String} String with necessary additional starting zeroes.
 */
function round(number, digits) {
  var string = String(number);
  var zeroes = digits - string.length;

  zeroes = zeroes < 0 ? 0 : zeroes;

  return zero.repeat(zeroes).$ + string;
}

/**
 * @module Dat
 * @private
 * @mixin
 * @description Exports Dat class.
 */

/**
 * @typedef {*} DateLike
 * @public
 */

/**
 * @typedef {'c'|'s'|'m'|'h'|'d'|'w'|'M'|'y'} AddPeriod
 * @public
 */

/**
 * @typedef {'c'|'s'|'m'|'h'|'d'|'dw'|'M'|'y'} GetPeriod
 * @public
 */

/**
 * @typedef {'c'|'s'|'m'|'h'|'d'|'M'|'y'} OfOnePeriod
 * @public
 */

/**
 * @typedef {'c'|'s'|'m'|'h'|'d'|'M'|'y'} SetPeriod
 * @public
 */

/**
 * @typedef {'ccc'|'c'|'ss'|'s'|'mm'|'m'|'hh'|'h'|'dddd'|'ddd'|'dd'|'d'|'MMMM'|'MMM'|'MM'|'M'|'yyyy'|'yy'|'y'} Format
 * @public
 */

var coeffs = {
  c: 1,
  s: 1000,
  m: 60000,
  h: 3600000,
  d: 86400000,
  w: 604800000,
  M: 2592000000,
  y: 31536000000
};

var getSwitcher = switcher({
  c: function c(date, utc) {
    return date[utc + 'Milliseconds']();
  },
  s: function s(date, utc) {
    return date[utc + 'Seconds']();
  },
  m: function m(date, utc) {
    return date[utc + 'Minutes']();
  },
  h: function h(date, utc) {
    return date[utc + 'Hours']();
  },
  d: function d(date, utc) {
    return date[utc + 'Date']();
  },
  dw: function dw(date, utc) {
    return date[utc + 'Day']();
  },
  M: function M(date, utc) {
    return date[utc + 'Month']() + 1;
  },
  y: function y(date, utc) {
    return date[utc + 'FullYear']();
  }
}, 'equals', NaN);
var setSwitcher = switcher({
  c: function c(date, value, utc) {
    return date[utc + 'Milliseconds'](value);
  },
  s: function s(date, value, utc) {
    return date[utc + 'Seconds'](value);
  },
  m: function m(date, value, utc) {
    return date[utc + 'Minutes'](value);
  },
  h: function h(date, value, utc) {
    return date[utc + 'Hours'](value);
  },
  d: function d(date, value, utc) {
    return date[utc + 'Date'](value);
  },
  M: function M(date, value, utc) {
    return date[utc + 'Month'](value - 1);
  },
  y: function y(date, value, utc) {
    return date[utc + 'FullYear'](value);
  }
});

/**
 * @class Dat
 * @extends Super
 * @public
 * @param {Date} [date = new Date()] - A date to wrap.
 * @returns {Dat} Instance of Dat.
 * @description Wrap of a date.
 *
 * @example
 * const date = new Dat(new Date());
 */

var Dat = function (_Super) {
  inherits(Dat, _Super);

  function Dat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    classCallCheck(this, Dat);
    return possibleConstructorReturn(this, (Dat.__proto__ || Object.getPrototypeOf(Dat)).call(this, date));

    /**
     * @member Dat#$
     * @type {Date}
     * @public
     * @description Original date.
     */
  }

  /**
   * @method Dat#add
   * @public
   * @param {AddPeriod|Object.<AddPeriod, Number>} what - What to add.
   * @param {Number} [number] - Number of what to add if the first argument is a period string.
   * @returns {Dat} Returns this.
   * @description Method for adding amounts of time to the date. Returns new instance of Dat.
   *
   * @example
   * new Dat(new Date('1999-12-31T23:59:59.999Z')).add('c', 2).toISOString();         // '2000-01-01T00:00:00.001Z'
   * new Dat(new Date('1999-12-31T23:59:59.999Z')).add({ c: 2, d: 5 }).toISOString(); // '2000-01-06T00:00:00.001Z'
   */


  createClass(Dat, [{
    key: 'add',
    value: function add(what, number) {
      if (arguments.length >= 2) {
        what = defineProperty({}, what, number);
      }

      return this.time(this.time() + new Super(what).sum(function (value, what) {
        return coeffs[what] * value;
      }));
    }

    /**
     * @method Dat#expires
     * @public
     * @param {*} [value = this] - Value to resolve after the date expires.
     * @returns {Promise} New instance of Promise.
     * @description Method for defining when the date expires.
     *
     * @example
     * new Dat().add('c', 500).expires('Expired').then((value) => {
     *   // After 500 milliseconds
     *   console.log(value); // 'Expired'
     * });
     */

  }, {
    key: 'expires',
    value: function expires(value) {
      if (!arguments.length) {
        value = this;
      }

      return new Num(this.$ - now()).timeout(value);
    }

    /**
     * @method Dat#format
     * @public
     * @param {String} string - Template for the output.
     * @param {String} [prefix = ''] - If needed [all special strings]{@link Format}
     * are treated as they should be prefix with prefix.
     * @returns {String} Formatted string.
     * @description Method for creating formatted output based on a string.
     *
     * @example
     * new Dat('1999-12-31T23:59:59.999Z').format('Seconds: $ss, milliseconds: $ccc.', '$');
     * // 'Seconds: 59, milliseconds: 999.'
     */

  }, {
    key: 'format',
    value: function format(string) {
      var _this2 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      string = new Str(new Super(string).$);
      prefix = String(new Super(prefix).$);

      iterate(formats, function (format) {
        string = string.replaceString(prefix + format.format, format.match(_this2, 'get'));
      });

      return string.$;
    }

    /**
     * @method Dat#formatUTC
     * @public
     * @param {String} string - See {@link Dat#format}.
     * @param {String} [prefix = ''] - See {@link Dat#format}.
     * @returns {String} Formatted string.
     * @description UTC version of {@link Dat#format}.
     *
     * @example
     * new Dat('1999-07-07T03:09:09.099Z').formatUTC(
     *   `
     *     Milliseconds: $ccc|$c.
     *     Seconds:      $ss|$s.
     *     Minutes:      $mm|$m.
     *     Hours:        $hh|$h.
     *     Day:          $dddd|$ddd|$dd|$d.
     *     Month:        $MMMM|$MMM|$MM|$M.
     *     Year:         $yyyy|$yy|$y.
     *   `,
     *   '$'
     * );
     * // Milliseconds: 099|99.
     * // Seconds:      09|9.
     * // Minutes:      09|9.
     * // Hours:        03|3.
     * // Day:          Friday|Fri|07|7.
     * // Month:        July|Jul|07|7.
     * // Year:         1999|99|1999.
     */

  }, {
    key: 'formatUTC',
    value: function formatUTC(string) {
      var _this3 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      string = new Str(new Super(string).$);
      prefix = String(new Super(prefix).$);

      iterate(formats, function (format) {
        string = string.replaceString(prefix + format.format, format.match(_this3, 'getUTC'));
      });

      return string.$;
    }

    /**
     * @method Dat#get
     * @public
     * @param {GetPeriod} what - What to get.
     * @returns {Number} Number of what to get.
     * @description Method for getting values such as seconds or minutes.
     *
     * @example
     * new Dat(new Date('1999-12-31T23:59:59.999Z')).get('s'); // 59
     */

  }, {
    key: 'get',
    value: function get(what) {
      return getSwitcher(what, [this.$, 'get']);
    }

    /**
     * @method Dat#getUTC
     * @public
     * @param {GetPeriod} what - See {@link Dat#get}.
     * @returns {Number} Number of what to get.
     * @description UTC version of {@link Dat#get}.
     *
     * @example
     * const date = new Dat(new Date('1999-12-31T23:59:59.999Z'));
     *
     * date.getUTC('c');  // 999
     * date.getUTC('s');  // 59
     * date.getUTC('m');  // 59
     * date.getUTC('h');  // 23
     * date.getUTC('d');  // 31
     * date.getUTC('dw'); // 5
     * date.getUTC('M');  // 12
     * date.getUTC('y');  // 1999
     */

  }, {
    key: 'getUTC',
    value: function getUTC(what) {
      return getSwitcher(what, [this.$, 'getUTC']);
    }

    /**
     * @method Dat#isAfter
     * @public
     * @param {DateLike} date - Date to be compared to this date.
     * @returns {Boolean} If this date is after the argument one.
     * @description Finds out if this date is after the argument one.
     *
     * @example
     * new Dat(new Date(333)).isAfter(new Date(334)); // false
     * new Dat(new Date(333)).isAfter(new Date(332)); // true
     */

  }, {
    key: 'isAfter',
    value: function isAfter(date) {
      date = new Date(new Super(date).$);

      return date.getTime() < this.$.getTime();
    }

    /**
     * @method Dat#isBefore
     * @public
     * @param {DateLike} date - Date to be compared to this date.
     * @returns {Boolean} If this date is before the argument one.
     * @description Finds out if this date is before the argument one.
     *
     * @example
     * new Dat(new Date(333)).isBefore(new Date(334)); // true
     * new Dat(new Date(333)).isBefore(new Date(332)); // false
     */

  }, {
    key: 'isBefore',
    value: function isBefore(date) {
      date = new Date(new Super(date).$);

      return date.getTime() > this.$.getTime();
    }

    /**
     * @method Dat#isBetween
     * @public
     * @param {DateLike} date1 - Start of the range.
     * @param {DateLike} date2 - End of the range.
     * @returns {Boolean} If this date is after date1 and before date2.
     * @description Finds out if this date is after date1 and before date2.
     *
     * @example
     * new Dat(new Date(333)).isBetween(new Date(332), new Date(334)); // true
     * new Dat(new Date(333)).isBetween(new Date(334), new Date(332)); // false
     */

  }, {
    key: 'isBetween',
    value: function isBetween(date1, date2) {
      var time = this.$.getTime();

      date1 = new Date(new Super(date1).$);
      date2 = new Date(new Super(date2).$);

      return time > date1.getTime() && time < date2.getTime();
    }

    /**
     * @method Dat#isInvalid
     * @public
     * @returns {Boolean} If the date is invalid.
     * @description Returns if the date is invalid.
     *
     * @example
     * new Dat(new Date('a')).isInvalid(); // true
     * new Dat(new Date(1)).isInvalid();   // false
     */

  }, {
    key: 'isInvalid',
    value: function isInvalid() {
      return this.$.toString() === 'Invalid Date';
    }

    /**
     * @method Dat#isPassed
     * @public
     * @returns {Boolean} If the date is passed.
     * @description Returns if the date is passed.
     *
     * @example
     * new Dat(new Date(1)).isPassed(); // true
     */

  }, {
    key: 'isPassed',
    value: function isPassed() {
      return this.isBefore(now());
    }

    /**
     * @method Dat#ofOne
     * @public
     * @param {OfOnePeriod} what - Period to check.
     * @param {DateLike} date - Date to check.
     * @returns {Boolean} If two dates are of one second, minute or something else.
     * @description Returns if two dates are of one second, minute or something else.
     *
     * @example
     * new Dat(new Date('1999-12-31T23:59:59.000Z')).ofOne('s', new Date(1999-12-31T23:59:59.333Z')); // true
     * new Dat(new Date('1999-12-31T23:59:59.000Z')).ofOne('s', new Date(1999-12-31T23:59:58.999Z')); // false
     */

  }, {
    key: 'ofOne',
    value: function ofOne(what, date) {
      var _this4 = this;

      if (!(what in coeffs) || what === 'w') {
        return false;
      }

      date = new Dat(new Date(date));

      var started = void 0;

      return iterate(coeffs, function (coeff, w) {
        if (w === what) {
          started = true;
        }

        if (!started || w === 'w') {
          return;
        }

        if (started && _this4.get(w) !== date.get(w)) {
          return false;
        }
      }) !== false;
    }

    /**
     * @method Dat#set
     * @public
     * @param {SetPeriod|Object.<SetPeriod, Number>} what - What to add.
     * @param {Number} [number] - Number of what to set if the first argument is a period string.
     * @returns {Dat} Returns this.
     * @description Method for setting values such as seconds or minutes.
     *
     * @example
     * new Dat(new Date('1999-12-31T23:59:59.999Z')).set('s', 58).get('s');           // 58
     * new Dat(new Date('1999-12-31T23:59:59.999Z')).set({ c: 998, s: 58 }).get('c'); // 998
     */

  }, {
    key: 'set',
    value: function set(what, number) {
      var date = this.$;

      if (arguments.length >= 2) {
        what = defineProperty({}, what, number);
      }

      what = new Super(what).$;

      iterate(what, function (value, what) {
        setSwitcher(what, [date, value, 'set']);
      });

      return this;
    }

    /**
     * @method Dat#setUTC
     * @public
     * @param {SetPeriod|Object.<SetPeriod, Number>} what - See {@link Dat#set}.
     * @param {Number} [number] - See {@link Dat#set}.
     * @returns {Dat} Returns this.
     * @description UTC version of {@link Dat#set}.
     *
     * @example
     * const date = new Dat(new Date('1999-12-31T23:59:59.999Z'));
     *
     * date.setUTC('ccc', 998).getUTC('ccc'); // 998
     * date.setUTC({
     *   s: 58,
     *   m: 58,
     *   h: 22
     * });
     *
     * date.getUTC('s'); // 58
     * date.getUTC('m'); // 58
     * date.getUTC('h'); // 23
     */

  }, {
    key: 'setUTC',
    value: function setUTC(what, number) {
      var date = this.$;

      if (arguments.length >= 2) {
        what = defineProperty({}, what, number);
      }

      what = new Super(what).$;

      iterate(what, function (value, what) {
        setSwitcher(what, [date, value, 'setUTC']);
      });

      return this;
    }

    /**
     * @method Dat#setUTC
     * @public
     * @param {Number} [time] - Time to set.
     * @returns {Dat|Number} - If the time argument is present this is returned otherwise the time is returned.
     * @description Synonym for both
     * [Date#getTime]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime} and
     * [Date#setTime]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime}.
     */

  }, {
    key: 'time',
    value: function time(_time) {
      var date = this.$;

      if (arguments.length) {
        date.setTime(_time);
      }

      return date.getTime();
    }
  }, {
    key: 'toISOString',
    value: function toISOString() {
      return this.$.toISOString();
    }
  }, {
    key: 'toLocaleString',
    value: function toLocaleString() {
      return this.$.toLocaleString();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.$.toString();
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.$.valueOf();
    }
  }]);
  return Dat;
}(Super);

defineProperties(Dat.prototype, defineProperty({}, _Symbol.toStringTag, 'Dat'));

constructors[1].push({
  check: isDate,
  cls: Dat
});

/**
 * @function now
 * @public
 * @returns {Number} Number of milliseconds.
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 * @description Synonym for
 * [Date.now]{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now}.
 */
function now() {
  return Date.now();
}

/**
 * @function date
 * @public
 * @param {DateLike} [date = new Date()] - Date-like value that is passed to the Date constructor.
 * @returns {Dat} New instance of Dat.
 * @description Synonym for new Dat(new Date(date));
 */
function date(date) {
  if (!arguments.length) {
    return new Dat(new Date(now()));
  }

  date = new Super(date).$;

  return new Dat(new Date(date));
}

/**
 * @module helpers/constructURL
 * @private
 * @description Exports constructURL method.
 */

/**
 * @type {RegExp}
 * @description Absolute URL pattern.
 */
var absoluteURLRegexp = /^(([a-z][a-z\d\+\-\.]*:)?\/\/|data:[a-z]+\/[a-z]+;base64,)/i;
var querySwitcher = switcher('call', function () {
  return new Arr([]);
}).case(isArray, function (prefix, query) {
  var queryParams = new Arr([]);

  iterate(query, function (value) {
    if (isPlainObject(value) || isArray(value)) {
      queryParams = queryParams.concat(querySwitcher(value, [prefix + '[]']));

      return;
    }

    queryParams.push({
      param: prefix + '[]',
      value: value
    });
  });

  return queryParams.$;
}).case(isPlainObject, function (prefix, query) {
  var queryParams = new Arr([]);

  iterate(query, function (value, param) {
    if (isPlainObject(value) || isArray(value)) {
      queryParams = queryParams.concat(querySwitcher(value, [prefix ? prefix + '[' + param + ']' : param]));

      return;
    }

    queryParams.push({
      param: prefix ? prefix + '[' + param + ']' : param,
      value: isObject(value) ? JSON.stringify(value) : String(value)
    });
  });

  return queryParams.$;
});

/**
 * @function constructURL
 * @param {String} baseURL - BaseURL of the output URL.
 * @param {String} url - Main part of the output URL.
 * @param {Object} params - Params to replace in the url expressions like ":param".
 * @param {Object} query - Object with query params.
 * @param {Object} [hash = ''] - URL hash.
 * @param {Object} [encodeOptions = {}] - If you need to encode something.
 * @param {Object} [encodeOptions.params = true] - If you need to encode params.
 * @param {Object} [encodeOptions.query = true] - If you need to encode query params.
 * @returns {String} Constructed URL.
 * @description Function for constructing URL from the base URL, URL, params and query params.
 */
var constructURL = (function (baseURL, url, params, query) {
  var hash = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var encodeOptions = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var _encodeOptions$params = encodeOptions.params;
  var encodeParams = _encodeOptions$params === undefined ? true : _encodeOptions$params;
  var _encodeOptions$query = encodeOptions.query;
  var encodeQuery = _encodeOptions$query === undefined ? true : _encodeOptions$query;

  var URL = isAbsolute(url) ? url : String(baseURL).replace(/\/+$/, '') + '/' + String(url).replace(/^\/+/, '');

  iterate(params, function (value, param) {
    URL = new Str(URL).replaceString(':' + param, encode(value, encodeParams)).$;
  });

  var queryParams = querySwitcher(query, ['']);

  if (queryParams.length) {
    URL += (URL.indexOf('?') === -1 ? '?' : '&') + queryParams.map(function (_ref) {
      var param = _ref.param;
      var value = _ref.value;
      return encode(param, encodeQuery) + '=' + encode(value, encodeQuery);
    }).join('&');
  }

  return '' + URL + (hash ? '#' + hash : '');
});

/**
 * @function isAbsolute
 * @param {String} url - URL to check if it is absolute or not.
 * @returns {Boolean} If the argument URL is absolute or not.
 */
function isAbsolute(url) {
  return absoluteURLRegexp.test(url);
}

/**
 * @function encode
 * @param {String} string - String to encode using encodeURIComponent.
 * @param {Boolean} isEncoded - If the string should be encoded.
 * @returns {String} Encoded string.
 */
function encode(string, isEncoded) {
  return isEncoded ? encodeURIComponent(string) : string;
}

/**
 * @module helpers/parseHeaders
 * @private
 * @description Exports parseHeaders method.
 */

/**
 * @function parseHeaders
 * @param {String} rawHeaders - Raw headers.
 * @returns {Object} Headers object
 * @description Function for parsing raw headers.
 */
var parseHeaders = (function (rawHeaders) {
  var headers = {};

  iterate((rawHeaders || '').split('\n'), function (value) {
    var index = value.indexOf(':');
    var key = new Str(value.substring(0, index)).trim().toCamelCase().$;
    var val = new Str(value.substring(index + 1)).trim().$;

    if (key) {
      headers[key] = (headers[key] ? headers[key] + ', ' : '') + val;
    }
  });

  return headers;
});

/**
 * @module helpers/transformData
 * @private
 * @description Exports transformData method.
 */

var notToTransform = new Arr(['FormData', 'File', 'Blob', 'ArrayBuffer', 'String', 'Number']);
var withoutBody = new Arr(['DELETE', 'GET', 'HEAD']);

/**
 * @function transformData
 * @param {*} data - Data to transform
 * @param {String} method - HTTP method.
 * @param {Object} headers - Object with headers.
 * @returns {*} - Transformed data.
 */
var transformData = (function (data, method, headers) {
  data = new Super(data).$;

  if (withoutBody.indexOfStrict(method) !== -1) {
    return null;
  }

  if (isObject(data) && notToTransform.indexOfStrict(toStringTag(data)) === -1) {
    if (!headers.contentType) {
      headers.contentType = ['application/json;charset=utf-8'];
    }

    return new Super(data).json();
  }

  return data;
});

/**
 * @module Fetch
 * @private
 * @mixin
 * @description Exports Fetch class.
 */

/**
 * @typedef {'get'|'post'|'delete'|'head'|'put'|'patch'} FetchMethod
 * @public
 */

/**
 * @typedef {Object} FetchConfig
 * @public
 * @property {Array.<AfterMiddleware|FetchErrorAfterMiddleware>} [after]
 * @property {Object} [auth]
 * @property {String} [auth.username]
 * @property {String} [auth.password]
 * @property {String} [baseURL]
 * @property {Array.<BeforeMiddleware|FetchErrorBeforeMiddleware>} [before]
 * @property {*} [data]
 * @property {Object.<String, String[]>} [headers]
 * @property {FetchMethod} [method]
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {String} [responseType]
 * @property {Number} [timeout]
 * @property {String} [url]
 * @property {Boolean} [withCredentials]
 */

/**
 * @typedef {Object} FetchResponse
 * @public
 * @property {FetchConfig} config
 * @property {*} data
 * @property {Object.<String, String>} headers
 * @property {Number} status
 * @property {String} statusText
 * @property {XMLHttpRequest} xhr
 */

/**
 * @callback FetchAfterMiddleware
 * @public
 * @param {FetchResponse} config - Fetch response.
 */

/**
 * @callback FetchErrorAfterMiddleware
 * @public
 * @param {Error|*} err - Thrown error.
 * @param {FetchResponse} config - Fetch response.
 */

/**
 * @callback FetchBeforeMiddleware
 * @public
 * @param {FetchConfig} config - Fetch config.
 */

/**
 * @callback FetchErrorBeforeMiddleware
 * @public
 * @param {Error|*} err - Thrown error.
 * @param {FetchConfig} config - Fetch config.
 */

/**
 * @callback FetchConfigFunction
 * @public
 * @param {FetchConfig} config
 */

var defaults$1 = {
  after: [],
  auth: {
    username: '',
    password: ''
  },
  baseURL: global$1.location.origin,
  before: [],
  data: null,
  headers: {},
  method: 'get',
  params: {},
  query: {},
  responseType: '',
  timeout: 0,
  url: '',
  withCredentials: false
};
var uploadMethods = new Arr(['post', 'put']);

/**
 * @class Fetch
 * @extends Function
 * @public
 * @param {FetchConfig} [config = {}] - A number to wrap.
 * @returns {Fetch} Instance of Fetch.
 * An instance of Fetch is a function that simply calls #request with the same arguments.
 * @description Class for fetching data.
 *
 * @example
 * const fetch = new Fetch();
 *
 * fetch('/data').then((res) => {
 *   console.log(res);
 * });
 */
var Fetch = function (_Function) {
  inherits(Fetch, _Function);

  function Fetch() {
    var _ret;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Fetch);

    var _this = possibleConstructorReturn(this, (Fetch.__proto__ || Object.getPrototypeOf(Fetch)).call(this));

    function fetch() {
      return fetch.request.apply(fetch, arguments);
    }

    var conf = new Super({}).deepAssign(defaults$1, config).$;

    if (conf.before.indexOf(fetchBeforeMiddleware) === -1) {
      conf.before.push(fetchBeforeMiddleware);
    }

    /**
     * @member {FetchConfig} Fetch#$$
     * @type {FetchConfig}
     * @public
     * @description Fetch config.
     */
    Object.defineProperty(fetch, '$$', { value: conf });
    Object.setPrototypeOf(fetch, Fetch.prototype);

    return _ret = fetch, possibleConstructorReturn(_this, _ret);
  }

  /**
   * @method Fetch#after
   * @public
   * @param {FetchAfterMiddleware|FetchErrorAfterMiddleware} middleware - Middleware to add.
   * @param {Boolean|*} [afterAll = true] - Boolean parameter where to put the middleware.
   * Truthy parameter stands for "to the end" and falsey for "to the beginning".
   * @returns {Fetch} Returns this.
   * @description Middleware that is called after the request.
   * If the middleware has 2 or less arguments it's treated as success middleware otherwise as an error one.
   * If the middleware returns a promise it becomes a part of the middleware chain.
   *
   * @example
   * const fetch = new Fetch()
   *   .after((err, res) => {
   *     console.log(err);
   *
   *     throw err;
   *   })
   *   .after((res) => {
   *     res.json = D(res.data).parseJSON():
   *   });
   */


  createClass(Fetch, [{
    key: 'after',
    value: function after(middleware) {
      var afterAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      validate$1([middleware], ['function'], 'Fetch#after');

      var after = this.$$.after;


      if (afterAll) {
        after.push(middleware);
      } else {
        after.unshift(middleware);
      }

      return this;
    }

    /**
     * @method Fetch#before
     * @public
     * @param {FetchBeforeMiddleware|FetchErrorBeforeMiddleware} middleware - Middleware to add.
     * @param {Boolean|*} [beforeAll = true] - Boolean parameter where to put the middleware.
     * Truthy parameter stands for "to the beginning" and falsey for "to the end".
     * @returns {Fetch} Returns this.
     * @description Middleware that is called before the request.
     * If the middleware has 2 or less arguments it's treated as success middleware otherwise as an error one.
     * If the middleware returns a promise it becomes a part of the middleware chain.
     *
     * @example
     * const fetch = new Fetch()
     *   .before((err, req) => {
     *     console.log(err);
     *
     *     throw err;
     *   })
     *   .before((req) => {
     *     if (req.url === '/veryLongRequest') {
     *       req.timeout = 30000;
     *     }
     *   });
     */

  }, {
    key: 'before',
    value: function before(middleware) {
      var beforeAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      validate$1([middleware], ['function'], 'Fetch#before');

      var before = this.$$.before;


      if (beforeAll) {
        before.unshift(middleware);
      } else {
        before.push(middleware);
      }

      return this;
    }

    /**
     * @method Fetch#config
     * @public
     * @param {String|FetchConfig|FetchConfigFunction} [property] - If it's a function
     * it's called with the fetch config argument, if it's a string the value argument
     * is used for assigning this property to the fetch config
     * otherwise it's assigned to the fetch config.
     * @param {*} [value] - See the property argument.
     * @returns {Fetch|FetchConfig} If the argument is present this is returned otherwise the fetch config is returned.
     * @description Method for getting and setting config.
     *
     * @example
     * const fetch = new Fetch();
     *
     * fetch.config({ baseURL: 5000 });
     * fetch.config().timeout; // 5000
     *
     * fetch.config((config) => {
     *   config.baseURL += '/api';
     * });
     */

  }, {
    key: 'config',
    value: function config(property, value) {
      var conf = this.$$;

      if (!arguments.length) {
        return conf;
      }

      if (isFunction(property)) {
        property(conf);
      } else {
        if (arguments.length >= 2) {
          property = defineProperty({}, property, value);
        }

        new Super(conf).deepAssign(property);
      }

      return this;
    }

    /**
     * @method Fetch#delete
     * @public
     * @param {String} [url] - See {@link Fetch#request}.
     * @param {FetchConfig} [config] - See {@link Fetch#request}.
     * @returns {Promise.<FetchResponse, Error>} See {@link Fetch#request}.
     * @description Shorthand for #request for delete requests.
     *
     * @example
     * new Fetch().delete('/data').then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'delete',
    value: function _delete(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isString(url)) {
        config = url;
        url = undefined;
      }

      return this.request(url, assign$1({ method: 'delete' }, config));
    }

    /**
     * @method Fetch#get
     * @public
     * @param {String} [url] - See {@link Fetch#request}.
     * @param {FetchConfig} [config] - See {@link Fetch#request}.
     * @returns {Promise.<FetchResponse, Error>} See {@link Fetch#request}.
     * @description Shorthand for #request for get requests.
     *
     * @example
     * new Fetch().get('/data').then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'get',
    value: function get(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isString(url)) {
        config = url;
        url = undefined;
      }

      return this.request(url, assign$1({ method: 'get' }, config));
    }

    /**
     * @method Fetch#head
     * @public
     * @param {String} [url] - See {@link Fetch#request}.
     * @param {FetchConfig} [config] - See {@link Fetch#request}.
     * @returns {Promise.<FetchResponse, Error>} See {@link Fetch#request}.
     * @description Shorthand for #request for head requests.
     *
     * @example
     * new Fetch().head('/data').then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'head',
    value: function head(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isString(url)) {
        config = url;
        url = undefined;
      }

      return this.request(url, assign$1({ method: 'head' }, config));
    }

    /**
     * @method Fetch#headers
     * @public
     * @param {String|Object.<String, String|String[]>} header - A header string or an object of the following format:
     * { [header]: [value1, value2, ...] }.
     * @param {String|String[]} [value] - Header value. If the first argument is a string
     * this has to be a header value or an array of header values.
     * @returns {Fetch} Returns this.
     * @description Method for setting request headers.
     *
     * @example
     * const fetch = new Fetch()
     *   .headers('Header1', 'Value')
     *   .headers('Header2', ['Value1', 'Value2'])
     *   .headers({
     *     Header3: ['Value1', 'Value2']
     *   });
     */

  }, {
    key: 'headers',
    value: function headers(header, value) {
      var headers = this.$$.headers;


      if (arguments.length >= 2) {
        header = defineProperty({}, header, value);
      }

      iterate(header, function (value, header) {
        var array$$1 = headers[header] || [];
        var toPush = isArray(value) ? value : [value];

        (headers[header] = array$$1).push.apply(array$$1, toPush);
      });

      return this;
    }

    /**
     * @method Fetch#instance
     * @public
     * @param {FetchConfig} [config] - New config if needed.
     * @returns {Fetch} New instance of Fetch.
     * @description Method for creating new fetch instances based on already existent.
     *
     * @example
     * const mainFetch = new Fetch({
     *   baseURL: '//other.domain.com/api',
     *   withCredentials: true
     * });
     *
     * const longFetch = mainFetch.instance({
     *   timeout: 10000
     * });
     */

  }, {
    key: 'instance',
    value: function instance() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var dataConfig = new Super(config).hasOwn('data') ? { data: config.data } : {};

      delete config.data;

      var conf = new Super({}).deepAssign(this.$$, config).assign(dataConfig).$;

      return new Fetch(conf);
    }

    /**
     * @method Fetch#patch
     * @public
     * @param {String} [url] - See {@link Fetch#request}.
     * @param {*} [data] - Additional parameter for uploading data.
     * @param {FetchConfig} [config] - See {@link Fetch#request}.
     * @returns {Promise.<FetchResponse, Error>} See {@link Fetch#request}.
     * @description Shorthand for #request for head requests.
     *
     * @example
     * new Fetch().patch('/data', { user: 'John' }).then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'patch',
    value: function patch(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (arguments.length && !isString(url)) {
        config = data;
        data = url;
        url = undefined;
      }

      return this.request(url, assign$1({ method: 'patch', data: data }, config));
    }

    /**
     * @method Fetch#post
     * @public
     * @param {String} [url] - See {@link Fetch#request}.
     * @param {*} [data] - Additional parameter for uploading data.
     * @param {FetchConfig} [config] - See {@link Fetch#request}.
     * @returns {Promise.<FetchResponse, Error>} See {@link Fetch#request}.
     * @description Shorthand for #request for head requests.
     *
     * @example
     * new Fetch().post('/data', { user: 'John' }).then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'post',
    value: function post(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (arguments.length && !isString(url)) {
        config = data;
        data = url;
        url = undefined;
      }

      return this.request(url, assign$1({ method: 'post', data: data }, config));
    }

    /**
     * @method Fetch#put
     * @public
     * @param {String} [url] - See {@link Fetch#request}.
     * @param {*} [data] - Additional parameter for uploading data.
     * @param {FetchConfig} [config] - See {@link Fetch#request}.
     * @returns {Promise.<FetchResponse, Error>} See {@link Fetch#request}.
     * @description Shorthand for #request for head requests.
     *
     * @example
     * new Fetch().put('/data', { user: 'John' }).then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'put',
    value: function put(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (arguments.length && !isString(url)) {
        config = data;
        data = url;
        url = undefined;
      }

      return this.request(url, assign$1({ method: 'put', data: data }, config));
    }

    /**
     * @method Fetch#request
     * @public
     * @param {String} [url] - URL for the request.
     * @param {FetchConfig} [config] - Additional config for this particular request.
     * @returns {Promise.<FetchResponse, Error>} Promise that is resolved with the request response.
     * @description Main function for making requests. All request methods call this method
     * including the fetch instance itself.
     *
     * @example
     * const fetch = new Fetch();
     *
     * fetch.request('/data', { timeout: 1000 }).then((res) => {
     *   console.log(res);
     * });
     *
     * fetch.request({ timeout: 1000 }).then((res) => {
     *   console.log(res);
     * });
     *
     * fetch.request().then((res) => {
     *   console.log(res);
     * });
     */

  }, {
    key: 'request',
    value: function request(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (arguments.length === 1 && !isString(url)) {
        config = url;
      }

      var dataConfig = new Super(config).hasOwn('data') ? { data: config.data } : {};
      var urlConfig = isString(url) ? { url: url } : {};

      delete config.data;

      var conf = new Super(this.$$).deepClone().deepAssign(urlConfig, config).assign(dataConfig).$;

      var xhr = void 0;
      var promise = Promise$1.resolve();

      iterate(conf.before, function (middleware) {
        promise = promise.then(function () {
          if (middleware.length >= 2) {
            return Promise$1.resolve();
          }

          return new Promise$1(function (resolve) {
            resolve(middleware(conf));
          });
        }, function (err) {
          if (middleware.length < 2) {
            return Promise$1.reject(err);
          }

          return new Promise$1(function (resolve) {
            resolve(middleware(err, conf));
          });
        });
      });

      promise = promise.then(function () {
        return new Promise$1(function (resolve, reject) {
          var after = conf.after;
          var _conf$auth = conf.auth;
          var username = _conf$auth.username;
          var password = _conf$auth.password;
          var data = conf.data;
          var headers = conf.headers;
          var method = conf.method;
          var onprogress = conf.onprogress;
          var responseType = conf.responseType;
          var timeout = conf.timeout;
          var url = conf.url;
          var withCredentials = conf.withCredentials;


          xhr = new XMLHttpRequest();

          xhr.open(method, url, true, username, password);

          iterate(headers, function (value, header) {
            xhr.setRequestHeader(header, value);
          });

          if (onprogress) {
            if (uploadMethods.indexOfStrict(method) === -1) {
              xhr.onprogress = onprogress;
            } else {
              xhr.upload.onprogress = onprogress;
            }
          }

          xhr.onabort = function () {
            reject(new Error('Request was aborted'));

            xhr = null;
          };

          xhr.onerror = function () {
            reject(new Error('Network error'));

            xhr = null;
          };

          xhr.ontimeout = function () {
            reject(new Error('Request time exceeded'));

            xhr = null;
          };

          xhr.onreadystatechange = function () {
            if (!xhr || !xhr.status || xhr.readyState !== 4) {
              return;
            }

            var response = {
              config: conf,
              data: !responseType || responseType === 'text' ? xhr.responseText : xhr.response,
              headers: parseHeaders(xhr.getAllResponseHeaders()),
              status: xhr.status === 1223 ? 204 : xhr.status,
              statusText: xhr.status === 1223 ? 'No Content' : xhr.statusText,
              xhr: xhr
            };

            var promise = Promise$1.resolve();

            iterate(after, function (middleware) {
              promise = promise.then(function () {
                if (middleware.length >= 2) {
                  return Promise$1.resolve();
                }

                return new Promise$1(function (resolve) {
                  resolve(middleware(response));
                });
              }, function (err) {
                if (middleware.length < 2) {
                  return Promise$1.reject(err);
                }

                return new Promise$1(function (resolve) {
                  resolve(middleware(err, response));
                });
              });
            });

            resolve(promise.then(function () {
              return response;
            }).catch(function (err) {
              try {
                err.response = response;
              } catch (e) {
                throw err;
              }

              throw err;
            }));
          };

          xhr.responseType = responseType;
          xhr.timeout = Number(timeout) || 0;
          xhr.withCredentials = !!withCredentials;

          xhr.send(data);
        });
      });

      promise.abort = function abort() {
        if (xhr) {
          xhr.abort();
        }

        return this;
      };

      return promise;
    }
  }]);
  return Fetch;
}(Function);

defineProperties(Fetch.prototype, defineProperty({}, _Symbol.toStringTag, 'Fetch'));

/**
 * @function fetchBeforeMiddleware
 * @private
 * @param {FetchConfig} config
 * @description Built-in before middleware for url, data, method, headers construction.
 */
function fetchBeforeMiddleware(config) {
  var baseURL = config.baseURL;
  var data = config.data;
  var headers = config.headers;
  var method = config.method;
  var params = config.params;
  var query = config.query;
  var url = config.url;

  var METHOD = method.toUpperCase();

  config.method = METHOD;
  config.url = constructURL(baseURL, url, params, query);
  config.data = transformData(data, METHOD, headers);
  config.headers = new Super(headers).object(function (headers, values, header) {
    header = new Str(header).toCapitalCase().replace(/\s+/g, '-').$;

    headers[header] = values.join(', ');
  }).$;
}

/**
 * @const {Fetch} fetch
 * @type {Fetch}
 * @public
 * @description Empty instance of Fetch.
 */
var fetch = new Fetch();

/**
 * @module constants/appliedRegExps
 * @private
 * @description Exports different types of syntax for {@link Elem#apply}.
 */

/**
 * @callback matchAppliedExprCallback
 * @param {Elem} elem - D-elem of an element to apply expression to.
 * @param {String} string - Matched applied name.
 * @param {String} arg - Argument within the parentheses.
 */

/**
 * @type {Object.<String, matchAppliedExprCallback|Object.<String, matchAppliedExprCallback>>}
 * @description Object of different types of syntax.
 */

var appliedRegExps = {
  '#': function _(elem, id) {
    elem.id(id);
  },
  '.': function _(elem, cls) {
    elem.addClass(cls);
  },
  $: function $(elem, attr, value) {
    elem.attr(attr, value);
  },
  '@': function _(elem, prop, value) {
    elem.css(prop, value);
  },
  '&': function _(elem, name, html) {
    elem.html(html);
  },
  '*': function _(elem, name, text) {
    elem.text(text);
  },

  '-': {
    '.': function _(elem, cls) {
      elem.removeClass(cls);
    },
    $: function $(elem, attr) {
      elem.removeAttr(attr);
    },
    '@': function _(elem, prop) {
      elem.removeCSS(prop);
    }
  }
};

/**
 * @module constants/elements
 * @private
 * @description Exports methods for {@link Elem} for creating html-elements.
 */

/**
 * @const
 * @type {String[]}
 */
var elements = [
/**
 * @member {Function} Elem#a
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'a',

/**
 * @member {Function} Elem#abbr
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'abbr',

/**
 * @member {Function} Elem#address
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'address',

/**
 * @member {Function} Elem#area
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'area',

/**
 * @member {Function} Elem#article
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'article',

/**
 * @member {Function} Elem#audio
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'audio',

/**
 * @member {Function} Elem#b
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'b',

/**
 * @member {Function} Elem#base
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'base',

/**
 * @member {Function} Elem#bdi
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'bdi',

/**
 * @member {Function} Elem#bdo
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'bdo',

/**
 * @member {Function} Elem#blockquote
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'blockquote',

/**
 * @member {Function} Elem#body
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'body',

/**
 * @member {Function} Elem#br
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'br',

/**
 * @member {Function} Elem#button
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'button',

/**
 * @member {Function} Elem#canvas
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'canvas',

/**
 * @member {Function} Elem#caption
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'caption',

/**
 * @member {Function} Elem#cite
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'cite',

/**
 * @member {Function} Elem#code
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'code',

/**
 * @member {Function} Elem#col
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'col',

/**
 * @member {Function} Elem#colgroup
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'colgroup',

/**
 * @member {Function} Elem#content
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'content',

/**
 * @member {Function} Elem#datalist
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'datalist',

/**
 * @member {Function} Elem#dd
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'dd',

/**
 * @member {Function} Elem#del
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'del',

/**
 * @member {Function} Elem#details
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'details',

/**
 * @member {Function} Elem#dfn
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'dfn',

/**
 * @member {Function} Elem#dialog
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'dialog',

/**
 * @member {Function} Elem#div
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'div',

/**
 * @member {Function} Elem#dl
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'dl',

/**
 * @member {Function} Elem#dt
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'dt',

/**
 * @member {Function} Elem#element
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'element',

/**
 * @member {Function} Elem#em
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'em',

/**
 * @member {Function} Elem#embed
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'embed',

/**
 * @member {Function} Elem#fieldset
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'fieldset',

/**
 * @member {Function} Elem#figcaption
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'figcaption',

/**
 * @member {Function} Elem#figure
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'figure',

/**
 * @member {Function} Elem#footer
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'footer',

/**
 * @member {Function} Elem#form
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'form',

/**
 * @member {Function} Elem#h1
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'h1',

/**
 * @member {Function} Elem#h2
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'h2',

/**
 * @member {Function} Elem#h3
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'h3',

/**
 * @member {Function} Elem#h4
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'h4',

/**
 * @member {Function} Elem#h5
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'h5',

/**
 * @member {Function} Elem#h6
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'h6',

/**
 * @member {Function} Elem#head
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'head',

/**
 * @member {Function} Elem#header
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'header',

/**
 * @member {Function} Elem#hgroup
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'hgroup',

/**
 * @member {Function} Elem#hr
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'hr',

/**
 * @member {Function} Elem#i
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'i',

/**
 * @member {Function} Elem#iframe
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'iframe',

/**
 * @member {Function} Elem#img
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'img',

/**
 * @member {Function} Elem#input
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'input',

/**
 * @member {Function} Elem#ins
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'ins',

/**
 * @member {Function} Elem#kbd
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'kbd',

/**
 * @member {Function} Elem#label
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'label',

/**
 * @member {Function} Elem#legend
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'legend',

/**
 * @member {Function} Elem#li
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'li',

/**
 * @member {Function} Elem#link
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'link',

/**
 * @member {Function} Elem#main
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'main',

/**
 * @member {Function} Elem#mark
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'mark',

/**
 * @member {Function} Elem#menu
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'menu',

/**
 * @member {Function} Elem#menuitem
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'menuitem',

/**
 * @member {Function} Elem#meta
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'meta',

/**
 * @member {Function} Elem#meter
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'meter',

/**
 * @member {Function} Elem#nav
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'nav',

/**
 * @member {Function} Elem#noscript
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'noscript',

/**
 * @member {Function} Elem#null
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'null',

/**
 * @member {Function} Elem#ol
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'ol',

/**
 * @member {Function} Elem#optgroup
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'optgroup',

/**
 * @member {Function} Elem#option
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'option',

/**
 * @member {Function} Elem#output
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'output',

/**
 * @member {Function} Elem#p
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'p',

/**
 * @member {Function} Elem#param
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'param',

/**
 * @member {Function} Elem#pre
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'pre',

/**
 * @member {Function} Elem#progress
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'progress',

/**
 * @member {Function} Elem#q
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'q',

/**
 * @member {Function} Elem#rp
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'rp',

/**
 * @member {Function} Elem#rt
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'rt',

/**
 * @member {Function} Elem#rtc
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'rtc',

/**
 * @member {Function} Elem#ruby
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'ruby',

/**
 * @member {Function} Elem#s
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
's',

/**
 * @member {Function} Elem#samp
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'samp',

/**
 * @member {Function} Elem#script
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'script',

/**
 * @member {Function} Elem#section
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'section',

/**
 * @member {Function} Elem#select
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'select',

/**
 * @member {Function} Elem#shadow
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'shadow',

/**
 * @member {Function} Elem#small
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'small',

/**
 * @member {Function} Elem#source
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'source',

/**
 * @member {Function} Elem#span
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'span',

/**
 * @member {Function} Elem#strong
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'strong',

/**
 * @member {Function} Elem#style
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'style',

/**
 * @member {Function} Elem#sub
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'sub',

/**
 * @member {Function} Elem#summary
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'summary',

/**
 * @member {Function} Elem#sup
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'sup',

/**
 * @member {Function} Elem#table
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'table',

/**
 * @member {Function} Elem#tbody
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'tbody',

/**
 * @member {Function} Elem#td
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'td',

/**
 * @member {Function} Elem#template
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'template',

/**
 * @member {Function} Elem#textarea
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'textarea',

/**
 * @member {Function} Elem#tfoot
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'tfoot',

/**
 * @member {Function} Elem#th
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'th',

/**
 * @member {Function} Elem#thead
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'thead',

/**
 * @member {Function} Elem#time
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'time',

/**
 * @member {Function} Elem#title
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'title',

/**
 * @member {Function} Elem#tr
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'tr',

/**
 * @member {Function} Elem#track
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'track',

/**
 * @member {Function} Elem#u
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'u',

/**
 * @member {Function} Elem#ul
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'ul',

/**
 * @member {Function} Elem#var
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'var',

/**
 * @member {Function} Elem#video
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'video',

/**
 * @member {Function} Elem#wbr
 * @type {Function}
 * @param {...String} appliedExpressions
 * @returns {Elem}
 */
'wbr'];

/**
 * @module constants/elements
 * @private
 * @description Exports different canvas methods for {@link Elem} for creating html-elements.
 */

/**
 * @const
 * @type {String[]}
 */
var canvasGetMethods = [
/**
 * @member {Function} Elem#createImageData
 * @type {Function}
 * @param {...*} args
 * @returns {ImageData|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/createImageData
 */
'createImageData',

/**
 * @member {Function} Elem#createLinearGradient
 * @type {Function}
 * @param {...*} args
 * @returns {CanvasGradient|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
 */
'createLinearGradient',

/**
 * @member {Function} Elem#createPattern
 * @type {Function}
 * @param {...*} args
 * @returns {CanvasPattern|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/createPattern
 */
'createPattern',

/**
 * @member {Function} Elem#createRadialGradient
 * @type {Function}
 * @param {...*} args
 * @returns {CanvasGradient|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
 */
'createRadialGradient',

/**
 * @member {Function} Elem#getImageData
 * @type {Function}
 * @param {...*} args
 * @returns {ImageData|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/getImageData
 */
'getImageData',

/**
 * @member {Function} Elem#getLineDash
 * @type {Function}
 * @param {...*} args
 * @returns {Number[]|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/getLineDash
 */
'getLineDash',

/**
 * @member {Function} Elem#isPointInPath
 * @type {Function}
 * @param {...*} args
 * @returns {Boolean|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/isPointInPath
 */
'isPointInPath',

/**
 * @member {Function} Elem#isPointInStroke
 * @type {Function}
 * @param {...*} args
 * @returns {Boolean|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/isPointInStroke
 */
'isPointInStroke',

/**
 * @member {Function} Elem#measureText
 * @type {Function}
 * @param {...*} args
 * @returns {TextMetrics|void}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/measureText
 */
'measureText'];

var canvasRestMethods = [
/**
 * @member {Function} Elem#arc
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/arc
 */
'arc',

/**
 * @member {Function} Elem#arcTo
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/arcTo
 */
'arcTo',

/**
 * @member {Function} Elem#beginPath
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/beginPath
 */
'beginPath',

/**
 * @member {Function} Elem#bezierCurveTo
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo
 */
'bezierCurveTo',

/**
 * @member {Function} Elem#clearRect
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/clearRect
 */
'clearRect',

/**
 * @member {Function} Elem#clip
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/clip
 */
'clip',

/**
 * @member {Function} Elem#closePath
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/closePath
 */
'closePath',

/**
 * @member {Function} Elem#drawFocusIfNeeded
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
 */
'drawFocusIfNeeded',

/**
 * @member {Function} Elem#drawImage
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage
 */
'drawImage',

/**
 * @member {Function} Elem#ellipse
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/ellipse
 */
'ellipse',

/**
 * @member {Function} Elem#fill
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/fill
 */
'fill',

/**
 * @member {Function} Elem#fillRect
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/fillRect
 */
'fillRect',

/**
 * @member {Function} Elem#fillText
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/fillText
 */
'fillText',

/**
 * @member {Function} Elem#lineTo
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineTo
 */
'lineTo',

/**
 * @member {Function} Elem#moveTo
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/moveTo
 */
'moveTo',

/**
 * @member {Function} Elem#putImageData
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/putImageData
 */
'putImageData',

/**
 * @member {Function} Elem#quadraticCurveTo
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo
 */
'quadraticCurveTo',

/**
 * @member {Function} Elem#rect
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/rect
 */
'rect',

/**
 * @member {Function} Elem#resetTransform
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/resetTransform
 */
'resetTransform',

/**
 * @member {Function} Elem#restore
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/restore
 */
'restore',

/**
 * @member {Function} Elem#rotate
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/rotate
 */
'rotate',

/**
 * @member {Function} Elem#save
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/save
 */
'save',

/**
 * @member {Function} Elem#scale
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/scale
 */
'scale',

/**
 * @member {Function} Elem#setLineDash
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/setLineDash
 */
'setLineDash',

/**
 * @member {Function} Elem#setTransform
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/setTransform
 */
'setTransform',

/**
 * @member {Function} Elem#stroke
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/stroke
 */
'stroke',

/**
 * @member {Function} Elem#strokeRect
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/strokeRect
 */
'strokeRect',

/**
 * @member {Function} Elem#strokeText
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/strokeText
 */
'strokeText',

/**
 * @member {Function} Elem#transform
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/transform
 */
'transform',

/**
 * @member {Function} Elem#translate
 * @type {Function}
 * @param {...*} args
 * @returns {Elem}
 * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/translate
 */
'translate'];

/**
 * @module Elem
 * @private
 * @mixin
 * @description Exports Elem class.
 */

/**
 * @typedef {String} ElemEventString
 * @public
 * @description A string containing events separated by a comma with zero or more spaces or just spaces.
 */

/**
 * @callback ElemValueCallback
 * @public
 * @param {String} value - Old value.
 * @param {Elem} elem - Current element.
 * @param {Number} index - Index in the set of the elements.
 */

/**
 * @callback ElemSetOfCallback
 * @public
 * @param {Element} created - Created element.
 * @param {*} value - Value of the iterated element in the object.
 * @param {Key} key - Key of the iterated element in the object.
 * @param {*} object - Object that is iterated over.
 * @param {Element} elem - Current element.
 * @param {Number} index - Index of the current element.
 */

/**
 * @callback ValidateCallback
 * @public
 * @param {*} value - Element value.
 * @param {Element} elem - Element to validate.
 * @param {Number} index - Index of the element.
 */

/**
 * @callback CtxCallback
 * @public
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context.
 */

/**
 * @callback ElemListener
 * @public
 * @param {Event} e - Fired event.
 * @param {Element} elem - Element on which the listener was called.
 * @param {Number} index - Index of the element on which the listener was called.
 */

/**
 * @callback ElemRemoveListeners
 * @public
 * @param {...ElemEventString} events - If at least one argument present only removes event listeners specified
 * by the events in the arguments.
 */

var nativeDocument = global$1.document;
var emptyDiv = nativeDocument.createElement('div');
var eventSeparator = /, *| +/;
var textProperty = new Super(Node.prototype).propertyDescriptor('textContent') ? 'textContent' : 'innerText';
var classes = {};
var attrs = {};
var windowsDwayneData = new Arr([]);
var inputElements = 'input, select, textarea, datalist, keygen, output';
var dataURLFetch = new Fetch({ responseType: 'arraybuffer' });
var _click = method('click');
var refSwitcher = switcher('strictEquals', 'href').case(['img', 'script', 'iframe', 'audio', 'video'], 'src').case('form', 'action');
var filterSwitcher = switcher('call', function (selector) {
  return selector;
}).case(isString, function (selector) {
  return function (elem) {
    return new Elem(elem).is(selector);
  };
}).case([isArray, isElem], function (elems) {
  elems = new Arr(elems);

  return function (elem) {
    return elems.indexOf(elem) !== -1;
  };
});
var innerSwitcher = switcher('strictEquals', 0).case('padding-box', function (paddings) {
  return paddings;
}).case('border-box', function (paddings, borders) {
  return paddings + borders;
});
var outerSwitcher = switcher('strictEquals', function (borders, paddings) {
  return borders + paddings;
}).case('padding-box', function (borders) {
  return borders;
}).case('border-box', 0);

/**
 * @class Elem
 * @extends Arr
 * @public
 * @param {Element|Element[]} [elem = []] - An element or an array of elements to wrap.
 * @returns {Elem} Instance of Elem.
 * @description Wrap of an elements set. Also has all methods from from
 * [CanvasRenderingContext2D]{@link https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D}.
 * Getters methods return the same as methods from CanvasRenderingContext2D and the rest return this.
 * Work for the first canvas element in the set.
 *
 * @example
 * new Elem(document.body);
 * new Elem(document.querySelectorAll('.cls'));
 * new Elem(document.getElementsByClassName('cls'));
 */

var Elem = function (_Arr) {
  inherits(Elem, _Arr);

  function Elem() {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, Elem);

    var _this = possibleConstructorReturn(this, (Elem.__proto__ || Object.getPrototypeOf(Elem)).call(this, function () {
      var element = elem;

      if (isArrayLike(element) && (isWindow(element) || isHTMLDocument(element) || isElement(element))) {
        element = [element];
      }

      return new Arr(toArray$1(new Super(element).$, true)).object(function (elems, elem) {
        if ((isElement(elem) || isWindow(elem) || isHTMLDocument(elem) || toStringTag(elem) === 'CSSStyleRule') && elems.indexOf(elem) === -1) {
          return elems.push(elem);
        }

        if (isElem(elem)) {
          elems.push.apply(elems, elem.$);
        }
      }, []).$;
    }()));

    _this.$$ = elem;

    _this.forEach(addDwayneData);

    /**
     * @member {Element[]} Elem#$
     * @type {Element[]}
     * @public
     * @description Constructed element set.
     */

    /**
     * @member {*} Elem#$$
     * @type {*}
     * @public
     * @description Initial element set.
     */
    return _this;
  }

  /**
   * @method Elem#add
   * @public
   * @param {...(String|Elem|Element|Element[])} elements - Each argument is a selector, or Elem, or Element, or array of Elements.
   * @returns {Elem} Returns this.
   * @description Method for adding new elements to the set.
   *
   * @example
   *
   */


  createClass(Elem, [{
    key: 'add',
    value: function add() {
      var _this2 = this;

      for (var _len = arguments.length, elements$$1 = Array(_len), _key = 0; _key < _len; _key++) {
        elements$$1[_key] = arguments[_key];
      }

      iterate(arguments, function (elem) {
        toFind(elem).forEach(function (elem) {
          if (_this2.indexOf(elem) === -1) {
            _this2.push(elem);
          }
        });
      });

      return this;
    }

    /**
     * @method Elem#addClass
     * @public
     * @param {...String} classes - Classes to add.
     * @returns {Elem} Returns this.
     * @description Method for adding classes to the all the elements in the set.
     *
     * @example
     * elem.addClass('red', 'round');
     */

  }, {
    key: 'addClass',
    value: function addClass() {
      var _arguments = arguments;

      for (var _len2 = arguments.length, classes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      return this.forEach(function (elem) {
        var list = elem.classList;

        iterate(_arguments, function (cls) {
          return list.add(cls);
        });
      });
    }

    /**
     * @method Elem#addHTML
     * @public
     * @param {String} html - HTML to add.
     * @returns {Elem} Returns this.
     * @description Method for adding HTML to the all elements in the set.
     *
     * @example
     * elem.addHTML('&lt;div&gt;1&lt;/div&gt;');
     */

  }, {
    key: 'addHTML',
    value: function addHTML(html) {
      return this.forEach(function (elem) {
        elem.innerHTML += html;
      });
    }

    /**
     * @method Elem#addRule
     * @public
     * @param {String} name - Name of the rule.
     * @param {String} selector - Selector for the rule
     * @param {Object.<String, String>} style - Style for the selector.
     * @returns {Elem} Returns this.
     * @description Method for adding css styles into the first style tag in the set.
     * Note: style element should be inside the document.
     *
     * @example
     * style.addRule('img-size', 'img.square', {
     *   width: '40px !important',
     *   height: '40px !important'
     * });
     */

  }, {
    key: 'addRule',
    value: function addRule(name, selector, style) {
      this.some(function (elem) {
        if (getName(elem) === 'style') {
          var sheet = elem.sheet;
          var length = sheet.cssRules.length;

          var rules = new Super(style).word(function (value, property) {
            return new Str(property).toHyphenCase() + ': ' + value + ';\n';
          });

          sheet.insertRule(selector + ' {' + (rules && '\n') + rules + '}', length);
          sheet.cssRules[length].dwayneData = { name: name };

          return true;
        }
      });

      return this;
    }

    /**
     * @method Elem#addText
     * @public
     * @param {String} text - Text to add.
     * @returns {Elem} Returns this.
     * @description Method for adding text to the all elements in the set.
     *
     * @example
     * elem.addText('123');
     */

  }, {
    key: 'addText',
    value: function addText(text) {
      return this.forEach(function (elem) {
        elem.appendChild(nativeDocument.createTextNode(text));
      });
    }

    /**
     * @method Elem#apply
     * @public
     * @param {...String} strings - Strings to apply.
     * @returns {Elem} Returns this.
     * @description Method that is a shorthand for many other methods.
     * All shorthands can be separated with space and written within one string.
     *
     * @example
     * elem.apply(
     *   '#id .c1 .c2 @border(1px solid black) $disabled $attr(some value) *(Click me!)'
     * );
     * // shorthand for
     * // elem
     * //   .id('id')
     * //   .addClass('c1', 'c2')
     * //   .border('1px solid black')
     * //   .disabled()
     * //   .attr('attr', 'some value')
     * //   .text('Click me!');
     * // There is a full list of possible types of syntax below...
     *
     * elem.apply('#id');                         // shorthand for elem.id('id');
     * elem.apply('.c1 .c2');                     // shorthand for elem.addClass('c1', 'c2');
     * elem.apply('-.c1 -.c2');                   // shorthand for elem.removeClass('c1', 'c2');
     * elem.apply('-@float -@display');           // shorthand for elem.removeCSS('float', 'display');
     * elem.apply('-$a1 -$a2');                   // shorthand for elem.removeAttr('a1', 'a2');
     * elem.apply('*(some text)');                // shorthand for elem.text('set text');
     * elem.apply('&(&lt;div&gt;1&lt;/div&gt;)'); // shorthand for elem.html('&lt;div&gt;1&lt;/div&gt;');
     * elem.apply('@float(right)');               // shorthand for elem.css('float', 'right');
     * elem.apply('@transform(scale(5px))');      // shorthand for elem.css('float', 'right');
     * elem.apply('@margin(2px 2px)');            // shorthand for elem.css('margin', '2px 2px');
     * elem.apply('@marginLeft(2px)');            // shorthand for elem.css('marginLeft', '2px 2px');
     * elem.apply('@margin-left(2px)');           // shorthand for elem.css('margin-left', '2px 2px');
     * elem.apply('$attr(some value)');           // shorthand for elem.attr('attr', 'some value');
     * elem.apply('$attr');                       // shorthand for elem.attr('attr', '');
     */

  }, {
    key: 'apply',
    value: function apply() {
      var _this3 = this;

      for (var _len3 = arguments.length, strings = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        strings[_key3] = arguments[_key3];
      }

      var applied = void 0;
      var setApplied = void 0;
      var callback = void 0;
      var name = void 0;
      var np1 = void 0;
      var slice = void 0;

      new Str(new Arr(arguments).join(' ')).split(/(\s+)/).forEach(function (string) {
        if (!applied) {
          np1 = string.slice(0, 1);
          callback = appliedRegExps[np1];
          slice = 1;

          if (callback && !isFunction(callback)) {
            callback = callback[string.slice(1, 2)];
            slice = 2;
          }

          if (/^\s+$/.test(string) || !callback) {
            return;
          }

          name = string.slice(slice).match(/^[^()]+/);

          if (!name && np1 !== '*' && np1 !== '&') {
            return;
          }

          applied = {
            name: name ? name[0] : '',
            args: string.slice(slice + (name ? name[0] : '').length),
            callback: callback
          };

          setApplied = true;
        }

        if (!setApplied) {
          applied.args += string;
        }

        if (!applied.args || /^\([\s\S]+\)$/.test(applied.args)) {
          applied.callback(_this3, applied.name, applied.args.replace(/^\(|\)$/g, ''));
          applied = null;
        }

        setApplied = false;
      });

      return this;
    }

    /**
     * @method Elem#attr
     * @public
     * @param {String|Object.<String, String|ElemValueCallback>} [attr] - Name of the attribute to get or
     * an object of the format { [attrName]: value, ... } to set attributes.
     * @param {String|ElemValueCallback} [value] - If the first argument is a string
     * it should be a value to set for that attribute.
     * @returns {Super|String|Elem} If no arguments passed, D-Wrap of attributes of the first element in the set
     * returned, if 1 string argument is passed the value of the attribute of the first element in the set
     * returned otherwise returns this.
     * @description Method for getting/setting attributes.
     *
     * @example
     * elem.attr('attr1', 'value1'); // attribute attr1 set to 'value1' and this returned
     * elem.attr('attr1');           // 'value1'
     * elem.attr({
     *   attr1: 'value3',            // attribute attr1 set to 'value3'
     *   attr2: 'value2'             // attribute attr2 set to 'value2'
     * });                           // this returned
     * elem.attr().$;                // { attr1: 'value3', attr2: 'value2' }
     */

  }, {
    key: 'attr',
    value: function attr(_attr, value) {
      var elem = getElem(this);

      if (!arguments.length) {
        return new Super(elem.attributes).object(function (o, attr) {
          o[attr.name] = attr.value;
        });
      }

      if (arguments.length <= 1 && isString(_attr)) {
        return elem.getAttribute(_attr);
      }

      if (arguments.length >= 2) {
        _attr = defineProperty({}, _attr, value);
      }

      return this.forEach(function (elem, index) {
        new Super(_attr).forEach(function (value, key) {
          elem.setAttribute(key, isFunction(value) ? value(elem.getAttribute(key), elem, index) : value);
        });
      });
    }

    /**
     * @method Elem#blob
     * @public
     * @param {Object} [options = {}] - Options that are passed into {@link blob}.
     * @returns {Promise.<BlobObject>} New instance of promise.
     * @description Returns a {@link BlobObject} Promise. Works with image or canvas first element.
     *
     * @example
     * image.blob().then((blob) => console.log(blob));  // BlobObject
     * canvas.blob().then((blob) => console.log(blob)); // BlobObject
     */

  }, {
    key: 'blob',
    value: function blob() {
      var _this4 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // TODO: write using ArrayBuffer

      return new Promise$1(function (resolve, reject) {
        var elem = _this4.first();
        var name = elem.name;


        if (name !== 'img' && name !== 'canvas') {
          reject(new Error('First element in the set isn\'t an image or a canvas! (Elem#blob)'));
        }

        if (name === 'canvas') {
          return resolve(elem);
        }

        elem.load().then(function () {
          if (elem.isBroken()) {
            return reject(new Error('The image is broken! (Elem#blob)'));
          }

          var canvas = new Elem(nativeDocument).canvas();
          var width = elem.width();
          var height = elem.height();

          canvas.width(width).height(height).drawImage(elem.$[0], 0, 0);

          resolve(canvas);
        });
      }).then(function (canvas) {
        return dataURLFetch(canvas.dataURL());
      }).then(function (_ref) {
        var ab = _ref.data;
        return blob$1(ab, options);
      });
    }

    /**
     * @method Elem#blur
     * @returns {Elem} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLElement/blur
     * @description Synonym for
     * [HTMLElement#blur]{@link https://developer.mozilla.org/en/docs/Web/API/HTMLElement/blur}.
     */

  }, {
    key: 'blur',
    value: function blur() {
      return this.forEach(function (elem) {
        elem.blur();
      });
    }

    /**
     * @method Elem#calcCSS
     * @param {String} [pseudo] - See the link.
     * @returns {CSSStyleDeclaration} See the link.
     * @see https://developer.mozilla.org/en/docs/Web/API/Window/getComputedStyle
     * @description Synonym for
     * [getComputedStyle]{@link https://developer.mozilla.org/en/docs/Web/API/Window/getComputedStyle}.
     * Returns computed style for the first element in the set or undefined.
     */

  }, {
    key: 'calcCSS',
    value: function calcCSS() {
      var pseudo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return getComputedStyle(getElem(this), pseudo);
    }

    /**
     * @method Elem#changeRule
     * @public
     * @param {String} name - Name of the rule.
     * @param {Object.<String, String>} style - Style for the selector.
     * @returns {Elem} Returns this.
     * @description Method for changing css styles in the first style tag in the set.
     * Note: style element should be inside the document.
     *
     * @example
     * style.changeRule('img-size', {
     *   width: '50px !important',
     *   height: '50px !important'
     * });
     */

  }, {
    key: 'changeRule',
    value: function changeRule(name, style) {
      this.some(function (elem) {
        if (getName(elem) === 'style') {
          var _ref2 = new Arr(elem.sheet.cssRules).find(function (rule) {
            return rule.dwayneData && rule.dwayneData.name === name;
          }) || {};

          var rule = _ref2.value;


          if (rule) {
            new Elem(rule).css(style);

            return true;
          }
        }
      });

      return this;
    }

    /**
     * @method Elem#child
     * @public
     * @param {Number|String|Elem|Element|Element[]} element - If the argument is a number a wrap of the set of the children
     * of this index of each element in the set returned otherwise an element to put into this element, a collection
     * or a selector of it.
     * @returns {Elem} Returns a wrap of children or inserted elements.
     * @description Method is similar to
     * [Node#appendChild]{@link https://developer.mozilla.org/en/docs/Web/API/Node/appendChild}.
     *
     * @example
     * const child = elem.child(1);
     *
     * elem.child(elem2);
     * elem.child(document.getElementById('id'));
     * elem.child('#id div.c1');
     */

  }, {
    key: 'child',
    value: function child(element) {
      if (isInteger(element) && element >= 0) {
        return this.children().elem(element);
      }

      return toFind(element).into(this);
    }

    /**
     * @method Elem#children
     * @public
     * @returns {Elem} D-Wrap of the children of the first element in the set.
     * @description Method for getting element's children.
     *
     * @example
     * const children = elem.children();
     */

  }, {
    key: 'children',
    value: function children() {
      return new Elem(this.length ? this.$[0].children : []);
    }

    /**
     * @method Elem#class
     * @public
     * @param {String} [cls] - If it's present it has to contain class attribute to set.
     * @returns {Arr|Elem} If the argument is present this returned otherwise a wrap of the classes array returned.
     * @description Method for getting/setting classes.
     *
     * @example
     * elem.class('c1 c2'); // class set to 'c1 c2'
     * elem.class().$;      // ['c1', 'c2']
     */

  }, {
    key: 'class',
    value: function _class(cls) {
      if (!arguments.length) {
        return new Arr(getElem(this).className.split(' '));
      }

      return this.forEach(function (elem) {
        elem.className = cls;
      });
    }

    /**
     * @method Elem#click
     * @returns {Elem} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLElement/click
     * @description Synonym for
     * [HTMLElement#click]{@link https://developer.mozilla.org/en/docs/Web/API/HTMLElement/click}.
     */

  }, {
    key: 'click',
    value: function click() {
      return this.forEach(_click);
    }

    /**
     * @method Elem#clone
     * @public
     * @param {Boolean|*} [deep = false] - See thee link.
     * @returns {Elem} New instance of Elem.
     * @see https://developer.mozilla.org/en/docs/Web/API/Node/cloneNode
     * @description Synonym for
     * [Node#cloneNode]{@link https://developer.mozilla.org/en/docs/Web/API/Node/cloneNode}.
     */

  }, {
    key: 'clone',
    value: function clone() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.object(function (elems, elem) {
        elems.add(elem.cloneNode(!!deep));
      }, new Elem());
    }

    /**
     * @method Elem#closest
     * @public
     * @param {String} selector - See the link.
     * @returns {Elem} Set of the closest elements.
     * @description Synonym for
     * [Element#closest]{@link https://developer.mozilla.org/en/docs/Web/API/Element/closest}.
     */

  }, {
    key: 'closest',
    value: function closest(selector) {
      return this.object(function (elems, elem) {
        while (elem) {
          if (new Elem(elem).is(selector)) {
            return elems.add(elem);
          }

          elem = elem.parentElement;
        }
      }, new Elem());
    }

    /**
     * @method Elem#contains
     * @public
     * @param {String|Elem|Element} element - Element to find out if it's within the first element
     * in the set or a selector of it.
     * @returns {Boolean} Returns if the argument within this element.
     * @description Method is extension for
     * [Node#contains]{@link https://developer.mozilla.org/en/docs/Web/API/Node/contains}.
     *
     * @example
     * elem1.contains(elem2);   // true|false
     * elem.contains(selector); // true|false
     */

  }, {
    key: 'contains',
    value: function contains(element) {
      element = toFind(element);

      return getElem(this).contains(getElem(element));
    }

    /**
     * @method Elem#create
     * @public
     * @param {String} type - Type of created element.
     * @param {...String} appliedExpressions - Strings that are passed into {@link Elem#apply}.
     * @returns {Elem} New instance of Elem - wrap of the created element.
     * @description Method for creating elements inside this element. If this element is a document it's just created.
     *
     * @example
     * elem.create('div', '#id .c1 .c2 *Some text*');
     *
     * // also there are shorthands for almost every HTML-element
     * elem.div();
     * elem.input('$type(checkbox) $name(country)');
     */

  }, {
    key: 'create',
    value: function create(type) {
      for (var _len4 = arguments.length, appliedExpressions = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        appliedExpressions[_key4 - 1] = arguments[_key4];
      }

      return this.object(function (elems, elem) {
        var element = new Elem(nativeDocument.createElement(type));

        if (elem !== nativeDocument) {
          element.into(elem);
        }

        elems.add(element.apply.apply(element, appliedExpressions));
      }, new Elem());
    }

    /**
     * @method Elem#css
     * @public
     * @param {String|Object.<String, String|ElemValueCallback>} [property] - Name of the property to get or
     * an object of the format { [property]: value, ... } to set styles.
     * @param {String|ElemValueCallback} [value] - If the first argument is a string it should be a value to set for that property.
     * @returns {Super|String|Elem} If no arguments passed, D-Wrap of css styles of the element returned,
     * if 1 string argument is passed the value of the property returned otherwise returns this.
     * @description Method for getting/setting styles. Supports !important.
     *
     * @example
     * elem.css('display', 'none'); // display set to 'none' and this returned
     * elem.css('display');         // 'none'
     * elem.css({
     *   display: 'inline',         // display set to 'inline'
     *   cursor: 'pointer'          // cursor set to 'pointer'
     * });                          // this returned
     * elem.css().$;                // { display: 'none', cursor: 'pointer' }
     */

  }, {
    key: 'css',
    value: function css(property, value) {
      var style = getElem(this).style;

      if (!arguments.length) {
        return new Str(style.cssText).split(/; ?/).object(function (o, value) {
          if (value) {
            property = value.split(/: /);

            o[new Str(property[0]).toCamelCase().$] = property[1];
          }
        });
      }

      if (arguments.length <= 1 && isString(property)) {
        property = new Str(property).toHyphenCase().$;

        return style.getPropertyValue(property) + (style.getPropertyPriority(property) ? ' !important' : '');
      }

      if (arguments.length >= 2) {
        property = defineProperty({}, property, value);
      }

      return this.forEach(function (elem, index) {
        new Super(property).forEach(function (value, property) {
          property = new Str(property).toHyphenCase().$;

          if (isFunction(value)) {
            value = value(new Elem(elem).css(property), elem, index);
          }

          elem.style.removeProperty(property);
          elem.style.setProperty(property, value.replace(/ ?!important$/, ''), /!important$/.test(value) ? 'important' : '');
        });
      });
    }

    /**
     * @method Elem#ctx
     * @public
     * @param {String|Object|CtxCallback} [property] - If present and object
     * it's assigned to the canvas rendering context, if function
     * it's called with canvas rendering context argument, if string
     * the value from the second argument is used for assigning
     * this property to canvas rendering context and if not present
     * canvas rendering context returned.
     * @param {*} [value] - See the property argument.
     * @returns {CanvasRenderingContext2D|Elem}
     * @description Rendering context of the first canvas in the set.
     *
     * @example
     * canvas.ctx; // CanvasRenderingContext2D
     */

  }, {
    key: 'ctx',
    value: function ctx(property, value) {
      var ctx = void 0;

      this.some(function (elem) {
        if (getName(elem) === 'canvas') {
          ctx = elem.dwayneData.ctx;

          return true;
        }
      });

      if (!arguments.length) {
        return ctx;
      }

      if (isFunction(property)) {
        property(ctx);
      } else {
        if (arguments.length >= 2) {
          property = defineProperty({}, property, value);
        }

        assign$1(ctx, property);
      }

      return this;
    }

    /**
     * @method Elem#data
     * @public
     * @param {String|Object.<String, String|ElemValueCallback>} [key] - Name of the data attribute (without data- prefix)
     * to get or an object of the format { [attrName]: value, ... } to set attributes.
     * @param {String|ElemValueCallback} [value] - If the first argument is a string it should be a value to set for that attribute.
     * @returns {Super|String|Elem} If no arguments passed, D-Wrap of dataset of the element returned,
     * if 1 string argument is passed the value of the data attribute returned otherwise returns this.
     * @description Method for getting/setting data attributes. See
     * [HTMLElement#dataset]{@link https://developer.mozilla.org/en/docs/Web/API/HTMLElement/dataset}.
     *
     * @example
     * elem.data('someKey1', 'value'); // attribute data-some-key1 set to 'value1' and this returned
     * elem.data('someKey1');          // 'value1'
     * elem.data({
     *   someKey1: 'value3',           // attribute data-some-key1 set to 'value3'
     *   someKey2: 'value2'            // attribute data-some-key2 set to 'value2'
     * });                             // this returned
     * elem.data().$;                  // { someKey1: 'value3', someKey2: 'value2' }
     */

  }, {
    key: 'data',
    value: function data(key, value) {
      var _this5 = this;

      var dataset = getElem(this).dataset;

      if (!arguments.length) {
        return new Super(dataset).object(function (o, value, key) {
          o[key] = value;
        });
      }

      if (arguments.length === 1 && isString(key)) {
        return dataset[key];
      }

      if (arguments.length >= 2) {
        key = defineProperty({}, key, value);
      }

      iterate(key, function (value, key) {
        _this5.forEach(function (elem, index) {
          elem.dataset[key] = isFunction(value) ? value(elem.dataset[key], elem, index) : value;
        });
      });

      return this;
    }

    /**
     * @method Elem#dataURL
     * @param {String} [type = 'image/png'] - See the link
     * @param {Number} [encoderOptions = 0.92] - See the link.
     * @returns {String} Data URL for the first canvas element in the set.
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/toDataURL
     * @description Synonym for
     * [HTMLCanvasElement#toDataURL]{@link https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/toDataURL}.
     *
     * @example
     * canvas.dataURL();
     */

  }, {
    key: 'dataURL',
    value: function dataURL(type, encoderOptions) {
      var ctx = this.ctx();

      if (!ctx) {
        return '';
      }

      return ctx.canvas.toDataURL.apply(ctx.canvas, arguments);
    }

    /**
     * @method Elem#deleteRule
     * @public
     * @param {String} name - Name of the rule.
     * @returns {Elem} Returns this.
     * @description Method for deleting css styles in a style tag.
     * Note: style element should be inside the document.
     *
     * @example
     * style.deleteRule('img-size');
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      this.some(function (elem) {
        if (getName(elem) === 'style') {
          var rule = new Arr(elem.sheet.cssRules).find(function (rule) {
            return rule.dwayneData && rule.dwayneData.name === name;
          });

          if (rule) {
            elem.sheet.deleteRule(rule.key);

            return true;
          }
        }
      });

      return this;
    }

    /**
     * @method Elem#dispatch
     * @public
     * @param {String|Event} event - Event or a string (new Event(event) is created).
     * @param {Object} [eventInit = {}] - See the link.
     * @param {Boolean} [eventInit.bubbles = true] - See the link.
     * @param {Boolean} [eventInit.cancelable = true] - See the link.
     * @param {Object} [details = {}] - Object that is assigned to the event.
     * @returns {Elem} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/API/Event/Event
     * @description Synonym for
     * [EventTarget#dispatchEvent]{@link https://developer.mozilla.org/en/docs/Web/API/EventTarget/dispatchEvent}.
     *
     * @example
     * elem.dispatch('click');
     * elem.dispatch('click', { bubbles: false, cancellable: false });
     * elem.dispatch(new CustomEvent('custom-event'));
     */

  }, {
    key: 'dispatch',
    value: function dispatch(event) {
      var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _ref3 = eventInit || {};

      var _ref3$bubbles = _ref3.bubbles;
      var bubbles = _ref3$bubbles === undefined ? true : _ref3$bubbles;
      var _ref3$cancelable = _ref3.cancelable;
      var cancelable = _ref3$cancelable === undefined ? true : _ref3$cancelable;

      var finalEvent = event;

      if (!/Event$/.test(toStringTag(finalEvent))) {
        try {
          finalEvent = new Event(finalEvent, { bubbles: bubbles, cancelable: cancelable });
        } catch (err) {
          finalEvent = nativeDocument.createEvent('Event');
          finalEvent.initEvent(event, bubbles, cancelable);
        }

        assign$1(finalEvent, details);
      }

      return this.forEach(function (elem) {
        elem.dispatchEvent(finalEvent);
      });
    }

    /**
     * @method Elem#elem
     * @public
     * @param {Number} [index = 0] - Index of the element of the set to get. Negative index means elem.length + index.
     * @returns {Elem} New instance of Elem.
     *
     * @example
     * elem.elem(1); // a wrap of the element in the set that has index 1
     * elem.elem();  // a wrap of the element in the set that has index 0
     */

  }, {
    key: 'elem',
    value: function elem() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (index < 0) {
        index = this.length + index;
      }

      return new Elem(this.$[index]);
    }

    /**
     * @method Elem#filter
     * @public
     * @param {String|Function|Element[]|Elem} [selector = Boolean] - If it's a string the method filters elements with the selector
     * otherwise super.filter is called.
     * @returns {Elem} New instance of Elem.
     * @description Method for filtering elements.
     *
     * @example
     * elem.filter((elem) => new Elem(elem).closest('.parent'));
     * elem.filter(elemsInArray);
     * elem.filter(elemsInElem);
     * elem.filter('.child');
     */

  }, {
    key: 'filter',
    value: function filter() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Boolean;

      return new Elem(get$1(Elem.prototype.__proto__ || Object.getPrototypeOf(Elem.prototype), 'filter', this).call(this, filterSwitcher(selector)));
    }

    /**
     * @method Elem#find
     * @public
     * @param {String|Function} selector - Selector to find.
     * @returns {Elem|{ key: Key, value: * }|null} New instance of Elem if selector is a string
     * otherwise super.find is called.
     * @description Synonym for
     * [Element#querySelectorAll]{@link https://developer.mozilla.org/en/docs/Web/API/Element/querySelectorAll}.
     */

  }, {
    key: 'find',
    value: function find(selector) {
      if (!isString(selector)) {
        return get$1(Elem.prototype.__proto__ || Object.getPrototypeOf(Elem.prototype), 'find', this).call(this, selector);
      }

      return this.object(function (elems, elem) {
        elems.add(_find(selector, elem));
      }, new Elem());
    }

    /**
     * @method Elem#first
     * @public
     * @returns {Elem} New instance of Elem.
     * @description Synonym for elem.elem(0).
     */

  }, {
    key: 'first',
    value: function first() {
      return this.elem(0);
    }

    /**
     * @method Elem#first
     * @public
     * @param {String} [selector = null] - If present, finds first child in every elem that matches the selector.
     * If not, finds first child of each element in the set.
     * @returns {Elem} New instance of Elem.
     * @description Method for finding first children of each element in the set.
     *
     * @example
     * elem.first();       // finds first child of each element in the elem set
     * elem.first('.foo'); // find first child that has foo class of each element in the set
     */

  }, {
    key: 'firstChild',
    value: function firstChild() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return this.object(function (elems, elem) {
        var _ref4 = new Arr(elem.children).find(function (elem) {
          return new Elem(elem).is(selector);
        }) || {};

        var found = _ref4.value;


        elems.add(found);
      }, new Elem());
    }

    /**
     * @method Elem#focus
     * @returns {Elem} Returns this.
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLElement/focus
     * @description Synonym for
     * [HTMLElement#focus]{@link https://developer.mozilla.org/en/docs/Web/API/HTMLElement/focus}.
     */

  }, {
    key: 'focus',
    value: function focus() {
      return this.forEach(function (elem) {
        elem.focus();
      });
    }

    /**
     * @method Elem#getRule
     * @public
     * @param {String} name - Name of the rule.
     * @returns {{ selector: (String|void), rules: Object }} Set of the css rules.
     * @description Method for getting set of the rules under the name.
     * Note: style element should be inside the document.
     *
     * @example
     * style.addRule('img-size', 'img.square', {
     *   width: '40px',
     *   height: '40px'
     * });
     * style.getRule('img-size');
     * // {
     * //   selector: 'img.square',
     * //   rules: {
     * //     width: '40px',
     * //     height: '40px'
     * //   }
     * // }
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      var found = {
        selector: undefined,
        rules: {}
      };

      this.some(function (elem) {
        if (getName(elem) === 'style') {
          var _ref5 = new Arr(elem.sheet.cssRules).find(function (rule) {
            return rule.dwayneData && rule.dwayneData.name === name;
          }) || {};

          var rule = _ref5.value;


          if (rule) {
            found = {
              selector: rule.selectorText,
              rules: new Elem(rule).css().$
            };

            return true;
          }
        }
      });

      return found;
    }

    /**
     * @method Elem#hasAttr
     * @public
     * @param {String} attr - Name of the attribute.
     * @returns {Boolean} If the first element in the set has the attribute.
     * @description Method that returns if the first element in the set has the attribute or not.
     *
     * @example
     * elem.attr('attr', 'value').hasAttr('attr'); // true
     * elem.removeAttr('attr').hasAttr('attr');    // false
     */

  }, {
    key: 'hasAttr',
    value: function hasAttr(attr) {
      return getElem(this).hasAttribute(attr);
    }

    /**
     * @method Elem#hasClass
     * @public
     * @param {String} cls - Name of the class.
     * @returns {Boolean} If the first element in the set has the class.
     * @description Method that returns if the first element in the set has the class or not.
     *
     * @example
     * elem.addClass('cls').hasClass('cls');    // true
     * elem.removeClass('cls').hasClass('cls'); // false
     */

  }, {
    key: 'hasClass',
    value: function hasClass(cls) {
      return getElem(this).classList.contains(cls);
    }

    /**
     * @method Elem#height
     * @public
     * @param {*|ElemValueCallback} [height] - Height to set.
     * @returns {Elem|String} If no arguments passed height of the first element in the set returned.
     * Otherwise all elements heights in the set are set to the height argument.
     * @description Gets or sets height.
     *
     * @example
     * elem.height(123);
     * elem.height(); // 123
     */

  }, {
    key: 'height',
    value: function height(_height) {
      return this.prop.apply(this, new Arr(arguments).unshift('height').$);
    }

    /**
     * @method Elem#hide
     * @public
     * @returns {Elem} Returns this.
     * @description Hides all elements in the set.
     *
     * @example
     * elem.hide();
     */

  }, {
    key: 'hide',
    value: function hide() {
      return this.forEach(function (elem) {
        elem = new Elem(elem);

        var currentDisplay = elem.css('display');

        if (currentDisplay.indexOf('none')) {
          elem.prop('dwayneData').previousDisplay = currentDisplay;
        }

        elem.css('display', 'none !important');
      });
    }

    /**
     * @method Elem#html
     * @public
     * @param {String|ElemValueCallback|*} [html] - HTML to write instead of current HTML.
     * @returns {Elem|String} If no arguments passed HTML of the first element in the set returned.
     * Otherwise all elements HTML in the set are set to the html argument.
     * @description Gets or sets HTML.
     *
     * @example
     * elem.html('&lt;div&gt;1&lt;/div&gt;');
     * elem.html(); // '&lt;div&gt;1&lt;/div&gt;'
     */

  }, {
    key: 'html',
    value: function html(_html) {
      if (!arguments.length) {
        return getElem(this).innerHTML;
      }

      return this.forEach(function (elem, index) {
        elem.innerHTML = isFunction(_html) ? _html(elem.innerHTML, elem, index) : _html;
      });
    }

    /**
     * @method Elem#id
     * @public
     * @param {String|*} [id] - Id to set.
     * @returns {Elem|String} If no arguments passed id of the first element in the set returned.
     * Otherwise all elements ids in the set are set to the id argument.
     * @description Gets id or sets ids.
     *
     * @example
     * elem.id('unique');
     * elem.id(); // 'unique'
     */

  }, {
    key: 'id',
    value: function id(_id) {
      if (!arguments.length) {
        return getElem(this).id;
      }

      return this.forEach(function (elem) {
        elem.id = _id;
      });
    }

    /**
     * @member {Number} Elem#innerHeight
     * @type {Number}
     * @public
     * @readonly
     * @description Method for finding how much height content of the first element can be.
     *
     * @example
     * elem.css({
     *   boxSizing: 'border-box',
     *   height: '200px',
     *   paddingTop: '2px',
     *   paddingBottom: '3px',
     *   borderTop: '1px solid black',
     *   borderBottom: '4px solid black'
     * }).innerHeight; // 190
     * elem
     *   .css('box-sizing', 'content-box')
     *   .innerHeight; // 200
     * elem
     *   .css('box-sizing', 'padding-box')
     *   .innerHeight; // 195
     */

  }, {
    key: 'insertAfter',


    /**
     * @method Elem#insertAfter
     * @public
     * @param {String|Elem|Element} element - Element to insert this element after or a selector of it.
     * @returns {Elem} Returns this.
     * @description Puts the elements from the set after the element specified by the argument.
     * The elements remain in the same order.
     *
     * @example
     * elem.insertAfter(elem2);
     * elem.insertAfter(document.getElementById('id'));
     * elem.insertAfter('#id div.c1');
     */
    value: function insertAfter(element) {
      element = toFind(element).first();

      var parent = element.parent();

      if (!parent.length) {
        return this;
      }

      element = element.next().$[0];
      parent = parent.$[0];

      return this.forEach(function (elem) {
        if (element) {
          parent.insertBefore(elem, element);

          element = elem;
        } else {
          parent.appendChild(elem);
        }
      });
    }

    /**
     * @method Elem#insertBefore
     * @public
     * @param {String|Elem|Element} element - Element to insert this element before or a selector of it.
     * @returns {Elem} Returns this.
     * @description Puts the elements from the set before the element specified by the argument.
     * The elements remain in the same order.
     *
     * @example
     * elem.insertBefore(elem2);
     * elem.insertBefore(document.getElementById('id'));
     * elem.insertBefore('#id div.c1');
     */

  }, {
    key: 'insertBefore',
    value: function insertBefore(element) {
      element = toFind(element).first();

      var parent = element.parent();

      if (!parent.length) {
        return this;
      }

      element = element.$[0];
      parent = parent.$[0];

      return this.forEach(function (elem) {
        parent.insertBefore(elem, element);
      });
    }

    /**
     * @method Elem#into
     * @public
     * @param {String|Elem|Element} element - Element to put this elements into or a selector of it.
     * @returns {Elem} Returns this.
     * @description Method is similar to
     * [Node#appendChild]{@link https://developer.mozilla.org/en/docs/Web/API/Node/appendChild}.
     *
     * @example
     * elem.into(elem2);
     * elem.into(document.getElementById('id'));
     * elem.into('#id div.c1');
     */

  }, {
    key: 'into',
    value: function into(element) {
      element = toFind(element).$[0];

      if (!element) {
        return this;
      }

      return this.forEach(function (elem) {
        element.appendChild(elem);
      });
    }

    /**
     * @method Elem#is
     * @public
     * @param {String} selector
     * @returns {Boolean} If the first element in the set matches the selector.
     * If the selector is undefined or null always returns true.
     * @description Synonym for
     * [Element#matches]{@link https://developer.mozilla.org/en/docs/Web/API/Element/matches}.
     *
     * @example
     * elem.addClass('cls');
     * elem.is('.cls');         // true
     *
     * elem.removeClass('cls');
     * elem.is('.cls');         // false
     */

  }, {
    key: 'is',
    value: function is(selector) {
      if (isNull(selector)) {
        return true;
      }

      var elem = getElem(this);
      var matches = elem.matches || elem.matchesSelector || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector || elem.oMatchesSelector;

      try {
        return matches.call(elem, selector);
      } catch (err) {
        console.error('Selector \'' + selector + '\' is not a valid selector (Elem#is)');

        return false;
      }
    }

    /**
     * @method Elem#isBroken
     * @public
     * @returns {Boolean} If the first image in the set is broken.
     * @description Returns if the first element in the set is broken. Not image and not loaded image is considered proper.
     *
     * @example
     * const img = elem.img().on({
     *   'load': onload,
     *   'error': onload
     * });
     *
     * onload = () => {
     *   console.log(img.isBroken()); // true
     * };
     *
     * img.ref('/some/non-existent/site/not-found.png');
     */

  }, {
    key: 'isBroken',
    value: function isBroken() {
      var isBroken = false;

      this.some(function (elem) {
        if (getName(elem) === 'img') {
          isBroken = !!(elem.complete && (!elem.naturalWidth || !elem.naturalHeight));

          return true;
        }
      });

      return isBroken;
    }

    /**
     * @method Elem#isWithinDocument
     * @public
     * @returns {Boolean} Returns if the first element in the set is within the document or not.
     * @description Returns if the first element in the set is within the document or not.
     *
     * @example
     * new Elem(document.body).isWithinDocument();  // true
     * new Elem(document).div().isWithinDocument(); // false
     */

  }, {
    key: 'isWithinDocument',
    value: function isWithinDocument() {
      return this.first().closest('html').length !== 0;
    }

    /**
     * @method Elem#last
     * @public
     * @returns {Elem} New instance of Elem.
     * @description Synonym for elem.elem(-1).
     */

  }, {
    key: 'last',
    value: function last() {
      return this.elem(-1);
    }

    /**
     * @method Elem#last
     * @public
     * @param {String} [selector = null] - If present, finds last child in every elem that matches the selector.
     * If not, finds last child of each element in the set.
     * @returns {Elem} New instance of Elem.
     * @description Method for finding last children of each element in the set.
     *
     * @example
     * elem.last();       // finds last child of each element in the elem set
     * elem.last('.foo'); // find last child that has 'foo' class of each element in the set
     */

  }, {
    key: 'lastChild',
    value: function lastChild() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return this.object(function (elems, elem) {
        var _ref6 = new Arr(elem.children).reverse().find(function (elem) {
          return new Elem(elem).is(selector);
        }) || {};

        var found = _ref6.value;


        elems.add(found);
      }, new Elem());
    }

    /**
     * @method Elem#load
     * @public
     * @returns {Promise.<{ proper: Elem, broken: Elem }>} Promise with broken and proper images.
     * @description Loads each image in the set and puts it to the proper or broken array.
     *
     * @example
     * images.load().then(({ broken }) => {
     *   broken.filter('img').ref('/fallback.png');
     * });
     */

  }, {
    key: 'load',
    value: function load() {
      var images = {
        proper: new Elem(),
        broken: new Elem()
      };

      return Promise$1.all(this.filter(function (elem) {
        return getName(elem) === 'img';
      }).map(function (elem) {
        var $elem = new Elem(elem);

        if (elem.complete) {
          images[$elem.isBroken() ? 'broken' : 'proper'].push(elem);

          return;
        }

        return new Promise$1(function (resolve) {
          var removeListeners = $elem.on({
            load: function load() {
              images.proper.add(elem);

              removeListeners();
              resolve();
            },
            error: function error() {
              images.broken.add(elem);

              removeListeners();
              resolve();
            }
          });
        });
      }).$).then(function () {
        return images;
      });
    }

    /**
     * @method Elem#moveAttr
     * @public
     * @param {String} attr - Attribute to move to the first element.
     * @param {String} [value = ''] - Value to set for the attribute. If not set attribute of the previous element or '' used.
     * @returns {Elem} Returns this.
     * @description Method for moving an attribute from previous element to the next one (first element in this set).
     *
     * @example
     * elem1.moveAttr('attr', 'value');     // attribute 'attr' set to 'value' on elem1
     * elem2.moveAttr('attr');              // attribute 'attr' removed from elem1. set to 'value' on elem2
     * elem3.moveAttr('attr', 'new value'); // attribute 'attr' removed from elem2. set to 'new value' on elem3
     */

  }, {
    key: 'moveAttr',
    value: function moveAttr(attr) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var prev = attrs[attr];
      var elem = this.elem();

      if (prev && elem.length) {
        if (arguments.length < 2) {
          value = prev.attr(attr);
        }

        prev.removeAttr(attr);
      }

      if (elem.length) {
        attrs[attr] = elem.attr(attr, value);
      }

      return this;
    }

    /**
     * @method Elem#moveClass
     * @public
     * @param {String} cls - Class to move to the first element.
     * @returns {Elem} Returns this.
     * @description Method for moving a class from previous element to the next one (first element in this set).
     *
     * @example
     * elem1.moveClass('cls'); // class 'cls' added to elem1
     * elem2.moveClass('cls'); // class 'cls' removed from elem1. added to elem1
     */

  }, {
    key: 'moveClass',
    value: function moveClass(cls) {
      var prev = classes[cls];
      var elem = this.elem();

      if (prev && elem.length) {
        prev.removeClass(cls);
      }

      if (elem.length) {
        classes[cls] = elem.addClass(cls);
      }

      return this;
    }

    /**
     * @member Elem#name
     * @type {String}
     * @public
     * @readonly
     * @description tagName (lowercased) of the first element in the set.
     *
     * @example
     * const elem1 = elem.create('div');
     * elem1.name // 'div'
     */

  }, {
    key: 'next',


    /**
     * @method Elem#next
     * @public
     * @param {String} [selector = null] - If present, finds next element to every elem that matches the selector.
     * If not, finds next element to each element in the set.
     * @returns {Elem} New instance of Elem.
     * @description Method for finding next element to each element in the set.
     *
     * @example
     * elem.next();       // finds next element to each element in the set
     * elem.next('.foo'); // finds next element to each element that has 'foo' class
     */
    value: function next() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return this.object(function (elems, elem) {
        /* eslint no-cond-assign: 0 */
        while (elem = elem.nextElementSibling) {
          if (isNull(selector) || new Elem(elem).is(selector)) {
            return elems.add(elem);
          }
        }
      }, new Elem());
    }

    /**
     * @method Elem#off
     * @public
     * @param {...ElemEventString} events - Events to remove.
     * @returns {Elem} Returns this.
     * @description Method that removes all the listeners from each element in the set specified by the events arguments.
     *
     * @example
     * elem.off('click');
     * elem.off('click, input');
     * elem.off('click, input', 'focus');
     */

  }, {
    key: 'off',
    value: function off() {
      var _arguments2 = arguments;

      for (var _len5 = arguments.length, events = Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
        events[_key6] = arguments[_key6];
      }

      return this.forEach(function (elem) {
        var listeners = elem.dwayneData.listeners;


        iterate(_arguments2, function (event) {
          iterate(event.split(eventSeparator), function (event) {
            (listeners[event] || new Super()).forEach(function (_ref7) {
              var removeListener = _ref7.removeListener;
              return removeListener();
            });
          });
        });
      });
    }

    /**
     * @method Elem#on
     * @public
     * @param {ElemEventString|Object.<ElemEventString|ElemListener>} event - Either a {@link ElemEventString} string
     * or an object with event keys (a key is also ElemEventString) and listeners values.
     * @param {String} [selector = null] - Selector to filter event targets.
     * @param {ElemListener} [listener] - If the first argument is a string it must be a listener function for
     * specified event(s).
     * @returns {ElemRemoveListeners} Function that takes optional event argument.
     * @description Adds event listeners for all the elements in the set.
     * For debugging: If you need to know what listeners are in work (and what selectors filter targets)
     * you can look at the base property of the only dwayne listener that listens for the event
     * and find all working listeners in listener.base.dwayneData.listeners[event].$.
     *
     * @example
     * elem.on(
     *   'change, input',
     *   'input, select, textarea, datalist, keygen, output',
     *   (e, elem, index) => console.log(elem.value)
     * );
     * elem.on(
     *   'change, input',
     *   (e, elem, index) => console.log(elem.value)
     * );
     * elem.on(
     *   {
     *     'change, input': (e, elem, index) => console.log(elem.value),
     *     'blur': console.log('blur')
     *   },
     *   'input, select, textarea, datalist, keygen, output'
     * );
     *
     * const removeListeners = elem.on({
     *   'change, input': (e, elem, index) => console.log(elem.value),
     *   'blur': console.log('blur')
     * });
     *
     * removeListeners('click');
     * removeListeners('blur, change');
     * removeListeners('blur, change', 'input');
     * removeListeners();
     */

  }, {
    key: 'on',
    value: function on(event) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var listener = arguments[2];

      var allListeners = new Super({});

      if (isFunction(selector)) {
        listener = selector;
        selector = null;
      }

      if (isString(event)) {
        event = defineProperty({}, event, listener);
      }

      event = new Super(event).object(function (listeners, listener, event) {
        iterate(event.split(eventSeparator), function (event) {
          listeners[event] = listener;
        });
      });

      this.forEach(function (elem) {
        var _ref8 = (windowsDwayneData.find(function (_ref10) {
          var element = _ref10.element;
          return element === elem;
        }) || {}).value || elem.dwayneData;

        var listeners = _ref8.listeners;


        event.forEach(function (listener, event) {
          var removeEventListeners = listeners[event] = listeners[event] || new Super({}).define('index', {
            value: 0,
            configurable: true,
            writable: true
          });
          var index = removeEventListeners.prop('index');

          if (!removeEventListeners.has('listener')) {
            var newListener = function newListener(e) {
              removeEventListeners.forEach(function (_ref9) {
                var selector = _ref9.selector;
                var listener = _ref9.listener;

                if (new Elem(e.target).is(selector)) {
                  listener.call(elem, e, elem, index);
                }
              });
            };

            newListener.base = elem;

            elem.addEventListener(event, newListener, false);
            removeEventListeners.define('listener', {
              value: newListener,
              configurable: true,
              writable: true
            });
          }

          var removeListener = function removeListener() {
            removeEventListeners.delete(index);

            if (!removeEventListeners.count) {
              elem.removeEventListener(event, removeEventListeners.prop('listener'), false);
              removeEventListeners.delete('listener');
            }
          };

          allListeners.prop(event, (allListeners.prop(event) || new Arr()).push(removeListener));

          removeEventListeners.assign(defineProperty({
            index: index + 1
          }, index, {
            selector: selector,
            listener: listener,
            removeListener: removeListener
          }));
        });
      });

      return function removeEventListeners(event) {
        if (arguments.length) {
          iterate(arguments, function (event) {
            iterate(event.split(eventSeparator), function (event) {
              if (allListeners.has(event)) {
                allListeners.prop(event).forEach(function (removeListener) {
                  return removeListener();
                });
                allListeners.delete(event);
              }
            });
          });

          return;
        }

        allListeners.forEach(function (removeListeners) {
          removeListeners.forEach(function (removeListener) {
            return removeListener();
          });
        });
      };
    }

    /**
     * @member {Number} Elem#outerWidth
     * @type {Number}
     * @public
     * @readonly
     * @description Method for finding how much height the element actually is.
     *
     * @example
     * elem.css({
     *   boxSizing: 'border-box',
     *   height: '200px',
     *   paddingTop: '2px',
     *   paddingBottom: '3px',
     *   borderTop: '1px solid black',
     *   borderBottom: '4px solid black'
     *   marginTop: '0px',
     *   marginBottom: '5px'
     * }).outerHeight; // 205
     * elem
     *   .css('box-sizing', 'content-box')
     *   .outerHeight; // 215
     * elem
     *   .css('box-sizing', 'padding-box')
     *   .outerHeight; // 210
     */

  }, {
    key: 'parent',


    /**
     * @method Elem#parent
     * @public
     * @returns {Elem} New instance of Elem.
     * @description Method returns wrap of the set of the parent elements of each element in the set.
     */
    value: function parent() {
      return this.object(function (elems, elem) {
        return elems.add(elem.parentElement);
      }, new Elem());
    }

    /**
     * @method Elem#parentTree
     * @public
     * @returns {Elem} New instance of Elem.
     * @description Returns wrap of all parents of each element in the set.
     *
     * @example
     * elem.parentTree(); // Elem
     */

  }, {
    key: 'parentTree',
    value: function parentTree() {
      return this.object(function (elems, elem) {
        while (elem = elem.parentNode) {
          elems.add(elem);
        }
      }, new Elem());
    }

    /**
     * @method Elem#prev
     * @public
     * @param {String} [selector = null] - If present, finds previous element to every elem that matches the selector.
     * If not, finds previous element to each element in the set.
     * @returns {Elem} New instance of Elem.
     * @description Method for finding previous element to each element in the set.
     *
     * @example
     * elem.next();       // finds previous element to each element in the set
     * elem.next('.foo'); // finds previous element to each element that has 'foo' class
     */

  }, {
    key: 'prev',
    value: function prev() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return this.object(function (elems, elem) {
        /* eslint no-cond-assign: 0 */
        while (elem = elem.previousElementSibling) {
          if (isNull(selector) || new Elem(elem).is(selector)) {
            return elems.add(elem);
          }
        }
      }, new Elem());
    }

    /**
     * @method Elem#prop
     * @public
     * @param {String|Object.<String, ElemValueCallback|*>} property - Either a string of a property or an assigned object.
     * @param {ElemValueCallback|*} [value] - If a property parameter is a string
     * this has to be an assigned value if it's present.
     * @returns {Elem|*} Returns this if it's setter or a value if getter.
     * @description Method that is either a property getter for the first element in the set
     * or a setter for every element in the set.
     *
     * @example
     * elem.prop('draggable', false);
     * elem.prop('draggable'); // false
     */

  }, {
    key: 'prop',
    value: function prop(property, value) {
      if (arguments.length <= 1 && isString(property)) {
        return this.$[0] ? this.$[0][property] : undefined;
      }

      if (arguments.length >= 2) {
        property = defineProperty({}, property, value);
      }

      return this.forEach(function (elem, index) {
        iterate(property, function (value, prop$$1) {
          elem[prop$$1] = isFunction(value) ? value(elem[prop$$1], elem, index) : value;
        });
      });
    }

    /**
     * @method Elem#ref
     * @public
     * @param {String|ElemValueCallback} [link] - If it's present link to a resource.
     * @returns {Elem|String} If the link argument isn't present it's a getter of the 'src' attribute
     * for the one of following elements: img, script, iframe, audio, video; of the 'action' attribute
     * for a form element and of the 'href' attribute for the rest. If it's present it's a setter
     * of the same attribute for all the element in the set.
     * @description Method for getting resources links and setting them.
     *
     * @example
     * elem.ref('/some/cool/image.png');
     * elem.ref(); // '/some/cool/image.png'
     */

  }, {
    key: 'ref',
    value: function ref(link) {
      if (!arguments.length) {
        return this.attr(refSwitcher(this.name));
      }

      return this.forEach(function (elem) {
        elem = new Elem(elem);

        elem.attr(refSwitcher(elem.name), link);
      });
    }

    /**
     * @method Elem#remove
     * @public
     * @returns {Elem} Returns this.
     * @description Removes all the elements from the set from the document.
     * Note: it doesn't remove them from the set so watch out for the memory leaks.
     *
     * @example
     * elem.remove();
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.forEach(function (elem) {
        var parent = elem.parentElement;

        if (parent) {
          parent.removeChild(elem);
        }
      });
    }

    /**
     * @method Elem@removeAttr
     * @public
     * @param {...String} attributes - Attributes to remove.
     * @returns {Elem} Returns this.
     * @description Removes all the attributes from arguments from all the elements in the set.
     *
     * @example
     * elem.removeAttr('foo', 'bar', 'baz');
     */

  }, {
    key: 'removeAttr',
    value: function removeAttr() {
      var _arguments3 = arguments;

      for (var _len6 = arguments.length, attributes = Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
        attributes[_key7] = arguments[_key7];
      }

      return this.forEach(function (elem) {
        iterate(_arguments3, function (attr) {
          elem.removeAttribute(attr);
        });
      });
    }

    /**
     * @method Elem#removeClass
     * @public
     * @param {...String} classes - Classes to remove.
     * @returns {Elem} Returns this.
     * @description Removes all the classes from arguments from all the elements in the set.
     *
     * @example
     * elem.removeClass('foo', 'bar', 'baz');
     */

  }, {
    key: 'removeClass',
    value: function removeClass() {
      var _arguments4 = arguments;

      for (var _len7 = arguments.length, classes = Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
        classes[_key8] = arguments[_key8];
      }

      return this.forEach(function (elem) {
        var list = elem.classList;

        iterate(_arguments4, function (cls) {
          return list.remove(cls);
        });
      });
    }

    /**
     * @method Elem#removeCSS
     * @public
     * @param {...String} props - CSS properties to remove.
     * @returns {Elem} Returns this.
     * @description Removes all the CSS properties from arguments from all the elements in the set.
     *
     * @example
     * elem.removeCSS('display', 'position', 'margin');
     */

  }, {
    key: 'removeCSS',
    value: function removeCSS() {
      var _arguments5 = arguments;

      for (var _len8 = arguments.length, props = Array(_len8), _key9 = 0; _key9 < _len8; _key9++) {
        props[_key9] = arguments[_key9];
      }

      return this.forEach(function (elem) {
        iterate(_arguments5, function (css) {
          elem.style.removeProperty(css);
        });
      });
    }

    /**
     * @method Elem#replace
     * @public
     * @param {String|Elem|Element} element - Element to replace the first element in the set
     * with a set of elements specified by the argument (Element, set of elements or a selector of them).
     * @returns {Elem} Returns this.
     * @description Method is similar to
     * [Node#replaceChild]{@link https://developer.mozilla.org/en/docs/Web/API/Node/replaceChild}.
     *
     * @example
     * elem.replace(elem2);
     * elem.replace(document.getElementById('id'));
     * elem.replace('#id div.c1');
     */

  }, {
    key: 'replace',
    value: function replace(element) {
      element = toFind(element);

      var parent = this.first().parent();

      if (!parent.length) {
        return this;
      }

      var elem = parent;
      var method$$1 = 'into';
      var next = this.next().first().$[0];
      var prev = this.prev().first().$[0];

      if (next) {
        elem = next;
        method$$1 = 'insertBefore';
      } else if (prev) {
        elem = prev;
        method$$1 = 'insertAfter';
      }

      this.first().remove();

      element[method$$1](elem);
    }

    /**
     * @method Elem#setOf
     * @public
     * @param {String} type - HTML element type.
     * @param {Number|Object|*[]} iterator - A number (how many elements to create inside each element),
     * an object or an array to iterate over.
     * @param {ElemSetOfCallback} callback
     * @returns {Elem} New instance of Elem.
     * @description Function for creating set of elements inside each element in the set based on an array or an object.
     *
     * @example
     * table.setOf('tr', [[1, 2], [3, 4], [5, 6]], (row, array) => {
     *   D(row).setOf('td', array, (col, number) => {
     *     D(col).text(number);
     *   });
     * });
     */

  }, {
    key: 'setOf',
    value: function setOf(type, iterator, callback) {
      validate$1({ 2: callback }, { 2: ['function'] }, 'Elem#setOf');

      iterator = new Super(iterator).$;

      if (isNumber(iterator)) {
        try {
          validate$1({ 1: iterator }, { 1: ['intLike', '>=0'] }, 'Elem#setOf');
        } catch (e) {
          throw new Error('2nd argument must be either or non-negative integer, or object! (at Elem#setOf)');
        }

        iterator = array(iterator).$;
      }

      return this.object(function (elems, elem, index) {
        iterate(iterator, function (value, key) {
          var created = new Elem(elem).create(type);

          callback(created.$[0], value, key, iterator, elem, index);

          elems.add(created);
        });
      }, new Elem());
    }

    /**
     * @method Elem#show
     * @public
     * @returns {Elem} Returns this.
     * @description Shows all elements in the set.
     * If an element was hidden using {@link Elem#hide} previous display is set.
     *
     * @example
     * elem.show();
     */

  }, {
    key: 'show',
    value: function show() {
      return this.forEach(function (elem) {
        var _elem = elem;
        var dwayneData = _elem.dwayneData;


        elem = new Elem(elem);

        if (elem.css('display').indexOf('none') === 0) {
          elem.css('display', dwayneData.previousDisplay);
        }

        dwayneData.previousDisplay = '';
      });
    }

    /**
     * @method Elem#text
     * @public
     * @param {String|ElemValueCallback|*} [text] - Text to write instead of current text.
     * @returns {Elem|String} If no arguments passed text of the first element in the set returned.
     * Otherwise all elements texts in the set are set to the text argument.
     * @description Gets or sets text.
     *
     * @example
     * elem.text('123');
     * elem.text(); // '123'
     */

  }, {
    key: 'text',
    value: function text(_text) {
      if (!arguments.length) {
        return this.prop(textProperty);
      }

      return this.forEach(function (elem, index) {
        var txt = elem[textProperty];

        new Elem(elem).html('').addText(isFunction(_text) ? _text(txt, elem, index) : _text);
      });
    }

    /**
     * @method Elem#toggleAttr
     * @public
     * @param {String} attr - Attribute to toggle.
     * @param {Boolean|*} [condition] - If present and the condition is truthy method adds the attribute
     * with the '' value and if falsey method removes the attribute. If not present method adds
     * the attribute if it doesn't exist and removes if it does.
     * @returns {Elem} Returns this.
     * @description Method for toggling attributes.
     *
     * @example
     * elem.toggleAttr('attr');
     * elem.toggleAttr('attr', someCondition);
     */

  }, {
    key: 'toggleAttr',
    value: function toggleAttr(attr, condition) {
      var _arguments6 = arguments;

      return this.forEach(function (elem) {
        elem = new Elem(elem);

        if (_arguments6.length < 2 ? !elem.hasAttr(attr) : condition) {
          elem.attr(attr, '');
        } else {
          elem.removeAttr(attr);
        }
      });
    }

    /**
     * @method Elem#toggleAttr
     * @public
     * @param {String} cls - Class to toggle.
     * @param {Boolean|*} [condition] - If present and the condition is truthy method adds the class
     * and if falsey method removes the class. If not present method adds
     * the class if it doesn't exist and removes if it does.
     * @returns {Elem} Returns this.
     * @description Method for toggling classes.
     *
     * @example
     * elem.toggleClass('cls');
     * elem.toggleClass('cls', someCondition);
     */

  }, {
    key: 'toggleClass',
    value: function toggleClass(cls, condition) {
      return (arguments.length < 2 ? !this.hasClass(cls) : condition) ? this.addClass(cls) : this.removeClass(cls);
    }
  }, {
    key: 'up',


    /**
     * @method Elem#up
     * @param {Integer} [level = 1] - What level up along the tree should be the parent.
     * @returns {Elem} New instance of Elem.
     * @description Creates a collection of parents of level &lt;level&gt;.
     *
     * @example
     * elem.up();
     * elem.up(2);
     */
    value: function up() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      validate$1([level], [['intLike', '>=0']], 'Elem#up');

      level = Number(level);

      return this.object(function (elems, elem) {
        var n = level;

        while (n-- && elem) {
          elem = elem.parentElement;
        }

        elems.add(elem);
      }, new Elem());
    }

    /**
     * @method Elem#validate
     * @public
     * @param {ValidateCallback} [validator] - If present, function that validates inputs.
     * @returns {Elem|Object.<String, Error|*>|{ form: Error?, inputs: <Object.<String, Error>>|null }|null}
     * If a callback argument provided returns this. If no arguments provided returns either an object
     * with input names keys and errors values or null if no errors found.
     * @description If a callback argument provided adds it to the element validators list.
     * If no arguments provided validates every input element in the set with its own functions.
     * If an element is a form it validates all input elements inside it. After the validation
     * fires 'validate' event with 'valid' and 'error' (if form it's errors) properties.
     *
     * @example
     * form.on('input change', 'input', (value, input) => {
     *   const $input = D(input);
     *
     *   if (Number(value) %3) {
     *     $input.attr('invalid', '');
     *
     *     throw new Error('The value should be divided by 3!');
     *   }
     *
     *   $input.removeAttr('invalid');
     * });
     */

  }, {
    key: 'validate',
    value: function validate(validator) {
      validate$1([validator], ['function||!'], 'Elem#validate');

      if (validator) {
        return this.forEach(function (_ref11) {
          var dwayneData = _ref11.dwayneData;

          dwayneData.validators.push(validator);
        });
      }

      var errors = new Super({ errors: null });

      this.filter(inputElements + ', form').forEach(function (elem, index) {
        if (getName(elem) === 'form') {
          var _ret = function () {
            var formErrors = { errors: null };
            var form = new Elem(elem);
            var inputs = form.find(inputElements);

            inputs.forEach(function (input, index) {
              validatorWrap(input, index, formErrors);
            });

            errors.deepAssign(formErrors);

            formErrors = formErrors.errors;

            form.dispatch('validate', {}, {
              valid: !formErrors,
              errors: formErrors
            });

            return {
              v: inputs.forEach(function (input) {
                var inputError = (formErrors || {})[input.name];

                new Elem(input).dispatch('validate', {}, {
                  valid: !inputError,
                  error: inputError || null
                });
              })
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        var inputError = { errors: null };

        validatorWrap(elem, index, inputError);
        errors.deepAssign(inputError);

        inputError = (inputError.errors || {})[elem.name];

        new Elem(elem).dispatch('validate', {}, {
          valid: !inputError,
          error: inputError || null
        });
      });

      function validatorWrap(input, index, errors) {
        try {
          if (input.validity && !input.validity.valid) {
            throw new Error(input.validationMessage);
          }

          input.dwayneData.validators.forEach(function (validator) {
            validator(input.value, input, index);
          });
        } catch (err) {
          (errors.errors = errors.errors || {})[input.name] = err;
        }
      }

      if (errors.every(function (error) {
        return isNull(error);
      })) {
        return null;
      }

      return errors.$.errors;
    }

    /**
     * @method Elem#width
     * @public
     * @param {*|ElemValueCallback} [width] - Width to set.
     * @returns {Elem|String} If no arguments passed width of the first element in the set returned.
     * Otherwise all elements widths in the set are set to the width argument.
     * @description Gets or sets width.
     *
     * @example
     * elem.width(123);
     * elem.width(); // 123
     */

  }, {
    key: 'width',
    value: function width(_width) {
      return this.prop.apply(this, new Arr(arguments).unshift('width').$);
    }
  }, {
    key: 'innerHeight',
    get: function get() {
      var elem = this.$[0];

      if (!elem) {
        return 0;
      }

      if (isWindow(elem)) {
        return elem.innerHeight;
      }

      var _calcCSS = this.calcCSS();

      var borderTopWidth = _calcCSS.borderTopWidth;
      var borderBottomWidth = _calcCSS.borderBottomWidth;
      var boxSizing = _calcCSS.boxSizing;
      var height = _calcCSS.height;
      var paddingTop = _calcCSS.paddingTop;
      var paddingBottom = _calcCSS.paddingBottom;

      var borders = px(borderTopWidth) + px(borderBottomWidth);
      var paddings = px(paddingTop) + px(paddingBottom);

      return px(height) - innerSwitcher(boxSizing, [paddings, borders]);
    }

    /**
     * @member {Number} Elem#innerWidth
     * @type {Number}
     * @public
     * @readonly
     * @description Method for finding how much width content of the first element can be.
     *
     * @example
     * elem.css({
     *   boxSizing: 'border-box',
     *   width: '200px',
     *   paddingLeft: '2px',
     *   paddingRight: '3px',
     *   borderLeft: '1px solid black',
     *   borderRight: '4px solid black'
     * }).innerWidth; // 190
     * elem
     *   .css('box-sizing', 'content-box')
     *   .innerWidth; // 200
     * elem
     *   .css('box-sizing', 'padding-box')
     *   .innerWidth; // 195
     */

  }, {
    key: 'innerWidth',
    get: function get() {
      var elem = this.$[0];

      if (!elem) {
        return 0;
      }

      if (isWindow(elem)) {
        return elem.innerWidth;
      }

      var _calcCSS2 = this.calcCSS();

      var borderLeftWidth = _calcCSS2.borderLeftWidth;
      var borderRightWidth = _calcCSS2.borderRightWidth;
      var boxSizing = _calcCSS2.boxSizing;
      var paddingLeft = _calcCSS2.paddingLeft;
      var paddingRight = _calcCSS2.paddingRight;
      var width = _calcCSS2.width;

      var borders = px(borderLeftWidth) + px(borderRightWidth);
      var paddings = px(paddingLeft) + px(paddingRight);

      return px(width) - innerSwitcher(boxSizing, [paddings, borders]);
    }
  }, {
    key: 'name',
    get: function get() {
      return getName(this.$[0]);
    }
  }, {
    key: 'outerHeight',
    get: function get() {
      var elem = this.$[0];

      if (!elem) {
        return 0;
      }

      if (isWindow(elem)) {
        return elem.outerHeight;
      }

      var _calcCSS3 = this.calcCSS();

      var borderTopWidth = _calcCSS3.borderTopWidth;
      var borderBottomWidth = _calcCSS3.borderBottomWidth;
      var boxSizing = _calcCSS3.boxSizing;
      var height = _calcCSS3.height;
      var marginTop = _calcCSS3.marginTop;
      var marginBottom = _calcCSS3.marginBottom;
      var paddingTop = _calcCSS3.paddingTop;
      var paddingBottom = _calcCSS3.paddingBottom;

      var borders = px(borderTopWidth) + px(borderBottomWidth);
      var paddings = px(paddingTop) + px(paddingBottom);

      return px(height) + px(marginTop) + px(marginBottom) + outerSwitcher(boxSizing, [borders, paddings]);
    }

    /**
     * @member {Number} Elem#outerWidth
     * @type {Number}
     * @public
     * @readonly
     * @description Method for finding how much width the element actually is.
     *
     * @example
     * elem.css({
     *   boxSizing: 'border-box',
     *   width: '200px',
     *   paddingLeft: '2px',
     *   paddingRight: '3px',
     *   borderLeft: '1px solid black',
     *   borderRight: '4px solid black'
     *   marginLeft: '0px',
     *   marginRight: '5px'
     * }).outerWidth; // 205
     * elem
     *   .css('box-sizing', 'content-box')
     *   .outerWidth; // 215
     * elem
     *   .css('box-sizing', 'padding-box')
     *   .outerWidth; // 210
     */

  }, {
    key: 'outerWidth',
    get: function get() {
      var elem = this.$[0];

      if (!elem) {
        return 0;
      }

      if (isWindow(elem)) {
        return elem.outerWidth;
      }

      var _calcCSS4 = this.calcCSS();

      var borderLeftWidth = _calcCSS4.borderLeftWidth;
      var borderRightWidth = _calcCSS4.borderRightWidth;
      var boxSizing = _calcCSS4.boxSizing;
      var marginLeft = _calcCSS4.marginLeft;
      var marginRight = _calcCSS4.marginRight;
      var paddingLeft = _calcCSS4.paddingLeft;
      var paddingRight = _calcCSS4.paddingRight;
      var width = _calcCSS4.width;

      var borders = px(borderLeftWidth) + px(borderRightWidth);
      var paddings = px(paddingLeft) + px(paddingRight);

      return px(width) + px(marginLeft) + px(marginRight) + outerSwitcher(boxSizing, [borders, paddings]);
    }
  }, {
    key: 'toStringTag',
    get: function get() {
      return toStringTag(this.$$);
    }
  }]);
  return Elem;
}(Arr);

defineProperties(Elem.prototype, defineProperty({}, _Symbol.toStringTag, 'Elem'));

/**
 * @const {Elem} win
 * @type {Elem}
 * @public
 * @description Elem instance of window.
 */
var win = new Elem(global$1);

/**
 * @const {Elem} doc
 * @type {Elem}
 * @public
 * @description Elem instance of document.
 */
var doc = new Elem(nativeDocument);

/**
 * @const {Elem} html
 * @type {Elem}
 * @public
 * @description Elem instance of document.documentElement.
 */
var html = new Elem(nativeDocument.documentElement);

/**
 * @const {Elem} body
 * @type {Elem}
 * @public
 * @description Elem instance of document.body.
 */
var body = new Elem(nativeDocument.body);

/**
 * @const {Elem} head
 * @type {Elem}
 * @public
 * @description Elem instance of document.head.
 */
var head$1 = new Elem(nativeDocument.head);

dynamicDefineProperties(Elem.prototype, elements, function (elem) {
  return function () {
    return this.create.apply(this, new Arr(arguments).unshift(elem).$);
  };
});

dynamicDefineProperties(Elem.prototype, canvasGetMethods, function (method$$1) {
  return function () {
    var ctx = this.ctx();

    if (ctx) {
      return ctx[method$$1].apply(ctx, arguments);
    }
  };
});

dynamicDefineProperties(Elem.prototype, canvasRestMethods, function (method$$1) {
  return function () {
    var ctx = this.ctx();

    if (ctx) {
      ctx[method$$1].apply(ctx, arguments);
    }

    return this;
  };
});

/**
 * @function toFind
 * @private
 * @param {Element|Elem|String} elem - Element, selector of Elements or Elem.
 * @returns {Elem} Instance of Elem.
 */
function toFind(elem) {
  if (isString(elem)) {
    elem = _find(elem);
  }

  return new Elem(elem);
}

/**
 * @function isElem
 * @private
 * @param {*} value - Value to check if it's Elem.
 * @returns {Boolean} If the value is Elem.
 * @description Returns if the value is Elem or not.
 */
function isElem(value) {
  return value instanceof Elem;
}

/**
 * @function isWindow
 * @private
 * @param {*} value - Value to check if it's Window.
 * @returns {Boolean} If the value is Window.
 * @description Returns if the value is Window or not.
 */
function isWindow(value) {
  return toStringTag(value) === 'Window';
}

/**
 * @function isHTMLDocument
 * @private
 * @param {*} value - Value to check if it's HTMLDocument.
 * @returns {Boolean} If the value is HTMLDocument.
 * @description Returns if the value is HTMLDocument or not.
 */
function isHTMLDocument(value) {
  return toStringTag(value) === 'HTMLDocument';
}

/**
 * @function getElem
 * @private
 * @param {Elem} elem - Element to check.
 * @returns {Element} The argument or a fallback if needed.
 */
function getElem(elem) {
  return elem.$[0] || emptyDiv;
}

/**
 * @function getName
 * @private
 * @param {Element} [elem] - Element which name is needed to know.
 * @returns {String} Elements name
 */
function getName(elem) {
  return elem && elem.tagName && elem.tagName.toLowerCase() || '';
}

/**
 * @function addDwayneData
 * @private
 * @param {Element} elem - Element to add dwayneData to.
 * @returns {void}
 */
function addDwayneData(elem) {
  if (!{}.hasOwnProperty.call(elem, 'dwayneData') && !isWindow(elem)) {
    /**
     * @member Element#dwayneData
     * @type {Object}
     * @protected
     * @property {String} previousDisplay - Parameter used for hiding/showing elements.
     * @property {Object.<String, Super>} removeListeners - Parameter used for remove event listeners.
     * @property {CanvasRenderingContext2D} [ctx] - Canvas rendering context.
     * @property {Arr} validators - Validators assigned to element.
     * @description D data.
     */
    Object.defineProperty(elem, 'dwayneData', {
      value: {
        previousDisplay: '',
        listeners: {},
        ctx: getName(elem) === 'canvas' && elem.getContext('2d'),
        validators: new Arr([])
      }
    });
  } else if (!windowsDwayneData.some(function (_ref12) {
    var element = _ref12.element;
    return element === elem;
  })) {
    windowsDwayneData.push({
      element: elem,
      listeners: {}
    });
  }
}

constructors[2].push({
  check: function check(elem) {
    return isElement(elem) || isWindow(elem) || isHTMLDocument(elem) || /^(HTMLCollection|NodeList)$/.test(toStringTag(elem));
  },
  cls: Elem
});

/**
 * @function find
 * @public
 * @param {String} selector - Selector to find.
 * @param {Element} [base = document] - Base to find in.
 * @returns {Elem} New instance of Elem.
 * @description Synonym for
 * [Document#querySelectorAll]{@link https://developer.mozilla.org/en/docs/Web/API/Document/querySelectorAll}.
 */
function _find(selector) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nativeDocument;

  return new Elem(base.querySelectorAll(String(selector)));
}

/**
 * @function parseHTML
 * @public
 * @param {String} html - HTML to parse.
 * @returns {Elem} New instance of Elem.
 * @description Parses HTML and returns the contents.
 *
 * @example
 * parseHTML('&lt;div&gt;123&lt;/div&gt;'); // Elem
 */
function parseHTML(html) {
  return doc.div().html(html).children();
}

/**
 * @function px
 * @public
 * @param {String|Number} size - String containing pixels value or a number.
 * @returns {Number} Number of pixels.
 * @description Function for parsing pixel strings.
 *
 * @example
 * px('0px');  // 0
 * px('42px'); // 42
 */
function px(size) {
  return Number(String(size).replace(/px$/, ''));
}

/**
 * @module helpers/resolveURL
 * @private
 * @description Exports Object.assign-like method.
 */

var _global$2 = global$1;
var location$1 = _global$2.location;


var resolveURL = (function (decodeQuery) {
  var query = location$1.search;
  var hash = location$1.hash;

  var params = {
    query: {},
    hash: hash.replace(/^#/, '')
  };

  if (!query) {
    return params;
  }

  new Str(query.replace(/^\?/, '')).split('&').forEach(function (rawParam) {
    var _rawParam$split = rawParam.split('=');

    var _rawParam$split2 = slicedToArray(_rawParam$split, 2);

    var param = _rawParam$split2[0];
    var _rawParam$split2$ = _rawParam$split2[1];
    var value = _rawParam$split2$ === undefined ? '' : _rawParam$split2$;


    param = decodeQuery ? decodeURIComponent(param) : param;
    value = decodeQuery ? decodeURIComponent(value) : value;

    if (!/^[^\[]+/.test(param)) {
      return;
    }

    var paramName = void 0;
    var paramObject = params.query;

    new Str(param).match(/^[^\[\]]*|\[[^\[\]]*\]/g).forEach(function (name) {
      if (name.indexOf('[')) {
        paramName = name;

        return;
      }

      name = name.slice(1, -1);

      paramObject = paramObject[paramName] = paramObject[paramName] || (name ? {} : []);
      paramName = name || paramObject.length;
    });

    paramObject[paramName] = value;
  });

  return params;
});

/**
 * @module Router
 * @private
 * @mixin
 * @description Exports Router class.
 */

/**
 * @typedef {Object} URLOptions
 * @public
 * @property {Object} [params = {}] - URL params.
 * @property {Object} [query = {}] - Query params.
 * @property {String} [hash = ''] - Hash.
 */

/**
 * @event Router#event
 * @public
 * @description Router event.
 */

/**
 * @method Router#event#pause
 * @public
 * @description Method that pauses the event propagation. Only {@link Router#event:beforeLeave} and
 * {@link Router#event:beforeLoad} can be paused.
 *
 * @example
 * event.pause();
 */

/**
 * @method Router#event#continue
 * @public
 * @description Method that continues the event propagation. Only {@link Router#event:beforeLeave} and
 * {@link Router#event:beforeLoad} can be paused therefore continued.
 *
 * @example
 * event.continue();
 */

/**
 * @method Router#event#stop
 * @public
 * @description Method that stops the event propagation. Only {@link Router#event:beforeLeave} and
 * {@link Router#event:beforeLoad} can be stopped.
 *
 * @example
 * event.stop();
 */

/**
 * @method Router#event#go
 * @public
 * @description Method that prevents Router from loading the default state forcing the page
 * going directly to another URL.
 *
 * @example
 * event.go('/login');
 */

/**
 * @method Router#event#redirectTo
 * @public
 * @description Method that prevents Router from loading the default state forcing the page
 * going directly to another URL.
 *
 * @example
 * event.go('/login');
 */

/**
 * @event Router#event:init
 * @public
 * @property {String} type - 'init' string.
 * @description Router init event. Is fired on Router once after Router.init has been called
 * and Router initialization. It cannot be [paused]{@link Router#event#pause}
 * or [stopped]{@link Router#event#stop}.
 */

/**
 * @event Router#event:beforeLeave
 * @public
 * @property {String} type - 'beforeLeave' string.
 * @property {Router} state - Initial state.
 * @property {String} toURL - URL the redirect goes to.
 * @description Router beforeLeave event. Is fired when an attempt to leave the state happened
 * (or it bubbled to the parent state). It can be [paused]{@link Router#event#pause}
 * and [stopped]{@link Router#event#stop}.
 */

/**
 * @event Router#event:leave
 * @public
 * @property {String} type - 'leave' string.
 * @property {Router} state - Initial state.
 * @property {String} toURL - URL the redirect goes to.
 * @description Router leave event. Is fired right after {@link Router#event:beforeLeave} has been fired.
 * It cannot be [paused]{@link Router#event#pause} or [stopped]{@link Router#event#stop}.
 */

/**
 * @event Router#event:reload
 * @public
 * @property {String} type - 'reload' string.
 * @description Router reload event. Is fired only on Router during {@link reload} is called.
 */

/**
 * @event Router#event:beforeLoad
 * @public
 * @property {String} type - 'beforeLoad' string.
 * @property {Router} state - Eventual state.
 * @description Router beforeLoad event. Is fired when the URL has been already changed after
 * {@link Router#event:leave} has been fired, after the only {@link Router#event:init}
 * has been fired and after browser back or forward buttons has been pressed.
 * It can be [paused]{@link Router#event#pause} and [stopped]{@link Router#event#stop}
 * preventing the state from loading and causing going to the next matched state.
 * Is fired from the Router state down to the loading state.
 */

/**
 * @event Router#event:load
 * @public
 * @property {String} type - 'leave' string.
 * @property {Router} state - Eventual state.
 * @description Router load event. Is fired right after {@link Router#event:beforeLoad} has been fired.
 * It cannot be [paused]{@link Router#event#pause} or [stopped]{@link Router#event#stop}.
 * Is fired from the Router state down to the loading state.
 */

/**
 * @event Router#event:render
 * @public
 * @property {String} type - 'render' string.
 * @property {Router} state - Eventual state.
 * @property {Router} renderingState - Constructor of current rendering state.
 * @description Router load event. Is fired right after {@link Router#event:beforeLoad} has been fired.
 * It cannot be [paused]{@link Router#event#pause} or [stopped]{@link Router#event#stop}.
 * In order to render the state there should be an element with the "dwayne-router-state" attribute
 * set to the state name. States are rendered from the Router down to the current state.
 */

/**
 * @callback RouterListener
 * @public
 * @param {Router#event} e - Fired event.
 */

/**
 * @callback RouterRemoveListeners
 * @public
 * @param {String} [event] - If not specified all listeners are removed.
 * Otherwise only specified by the name are to be removed.
 */

var extendLink = 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends';
var stateAttrName = 'dwayne-router-state';
var isPrototypeOf = {}.isPrototypeOf;
var _global$1 = global$1;
var history = _global$1.history;
var location = _global$1.location;
var _global$location = _global$1.location;
var origin = _global$location.origin;
var href = _global$location.href;

var stoppable = new Arr(['beforeLeave', 'beforeLoad']);
var states = new Arr([]);
var pathSwitcher = switcher('call', function () {
  throw new Error('State path must be a string, a regular expression or undefined! (at registerState)');
}).case(isRegExp, function (path) {
  return {
    path: path.source.replace(/\\\//g, '/'),
    url: path,
    params: {}
  };
}).case(isNullOrUndefined, function () {
  return {
    path: '/',
    url: '/',
    params: {}
  };
}).case(isString, function (path) {
  if (path.indexOf('/')) {
    throw new Error('If state path is a string it must start with "/"! (at registerState)');
  }

  var index = path.indexOf('?');
  var params = new Super({});
  var newURL = '';
  var newPath = new Str(path).slice(0, index === -1 ? path.length : index).replace(/^\/|\/$/g).split(/\//).map(function (part, i, array$$1) {
    if (!part && array$$1.length > 1) {
      throw new Error('If state path is a string it must not contain "//" or end with "/"! (at registerState)');
    }

    var index = part.indexOf(':');

    if (index > 0) {
      throw new Error('If state path is a string resource part must be either a string or an URL parameter! (at registerState)');
    }

    if (index === -1) {
      return {
        url: part,
        value: part
      };
    }

    var _resolveParameter = resolveParameter(part.slice(1), 'URL parameter must not be an empty string or contain characters besides "a-zA-Z_$"! (at registerState)', 'URL parameter regexp validator must be within parentheses (e.g. :userId(\\d+) and not contain ones)! (at registerState)');

    var name = _resolveParameter.name;
    var _resolveParameter$reg = _resolveParameter.regexp;
    var regexp = _resolveParameter$reg === undefined ? /[^\/]*/ : _resolveParameter$reg;


    params.$[name] = params.count;

    return {
      type: 'param',
      url: ':' + name,
      value: regexp
    };
  }).word(function (_ref) {
    var type = _ref.type;
    var url = _ref.url;
    var value = _ref.value;

    var newPath = void 0;

    if (type === 'param') {
      newPath = '(' + value.source.replace(/\\\//g, '/') + ')';
    } else {
      newPath = new Str(value).escapeRegExp().$;
    }

    newURL += '/' + url;

    return '/' + newPath;
  });

  return {
    path: newPath,
    url: newURL,
    params: params.$
  };
});
var selectorMatchesSwitcher = switcher('call', function (selector) {
  return function (name) {
    return name === selector;
  };
}).case(isNull, function (selector) {
  return function (name) {
    return true;
  };
}).case(isRegExp, function (selector) {
  return function (name) {
    return selector.test(name);
  };
}).case(isArray, function (selector) {
  return function (name) {
    return selector.indexOf(name) !== -1;
  };
});

var eventPromise = Promise$1.resolve();
var pushed = void 0;
var initialized = void 0;
var routerLoaded = void 0;
var router = void 0;
var pageTitle = void 0;
var pageIcon = void 0;
var defaultState = void 0;
var currentState = void 0;
var currentTitle = void 0;
var currentIcon = void 0;
var initTitle = void 0;
var initIcon = void 0;
var initHTML = void 0;

/**
 * @class Router
 * @public
 * @param {Object} props - Always pass props to the super constructor from the Router subclasses.
 * @returns {Router} New instance of Router state.
 * @description Wrap of an array.
 *
 * @example
 * Class for routing the app. It uses [History API]{@link https://developer.mozilla.org/en/docs/Web/API/History_API}.
 * You can redirect and go to parts of your app not reloading the page (changing the URL).
 * URLs and queries can be validates. There can hooks (such as {@link Router#event:beforeLoad},
 * {@link Router#event:load}, {@link Router#event:beforeLeave}, {@link Router#event:leave}
 * and {@link Router#event:render}). Don't try to call new <YourState>() or new Router().
 * All following examples contain proposed syntax for class properties.
 */
var Router = function () {
  createClass(Router, null, [{
    key: 'buildURL',


    /**
     * @method Router.buildURL
     * @public
     * @param {URLOptions} [options = {}] - URL options.
     * @returns {String} Built URL.
     * @description Method for building URLs that guaranteed to be matched by this state.
     * Works properly only after {@link Router#event:init} has been fired.
     *
     * @example
     * class MyState extends Router {
     *   static stateName = 'myState';
     *   static path = '/user/:userId';
     * }
     *
     * registerState(MyState);
     *
     * Router.on('init', () => {
     *   MyState.buildURL({
     *     params: {
     *       userId: 42
     *     },
     *     query: {
     *       param: 'value'
     *     }
     *   }); // '<yourOrigin>/user/42?param=value'
     * });
     */
    value: function buildURL() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var url = this.url;


      if (isRegExp(url)) {
        throw new Error('URL can be built only from the string URLs! (Router.buildURL)');
      }

      var _options$params = options.params;
      var params = _options$params === undefined ? {} : _options$params;
      var _options$query = options.query;
      var query = _options$query === undefined ? {} : _options$query;
      var _options$hash = options.hash;
      var hash = _options$hash === undefined ? '' : _options$hash;


      return constructURL(origin, url, params, query, hash, {
        params: this.encodeParams,
        query: this.encodeQuery
      });
    }

    /**
     * @method Router.go
     * @public
     * @fires Router#event:beforeLeave
     * @param {URLOptions} [options = {}] - URL options.
     * @description Method combines {@link Router#buildURL} and {@link go}.
     *
     * @example
     * class MyState extends Router {
     *   static stateName = 'myState';
     *   static path = '/user/:userId';
     * }
     *
     * registerState(MyState);
     *
     * Router.on('init', () => {
     *   MyState.go({
     *     params: {
     *       userId: 42
     *     },
     *     query: {
     *       param: 'value'
     *     }
     *   });
     * });
     */

  }, {
    key: 'go',
    value: function go(options) {
      if (this.abstract) {
        throw new Error('Cannot go to an abstract state! (at Router.go)');
      }

      _go(this.buildURL(options));
    }

    /**
     * @method Router.redirect
     * @public
     * @fires Router#event:beforeLeave
     * @param {URLOptions} [options = {}] - URL options.
     * @description Method combines {@link Router#buildURL} and {@link redirectTo}.
     *
     * @example
     * class MyState extends Router {
     *   static stateName = 'myState';
     *   static path = '/user/:userId';
     * }
     *
     * registerState(MyState);
     *
     * Router.on('init', () => {
     *   MyState.redirect({
     *     params: {
     *       userId: 42
     *     },
     *     query: {
     *       param: 'value'
     *     }
     *   });
     * });
     */

  }, {
    key: 'redirect',
    value: function redirect(options) {
      if (this.abstract) {
        throw new Error('Cannot go to an abstract state! (at Router.go)');
      }

      redirectTo(this.buildURL(options));
    }

    /**
     * @method Router.init
     * @public
     * @fires Router#event:init
     * @description Method for initializing Router.
     * Note that method like {@link Router.buildURL} and {@link Router.go}
     * don't work properly until the 'init' event is fired. In order to initialize Router
     * there should be an element with the "dwayne-router" id (content of the Router states).
     *
     * @example
     * Router.init();
     */

  }, {
    key: 'init',
    value: function init() {
      initialized = true;

      initialize();
    }

    /**
     * @method Router.on
     * @public
     * @listens Router#event
     * @param {String|Object.<String|Listener>} event - Either a event string
     * or an object with event keys and listeners values.
     * @param {String|String[]|RegExp} selector - String, array of strings or
     * a regular expression to filter states by the state name. Render event is treated
     * the special way: current rendering state name is compared to the selector.
     * @param {RouterListener} [listener] - If the first argument is a string it must be
     * a listener function for specified event.
     * @returns {RouterRemoveListeners} Function that can remove listeners that has just been set.
     * @description Method for listening to all events you want. beforeLeave
     */

  }, {
    key: 'on',
    value: function on(event) {
      var _this = this;

      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var listener = arguments[2];

      if (isFunction(selector)) {
        listener = selector;
        selector = null;
      }

      if (isString(event)) {
        event = defineProperty({}, event, listener);
      }

      var listeners = this.$$.listeners;

      var allListeners = {};
      var matchesSelector = selectorMatchesSwitcher(selector);

      iterate(event, function (listener, event) {
        var array$$1 = listeners[event] || new Arr([]);
        var newListener = function newListener(e) {
          var name = e.state && e.state.name;

          if (e.renderingState) {
            name = e.renderingState.stateName;
          }

          if (matchesSelector(name)) {
            listener.call(_this, e);
          }
        };

        newListener.toString = function () {
          return listener.toString();
        };

        allListeners[event] = newListener;
        (listeners[event] = array$$1).push(newListener);
      });

      return function removeEventListeners(event) {
        var actualListeners = allListeners;

        if (allListeners[event]) {
          actualListeners = defineProperty({}, event, allListeners[event]);
        }

        iterate(actualListeners, function (listener, event) {
          var eventListeners = listeners[event];

          var found = eventListeners.find(function (l) {
            return l === listener;
          });

          if (found) {
            eventListeners.splice(found.key);
          }
        });
      };
    }

    // TODO: Router#store

    /**
     * @member {Elem} Router#base
     * @type {Elem}
     * @public
     * @description State rendering base node.
     * Created before firing {@link Router#event:render}.
     */


    /**
     * @member {String} Router#name
     * @type {String}
     * @public
     * @description State name (inherited from the constructor).
     * Created during state initialization.
     */


    /**
     * @member {Object} Router#params
     * @type {Object}
     * @public
     * @description State URL params.
     * Created during state initialization.
     */


    /**
     * @member {Object} Router#query
     * @type {Object}
     * @public
     * @description State query params.
     * Created during state initialization.
     */


    /**
     * @member {String} Router#hash
     * @type {String}
     * @public
     * @description State query params.
     * Created during state initialization.
     */


    /**
     * @member {Object} Router#templateParams
     * @type {Object}
     * @public
     * @description State template params. Inherited from the constructor template params.
     * Can be changed before rendering in beforeLoad or load event listeners.
     * Created during state initialization.
     */

  }, {
    key: 'default',


    /**
     * @member {Router} Router.default
     * @type {Router}
     * @public
     * @description Works with Router only. Default Router state.
     */


    /**
     * @member {Boolean} Router.icon
     * @type {String}
     * @public
     * @description URL to the state icon (one within the tab). To set icons you should create a link element
     * with "dwayne-router-icon" id. Router will set href itself.
     * Not required and inherited from the parent state. Router default value is null.
     */


    /**
     * @member {Boolean} Router.encodeQuery
     * @type {Boolean}
     * @public
     * @description If the query params should be encoded during the URL building (see {@link Router.buildURL}).
     * Not required and inherited from the parent state. Router default value is true.
     */


    /**
     * @member {Boolean} Router.encodeParams
     * @type {Boolean}
     * @public
     * @description If the URL params should be encoded during the URL building (see {@link Router.buildURL}).
     * Not required and inherited from the parent state. Router default value is true.
     */


    /**
     * @member {Object} Router.templateParams
     * @type {Object}
     * @public
     * @description State template params (for javascript templates).
     * During the Router initialization are inherited from the parent state template params.
     * Not required and defaults to {}.
     */


    /**
     * @member {String|RegExp} Router.path
     * @type {String|RegExp}
     * @public
     * @description State path relative to the parent state. Must begin with "/" if present.
     * Not required and defaults to "/".
     */


    /**
     * @member {Boolean} Router.abstract
     * @type {Boolean}
     * @public
     * @description If the states should be abstract or not. Abstract state cannot be current state.
     * This field is not required and defaults to false.
     */


    /**
     * @member {Object} Router.query
     * @type {Object}
     * @protected
     * @description State query params. Generated during the state registration.
     */


    /**
     * @member {String|RegExp} Router.relativeURL
     * @type {String|RegExp}
     * @protected
     * @description State matching relative URL. Generated during the state registration.
     */


    /**
     * @member {String} Router.url
     * @type {String}
     * @protected
     * @description State matching URL. Generated during the router initialization.
     */


    /**
     * @member {Arr} Router.children
     * @type {Arr}
     * @protected
     * @description Children states.
     */

    /**
     * @member {Object} Router.$$
     * @type {Object}
     * @protected
     * @property {Object} listeners - State listeners.
     * @property {Arr} [states] - All states. Only Router has this property.
     * @property {Router} [state] - Current state. Only Router has this property.
     * @description Config object.
     */
    get: function get() {
      return defaultState;
    }
    // noinspection JSAnnotator


    /**
     * @member {Boolean} Router.title
     * @type {String}
     * @public
     * @description App title (one within the tab). To set title you should create a title element
     * with "dwayne-router-title" id. Router will set the value itself.
     * Not required and inherited from the parent state. Router default value is null.
     */


    /**
     * @member {Boolean} Router.decodeQuery
     * @type {Boolean}
     * @public
     * @description If the query params should be decoded during the state initialization.
     * Not required and inherited from the parent state. Router default value is true.
     */


    /**
     * @member {Boolean} Router.decodeParams
     * @type {Boolean}
     * @public
     * @description If the URL params should be decoded during the state initialization.
     * Not required and inherited from the parent state. Router default value is true.
     */


    /**
     * @member {Object} Router.elements
     * @type {Object}
     * @public
     * @description State view elements selectors and event listeners.
     * Before rendering these elements are found within the rendering state
     * and assigned to the state. Events will be eventually lowercased.
     * Event listeners are set to the specified events and elements
     * and already bound to the state. Not required and defaults to {}.
     *
     * @example
     * class MyState extends Router {
     *   static stateName = 'myState';
     *   static elements = {
     *     caption: '.caption',
     *     form: {
     *       $: '.form',
     *
     *       $onSubmit: 'onSubmit',
     *
     *       emailInput: 'input[type="email"]',
     *       passwordInput: 'input[type="password"]'
     *     },
     *     container: {
     *       $: '.container',
     *
     *       nestedContainer: {
     *         $: '.nested-container',
     *
     *         $onClick: 'onNestedContainerClick',
     *
     *         content: '.content'
     *       }
     *     }
     *   };
     *
     *   logEvent(e) {
     *     console.log(e);
     *   }
     *
     *   onSubmit(e) {
     *     this.logEvent(e);
     *
     *     console.log('submitting form');
     *   }
     *
     *   onNestedContainerClick(e) {
     *     this.logEvent(e);
     *
     *     console.log('clicked container');
     *   }
     *
     *   onRender() {
     *     console.log(this.caption); // instance of Elem
     *     console.log(this.form);    // instance of Elem
     *     console.log(this.content); // instance of Elem
     *
     *     // etc
     *   }
     * }
     *
     * // this is an equivalent to
     *
     * class MyState extends Router {
     *   static stateName = 'myState';
     *
     *   logEvent(e) {
     *     console.log(e);
     *   }
     *
     *   onSubmit(e) {
     *     this.logEvent(e);
     *
     *     console.log('submitting form');
     *   }
     *
     *   onNestedContainerClick(e) {
     *     this.logEvent(e);
     *
     *     console.log('clicked container');
     *   }
     *
     *   onRender() {
     *     const { base } = this;
     *
     *     this.caption         = base.find('.caption');
     *     this.form            = base.find('.form');
     *     this.emailInput      = base.find('.form input[type="email"]');
     *     this.passwordInput   = base.find('.form input[type="password"]');
     *     this.container       = base.find('.container');
     *     this.nestedContainer = base.find('.container .nested-container');
     *     this.content         = base.find('.container .nested-container .content');
     *
     *     this.form.on('submit', this.onSubmit.bind(this));
     *     this.nestedContainer.on('click', this.onNestedContainerClick.bind(this));
     *
     *     // your usual onRender code goes here
     *   }
     * }
     */


    /**
     * @member {String|Function} Router.template
     * @type {String|Function}
     * @public
     * @description State template. Can be either a static string template
     * or a generated function from your javascript templates provider.
     * Not required and defaults to "".
     */


    /**
     * @member {String} Router.stateName
     * @type {String}
     * @public
     * @description A unique name bound to state. Required.
     */


    /**
     * @member {Super} Router.elems
     * @type {Super}
     * @protected
     * @description State elements selectors. Generated during the state registration.
     */


    /**
     * @member {Object} Router.params
     * @type {Object}
     * @protected
     * @description State URL params. Generated during the state registration.
     */


    /**
     * @member {String} Router.relativePath
     * @type {String}
     * @protected
     * @description State matching relative path. Generated during the state registration.
     */


    /**
     * @member {RegExp} Router.validatePath
     * @type {RegExp}
     * @protected
     * @description Regexp to validate the URL. Created during the router initialization.
     */


    /**
     * @member {Router} Router.parent
     * @type {Router}
     * @protected
     * @description Parent state.
     */
    ,
    set: function set(state) {
      if (states.indexOf(state) === -1) {
        throw new Error('State must be registered! (Router.default)');
      }

      var abstract = state.abstract;
      var path = state.path;
      var params = state.params;
      var query = state.query;


      if (abstract) {
        throw new Error('Default state must not be abstract! (Router.default)');
      }

      if (isRegExp(path)) {
        throw new Error('Default state must not have regexp path! (Router.default)');
      }

      if (new Super(params).count || new Super(query).count) {
        throw new Error('Default state must not have URL or query params! (Router.default)');
      }

      defaultState = state;
    }
  }]);

  function Router() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Router);
    this.base = router;
    this.name = null;
    this.params = {};
    this.query = {};
    this.hash = '';
    this.templateParams = new Super(new Super(this).proto().$.constructor.templateParams).create().$;

    assign$1(this, props);
  }

  /**
   * @method Router#onBeforeLeave
   * @public
   * @listens Router#event:beforeLeave
   * @param {Router#event:beforeLeave} event - Fired event.
   * @description Called on beforeLeave event. Called after the listeners.
   */


  createClass(Router, [{
    key: 'onBeforeLeave',
    value: function onBeforeLeave() {}

    /**
     * @method Router#onBeforeLoad
     * @public
     * @listens Router#event:beforeLoad
     * @param {Router#event:beforeLoad} event - Fired event.
     * @description Called on beforeLoad event. Called after the listeners.
     */

  }, {
    key: 'onBeforeLoad',
    value: function onBeforeLoad() {}

    /**
     * @method Router#onInit
     * @public
     * @listens Router#event:init
     * @param {Router#event:init} event - Fired event.
     * @description Called on init event. Called after the listeners.
     */

  }, {
    key: 'onInit',
    value: function onInit() {}

    /**
     * @method Router#onLeave
     * @public
     * @listens Router#event:leave
     * @param {Router#event:leave} event - Fired event.
     * @description Called on leave event. Called after the listeners.
     */

  }, {
    key: 'onLeave',
    value: function onLeave() {}

    /**
     * @method Router#onLoad
     * @public
     * @listens Router#event:load
     * @param {Router#event:load} event - Fired event.
     * @description Called on load event. Called after the listeners.
     */

  }, {
    key: 'onLoad',
    value: function onLoad() {}

    /**
     * @method Router#onRender
     * @public
     * @listens Router#event:render
     * @param {Router#event:render} event - Fired event.
     * @description Called on render event. Called after the listeners.
     */

  }, {
    key: 'onRender',
    value: function onRender() {}
  }]);
  return Router;
}();

Router.$$ = {
  listeners: {},
  state: null,
  states: states
};
Router.parent = null;
Router.children = new Arr([]);
Router.validatePath = /^\/$/;
Router.url = '/';
Router.relativePath = '/';
Router.relativeURL = '/';
Router.params = {};
Router.query = {};
Router.elems = new Super({});
Router.abstract = false;
Router.stateName = null;
Router.path = '/';
Router.template = '';
Router.templateParams = {};
Router.elements = {};
Router.encodeParams = true;
Router.decodeParams = true;
Router.encodeQuery = true;
Router.decodeQuery = true;
Router.icon = null;
Router.title = null;
var MainState = Router.prototype;

defaultState = Router;

var RouterError = function RouterError() {
  classCallCheck(this, RouterError);
};

var stopError = new RouterError();

/**
 * @function redirect
 * @private
 * @param {String} newURL - New URL to go to.
 * @param {Boolean} [push] - If it's need to push state or rather replace it.
 */
function redirect(newURL, push) {
  eventPromise = eventPromise.then(function () {
    return beforeLeave(newURL);
  }).then(function () {
    (currentState ? currentState.base : new Elem([])).hide().html('');

    changeHistory(newURL, push);
  }).then(function () {
    currentState = Router.$$.state = null;
  }).then(beforeLoad).catch(printError);
}

/**
 * @function beforeLeave
 * @private
 * @param {String} newURL - New URL to go to.
 * @returns {Promise}
 */
function beforeLeave(newURL) {
  return Promise$1.resolve().then(function () {
    return dispatchNewEvent('beforeLeave');
  }).then(function () {
    return dispatchNewEvent('leave');
  });

  function dispatchNewEvent(type) {
    return dispatchEvent(type, {
      type: type,
      state: currentState,
      toURL: newURL
    });
  }
}

/**
 * @function beforeLoad
 * @private
 * @returns {Promise}
 */
function beforeLoad() {
  var _resolveURL = resolveURL(Router.decodeQuery);

  var hash = _resolveURL.hash;

  var newState = void 0;

  return Promise$1.resolve().then(function () {
    return loadStatesByOne();
  }).then(function () {
    currentState = Router.$$.state = newState;

    return dispatchNewEvent('load');
  }).then(function () {
    var proto = new Super(newState).proto().$.constructor;
    var renderStates = new Arr([proto]);
    var _newState = newState;
    var stateName = _newState.stateName;
    var templateParams = _newState.templateParams;
    var title = proto.title;
    var icon = proto.icon;

    var ownTemplateParams = new Super(templateParams).clone();
    var state = proto;
    var promise = Promise$1.resolve();

    while (!getStateBase(state).length && (state = state.parent)) {
      renderStates.unshift(state);
    }

    _find('[' + stateAttrName + ']').forEach(function (elem) {
      elem = new Elem(elem);

      var stateNameFromAttr = elem.attr(stateAttrName);

      var _ref2 = states.find(function (_ref3) {
        var stateName = _ref3.stateName;
        return stateName === stateNameFromAttr;
      }) || {};

      var foundState = _ref2.value;


      if (!foundState || stateNameFromAttr !== stateName && !(newState instanceof foundState)) {
        elem.hide().html('');
      }
    });

    renderStates.forEach(function (state) {
      var template = state.template;
      var parentTemplateParams = state.templateParams;
      var elems = state.elems;

      var templateParams = new Super(parentTemplateParams).create().assign(ownTemplateParams).$;

      promise = promise.then(function () {
        var base = getStateBase(state).first().show();

        try {
          base.html(isFunction(template) ? template(templateParams) : template);
        } catch (err) {
          console.error('%s %o', 'Render error:', err);
        }

        base.find('[' + stateAttrName + ']').hide();

        newState.base = base;

        new Super(newState).assign(elems.map(function (_ref4) {
          var selector = _ref4.selector;
          var listeners = _ref4.listeners;

          var elem = base.find(selector);

          listeners.forEach(function (listenerName, event) {
            var listener = new Func(newState[listenerName]).bindContext(newState);

            if (isFunction(listener)) {
              elem.on(event, listener);
            }
          });

          return elem;
        }).$);

        if (state === proto) {
          if (!isNull(title) && title !== currentTitle) {
            pageTitle.text(currentTitle = title);
          }

          if (!isNull(icon) && icon !== currentIcon) {
            pageIcon.ref(currentIcon = icon);
          }
        }

        return dispatchNewEvent('render', state);
      });
    });

    return promise;
  }).catch(printError);

  function dispatchNewEvent(type, renderingState) {
    return dispatchEvent(type, {
      type: type,
      state: newState
    }, renderingState);
  }

  function loadStatesByOne() {
    var promise = Promise$1.reject(stopError);

    findStatesByURL().forEach(function (_ref5) {
      var state = _ref5.state;
      var params = _ref5.params;
      var query = _ref5.query;

      promise = promise.catch(function (err) {
        if (err instanceof RouterError && err.type === 'redirect') {
          throw err;
        }

        printError(err);

        newState = new state({
          name: state.stateName,
          params: params,
          query: query,
          hash: hash
        });

        return dispatchNewEvent('beforeLoad');
      });
    });

    return promise.catch(function (err) {
      if (err instanceof RouterError && err.type === 'redirect') {
        changeHistory(err.url, err.push);

        return loadStatesByOne();
      }

      throw err;
    });
  }
}

/**
 * @function changeHistory
 * @private
 * @param {String} url - URL to go to.
 * @param {Boolean} push - If the state is needed to be pushed or replaced.
 * @description Function for manipulating history.
 */
function changeHistory(url, push) {
  try {
    history[push ? 'pushState' : 'replaceState'](null, null, url);
    pushed = true;
  } catch (err) {
    location.href = url;
  }
}

/**
 * @function decode
 * @private
 * @param {String} string - String to decode.
 * @param {Boolean} decodeParams - If the string should be decoded in the first place.
 * @returns {String} Decoded string.
 */
function decode(string, decodeParams) {
  return decodeParams ? decodeURIComponent(string) : string;
}

/**
 * @function printError
 * @private
 * @param {Error} err - Error to log.
 */
function printError(err) {
  if (!(err instanceof RouterError)) {
    console.error('%s %o', 'Uncaught (in event listener)', err);
  }
}

/**
 * @function getStateBase
 * @param {Router} state - State to find the base of.
 * @returns {Elem} State base.
 */
function getStateBase(state) {
  return state === Router ? router : _find('[' + stateAttrName + '="' + state.stateName + '"]');
}

/**
 * @function isInstanceOfRouterState
 * @param {Router} state - State to find out if it extends Router.
 * @returns {Boolean} If the state extends Router.
 */
function isInstanceOfRouterState(state) {
  return isPrototypeOf.call(Router, state) || isPrototypeOf.call(MainState, state.prototype);
}

/**
 * @function resolveParameter
 * @private
 * @param {String} param - Param to resolve.
 * @param {String} nameErrorName - Name error description.
 * @param {String} valueErrorName - Name error description.
 * @returns {{ name: String, regexp: RegExp|undefined }}
 */
function resolveParameter(param, nameErrorName, valueErrorName) {
  var nameMatch = param.match(/^[a-z_\$]+/i);

  if (!nameMatch) {
    throw new Error(nameErrorName);
  }

  var name = nameMatch[0];
  var value = param.slice(name.length);
  var regexp = void 0;

  if (value && (value.indexOf('(') || value.indexOf(')') !== value.length - 1)) {
    throw new Error(valueErrorName);
  }

  if (value) {
    regexp = new RegExp(value.slice(1, -1));
  }

  return {
    name: name,
    regexp: regexp
  };
}

/**
 * @function findStatesByURL
 * @private
 * @returns {Arr} Arr of matching states.
 */
function findStatesByURL() {
  var pathname = location.pathname || '/';
  var search = location.search || '';
  var eventualStates = states.object(function (states, state) {
    if (state.abstract) {
      return;
    }

    var stateURL = state.url;
    var validatePath = state.validatePath;
    var params = state.params;
    var requiredQuery = state.query;
    var decodeParams = state.decodeParams;
    var decodeQuery = state.decodeQuery;

    var query = new Super(resolveURL(decodeQuery).query);
    var eventualParams = {};
    var match = ((pathname.replace(/\/$/, '') || '/') + (isRegExp(stateURL) ? search : '')).match(validatePath);

    if (!match) {
      return false;
    }

    /* eslint guard-for-in: 0 */
    for (var param in requiredQuery) {
      if (!query.hasOwn(param) || !requiredQuery[param].test(query.$[param])) {
        return;
      }
    }

    match.shift();

    for (var _param in params) {
      eventualParams[_param] = decode(match[params[_param]], decodeParams);
    }

    states.push({
      state: state,
      params: eventualParams,
      query: query.$
    });
  }, new Arr([]));

  if (eventualStates.every(function (_ref6) {
    var state = _ref6.state;
    return state !== defaultState;
  })) {
    eventualStates.push({
      state: defaultState,
      params: {},
      query: resolveURL(defaultState.decodeQuery).query
    });
  }

  return eventualStates;
}

/**
 * @function dispatchEvent
 * @private
 * @param {String} event - Event to be fired.
 * @param {Object} [assigned] - Properties to be assigned to the event.
 * @param {Router} [renderingState] - Current state.
 */
function dispatchEvent(event, assigned, renderingState) {
  var eventualEvent = new Super({}).value({
    type: event
  }).value(assigned || {}).$;
  var type = eventualEvent.type;
  var state = eventualEvent.state;

  var isStoppable = stoppable.indexOfStrict(type) !== -1 && state && (new Super(state).proto().$.constructor !== defaultState || type !== 'beforeLoad');

  var paused = void 0;
  var stopped = void 0;
  var continuePropagation = function continuePropagation() {};
  var stopPropagation = function stopPropagation() {};
  var redirect = function redirect() {};
  var promise = Promise$1.resolve();
  var currentState = void 0;

  new Super(eventualEvent).get('renderingState', function () {
    return currentState;
  }).value({
    continue: function _continue() {
      if (isStoppable) {
        paused = false;
        continuePropagation();
      }
    },
    pause: function pause() {
      if (isStoppable) {
        paused = true;
      }
    },
    stop: function stop() {
      if (isStoppable) {
        stopped = true;
        stopPropagation();
      }
    },
    go: function go(url) {
      if (isStoppable && type === 'beforeLoad') {
        redirect(url, true);
      }
    },
    redirectTo: function redirectTo(url) {
      if (isStoppable && type === 'beforeLoad') {
        redirect(url);
      }
    }
  });

  getListeners(state, type, renderingState).forEach(function (_ref7) {
    var renderingState = _ref7.renderingState;
    var listener = _ref7.listener;

    promise = promise.then(function () {
      return new Promise$1(function (resolve, reject) {
        currentState = renderingState;

        var finished = false;

        continuePropagation = function continuePropagation() {
          if (finished) {
            resolve();
          }
        };

        redirect = function redirect(url, push) {
          var err = new RouterError();

          err.type = 'redirect';
          err.push = push;
          err.url = url;

          reject(err);
        };

        stopPropagation = function stopPropagation() {
          reject(stopError);
        };

        listener(eventualEvent);

        finished = true;

        if (stopped) {
          return reject(stopError);
        }

        if (!paused) {
          resolve();
        }
      });
    });
  });

  return promise.catch(function (err) {
    if (isStoppable) {
      throw err;
    }

    printError(err);
  });
}

/**
 * @function getListeners
 * @private
 * @param {Router} state - State to get listeners from.
 * @param {String} type - Event type.
 * @param {Router} [renderingState] - If the type is "render" then it's current rendering state.
 */
function getListeners() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Super(MainState).create().$;
  var type = arguments[1];
  var renderingState = arguments[2];

  var tree = new Arr([]);
  var desc = /leave/i.test(type);
  var method$$1 = desc ? 'push' : 'unshift';
  var listenerName = 'on' + new Str(type).capitalizeFirst();
  var proto = new Super(state).proto().$.constructor;

  while (proto) {
    if (!renderingState || isPrototypeOf.call(proto, renderingState) || renderingState === proto) {
      tree[method$$1](proto);
    }

    proto = proto.parent;
  }

  return tree.object(function (listeners, _ref8) {
    var ownListeners = _ref8.$$.listeners;
    var proto = _ref8.prototype;

    if (new Super(proto).hasOwn(listenerName)) {
      listeners.push({
        renderingState: renderingState,
        listener: new Func(proto[listenerName]).bindContext(state)
      });
    }

    listeners.push.apply(listeners, (ownListeners[type] || new Arr([])).map(function (listener) {
      return {
        renderingState: renderingState,
        listener: listener
      };
    }).$);
  }, new Arr([]));
}

/**
 * @function initialize
 * @private
 */
function initialize() {
  if (!initialized || routerLoaded) {
    return;
  }

  routerLoaded = true;
  pageTitle = _find('#dwayne-router-title').first();
  pageIcon = _find('#dwayne-router-icon').first();
  router = _find('#dwayne-router').first();
  initHTML = router.html() || '';
  initTitle = pageTitle.text() || '';
  initIcon = pageIcon.ref() || '';

  _find('[' + stateAttrName + ']').hide();

  defineProperties(MainState, {
    base: router
  });

  win.on('click', function (e) {
    var target = new Elem(e.target);

    if (target.name === 'a' && target.attr('target') !== '_blank') {
      e.preventDefault();

      redirect(target.attr('href') || '', true);
    }
  });

  states.forEach(function (state) {
    var _state$parent = state.parent;
    var children = _state$parent.children;
    var parentParams = _state$parent.params;
    var parentQuery = _state$parent.query;
    var parentTemplateParams = _state$parent.templateParams;
    var params = state.params;
    var query = state.query;
    var templateParams = state.templateParams;
    var relativeURL = state.relativeURL;
    var relativePath = state.relativePath;

    var proto = state;
    var count = 0;
    var newPath = relativePath;
    var newURL = '';

    while (proto = proto.parent) {
      count += new Super(proto.params).count;
      newPath = proto.relativePath + newPath;
      newURL = proto.relativeURL + newURL;
    }

    newPath = new RegExp('^' + (newPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/') + '$');
    newURL = isRegExp(relativeURL) ? newPath : (newURL + relativeURL).replace(/\/+/g, '/').replace(/\/$/, '') || '/';

    children.push(state);

    new Super(templateParams).proto(parentTemplateParams);
    new Super(query).proto(parentQuery);
    new Super(params).proto(parentParams).forEach(function (value, key, params) {
      params[key] += count;
    });

    defineProperties(state, {
      url: newURL,
      validatePath: newPath
    });
  });

  eventPromise = eventPromise.then(function () {
    return dispatchEvent('init');
  }).then(function () {
    return beforeLoad();
  }).then(function () {
    win.on('popstate', function () {
      if (location.href !== href) {
        pushed = true;
      }

      if (pushed) {
        eventPromise = eventPromise.then(function () {
          return beforeLoad();
        });
      }
    });
  });
}

/**
 * @function go
 * @public
 * @fires Router#event:beforeLeave
 * @param {String} url - URL to go to.
 * @returns {void}
 * @description Function for directing to an URL. Can be external one or inner one.
 *
 * @example
 * go('/user/56');
 */
function _go(url) {
  redirect(url, true);
}

/**
 * @function redirectTo
 * @public
 * @fires Router#event:beforeLeave
 * @param {String} url - URL to go to.
 * @returns {void}
 * @description Function for redirecting to an URL. Can be external one or inner one.
 *
 * @example
 * redirectTo('/user/56');
 */
function redirectTo(url) {
  redirect(url);
}

/**
 * @function reload
 * @public
 * @fires Router#event:beforeLeave
 * @returns {void}
 * @description Fires {@link Router#event:beforeLeave}, {@link Router#event:leave}
 * as usual, then resets router content, page title and icon to initial content,
 * fires {@link Router#event:reload} and then loads page like if it was the first time.
 */
function reload() {
  eventPromise = eventPromise.then(function () {
    return beforeLeave(location.href);
  }).then(function () {
    router.html(initHTML);
    pageTitle.text(initTitle);
    pageIcon.ref(initIcon);
  }).then(function () {
    currentState = Router.$$.state = null;
  }).then(function () {
    return dispatchEvent('reload');
  }).then(beforeLoad).catch(printError);
}

/**
 * @function registerState
 * @public
 * @param {Router} state - State to register.
 * @returns {void}
 * @description Function for registering states.
 *
 * @example
 * class MyState extends Router {
 *   static stateName = 'myState';
 *   static path = '/user/:userId';
 * }
 *
 * registerState(MyState);
 */
function registerState(state) {
  if (states.indexOf(state) !== -1) {
    return;
  }

  if (!isInstanceOfRouterState(state)) {
    throw new Error('State must extend (' + extendLink + ') Router! (at registerState)');
  }

  var stateName = state.stateName;


  if (!new Super(state).hasOwn('stateName') || states.find(function (_ref9) {
    var n = _ref9.stateName;
    return n === stateName;
  })) {
    throw new Error('State must have unique stateName! (at registerState)');
  }

  var proto = Object.getPrototypeOf(state);

  if (isRegExp(proto.url)) {
    throw new Error('URL regexp state cannot be extended! (at registerState)');
  }

  var $state = new Super(state);
  var path = $state.hasOwn('path') ? state.path : '/';

  var _pathSwitcher = pathSwitcher(path);

  var relativeURL = _pathSwitcher.url;
  var relativePath = _pathSwitcher.path;
  var params = _pathSwitcher.params;

  var elems = new Super({});

  if ($state.hasOwn('elements')) {
    var elements = state.elements;


    new Super(elements).deepForEach(function (value, key, object, tree) {
      tree = new Arr(tree);

      tree.reverse().shift();

      var selectors = tree.map(function (_ref10) {
        var value = _ref10.value;
        return String(value.$ || value || '');
      });

      if (key === '$' || /\$on[\s\S]/.test(key)) {
        var name = tree.$[tree.length - 2].key;
        var elem = elems.$[name] = elems.$[name] || {
          listeners: new Super({})
        };

        if (key === '$') {
          selectors.pop();

          elem.selector = selectors.join(' ');
        } else {
          elem.listeners.$[key.replace(/^\$on[\s\S]/, function (match) {
            return match[3] || '';
          }).toLowerCase()] = value;
        }

        return;
      }

      elems.$[key] = {
        selector: selectors.join(' '),
        listeners: new Super({})
      };
    });
  }

  defineProperties(state, {
    $$: {
      listeners: {}
    },

    stateName: stateName,
    path: path,
    parent: proto,
    children: new Arr([]),
    template: $state.hasOwn('template') ? state.template : '',
    relativeURL: relativeURL,
    relativePath: relativePath,
    params: params,
    abstract: $state.hasOwn('abstract') && !!state.abstract,
    templateParams: $state.hasOwn('templateParams') ? state.templateParams : {},
    elems: elems,
    query: {}
  });

  var query = state.query;

  var index = isString(path) ? path.indexOf('?') : -1;

  if (index !== -1) {
    new Str(path).replace(/&$/).slice(index + 1).split('&').forEach(function (param) {
      var _resolveParameter2 = resolveParameter(param, 'Query parameter must not be an empty string or contain characters besides "a-zA-Z_$"! (at registerState)', 'Query parameter regexp validator must be within parentheses (e.g. :userId(\\d+)) and not contain them! (at registerState)');

      var name = _resolveParameter2.name;
      var _resolveParameter2$re = _resolveParameter2.regexp;
      var regexp = _resolveParameter2$re === undefined ? /[\s\S]*/ : _resolveParameter2$re;


      query[name] = new RegExp('^' + regexp.source.replace(/\\\//g, '/') + '$');
    });
  }

  states.push(state);
}



var statics = Object.freeze({
	D: D$2,
	isArray: isArray,
	isArrayLike: isArrayLike,
	isBoolean: isBoolean,
	isDate: isDate,
	isDateLike: isDateLike,
	isElement: isElement,
	isFinite: isFinite,
	isFunction: isFunction,
	isInteger: isInteger,
	isIntegerLike: isIntegerLike,
	isNaN: isNaN,
	isNull: isNull,
	isNullOrUndefined: isNullOrUndefined,
	isNumber: isNumber,
	isNumberLike: isNumberLike,
	isObject: isObject,
	isPlainObject: isPlainObject,
	isPrimitive: isPrimitive,
	isRegExp: isRegExp,
	isString: isString,
	isSymbol: isSymbol,
	isUndefined: isUndefined,
	Alphabet: Alphabet,
	alphabet: alphabet,
	Arr: Arr,
	array: array,
	iterate: iterate$1,
	BlobObject: BlobObject,
	blob: blob$1,
	Dat: Dat,
	now: now,
	date: date,
	find: _find,
	Elem: Elem,
	win: win,
	doc: doc,
	html: html,
	body: body,
	head: head$1,
	parseHTML: parseHTML,
	px: px,
	Fetch: Fetch,
	fetch: fetch,
	Func: Func,
	method: method,
	noop: noop,
	prop: prop$1,
	self: self$1,
	Num: Num,
	rand: rand,
	random: random,
	Promise: Promise$1,
	go: _go,
	Router: Router,
	redirectTo: redirectTo,
	reload: reload,
	registerState: registerState,
	get currentState () { return currentState; },
	Str: Str,
	parseJSON: parseJSON,
	Super: Super,
	Switcher: Switcher,
	switcher: switcher,
	when: when
});

var D$$1 = D$2;


assign$1(D$$1, statics);

delete D$$1.default;
delete D$$1.D;

export { D$2 as D, isArray, isArrayLike, isBoolean, isDate, isDateLike, isElement, isFinite, isFunction, isInteger, isIntegerLike, isNaN, isNull, isNullOrUndefined, isNumber, isNumberLike, isObject, isPlainObject, isPrimitive, isRegExp, isString, isSymbol, isUndefined, Alphabet, alphabet, Arr, array, iterate$1 as iterate, BlobObject, blob$1 as blob, Dat, now, date, _find as find, Elem, win, doc, html, body, head$1 as head, parseHTML, px, Fetch, fetch, Func, method, noop, prop$1 as prop, self$1 as self, Num, rand, random, Promise$1 as Promise, _go as go, Router, redirectTo, reload, registerState, currentState, Str, parseJSON, Super, Switcher, switcher, when };export default D$$1;
