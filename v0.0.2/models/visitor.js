module.exports =  class Visitor{

    constructor(){

        this._state = [];

    }

    injectParametersToVisit(parameters){
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
    visitCommandTree(commandTree){

       /*
           Setting rule expression into command Tree
           example : 
           expression : a >= 5 
           conditional => true
           rule expression : a >= 5
           conditional => false
           rule expression : a < 5
       */
        commandTree.ruleExpr = this.expressionAlgorithmicProcessing(
            commandTree.previousNodeTree.expression, 
            commandTree.conditional);
        
    }
    visitNodeTree(decisionTree){
        /* -- Create rule from expression ---

             example : ruleExp = '{a} > 1'
            -->  if (a > 1){
                    decisionTree.validated = true
                 }
        */
        eval(this.createRulesFromExpression(decisionTree.commandTree.ruleExpr));
    }
    createRulesFromExpression(ruleExp){
        let rule = ruleExp.replace('{', '').replace('}', '');
        let template = `
            if(this.${rule}){
                decisionTree.validated = true;
                this.addState(decisionTree.name);
                
            }
        `
        return template ; 
    }

    expressionAlgorithmicProcessing(expression, option){
        let items = [['>','<='], ['<','>='], ['>=','<'], ['<=','>'], ['==','!='], ['!=','==']];
        let ruleExpr = expression;
        for (const item of items) {
          if (expression.includes(item[0])){
             if (option == false){
                ruleExpr = expression.replace(item[0], item[1]);
             }
          }
        }
        return ruleExpr;
    }

    get state(){
        return this._state ;
    }
    addState(name){
        this._state.push(name) ;
    }

}