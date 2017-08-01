var myApp = angular.module('myApp',[]);
myApp.controller('myController', ($scope, $http)=>{
	$scope.firstName = "Rob";
	$scope.lastName = "Bunch";
	console.log($scope.firstName)
	$scope.students = [
		'Chad',
		'Shane',
		'Carla',
		'Porscha',
		'Guido'
	]
	$scope.addStudent = function(){
		// console.log("User submitted!!")
		$scope.students.push($scope.newStudent);
		$scope.newStudent = '';
	}
	$scope.removeStudent = function(studentName){
		var index = $scope.students.indexOf(studentName);
		$scope.students.splice(index,1);
	}
});