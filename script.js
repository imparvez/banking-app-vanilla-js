var banking = {
	bankCustomer: [{
		firstName: "parvez"
	},{
		firstName: "sajid"
	},{
		firstName: "zeyan"
	},{
		firstName: "zidaan"
	}],
	addBankCustomer: function(firstName){
		this.bankCustomer.push({
			firstName: firstName
		})
	},
	renderList:  function(list){
		var ul = document.getElementById("lists");
		var li = "";
		for(i in list){
			li += "<li>"+list[i]["firstName"]+"</li>"
		}
		ul.innerHTML = li;
	},
	displayCustomerList: function(){
		console.log(this.bankCustomer);
	}
}

var helper = {
	addBankCustomer: function(){
		var firstName = document.getElementById('firstName');
		banking.addBankCustomer(firstName.value);
		firstName.value = "";
		banking.renderList(banking.bankCustomer);
	},
	filterLists: function(){
		var input = document.getElementById('filter_users');
		inputKeyWords = input.value.toLowerCase();
		filterUsers = banking.bankCustomer.filter(function(cust){
		    cust = cust["firstName"].toLowerCase();
		    return cust.indexOf(inputKeyWords) > -1;
		  });
		banking.renderList(filterUsers);
	}
}

banking.renderList(banking.bankCustomer);
