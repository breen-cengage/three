var angular = require('angular');

require('three.css');

var metadata = {
	name: 'three'
};

angular
	.module(metadata.name, [])
	.directive('three', function () {
		return {
			restrict: 'E',
			replace: true,
			template: '<div>three</div>'
		};
	});

module.exports = metadata;