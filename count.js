//length of "Test 1" (including spaces)
function wordCount(word) {
    var count = word.length;
    return count;
}
var myCount = wordCount("Test 1");
console.log(myCount);
//funtion not including spaces
function wordCount2(value) {
    var count2 = value.replace(/\s/g, "").length;
    return count2;
}
var myCount2 = wordCount2("Test 1");
console.log(myCount2);
// Combine both function created in 1 and 2, into one function which accepts an optional
//parameter,so character count on input string can include or exclude spaces.
function space_or_not(value, spaces) {
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("spaces", false);
console.log("spaces", true);
