const Item = require('../models/item')
module.exports =  class ItemFactory{

    static createItem(
        id,
        key,
        type,
        content,
        itemValue
    ){

        const item = new Item(id,
            key,
            type,
            content,
            itemValue);
        return item;


    }
    static createItems(
       questionnaire,
       items
    ){

        items.forEach(function(item){

            questionnaire.attach(new Item(item.id,
                item.key,
                item.type,
                item.content,
                item.itemValue))

        })

    }
    

}
