module.exports =  class VisitorDesisionTree{

    constructor(){

    }

    injectParametersToVisit(paramaters){
        /* -- Inject parameters to create public attributes ---

            example :  parameters = {a: 2, b: 3, c: 4}
            ----> injectParametersToVisit(parameters)
            ----> Define private properties
            ----> this._a = 2;
            ----> Define public properties
            ----> get a(){
                      return this._a ;
                  }
        */
        for (let [key, value] of Object.entries(parameters)) {
            Object.defineProperty(this, `_${key}`, {
                value: value,
                writable: true
            });
            Object.defineProperty(this, `${key}`, { get: function(){
               return eval(`this._${key}`);
            }});
        }
    }

    visitDecisionTree(decisionTree){

        /* -- Destructuring rule expression ---
            
            example : ruleExp = '{a} > 1'
            --> var {a,b} = this ;
        */
        eval(destructuringExpression(decisionTree.ruleExp));
        /* -- Create rule from expression ---

             example : ruleExp = '{a} > 1'
            -->  if (a > 1){
                    decisionTree.validated = true
                 }
        */
        eval(createRulesFromExpression(decisionTree.ruleExp));
        

    }

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

    createRulesFromExpression(ruleExp){
        let rule = ruleExp.replace('{', '').replace('}', '');
        let template = `
            if(${rule}){
                decisisionTree.validated = true;
            }
        `
        return template ; 
    }

}