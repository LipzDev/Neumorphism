export default function initMenu(){
   let menu = document.querySelectorAll('.menu-item');   

   menu.forEach((item) => {
      item.addEventListener('click', function(){             
         
         let buttonActived = document.querySelector('.menu-item-actived');

         if(buttonActived.classList.contains('menu-item-actived')){
             buttonActived.classList.remove('menu-item-actived');
         }

         item.classList.add('menu-item-actived'); 

      });
   });

}