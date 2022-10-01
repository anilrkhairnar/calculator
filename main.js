// Display
const operation = document.querySelector(".operation");

// Result
const result = document.querySelector(".result");

// AC
const ac = document.querySelector(".ac");
// Del
const del = document.querySelector(".del");

// Numbers
const num = document.querySelectorAll(".num");

// Operators
const opr = document.querySelectorAll(".opr");

// Equal
const eql = document.querySelector(".equal");

// All numbers store here
let queries = "";

// AC Function
const allClear = () => {
  queries = "";
  operation.innerText = "";

  display(queries);
};

// Delete Function
const deleted = () => {
  // Remove Last Number
  queries = queries.slice(0, -1);

  // Update Result
  result.innerText = queries;
};

// Concat Numbers and Display
const display = (val) => {
  // NaN Prevention
  if (val !== NaN) {
    // Check if Operator
    if (val == "/" || val == "*" || val == "-" || val == "+") {
      let lastOpr = queries.substring(queries.length - 1, queries.length);

      // Change Exist Operator
      if (
        lastOpr == "/" ||
        lastOpr == "*" ||
        lastOpr == "-" ||
        lastOpr == "+"
      ) {
        queries = queries.slice(0, -1);
        queries += val;
        result.innerHTML = queries;
      } else {
        queries += val; // adding Values
        result.innerHTML = queries;
      }
    } else {
      queries += val; // adding Values

      result.innerHTML = queries; // add to elem
    }
  }
};

const displayResult = () => {
  if (
    queries.includes("/") ||
    queries.includes("*") ||
    queries.includes("-") ||
    queries.includes("+")
  ) {
    const answer = String(eval(queries));

    operation.innerText = queries;
    queries = answer;
    result.innerText = answer;
  }
};

ac.addEventListener("click", (e) => {
  e.preventDefault();

  allClear();
});

del.addEventListener("click", (e) => {
  e.preventDefault();

  deleted();
});

num.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    display(btn.innerText);
  });
});

opr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    display(btn.innerText);
  });
});

eql.addEventListener("click", (e) => {
  e.preventDefault();

  displayResult();
});
