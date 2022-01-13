const menuList = document.getElementById('menu-list');
const iconContainer = document.getElementById('icon-toggle');

const visible = 'visible';



(function(){
    /*MENU TOGGLER*/
    document.getElementById('toggle-menu').addEventListener('click', ()=>{
        menuList.classList.toggle('visible');
        
       if(menuList.classList.contains('visible')){
           iconContainer.classList.remove('fa-stream');
           iconContainer.classList.add('fa-times');
       }else{
           iconContainer.classList.remove('fa-times')
           iconContainer.classList.add('fa-stream');
    
       }
        
    });
})();