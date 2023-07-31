let paragraph=document.getElementById("paragraph");
function decrease(){
    let current=paragraph.textContent;
    let update=parseInt(current)-1;
    paragraph.textContent=update;
    if(update>current){
        paragraph.style.color="green";
    }
    else{
        paragraph.style.color="red";
    }

}
function increase(){
    let current=paragraph.textContent;
    let update=parseInt(current)+1;
    paragraph.textContent=update;
    if(update>current){
        paragraph.style.color="green";
    }
    else{
        paragraph.style.color="red";
    }

}
function reset(){
    paragraph.textContent=0;
    paragraph.style.color="black";
}