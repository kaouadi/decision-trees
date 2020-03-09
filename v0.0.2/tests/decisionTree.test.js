const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
const VisitorFactory = require('../factories/visitorFactory');
const CommandTreeFactory = require('../factories/commandTreeFactory');

test('Create Node', () => {
 
    const A = DecisionTreeFactory.createDecisionTree('A', 'a >= 1' )

    const C = LeafTreeFactory.createLeafTree('C', 'Message C');
    const D = DecisionTreeFactory.createDecisionTree('D', 'b == true');


    A.attach(CommandTreeFactory.createCommandTree(true, C))
    A.attach(CommandTreeFactory.createCommandTree(false, D))

    /*
    const I = LeafTreeFactory.createLeafTree('I', 'Message I');
    const J = DecisionTreeFactory.createDecisionTree('J', 'c == false');

    D.attach(CommandTreeFactory.createCommandTree(true, I))
    D.attach(CommandTreeFactory.createCommandTree(false, J))

    const L = LeafTreeFactory.createLeafTree('L', 'Message L');
    const M = LeafTreeFactory.createLeafTree('M', 'Message M');

    J.attach(CommandTreeFactory.createCommandTree(true, I))
    J.attach(CommandTreeFactory.createCommandTree(false, J))
    */
    /*
           A       
         C   D  
            I J
             L M
         */
    expect(A).not.toBeUndefined();

});