{"filter":false,"title":"clPowerballDetailCtrl.js","tooltip":"/public/app/powerball/clPowerballDetailCtrl.js","undoManager":{"mark":19,"position":19,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["angular.module('app').controller('clCourseDetailCtrl', function($scope,clCachedCourses,$routeParams) {","  clCachedCourses.query().$promise.then(function(collection){","    collection.forEach(function(course){","      if(course._id === $routeParams.id){","        $scope.course = course;","      }","    });","  });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":34},"end":{"row":0,"column":52},"action":"remove","lines":["clCourseDetailCtrl"]},{"start":{"row":0,"column":34},"end":{"row":0,"column":55},"action":"insert","lines":["clPowerballDetailCtrl"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":74},"end":{"row":0,"column":89},"action":"remove","lines":["clCachedCourses"]},{"start":{"row":0,"column":74},"end":{"row":0,"column":96},"action":"insert","lines":["clCachedPowerballDraws"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":2},"end":{"row":1,"column":17},"action":"remove","lines":["clCachedCourses"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":24},"action":"insert","lines":["clCachedPowerballDraws"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":15},"action":"remove","lines":["course"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":15},"end":{"row":4,"column":21},"action":"remove","lines":["course"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":28},"action":"insert","lines":["powerballDraw"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":31},"end":{"row":4,"column":37},"action":"remove","lines":["course"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":44},"action":"insert","lines":["powerballDraw"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":32},"end":{"row":2,"column":38},"action":"remove","lines":["course"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":45},"action":"insert","lines":["powerballDraw"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":3},"end":{"row":8,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425484799639,"hash":"f971c4190bd1d79636466c5b3a9878201ae915f2"}