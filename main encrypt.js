//const prompt=require("prompt-sync")({sigint:true}); 
function encode(str1_1) {
    const a = [
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "?", ",", "/"],
      ["2<", "22>", "222", "3<", "33>", "333", "4<", "44>", "444", "5<", "55>", "555", "6<", "66>", "666", "7<", "77>", "777~", "7777", "8<", "88>", "888", "9<", "99>", "999~", "9999", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
    ];
    let accu = 0;
    let aws = "";
    for (let x of a) {
      for (let i of x) {
        accu++;
        if (i === str1_1) {
          aws = a[1][accu - 1];
        }
      }
    }
    return aws;
  }
  
  //let input_string0_1 = prompt("Please print the string to be encrypted - ");
  
  
  function encryption(s) {
    let string = s + "`";
    let counter = 0;
    let str = "";
    let finalaws = "";
    while (counter < 1) {
      str = string[0];
      if (str === "!" || str === "@" || str === "#" || str === "$" || str === "%" || str === "^" || str === "&" || str === "*" || str === "(" || str === ")" || str === "." || str === "?" || str === "," || str === "/") {
        finalaws += ":";
      }
      if (str === "`") {
        break;
      }
      let lens = string.length;
      string = string.slice(1, lens);
      finalaws += encode(str);
      if (string[0] === " ") {
        finalaws += " ";
        string = string.slice(1, lens);
      }
    }
    return finalaws;
  }
  
  function engine() {
    let input_string0 = (document.getElementById("data").value).toLowerCase();
    let keypad_encrypted = encryption(input_string0);
    document.getElementById("disp").innerHTML = keypad_encrypted;
  }
  
  

  
  
 
  
  