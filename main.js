const button = document.getElementById('but');
const headerBackground = document.getElementById('header-background');

headerBackground.className = 'background2';

button.addEventListener('click',chageColor);

function switchback(){

    if (headerBackground.className === 'background2'){

        headerBackground.classList.remove('background2');
        headerBackground.classList.add('background1');

    }
    else {
        headerBackground.classList.add('background2');
        headerBackground.classList.remove('background1');
    }
}


function chageColor(event){
  
    if ( event.target.value === 'dark'){
        event.target.value = 'light';
    }
    else{
        event.target.value = 'dark';
    }
   
    switchback();

}