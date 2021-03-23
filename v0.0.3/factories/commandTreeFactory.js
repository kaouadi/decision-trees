const CommandTree = require('../models/commandTree')
module.exports =  class CommandTreeFactory{

    static createCommandTree(
            expression,
            currentNodeTree
    ){

        const commandTree = new CommandTree(expression, currentNodeTree);
        return commandTree;


    }
    

}
