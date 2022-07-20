export async function checkIfPageLoaded(): Promise<boolean> {
    // console.log( `Done loading? ${browser.executeScript('return document.readyState', []) }` );
    return await browser.executeScript('return document.readyState', []) === 'complete';
  }

export async function forceClick(webElement:string) {
    await browser.execute(`document.querySelector(${webElement}).click();`)
}