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
