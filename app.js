var app = angular.module("ToDoList", []);

app.controller("ListController", function($log){

	var listCtrl = this;

	listCtrl.items = ["Learn angularjs.", "Send status report to Hansika.", "Remember the asparagus in the refridgerator."];

	//remove parameter from items
	listCtrl.removeItem = function(item){
		//check if item is null
		if(item === null){
			listCtrl.$log(item);
		}else{
			//find item in array and remove it.
			for(var i = 0; i < listCtrl.items.length; i++){
				if(item === listCtrl.items[i]){
					listCtrl.items.splice(i, 1);
					console.log("Task removed: ", )
				}
			}
		}
	}; //end removeItem

	//push new item into items
	listCtrl.addItem = function(){
		if(listCtrl.newToDo == null || listCtrl.newToDo === ""){
			alert("Your task is empty!");
		}else{
			listCtrl.items.push(listCtrl.newToDo);
			console.log("new task: ", listCtrl.newToDo)
		}
	};//end addItem

});
app.controller('MainCtrl', function () {
  this.title = 'Some title';


});