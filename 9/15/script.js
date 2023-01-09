const form = document.querySelector(".searchForm");
const outputBox = document.querySelector(".output");
const commentsBox = document.querySelector(".commentsBox");

let output = "";

form.onsubmit = function getPostID(e) {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target).entries());

  console.log(input.postId);

  const posts = fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    .then((request) => {
      return request.text();
    })
    .then((data) => {
      let postsArr = JSON.parse(data);

      let foundPost = postsArr.find((post) => post["id"] == input.postId);

      if (foundPost === undefined) {
        outputBox.innerHTML = `
        <div class="post">
          <h3>Post ${input.postId} not found.</h3>
        </div>`;
      } else {
        outputBox.innerHTML = `
        <div class="post" data-post-id="${foundPost["id"]}">
          <h3>${foundPost["title"]}</h3>
          <button onclick="getComments()">See comments</button>
        </div>`;
      }
    })
    .catch(
      (err) =>
        (outputBox.innerHTML = `<h3>Error loading posts. Error description: ${err}</h3>`)
    );
};

function getComments() {
  let post = document.querySelector(".post");

  fetch("https://my-json-server.typicode.com/typicode/demo/comments")
    .then((request) => {
      return request.text();
    })
    .then((data) => {
      let commentsArr = JSON.parse(data);

      let commentsOutput = "";

      for (comment in commentsArr) {
        if (
          commentsArr[comment]["postId"] == post.getAttribute("data-post-id")
        ) {
          commentsOutput += `<h3>${commentsArr[comment]["body"]}</h3>`;
        } else {
          commentsOutput = `<h3>No comments found</h3>`;
        }
      }

      commentsBox.innerHTML = commentsOutput;
    })
    .catch(
      (err) =>
        (commentsBox.innerHTML = `<h3>No comments found due to error. ${err}</h3>`)
    );
}
