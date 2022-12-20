let link = document.querySelector(".input");
let output = document.querySelector(".output");

function Check() {
  let val = link.value;

  if (val.split(":")[0] === "http") {
    output.innerText = "http";
    return val;
  } else if (val.split(":")[0] === "https") {
    output.innerText = "https";
    return val;
  } else {
    output.innerText = "Now connection protocol is https";
    link.value = "https://" + val;
    return "https://" + val;
  }
}

function Go() {
  document.location = Check();
}
