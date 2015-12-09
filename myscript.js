angular.module('mainApp',[])
	.controller('mainCtrl', function(){
		var main = this;
		main.users = [
		{"name":"taguchi","score":1.22},
		{"name":"yamada","score":2.22},
		{"name":"tanaka","score":3.22}
		];
	});