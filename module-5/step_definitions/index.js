'use strict';
const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const CareersPage = require('../pages/careersPage');
// const JobListingsPage = require('../pages/jobListingsPage');
const careersPage = new CareersPage();
// const jobListingsPage = new JobListingsPage();

setDefaultTimeout(30000);
Given(/^EPAM carrers page is opened$/, function () {
  return careersPage.load();
});

When(/^the careers page has loaded$/, function () {
  return careersPage.hasLoaded();
});

When(/^the "([^"]*)" is visible$/, function (elem) {
  return expect(careersPage.elements[elem].isDisplayed()).to.eventually.be.true;
});

When(/^the "([^"]*)" is clicked$/, function (elem) {
  browser.executeScript("arguments[0].scrollIntoView();", careersPage.elements[elem].getWebElement());
  new Promise(resolve => setTimeout(resolve, 2000));
  return careersPage.elements[elem].click();
});

When(/^(.+) and (.+) is selected in Location filter box$/, function (country, city) {
  return careersPage.selectCountryAndCity(country, city);
});

When(/^(.+) is selected in department filter box$/, function (skill) {
  return careersPage.sele(country, city);
});

Then(/^the (.+) should contain (.+)$/, function (element, text) {
  // Write code here that turns the phrase above into concrete actions
});
