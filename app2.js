
function changeBG() {
    setTimeout(function () {
        //stufff i wanna do afeter a set amout if time
        document.body.style.backgroundColor = "blue"
    } 5000),
// 5k milisecinds is 5 seconds.
}

const btn = document.getElementById('btn')
btn.addEventListener("click", changeBG)