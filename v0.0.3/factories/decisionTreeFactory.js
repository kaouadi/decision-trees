const DecisionTree = require('../models/decisionTree')
module.exports =  class DecisionTreeFactory{

    static createDecisionTree(
            id,
            code
    ){

        const decisionTree = new DecisionTree(id,code);
        return decisionTree;


    }
    
    

}
