const puppeteer = require("puppeteer");

let noOfFills = 10;

//Options to cjoose
const possibleOptions = [
    {
        optionIds: ["id1", "id2", "id3"],
        cb: true,
        submit: false
    },
    {
        optionIds: ["id4", "id5", "id6"],
        cb: true,
        submit: true
    }
];

//Random selection
function randomSelect(option) {
    let randomOptionSelect = Math.floor(Math.random * option.length);
    return option[randomOptionSelect];
}

//Automate Fill
async function fillForm(page) {
    for (const options of possibleOptions) {
        const { optionIds, cb, submit } = options

        //If it is a Checkbox Question
        if (cb) {
            let optionsToSelect = []
            let noOfOptionsToSelect = Math.floor(Math.random() * 5) || 2 //optionIds.length
            console.log(noOfOptionsToSelect)
            for (let i = 0; i < noOfOptionsToSelect; i++) {

            }
        }
    }
}

async function multipleFill () {
    for (let i = 0; i < noOfFills; i++) {
        fillForm()
    }
}
multipleFill()
