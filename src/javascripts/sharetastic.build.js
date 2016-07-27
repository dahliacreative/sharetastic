// --------------------------------------------------------------------------
// Build the DOM
// --------------------------------------------------------------------------
Sharetastic.prototype.build = function() {
  for(var key in this.options.services) {
    if(this.options.services[key].enabled) {
      var link = $('<a/>'),
          service = this.options.services[key],
          self = this;
      link
        .addClass('sharetastic__button sharetastic__button--'+key)
        .attr('href', service.href)
        .attr('target', '_blank')
        .html('<svg width="' + service.icon.width + '" height="' + service.icon.height + '" class="sharetastic__icon"><use xlink:href="#' + service.icon.id + '"/></svg>' + service.name);
      this.el.append(link);
      if(key !== 'email' && this.options.popup) {
        link.on('click', function() {
          console.log('pop')
          self.popup($(this).attr('href'), 500, 300);
          return false;
        });
      }
    }
  }
};


