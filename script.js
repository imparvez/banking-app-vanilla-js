var banking = {
	bankCustomer: [{
		name: "parvez",
		accountType: "savings",
		accountBal: 2000
	}],
	addBankCustomer: function({name, accountType, accountBal }){
		this.bankCustomer.push({
			name: name,
			accountType: accountType,
			accountBal: parseInt(accountBal)
		})
	},
	renderList:  function(list){
		var ul = document.getElementById("lists");
		var li = "";
		for(i in list){
			li += "<li class='list-group-item'>";
			li += "<i class='fa fa-user'></i>";
			li += "<span class='name'>"+list[i]["name"]+"</span>";
			li += "<span class='accountType'>"+list[i]["accountType"]+"</span>";
			li += "<span class='accountBal'>"+list[i]["accountBal"]+"</span>";
			li += "<input type='number' class='form-control' placeholder='DEPOSIT' id='deposit"+i+"'/>";
			li += "<button type='button' class='btn btn-primary' onclick='helper.addDeposit(deposit"+i+", "+i+")' id='addDeposit'>DEPOSIT</button>";
			li += "<input type='number' class='form-control' placeholder='WITHDRAW' id='withdraw"+i+"'/>";
			li += "<button type='button' class='btn btn-primary' onclick='helper.withdraw(withdraw"+i+", "+i+")' id='withdraw'>WITHDRAW</button>";
			li += "</li>";
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
	},
	addDeposit: function(depositId, i){
		banking.bankCustomer[i]['accountBal'] += parseInt(depositId.value);
		banking.renderList(banking.bankCustomer);
	},
	withdraw: function(withdrawId, i){
		banking.bankCustomer[i]['accountBal'] -= parseInt(withdrawId.value);
		banking.renderList(banking.bankCustomer);
	}
}

banking.renderList(banking.bankCustomer);
