function showApps() {
  const apps = document.getElementById('div-apps');
  const style = getComputedStyle(apps);
  const display = style.getPropertyValue('display');

  if (display === "none") {
    apps.style.display = "block";
  } else {
    apps.style.display = "none";
  }
}