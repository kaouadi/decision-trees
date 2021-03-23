const Visitor = require('../models/visitor')
module.exports =  class VisitorFactory{

    static createVisitor(
        attributes
    ){

        const visitor = new Visitor();
        visitor.decorate(attributes);

        return visitor;


    }
    

}