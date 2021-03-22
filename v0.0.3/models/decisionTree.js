const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(){
        super();
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
        if (this.commandTree != null){
            visitor.visitNodeTree(this)
            for(let commandTree of this._commandTrees){
                commandTree.accept(visitor)
            }
        }
        else
        {
            for(let commandTree of this._commandTrees){
                commandTree.accept(visitor)
            }
        }
        
    }


}