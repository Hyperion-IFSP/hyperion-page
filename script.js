const sidemenu = document.getElementById("menu-items-mobile");
let open = false;

sidemenu.style.right = "-100%";
sidemenu.style.transition = "all 0.5s ease-in-out";

document.querySelectorAll("#navbar-button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(open);

    if (!open) {
      sidemenu.style.right = "0";
    } else {
      sidemenu.style.right = "-100%";
    }

    open = !open;
  });
});
