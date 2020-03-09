const VisitorNodeTree = require('../models/visitor')
module.exports =  class VisitorFactory{

    static createVisitor(
            parameters
    ){

        const visitor = new Visitor();
        visitor.injectParametersToVisit(parameters);

        return visitor;


    }
    

}