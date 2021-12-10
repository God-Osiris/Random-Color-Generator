const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

btn.onclick = () => {
    body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    h1.innerHTML = `${body.style.backgroundColor}`;
}
window.addEventListener('keydown', function(event){
    // event.preventDefault();
    if(event.code === 'Enter' || event.code === 'Space'){
        body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        h1.innerHTML = `${body.style.backgroundColor}`;
    }
});