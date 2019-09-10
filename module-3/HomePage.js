'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor() {
        super('EPAM Home Page', 'https://www.epam.com', { css: 'body' });
        this.addChildren(new Element('LogoLink', { css: '.header__logo-container' }));

        let navList = new Element('Top navigation', { css: '.top-navigation__row' });
        navList.addChildren(new Element('What we do', { css: '.top-navigation__item a[href="/what-we-do"]' }));
        navList.addChildren(new Element('How we do it', { css: '.top-navigation__item a[href="/how-we-do-it"]' }));
        navList.addChildren(new Element('Our work', { css: '.top-navigation__item a[href="/our-work"]' }));
        navList.addChildren(new Element('Insights', { css: '.top-navigation__item a[href="/insights"]' }));
        navList.addChildren(new Element('About', { css: '.top-navigation__item a[href="/about"]' }));
        navList.addChildren(new Element('Careers', { css: '.top-navigation__item a[href="/careers"]' }));
        this.addChildren(navList);

        this.content = new Element('Content', { css: '.content-container' });
        // video
        let video = new Element('Widget1', { css: '.background-video' });
        video.addChildren(new Element('Title', { css: '.title-slider__slide-row' }));
        this.content.addChildren(video);
        // title 2
        this.content.addChildren(new Element('Widget2', { css: '.section:nth-child(2) > section' }));
        // featured content
        let widget3 = new Element('Widget3', { css: '.section:nth-child(3) > section' });
        widget3.addChildren(new Element('Rollover Titles', { css: '.rollover-tiles' }));
        widget3.addChildren(new Element('Whats new', { css: '.featured-content-grid--epam li:nth-child(1) a' }));
        widget3.addChildren(new Element('Press release', { css: '.featured-content-grid--epam li:nth-child(2) a' }));
        widget3.addChildren(new Element('Service offering', { css: '.featured-content-grid--epam li:nth-child(3) a' }));
        widget3.addChildren(new Element('In the news', { css: '.featured-content-grid--epam li:nth-child(4) a' }));
        widget3.addChildren(new Element('Blog', { css: '.featured-content-grid--epam li:nth-child(5) a' }));
        widget3.addChildren(new Element('Customer story', { css: '.featured-content-grid--epam li:nth-child(6) a' }));
        widget3.addChildren(new Element('Blog 2', { css: '.featured-content-grid--epam li:nth-child(7) a' }));
        widget3.addChildren(new Element('Interview', { css: '.featured-content-grid--epam li:nth-child(8) a' }));
        widget3.addChildren(new Element('Event', { css: '.featured-content-grid--epam li:nth-child(9) a' }));
        widget3.addChildren(new Element('Accelerator', { css: '.featured-content-grid--epam li:nth-child(10) a' }));
        widget3.addChildren(new Element('Customer story 2', { css: '.featured-content-grid--epam li:nth-child(11) a' }));
        widget3.addChildren(new Element('Podcast', { css: '.featured-content-grid--epam li:nth-child(12) a' }));
        this.content.addChildren(widget3);
        // our results
        this.content.addChildren(new Element('Widget4', { css: '.section:nth-child(4) > section' }));
        // join our team
        this.content.addChildren(new Element('Widget5', { css: '.section:nth-child(6) > section' }));
        // help
        this.content.addChildren(new Element('Widget6', { css: '.section:nth-child(8) > section' }));
        // offices
        this.content.addChildren(new Element('Widget7', { css: '.section:nth-child(10) > section' }));
        this.addChildren(this.content);

        this.addChildren(new Element('Footer', { css: '.footer-container' }))
    }

    getContentElement() {
        return this.content;
    }
}

module.exports = HomePage; 
