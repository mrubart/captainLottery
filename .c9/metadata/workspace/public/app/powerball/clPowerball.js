{"filter":false,"title":"clPowerball.js","tooltip":"/public/app/powerball/clPowerball.js","undoManager":{"mark":12,"position":12,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":3},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["angular.module('app').factory('clCourse', function($resource) {","  var CourseResource = $resource('api/courses/:_id', {_id: \"@id\"}, {","    update: {method:'PUT', isArray:false}","  });","  ","  return CourseResource;","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":31},"end":{"row":10,"column":39},"action":"remove","lines":["clCourse"]},{"start":{"row":10,"column":31},"end":{"row":10,"column":42},"action":"insert","lines":["clPowerball"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":38},"end":{"row":11,"column":45},"action":"remove","lines":["courses"]},{"start":{"row":11,"column":38},"end":{"row":11,"column":47},"action":"insert","lines":["powerball"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":11,"column":20},"action":"remove","lines":["CourseResource"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":23},"action":"insert","lines":["PowerBallResource"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":9},"end":{"row":15,"column":23},"action":"remove","lines":["CourseResource"]},{"start":{"row":15,"column":9},"end":{"row":15,"column":26},"action":"insert","lines":["PowerBallResource"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["angular.module('app').factory('clPowerball', function($resource) {","  var PowerBallResource = $resource('/api/powerball/:id', {_id: \"@id\"}, {","    update: {method:'PUT', isArray:false}","  });","  ","  return PowerBallResource;","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427811912830,"hash":"8430a583ec279e52f37f7dbf9189a063c5f526f2"}