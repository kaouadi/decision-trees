const DecisionTreeFactory = require('../factories/decisionTreeFactory');
const LeafTreeFactory = require('../factories/LeafTreeFactory');
//const VisitorFactory = require('../factories/visitorFactory');
const CommandTreeFactory = require('../factories/commandTreeFactory');
const QuestionnaireFactory = require('../factories/questionnaireFactory');

test('Create Node V0.0.3' , () => {


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


    decisionTreeA.attach(CommandTreeFactory.createCommandTree("${a} < 5",leafB));
    decisionTreeA.attach(CommandTreeFactory.createCommandTree("${a} >= 1",decisionTreeC))

    decisionTreeC.attach(CommandTreeFactory.createCommandTree("${b} > 100",leafD))
    decisionTreeC.attach(CommandTreeFactory.createCommandTree("${a} <= 200",decisionTreeE))

    decisionTreeE.attach(CommandTreeFactory.createCommandTree("${a} > 4",leafF))
    decisionTreeE.attach(CommandTreeFactory.createCommandTree("${a} <= 10",leafG))


    
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

    //console.log(visitor.state);
    

});