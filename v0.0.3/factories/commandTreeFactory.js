const CommandTree = require('../models/commandTree')
module.exports =  class CommandTreeFactory{

    static createCommandTree(
            expression,
            previousNodeTree
    ){

        const commandTree = new CommandTree(expression, previousNodeTree);
        return commandTree;


    }
    

}
