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

if ($('.items-services').length > 0) {
    $('.items-services').css('opacity', '0');
    setTimeout(function () {

        $('.items-services').css('opacity', '1');
        let listItems = gsap.utils.toArray(".items-services .item-services");
        listItems.forEach(element => {
            gsap.from(element, {
                opacity: 0
            }),
                gsap.to(element, {
                    opacity: 1,
                    duartion: 1,
                    scrollTrigger: {
                        trigger: element,
                        markers: false,
                        start: "top 80%",
                        end: "bottom 90%",
                        toggleActions: 'play none none reverse',
                    }
                });
        });
        setTimeout(function () {
            $('.items-services .item-services').css('opacity', '0');
        }, 1800);
    }, 500);

}

setTimeout(function () {
    //$('.background').css('opacity', '0');
    $('.background').first().css('opacity', '1');
}, 1800);