// -------------------------------------------------- 
// Global Declaration: Global Scope (bad practice)
// -------------------------------------------------- 

test = "sss";
console.log(test);

// -------------------------------------------------- 
// Declaration with var: Functional Scope
// -------------------------------------------------- 

function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log(bottom);

  var bottom; // "floats" to top of block (hoisting)
}

scope1();

// Equivalent:
function scope2() {
  var top = "top";
  var bottom;
  bottom = "bottom";
  console.log(bottom);
}

scope2();

// KEY: Scope of the `var` keyword is the closest function
// scope.
function scope3(print) {
  if (print) {
    var insideIf = '12'; // "floats" to top of function
  }
  console.log(insideIf);
}

scope3(true);  // '12'
scope3(false); // undefined

// Equivalent
function scope4(print) {
  var insideIf;
  if (print) {
    insideIf = '12';
  }
  console.log(insideIf);
}

scope4(true);  // '12'
scope4(false); // undefined

// -------------------------------------------------- 
// Declaration with let: Block Scope
// -------------------------------------------------- 

function scope5(print) {
  if (print) {
    let insideIf = '12';
    console.log(insideIf); // OK
  }
  //console.log(insideIf); // Error
}

scope5(true);
