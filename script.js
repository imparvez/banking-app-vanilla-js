var banking = {
	bankCustomer: [{
		name: "parvez",
		accountType: "savings",
		accountBal: "Rs: 2000"
	}],
	addBankCustomer: function({name, accountType, accountBal }){
		this.bankCustomer.push({
			name: name,
			accountType: accountType,
			accountBal: accountBal
		})
	},
	renderList:  function(list){
		var ul = document.getElementById("lists");
		var li = "";
		for(i in list){
			li += "<li class='list-group-item'><i class='fa fa-user'></i><span class='name'>"+list[i]["name"]+"</span><span class='accountType'>"+list[i]["accountType"]+"</span><span class='accountBal'>"+list[i]["accountBal"]+"</span></li>"
		}
		ul.innerHTML = li;
	},
	displayCustomerList: function(){
		console.log(this.bankCustomer);
	}
}

var helper = {
	addBankCustomer: function(){
		var name = document.getElementById('name').value;
		var accountType = document.getElementById('accountType').value;
		var accountBal = document.getElementById('accountBal').value;
		banking.addBankCustomer({name, accountType, accountBal});
		name = "";
		banking.renderList(banking.bankCustomer);
	},
	filterLists: function(){
		var input = document.getElementById('filter_users');
		inputKeyWords = input.value.toLowerCase();
		filterUsers = banking.bankCustomer.filter(function(cust){
		    cust = cust["name"].toLowerCase();
		    return cust.indexOf(inputKeyWords) > -1;
		  });
		banking.renderList(filterUsers);
	}
}

banking.renderList(banking.bankCustomer);
