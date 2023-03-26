//rounds up the randomized numbers to the nearest whole number
var num1 = document.getElementById('num1').innerHTML = Math.ceil(Math.random() * 20);
var num2 = document.getElementById('num2').innerHTML = Math.ceil(Math.random() * 20);
var num3 = document.getElementById('num3').innerHTML = Math.ceil(Math.random() * 20);

//find the largest among the three numbers
let max = Math.max(num1, num2, num3);


var num1char = document.getElementById('num1sub').innerHTML;
var num2char = document.getElementById('num2sub').innerHTML;
var num3char = document.getElementById('num3sub').innerHTML;

//determines the element with the most number of characters pulled
var char;

    if (num1 == max && num2 != max && num3 != max){
        char = num1char;
    }

    if (num2 == max && num1 != max && num3 != max){
        char = num2char;
    }

    if (num3 == max && num1 != max && num2 != max){
        char = num3char;
    }

    if (num1 == max && num2 == max && num3 != max){
        char = num1char + ", " + num2char;
    }

    if (num1 != max && num2 == max && num3 == max){
        char = num2char + ", " + num3char;
    }

    if (num1 == max && num2 != max && num3 == max){
        char = num1char + ", " + num3char;
    }


document.getElementById('mostnumber').innerHTML = "The Element with the most number of pulled characters is: " + char + " (" + max + ")";

//matches largest number to the letter in the alphabet
var abc = "ABCDEFGHIJKLMNOPQRST";
var x = abc.charAt(max - 1);

document.getElementById('letter').innerHTML = "The name of the 5-star Anemo character pulled starts with the letter: " + x;

//The hr-min breakdown of (num2*num3) mins
var time = num2 * num3;
var nhr = (time / 60);
var hr = Math.floor(nhr);
var nmn = (nhr - hr) * 60;
var mn = Math.round(nmn);

document.getElementById('time').innerHTML = "The time it took for the player's primogems to run out to is: (" + time + " minute/s): " + hr + "hour/s " + mn + "minute/s";