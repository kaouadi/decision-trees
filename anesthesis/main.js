console.log('hello');
function multiply(a){
    return a*a;
}

function display(a){
    console.log('bonjour TOTO'+ a);
}

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



//let a = 4 ;
//let str = `multiply(${a})`;
//let templateA = "multiply(${a})";
//let templateB = "display()";

//let amount = eval(String.fromCharCode(96) + templateA + String.fromCharCode(96));
//console.log(typeof(amount))
//eval(String.fromCharCode(96) + "display(${a})"+ String.fromCharCode(96));

console.log('-------');

//let amount = multiply(5);



//console.log(amount);

let amount = eval("multiply(5)");
console.log("--:" +amount);

const a = 40;
const item = eval(String.fromCharCode(96) + 'multiply(${a})' + String.fromCharCode(96));
console.log(eval(item));

let reg = /\{\w*\}/gm ;
let str = `un {algo} de 20 
et {ado} et le {goal} et {enfer}`;
let str1 = 'un ${algo} de 20 et ${ado}';
let resultat = str.match(reg);
let resultat1 = str1.match(reg);
console.log(resultat);
console.log(resultat1);

let titleObj = 'obj'
let left = 'const {';
let right = '} = obj ;'
let expression = '';
for (let i = 0; i < resultat.length ; i++) {
   
  let chr = resultat[i].replace('{','').replace('}','')
  expression += chr ;
  if (i != resultat.length-1){
    expression += ',';
  }

}
let rule = left + expression + right


console.log(rule);



