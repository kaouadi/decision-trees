const Questionnaire = require('../models/questionnaire')
module.exports =  class QuestionnaireFactory{

    static createQuestionnaire(
            id,
            code
    ){

        const questionnaire = new Questionnaire(id,code);
        return questionnaire;


    }
    
    

}
