// --------------------------------------------------------------------------
// Get Meta Content
// --------------------------------------------------------------------------
Sharetastic.prototype.getMetaContent = function(propName) {
  var metas = document.getElementsByTagName('meta');
  for(var i = 0; i < metas.length; i++) {
    var name = metas[i].getAttribute("name");
    if(name == propName) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
};

