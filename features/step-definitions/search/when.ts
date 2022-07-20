import { When } from "@wdio/cucumber-framework";
import SearchPage from '../../pageobjects/search.page';


When(/^I search for (.*)$/, async(searchText: string) => {
    await SearchPage.search(searchText)
});

//TO-DO: Research to interact native
When(/^I click on settings and modify background (.*)$/, async(backgroundType: string) => {
    await browser.executeScript('return document.readyState', []) === 'complete';
    await SearchPage.open
    await SearchPage.clickSettingsMenu
    await SearchPage.clickThemes
    await browser.execute("document.querySelector('a.header__button--menu.js-side-menu-open').click();")
    await browser.execute("document.querySelector('li.nav-menu__item.clear > a').click();")
    await (await SearchPage.getTerminalButton)
    await browser.execute("document.getElementById('setting_kae_t').click();")
    await browser.execute("document.querySelector('a.btn.btn--primary').click();")
})
