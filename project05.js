/**
 *   @author Lee Marshall (marshalll@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');




const CLASSICAL = 0;
const EASY_LISTEN = 1;
const JAZZ = 2;
const POP = 3;
const ROCK = 4;
const OTHER = 5;
const GENRE = 0;
const PRICE = 1;
const TOTAL_PURCH = 0;
const OVER_TEN = 1;
const OVER_SIX = 2;
const OVER_THREE = 3;
const UNDER_THREE = 4;
const GENRE_STRING = 5;

let tempGenre, price;

let transaction = [];
transaction[GENRE] = [];
let transStats = [];

transStats[CLASSICAL] = [0,0,0,0,0,"Classical"];
transStats[EASY_LISTEN] = [0,0,0,0,0,"Easy listening"];
transStats[JAZZ] = [0,0,0,0,0,"Jazz"];
transStats[POP] = [0,0,0,0,0,"Pop"];
transStats[ROCK] = [0,0,0,0,0,"Rock"];
transStats[OTHER] = [0,0,0,0,0,"Other"];



function main() {
    transGenorator();//generates data for prog testing, would not be in actual prog
    while (0 === 0) {//continuous loop
        settransInfo();

        sortTransOrder();
        dispStatsReport();
    }
}
main();

function settransInfo(){
    const GMIN = 1;
    const  GMAX = 6;
    const PMIN = 0;
    const PMAX = 15.00;
    console.log(`Please enter value for the genre of purchase.`);
    console.log(`[1] ${transStats[CLASSICAL][GENRE_STRING]}`);
    console.log(`[2] ${transStats[EASY_LISTEN][GENRE_STRING]}`);
    console.log(`[3] ${transStats[JAZZ][GENRE_STRING]}`);
    console.log(`[4] ${transStats[POP][GENRE_STRING]}`);
    console.log(`[5] ${transStats[ROCK][GENRE_STRING]}`);
    console.log(`[6] ${transStats[OTHER][GENRE_STRING]}`);

    let i = 0;
    if (transaction[i][GENRE] === undefined){
        i = 0;
    }
    else {i = (transaction.length);}

    console.log(transaction.length);
    let genreValue = null;
    //console.log(`\x1Bc`);
    while (genreValue === null || genreValue < GMIN || genreValue > GMAX || !/[0-9]/.test(genreValue)){
        genreValue = Number(PROMPT.question(`Please enter appropriate value: `));
        if (genreValue === null || genreValue < GMIN || genreValue > GMAX || !/[0-9]/.test(genreValue)){
            console.log(`${genreValue} is not valid, Please enter appropriate value.`);
        }
    }
    transaction[i] = [];
    transaction[i][GENRE] = genreValue - 1;

    price = null;
    console.log(``);
    while (price === null || price < PMIN || price > PMAX || !/[0-9]/.test(price)){
        price = Number(PROMPT.question(`Please enter purchase price: `));
        if (price === null || price < PMIN || price > PMAX || !/[0-9]/.test(price)){
            console.log(`${price} is not valid, Please enter appropriate price.`);
        }
    }
    transaction[i][PRICE] = price;
    sortGenre(i);

}

function transGenorator() {
    const NUMGEN = 1000;

    for (let i = 0; i < NUMGEN; i++) {
        transaction[i] = [];
        transaction[i][GENRE] = Math.floor(Math.random() * 6);
        price = Math.floor((Math.random() * 1500)+1);
        price = (price * .01).toFixed(2);
        transaction[i][PRICE] = Number(price);
        sortGenre(i);
    }



}

function sortGenre(i) {
        switch (transaction[i][GENRE]) {
            case 0:
                transStats[CLASSICAL][TOTAL_PURCH]++;
                tempGenre = CLASSICAL;
                sortPrice(tempGenre, i);
                break;
            case 1:
                transStats[EASY_LISTEN][TOTAL_PURCH]++;
                tempGenre = EASY_LISTEN;
                sortPrice(tempGenre, i);
                break;
            case 2:
                transStats[JAZZ][TOTAL_PURCH]++;
                tempGenre = JAZZ;
                sortPrice(tempGenre, i);
                break;
            case 3:
                transStats[POP][TOTAL_PURCH]++;
                tempGenre = POP;
                sortPrice(tempGenre, i);
                break;
            case 4:
                transStats[ROCK][TOTAL_PURCH]++;
                tempGenre = ROCK;
                sortPrice(tempGenre, i);
                break;
            default:
                transStats[OTHER][TOTAL_PURCH]++;
                tempGenre = OTHER;
                sortPrice(tempGenre, i);

        }
}

function sortPrice(tempGenre, i) {
    const MAX = 10;
    const MID = 6;
    const LOW = 3;
    if (transaction[i][PRICE] >= MAX) {
        transStats[tempGenre][OVER_TEN]++;
    }
    else if (transaction[i][PRICE] < MAX && transaction[i][PRICE] >= MID) {
        transStats[tempGenre][OVER_SIX]++;
    }
    else if (transaction[i][PRICE] < MID && transaction[i][PRICE] >= LOW) {
        transStats[tempGenre][OVER_THREE]++;
    }
    else {
        transStats[tempGenre][UNDER_THREE]++;
    }

}

function sortTransOrder() {
    let reorderStats = transStats;
    let unsort = reorderStats.length;
    for (let y = 0; y < unsort; y++) {
        for (let x = 0; x < unsort; x++){
            if (reorderStats[x + 1] > reorderStats[x]){
                let temp = reorderStats[x + 1];
                reorderStats[x + 1] = reorderStats[x];
                reorderStats[x] = temp;
            }
        }

    }
    console.log(reorderStats);
}

function dispStatsReport() {
    console.log(`    Genre        Over $10    $6.00-$9.99   $3.00-$5.99   Under $3.00`);
    console.log(`-------------    --------    -----------   -----------   -----------`);
    console.log(`  ${transStats[CLASSICAL][GENRE_STRING]}         ${transStats[CLASSICAL][OVER_TEN]}            ${transStats[CLASSICAL][OVER_SIX]}            ${transStats[CLASSICAL][OVER_THREE]}           ${transStats[CLASSICAL][UNDER_THREE]}`);
    console.log(`${transStats[EASY_LISTEN][GENRE_STRING]}      ${transStats[EASY_LISTEN][OVER_TEN]}            ${transStats[EASY_LISTEN][OVER_SIX]}            ${transStats[EASY_LISTEN][OVER_THREE]}           ${transStats[EASY_LISTEN][UNDER_THREE]}`);
    console.log(`     ${transStats[JAZZ][GENRE_STRING]}           ${transStats[JAZZ][OVER_TEN]}            ${transStats[JAZZ][OVER_SIX]}            ${transStats[JAZZ][OVER_THREE]}           ${transStats[JAZZ][UNDER_THREE]}`);
    console.log(`     ${transStats[POP][GENRE_STRING]}            ${transStats[POP][OVER_TEN]}            ${transStats[POP][OVER_SIX]}            ${transStats[POP][OVER_THREE]}           ${transStats[POP][UNDER_THREE]}`);
    console.log(`     ${transStats[ROCK][GENRE_STRING]}           ${transStats[ROCK][OVER_TEN]}            ${transStats[ROCK][OVER_SIX]}            ${transStats[ROCK][OVER_THREE]}           ${transStats[ROCK][UNDER_THREE]}`);
    console.log(`     ${transStats[OTHER][GENRE_STRING]}          ${transStats[OTHER][OVER_TEN]}            ${transStats[OTHER][OVER_SIX]}            ${transStats[OTHER][OVER_THREE]}           ${transStats[OTHER][UNDER_THREE]}`);
}