
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
                    
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function $qs(selector) {
    return document.querySelector(selector);
  }
  var DOM = /*#__PURE__*/function () {
    function DOM() {
      _classCallCheck(this, DOM);

      throw new Error("[!] This is static class. Creating instances is forbidden.");
    }

    _createClass(DOM, null, [{
      key: "createElement",
      value: function createElement(tagName, _ref) {
        var attrs = _ref.attrs,
            text = _ref.text,
            callback = _ref.callback,
            parent = _ref.parent;
        var element = document.createElement("".concat(tagName));

        if (attrs) {
          DOM.insertAttributes(element, attrs);
        }

        if (callback) {
          callback(element);
        }

        if (text) {
          element.innerHTML = text;
        }

        if (parent instanceof HTMLElement) {
          parent.appendChild(element);
        }

        return element;
      }
    }, {
      key: "insertAttributes",
      value: function insertAttributes(element, attrs) {
        if (element instanceof HTMLElement) {
          Object.keys(attrs).forEach(function (prop) {
            element.setAttribute(prop, attrs[prop]);
          });
        }
      }
    }]);

    return DOM;
  }();

  var SamplePWA = /*#__PURE__*/function () {
    function SamplePWA(_ref) {
      var _this = this;

      var target = _ref.target;

      _classCallCheck(this, SamplePWA);

      this.target = target;
      this.dom = {
        items: []
      };
      this.isObserver = 'IntersectionObserver' in window;

      if (this.isObserver) {
        this.observer = new IntersectionObserver(function (items) {
          items.forEach(function (item) {
            if (item.isIntersecting) {
              _this.loadImages(item.target);

              _this.observer.unobserve(item.target);
            }
          });
        });
      }

      this.registerServiceWorker();
      this.init();
    }

    _createClass(SamplePWA, [{
      key: "init",
      value: function init() {
        this.dom.listBox = DOM.createElement('div', {
          attrs: {
            "class": "listBox"
          },
          parent: this.target
        });
        this.appendList();
      }
    }, {
      key: "appendList",
      value: function appendList() {
        this.dom.itemList = DOM.createElement('ul', {
          attrs: {
            "class": "itemList"
          },
          parent: this.dom.listBox
        });

        for (var i = 0; i < listData.list.length; i++) {
          this.dom.items[i] = DOM.createElement('li', {
            attrs: {
              "class": "listItem"
            },
            parent: this.dom.itemList
          });
          var img = DOM.createElement('img', {
            attrs: {
              // class: "listItem",
              src: "./build/assets/impPlaceholder.png",
              'data-src': listData.list[i].IMAGE_FILE,
              alt: ""
            },
            parent: this.dom.items[i]
          });
          DOM.createElement('div', {
            attrs: {
              "class": "textBox"
            },
            text: "<h3>".concat(listData.list[i].TITLE, "</h3><span>").concat(listData.list[i].CATEGORY, "</span>"),
            parent: this.dom.items[i]
          });

          if (this.isObserver) {
            this.observer.observe(img);
          } else {
            this.loadImages(img);
          }
        }
      }
    }, {
      key: "registerServiceWorker",
      value: function registerServiceWorker() {
        // Registering Service Worker
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('./serviceWorker.js');
        }
      }
    }, {
      key: "loadImages",
      value: function loadImages(image) {
        image.setAttribute('src', image.getAttribute('data-src'));

        image.onload = function () {
          image.removeAttribute('data-src');
        };
      }
    }]);

    return SamplePWA;
  }();

  var Header = /*#__PURE__*/function () {
    function Header(_ref) {
      var target = _ref.target;

      _classCallCheck(this, Header);

      this.target = target;
      this.dom = {};
      this.init();
      this.appendNotification();
    }

    _createClass(Header, [{
      key: "init",
      value: function init() {
        this.dom.title = DOM.createElement('h2', {
          attrs: {
            "class": "title"
          },
          text: "sample PWA",
          parent: this.target
        });
      }
    }, {
      key: "appendNotification",
      value: function appendNotification() {
        this.dom.notification = DOM.createElement('button', {
          attrs: {
            "class": "notification"
          },
          text: "\uB79C\uB364 \uC54C\uB9BC",
          parent: this.target
        });
        this.dom.notification.addEventListener('click', this.sendNotify.bind(this));
      }
    }, {
      key: "sendNotify",
      value: function sendNotify() {
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
    }, {
      key: "randomNotification",
      value: function randomNotification() {
        var randomItem = Math.floor(Math.random() * listData.list.length);
        var notifTitle = listData.list[randomItem].CATEGORY;
        var notifBody = listData.list[randomItem].TITLE;
        var notifImg = listData.list[randomItem].IMAGE_FILE;
        var options = {
          body: notifBody,
          icon: notifImg
        };
        new Notification(notifTitle, options); // setTimeout(this.randomNotification, 5000);
      }
    }]);

    return Header;
  }();

  function runSampleApp() {
    new Header({
      target: $qs("header")
    });
    new SamplePWA({
      target: $qs(".content")
    });
  }

  runSampleApp();

})();
//# sourceMappingURL=samplePWA.js.map
