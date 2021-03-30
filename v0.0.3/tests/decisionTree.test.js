const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
const VisitorFactory = require('../factories/visitorFactory');
const CommandTreeFactory = require('../factories/commandTreeFactory');
const QuestionnaireFactory = require('../factories/questionnaireFactory');
const ItemFactory = require('../factories/itemFactory');

test('Create Node V0.0.3 with parameters {a: 10, b: 100, c: 650} ' , () => {


    const questionnaireA = QuestionnaireFactory.createQuestionnaire(1,"Q_A")
    const questionnaireC = QuestionnaireFactory.createQuestionnaire(2,"Q_C")
    const questionnaireE = QuestionnaireFactory.createQuestionnaire(3,"Q_E")
 
    const decisionTreeA = DecisionTreeFactory.createDecisionTree(1,"A",questionnaireA);
    const decisionTreeC = DecisionTreeFactory.createDecisionTree(2,"C",questionnaireC);
    const decisionTreeE = DecisionTreeFactory.createDecisionTree(3,"E",questionnaireE);


    const leafB = LeafTreeFactory.createLeafTree(5,"B");
    const leafD = LeafTreeFactory.createLeafTree(6,"D");
    const leafF = LeafTreeFactory.createLeafTree(5,"F");
    const leafG = LeafTreeFactory.createLeafTree(6,"G");

    commandTreeA_0 = CommandTreeFactory.createCommandTree("${a} < 5");
    commandTreeA_0.currentNodeTree = leafB

    commandTreeA_1 = CommandTreeFactory.createCommandTree("${a} >= 5");
    commandTreeA_1.currentNodeTree = decisionTreeC

    decisionTreeA.attach(commandTreeA_0);
    decisionTreeA.attach(commandTreeA_1);

  
    commandTreeC_0 = CommandTreeFactory.createCommandTree("${b} < 100");
    commandTreeC_0.currentNodeTree = leafD

    commandTreeC_1 = CommandTreeFactory.createCommandTree("${b} >= 30");
    commandTreeC_1.currentNodeTree = decisionTreeE
  
    decisionTreeC.attach(commandTreeC_0);
    decisionTreeC.attach(commandTreeC_1);
    
    commandTreeE_0 = CommandTreeFactory.createCommandTree("${c} < 500");
    commandTreeE_0.currentNodeTree = leafF

    commandTreeE_1 = CommandTreeFactory.createCommandTree("${c} >= 500");
    commandTreeE_1.currentNodeTree = leafG

    decisionTreeE.attach(commandTreeE_0);
    decisionTreeE.attach(commandTreeE_1);
    

    let attributes = {a: 10, b: 100, c: 650}
    const visitor = VisitorFactory.createVisitor(attributes);
    decisionTreeA.accept(visitor);
 
    
    /*
           A       
         B    C  
            D    E
               F    G
         */
    //expect(A).not.toBeUndefined();

    //console.log(visitor);
    //console.log(visitor.a);
    

});

test('Create Node V0.0.3 with parameters {a: 10, b: null, c: null} ' , () => {


  const questionnaireA = QuestionnaireFactory.createQuestionnaire(1,"Q_A")
  const questionnaireC = QuestionnaireFactory.createQuestionnaire(2,"Q_C")
  const questionnaireE = QuestionnaireFactory.createQuestionnaire(3,"Q_E")

  const decisionTreeA = DecisionTreeFactory.createDecisionTree(1,"A",questionnaireA);
  const decisionTreeC = DecisionTreeFactory.createDecisionTree(2,"C",questionnaireC);
  const decisionTreeE = DecisionTreeFactory.createDecisionTree(3,"E",questionnaireE);


  const leafB = LeafTreeFactory.createLeafTree(5,"B");
  const leafD = LeafTreeFactory.createLeafTree(6,"D");
  const leafF = LeafTreeFactory.createLeafTree(5,"F");
  const leafG = LeafTreeFactory.createLeafTree(6,"G");

  commandTreeA_0 = CommandTreeFactory.createCommandTree("${a} < 5");
  commandTreeA_0.currentNodeTree = leafB

  commandTreeA_1 = CommandTreeFactory.createCommandTree("${a} >= 5");
  commandTreeA_1.currentNodeTree = decisionTreeC

  decisionTreeA.attach(commandTreeA_0);
  decisionTreeA.attach(commandTreeA_1);


  commandTreeC_0 = CommandTreeFactory.createCommandTree("${b} < 100");
  commandTreeC_0.currentNodeTree = leafD

  commandTreeC_1 = CommandTreeFactory.createCommandTree("${b} >= 30");
  commandTreeC_1.currentNodeTree = decisionTreeE

  decisionTreeC.attach(commandTreeC_0);
  decisionTreeC.attach(commandTreeC_1);
  
  commandTreeE_0 = CommandTreeFactory.createCommandTree("${c} < 500");
  commandTreeE_0.currentNodeTree = leafF

  commandTreeE_1 = CommandTreeFactory.createCommandTree("${c} >= 500");
  commandTreeE_1.currentNodeTree = leafG

  decisionTreeE.attach(commandTreeE_0);
  decisionTreeE.attach(commandTreeE_1);
  

  let attributes = {a: 10, b: 10, c: null}
  const visitor = VisitorFactory.createVisitor(attributes);
  decisionTreeA.accept(visitor);

  
  /*
         A       
       B    C  
          D    E
             F    G
       */
  //expect(A).not.toBeUndefined();

  //console.log(visitor);
  //console.log(visitor.a);
  

})

test('Create Node V0.0.3 with parameters dictionnary ' , () => {


  const questionnaireA = QuestionnaireFactory.createQuestionnaire(1,"Q_A")
  const questionnaireC = QuestionnaireFactory.createQuestionnaire(2,"Q_C")
  const questionnaireE = QuestionnaireFactory.createQuestionnaire(3,"Q_E")

  const decisionTreeA = DecisionTreeFactory.createDecisionTree(1,"A",questionnaireA);
  const decisionTreeC = DecisionTreeFactory.createDecisionTree(2,"C",questionnaireC);
  const decisionTreeE = DecisionTreeFactory.createDecisionTree(3,"E",questionnaireE);


  const leafB = LeafTreeFactory.createLeafTree(5,"B");
  const leafD = LeafTreeFactory.createLeafTree(6,"D");
  const leafF = LeafTreeFactory.createLeafTree(5,"F");
  const leafG = LeafTreeFactory.createLeafTree(6,"G");

  commandTreeA_0 = CommandTreeFactory.createCommandTree("${a} < 5");
  commandTreeA_0.currentNodeTree = leafB

  commandTreeA_1 = CommandTreeFactory.createCommandTree("${a} >= 5");
  commandTreeA_1.currentNodeTree = decisionTreeC

  decisionTreeA.attach(commandTreeA_0);
  decisionTreeA.attach(commandTreeA_1);


  commandTreeC_0 = CommandTreeFactory.createCommandTree("${b} < 100");
  commandTreeC_0.currentNodeTree = leafD

  commandTreeC_1 = CommandTreeFactory.createCommandTree("${b} >= 30");
  commandTreeC_1.currentNodeTree = decisionTreeE

  decisionTreeC.attach(commandTreeC_0);
  decisionTreeC.attach(commandTreeC_1);
  
  commandTreeE_0 = CommandTreeFactory.createCommandTree("${c} < 500");
  commandTreeE_0.currentNodeTree = leafF

  commandTreeE_1 = CommandTreeFactory.createCommandTree("${c} >= 500");
  commandTreeE_1.currentNodeTree = leafG

  decisionTreeE.attach(commandTreeE_0);
  decisionTreeE.attach(commandTreeE_1);
  

  let dictionnary = [
      {key: 'a', type: 'decimal', value: 10},
      {key: 'b', type: 'decimal', value: null},
      {key: 'c', type: 'decimal', value: null}
    ];

  const visitor = VisitorFactory.createVisitorFromDictionary(dictionnary);
  decisionTreeA.accept(visitor);

  
  /*
         A       
       B    C  
          D    E
             F    G
       */
  //expect(A).not.toBeUndefined();

  //console.log(visitor);
  //console.log(visitor.a);
  

})

test('Create Node V0.0.3 with questionnaire belonged items ' , () => {


  const questionnaireA = QuestionnaireFactory.createQuestionnaire(1,"Q_A")

  const itemsA = [
      {id: 1, key: 'a', content: 'valeur 4', type: 'decimal', itemValue: 4},
      {id: 2, key: 'a', content: 'valeur 7', type: 'decimal', itemValue: 7},
  ]
  ItemFactory.createItems(questionnaireA, itemsA)
  
  const questionnaireC = QuestionnaireFactory.createQuestionnaire(2,"Q_C")
  const itemsC = [
      {id: 3, key: 'b', content: 'valeur 15', type: 'decimal', itemValue: 15},
      {id: 4, key: 'b', content: 'valeur 35', type: 'decimal', itemValue: 35},

  ]
  ItemFactory.createItems(questionnaireC, itemsC)
  const questionnaireE = QuestionnaireFactory.createQuestionnaire(3,"Q_E")
  const itemsE = [
      {id: 5, key: 'c', content: 'valeur 400', type: 'decimal', itemValue: 400},
      {id: 6, key: 'c', content: 'valeur 600', type: 'decimal', itemValue: 600},

  ]
  ItemFactory.createItems(questionnaireE, itemsE)

  const decisionTreeA = DecisionTreeFactory.createDecisionTree(1,"A",questionnaireA);
  const decisionTreeC = DecisionTreeFactory.createDecisionTree(2,"C",questionnaireC);
  const decisionTreeE = DecisionTreeFactory.createDecisionTree(3,"E",questionnaireE);


  const leafB = LeafTreeFactory.createLeafTree(5,"B");
  const leafD = LeafTreeFactory.createLeafTree(6,"D");
  const leafF = LeafTreeFactory.createLeafTree(5,"F");
  const leafG = LeafTreeFactory.createLeafTree(6,"G");

  commandTreeA_0 = CommandTreeFactory.createCommandTree("${a} < 5");
  commandTreeA_0.currentNodeTree = leafB

  commandTreeA_1 = CommandTreeFactory.createCommandTree("${a} >= 5");
  commandTreeA_1.currentNodeTree = decisionTreeC

  decisionTreeA.attach(commandTreeA_0);
  decisionTreeA.attach(commandTreeA_1);


  commandTreeC_0 = CommandTreeFactory.createCommandTree("${b} < 100");
  commandTreeC_0.currentNodeTree = leafD

  commandTreeC_1 = CommandTreeFactory.createCommandTree("${b} >= 30");
  commandTreeC_1.currentNodeTree = decisionTreeE

  decisionTreeC.attach(commandTreeC_0);
  decisionTreeC.attach(commandTreeC_1);
  
  commandTreeE_0 = CommandTreeFactory.createCommandTree("${c} < 500");
  commandTreeE_0.currentNodeTree = leafF

  commandTreeE_1 = CommandTreeFactory.createCommandTree("${c} >= 500");
  commandTreeE_1.currentNodeTree = leafG

  decisionTreeE.attach(commandTreeE_0);
  decisionTreeE.attach(commandTreeE_1);
  

  let dictionnary = [
      {key: 'a', type: 'decimal', value: 10},
      {key: 'b', type: 'decimal', value: null},
      {key: 'c', type: 'decimal', value: null}
    ];

  const visitor = VisitorFactory.createVisitorFromDictionary(dictionnary);
  decisionTreeA.accept(visitor);

  
  /*
         A       
       B    C  
          D    E
             F    G
       */
  //expect(A).not.toBeUndefined();

  //console.log(visitor);
  console.log(JSON.stringify(visitor))
  //console.log(questionnaireA)
  //console.log(visitor.a);
  

})


