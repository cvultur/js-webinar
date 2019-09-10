'use strict';

const Element = require('./Element');

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.children = null;
    }

    // can have a parent - defined in parent class - .setParent(Element)

    // cannot have children
    addChildren() {
        throw new Error('Cannot have children elements');
    }

    // retrieve all protractor elements in collection by locator, in it's context
    // element.all(locator)
    // ElementArrayFinder.prototype.all
    all() {
        return element.all(this.locator);
    }

    // retrieve one protractor element from the collection by locator, in it's context
    get(n) {
        return element.all(this.locator).get(n);
    }
}

module.exports = Elements;