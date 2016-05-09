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
