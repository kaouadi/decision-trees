const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
const VisitorFactory = require('../factories/visitorFactory');
const CommandTreeFactory = require('../factories/commandTreeFactory');

test('Create Node', () => {
 
    const A = DecisionTreeFactory.createDecisionTree('A', 'a > 0' )

    const B = LeafTreeFactory.createLeafTree('B', 'Message B');
    const C = DecisionTreeFactory.createDecisionTree('C', 'b == true');


    A.attach(CommandTreeFactory.createCommandTree(true, B))
    A.attach(CommandTreeFactory.createCommandTree(false, C))

    
    const D = LeafTreeFactory.createLeafTree('D', 'Message D');
    const E = DecisionTreeFactory.createDecisionTree('E', 'c == true');

    C.attach(CommandTreeFactory.createCommandTree(true, D))
    C.attach(CommandTreeFactory.createCommandTree(false, E))
    
    const F = LeafTreeFactory.createLeafTree('F', 'Message F');
    const G = DecisionTreeFactory.createDecisionTree('G', 'd == true');

    E.attach(CommandTreeFactory.createCommandTree(true, F))
    E.attach(CommandTreeFactory.createCommandTree(false, G))
    
    /*
           A       
         B    C  
            D    E
               F    G
         */
    expect(A).not.toBeUndefined();
    //console.log(A);
    const visitor = VisitorFactory.createVisitor(
        {a: 0, b: false, c: false, d: true}
      )
    A.accept(visitor);

    console.log(visitor.state);
    

});