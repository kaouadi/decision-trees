console.log('hello');


class A{
    constructor(){


    }
    add(){

        Object.defineProperty(this, 'amount', {
            value: 42,
            writable: false
          });
          

    }
    display(){

        console.log(`${this.amount}`)
    }
}

const objA = new A();
console.log(objA.add());
console.log(objA.amount);
objA.display();

let str = `
${console.log('Bonjour')}
`




