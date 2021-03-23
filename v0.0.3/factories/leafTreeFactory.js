const LeafTree = require('../models/leafTree')
module.exports =  class LeafTreeFactory{

    static createLeafTree(
        id,
        code
    ){

    const leafTree = new LeafTree(id,code);
    return leafTree;


    }
    

}