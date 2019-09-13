'use strict';

const TIMEOUT = 30000; 

class CareersPage {
    constructor() {
        this.elements = {
            "video" : element(by.css('.background-video-ui')),
            "searchForm" : element(by.css('.job-search__form')),
            "locationFilterBox" : element(by.css('.recruiting-search__location span[role="textbox"]'))
        }
    }

    load() {
        return browser.get('https://www.epam.com/careers');
    }

    hasLoaded() {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.elements.video),  TIMEOUT);
    }

    selectCountryAndCity(country,  city) {
        const locationCountry = element(by.css(`li[aria-label="${country}"]`)); 
        locationCountry.click();
          
        const locationCity = element(by.css(`li[id*="${city}"]`)); 
        return locationCity.click();
    }

    selectSkill(skill) {
        const department = element(by.css(`input[data-value*="${department}"]+span`));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(department), TIMEOUT, 'Element not clickable')  
        return department.click();
    }
}

module.exports = CareersPage;