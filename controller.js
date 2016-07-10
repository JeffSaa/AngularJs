angular.module("MyAngularApp",[])
.controller("MyController",function($scope){

	$scope.newMessage = "";
	$scope.messages = [];
	$scope.sendMessage = function(){
		$scope.messages.push($scope.newMessage);
		$scope.newMessage = "";
	}

});