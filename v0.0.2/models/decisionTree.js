const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(){
        super();
        this._commandTree = [];
        this._expression = null;

    }
    get commandTree(){
        return this._commandTree;
    }
    set commandTree(value){
        this._commandTree = value;
    }

    set expression(value){
        this._expression = value;
    }
    get expression(){
        return this._expression;
    }
    attach(commandTree){
        commandTree.previousNodeTree = this;
        this._commandTree.push(commandTree);
    }

    accept(visitor){
        /*
         --
         Case ! Not root node
        if (this.commandTree != null){
            visitor.visitCommandTree(this)
            if (this.validated){
                for(let decisionTree of this._decisionTrees){
                    decisionTree.accept(visitor)
                }
            } 
        }
        else
        {
            for(let decisionTree of this._decisionTrees){
                decisionTree.accept(visitor)
            }
        }
        */  
    }


}