const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
const VisitorFactory = require('../factories/visitorFactory');
const CommandTreeFactory = require('../factories/commandTreeFactory');
const QuestionnaireFactory = require('../factories/questionnaireFactory');

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

    console.log(visitor);
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

  console.log(visitor);
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

  console.log(visitor);
  //console.log(visitor.a);
  

})