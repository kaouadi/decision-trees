const RootDecisionTree = require('../models/rootDecisionTree');
const DecisionTree = require('../models/decisionTree');
const VisitorDecisionTree = require('../models/visitorDecisionTree');

test('check item test', () => {
    const rootDecisionTree = new RootDecisionTree();
    expect(rootDecisionTree).not.toBeUndefined();
    /*
              ROOT
           A       B
         C   D   E    F
    */
     
    // --- A ---- //
    let ruleA = '{a} > 100';
    let decisionTreeA = new DecisionTree();
    decisionTreeA.name = 'Node A';
    decisionTreeA.ruleExp = ruleA;
    rootDecisionTree.attach(decisionTreeA);

        
    // --- B ---- //
    let ruleB = '{a} <= 100';
    let decisionTreeB = new DecisionTree();
    decisionTreeB.name = 'Node B';
    decisionTreeB.ruleExp = ruleB;
    rootDecisionTree.attach(decisionTreeB);

    // --- C ---- //
    let ruleC = '{c} > 40';
    let decisionTreeC = new DecisionTree();
    decisionTreeC.name = 'Node C';
    decisionTreeC.ruleExp = ruleC;
    decisionTreeA.attach(decisionTreeC);

    // --- D ---- //
    let ruleD = '{c} <= 40';
    let decisionTreeD = new DecisionTree();
    decisionTreeD.name = 'Node D';
    decisionTreeD.ruleExp = ruleD;
    decisionTreeA.attach(decisionTreeD);



    // --- E ---- //
    let ruleE = '{d} > 300';
    let decisionTreeE = new DecisionTree();
    decisionTreeE.name = 'Node E';
    decisionTreeE.ruleExp = ruleE;
    decisionTreeB.attach(decisionTreeE);

    // --- F ---- //
    let ruleF = '{d} <= 300';
    let decisionTreeF = new DecisionTree();
    decisionTreeF.name = 'Node F';
    decisionTreeF.ruleExp = ruleF;
    decisionTreeB.attach(decisionTreeF);
    
    let parameters = {a: 500, b: 40, c: 56.5 ,d: 1000};
    const visitor = new VisitorDecisionTree();
    visitor.injectParametersToVisit(parameters);
    rootDecisionTree.accept(visitor);
    expect(visitor.a).toEqual(500);
    console.log(visitor.state);
    expect(visitor.state.length).toEqual(2);

});