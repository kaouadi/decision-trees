const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(){
        super();
        this._commandTree = [];
    }
    get commandTree(){
        return this._commandTree();
    }
    attach(commandTree){
        commandTree.previousNodeTree = this ;
        this._commandTree.push(commandTree);

        /*
        decisionTree.previousNodeTree = this ;
        this._decisionTrees.push(decisionTree);
        */
    }

    accept(visitor){
        /*

        if (this.previousNodeTree != null){
            visitor.visitNodeTree(this)
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