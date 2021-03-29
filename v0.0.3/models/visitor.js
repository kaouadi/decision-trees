module.exports =  class Visitor{

    constructor(){

        this._state = [];
        this._entries = null;

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
    decorateFromDictionary(dictionary){
        /* -- Decorate public attributes ------

            example :  dictionary = [
                {key: 'a', type: 'decimal', value: 10},
                {key: 'b', type: 'decimal', value: null},
                {key: 'c', type: 'decimal', value: null}
            ]

            ----> decorateFromdictionary(params)
            ----> Define private properties
            ----> this._a = 2;
            ----> Define public properties
            ----> get a(){
                      return this._a ;
                  }
        */
        var i;
        for (i = 0; i < dictionary.length; i++) {

            var key = dictionary[i].key ;
            var type = dictionary[i].type ;
            var value;
            if(dictionary[i].value != null){
                switch (dictionary[i].type) {
                    case 'string':
                        value = String(dictionary[i].value);
                        break;
                    case 'decimal':
                        value = Number(dictionary[i].value);
                        break;
                    case 'integer':
                        value = parseInt(dictionary[i].value);
                        break;
                    default:
                        console.log(`Sorry, we are out of ${type}.`);
                        break;
                }
            }

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
      let formula =  eval('`' + commandTree.expression.replace('${','${this.') + '`');
      //console.log(formula);
      //console.log(eval(formula));
      if (formula.includes("null")){
        commandTree.isValid = false;
      }
      else
      {
        commandTree.isValid = eval(formula);
      }
        
    }
    visitNodeTree(nodeTree){

        this._state.push(nodeTree);
    }
    
    
    get state(){
        return this._state ;
    }

    get entries(){
        return this._entries;
    }


}