window.addEventListener("scroll", () => {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Show after 300px of scrolling
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
    }
});

// Scroll smoothly to the top when clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}