'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
var comparingString = 'abcdefghijklmnopqrstuvwxyz';
var s1 = s.replace(/\s/g,'');
s1 = s1.toLowerCase();
var s2 = s1.split('');
var s3 = [...new Set(s2)];
var s4 = s3.sort();
var s5 = s4.join('');
if (s5 == comparingString){
    return 'pangram';
}
return 'not pangram';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
