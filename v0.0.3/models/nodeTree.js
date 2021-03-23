module.exports =  class NodeTree{
    constructor(id, code){
        this._id = id;
        this._code = code;
        this._name = null;
        this._commandTree = null;
    }

    set id(value){
        this._id = value;
    }
    get id(){
        return this._id;
    }

    set name(value){
        this._name = value;
    }
    get name(){
        return this._name;
    }

    set code(value){
        this._code = value;
    }
    get code(){
        return this._code;
    }

    get commandTree(){
        return this._commandTree;
    }
    set commandTree(value){
        this._commandTree = value;
    }




}