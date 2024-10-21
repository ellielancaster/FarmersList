class Auth{
    constructor(){
        this.customers = [];
    }

    register(name, email, shippingAddress)
    {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer)
        return newCustomer;
    }

    login(email){
        return this.customer.find(customer => customer.email === email)
    }
}

module.exports = Auth;