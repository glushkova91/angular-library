(function(){
	"use strict";

	angular.module("todoApp", [])
		.value("model", {
			user: "Man",
			userPhoto: "images/VZ.jpg"
		})
		.controller("Todo", Todo)
		.filter('checkedItems', checkedItems)
		.filter('checkItemDone', checkItemDone)
		.run(runApp)
		.directive("taskList", taskList)
		.directive("pageHeader", pageHeader)
		.directive("form", form)
		.directive("menu", menu)
		.directive("menuItem", menuItem)
		.directive("menuGroup", menuGroup)
		.factory("dataHttpService", dataHttpService);
	//.directive("menuElem", menuElem);

	function dataHttpService($q, $http){
		return {
			getData
		};
		function getData(url){
			return $q( (resolve, reject) => {
				$http
					.get(url)
					.then(resolve, reject);
			});
		}

	}
	function runApp(model, dataHttpService){

		//dataHttpService.getData('todo.json')
		//	.then(getTasksSuccess, getTasksError);
        //
		//dataHttpService.getData('menu.json')
		//	.then(getMenuSuccess, getTasksError);

		function getTasksSuccess(response){
			console.log(response.data);
			model.items = response.data;
			angular.forEach(model.items, function(item, index){
				item.index = index;
			});
		}
		function getMenuSuccess(response){
			model.menu = response.data;
			console.log(response.data);
		}
		function getTasksError(error){
			console.log(error);
		}
	}
	function Todo($scope, model){
		$scope.todo = model;

		$scope.showComplete = true;

		$scope.addNewItem = addNewItem;
		$scope.incompleteCount = incompleteCount;
		$scope.removeComplete = removeComplete;
		$scope.removeItem = removeItem;
		$scope.warningLevel = warningLevel;

		function addNewItem(items, newItem){
			if(newItem && newItem.action){
				items.push({
					action: newItem.action,
					done: false,
					estimate: newItem.estimate,
					deadline: newItem.deadline,
					index: items.length
				});
				newItem.action = newItem.estimate = newItem.deadline = '';
			}
		}

		function incompleteCount(items){
			var count = 0;

			angular.forEach(items, function(item){
				if(!item.done) count++;
			});

			return count
		}
		function removeComplete(items){

			angular.forEach(items, function(item, key){
				if(item.done) items.splice(key, 1);
			});
		}
		function removeItem(items, index){

			angular.forEach(items, function(item, key){
				if(item.index == index) items.splice(key, 1);
			});
		}

		function warningLevel(items){
			return (incompleteCount(items) < 3) ? 'label-success' : 'label-warning'
		}
	}
	function checkedItems(){
		return function (items, showComplete){
			var resArr = [];
			if(angular.isArray(items)){
				angular.forEach(items, function(item){
					if(!item.done || showComplete){
						resArr.push(item)
					}
				});
				return resArr;
			}else {
				return items;
			}
		}
	}
	function checkItemDone(){
		return function (done){
			return window._t.checkItemDone[done];
		}
	}
	function taskList(){
		return{
			resctrict: 'A',
			templateUrl: 'templates/table.html'
		}
	}
	function pageHeader(){
		return{
			resctrict: 'A',
			templateUrl: 'templates/page-header.html'
		}
	}
	function form(){
		return{
			resctrict: 'A',
			templateUrl: 'templates/form.html'
		}
	}
	function menu(){
		return{
			resctrict: 'E',
			transclude: true,
			replace: true,
			template: '<ul ng-transclude></ul>'
		}
	}
	//function menuElem(){
	//    return{
	//        resctrict: 'E',
	//        transclude: true,
	//        replace: true,
	//        link: function(scope, element, attrs) {
	//            var data = scope['menu'];
	//
	//            //scope.data = scope[attrs["unorderedList12"]];
	//            var markup = data.group ? "<menu-group>"+dd+"</menu-group>": "<menu-item>"+data.name+"</menu-item>";
	//            //scope.data = scope[attrs["unorderedList8"]];
	//            element.append(markup);
	//        }
	//    }
	//}
	function menuItem(){
		return{
			resctrict: 'E',
			transclude: true,
			replace: true,
			template: function(elem, attr){
				//console.log(attr);
				return '<li>'+attr.name+'</li>';
			}
		}
	}
	function menuGroup(){
		return{
			resctrict: 'E',
			transclude: true,
			replace: true,
			template: function(elem, attr){
				return '<li><ul>'+attr.name+'<div class="transclude"></div></ul></li>';
			},
			link:function(scope,element,attrs,ctrl, transclude)
			{
				angular.element(element[0].querySelector('.transclude')).replaceWith(transclude());
			}
		}
	}

})();