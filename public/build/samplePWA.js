
                        ;(function () {
                            if (typeof window === 'undefined') {
                                return;
                            }

                            window.__css_reload = function () {
                                if (window.__styleLinkTimeout) {
                                    cancelAnimationFrame(window.__styleLinkTimeout);
                                }

                                window.__styleLinkTimeout = requestAnimationFrame(() => {
                                    var link = document.querySelector('link[href*="assets/samplePWA-9109b454.css"]');

                                    if (link) {
                                        if (!window.__styleLinkHref) {
                                            window.__styleLinkHref = link.getAttribute('href');
                                        }

                                        var newLink = document.createElement('link');
                                        newLink.setAttribute('rel', 'stylesheet');
                                        newLink.setAttribute('type', 'text/css');
                                        newLink.setAttribute('href', window.__styleLinkHref + '?' + Date.now());
                                        newLink.onload = () => {
                                            link.remove();
                                        };

                                        document.head.appendChild(newLink);
                                    }
                                });
                            }
                        })();
                    !function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(t){return document.querySelector(t)}var r=function(){function e(){throw t(this,e),new Error("[!] This is static class. Creating instances is forbidden.")}return i(e,null,[{key:"createElement",value:function(t,i){var n=i.attrs,r=i.text,a=i.callback,s=i.parent,o=document.createElement("".concat(t));return n&&e.insertAttributes(o,n),a&&a(o),r&&(o.innerHTML=r),s instanceof HTMLElement&&s.appendChild(o),o}},{key:"insertAttributes",value:function(t,e){t instanceof HTMLElement&&Object.keys(e).forEach((function(i){t.setAttribute(i,e[i])}))}}]),e}(),a=function(){function e(i){var n=this,r=i.target;t(this,e),this.target=r,this.dom={items:[]},this.isObserver="IntersectionObserver"in window,this.isObserver&&(this.observer=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(n.loadImages(t.target),n.observer.unobserve(t.target))}))}))),this.registerServiceWorker(),this.init()}return i(e,[{key:"init",value:function(){this.dom.listBox=r.createElement("div",{attrs:{class:"listBox"},parent:this.target}),this.appendList()}},{key:"appendList",value:function(){this.dom.itemList=r.createElement("ul",{attrs:{class:"itemList"},parent:this.dom.listBox});for(var t=0;t<listData.list.length;t++){this.dom.items[t]=r.createElement("li",{attrs:{class:"listItem"},parent:this.dom.itemList});var e=r.createElement("img",{attrs:{src:"./build/assets/impPlaceholder.png","data-src":listData.list[t].IMAGE_FILE,alt:""},parent:this.dom.items[t]});r.createElement("div",{attrs:{class:"textBox"},text:"<h3>".concat(listData.list[t].TITLE,"</h3><span>").concat(listData.list[t].CATEGORY,"</span>"),parent:this.dom.items[t]}),this.isObserver?this.observer.observe(e):this.loadImages(e)}}},{key:"registerServiceWorker",value:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./serviceWorker.js")}},{key:"loadImages",value:function(t){t.setAttribute("src",t.getAttribute("data-src")),t.onload=function(){t.removeAttribute("data-src")}}}]),e}();new(function(){function e(i){var n=i.target;t(this,e),this.target=n,this.dom={},this.init(),this.appendNotification()}return i(e,[{key:"init",value:function(){this.dom.title=r.createElement("h2",{attrs:{class:"title"},text:"sample PWA",parent:this.target})}},{key:"appendNotification",value:function(){var t=this;this.dom.notification=r.createElement("button",{attrs:{class:"notification"},text:"랜덤 알림",parent:this.target}),this.dom.notification.addEventListener("click",(function(){Notification.requestPermission().then((function(e){"granted"===e&&t.randomNotification()}))}))}},{key:"randomNotification",value:function(){var t=Math.floor(Math.random()*listData.list.length),e=listData.list[t].CATEGORY,i=listData.list[t].TITLE,n=listData.list[t].IMAGE_FILE;new Notification(e,{body:i,icon:n})}}]),e}())({target:n("header")}),new a({target:n(".content")})}();
//# sourceMappingURL=samplePWA.js.map
