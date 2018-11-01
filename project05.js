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
const GENRE_STRING = 2;
const TOTAL_PURCH = 0;
const OVER_TEN = 1;
const OVER_SIX = 2;
const OVER_THREE = 3;
const UNDER_THREE = 4;

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
    while (0 === 0)
    {
        transGenorator();
        settransInfo();
        /*sortGenre();
        console.log(transStats);
        sortTransOrder();
        console.log(transStats);*/
    }
}
main();

function settransInfo(){
    const GMIN = 1;
    const  GMAX = 6;
    const PMIN = 0;
    const PMAX = 15.00;
    console.log(`Please enter value for the genre of purchase.`);
    console.log(`[1] ${transStats[0][5]}`);
    console.log(`[2] ${transStats[1][5]}`);
    console.log(`[3] ${transStats[2][5]}`);
    console.log(`[4] ${transStats[3][5]}`);
    console.log(`[5] ${transStats[4][5]}`);
    console.log(`[6] ${transStats[5][5]}`);

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





    console.log(transaction);



}

function transGenorator() {
    const NUMGEN = 10;

    for (let i = 0; i < NUMGEN; i++) {
        transaction[i] = [];
        transaction[i][GENRE] = Math.floor(Math.random() * 6);
        price = Math.floor((Math.random() * 1500)+1);
        price = (price * .01).toFixed(2);
        transaction[i][PRICE] = Number(price);
    }

}

p[=
    0.032654987*/unction sortGenre() {

    for (let i = 0; i < transaction.length; i++){
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
    let unsort = transStats.length;
    for (let y = 0; y < unsort; y++) {
        for (let x = 0; x < unsort; x++){
            if (transStats[x + 1] > transStats[x]){
                let temp = transStats[x + 1];
                transStats[x + 1] = transStats[x];
                transStats[x] = temp;
            }
        }

    }

}