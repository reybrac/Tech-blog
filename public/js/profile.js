const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#project-name").value.trim();
  const hash_tag = document.querySelector("#project-funding").value.trim();
  const description = document.querySelector("#project-desc").value.trim();

  if ((name && hash_tag && description) || (name && description)) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ name, hash_tag, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};

const updButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: "This works" }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/profile");
      console.log(response);
    } else {
      alert("Failed to Update post");
    }
  }
};

const buttonHandler = async (event) => {
  if (event.target.classList.contains("upBtn")) {
    updButtonHandler(event);
  }
  if (event.target.classList.contains("delBtn")) {
    delButtonHandler(event);
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", buttonHandler);

// document.querySelector(".delBtn").addEventListener("click", delButtonHandler);

// document.querySelector(".upBtn").addEventListener("click", updButtonHandler);
