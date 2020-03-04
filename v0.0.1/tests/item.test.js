const ItemTest = require('../models/itemTest');

test('check item test', () => {
    const item = new ItemTest();
    expect(item).not.toBeUndefined();
});