var movieApp = angular.module('movieApp',[]);
movieApp.controller('movieController',($scope,$http)=>{
	var movieURL = 'https://api.themoviedb.org/3/search/person?api_key=fec8b5ab27b292a68294261bb21b04a5&query=pine';

	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';

	$http({
		method: 'GET',
		url: movieURL
	}).then(
		function successFunction(movieData){
			$scope.movieArray = movieData.data.results;
			console.log(movieData);

		},function failureFunction(movieData){
			console.log(movieData);
	});

})