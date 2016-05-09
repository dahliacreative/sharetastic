// --------------------------------------------------------------------------
//            _           _                   
//   ___  ___| | ___  ___| |_ _ __ ___  _ __  
//  / __|/ _ \ |/ _ \/ __| __| '__/ _ \| '_ \ 
//  \__ \  __/ |  __/ (__| |_| | | (_) | | | |
//  |___/\___|_|\___|\___|\__|_|  \___/|_| |_|
//
// --------------------------------------------------------------------------
//  Version: 1.0
//   Author: Simon Sturgess
//  Website: dahliacreative.github.io/selectron
//     Docs: dahliacreative.github.io/selectron/docs
//     Repo: github.com/dahliacreative/selectron
//   Issues: github.com/dahliacreative/selectron/issues
// --------------------------------------------------------------------------

(function(window, $) {

  $.fn.sharetastic = function(options) {
    var options = $.extend(options, {
      sprite: 'sharetastic.svg',
      feeds: {
        facebook: true,
        twitter: true,
        linkedin: true,
        email: true
      }
    });
    var ajax = new XMLHttpRequest();
    ajax.open("GET", options.sprite, true);
    ajax.responseType = "document";
    ajax.onload = function(e) {
      document.body.insertBefore(ajax.responseXML.documentElement, document.body.childNodes[0]);
    }
    ajax.send();
    return this.each(function() {
      new Sharetastic($(this), options).build();
    });
  };

})(window, jQuery);

// --------------------------------------------------------------------------
// Sharetastic Constructor
// --------------------------------------------------------------------------
 var Sharetastic = function(el, options) {
  this.el = el;
  this.el.addClass('sharetastic');

  this.options = options;

  this.page = {
    url: window.location,
    title: document.title,
    description: this.getMetaContent('description')
  }

  this.feeds = {
    facebook: {
      class: 'sharetastic__button sharetastic__button--facebook',
      href: 'https://www.facebook.com/sharer/sharer.php?u=' + this.page.url + '&title=' + this.page.title + '&description=' + this.page.description,
      target: '_blank',
      icon: '<svg width="10" height="19" class="sharetastic__icon"><use xlink:href="#facebook"/></svg>'
    },
    twitter: {
      class: 'sharetastic__button sharetastic__button--twitter',
      href: 'http://twitter.com/home?status=' + this.page.title + ' - ' + this.page.description + ' - ' + this.page.url,
      target: '_blank',
      icon: '<svg width="18" height="14" class="sharetastic__icon"><use xlink:href="#twitter"/></svg>'
    },
    linkedin: {
      class: 'sharetastic__button sharetastic__button--linkedin',
      href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + this.page.url + '&title=' + this.page.title + '&summary=' + this.page.description,
      target: '_blank',
      icon: '<svg width="18" height="18" class="sharetastic__icon"><use xlink:href="#linkedin"/></svg>'
    },
    email: {
      class: 'sharetastic__button sharetastic__button--email',
      href: 'mailto:?Body=%0A%0A' + this.page.title + '%0A' + this.page.description + '%0A' + this.page.url,
      icon: '<svg width="20" height="13" class="sharetastic__icon"><use xlink:href="#email"/></svg>'
    }
  }
};

// --------------------------------------------------------------------------
// Build the DOM
// --------------------------------------------------------------------------
Sharetastic.prototype.build = function() {
  for(var key in this.options.feeds) {
    if(this.options.feeds[key]) {
      var link = $('<a/>');
      link
        .addClass(this.feeds[key].class)
        .attr('href', this.feeds[key].href)
        .attr('target', this.feeds[key].target)
        .html(this.feeds[key].icon);
      this.el.append(link);
    }
  }
};

// --------------------------------------------------------------------------
// Get Meta Content
// --------------------------------------------------------------------------
Sharetastic.prototype.getMetaContent = function(propName) {
  var metas = document.getElementsByTagName('meta');
  for(var i = 0; i < metas.length; i++) {
    if(metas[i].getAttribute("name") == propName) {
      return metas[i].getAttribute("content");
    }
    return "";
  }
};
