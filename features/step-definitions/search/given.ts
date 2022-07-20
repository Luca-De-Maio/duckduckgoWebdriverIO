import { Given } from '@wdio/cucumber-framework';
import ResultPage from '../../pageobjects/result.page';
import SearchPage from '../../pageobjects/search.page';


const pages = {
    searchPage: SearchPage,
    resultPage: ResultPage
}

Given(/^I am on the (\w+)$/, async (page) => {
    await pages[page].open()
});