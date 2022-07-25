import { Then } from '@wdio/cucumber-framework';
import SettingsPage from '../../pageobjects/settings.page';
import ResultPage from '../../pageobjects/result.page';

Then(/^In the result page should see at least a result with the name (.*)$/, async (message) => {
    expect(await ResultPage.getExpectedResult(message)).toStrictEqual(message)
});

Then(/^In the result page should see at least an image of the searched player$/, async () => {
    await (await ResultPage.image).isDisplayed
    expect(await (await (ResultPage.image)).getAttribute("href")).toStrictEqual("https://en.wikipedia.org/wiki/Michael_Jordan")
});

Then(/^In the result page should at least appear an NBA result page$/, async () => {
    browser.execute("document.querySelector('a.result--more__btn.btn.btn--full').click();")
    
    expect(await (await ResultPage.nbaResult).getAttribute("href")).toStrictEqual("https://www.nba.com/player/893")
});

Then(/^In Home Page the background switch to (.*)$/, async(backgroundColor) => {
    console.log(await (await $('div.cw--c').getCSSProperty('color')).parsed.hex)
    expect(await (await $('div.cw--c').getCSSProperty('color')).parsed.hex).toStrictEqual(backgroundColor)
});

Then(/^All settings translated to the new language is (.*)$/, async(translated) => {
    expect(
        await browser.execute(function () {
            return document.querySelector('h4.set-head__title').textContent;
        })
    ).toStrictEqual(translated)
})