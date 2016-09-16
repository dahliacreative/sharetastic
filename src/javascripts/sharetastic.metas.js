  // --------------------------------------------------------------------------
  // Get Meta Content
  // --------------------------------------------------------------------------
  Sharetastic.prototype.getMetaContent = function(propName) {
    var metas = document.getElementsByTagName('meta');
    for(var i = 0; i < metas.length; i++) {
      var property = metas[i].getAttribute("property");
      if(property == propName) {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  };

