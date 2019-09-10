'use strict';

const ElementFinder = require('./mock/ElementFinder');
const Browser = require('./mock/Browser');
const HomePage = require('../HomePage');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });

    afterEach(() => {
        delete global.element;
        delete global.browser;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have correct URL', () => {
        const page = new HomePage();
        const homeUrl = 'https://www.epam.com';
        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal(homeUrl);
        expect(page.load()).not.to.be.undefined;

    });

    it('should have method to retrieve root element', () => {
        const page = new HomePage();
        expect(page.get).not.to.be.undefined;
        const pElement = page.get();
        expect(pElement).to.be.instanceOf(ElementFinder);
        expect(pElement.locator().css).to.equal('body');
    });

    it('should throw error if child element is not found', () => {
        const page = new HomePage();
        expect(() => page.get('NotFound')).to.throw();
    });

    describe('Top Menu', () => {
        it('should have Top navigation', () => {
            const page = new HomePage();
            const navElement = page.get('Top navigation');
            expect(navElement).to.be.instanceOf(ElementFinder);
            expect(navElement.locator().css).to.equal('.top-navigation__row');
        });

        it('should find a Top navigation child', () => {
            const page = new HomePage();
            const subMenu1 = page.get('What we do');
            expect(subMenu1).to.be.instanceOf(ElementFinder);
            expect(subMenu1.locator().css).to.equal('.top-navigation__item a[href="/what-we-do"]');
        });
    });

    describe('Content', () => {
        it('should find Content', () => {
            const page = new HomePage();
            const content = page.get('Content');
            expect(content).to.be.instanceOf(ElementFinder);
            expect(content.locator().css).to.equal('.content-container');
        });

        it('should have 7 childs', () => {
            const page = new HomePage();
            expect((Object.values(page.getContentElement().children)).length).to.equal(7);
        });

        it('should have homepage parent', () => {
            const page = new HomePage();
            const parent = page.getContentElement().parent.locator.css;
            const expected = page.locator.css;
            console.log(parent + ' == ' + expected + ' ?')
            expect(parent).to.equal(expected);
        });

        it('should have same locator when searched in page or element context', () => {
            const page = new HomePage();
            const contentElement = page.getContentElement();
            const video = contentElement.get('Widget1');
            const video2 = page.get('Widget1');
            expect(video.locator().css).to.equal(video2.locator().css);
        });
    });
});