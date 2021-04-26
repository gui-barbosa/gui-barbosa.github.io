window.addEventListener('load',(event)=>{
    const lu = document.querySelector('#lastUpdated');
    lu.textContent = document.lastModified;
})