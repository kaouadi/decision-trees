
module.exports =  class CommandTree {
    constructor(){
        super();
        this._decisionTree = null;
        this._ruleExpr = null;
        this._previousNodeTree = null;
        this._conditional = null;
    }
    set decisionTree(value){
        this._decisionTree = value;
    }
    set ruleExpr(value){
        this._ruleExpr = value;
    }
    set conditional(value){
        this._conditional = value;
    }
    set previousNodeTree(value){
        this._previousNodeTree = value;
    }

    get decisionTree(){
        return this._decisionTree ;
    }
    get previousNodeTree(){
        return this._previousNodeTree ;
    }
    get expression(){
        return this._expression ;
    }
    get ruleExpr(){
        this._ruleExpr ;
    }

    accept(visitor){
       visitor.visitCommandTree(this);
       this._decisionTree.accept(visitor)
    }


}