const bdayIn = document.getElimentById("birthday");
const btnIn = document.getElimentById("btn");
const publishAge = document.getElimentById("result");

function calcuAge(bdayIn) {
  const bdayFromUser = bdayIn.value;
  if (bdayFromUser == "") {
    alert("Enter a valid bday");
  } else {
    const age = getAge(bdayFromUser);
    publishAge.innerText = 'Now age is ${age} ${age > 1?"years: year"} old';
  }
}

function getAge(bdayFromUser) {
  const Tday = new Date();
  const born = new Date(bdayFromUser);
}
