//length of "Test 1" (including spaces)
function wordCount(word:string):number{
    let count: number = word.length;
    return count;
}

let myCount = wordCount("Test 1");
console.log(myCount);

//funtion not including spaces
function wordCount2(value:string):number{
    let count2: number = value.replace(/\s/g, "").length;
    return count2;
}

let myCount2= wordCount2("Test 1");
console.log(myCount2);

// Combine both function created in 1 and 2, into one function which accepts an optional
//parameter,so character count on input string can include or exclude spaces.
function space_or_not(value: string, spaces?: boolean) : number{

let num: number;

if(spaces){
    num = value.replace(/\s+/, "").length;
}
else{
    num = value.length;
}
return num;
}
console.log("spaces", false);
console.log("spaces", true);