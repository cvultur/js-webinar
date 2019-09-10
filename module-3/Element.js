'use strict';

class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children[child.name]) {
            throw new Error('The child has been already added: ' + child.name);
        }
        this.children[child.name] = child;
        child.setParent(this);
    }

    get(name) {
        // let elementFound = null;
        if (!name) {
            return element(this.locator);
        }
        if (this.children[name]) {
            return this.children[name].get();
        } else {
            this.children.children
            let childs = Object.values(this.children);

            for (let el of childs) {
                try {
                    return el.get(name);
                } catch (e) {
                    // ignore, if no element found throw error at the end
                }
            }
        }
        throw new Error('The child was not found: ' + name);
    }

}
module.exports = Element;