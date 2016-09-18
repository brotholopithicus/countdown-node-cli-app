const chalk = require('chalk');
const clear = require('cli-clear');

function splitAndSave(float) {
    let str = float.toString();
    let remainder = str.substr(str.indexOf('.'), str.length);
    remainder = parseFloat('0' + remainder);
    return remainder;
}

function calculateTime() {
    let now = Date.now();
    let birthday = Date.parse(new Date('2017-03-27'));
    let remaining = birthday - now;
    let s = remaining / 1000;
    let m = s / 60;
    let h = m / 60;
    let days = h / 24;
    days = days.toString();
    let hours = splitAndSave(days) * 24;
    let minutes = splitAndSave(hours) * 60;
    let seconds = splitAndSave(minutes) * 60;
    let time = {
        d: parseInt(days),
        h: parseInt(hours),
        m: parseInt(minutes),
        s: parseInt(seconds)
    }
    return time;
}

function displayTime() {
    let time = calculateTime();
    let msg = `\n`;
    msg += chalk.cyan.bold('\t\tBIRTHDAY COUNTDOWN!\n\n');
    msg += '    ';
    msg += chalk.red.bold(` ${time.d} DAYS `);
    msg += chalk.blue.bold(` ${time.h} HOURS `);
    msg += chalk.green.bold(` ${time.m} MINUTES `);
    msg += chalk.magenta.bold(` ${time.s} SECONDS `);
    console.log(msg);
}

function loop() {
    clear();
    displayTime();
}

setInterval(function() {
    loop();
}, 1000);
