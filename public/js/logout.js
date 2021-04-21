const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert("Your session has expired!");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

var duration = 10;

setInterval(updateTimer, 1000);

function updateTimer() {
  duration--;
  if (duration < 1) {
    logout();
  }
}

window.addEventListener("mousemove", resetTimer);

function resetTimer() {
  duration = 10;
}
