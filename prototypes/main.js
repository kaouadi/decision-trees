class DecisionTree{
    constructor(){
        this._name = null;
        this._decisionTrees = [];
        this._validated = true;
        this._ruleExp = null;
    }
    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get decisionTrees(){
        return this._decisionTrees;
    }

    get validated(){
        return this._validated;
    }

    set validated(value){
        this._validated = value;
    }

    set ruleExp(value){
        this._ruleExp = value;
    }

    get ruleExp(){
        return this._ruleExp;
    }

    attach(decisionTree){
        this._decisionTrees.push(decisionTree);
    }

    accept(visitor){

        visitor.visitItem(this)
        if (this.validated){
            for(let decisionTree of this._decisionTrees){
                decisionTree.accept(visitor)
            }
            
        }


    }


}

class RootDecisionTree{

    constructor(){
        this._decisionTrees = [];
    }
    attach(decisionTree){
        this._decisionTrees.push(decisionTree);
    }
    accept(visitor){

        for(let decisionTree of this._decisionTrees){
            decisionTree.accept(visitor)
        }

    }

}

class VisitorDesisionTree{


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


let decisionTreeA = new DecisionTree();
decisionTreeA.name = 'A';
decisionTreeA.ruleExp = '{a}b   > 100 ';

console.log(decisionTreeA);

let decisionTreeB = new DecisionTree();
decisionTreeB.name = 'B';
decisionTreeB.ruleExp = '{a} < 100';

console.log(decisionTreeB);

let decisionTreeC = new DecisionTree();
decisionTreeC.name = 'C';
decisionTreeC.ruleExp = '{c} == false';

console.log(decisionTreeC);

