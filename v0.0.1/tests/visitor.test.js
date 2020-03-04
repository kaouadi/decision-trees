
function destructuringExpression(ruleExp){

    let reg = /\{\w*\}/gm ;
    let resultat = ruleExp.match(reg);
    let expression = '';
    for (let i = 0; i < resultat.length ; i++) {

        let chr = resultat[i].replace('{','').replace('}','')
        expression += chr ;
        if (i != resultat.length-1){
            expression += ',';
        }

    }
    return `var {${expression}} = this ;`

}

class Visitor{

    constructor(name){
        this._name = name;
    }


}

let visitor = null;

beforeEach(() => {
    visitor = new Visitor('A');
  });

test('destructuring {a} > 1', () => {
    expect(destructuringExpression('{a} > 1')).toBe('var {a} = this ;');
});

test('assign object attributes by destructuring expression ', () => {

    let obj = {
        a: 3,
        b: 4,
        c: null,
        visitDecisionTree(){
            eval('var {a} = this ;');
            this.c = a ;
        }
        
    }
    obj.visitDecisionTree()
    expect(obj.c).toEqual(3);
        

});

test('apply expression rule ', () => {

    let obj = {
        a: 3,
        validated: false,
        visitDecisionTree(){
            eval(`var {a} = this ;

                if (a > 1){
                    this.validated = true ;
                }

            `);
        }
        
    }
    obj.visitDecisionTree()
    expect(obj.validated).toEqual(true);
        

});

test('createRulesFromExpression', () => {

    let obj = {
        a: 3,
        validated: false,
        visitDecisionTree(){
            eval('var {a} = this ;')
            eval(this.createRulesFromExpression('{a} > 1'))

        },
        createRulesFromExpression(expr){
            let ruleExp = expr.replace('{', '').replace('}', '');
            let template = `
                if(${ruleExp}){
                    this.validated = true;
                }
            `
            return template ;
        }
        
    }
    obj.visitDecisionTree()
    expect(obj.validated).toEqual(true);
        

});

test('destructuringExpression', () => {

    let obj = {
        a: 3,
        validated: false,
        visitDecisionTree(){
            const ruleExp = '{a} > 1'
            eval(this.destructuringExpression(ruleExp));
            eval(this.createRulesFromExpression(ruleExp));

        },
        createRulesFromExpression(expr){
            let ruleExp = expr.replace('{', '').replace('}', '');
            let template = `
                if(${ruleExp}){
                    this.validated = true;
                }
            `
            return template ;
        },
        destructuringExpression(ruleExp){

            let reg = /\{\w*\}/gm ;
            let resultat = ruleExp.match(reg);
            let expression = '';
            for (let i = 0; i < resultat.length ; i++) {
       
                let chr = resultat[i].replace('{','').replace('}','')
                expression += chr ;
                if (i != resultat.length-1){
                    expression += ',';
                }
    
            }
            return `var {${expression}} = this ;`
    
        }
        
    }
    obj.visitDecisionTree()
    expect(obj.validated).toEqual(true);
        

});

test('Inject parameters to visit decision tree', () =>{

        let obj = {
            injectParametersToVisit(parameters){

                for (let [key, value] of Object.entries(parameters)) {
                    Object.defineProperty(this, `_${key}`, {
                        value: value,
                        writable: true
                    });
                    Object.defineProperty(this, `${key}`, { get: function(){
                       return eval(`this._${key}`) 
                    }});
                }
            }
        }
        obj.injectParametersToVisit({a: 2, b: 3, c: 4});
        expect(obj.a).toEqual(2);
        expect(obj.b).toEqual(3);
        expect(obj.c).toEqual(4);
});

