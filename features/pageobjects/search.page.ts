import Page from './page';
import { ChainablePromiseElement } from "webdriverio";

/**
 * sub page containing specific selectors and methods for a search page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch() { return $('#search_form_input_homepage') }
    get settingsMenu() { return $('a.header__button--menu.js-side-menu-open') }
    get menuAllSettings() { return $('//a[contains(text(), "All Settings")]') }
    get header(){ return $('div.cw--c') }
    get submitSearch() { return $('//input[@id="search_button_homepage"]') }
    get menuThemes() { return $('li.nav-menu__item.clear > a') }    
    get terminalStyle() { return $("(//label[normalize-space()='Terminal'])[1]") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async search(search: string) {
         await (await this.inputSearch).setValue(search)
         await (await this.submitSearch).waitForClickable()
         await (await this.submitSearch).click()
    }

    async clickThemes() {
         await (await this.menuThemes).waitForClickable({ timeout: 4000 })
         await (await this.menuThemes).click
    }

    async clickSettingsMenu() {
        await (await this.settingsMenu).waitForClickable({ timeout: 7000 })
        await (await this.settingsMenu).click
    }

    async getBackgroundColor() {
        return await(await (await (await (await this.header).getCSSProperty('color'))).parsed).hex
    }

    async getTerminalButton() {
        await (await this.terminalStyle).waitForDisplayed
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

export default new SearchPage();
