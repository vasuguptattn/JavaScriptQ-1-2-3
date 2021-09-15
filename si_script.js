
function geek() {
    var p = prompt("Please enter principal", "");
    var r = prompt("Please enter rate", "");
    var t = prompt("Please enter time", "");
    let val = (p * r * t) / 100;
    document.getElementById("output").textContent = "Simple Interest is " + val;
}

function areaOfCircle() {
    var radius = prompt("Enter Radius", "");
    let area = 3.14 * radius * radius;
    document.getElementById("output").textContent = "Area  of Circle is " + area;

}

// program to check if the string is palindrome or not

function checkPalindrome() {
    // take input
    var string = prompt('Enter a string:', "");
    let isPalindrome = true;

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            isPalindrome = false;
        }
    }
    if (isPalindrome) {
        document.getElementById("output").textContent = "Palindrome";
    } else {
        document.getElementById("output").textContent = "Not Palindrome";
    }
}



// call the function
// const value = checkPalindrome(string);
// document.getElementById("output").textContent = value;


