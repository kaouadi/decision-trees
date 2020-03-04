module.exports =  class NodeTree{
    constructor(){
        this._name = null;
        this._validated = false;
        this._ruleExp = null;
        this._previousNodeTree = null;
    }
    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
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
    get previousNodeTree(){
        return this._previousNodeTree;
    }
    set previousNodeTree(value){
        this._previousNodeTree = value;
    }


}