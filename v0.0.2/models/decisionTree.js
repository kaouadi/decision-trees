const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(){
        super();
        this._commandTrees = [];
        this._expression = null;

    }
    set expression(value){
        this._expression = value;
    }
    get expression(){
        return this._expression;
    }
    attach(commandTree){
        commandTree.previousNodeTree = this;
        this._commandTrees.push(commandTree);
    }

    accept(visitor){
        /*
         --
        /* Case ! Not root node  */
        if (this.commandTree != null){
            visitor.visitNodeTree(this)
            if (this.validated){
                for(let commandTree of this._commandTrees){
                    commandTree.accept(visitor)
                }
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