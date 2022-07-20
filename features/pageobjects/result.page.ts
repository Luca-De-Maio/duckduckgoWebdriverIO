import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get image() { return $('a.module__image') }
    get nbaResult() { return $('//a[@href="https://www.nba.com/player/893"][1]') }
    get moreResults() { return $('a.result--more__btn.btn.btn--full') }
    get menuAbajo() { return $('#m10-0')}


    async getExpectedResult(expectedResult) {
        return (await (await $(`//span[contains(text(),"${expectedResult}")]`).getText()))
    }

}

export default new ResultPage();
