const puppeteer = require("puppeteer");

let noOfFills = 1;
let noOfOptionsToSelect

//Options to cjoose
const possibleOptions = [
    {
        optionIds: ["id1", "id2", "id3", "id4", "id5", "id6", "id77"],
        cb: true,
        submit: false
    },
    {
        optionIds: ["ttt", "ttt", "ttt"],
        cb: false,
        submit: true
    }
];

//Random selection
function randomSelect(option) {
    // console.log(option,option.length)
    let randomOptionSelect = Math.floor(Math.random() * 7);
    return option[randomOptionSelect];
}

function delay(fillInterval) {
    setTimeout(randomSelect, fillInterval);
}

function cc (cbs, so, oids) {
    cbs = randomSelect(oids)
    if (!so.includes(cbs)) {
        so.push(cbs)
        cc()
        console.log(cbs, so, oids)
    }
}

//Automate Fill
async function fillForm(page) {
    for (const options of possibleOptions) {
        const { optionIds, cb, submit } = options

        //If it is a Checkbox Question
        if (cb) {
            let selectedOptions = []
            noOfOptionsToSelect = Math.round(Math.random() * optionIds.length) || 2 //optionIds.length
            for (let i = 0; i < noOfOptionsToSelect; i++) {
                console.log(noOfOptionsToSelect)
                let currentSelectedOption
                cc(currentSelectedOption, selectedOptions, optionIds)
                // do {
                //     currentSelectedOption = randomSelect(optionIds)
                //     if ((selectedOptions.includes(currentSelectedOption))) {
                //         console.log("Yes Included")
                //     }
                //     selectedOptions.push(currentSelectedOption);
                //     console.log("Inside Loop", currentSelectedOption, selectedOptions, noOfOptionsToSelect)
                // } while (!selectedOptions.includes(currentSelectedOption))
            }
        }
    }
}

async function multipleFill() {
    for (let i = 0; i < noOfFills; i++) {
        fillForm()
    }
}
multipleFill()
