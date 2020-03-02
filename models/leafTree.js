const NodeTree = require('../models/nodeTree');

module.exports =  class LeafTree extends NodeTree{
    constructor(){
        super();
        this._message = null;
    }
    get message(){
        return this._message;
    }

    set message(value){
        this._message = value;
    }
    accept(visitor){
        visitor.visitNodeTree(this)
    }


}