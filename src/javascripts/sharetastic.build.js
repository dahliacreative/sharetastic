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
