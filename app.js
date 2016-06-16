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

			var exists = listCtrl.checkItemInList(item);
			if( exists === false){
				console.log("Could not find element in array.")
			}else{
				listCtrl.items.splice(exists, 1);
				console.log("Task removed: ", item);
			}
		}
	}; //end removeItem

	//push new item into items
	listCtrl.addItem = function(){
		if(listCtrl.newToDo == null || listCtrl.newToDo === ""){
			//if the task has no text, throw alert
			alert("Your task is empty!");
		}else if(listCtrl.checkItemInList(listCtrl.newToDo) !== false){
			//if item already exists in list, throw alert
			alert("This task already exists in the list.")
		}
		else{
			//add item to list
			listCtrl.items.push(listCtrl.newToDo);
			//clear newToDo text
			listCtrl.newToDo = "";
			console.log("new task: ", listCtrl.newToDo)
		}
	};//end addItem

	listCtrl.checkItemInList = function(item){
		for(var i = 0; i < listCtrl.items.length; i++){
			if(item === listCtrl.items[i]){
				return i;
			}
		}
		return false;
	};


});
app.controller('MainCtrl', function () {
  this.title = 'Some title';


});