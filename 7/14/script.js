let regForm = document.querySelector(".registration_form");

regForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const userInfo = Object.fromEntries(new FormData(evt.target).entries());
  console.log(userInfo);

  let tableHead = "",
    tableBody = "";
  for (key in userInfo) {
    tableHead += `<th>${key}</th>`;
    tableBody += `<th>${userInfo[key]}</th>`;
  }

  document.querySelector(".output_table__head").innerHTML = tableHead;
  document.querySelector(".output_table__body").innerHTML = tableBody;
});
