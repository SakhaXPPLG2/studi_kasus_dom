function ubahWarna() {
    let element = document.getElementsByClassName("teks");
    for(let i = 0; i < element.length; i++) {
        element[i].style.color = "green";
    }
}