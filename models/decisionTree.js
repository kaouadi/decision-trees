module.exports =  class DecisionTree{
    constructor(){
        this._name = null;
        this._decisionTrees = [];
        this._validated = false;
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

        visitor.visitDecisionTree(this)
        console.log('decisionTree.validated => '+ this.validated)
        if (this.validated){
            for(let decisionTree of this._decisionTrees){
                decisionTree.accept(visitor)
            }
            
        }


    }


}