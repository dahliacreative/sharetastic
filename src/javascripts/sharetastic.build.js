  // --------------------------------------------------------------------------
  // Build the DOM
  // --------------------------------------------------------------------------
  Sharetastic.prototype.build = function() {
    for(var key in this.options.services) {
      if(this.options.services[key].enabled) {
        var link = $('<a/>'),
            service = this.options.services[key],
            self = this,
            action = key === 'print' ? 'onclick' : 'href';
        link
          .addClass('sharetastic__button sharetastic__button--'+key)
          .attr(action, service.href)
          .attr('target', '_blank')
          .html('<svg width="' + service.icon.width + '" height="' + service.icon.height + '" class="sharetastic__icon"><use xlink:href="#' + service.icon.id + '"/></svg>' + service.name);
        this.el.append(link);
        if(key !== 'email' && key !== 'print' && this.options.popup) {
          link.on('click', function() {
            self.popup($(this).attr('href'), 500, 300);
            return false;
          });
        }
      }
    }
  };

