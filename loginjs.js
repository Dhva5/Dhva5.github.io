document.addEventListener('DOMContentLoaded', function() {
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector('.button').onclick = function() {
    document.querySelector('#id01').style.display = 'none';
    document.querySelector('.id011').style.display = 'block';
}
})