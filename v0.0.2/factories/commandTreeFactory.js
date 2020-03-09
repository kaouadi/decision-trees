const DecisionTree = require('../models/commandTree')
module.exports =  class CommandTreeFactory{

    static createCommandTree(
            conditional,
            decisionTree
    ){

        const commandTree = new CommandTree();
        commandTree.conditional = conditional;
        commandTree.decisionTree = decisionTree;
        return commandTree;


    }
    

}
