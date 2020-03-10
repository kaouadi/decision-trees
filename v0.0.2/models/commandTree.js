
module.exports =  class CommandTree {
    constructor(){
        this._decisionTree = null;
        this._ruleExpr = null;
        this._previousNodeTree = null;
        this._conditional = null;
    }
    set decisionTree(value){
        this._decisionTree = value;
        this._decisionTree.commandTree = this;
    }
    get decisionTree(){
        return this._decisionTree ;
    }
    set ruleExpr(value){
        this._ruleExpr = value;
    }
    get ruleExpr(){
        return this._ruleExpr;
    }
    set conditional(value){
        this._conditional = value;
    }
    get conditional(){
        return this._conditional ;
    }

    set previousNodeTree(value){
        this._previousNodeTree = value;
    }
    get previousNodeTree(){
        return this._previousNodeTree ;
    }

    accept(visitor){
       visitor.visitCommandTree(this);
       //console.log('this._decisionTree.commandTree');
       //console.log(this._decisionTree.commandTree);
       this._decisionTree.accept(visitor)
    }


}