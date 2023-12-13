const binaryArt = require('./src/core/BinaryArt');
const dateCalculator = require('./src/core/DateCalculator');

function printGitHubExpected(binaryArray){
    console.log("[git hub draw expected]")
    for (const binary of binaryArray) {
        let print = ""
        for (const binaryBit of binary) {
            if(binaryBit == '0'){
                print += ' □ '
            }
            else{
                print += ' ■ '
            }
        }
        console.log(print)
    }
}
function printGitHubCommitDates(date,binaryArray){

    let commitDates = []
    for (let col = 0; col < binaryArray[0].length; col++) {
        for (let row = 0; row < binaryArray.length; row++) {
            const binaryBit = binaryArray[row][col]
            if(binaryBit === '1') commitDates.push(date.toISOString().split('T')[0])
            date.setDate(date.getDate() + 1)

        }
    }
    console.log("\n[.env dates]")

    let print = ""
    for(let i = 0 ; i < commitDates.length ; i ++){

        if(i % 5 == 0 && print != ""){
            console.log(print)
            print = ""
        }

        print += commitDates[i]
        if(i < (commitDates.length-1)){
            print += ","
        }
    }
    console.log(print)
}

const year = process.argv[2];
if(year === undefined ) process.exit()
if(year.length != 4) process.exit()


const str = process.argv[3];
if(str === undefined ) process.exit()
if(str.length > 6) process.exit()


let binaryArray = binaryArt.StringToBinary(str.toUpperCase());
let date = dateCalculator.findDrawStartSundayDate(year);

printGitHubExpected(binaryArray)
printGitHubCommitDates(date,binaryArray)
