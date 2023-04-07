let cases = [
    {
        images: ["avatar-1.svg", "avatar-2.svg", "avatar-3.svg"],
        current: 0,
        id: "avatar-component",
    },
    {
        images: [
            "pic-1.svg",
            "pic-2.svg",
            "pic-3.svg",
            "pic-4.svg",
            "pic-5.svg",
        ],
        current: 0,
        id: "other-avatar-component",
    },
];

function replaceImages(items) {
    setInterval(function () {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.current < item.images.length - 1) {
                item.current++;
            } else {
                item.current = 0;
            }
            let element = document.getElementById(item.id);
            element.src = item.images[item.current];
        }
    }, 2000);
}

replaceImages(cases);
