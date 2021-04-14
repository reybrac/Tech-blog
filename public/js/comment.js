const commentEl = document.querySelector(".comment");

const newCommentHandler = () => {
  const form = document.createElement("form");
  const textArea = document.createElement("textarea");
  const commentButton = document.createElement("button");

  commentButton.textContent = "Submit";
  commentButton.classList.add("submitButton");

  commentEl.appendChild(form);
  form.appendChild(textArea);
  form.appendChild(commentButton);

  const submitComment = async (e) => {
    e.preventDefault();

    const post_id = document.location.pathname.split("/")[2];
    const content = textArea.value;

    if (content) {
      const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ post_id, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert("Failed to create comment");
      }
    }
  };
  document
    .querySelector(".submitButton")
    .addEventListener("click", submitComment);
};

document
  .querySelector(".addComment")
  .addEventListener("click", newCommentHandler);
