export default class VisitorDesisionTree{


    constructor(){
        this._decisionTrees = [];
    }


    visitDecisionTree(decisionTree){

        /* -- Destructuring rule expression ---
            
            example :
            ruleExp = '{a} > 1'
            --> const {a,b} = this ;

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
                    this.addDecisionTree(decisionTree)
                 }
        */
        eval(
            String.fromCharCode(96)
            .concat(createRulesFromExpression(decisionTree.ruleExp))
            .concat(String.fromCharCode(96))
        )
        

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
        return `const {${expression}} = this;`

    }

    createRulesFromExpression(ruleExp){
        let template = `
            if(${ruleExp}){
                decisisionTree.validated = true;
            }
        `
        return template.replace('{', '${'); 
    }
    
    addDecisionTree(decisionTree){
        this._decisionTrees.push(decisionTree)
    }

    get decisionTrees()
    {
        return this._decisionTrees;
    }

    


}