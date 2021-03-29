const Visitor = require('../models/visitor')
module.exports =  class VisitorFactory{

    static createVisitor(
        parameters
    ){

        const visitor = new Visitor();
        visitor.decorate(parameters);

        return visitor;


    }
    static createVisitorFromDictionary(
        parameters
    ){

        const visitor = new Visitor();
        visitor.decorateFromDictionary(parameters);

        return visitor;


    }
    

}