// let foo = ["사과","배","바나나","포도","복숭아"];

// console.log(foo[2]);

// let product = {
//     이름: 'galaxy a90 5G',
//     apu : 'snapdragon 855',
//     스토리지: '128/256 G'
// }
// console.log(product);

// console.log(product.apu);
// console.log(product.이름);

// for (let key in foo){
//     console.log(`${key} : ${foo[key]}`);
// }

// let product = {
//     name: 'galaxy a90 5G',
//     apu : 'snapdragon 855',
//     storage: '128/256 G',
//     price: '280,000 원',
//     print: function(){
//         console.log(`${this.name}`);
//         console.log(`${this.price}`);
//     },
//     print2: ()=> {
//         console.log(`${this.apu}`);
//     }
// }

let products = [
    {name:'S21 ULTRA',price:'1,390,000원',
        print:function(){
            console.log(`기종: ${this.name} 가격: ${this.price}`);
        }
    },
    {name:'S21 PLUS',price:'1,190,000원',
        print:function(){
            console.log(`기종: ${this.name} 가격: ${this.price}`);
        }
    },
    {name:'S21',price:'990,000원',
        print:function(){
            console.log(`기종: ${this.name} 가격: ${this.price}`);
        }
    }
]
for(let product of products){
    product.print();
}
// function printproducts(product){
//     console.log(`${product.name}의 가격은 ${product.price} 입니다`)
// }

// function Product(name, price){
//     this.name = name;
//     this.price = price;
// }
// let product = new Product('GALAXY A90 5G',890,000);

// console.log(product);