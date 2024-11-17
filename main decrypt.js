//const prompt=require("prompt-sync")({sigint:true}); 

//let input_string = prompt("Please print the encrypted string to be decrypted - ");

function decode(str1_1) {
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
            aws = a[0][accu - 41];
          }
        }
      }
    return aws;
}

function decryption(s) {
  let string = s + "`";
  let counter = 0;
  let str = "";
  let finalaws = "";
  let uppers = "";
  while (counter < 1) {
    let one = string[0];
    let count = 0;

    if (one === "9" || one === "7") {
      for (let x of string.slice(0, 4)) {
        if (x === one) {
          if (string[1] === "<") {
            count = 2;
          } else if (string[2] === ">") {
            count = 3;
          } else if (string[3] === "~") {
            count = 4;
          } else {
            count += 1;
          }
        }
      }
    } else if (one === "]") {
      for (let x of string) {
        if (x === "]") {
          string = string.slice(x);
        }
        uppers += string[x];
      }
    } else if (one === "2" || one === "3" || one === "4" || one === "5" || one === "6" || one === "8") {
      for (let x of string.slice(0, 3)) {
        if (x === one) {
          if (string[1] === "<") {
            count = 2;
          } else if (string[2] === ">") {
            count = 3;
          } else {
            count += 1;
          }
        }
      }
    } else if (one === ":") {
      string = string.slice(1);
      str = string.slice(0, 2);
      finalaws += decode(str);
      string = string.slice(2);
      continue;
    } else if (one === "`") {
      break;
    }
    str = string.slice(0, count);
    let lens = string.length;
    string = string.slice(count);
    finalaws += decode(str);
    if (one === " ") {
      finalaws += " ";
      string = string.slice(1);
    }
  }
  return finalaws;
}

function engine() {
  let input_string0 = (document.getElementById("data").value);
  let keypad_encrypted = decryption(input_string0);
  document.getElementById("disp").innerHTML = keypad_encrypted;
  document.getElementById("disp").style.textAlign = "center";
}


