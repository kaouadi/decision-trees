const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
const VisitorFactory = require('../factories/visitorFactory');
const CommandTreeFactory = require('../factories/commandTreeFactory');
const QuestionnaireFactory = require('../factories/questionnaireFactory');

test('Create Node V0.0.3' , () => {


    const questionnaireA = QuestionnaireFactory.createQuestionnaire(1,"Q_A")
    const questionnaireC = QuestionnaireFactory.createQuestionnaire(2,"Q_C")
    const questionnaireE = QuestionnaireFactory.createQuestionnaire(3,"Q_E")
 
    const decisionTreeA = DecisionTreeFactory.createDecisionTree(1,"A",questionnaireA);
    const decisionTreeC = DecisionTreeFactory.createDecisionTree(2,"C",questionnaireC);
    //const decisionTreeE = DecisionTreeFactory.createDecisionTree(3,"E",questionnaireE);


    const leafB = LeafTreeFactory.createLeafTree(5,"B");
    //const leafD = LeafTreeFactory.createLeafTree(6,"D");
    //const leafF = LeafTreeFactory.createLeafTree(5,"F");
    //const leafG = LeafTreeFactory.createLeafTree(6,"G");

    commandTreeA_0 = CommandTreeFactory.createCommandTree("${a} < 5");
    commandTreeA_0.currentNodeTree = leafB

    commandTreeA_1 = CommandTreeFactory.createCommandTree("${a} >= 5");
    commandTreeA_1.currentNodeTree = decisionTreeC

    decisionTreeA.attach(commandTreeA_0);
    decisionTreeA.attach(commandTreeA_1);


    let attributes = {a: 10, b: null, c: null}
    const visitor = VisitorFactory.createVisitor(attributes);
    decisionTreeA.accept(visitor);
    //console.log(decisionTreeA);

    /*
    decisionTreeA.commandTrees.forEach(function(item) {
      
      console.log("---start---");
      console.log(item);
      console.log("---end---");


    });
    */
    

    /*
           A       
         B    C  
            D    E
               F    G
         */
    //expect(A).not.toBeUndefined();
    //console.log(A);
    //const visitor = VisitorFactory.createVisitor(
    //    {a: 0, b: false, c: false, d: true}
    //  )
    //A.accept(visitor);

    console.log(visitor);
    console.log(visitor._a);
    

});