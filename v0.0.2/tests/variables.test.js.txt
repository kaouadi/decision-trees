function expressionAlgorithmicProcessing(expression, option){
    let items = [['>','<='], ['<','>='], ['>=','<'], ['<=','>'], ['==','!='], ['!=','==']];
    let ruleExpr = expression;
    for (const item of items) {
      if (expression.includes(item[0])){
         if (option == false){
            ruleExpr = expression.replace(item[0], item[1]);
         }
      }
    }
    return ruleExpr;
}


test('replace expression {a} > 4', () => {
    
 let expression = '{a} > 4';
 let option = true;

 expect(expressionAlgorithmicProcessing(expression, option)).toBe('{a} > 4');
 

});

test('replace expression {a} < 4 by the opposite', () => {
    
   let expression = '{a} < 4';
   let option = false;
   expect(expressionAlgorithmicProcessing(expression, option)).toBe('{a} >= 4');
    
   
   });

test('replace expression {a} == 4 by the opposite', () => {
    
   
    let expression = '{a} == 4';
    let option = true ;
    expect(expressionAlgorithmicProcessing(expression, option)).toBe('{a} == 4');
    
   
});