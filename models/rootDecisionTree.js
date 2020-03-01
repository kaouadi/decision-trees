module.exports =  class RootDecisionTree{

    constructor(){
        this._decisionTrees = [];
    }
    attach(decisionTree){
        this._decisionTrees.push(decisionTree);
    }
    accept(visitor){

        for(let decisionTree of this._decisionTrees){
            console.log('rootDecisionTree : '+ decisionTree.name)
            decisionTree.accept(visitor)
        }

    }

}