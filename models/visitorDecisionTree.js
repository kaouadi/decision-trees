export default class VisitorDesisionTree{


    constructor(){
        this._decisionTrees = [];
    }


    visitDecisionTree(decisionTree){

        /* -- Destructuring rule expression ---
            
            example :
            ruleExp = '{a} > 1'
            --> var {a,b} = this ;

        */
        eval(destructuringExpression(decisionTree.ruleExp));

        /* ----- Transform strint to liteal expression
          ASCII literal character ` -> 96 
        */
        /* -- Create rule from expression ---
            
            example :
            ruleExp = '{a} > 1'
            -->  if (${a} > 1){
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
    
    addDecisionTree(decisionTree){
        this._decisionTrees.push(decisionTree)
    }

    get decisionTrees()
    {
        return this._decisionTrees;
    }

    


}