var module = angular.module("app", []);

module.service('contactService', function(){
	var uid=1;
	var contacts=[{
		id:0,
		'name':'Dhruv',
		'email':'verma@gmail.com',
		'phone':'1231231'
	}];
	this.save=function(contact){
		if(contact.id==null){
			contact.id=uid++;
			contacts.push(contact);
		}else{
			for(i in contacts){
				if(contacts[i].id==contact.id){
					contacts[i]=contact;
				}
			}
		}
		alert(contacts[0].name);
	}
	this.get = function(id){
		for(i in contacts){
			if(contacts[i].id==id){
				return contacts[i];
			}
		}

	}
	this.delete = function(id){
			for (i in contacts)
				if(contacts[i].id==id)
					contacts.splice(i,1)
	}
	this.list = function(){
		return contacts;
	}
});

module.controller('ContactMg', function ($scope, contactService){
	$scope.contacts=contactService.list();
	$scope.save=function(){
		//alert("asdasd");
		contactService.save($scope.contact);
		$scope.contact={};		
	}
	$scope.delete = function (id) {
         contactService.delete(id);
        if ($scope.contact.id == id)
        	$scope.contact = {};
    }
	$scope.edit = function(id){
		$scope.contact=angular.copy(contactService.get(id));
	}
});