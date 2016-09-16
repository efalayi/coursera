(function(){
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
		
		LunchCheckController.$inject= ['$scope'];

		function LunchCheckController($scope){
			$scope.message= "";
			$scope.userInput= "";
			$scope.msgColor={
				color: ""
			}
			$scope.border={
				borderColor: ""
			}

// set color of message and border
			$scope.setColor= function(color){
				$scope.msgColor.color= color;
				$scope.border.borderColor= color;
			}

			$scope.check= function(){
				var validDishes=[];
				var numberOfValidDishes;
				if (isEmpty($scope.userInput) == true) {
					$scope.message= "Please enter data first";
					$scope.setColor("red");
				}
				else{
					var dishes= getItems($scope.userInput);

					// check for empty item
					for (var i = 0; i < dishes.length; i++) {
						if (isEmpty(dishes[i]) == false) {
							validDishes.push(dishes[i]);
						}
					}
					numberOfValidDishes= validDishes.length;
					showResult(numberOfValidDishes);
					if (numberOfValidDishes == 0) {
						$scope.setColor("red");
					}
					else{
						$scope.setColor("green");
					}
					
				}	
			}

		// check if empty
			function isEmpty(input){
				return (input =="" || input == " " || input == null);
			}

		// get items
			function getItems(input){
				var items= input.split(",");
				return items;
			}

		// display result
			function showResult(len){
				var msg= ["No valid data", "Enjoy!", "Too much!"];
				switch(len){
					case 0:
						$scope.message= msg[0];
						break;
					case 1:
					case 2:
					case 3:
						$scope.message= msg[1];
						break;
					default:
						$scope.message= msg[2];
				}
			}
		}


})();