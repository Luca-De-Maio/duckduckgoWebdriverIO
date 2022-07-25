import { When } from "@wdio/cucumber-framework";
import SettingsPage from "../../pageobjects/settings.page";
import SearchPage from '../../pageobjects/search.page';
import { selectDropdown } from "../../../src/utils";


When(/^I search for (.*)$/, async(searchText: string) => {
    await SearchPage.search(searchText)
});

When(/^I click on settings and modify background (.*)$/, async(backgroundType: string) => {
    await SearchPage.open
    await SearchPage.clickSettingsMenu
    await browser.execute("arguments[0].click();", await SearchPage.menuThemes)
    await SettingsPage.terminalStyle.waitForClickable({timeout: 5000})
    await browser.execute("arguments[0].click();", await SettingsPage.terminalStyle)
    await browser.execute("arguments[0].click();", await SettingsPage.buttonSaveAndExit)
})

When(/^I click on all settings, and modify the language to (.*)$/, async(language) => {
    await SearchPage.open
    await SearchPage.clickSettingsMenu
    await browser.execute("arguments[0].click();", await SearchPage.menuAllSettings)
    await (await SettingsPage.languageDropdown).waitForDisplayed({timeout: 5000})
    await browser.execute("arguments[0].click();", await SettingsPage.languageDropdown)
    await selectDropdown(SettingsPage.languageList, language)
})
