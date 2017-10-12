(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SPRITE = '<svg xmlns="http://www.w3.org/2000/svg"><symbol id="sharetastic-googleplus" viewBox="0 0 32 32"><title>Google +</title><path d="M28,15.1h-2.3v-2.2h-1.8v2.2h-2.3v1.8h2.3v2.2h1.8v-2.2H28 M13.3,14.7v2.7h4c-0.3,1.6-1.8,2.8-4,2.8c-2.4,0-4.4-2-4.4-4.3s2-4.3,4.4-4.3c1.1,0,2.1,0.4,2.8,1.1v0l2.1-2C17,9.7,15.3,9,13.3,9C9.3,9,6,12.1,6,16s3.3,7,7.3,7c4.2,0,7-2.8,7-6.8c0-0.5-0.1-1-0.1-1.5C20.2,14.7,13.3,14.7,13.3,14.7z"/></symbol><symbol id="sharetastic-facebook" viewBox="0 0 32 32"><title>Facebook</title><path d="M16.8,25v-8.2h2.7l0.4-3.2h-3.1v-2c0-0.9,0.2-1.6,1.5-1.6l1.6,0V7.1c-0.3,0-1.3-0.1-2.4-0.1c-2.4,0-4,1.5-4,4.2v2.4H11v3.2h2.7V25H16.8z"/></symbol><symbol id="sharetastic-twitter" viewBox="0 0 32 32"><title>Twitter</title><path d="M13.7,23c6.8,0,10.5-5.4,10.5-10.1c0-0.2,0-0.3,0-0.5c0.7-0.5,1.3-1.1,1.8-1.8c-0.7,0.3-1.4,0.5-2.1,0.6c0.8-0.4,1.3-1.1,1.6-2c-0.7,0.4-1.5,0.7-2.3,0.9C22.5,9.4,21.5,9,20.5,9c-2,0-3.7,1.6-3.7,3.5c0,0.3,0,0.5,0.1,0.8c-3.1-0.1-5.8-1.6-7.6-3.7c-0.3,0.5-0.5,1.1-0.5,1.8c0,1.2,0.7,2.3,1.6,2.9c-0.6,0-1.2-0.2-1.7-0.4c0,0,0,0,0,0c0,1.7,1.3,3.1,3,3.5c-0.3,0.1-0.6,0.1-1,0.1c-0.2,0-0.5,0-0.7-0.1c0.5,1.4,1.8,2.4,3.4,2.5c-1.3,0.9-2.9,1.5-4.6,1.5c-0.3,0-0.6,0-0.9,0C9.6,22.4,11.6,23,13.7,23"/></symbol><symbol id="sharetastic-tumblr" viewBox="0 0 32 32"><title>Tumblr</title><path d="M17.8,21.7c-1.4,0-1.7-1-1.7-1.8v-5.3h3.3v-3.1h-3.3V7h-2.6c0,0-0.1,0-0.1,0.1C13.3,8.5,12.6,11,10,12v2.6h2v5.6c0,2,1.2,4.9,5,4.8c1.3,0,2.7-0.6,3-1.1l-0.9-2.6C18.9,21.6,18.2,21.7,17.8,21.7z"/></symbol><symbol id="sharetastic-pinterest" viewBox="0 0 32 32"><title>Pinterest</title><path d="M11.5,27c0.5-0.8,2.1-3.1,2.3-4.1c0.2-0.6,0.8-2.9,0.8-2.9c0.4,0.7,1.6,1.4,2.9,1.4c3.8,0,6.5-3.3,6.5-7.5c0-4-3.4-6.9-7.7-6.9C10.9,7,8,10.5,8,14.3c0,1.8,1,4,2.5,4.7c0.2,0.1,0.4,0.1,0.4-0.2c0-0.2,0.3-1,0.3-1.4c0-0.1,0-0.2-0.1-0.3c-0.5-0.6-0.9-1.7-0.9-2.7c0-2.6,2.1-5.2,5.7-5.2c3.1,0,5.2,2,5.2,4.9c0,3.3-1.7,5.5-3.9,5.5c-1.2,0-2.2-1-1.9-2.2c0.4-1.4,1-3,1-4c0-0.9-0.5-1.7-1.6-1.7c-1.3,0-2.3,1.2-2.3,2.9c0,1.1,0.4,1.8,0.4,1.8s-1.2,5-1.5,6C11.2,23.3,11.4,26,11.5,27"/></symbol><symbol id="sharetastic-instagram" viewBox="0 0 32 32"><title>Instagram</title><path d="M24.9,12.3c0-1-0.2-1.6-0.4-2.2c-0.2-0.6-0.5-1.1-1-1.6c-0.5-0.5-1-0.8-1.6-1c-0.6-0.2-1.2-0.4-2.2-0.4C18.8,7,18.4,7,16,7s-2.8,0-3.7,0.1c-1,0-1.6,0.2-2.2,0.4C9.5,7.7,9,8,8.5,8.5c-0.5,0.5-0.8,1-1,1.6c-0.2,0.6-0.4,1.2-0.4,2.2C7,13.2,7,13.6,7,16c0,2.4,0,2.8,0.1,3.7c0,1,0.2,1.6,0.4,2.2c0.2,0.6,0.5,1.1,1,1.6c0.5,0.5,1,0.8,1.6,1c0.6,0.2,1.2,0.4,2.2,0.4c1,0,1.3,0.1,3.7,0.1s2.8,0,3.7-0.1c1,0,1.6-0.2,2.2-0.4c0.6-0.2,1.1-0.5,1.6-1c0.5-0.5,0.8-1,1-1.6c0.2-0.6,0.4-1.2,0.4-2.2c0-1,0.1-1.3,0.1-3.7C25,13.6,25,13.2,24.9,12.3z M23.3,19.6c0,0.9-0.2,1.4-0.3,1.7c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.1-0.8,0.3-1.7,0.3c-0.9,0-1.2,0.1-3.6,0.1s-2.7,0-3.6-0.1c-0.9,0-1.4-0.2-1.7-0.3c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1c-0.1-0.3-0.3-0.8-0.3-1.7c0-0.9-0.1-1.2-0.1-3.6s0-2.7,0.1-3.6c0-0.9,0.2-1.4,0.3-1.7c0.2-0.4,0.4-0.7,0.7-1s0.6-0.5,1-0.7c0.3-0.1,0.8-0.3,1.7-0.3c0.9,0,1.2-0.1,3.6-0.1s2.7,0,3.6,0.1c0.9,0,1.4,0.2,1.7,0.3c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.1,0.3,0.3,0.8,0.3,1.7c0,0.9,0.1,1.2,0.1,3.6S23.4,18.7,23.3,19.6z"/><path d="M16,11.4c-2.6,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S18.6,11.4,16,11.4z M16,19c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S17.7,19,16,19z"/><circle cx="20.8" cy="11.2" r="1.1"/></symbol><symbol id="sharetastic-linkedin" viewBox="0 0 32 32"><title>LinkedIn</title><path d="M11.6,23H8.3V12.3h3.3V23z M9.9,10.9C8.9,10.9,8,10,8,8.9C8,7.9,8.9,7,9.9,7c1.1,0,1.9,0.9,1.9,1.9C11.8,10,11,10.9,9.9,10.9z M24,23h-3.3v-5.2c0-1.2,0-2.8-1.7-2.8c-1.7,0-2,1.4-2,2.7V23h-3.3V12.3h3.2v1.5h0c0.4-0.8,1.5-1.7,3.1-1.7c3.4,0,4,2.2,4,5.1V23z"/></symbol><symbol id="sharetastic-flickr" viewBox="0 0 32 32"><title>Flickr</title><circle cx="10" cy="16" r="4"/><circle opacity="0.5" cx="22" cy="16" r="4"/></symbol><symbol id="sharetastic-email" viewBox="0 0 32 32"><title>Email</title><path d="M8,22h16c0.5,0,0.9-0.4,1-0.9l-5.4-5.4l-2.2,1.5c-0.4,0.3-0.9,0.4-1.4,0.4s-1-0.1-1.4-0.4l-2.2-1.5L7,21.1C7.1,21.6,7.5,22,8,22z"/><polygon points="11.6,15.2 7,12.1 7,19.8 "/><polygon points="25,19.7 25,12.1 20.5,15.2 "/><path d="M16.5,16.6l8.5-5.8c-0.1-0.5-0.5-0.8-1-0.8H8c-0.5,0-0.9,0.4-1,0.8l8.5,5.8C15.8,16.8,16.2,16.8,16.5,16.6z"/></symbol><symbol id="sharetastic-whatsapp" viewBox="0 0 32 32"><title>WhatsApp</title><path d="M22.361 9.6c-1.688-1.692-3.933-2.622-6.326-2.622-4.927 0-8.938 4.011-8.938 8.941 0 1.575 0.412 3.116 1.195 4.469l-1.269 4.634 4.74-1.244c1.308 0.712 2.777 1.089 4.271 1.089h0.003c0 0 0 0 0 0 4.927 0 8.941-4.011 8.941-8.941 0-2.389-0.93-4.634-2.619-6.326zM16.039 23.359v0c-1.336 0-2.643-0.359-3.785-1.036l-0.271-0.162-2.812 0.737 0.751-2.742-0.176-0.282c-0.747-1.181-1.138-2.548-1.138-3.954 0-4.099 3.334-7.433 7.436-7.433 1.984 0 3.852 0.775 5.255 2.178 1.403 1.406 2.175 3.271 2.175 5.258-0.003 4.102-3.338 7.436-7.433 7.436zM20.113 17.79c-0.222-0.113-1.322-0.652-1.526-0.726s-0.352-0.113-0.504 0.113c-0.148 0.222-0.578 0.726-0.708 0.878-0.13 0.148-0.261 0.169-0.483 0.056s-0.944-0.349-1.797-1.11c-0.663-0.592-1.114-1.325-1.244-1.547s-0.014-0.345 0.099-0.455c0.102-0.099 0.222-0.261 0.335-0.391s0.148-0.222 0.222-0.374c0.074-0.148 0.039-0.278-0.018-0.391s-0.504-1.212-0.687-1.66c-0.18-0.437-0.367-0.377-0.504-0.384-0.13-0.007-0.278-0.007-0.426-0.007s-0.391 0.056-0.596 0.278c-0.204 0.222-0.782 0.765-0.782 1.864s0.8 2.16 0.913 2.312c0.113 0.148 1.575 2.407 3.817 3.373 0.532 0.229 0.948 0.367 1.272 0.472 0.536 0.169 1.022 0.145 1.406 0.088 0.43-0.063 1.322-0.539 1.508-1.061s0.187-0.969 0.13-1.061c-0.053-0.099-0.201-0.155-0.426-0.268z"></path></symbol><symbol id="sharetastic-print" viewBox="0 0 32 32"><title>Print</title><rect x="12" y="18" width="8" height="1"/><rect x="12" y="20" width="8" height="1"/><rect x="12" y="22" width="8" height="1"/><path d="M24,12h-2V7H10v5H8c-0.5,0-1,0.5-1,1v6c0,0.5,0.5,1,1,1h2v5h12v-5h2c0.5,0,1-0.5,1-1v-6C25,12.5,24.5,12,24,12z M11,8h10v4H11V8z M21,24H11v-4v-2v-1h10v1v2V24z M23,15c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1C24,14.6,23.6,15,23,15z"/></symbol></svg>';

var Sharetastic = function () {
    function Sharetastic(element, options) {
        _classCallCheck(this, Sharetastic);

        this.addSpriteToPage();
        this.element = element;
        this.page = this.generateOpenGraph();
        this.options = this.generateOptions(options);
        this.element.classList.add('sharetastic');
        this.element.classList.add('sharetastic--initialized');
    }

    _createClass(Sharetastic, [{
        key: 'addSpriteToPage',
        value: function addSpriteToPage() {
            var spriteExistsOnPage = document.querySelectorAll('.sharetastic__sprite').length > 0;
            var wrapper = document.createElement('div');
            wrapper.classList.add('sharetastic__sprite');
            wrapper.innerHTML = SPRITE;
            if (!spriteExistsOnPage) {
                document.body.insertBefore(wrapper, document.body.firstChild);
            }
        }
    }, {
        key: 'getMetaContent',
        value: function getMetaContent(prop) {
            var meta = document.querySelector('meta[property="' + prop + '"]');
            return meta.getAttribute('content');
        }
    }, {
        key: 'generateOpenGraph',
        value: function generateOpenGraph() {
            return {
                url: this.element.getAttribute('data-url') || this.getMetaContent('og:url'),
                title: this.element.getAttribute('data-title') || this.getMetaContent('og:title'),
                description: this.element.getAttribute('data-description') || this.getMetaContent('og:description'),
                image: this.element.getAttribute('data-image') || this.getMetaContent('og:image')
            };
        }
    }, {
        key: 'generateUrl',
        value: function generateUrl(append) {
            if (!this.page.url) return;
            var prefix = append || '';
            return prefix + encodeURIComponent(this.page.url);
        }
    }, {
        key: 'generateTitle',
        value: function generateTitle(append) {
            if (!this.page.title) return;
            var prefix = append || '';
            return prefix + encodeURIComponent(this.page.title);
        }
    }, {
        key: 'generateDescription',
        value: function generateDescription(append) {
            if (!this.page.description) return;
            var prefix = append || '';
            return prefix + encodeURIComponent(this.page.description);
        }
    }, {
        key: 'generateImage',
        value: function generateImage(append) {
            if (!this.page.image) return;
            var prefix = append || '';
            return prefix + encodeURIComponent(this.page.image);
        }
    }, {
        key: 'generateOptions',
        value: function generateOptions(options) {
            var defaults = {
                popup: true,
                services: {
                    facebook: {
                        order: 0,
                        name: 'Facebook',
                        href: 'https://www.facebook.com/sharer/sharer.php?' + this.generateUrl('u=') + this.generateTitle('&title=') + this.generateDescription('&description='),
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-facebook'
                        }
                    },
                    instagram: false,
                    twitter: {
                        order: 2,
                        name: 'Twitter',
                        href: 'http://twitter.com/home?status=' + this.generateTitle() + this.generateUrl(' - '),
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-twitter'
                        }
                    },
                    pinterest: {
                        order: 3,
                        name: 'Pinterest',
                        href: 'http://pinterest.com/pin/create/link/?' + this.generateUrl('url=') + this.generateTitle('&description=') + this.generateImage('&media='),
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-pinterest'
                        }
                    },
                    linkedin: {
                        order: 4,
                        name: 'LinkedIn',
                        href: 'https://www.linkedin.com/shareArticle?mini=true' + this.generateUrl('&url=') + this.generateTitle('&title=') + this.generateDescription('&summary='),
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-linkedin'
                        }
                    },
                    googleplus: {
                        order: 5,
                        name: 'Google +',
                        href: 'https://plus.google.com/share?' + this.generateUrl('url='),
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-googleplus'
                        }
                    },
                    flickr: false,
                    tumblr: {
                        order: 7,
                        name: 'Tumblr',
                        href: 'http://www.tumblr.com/share/link?' + this.generateUrl('&url=') + this.generateTitle('&name=') + this.generateDescription('&description='),
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-tumblr'
                        }
                    },
                    email: {
                        order: 8,
                        name: 'Email',
                        href: 'mailto:?Body=' + this.page.title + '%0A' + this.page.description + '%0A' + this.page.url,
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-email'
                        }
                    },
                    whatsapp: {
                        order: 8,
                        name: 'WhatsApp',
                        href: 'https://api.whatsapp.com/send?text=' + this.page.title + ' - ' + this.page.description + ' ' + this.page.url,
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-whatsapp'
                        }
                    },
                    print: {
                        order: 9,
                        name: 'Print',
                        href: 'window.print()',
                        icon: {
                            width: 32,
                            height: 32,
                            id: 'sharetastic-print'
                        }
                    }
                }
            };

            var exportOptions = $.extend(true, defaults, options);

            if (this.element.hasAttribute('data-tweet')) {
                exportOptions.services.twitter.href = 'http://twitter.com/home?status=' + encodeURIComponent(this.element.getAttribute('data-tweet'));
            }

            return exportOptions;
        }
    }, {
        key: 'popup',
        value: function popup(url, width, height) {
            var left = screen.width / 2 - width / 2;
            var top = screen.height / 2 - height / 2;
            window.open(url, "", 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
        }
    }, {
        key: 'build',
        value: function build() {
            var _this = this;

            this.serviceOrder.map(function (key) {
                var action = key === 'print' ? 'onclick' : 'href';
                var link = document.createElement('a');
                var self = _this;
                var service = _this.options.services[key];

                link.classList.add('sharetastic__button');
                link.classList.add('sharetastic__button--' + key);
                link.setAttribute(action, service.href);
                link.setAttribute('target', '_blank');
                link.innerHTML = '<svg width="' + service.icon.width + '"" height="' + service.icon.height + '" class="sharetastic__icon"><use xlink:href="#' + service.icon.id + '"/></svg>' + service.name;

                if (key !== 'email' && key !== 'print' && _this.options.popup) {
                    link.addEventListener('click', function (e) {
                        e.preventDefault();
                        self.popup(e.currentTarget.getAttribute('href'), 500, 300);
                    });
                }
                _this.element.appendChild(link);
            });
        }
    }, {
        key: 'sort',
        value: function sort() {
            var _this2 = this;

            this.serviceOrder = [];
            Object.keys(this.options.services).map(function (k, i) {
                Object.keys(_this2.options.services).map(function (key) {
                    if (_this2.options.services[key].order === i) {
                        _this2.serviceOrder.push(key);
                    }
                });
            });
            this.build();
        }
    }]);

    return Sharetastic;
}();

(function (window, $) {

    $.fn.sharetastic = function (options) {
        return this.each(function () {
            var element = $(this);
            var isInitialized = element.hasClass('sharetastic--initialized');
            if (!isInitialized) {
                new Sharetastic(element[0], options).sort();
            }
        });
    };
})(window, jQuery);

},{}]},{},[1]);
