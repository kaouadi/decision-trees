module.exports =  class VisitorDesisionTree{

    constructor(){

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
    visitDecisionTree(decisionTree){
        /* -- Create rule from expression ---

             example : ruleExp = '{a} > 1'
            -->  if (a > 1){
                    decisionTree.validated = true
                 }
        */
        eval(this.createRulesFromExpression(decisionTree.ruleExp));
    }
    createRulesFromExpression(ruleExp){
        let rule = ruleExp.replace('{', '').replace('}', '');
        let template = `
            if(this.${rule}){
                decisionTree.validated = true;
            }
        `
        return template ; 
    }

}