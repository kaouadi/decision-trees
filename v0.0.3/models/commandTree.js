
module.exports =  class CommandTree {
    constructor(expression, previousNodeTree){
        this._expression = expression;
        this._previousNodeTree = previousNodeTree;
        this._isValid = false;
        this._currentNodeTree = null;
    }
    set currentNodeTree(value){
        this._currentNodeTree = value;
        this._currentNodeTree.commandTree = this;
    }
    get currentNodeTree(){
        return this._currentNodeTree ;
    }
    set expression(value){
        this._expression = value;
    }
    get expression(){
        return this._expression;
    }
    set isValid(value){
        this._isValid = value;
    }
    get isValid(){
        return this._isValid ;
    }

    set previousNodeTree(value){
        this._previousNodeTree = value;
    }
    get previousNodeTree(){
        return this._previousNodeTree ;
    }

    accept(visitor){
       visitor.visitCommandTree(this);
       /*
        Apres avoir visité l'objet command et evalué l'expression
        contenant la condition on decide de visiter le noeud courant
       */

       if (this.isValid){
        this._currentNodeTree.accept(visitor)
       }

      
    }


}