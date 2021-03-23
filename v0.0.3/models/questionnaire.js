module.exports =  class Questionnaire{


    constructor(id, code){
        this._id = id;
        this._code = code;
        this._items = [];
        this._nodeTree = null;
    }

    attach(item){
        this._items.push(item);
    }

    set nodeTree(value){
        this._nodeTree = value;
    }
    get nodeTree(){
        return this._nodeTree;
    }

}