module.exports =  class NodeTree{
    constructor(){
        this._name = null;
        this._validated = false;
        this._commandTree = null;
    }
    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }
    get commandTree(){
        return this._commandTree;
    }
    set commandTree(value){
        this._commandTree = value;
    }

    get validated(){
        return this._validated;
    }

    set validated(value){
        this._validated = value;
    }



}