import Classes from '../../classes';
import constructors from '../../constructors';
import css from './css';
import elements from './elements';
import { default as parent, transform } from '../Object';
import Arr from '../Array';
import Num from '../Number';
import HtmlCollection from '../HtmlCollection';
import {
	isArrayAlike, isFunction, isNumber, isString,
	assign, dynamicDefineProperties, defineProperties,
	validate, toString, toCamelCase
} from '../../libs';
import applyRegexps from './applied';

const Obj = parent;

export class HtmlElement extends parent {
	constructor(elem) {
		super(elem);

		if (this.$) {
			this.$.domcData = {};
		}
	}

	absolute() {
		this.$.style.position = 'absolute';

		return this;
	}
	addClasses() {
		const list = this.$.classList;

		list.add.apply(list, arguments);

		return this;
	}
	addHtml(html) {
		this.$.innerHTML += html;

		return this;
	}
	addText(text) {
		new HtmlElement(document.createTextNode(text)).into(this);

		return this;
	}
	apply() {
		for (let i = 0, length = arguments.length; i < length; i++) {
			if (!arguments[i]) {
				continue;
			}

			const split = String(arguments[i]).split(/(\s+)/),
				len = split.length;

			let applied;

			top: for (let k = 0; k < len; k++) {
				const string = split[k];

				let cas;

				if (!applied) {
					if (/^\s+$/.test(string)) {
						continue;
					}

					for (let m = 0, l = applyRegexps.length; m < l; m++) {
						cas = applyRegexps[m];

						if (cas.test && cas.test.test(string)) {
							applied = { text: '', cas };
							break;
						} else if (!cas.test && cas.regexp.test(string)) {
							cas.match(this, string);
							continue top;
						}
					}
				}

				if (!applied) {
					this.attr(string, '');
					continue;
				}

				const text = applied.text = applied.text + string;

				cas = applied.cas;

				if (cas.regexp.test(text)) {
					cas.match(this, text);
					applied = null;
				}
			}
		}

		return this;
	}
	attr(attr, value) {
		const elem = this.$;

		if (!arguments.length) {
			const attrs = elem.attributes,
				length = attrs.length,
				o = {};

			for (let i = 0; i < length; i++) {
				attr = attrs[i];

				o[attr.name] = attr.value;
			}

			return new Obj(o);
		}

		if (arguments.length <= 1 && isString(attr)) {
			return elem.getAttribute(attr);
		}

		if (arguments.length >= 2) {
			attr = { [attr]: value };
		}

		attr = transform(attr);

		for (const key in attr) {
			if (attr.hasOwnProperty(key)) {
				elem.setAttribute(key, attr[key]);
			}
		}

		return this;
	}
	block() {
		this.$.style.display = 'block';

		return this;
	}
	blur() {
		this.$.blur();
		return this;
	}
	bold() {
		this.$.style.fontWeight = 'bold';

		return this;
	}
	centerText() {
		this.$.style.textAlign = 'center';

		return this;
	}
	child(element) {
		return new HtmlElement(find(element)).into(this);
	}
	children() {
		return new HtmlCollection(this.$.childNodes);
	}
	'class'(cls) {
		const elem = this.$;

		if (!arguments.length) {
			return new Arr(elem.className.split(' '));
		}

		elem.className = cls;

		return this;
	}
	click() {
		this.$.click();
		return this;
	}
	get clientHeight() {
		return this.$.clientHeight;
	}
	get clientLeft() {
		return this.$.clientLeft;
	}
	get clientTop() {
		return this.$.clientTop;
	}
	get clientWidth() {
		return this.$.clientWidth;
	}
	clone() {
		const elem = this.$;

		return new this.constructor(elem.cloneNode(false));
	}
	contains(element) {
		element = find(element);

		return this.$.contains(element);
	}
	create(type, strings) {
		const elem = this.$;
		const element = htmlElement(document.createElement(type));

		if (elem !== document) {
			element.into(this);
		}

		return element.apply.apply(element, Array.prototype.slice.call(arguments, 1));
	}
	css(property, value) {
		const elem = this.$;

		if (!arguments.length) {
			const css = this.$.style.cssText.split(/; ?/);
			const length = css.length;
			const o = {};

			for (let i = 0; i < length; i++) {
				if (!css[i]) {
					continue;
				}

				property = css[i].split(/: /);

				o[toCamelCase(property[0])] = property[1];
			}

			return new Obj(o);
		}

		if (arguments.length <= 1 && isString(property)) {
			return elem.style[property];
		}

		if (arguments.length >= 2) {
			property = { [property]: value };
		}

		property = transform(property);

		assign(elem.style, property);

		return this;
	}
	dataset() {
		return new Obj(this.$.dataset);
	}
	deepClone() {
		const elem = this.$;

		return new this.constructor(elem.cloneNode(true));
	}
	defaultValue(value) {
		const elem = this.$;

		if (arguments.length) {
			elem.defaultValue = value;
			return this;
		}

		return elem.defaultValue;
	}
	disabled(cond = true) {
		if (cond) {
			return this.attr('disabled', '');
		}

		return this.removeAttr('disabled');
	}
	draggable(cond = true) {
		this.$.draggable = Boolean(cond);

		return this;
	}
	editable(cond = true) {
		if (cond) {
			return this.attr('contentEditable', '');
		}

		return this.removeAttr('contentEditable');
	}
	find(selector) {
		return htmlElement(this.$.querySelector(selector));
	}
	findAll(selector) {
		return new HtmlCollection(this.$.querySelectorAll(selector));
	}
	firstChild() {
		return htmlElement(this.$.firstElementChild);
	}
	fixed() {
		this.$.style.position = 'fixed';

		return this;
	}
	focus() {
		this.$.focus();
		return this;
	}
	hasAttr(attr) {
		return this.$.hasAttribute(attr);
	}
	hasClass(css) {
		return this.$.classList.contains(css);
	}
	hide() {
		const elem = this.$;

		elem.domcData.previousDisplay = elem.style.display;
		elem.style.display = 'none';
		return this;
	}
	html(html) {
		const elem = this.$;

		if (arguments.length) {
			elem.innerHTML = html;
			return this;
		}

		return elem.innerHTML;
	}
	id(id) {
		const elem = this.$;

		if (arguments.length) {
			elem.id = id;
			return this;
		}

		return elem.id;
	}
	// TODO: .insertAfter()
	// TODO: .insertBefore()
	inline() {
		this.$.style.display = 'inline';

		return this;
	}
	inlineBlock() {
		this.$.style.display = 'inline-block';

		return this;
	}
	into(element) {
		find(element).appendChild(this.$);

		return this;
	}
	italic() {
		this.$.style.fontStyle = 'italic';

		return this;
	}
	lastChild() {
		return htmlElement(this.$.lastElementChild);
	}
	lineThrough() {
		this.$.style.textDecorationLine = 'line-through';

		return this;
	}
	matches(selector) {
		return this.$.matches(selector);
	}
	moveAttr(attr, value = '') {
		const prev = attrs[attr];

		if (prev) {
			if (arguments.length < 2) {
				value = prev.attr(attr);
			}

			prev.removeAttr(attr);
		}

		this.attr(attr, value);
		attrs[attr] = this;

		return this;
	}
	moveClass(cls) {
		const elem = this.$,
			prev = classes[cls];

		if (prev) {
			prev.classList.remove(cls);
		}

		elem.classList.add(cls);
		classes[cls] = elem;

		return this;
	}
	get name() {
		return (this.$.tagName || '').toLowerCase();
	}
	next() {
		return htmlElement(this.$.nextElementSibling);
	}
	get offsetHeight() {
		return this.$.offsetHeight;
	}
	get offsetLeft() {
		return this.$.offsetLeft;
	}
	get offsetTop() {
		return this.$.offsetTop;
	}
	get offsetWidth() {
		return this.$.offsetWidth;
	}
	get outerHtml() {
		return this.$.outerHTML;
	}
	overline() {
		this.$.style.textDecorationLine = 'overline';

		return this;
	}
	parent() {
		return htmlElement(this.$.parentNode);
	}
	parentTree() {
		const collection = [];
		let elem = this.$.parentNode;

		while (elem) {
			collection.push(elem);
			elem = elem.parentNode;
		}

		return new HtmlCollection(collection);
	}
	pointer() {
		this.$.style.cursor = 'pointer';

		return this;
	}
	prev() {
		return htmlElement(this.$.previousElementSibling);
	}
	// TODO: .putAfter()
	// TODO: .putBefore()
	ref(ref) {
		let attr;

		switch (this.name) {
			case 'img':
			case 'script':
			case 'iframe':
			case 'audio':
			case 'video':
				attr = 'src';
				break;
			case 'form':
				attr = 'action';
				break;
			default:
				attr = 'href';
		}

		if (arguments.length) {
			this.attr(attr, ref);

			return this;
		}

		return this.attr(attr);
	}
	relative() {
		this.$.style.position = 'relative';

		return this;
	}
	remove() {
		this.$.remove();

		return this;
	}
	removeAttr() {
		for (let i = 0, length = arguments.length; i < length; i++) {
			this.$.removeAttribute(arguments[i]);
		}

		return this;
	}
	removeClasses() {
		const list = this.$.classList;

		list.remove.apply(list, arguments);

		return this;
	}
	removeCss() {
		const elem = this.$,
			length = arguments.length;

		for (let i = 0; i < length; i++) {
			elem.style[arguments[i]] = '';
		}

		return this;
	}
	replace(element) {
		const elem = this.$;

		element = find(transform(element));
		elem.parentNode.replaceChild(elem, element);

		return this;
	}
	get scrollHeight() {
		return this.$.scrollHeight;
	}
	get scrollLeft() {
		return this.$.scrollLeft;
	}
	get scrollTop() {
		return this.$.scrollTop;
	}
	get scrollWidth() {
		return this.$.scrollWidth;
	}
	setOf(type, iterator, applied) {
		iterator = transform(iterator);

		if (isNumber(iterator)) {
			try {
				validate([null, iterator], { 1: ['int', '>=0'] });
			} catch (e) {
				throw new Error(`
					2nd argument must be either or non-negative integer, or object!
				`);
			}

			iterator = new Num(iterator).array();
		}

		if (arguments.length < 3) {
			throw new Error('No applied expression or map function is present!');
		}

		const elem = this.$;
		const func = isFunction(applied);

		for (const key in iterator) {
			if (iterator.hasOwnProperty(key)) {
				const value = iterator[key];
				const array = isArrayAlike(iterator);
				const created = elem.create(type);

				if (func) {
					applied(created, value, array ? Number(key) : key, iterator);
				} else {
					created.apply(applied.replace(/%key%/g, key).replace(/%value%/g, value));
				}
			}
		}
	}
	show() {
		const elem = this.$;

		if (elem.style.display === 'none') {
			elem.style.display = elem.domcData.previousDisplay || '';
		}

		delete elem.domcData.previousDisplay;

		return this;
	}
	text(text) {
		const elem = this.$;

		if (arguments.length) {
			elem.innerHTML = '';
			new HtmlElement(document.createTextNode(text)).into(this);

			return this;
		}

		if (Object.getOwnPropertyDescriptor(Node.prototype, 'textContent')) {
			return elem.textContent;
		}

		return elem.innerText;
	}
	toggleAttr(attr, condition) {
		const elem = this.$,
			cond = arguments.length < 2 ? !elem.hasAttribute(attr) : condition;

		if (cond) {
			return this.attr(attr, '');
		}

		return this.removeAttr(attr);
	}
	toggleClass() {
		const list = this.$.classList;

		list.toggle.apply(list, arguments);

		return this;
	}
	type(type) {
		const elem = this.$;

		if (arguments.length) {
			elem.type = type;
			return this;
		}

		return elem.type;
	}
	underline() {
		this.$.style.textDecorationLine = 'underline';

		return this;
	}
	up(n = 1) {
		validate([n], [['intAlike', '>=0']]);

		n = Number(n);

		let elem = this.$;

		while (n--) {
			if (!elem) {
				return htmlElement(null);
			}

			elem = elem.parentNode;
		}

		return htmlElement(elem);
	}
	get valid() {
		const elem = this.$;

		return elem.validity ? elem.validity.valid : true;
	}
	value(value) {
		const elem = this.$;

		if (arguments.length) {
			elem.value = value;
			return this;
		}

		return elem.value;
	}
}

dynamicDefineProperties(HtmlElement.prototype, css, (prop) => {
	return function (value) {
		if (arguments.length) {
			this.$.style[prop] = value;
			return this;
		}

		return this.$.style[prop];
	};
});

dynamicDefineProperties(HtmlElement.prototype, elements.filter((elem) => elem !== 'html'), (elem) => {
	return function () {
		Array.prototype.unshift.call(arguments, elem);

		return this.create.apply(this, arguments);
	};
});

defineProperties(HtmlElement.prototype, {
	closest: (() => {
		if (Element.prototype.closest) {
			return function closest(selector) {
				return htmlElement(this.$.closest(selector));
			};
		}

		return function closest(selector) {
			let elem = this.$;

			while (elem) {
				if (elem.matches(selector)) {
					return htmlElement(elem);
				}

				elem = elem.parentNode;
			}

			return htmlElement(null);
		};
	})()
});

const classes = {};
const attrs = {};

export function htmlElement(elem) {
  if (elem instanceof parent) {
    return elem;
  }

	return new HtmlElement(elem);
}

function find(element) {
	element = transform(element);

	if (isString(element)) {
		element = document.querySelector(element);
	}

	return element;
}

Classes.HtmlElement = HtmlElement;
constructors.unshift({
	check: (elem) => /^HTML\w*Element$/.test(toString(elem)),
	cls: HtmlElement
});

export default HtmlElement;