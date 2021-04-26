window.addEventListener('load',(event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightear");
    cry.textContent = new Date().getFullYear();
})