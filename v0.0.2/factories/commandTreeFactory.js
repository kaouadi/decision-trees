const DecisionTree = require('../models/commandTree')
module.exports =  class CommandTreeFactory{

    static createCommandTree(
            conditional
    ){

        const commandTree = new CommandTree();
        commandTree.conditional = conditional;
        return commandTree;


    }
    

}
