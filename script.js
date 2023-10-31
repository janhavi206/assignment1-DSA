/*1- program to find all pairs of an integer array whose sum is equal to a given number: */
function findPairs(array, sum) {
    let hashMap = {};
    let pairs = [];
  
    for (let i = 0; i < array.length; i++) {
      if (hashMap[array[i]]) {
        pairs.push([hashMap[array[i]], array[i]]);
      } else {
        hashMap[sum - array[i]] = array[i];
      }
    }
  
    return pairs;
  }
  
  console.log(findPairs([1, 2, 3, 4, 5, 6], 7));

  /*2- program to reverse an array in place? In place means you cannot create a new array. You have to update the original array */
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  
  const arrayToReverse = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayToReverse);
  console.log(arrayToReverse);

  /*3- program to check if two strings are a rotation of each other */
  function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenatedStr = str1 + str1;
    return concatenatedStr.includes(str2);
}

const string1 = "hello";
const string2 = "lohel";
const result = areRotations(string1, string2);
console.log(result); // Output: true

/*4- program to print the first non-repeated character from a string */
function firstNonRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
        return char;
      }
    }
    return null;
  }
  
  const inputString = "programming";
  const myresult = firstNonRepeatedCharacter(inputString);
  console.log(result);

  /* 5- Tower of Hanoi algorithm. Write a program to implement it */
  function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
      return;
    }
  
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n - 1, aux, to, from);
  }
  
  towerOfHanoi(3, 'A', 'C', 'B');

  /* 6 - infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression */
  function postfixToPrefix(postfix) {
    const stack = [];
    for (let i = 0; i < postfix.length; i++) {
      const char = postfix[i];
      if (char.match(/[a-z]/i)) {
        stack.push(char);
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(char + operand1 + operand2);
      }
    }
    return stack.pop();
  }
  const postfix = 'abc/-ak/l-*';
  const prefix = postfixToPrefix(postfix);
  console.log(prefix);

  /*7- program to convert prefix expression to infix expression */
  function preToInfix(pre_exp) {
    let s = [];
    let length = pre_exp.length;
    for (let i = length - 1; i >= 0; i--) {
        if (isOperator(pre_exp[i])) {
            let op1 = s.pop();
            let op2 = s.pop();
            let temp = `(${op1}${pre_exp[i]}${op2})`;
            s.push(temp);
        } else {
            s.push(pre_exp[i]);
        }
    }
    return s.pop();
}

function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
        case '^':
            return true;
    }
    return false;
}

let prefix_expression = "+AB";
let infix_expression = preToInfix(prefix_expression);
console.log(`Infix: ${infix_expression}`);

/*8- Write a program to check if all the brackets are closed in a given code snippet */
function checkBrackets(code) {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closedBrackets = [')', '}', ']'];
    for (let letter of code) {
        if (openBrackets.includes(letter)) {
            stack.push(letter);
        } else if (closedBrackets.includes(letter)) {
            const openPair = openBrackets[closedBrackets.indexOf(letter)];
            if (stack[stack.length - 1] === openPair) {
                stack.splice(-1, 1);
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let codeSnip = "function foo() { if (x > 0) { return true; } }";
if (checkBrackets(codeSnip)) {
    console.log("All brackets are closed.");
} else {
    console.log("Not all brackets are closed.");
}

/*9- Write a program to reverse a stack */
function reverseStack(stack) {
    if (stack.length === 0) {
        return stack;
    } else {
        let temp = stack.pop();
        reverseStack(stack);
        insertAtBottom(stack, temp);
        return stack;
    }
}

function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
    } else {
        let temp = stack.pop();
        insertAtBottom(stack, item);
        stack.push(temp);
    }
}

let myStack = [1, 2, 3, 4, 5];
console.log(`Original Stack: ${myStack}`);
reverseStack(myStack);
console.log(`Reversed Stack: ${myStack}`);

/*10- program to find the smallest number using a stack */
function findMin(stack) {
    let min = stack[0];
    for (let i = 1; i < stack.length; i++) {
        if (stack[i] < min) {
            min = stack[i];
        }
    }
    return min;
}

let thisStack = [5, 3, 8, 1, 9, 2];
console.log(`Stack: ${myStack}`);
console.log(`Minimum: ${findMin(myStack)}`);
