function userclicked(id, el){
    getPosts(id)
    let selectedElement = document.getElementsByClassName("selected");
    for( element of selectedElement ){
        element.classList.remove("selected")
    }
    el.classList.add("selected")


}