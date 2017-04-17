import {
  isArray, isString,
  iterateArray, iterateObject
} from '../utils';
import { Mixin } from '../Mixin';
import { rootMixins } from '../constants';

const EMPTY_SPACE_REGEX = /\s+/;

rootMixins['d-class'] = class DClass extends Mixin {
  classes = [];

  afterUpdate(newValue) {
    const {
      elem,
      args,
      classes
    } = this;
    const newClasses = [];

    if (args) {
      newValue = newValue
        ? args
        : [];
    }

    if (isString(newValue)) {
      newValue = newValue.split(EMPTY_SPACE_REGEX);
    }

    if (isArray(newValue)) {
      iterateArray(classes, (cls) => {
        if (newValue.indexOf(cls) === -1) {
          elem.removeClass(cls);
        }
      });
      iterateArray(newValue, (cls) => {
        if (isString(cls)) {
          newClasses.push(cls);
          elem.addClass(cls);
        }
      });
    } else {
      iterateArray(classes, (cls) => {
        if (!newValue || !newValue[cls]) {
          elem.removeClass(cls);
        }
      });
      iterateObject(newValue, (val, cls) => {
        if (val) {
          newClasses.push(cls);
          elem.addClass(cls);
        }
      });
    }

    this.classes = newClasses;
  }

  beforeRemove() {
    const {
      elem,
      classes
    } = this;

    elem.removeClass.apply(elem, classes);
  }
};
