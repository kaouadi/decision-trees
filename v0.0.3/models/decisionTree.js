const NodeTree = require('../models/nodeTree');
module.exports =  class DecisionTree extends NodeTree{
    constructor(id, code, questionnaire){
        super(id, code);
        this._commandTrees = [];
        this._questionnaire = questionnaire;
    }

    get questionnaire(){
        return this._questionnaire;
    }

    get commandTrees(){
        return this._commandTrees;
    }
 
    attach(commandTree){
        this._commandTrees.push(commandTree);
    }

    accept(visitor){ 
        /*---------------------
        Case ! Not root node  
        ----------------------*/
        visitor.visitNodeTree(this);
        console.log("-- root node  --")
        //console.log(this);

        for(let commandTree of this._commandTrees){
            //console.log("-- root node  --")
            console.log(commandTree);
        }
        
    }


}