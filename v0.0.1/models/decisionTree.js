const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(){
        super();
        this._decisionTrees = [];
    }
    get decisionTrees(){
        return this._decisionTrees;
    }
    attach(decisionTree){
        decisionTree.previousNodeTree = this ;
        this._decisionTrees.push(decisionTree);
    }

    accept(visitor){

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
    }


}