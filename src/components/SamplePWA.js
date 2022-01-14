import {DOM} from "../utils";
import "../style/style.scss";

export default class SamplePWA {
    constructor({target}) {
        this.target = target;
        this.dom = {
            items: []
        };
        this.isObserver = 'IntersectionObserver' in window;
        if (this.isObserver) {
            this.observer = new IntersectionObserver((items) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        this.loadImages(item.target);
                        this.observer.unobserve(item.target);
                    }
                });
            });
        }

        this.registerServiceWorker();
        this.init();
    }

    init() {

        this.dom.listBox = DOM.createElement('div', {
            attrs: {
                class: "listBox"
            },
            parent: this.target
        });
        this.appendList();

    }

    appendList() {
        this.dom.itemList = DOM.createElement('ul', {
            attrs: {
                class: "itemList"
            },
            parent: this.dom.listBox
        });

        for (let i = 0; i < listData.list.length; i++) {
            this.dom.items[i] = DOM.createElement('li', {
                attrs: {
                    class: "listItem",
                },
                parent: this.dom.itemList
            });

            const img = DOM.createElement('img', {
                attrs: {
                    // class: "listItem",
                    src: "./build/assets/impPlaceholder.png",
                    'data-src': listData.list[i].IMAGE_FILE,
                    alt: ""
                },
                parent: this.dom.items[i]
            });

            const textBox = DOM.createElement('div', {
                attrs: {
                    class: "textBox",
                },
                text: `<h3>${listData.list[i].TITLE}</h3><span>${listData.list[i].CATEGORY}</span>`,
                parent: this.dom.items[i]
            });

            if (this.isObserver) {
                this.observer.observe(img);
            } else {
                this.loadImages(img);
            }
        }
    }

    registerServiceWorker() {
        // Registering Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./serviceWorker.js');
        }
    }

    loadImages(image) {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    }




}