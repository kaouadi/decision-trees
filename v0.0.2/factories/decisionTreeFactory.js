const DecisionTree = require('../models/decisionTree')
module.exports =  class DecisionTreeFactory{

    static createDecisionTree(
            name,
            expression
    ){

        const decisionTree = new DecisionTree();
        decisionTree.name = name;
        decisionTree.expression = expression;
        return decisionTree;


    }
    

}
