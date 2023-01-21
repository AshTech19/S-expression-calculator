const input = process.argv[2];

const evaluate = (expr) => {
  // check if the input is a number
  if (!isNaN(expr)) {
    return parseInt(expr);
  }
  
  // check if the input is a valid function call
  const match = expr.match(/^\((\w+) (.*)\)$/);
  if (!match) {
    throw new Error(`Invalid expression: ${expr}`);
  }
  
  // extract the operator and the sub-expression string
  const op = match[1];
  let subExpr = match[2];
  
  // initialize variables for parsing the sub-expression string
  let i = 0;
  let count = 0;
  let subExpressions = [];
  let subString = "";
  
  // iterate through the sub-expression string
  while(i < subExpr.length) {
    // keep track of the number of open and closed parenthesis
    if(subExpr[i] === "(") {
        count++;
    }
    if(subExpr[i] === ")") {
        count--;
    }
    // if a space is encountered outside of any nested function calls
    // separate the sub-expression
    if(subExpr[i] === " " && count === 0) {
        subExpressions.push(subString);
        subString = "";
    }
    else {
        subString += subExpr[i];
    }
    i++;
  }
  // add the last sub-expression
  subExpressions.push(subString);
  
  // check the operator and perform the corresponding operation
  if (op === 'add') {
    return subExpressions.reduce((acc, cur) => acc + evaluate(cur), 0);
  } else if (op === 'multiply') {
    return subExpressions.reduce((acc, cur) => acc * evaluate(cur), 1);
  } else {
    throw new Error(`Invalid operator: ${op}`);
  }
};

console.log(evaluate(input));
