import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonSaveAndExit() { return $('a.btn.btn--primary') }
    get terminalStyle() { return $('#setting_kae_t')}

    async setStyleConfigurations(style: string) {
        await (await $(`//label[contains(text(), "${style}")]`)).click
    }

}

export default new SettingsPage();