module.exports =  class Item{


    constructor(id, key, type, content, itemValue){
        this._id = id;
        this._key = key;
        this._type = type;
        this._content = content;
        this._itemValue = itemValue;
        this._selected = false;
    }
    get id(){
        return this._id;
    }
    get key(){
        return this._key;
    }
    get content(){
        return this._content ;
    }
    get type(){
        return this._type;
    }

    set itemValue(value){
        this._itemValue = value ;
    }

    get itemValue(){
        return this._itemValue ;
    }

    get selected(){
        return this._selected ;
    }

    set selected(value){
        this._selected = value ;
    }



}