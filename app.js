var app = angular.module("ToDoList", []);

app.controller("ListController", function(){

	this.items = ["Learn angularjs.", "Send status report to Hansika.", "Remember the asparagus in the refridgerator."];
	this.task1 = "learn how to use controllers.";
});
app.controller('MainCtrl', function () {
  this.title = 'Some title';
});