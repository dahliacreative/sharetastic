// --------------------------------------------------------------------------
//      _                    _            _   _      
//     | |                  | |          | | (_)     
//  ___| |__   __ _ _ __ ___| |_ __ _ ___| |_ _  ___ 
// / __| '_ \ / _` | '__/ _ \ __/ _` / __| __| |/ __|
// \__ \ | | | (_| | | |  __/ || (_| \__ \ |_| | (__ 
// |___/_| |_|\__,_|_|  \___|\__\__,_|___/\__|_|\___|
//
// --------------------------------------------------------------------------
//  Version: 1.3.5
//   Author: Simon Sturgess
//  Website: dahliacreative.github.io/sharetastic
//     Repo: github.com/dahliacreative/sharetastic
//   Issues: github.com/dahliacreative/sharetastic/issues
// --------------------------------------------------------------------------

(function(window, $) {

  $.fn.sharetastic = function(options) {
    var spriteOption = options && options.hasOwnProperty('sprite'),
        sprite = spriteOption ? options.sprite : 'sharetastic.svg',
        spriteExists = $('.sharetastic__svg').length > 0,
        storedSprite = localStorage.getItem(document.domain + '-sharetastic-svg');

    if(storedSprite) {
      $('body').prepend(storedSprite);
    } else if(this.length > 0 && !spriteExists) {
      $.ajax({
        url: sprite,
        success: function(data) {
          var svg = data.documentElement;
          $('body').prepend(svg);
          localStorage.setItem(document.domain + '-sharetastic-svg', new XMLSerializer().serializeToString($(svg)[0]));
        },
        error: function(e) {
          console.log('SHARETASTIC ERROR\nStatus: ' + e.status + '\n' + sprite + ' - ' + e.statusText);
        }
      });
    }
    

    return this.each(function() {
      var el = $(this),
          initialized = el.hasClass('sharetastic--initialized');
      if(!initialized) {
        new Sharetastic(el, options).build();
      }
    });
  };


  // --------------------------------------------------------------------------
  // Sharetastic Constructor
  // --------------------------------------------------------------------------
   var Sharetastic = function(el, options) {

    // Get page Details
    this.page = {
      url: this.getMetaContent('og:url'),
      title: this.getMetaContent('og:title'),
      description: this.getMetaContent('og:description'),
      image: this.getMetaContent('og:image')
    };

    // Initialise the element
    this.el = el;
    this.el.addClass('sharetastic sharetastic--initialized');

    var defaults = {
      sprite: 'sharetastic.svg',
      popup: true,
      services: {
        facebook: {
          name: 'Facebook',
          href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.page.url) + '&title=' + encodeURIComponent(this.page.title) + '&description=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-facebook'
          }
        },
        instagram: false,
        twitter: {
          name: 'Twitter',
          href: 'http://twitter.com/home?status=' + encodeURIComponent(this.page.title) + ' - ' + encodeURIComponent(this.page.description) + ' - ' + encodeURIComponent(this.page.url),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-twitter'
          }
        },
        pinterest: {
          name: 'Pinterest',
          href: 'http://pinterest.com/pin/create/link/?url=' + encodeURIComponent(this.page.url) + '&description=' + encodeURIComponent(this.page.title) + ' - ' + encodeURIComponent(this.page.description) + '&media=' + encodeURIComponent(this.page.image),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-pinterest'
          }
        },
        linkedin: {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(this.page.url) + '&title=' + encodeURIComponent(this.page.title) + '&summary=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-linkedin'
          }
        },
        googleplus: {
          name: 'Google +',
          href: 'https://plus.google.com/share?url=' + encodeURIComponent(this.page.url),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-googleplus'
          }
        },
        flickr: false,
        tumblr: {
          name: 'Tumblr',
          href: 'http://www.tumblr.com/share/link?url=' + encodeURIComponent(this.page.url) + '&name=' + encodeURIComponent(this.page.title) + '&description=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-tumblr'
          }
        },
        email: {
          name: 'Email',
          href: 'mailto:?Body=' + this.page.title + '%0A' + this.page.description + '%0A' + this.page.url,
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-email'
          }
        },
        print: {
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

    if(options && options.hasOwnProperty('services')) {
      if(options.services.instagram) {
        defaults.services.instagram = {
          name: 'Instagram',
          href: 'https://www.instagram.com/',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-instagram'
          }
        };
      }
      if(options.services.flickr) {
        defaults.services.flickr = {
          name: 'Flickr',
          href: 'https://www.flickr.com/',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-flickr'
          }
        };
      }
    }
        
    // Extend Options
    this.options = $.extend(true, defaults, options);

  };

