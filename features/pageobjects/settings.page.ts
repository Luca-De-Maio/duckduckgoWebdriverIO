import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonSaveAndExit() { return $('a.btn.btn--primary') }
    get terminalStyle() { return $('//label[contains(text(),"Terminal")]')}
    get languageDropdown() { return $('//*[@id="setting_kad"]') }
    get languageList() { return $$('//*[@id="setting_kad"]/option') }
    get settingsHeader() { return $('h4.set-head__title') }
    async setStyleConfigurations(style: string) {
        await (await $(`//label[contains(text(), "${style}")]`)).click
    }

    async clickStyle() {
        await (await this.terminalStyle).waitForClickable({timeout: 10000})
        await (await this.terminalStyle).click
    }

    async clickSaveAndExit() {
        await (await this.buttonSaveAndExit).waitForClickable({timeout: 5000})
        await (await this.buttonSaveAndExit).elementHover
        await browser.execute("arguments[0].click();", await this.buttonSaveAndExit)
    }

    async getTextFromHead() {
        await browser.execute(function () {
            return this.settingsHeader.textContent;
        });
    }

}

export default new SettingsPage();