module.exports =  class Item{


    constructor(key, type, content){
        this._key = key;
        this._type = type;
        this._content = content;
        this._itemValue = null;
        this._selected = false;
    }

    get content(){
        return this._content ;
    }

    get key(){
        return this._key;
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