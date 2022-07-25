import { ChainablePromiseElement, ChainablePromiseArray, ElementArray } from "webdriverio";

export async function checkIfPageLoaded(): Promise<boolean> {
    // console.log( `Done loading? ${browser.executeScript('return document.readyState', []) }` );
    return await browser.executeScript('return document.readyState', []) === 'complete';
}

export async function forceClick(webElement: ChainablePromiseElement<WebdriverIO.Element>) {
   await browser.execute("arguments[0].click();", webElement)
}

export async function waitToExist(webElement: ChainablePromiseElement<WebdriverIO.Element>) {
  browser.waitUntil(() => {
    return $("#setting_kae_t=Terminal").isClickable(); 
  },{
      timeout: 5000,
      timeoutMsg:  'expected text to be different after 5s'
    }
  );
}

export const selectDropdown = async(elements:ChainablePromiseArray<ElementArray>, value:string)=> {
  for (let i = 0; i < (await elements).length; i++) {
      if (await (await elements[i].getText()).includes(value)) {
          await elements[i].click()
          break;
      }
  }
}