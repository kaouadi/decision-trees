
module.exports =  class CommandTree {
    constructor(){
        super();
        this._decisionTree = null;
        this._expression = null;
        this._previousNodeTree = null;
    }
    set decisionTree(value){
        this._decisionTree = value;
    }
    set expression(value){
        this._expression = value;
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


    accept(visitor){
       visitor.visitCommandTree(this);
       this._decisionTree.accept(visitor)
    }


}