let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((saif) => {
  saif.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === "AC" || e.target.innerHTML === "C") {
      string = ""; // Set to an empty string to clear the input field
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});


























// let string = "";
// let buttons = document.querySelectorAll(".button");

// Array.from(buttons).forEach((m) => {
//   m.addEventListener('click', (e) => {
//     console.log(e.target); 

//     if (e.target.innerHTML == '=') {
//       string = eval(string);
//       document.querySelector('input').value = string;


//     } else if (e.target.innerHTML === 'C' || e.target.innerHTML === 'AC') {
//       string = " ";

//     }else {
//       string = string + e.target.innerHTML;
//       document.querySelector('input').value = string;
//     }
//   });
// });
