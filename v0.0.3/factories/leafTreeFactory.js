const LeafTree = require('../models/leafTree')
module.exports =  class LeafTreeFactory{

    static createLeafTree(
            name,
            message
    ){

        const leafTree = new LeafTree();
        leafTree.name = name;
        leafTree.message = message;
        return leafTree;


    }
    

}