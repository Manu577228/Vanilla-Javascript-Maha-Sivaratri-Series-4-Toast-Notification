const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
  createNotification();
});

function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerText = "Pass";
  container.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 1000);
}
