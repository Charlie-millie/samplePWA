import {DOM} from "../utils";
export default class Header {
    constructor({target}) {
        this.target = target;
        this.dom = {};
        this.init();
        this.appendNotification();
    }

    init() {
         this.dom.title = DOM.createElement('h2', {
             attrs: {
                 class: "title"
             },
             text: "sample PWA",
             parent: this.target
         });
    }

    appendNotification() {
        this.dom.notification = DOM.createElement('button', {
            attrs: {
                class: "notification",
            },
            text: `랜덤 알림`,
            parent: this.target
        });

        this.dom.notification.addEventListener('click', () => {
            Notification.requestPermission().then((result) => {
                if (result === 'granted') {
                    this.randomNotification();
                }
            });
        });
    }

    randomNotification() {
        const randomItem = Math.floor(Math.random() * listData.list.length);
        const notifTitle = listData.list[randomItem].CATEGORY;
        const notifBody = listData.list[randomItem].TITLE;
        const notifImg = listData.list[randomItem].IMAGE_FILE;
        const options = {
            body: notifBody,
            icon: notifImg,
        };
        new Notification(notifTitle, options);
        // setTimeout(this.randomNotification, 5000);
    }

}