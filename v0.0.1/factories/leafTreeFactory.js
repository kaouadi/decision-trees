const LeafTree = require('../models/leafTree')
module.exports =  class LeafTreeFactory{

    static createLeafTree(
            name,
            ruleExp,
            message
    ){

        const leafTree = new LeafTree();
        leafTree.name = name;
        leafTree.ruleExp = ruleExp;
        leafTree.message = message;
        return leafTree;


    }
    

}