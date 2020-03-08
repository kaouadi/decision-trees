module.exports =  class NodeTree{
    constructor(){
        this._name = null;
        this._validated = false;
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



}