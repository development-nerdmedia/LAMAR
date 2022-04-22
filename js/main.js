AOS.init();

window.addEventListener("load", () => {
    document.querySelector(".loadingpage").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".loadingpage").style.display = "none";
    }, 600);
});

window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        document.querySelector("header").classList.add("sticky");
    }
    else {
        document.querySelector("header").classList.remove("sticky");
    }
});
MyApp = {
    historytext: {
        init: function () {

            var total_historytext = $('.historytext .text').length;

            $('.next-buttonsHistory, .prev-buttonsHistory').on('click', function (e) {
                e.preventDefault();

                var position = $(this).attr('position');
                if (total_historytext == position) {
                    var new_position = 1;
                } else {
                    var new_position = parseInt(position) + 1;
                }

                if (position == 1) {
                    var prev_new_position = total_historytext;
                } else {
                    var prev_new_position = parseInt(position) - 1;
                }

                $('.historytext .text').removeClass('active');
                $('.historytext .text[position="' + position + '"]').addClass('active');
                $('.años h3').removeClass('active');
                $('.años h3[position="' + position + '"]').addClass('active');
                $('.prev-buttonsHistory').attr('position', prev_new_position);
                $('.next-buttonsHistory').attr('position', new_position);

            });
        }
    }
}

if ($('.historytext').length > 0) {
    MyApp.historytext.init();
}

document.addEventListener("click", function (e) {
    if (e.target.closest(".icon-menu")) {
        document.querySelector(".menupage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".submenu-btn")) {
        const submenu = document.querySelector(".submenu-movil");
        const height = submenu.scrollHeight;
        if (submenu.classList.contains("desplegar")) {
            submenu.classList.remove("desplegar");
            submenu.removeAttribute("style");
        } else {
            submenu.classList.add("desplegar");
            submenu.style.height = (height + 5) + "px";
        }
    }
})


var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('loading'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/experiencia.json'
})

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
    $('.background').first().css('opacity', '1');
}, 1800);

/**************************************************************** */

if ($('.contentBx .content ul').length > 0) {
    $('.contentBx .content ul').css('opacity', '0');
    setTimeout(function () {

        $('.contentBx .content ul').css('opacity', '1');
        let listItems1 = gsap.utils.toArray(".contentBx .content ul li");
        listItems1.forEach(element => {
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
            $('.contentBx .content ul .contentBx .content ul li').css('opacity', '0');
        }, 1800);
    }, 500);
}

setTimeout(function () {
    $('.background').first().css('opacity', '1');
}, 1800);

/**************************************************************** */

$(document).ready(function () {
    $('.slider-servicios').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider-history').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.slider-fotos').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });
});


var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('expe'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/experiencia.json'
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/Flecha_lamar2.json'
})

var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('bm1'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/Icon1__lamar2.json'
})

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/Icon2__lamar2.json'
})

var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('bm3'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/Icon3__lamar2.json'
})



// textbanner = document.querySelector(".banner .container .title-content h1");
// textslider = document.querySelector(".slider-servicios .items-slider .info p");
// textbannertitle = textbanner.textContent.toLowerCase().replace(/(\r\n|\n|\r)/gm, "").trimStart().trimEnd();
// textslidertitle = textslider.textContent.toLowerCase();
// padretext = textslider.parentNode.parentNode.parentNode;

// let array1 = [];
// let array = [];
// for (let i = 0; i < textbannertitle.length; i++) {
//     if (textbannertitle[i] != ' ') array1.push(textbannertitle[i])
//     var texto1 = array1.join('');
// }
// for (let i = 0; i < textslidertitle.length; i++) {
//     if (textslidertitle[i] != ' ') array.push(textslidertitle[i])
//     var texto2 = array.join('');
// }

// console.log(texto1);
// console.log(texto2);

// if (texto1 === texto2) {
//     console.log("esta");
//     console.log(padretext);
//     padretext.classList.add('ocultar')
// }


let listaTitle = [];
textSlider = document.querySelectorAll(".slider-servicios .items-slider .info p");
textbanner = document.querySelector(".banner .container .title-content h1");
textbannertitle = textbanner.textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd();

for (let i = 0; i < textSlider.length; i++) {
    textoitem = textSlider[i].textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd();
    listaTitle.push(textoitem);
}

if (listaTitle.includes(textbannertitle)) {
    for (let y = 0; y < textSlider.length; y++) {
        if (textbannertitle === textSlider[y].textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd()) {
            textSlider[y].parentNode.parentNode.parentNode.classList.add('ocultar')
        }
    }
}




