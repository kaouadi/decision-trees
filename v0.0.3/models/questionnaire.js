module.exports =  class Questionnaire{


    constructor(id, code){
        this._id = id;
        this._code = code;
        this._items = [];
    }

    attach(item){
        this._items.push(item);
    }

}