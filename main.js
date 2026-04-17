document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

      // remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));

      // remove active from all contents
      contents.forEach(c => c.classList.remove("active"));

      // activate clicked tab
      tab.classList.add("active");

      // show corresponding content
      contents[index].classList.add("active");
    });
  });
});