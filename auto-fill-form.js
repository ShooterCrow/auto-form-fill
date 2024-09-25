const puppeteer = require("puppeteer")

//Options to cjoose
const possibleOptions = [
    {
        optionIds: ["id1", "id2", "id3"],
        cb: false,
        submit: false
    },
    {
        optionIds: ["id4", "id5", "id6"],
        cb: false,
        submit: true
    }
];

//Random selection
function randomSelect(option) {
    let randomOptionSelect = Math.floor(Math.random * option.length)
    return option[randomOptionSelect];
}

//Automate Fill
async function fillForm(page) {

}