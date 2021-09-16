const linkedin = document.getElementById('linkedin');
const github= document.getElementById('github');
const facebook = document.getElementById('facebook');

linkedin.addEventListener('click',(e)=>{
  e.preventDefault();
  window.open('https://www.linkedin.com/in/sayanti-adhikary-177255219/','_blank')
})
github.addEventListener('click',(e)=>{
  e.preventDefault();
  window.open('https://github.com/sayanti26','_blank')
})
facebook.addEventListener('click',(e)=>{
  e.preventDefault();
  window.open('https://www.facebook.com/lily.adhikary.5','_blank')
})