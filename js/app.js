// Adding li to the empty ul (exsisting in the html file) to create the navigation menu
const navlist = document.getElementById("navbar-list");
function createlistitem() {
    const sections = Array.from(document.querySelectorAll("section"));
    for (sec of sections) {
        const listitem = `<li><a href="#${sec.id}" data-nav="${sec.id}">${sec.dataset.nav}</a></li>`;
        navlist.insertAdjacentHTML("beforeend", listitem);
    }
}
createlistitem();

// Adding active class to links and sections while scrolling
const links=document.querySelectorAll("#navbar-list li a");
const secs=document.querySelectorAll("section");
function activemenu() {
    let len=secs.length;
    while(--len && window.scrollY + 10 < secs[len].offsetTop){}
    links.forEach(ltx => ltx.classList.remove("active"));
    links[len].classList.add("active");
    secs.forEach(ltx => ltx.classList.remove("your-active-class"));
    secs[len].classList.add("your-active-class");
}
activemenu();
window.addEventListener("scroll", activemenu);

// Scroll to any Sections
navlist.addEventListener("click", (goto) => {
    goto.preventDefault();
    if (goto.target.dataset.nav) {
        document
        .getElementById(`${goto.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
    }
});

// Toggle menu
let togglebtn = document.querySelector(".toggle-menu")
let thelinks = document.querySelector("#navbar-list")
togglebtn.onclick = function () {
    this.classList.toggle("active")
    thelinks.classList.toggle("open")
};

// Scroll to top
let span = document.querySelector(".top")
window.onscroll = function () {
    this.scrollY >=100 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};