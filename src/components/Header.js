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

        this.dom.notification.addEventListener('click', this.sendNotify.bind(this));
    }

    sendNotify() {
      /*  if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            this.randomNotification();
        }
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission((permission) => {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    this.randomNotification();
                }
            });
        }*/

      /*  Notification.requestPermission((result) => {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then((registration) => {
                    const randomItem = Math.floor(Math.random() * listData.list.length);
                    registration.showNotification(listData.list[randomItem].CATEGORY, {
                        body:listData.list[randomItem].TITLE,
                        icon: listData.list[randomItem].IMAGE_FILE,
                    });
                });
            }
        });*/
        this.randomNotification();
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