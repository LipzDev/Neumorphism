export default function initMenu(){

   let menu = document.querySelectorAll('.menu-item');

   menu.forEach((item) =>{

      item.addEventListener('click', function(){   
         item.classList.toggle('menu-item-actived');          
      });

   });

}