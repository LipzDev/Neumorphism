export default function initDarkMode(){
   let buttonSelect = document.querySelector('.button-select'); 
   let textMode = document.querySelector('.button h1');

   function darkMode(){
      buttonSelect.classList.toggle('button-select-active');
      
      if(buttonSelect.classList.contains('button-select-active') == true){
         textMode.innerHTML="Light Mode";
      } else {
         textMode.innerHTML="Dark Mode";
      }
   }

   buttonSelect.addEventListener('click', darkMode);
}