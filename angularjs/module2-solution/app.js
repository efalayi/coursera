(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyShoppingController.$inject= ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var toBuy= this;
		toBuy.items= ShoppingListCheckOffService.getToBuyList();
		toBuy.bought= function(itemIndex){
			ShoppingListCheckOffService.bought(itemIndex);
		}
		toBuy.isEmptyList= ShoppingListCheckOffService.isEmptyList();
	}

	AlreadyBoughtShoppingController.$inject= ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var alreadyBought= this;
		alreadyBought.items= ShoppingListCheckOffService.getAlreadyBoughtList();
	}

	// service declaration
	function ShoppingListCheckOffService(){
		var service= this;
		var boughtItems= [];

		// declare ToBuy List
		var ToBuy=[
			{
				name: "Cookies",
				qty: 10
			},
			{
				name: "Mangoes",
				qty: 5
			},
			{
				name: "Jotters",
				qty: 4
			},
			{
				name: "Bread",
				qty: 1
			},
			{
				name: "Sweets",
				qty: 20
			}
		];

		service.getToBuyList= function(){
			return ToBuy;
		};

		service.bought= function(itemIndex){
			var item={
				name: ToBuy[itemIndex].name,
				qty: ToBuy[itemIndex].qty
			};

			ToBuy.splice(itemIndex, 1);
			boughtItems.push(item);
		};

		service.getAlreadyBoughtList= function(){
			return boughtItems;
		};
		service.isEmptyList= function(list){
			return ToBuy.length == 0;
		}
	}
})();