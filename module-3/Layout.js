'use strict';

const Element = require('./Element');

class Layout extends Element {
    constructor(name, url, locator) {
        super(name, locator);
        this.url = url;
    }

    // no parent 
    setParent() {
        throw new Error('Cannot have a parent');
    }

    // can have children - defined in parent class - addChildren(Element)

    // get root protractor element by locator or child element by name 
    // - defined in parent class - .get(name)

    load() {
        return browser.get(this.url);
    }
}

module.exports = Layout;