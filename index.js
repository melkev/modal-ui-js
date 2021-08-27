'use strict';

// variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');

for(let i = 0 ; i < btnOpen.length ; i++){
  btnOpen[i].addEventListener('click', function(){
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

}

btnClose.addEventListener('click', function(){
  modal.style.display = "none";
  overlay.style.display = 'none';
})
