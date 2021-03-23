const DecisionTree = require('../models/decisionTree')
module.exports =  class DecisionTreeFactory{

    static createDecisionTree(
            id,
            code,
            questionnaire
    ){

        const decisionTree = new DecisionTree(id,code, questionnaire);
        return decisionTree;


    }
    
    

}
