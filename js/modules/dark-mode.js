export default function initDarkMode(){
   let buttonSelect = document.querySelector('.button-select'); 
   let textMode = document.querySelector('.button h1');
   let colors = document.querySelector(':root');

   function darkMode(){
      buttonSelect.classList.toggle('button-select-active');
      
      if(buttonSelect.classList.contains('button-select-active')){
            textMode.innerHTML="Light Theme";      
         
            colors.style="--cor-1: #2e2e2e; --cor-2: #3b3b3b; --cor-3: rgba(115, 115, 115, 0.110); --cor-4: rgba(0, 0, 0, 0.568); --cor-5: rgb(0, 0, 0, 0.150); --cor-6: rgb(184, 132, 253); --cor-7: rgb(212, 212, 212);";
           
         
         } else {
            textMode.innerHTML="Dark Theme";  

            colors.style="--cor-1: #ecf0f5; --cor-2: #e1e9f1; --cor-3: #edf1f5; --cor-4: rgba(163, 163, 163, 0.863); --cor-5: rgb(224, 224, 224); --cor-6: rgb(39, 52, 94); --cor-7: rgb(56, 56, 56);";  
         }    
   }

   buttonSelect.addEventListener('click', darkMode);
}