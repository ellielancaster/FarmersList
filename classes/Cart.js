class Cart{
    constructor(products, total){
        this.products = products[i];
        this.total = total;
    }

    addProduct(products){
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(index){
        if(index >= 0 && index < this.product.length){
            this.total -= this.products[i].price;
            this.products.splice(index, 1)

        }
    }
}