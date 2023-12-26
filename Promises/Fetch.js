// const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);
// ______________________________________________________


// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//   console.log("Getting data...");
//   let response = await fetch(URL);
//   console.log(response.status);
// };

// ______________________________________________________

const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting data...");
  let response = await fetch(URL);
  console.log(response); // JSON FORMAT
  let data = await response.json();
  // console.log(data[0].createdAt);

  factPara.innerText = data[2].createdAt;
};

btn.addEventListener("click", getFacts);

