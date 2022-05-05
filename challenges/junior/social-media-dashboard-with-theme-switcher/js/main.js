const toggleSwitch = document.getElementById("switch");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
