class CalculatorController{

   constructor(previusOperation, currentOperation, buttons){
     this.previusOperationEl = previusOperation;
     this.currentOperationEl = currentOperation;
     this._operation = [];
     this.buttons = buttons;
     this.addEventButtons();
   }

   //Getters and Setters
   get previusOperation(){
      return this.previusOperationEl;
   }

   set previusOperation(value){
      this.previusOperationEl.innerHTML = value;
   }

   get currentOperation(){
      return this.currentOperationEl;
   }

   set currentOperation(value){
      this.currentOperationEl.innerHTML = value;
   }

   //Events clicks
   addEventButtons(){
      this.buttons.forEach(btn => {
         btn.addEventListener('click', (e) => {
            const value = e.target.innerText;
            this.execBtn(value);
         });
      });
   }

   execBtn(btn){
      switch(btn){
         case '0':
         case '1':
         case '2':
         case '3':
         case '4':
         case '5':
         case '6':
         case '7':
         case '8':
         case '9':
            this.addOperation(parseInt(btn));
         break;
         case 'AC':
            this.clearAll();
         break;
         case 'CE':
            this.clearEntry();
         break;
         case '/':
            this.addOperation(btn);
         break;
         case '-':
            this.addOperation(btn);
         break;
         case '+':
            this.addOperation(btn);
         break;
         case '*':
            this.addOperation(btn);
         break;
         default:
            this.setError();
      }
   }
   
   clearEntry(){
      this._operation.pop();
   }

   clearAll(){
      this._operation = [];
   }

   getLastOperation(){
      return this._operation[this._operation.length-1];
   }

   isOperator(value){
      return ['+', '-', '*', '/'].indexOf(value) > -1;
   }

   setLastOperation(value){
      this._operation[this._operation.length-1] = value;
   }

   pushOperation(value){
      this._operation.push(value);

      if(this._operation.length > 3){
         this.calc();  
      }
   }

   calc(){
      let last = this._operation.pop();
      let result = eval(this._operation.join(''));
      this._operation = [result, last];
      this.setLastNumberToDisplay();
   }

   addOperation(value){
      
      //Verify if valor not number
      if(isNaN(this.getLastOperation())){

         if(this.isOperator(value)){
            //switch if you are an operator
            this.setLastOperation(value);
            
         }else if(isNaN(value)){
            //Outra coisa

         }else{
            //First element
            this.pushOperation(value);
            this.setLastNumberToDisplay();
         }

      }else{
         if(this.isOperator(value)){
            //switch if you are an operator
            this.pushOperation(value);
         }else{
            const newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));

            //Atualizar Display
            this.setLastNumberToDisplay();
         }
      }
      
   }

   setLastNumberToDisplay(){
      let lastNumber;
      for(let i = this._operation.length-1; i >= 0; i--){
         if(!this.isOperator(this._operation[i])){
            lastNumber = this._operation[i];
            break;
         }
      }
      this.currentOperation = lastNumber;
   }








   setError(){
      this.currentOperation = 'ERROR';
   }

}