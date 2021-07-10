function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#selectbrowser');
    s.style.display = "flex";
    s.textContent = sel.value;
    
}