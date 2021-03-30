
const QuestionnaireFactory = require('../factories/questionnaireFactory');
const ItemFactory = require('../factories/itemFactory');

test('Create questionnaire with ' , () => {

    // parameters {a: 10, b: 100, c: 650}
    /*
        < 5 or >= 5
        < 30 or >= 30
        < 500 or >= 500
    */

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

    console.log(questionnaireA);
    console.log(questionnaireC);
    console.log(questionnaireE);
 
    
  

})
