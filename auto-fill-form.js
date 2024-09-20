const puppeteer = require("puppeteer");

let noOfFills = 2;
let noOfOptionsToSelect

//Options to cjoose
const possibleOptions = [
    {
        optionIds: ["id1", "id2", "id3"],
        cb: true,
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
    let randomOptionSelect = Math.floor(Math.random() * option.length);
    return option[randomOptionSelect];
}

function delay (fillInterval) {
    setTimeout(randomSelect , fillInterval);
}

//Automate Fill
async function fillForm(page) {
    for (const options of possibleOptions) {
        const { optionIds, cb, submit } = options

        //If it is a Checkbox Question
        if (cb) {
            let selectedOptions = []
            noOfOptionsToSelect = Math.round(Math.random() * optionIds.length) || 2 //optionIds.length
            
            console.log("First NoOfC", noOfOptionsToSelect)
            for (let i = 0; i < noOfOptionsToSelect; i = i+1) {
                let currentSelectedOption
                while (selectedOptions.includes(currentSelectedOption)) {
                currentSelectedOption = randomSelect(optionIds)
                    console.log(currentSelectedOption, selectedOptions)
                }
                selectedOptions.push(currentSelectedOption);
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
