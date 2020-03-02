const DecisionTree = require('../models/decisionTree');
const Visitor = require('../models/visitorNodeTree');

test('check item test', () => {
    const rootDecisionTree = new DecisionTree();
    expect(rootDecisionTree).not.toBeUndefined();
    /*
              ROOT
           A       B
         C   D   E    F
        G H I J K L  M N
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

    // --- G ---- //
    let ruleG = '{d} <= 300';
    let decisionTreeG = new DecisionTree();
    decisionTreeG.name = 'Node G';
    decisionTreeG.ruleExp = ruleG;
    decisionTreeC.attach(decisionTreeG);

    // --- H ---- //
    let ruleH = '{d} <= 300';
    let decisionTreeH = new DecisionTree();
    decisionTreeH.name = 'Node H';
    decisionTreeH.ruleExp = ruleH;
    decisionTreeC.attach(decisionTreeH);

    // --- I ---- //
    let ruleI = '{d} <= 300';
    let decisionTreeI = new DecisionTree();
    decisionTreeI.name = 'Node I';
    decisionTreeI.ruleExp = ruleI;
    decisionTreeD.attach(decisionTreeI);

    // --- J ---- //
    let ruleJ = '{d} <= 300';
    let decisionTreeJ = new DecisionTree();
    decisionTreeJ.name = 'Node J';
    decisionTreeJ.ruleExp = ruleJ;
    decisionTreeD.attach(decisionTreeJ);

    // --- K ---- //
    let ruleK = '{d} <= 300';
    let decisionTreeK = new DecisionTree();
    decisionTreeK.name = 'Node K';
    decisionTreeK.ruleExp = ruleK;
    decisionTreeE.attach(decisionTreeK);

    // --- L ---- //
    let ruleL = '{d} <= 300';
    let decisionTreeL = new DecisionTree();
    decisionTreeL.name = 'Node L';
    decisionTreeL.ruleExp = ruleL;
    decisionTreeE.attach(decisionTreeL);

    // --- M ---- //
    let ruleM = '{d} <= 300';
    let decisionTreeM = new DecisionTree();
    decisionTreeM.name = 'Node M';
    decisionTreeM.ruleExp = ruleM;
    decisionTreeF.attach(decisionTreeM);

    // --- N ---- //
    let ruleN = '{d} <= 300';
    let decisionTreeN = new DecisionTree();
    decisionTreeN.name = 'Node M';
    decisionTreeN.ruleExp = ruleN;
    decisionTreeF.attach(decisionTreeN);
    
    let parameters = {a: 500, b: 40, c: 56.5 ,d: 1000};
    const visitor = new Visitor();
    visitor.injectParametersToVisit(parameters);
    rootDecisionTree.accept(visitor);
    expect(visitor.a).toEqual(500);
    console.log(visitor.state);
    expect(visitor.state.length).toEqual(2);

});