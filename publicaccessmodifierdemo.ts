class Product{
    public productId:number;
    constructor(productId:number){
        this.productId=productId;
    }
}
var product:Product=new Product(1234);
console.log(product.productId);
