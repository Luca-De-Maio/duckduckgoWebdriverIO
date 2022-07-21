import { Given, When, Then } from '@wdio/cucumber-framework';
import axios from "axios";

interface MyObj {
    Abstract: string;
    AbstractText: string;
    AbstractSource: string;
    AbstractURL: string;
    Image: string;
    Heading: string;
    Answer: string;
    Redirect: string;
    AnswerType: string;
    Definition: string;
    DefinitionSource: string;
    DefinitionURL: string;
    RelatedTopics: [{
            FirstURL: string;
            Icon: []
            Result: string;
            Text: string;
        }];
    Results: []
    Type: string;
}

let obj: MyObj

Given(/^I will print (.*) results$/, async (search) => {
    console.log("I will print search results for: " + search)
});

When(/^I perform (.*) api search$/, async(searchText: string) => {
    obj = await (await axios.get(`https://api.duckduckgo.com/?q=${searchText}&format=json`)).data
});

Then(/^I print urls$/, async() => {
    for(var i = 0; i<(await obj.RelatedTopics).length; i++) { 
        console.log(obj.RelatedTopics[i].FirstURL) 
    }
})

Then(/^I print image$/, async() => {
    console.log(await obj.Image);
})