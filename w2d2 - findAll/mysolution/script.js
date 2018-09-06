"use strict";

const animals = ["dog", "cat", "horse", "cat", "mouse", "dog", "cat", "cat", "dog"];

function findAll(arr, searchValue) {
    let solution = [];

    arr.forEach((elem, i) => {
        if (elem === searchValue) {
            solution.push(i);
            console.log(elem + "===" + searchValue + "..." + i);
        } else {

        }
    });

    return solution;
}
const catsAt = findAll(animals, "cat");
console.log(catsAt);