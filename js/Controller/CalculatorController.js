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

   setLastNumber(value){
      this._operation[this._operation.length-1] = value;
   }
   

   addOperation(value){
      
      //Verify if valor not number
      if(isNaN(this.getLastOperation())){

         if(this.isOperator(value)){
            //switch if you are an operator
            this.setLastNumber(value);
            
         }else if(isNaN(value)){
            //Outra coisa

         }else{
            //First element
            this._operation.push(value);
         }

      }else{
         const newValue = this.getLastOperation().toString() + value.toString();
         this.setLastNumber(parseInt(newValue));
      }

      console.log(this._operation);
      
   }










   setError(){
      this.currentOperation = 'ERROR';
   }

}