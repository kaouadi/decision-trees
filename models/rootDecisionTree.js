module.exports =  class RootDecisionTree{

    constructor(){
        this._decisionTrees = [];
    }
    attach(decisionTree){
        this._decisionTrees.push(decisionTree);
    }
    accept(visitor){

        for(let decisionTree of this._decisionTrees){
            decisionTree.accept(visitor)
        }

    }

}