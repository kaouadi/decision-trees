const NodeTree = require('../models/nodeTree');

module.exports =  class LeafTree extends NodeTree{
    constructor(id, code){
        super(id, code);
    }
    accept(visitor){
        visitor.visitNodeTree(this)
    }


}