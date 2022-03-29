window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        document.querySelector("header").classList.add("sticky");
    }
    else {
        document.querySelector("header").classList.remove("sticky");
    }
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
// const marqueeContent2 = document.querySelector("ul.marquee-content2");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
// root.style.setProperty("--marquee-elements", marqueeContent2.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    // marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
}