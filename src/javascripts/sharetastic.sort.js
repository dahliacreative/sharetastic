  // --------------------------------------------------------------------------
  // Sort Services
  // --------------------------------------------------------------------------
  Sharetastic.prototype.sort = function() {
    var serviceCount = Object.keys(this.options.services).length;
    this.serviceOrder = [];

    for(var i = 0; i < serviceCount; i ++) {
        for(var key in this.options.services) {
            var service = this.options.services[key];
            if(service.sort === i) {
                this.serviceOrder.push(key);
            }
        }
    }
    this.build();
  };

