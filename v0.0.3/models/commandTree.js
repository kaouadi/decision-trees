
module.exports =  class CommandTree {
    constructor(expression){
        this._expression = expression;
        this._isValid = false;
        this._currentNodeTree = null;
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
    set currentNodeTree(value){
        this._currentNodeTree = value;
    }
    get currentNodeTree(){
        return this._currentNodeTree ;
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