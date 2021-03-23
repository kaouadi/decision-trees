const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
const VisitorNodeTreeFactory = require('../factories/visitorNodeTreeFactory');

test('check item test', () => {
    const ROOT = DecisionTreeFactory.createDecisionTree('ROOT', null )
    expect(ROOT).not.toBeUndefined();
    /*
              ROOT
           A       B
         C   D   E    F
        G H I J K L  M N
         */
     
    
    // --- A ---- //
    const _A = LeafTreeFactory.createLeafTree(
    'A',
    '{a} > 100', 
    'Message A')

    ROOT.attach(_A);
    
     
    // --- B ---- //
    const _B = DecisionTreeFactory.createDecisionTree('B', '{a} <= 100')
    ROOT.attach(_B);

    
    // --- C ---- //
    const _C = LeafTreeFactory.createLeafTree(
      'C',
      '{b} > 500', 
      'Message C')
  
    _B.attach(_C);
    
    // --- D ---- //
    const _D = DecisionTreeFactory.createDecisionTree('D', '{b} <= 500')
    _B.attach(_D);
    
    // --- E ---- //
    const _E = LeafTreeFactory.createLeafTree(
      'E',
      '{c} == true', 
      'Message E')
  
      _D.attach(_E);
    
    // --- F ---- //
    const _F = DecisionTreeFactory.createDecisionTree('{c} == false', 'F')
    _D.attach(_F);
   
    /*
    // --- G ---- //
    const _G = LeafTreeFactory.createLeafTree(
      'G',
      '{a} > 100', 
      'Message G')
  
      _F.attach(_G);

    // --- H ---- //
    const _H = DecisionTreeFactory.createDecisionTree('{a} > 100', 'H')
    _F.attach(_D);

    // --- I ---- //
    const _I = LeafTreeFactory.createLeafTree(
      'E',
      '{a} > 100', 
      'Message E')
  
      _H.attach(_I);

    // --- J ---- //


    // --- K ---- //


    // --- L ---- //


    // --- M ---- //
 

    // --- N ---- //

    */
    const visitor = VisitorNodeTreeFactory.createVisitorNodeTree(
      {a: 50, b: 300, c: true}
    )

    expect(visitor.a).toEqual(50);
    ROOT.accept(visitor);
    console.log(visitor.state);
    //expect(visitor.state.length).toEqual(2);

});