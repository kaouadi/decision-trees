const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(id, code){
        super(id, code);
        this._commandTrees = [];

    }
    attach(commandTree){
        commandTree.previousNodeTree = this;
        this._commandTrees.push(commandTree);
    }

    accept(visitor){ 
        /*---------------------
        Case ! Not root node  
        ----------------------*/
        visitor.visitNodeTree(this)

        for(let commandTree of this._commandTrees){
            commandTree.accept(visitor)
        }
        
    }


}