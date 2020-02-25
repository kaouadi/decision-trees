class DecisionTree{
    constructor(){
        this._name = null;
        this._decisionTrees = [];
        this._validated = true;
        this._expression = null;
    }
    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get decisionTrees(){
        return this._decisionTrees;
    }

    get validated(){
        return this._validated;
    }

    set validated(value){
        this._validated = value;
    }

    set expression(value){
        this._expression = value;
    }

    get expression(){
        return this._expression;
    }

    add(item){
        this._decisionTrees.push(item);
    }

    accept(visitor){

        visitor.visitItem(self)
        for(var currentItem of this._items){
            if (currentItem.validated){
                currentItem.accept(visitor)
            } 
            
        }


    }


}

class VisitorDesisionTree{


    visitDecisionTree(decisionTree){

        // Destructing to map visitor object
        `   
            let obj = {a: 1, b:2, c:3, d:4}
            const {a,b,c,d} = obj

        `

    }


}

