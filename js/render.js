let observe = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if (box.isIntersecting) {
            box.target.style.opacity = 1;
        } else {
            box.target.style.opacity = 0;
        }
    });
});

let div = document.querySelectorAll(".content1");
observe.observe(div[0]);
observe.observe(div[1]);
observe.observe(div[2]);
observe.observe(div[3]);
observe.observe(div[4]);
