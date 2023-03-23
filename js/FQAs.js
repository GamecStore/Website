const links = document.querySelector('.scrol_to');
const content = document.getElementById('faq');

links.forEach(element => {
    element.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    })
});