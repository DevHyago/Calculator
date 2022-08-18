class CalculatorController{

   constructor(previusOperation, currentOperation, buttons){
     this.previusOperationEl = previusOperation;
     this.currentOperationEl = currentOperation;
     this.buttons = buttons;
     this.addEventButtons();
   }

   addEventButtons(){
      this.buttons.forEach(btn => {
         btn.addEventListener('click', (e) => {

            const valueBtn = e.target.innerText;
            console.log(valueBtn);
         });
      });
   }
   
}