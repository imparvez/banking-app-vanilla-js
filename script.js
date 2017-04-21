var banking = {
	bankCustomer: [],
	addBankCustomer: function(firstName){
		this.bankCustomer.push({
			firstName: firstName
		})
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
		banking.displayCustomerList();
	}
}