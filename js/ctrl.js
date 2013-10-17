var myCtrl = function($scope){
	$scope.sayBtn = function(){
		console.log('heelo',$scope.say);
		$scope.btntext = $scope.say;
	}
}

