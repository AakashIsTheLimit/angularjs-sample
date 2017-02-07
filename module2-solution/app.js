(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
          .controller('ToBuyController', ToBuyController)
          .controller('AlreadyBoughtController', AlreadyBoughtController)
          .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuy = this;

  toBuy.toBuyItems =  ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyIt = function(index) {
    ShoppingListCheckOffService.removeFromToBuy(index);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var boughts = this;
  boughts.boughtItems = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
  var listOffService = this;
  var toBuy = [{
     name: "cookies", quantity: 10
  }, {
     name: "chips", quantity: 8
  }, {
     name: "namkeen", quantity: 2
  }, {
     name: "bread", quantity: 5
  }
];
  var bought = [];

  listOffService.removeFromToBuy = function(index) {
    var boughtThis = toBuy.splice(index, 1)[0];
    bought.push(boughtThis);
  };

  listOffService.getToBuyItems = function() {
    return toBuy;
  };

  listOffService.getBoughtItems = function() {
      return bought;
    };
};

})();
