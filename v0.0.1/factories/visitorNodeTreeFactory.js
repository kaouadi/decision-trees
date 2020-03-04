const VisitorNodeTree = require('../models/visitorNodeTree')
module.exports =  class VisitorNodeTreeFactory{

    static createVisitorNodeTree(
            parameters
    ){

        const visitorNodeTree = new VisitorNodeTree();
        visitorNodeTree.injectParametersToVisit(parameters);

        return visitorNodeTree;


    }
    

}