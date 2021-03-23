module.exports =  class Visitor{

    constructor(){

        this._state = [];

    }

    decorate(attributes){
        /* -- Decorate public attributes ------

            example :  params = {a: 2, b: 3, c: 4}
            ----> decorateAttributes(params)
            ----> Define private properties
            ----> this._a = 2;
            ----> Define public properties
            ----> get a(){
                      return this._a ;
                  }
        */
        for (let [key, value] of Object.entries(attributes)) {
            Object.defineProperty(this, `_${key}`, {
                value: value,
                writable: true
            });
            Object.defineProperty(this, `${key}`, { get: function(){
               return eval(`this._${key}`);
            }});
        }
    }
    visitCommandTree(commandTree){

       /*
          Evaluate commandTree expression
          example :
          variable : 
                a = 1
          {a} > 3
          return false
       */

      let isValid = eval('`' + commandTree.expression + '`');
      commandTree.isValid = isValid ;

        
    }
    visitNodeTree(decisionTree){

       this.save(decisionTree);
       
    }

    
    get state(){
        return this._state ;
    }

    save(nodeTree){
        this._state.push(nodeTree)
    }


}