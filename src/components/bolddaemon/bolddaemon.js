// Controlers

function get($scope, $http, url, name) {
	$http.get( url ).success( function( d, s ) {
		$scope[name] = d;
	});
}

function repoCtrl($scope, $http) {
	// get($scope, $http, 'https://api.github.com/users/qbit/repos?sort=updated', 'repos');
	get($scope, $http, 'components/bolddaemon/repos.json', 'repos');
}

function dataCtrl($scope, $http) {
	get($scope, $http, 'components/bolddaemon/categories.json', 'categories');
	get($scope, $http, 'components/bolddaemon/posts.json', 'posts');

	$scope.setSearch = function(cat) {
		console.log( cat );
		$scope.search = cat;
	};
}

function cwCtrl($scope, $http) {
	get($scope, $http, 'components/bolddaemon/coderwall.json', 'badges');
}
