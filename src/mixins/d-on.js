import { Mixin } from '../Mixin';
import { rootMixins } from '../constants';

rootMixins['d-on'] = class DOn extends Mixin {
  static evaluate = false;

  constructor(opts) {
    super(opts);

    if (this.args) {
      this.off = this.elem.on(this.args.join(','), () => {
        this.evaluate();
      });
    } else {
      console.error('Provide "d-on" mixin with an event names (like "d-on(click)" or "d-on(keyup, keypress)")!');
    }
  }

  beforeRemove() {
    const { off } = this;

    if (off) {
      off();
    }
  }
};
