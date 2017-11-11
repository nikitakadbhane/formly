(function() {

	'use strict';

	angular
		.module('formlyApp')
		.controller('MainController', MainController);

		function MainController(province, $http, $scope, $mdDialog) {

			var vm = this;
            
            console.log('jsaJHFjf');
            var jsonUrl1 = './scripts/json/fmc.json';

            /*$http.get(jsonUrl1)
            .success(function(data, status, headers, config) {
             //console.log(data);
             //vm.rentalFields1.push(data.data);
             //$scope.formateJsonForm(data.data);
                
            $scope.entity = data;

             console.log('vm.rentalFields1',vm.rentalFields1);
            })
            .error(function(error, status, headers, config) {
             console.log(status);
             console.log("Error occured");
            });
			
			var jsonUrl1 = './scripts/json/fmc1.json';
			
			$http.get(jsonUrl1)
            .success(function(data, status, headers, config) {
             //console.log(data);
             //vm.rentalFields1.push(data.data);
             //$scope.formateJsonForm(data.data);
                
            $scope.entity = data;

             console.log('vm.rentalFields1',vm.rentalFields1);
            })
            .error(function(error, status, headers, config) {
             console.log(status);
             console.log("Error occured");
            });*/

			// The model object that we reference
			// on the <formly-form> element in index.html
			vm.rental = {};
			
			// Fruits
			$scope.apps = ['1', '2', '3', '4'];
			$scope.users = ['Nikita', 'Maulik', 'Poonam', 'Sager', 'Sachin'];

			// Selected fruits
			$scope.selection = [];
			$scope.selectionUser = [];
			
			$scope.formateJsonForm1 = [];
			
			$scope.patchdata = {				
				"first_name" : "ss",
				"last_name1" : "jhjkk"	
			}
			
			
			angular.extend($scope.vm.rental, $scope.patchdata);
			
			
			// Toggle selection for a given fruit by name
			$scope.toggleSelection = function (app) {
				var idx = $scope.selection.indexOf(app);
				console.log('idx ',idx);  
				
				// Is currently selected
				if (idx > -1) {
					$scope.selection.splice(idx, 1);
					//$scope.createJsonForm($scope.selection);
				}

				// Is newly selected
				else {
					$scope.selection.push(app);
					console.log('$scope.selection',$scope.selection);
					//$scope.createJsonForm($scope.selection);
				}
			};
			
			$scope.toggleUsers = function (user) {
				var idx = $scope.selectionUser.indexOf(user);
				console.log('idx ',idx);  
				
				// Is currently selected
				if (idx > -1) {
					$scope.selectionUser.splice(idx, 1);
					//$scope.createJsonForm($scope.selection);
				}

				// Is newly selected
				else {
					$scope.selectionUser.push(user);
					console.log('$scope.selectionUser',$scope.selectionUser);
					//$scope.createJsonForm($scope.selection);
				}
			};
			
			$scope.createJsonForm = function (selection){
				console.log('selection',selection);
				vm.rentalFields1 = [];
				angular.forEach(selection, function(value){
					console.log('value',value);
					
					var jsonUrl = './scripts/json/' + value + '.json';
					  
					$http.get(jsonUrl)
					.success(function(data, status, headers, config) {
					 //console.log(data);
					 //vm.rentalFields1.push(data.data);
					 //$scope.formateJsonForm(data.data);
					 
					 $scope.entity = data;
					 $scope.formateJsonForm1.push($scope.entity);
					 
					 console.log('$scope.formateJsonForm1',$scope.formateJsonForm1);
					 console.log('vm.rentalFields1',vm.rentalFields1);
					})
					.error(function(error, status, headers, config) {
					 console.log(status);
					 console.log("Error occured");
					});
				
				});
			}
			
			$scope.formateJsonForm = function (metadata){				
				angular.forEach(metadata, function(data){
					console.log(data);
					vm.rentalFields1.push(data);
				})				
			}
			
			// Get form field from json fileCreatedDate
			/*$http.get('./scripts/json/1.json')
			.success(function(data, status, headers, config) {
				 //console.log(data);
				 vm.rentalFields1 = data.data;
				 
				 console.log('vm.rentalFields1',vm.rentalFields1);
			})
			.error(function(error, status, headers, config) {
				 console.log(status);
				 console.log("Error occured");
			});
			
			$http.get('./scripts/json/2.json')
			.success(function(data, status, headers, config) {
				 //console.log(data);
				 vm.rentalFields1.push(data.data[0]);
				 vm.rentalFields1.push(data.data[1]);
				 
				 console.log('vm.rentalFields1',vm.rentalFields1);
			})
			.error(function(error, status, headers, config) {
				 console.log(status);
				 console.log("Error occured");
			});*/

			console.log('vm.rental',vm.rental);
			
			vm.submitForm = function (){				
				console.log('vm.rental',vm.rental);
			}
			
			// Add User
			
			$scope.addUser = function (ev){				
				$mdDialog.show({
					controller: DialogController,
					templateUrl: './scripts/dialog2.tmpl.html',
					scope: $scope,
					preserveScope: true,
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true,
					fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function(answer) {
				$scope.status = 'You said the information was "' + answer + '".';
				}, function() {
				$scope.status = 'You cancelled the dialog.';
				});				
			}
				
			
			// Add People
			
			$scope.addPeoples = function(ev) {
				//alert('ok');
				$mdDialog.show({
					controller: DialogController,
					templateUrl: './scripts/dialog1.tmpl.html',
					scope: $scope,
					preserveScope: true,
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true,
					fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function(answer) {
				$scope.status = 'You said the information was "' + answer + '".';
				}, function() {
				$scope.status = 'You cancelled the dialog.';
				});
			};
			
			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				
				$mdDialog.cancel();
			};

			$scope.answer = function(answer) {
				console.log('$scope.apps',$scope.apps);
				console.log('$scope.selection',$scope.selection);
				$scope.formateJsonForm1 = [];
				$scope.createJsonForm($scope.selection);
				$mdDialog.hide(answer);
			};
			}

			// An array of our form fields with configuration
			// and options set. We make reference to this in
			// the 'fields' attribute on the <formly-form> element
			vm.rentalFields = [
				{
					key: 'first_name',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'First Name',
						placeholder: 'Enter your first name',
						required: true
					}
				},
				{
					key: 'last_name',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'Last Name',
						placeholder: 'Enter your last name',
						required: true
					}
				},
				{
					key: 'email',
					type: 'input',
					templateOptions: {
						type: 'email',
						label: 'Email address',
						placeholder: 'Enter email',
						required: true
					}
				},
				{
					key: 'under25',
					type: 'checkbox',
					templateOptions: {
						label: 'Are you under 25?',
					},
					// Hide this field if we don't have
					// any valid input in the email field
					hideExpression: '!model.email'
				},
				{
					key: 'province',
					type: 'select',
					templateOptions: {
						label: 'Province/Territory',
						// Call our province service to get a list
						// of provinces and territories
						options: province.getProvinces()		        
					},
					hideExpression: '!model.email'
				},
				{
					key: 'license',
					type: 'input',
					templateOptions: {
						label: 'Driver\'s License Number',
						placeholder: 'Enter your drivers license number'
					},
					hideExpression: '!model.province',
					validators: {
						// Custom validator to check whether the driver's license
						// number that the user enters is valid or not
		          		driversLicense: function($viewValue, $modelValue, scope) {
		          			var value = $modelValue || $viewValue;
		          			if(value) {
		          				// call the validateDriversLicense function
		          				// which either returns true or false
		          				// depending on whether the entry is valid
		          				return validateDriversLicence(value)
		          			}
		          		}
		          	},
		          	expressionProperties: {
		          		// We currently only have a driver's license pattern for Ontario
		          		// so we need to disable this field if we've picked a province/territory
		          		// other than Ontario
		          		'templateOptions.disabled': function($viewValue, $modelValue, scope) {
		          			if(scope.model.province === 'ontario') {
		          				return false;
		          			}
		          			return true;
		          		}
		          	}
				},
				{
					key: 'insurance',
					type: 'input',
					templateOptions: {
						label: 'Insurance Policy Number',
						placeholder: 'Enter your insurance policy number'
					},
					hideExpression: '!model.under25 || !model.province',
				}

			];

			// Tests the input based on a helpful regular expression
			// gratefully borrowed from jQuery.formance by Omar Shammas
			// https://github.com/omarshammas/jquery.formance
			function validateDriversLicence(value) {
				return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
			}

		}

})();