const DecisionTree = require('../models/decisionTree')
module.exports =  class DecisionTreeFactory{

    static createDecisionTree(
            name,
            ruleExp
    ){

        const decisionTree = new DecisionTree();
        decisionTree.name = name;
        decisionTree.ruleExp = ruleExp;
        return decisionTree;


    }
    

}
