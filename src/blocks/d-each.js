import {
  iterateArray, iterateObject,
  isArray, isFunction
} from '../utils';
import { remove, createBlock } from '../helpers/Block';
import { Block } from '../Block';
import { rootBlocks } from '../constants';
import { DItem } from './d-item';

const watchArgs = js`[
  args.set,
  args.filterBy,
  args.sortBy
]`;

rootBlocks['d-each'] = class DEach extends Block {
  static defaultArgs = {
    uid(item, index) {
      return index;
    }
  };

  constructor(opts) {
    super(opts);

    const {
      args: {
        item = '$item',
        index = '$index'
      }
    } = this;

    this.itemName = item;
    this.indexName = index;
    this.itemsByUIDs = {};
  }

  afterConstruct() {
    this.renderSet(this.evaluate(watchArgs, this.renderSet));
  }

  renderSet = (args) => {
    let set = args[0];
    let filterBy = args[1];
    const sortBy = args[2];

    const {
      htmlChildren,
      parentScope,
      parentElem,
      parentTemplate
    } = this.$$;
    const {
      args: {
        uid: UID
      },
      itemsByUIDs,
      itemName,
      indexName
    } = this;
    const newItemsByUIDs = {};
    const newUIDsByIndexes = {};
    const newUIDs = {};
    const isArr = isArray(set);
    const iterate = isArr
      ? iterateArray
      : iterateObject;

    if (isArr && isFunction(sortBy)) {
      set = set
        .slice()
        .sort(sortBy);
    }

    if (isFunction(filterBy)) {
      filterBy = [filterBy];
    }

    if (isArray(filterBy)) {
      iterateArray(filterBy, (filter) => {
        set = set.filter(filter);
      });
    }

    iterate(set, (item, index) => {
      const uid = UID(item, index, set, parentScope);

      if (uid in newUIDsByIndexes) {
        console.error(`UIDs can't be same for multiple items! In UID function: "${ UID.original || UID }"`);
      }

      newUIDsByIndexes[uid] = index;
      newUIDs[index] = uid;
    });

    iterateObject(itemsByUIDs, (block, uid) => {
      if (!(uid in newUIDsByIndexes)) {
        remove(block);
      }
    });

    let prevBlock;

    iterate(set, (item, index) => {
      const uid = newUIDs[index];
      let block;

      if (newUIDsByIndexes[uid] !== index) {
        return;
      }

      const prevUIDBlock = itemsByUIDs[uid];

      if (prevUIDBlock) {
        block = prevUIDBlock;
        block.$$.scope[indexName] = index;
        block.$$.scope[itemName] = item;

        if (block.$$.prevBlock !== prevBlock) {
          const { content } = block.$$;

          if (prevBlock) {
            prevBlock.$$.insertAfterIt(content, true);
          } else {
            this.$$.insertInStartOfIt(content, true);
          }
        }
      } else {
        block = createBlock({
          node: {
            itemName,
            indexName,
            item,
            index,
            name: '#d-item',
            Constructor: DItem,
            children: htmlChildren
          },
          parent: this,
          parentElem,
          parentBlock: this,
          parentScope,
          parentTemplate,
          prevBlock
        });
      }

      newItemsByUIDs[uid] = block;
      block.$$.prevBlock = prevBlock;
      prevBlock = block;
    });

    this.itemsByUIDs = newItemsByUIDs;
  };
};