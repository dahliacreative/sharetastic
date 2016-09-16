// --------------------------------------------------------------------------
//      _                    _            _   _      
//     | |                  | |          | | (_)     
//  ___| |__   __ _ _ __ ___| |_ __ _ ___| |_ _  ___ 
// / __| '_ \ / _` | '__/ _ \ __/ _` / __| __| |/ __|
// \__ \ | | | (_| | | |  __/ || (_| \__ \ |_| | (__ 
// |___/_| |_|\__,_|_|  \___|\__\__,_|___/\__|_|\___|
//
// --------------------------------------------------------------------------
//  Version: 1.3.4
//   Author: Simon Sturgess
//  Website: dahliacreative.github.io/sharetastic
//     Repo: github.com/dahliacreative/sharetastic
//   Issues: github.com/dahliacreative/sharetastic/issues
// --------------------------------------------------------------------------

(function(window, $) {

  $.fn.sharetastic = function(options) {
    var spriteOption = options && options.hasOwnProperty('sprite'),
        sprite = spriteOption ? options.sprite : 'sharetastic.svg';

    if(this.length > 0) {
      $.ajax({
        url: sprite,
        success: function(data) {
          $('body').prepend(data.documentElement);
        },
        error: function(e) {
          console.log('SHARETASTIC ERROR\nStatus: ' + e.status + '\n' + sprite + ' - ' + e.statusText);
        }
      });
    }

    return this.each(function() {
      new Sharetastic($(this), options).build();
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
    this.el.addClass('sharetastic');
    
    // Extend Options
    this.options = $.extend(true, {
      sprite: 'sharetastic.svg',
      popup: true,
      services: {
        facebook: {
          name: 'Facebook',
          enabled: true,
          href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.page.url) + '&title=' + encodeURIComponent(this.page.title) + '&description=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-facebook'
          }
        },
        instagram: {
          name: 'Instagram',
          enabled: false,
          href: 'https://www.instagram.com/',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-instagram'
          }
        },
        twitter: {
          name: 'Twitter',
          enabled: true,
          href: 'http://twitter.com/home?status=' + encodeURIComponent(this.page.title) + ' - ' + encodeURIComponent(this.page.url),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-twitter'
          }
        },
        pinterest: {
          name: 'Pinterest',
          enabled: true,
          href: 'http://pinterest.com/pin/create/link/?url=' + encodeURIComponent(this.page.url) + '&description=' + encodeURIComponent(this.page.title) + ' - ' + encodeURIComponent(this.page.description) + '&media=' + encodeURIComponent(this.page.image),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-pinterest'
          }
        },
        linkedin: {
          name: 'LinkedIn',
          enabled: true,
          href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(this.page.url) + '&title=' + encodeURIComponent(this.page.title) + '&summary=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-linkedin'
          }
        },
        googleplus: {
          name: 'Google +',
          enabled: true,
          href: 'https://plus.google.com/share?url=' + encodeURIComponent(this.page.url),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-googleplus'
          }
        },
        flickr: {
          name: 'Flickr',
          enabled: false,
          href: 'https://www.flickr.com/',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-flickr'
          }
        },
        tumblr: {
          name: 'Tumblr',
          enabled: true,
          href: 'http://www.tumblr.com/share/link?url=' + encodeURIComponent(this.page.url) + '&name=' + encodeURIComponent(this.page.title) + '&description=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-tumblr'
          }
        },
        email: {
          name: 'Email',
          enabled: true,
          href: 'mailto:?Body=%0A%0A' + this.page.title + '%0A' + this.page.description + '%0A' + this.page.url,
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-email'
          }
        },
        print: {
          name: 'Print',
          enabled: true,
          href: 'window.print()',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-print'
          }
        }
      }
    }, options);

  };

