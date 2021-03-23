const CommandTree = require('../models/commandTree')
module.exports =  class CommandTreeFactory{

    static createCommandTree(
            expression
    ){

        const commandTree = new CommandTree(expression);
        return commandTree;


    }
    

}
