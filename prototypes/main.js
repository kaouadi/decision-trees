class Item{


    constructor(){
        this._name = null;
        this._items = null;
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    get items(){
        return this._items;
    }

    add(item){
        this._items.push(item);
    }


    accept(visitor){

        visitor.visitItem(self)
        for(var currentItem of this._items){
            currentItem.accept(visitor)
        }


    }

}

