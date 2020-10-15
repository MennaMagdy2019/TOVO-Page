window.onscroll = function (){
    var tmenu = this.document.getElementById("topmenu");
    if(this.scrollY > 100){
        tmenu.classList.add("sticky");
    }
    else {
        tmenu.classList.remove("sticky");
    }
}
window.onload = function (){
    var m = document.getElementById('Ring');
    var n = document.getElementById('Colors');
    n.style.display="none"
    m.style.right = 0
}


function hide(){
    var m = document.getElementById('Ring');
    var n = document.getElementById('Colors');
    if(n.style.display === "none"){
        m.style.right = 200+"px";
        n.style.display="block";
    }
    else {
        n.style.display="none"
        m.style.right = 0
    }
}
var b = document.getElementById('colorspan')
var spans = b.getElementsByTagName('span');
var a = document.getElementsByClassName('colorspan');
console.log(a.length);
console.log(spans.length);

function changecolor(y){
    var Selectcolor = document.getElementById('select');
    var x = document.getElementById('cog');
   
    Selectcolor.style.backgroundColor = y;
    x.style.backgroundColor = y;
    for(var i=0 ; i<spans.length ; i++){
        spans[i].style.backgroundColor = y;
    }
    
    function links(){
        for(var j=0 ; j<a.length ; j++){
           
           // a[j].style.color = y
            a[j].onmouseover = y
          }
    }
    
    
}
function slideshow(){
  var x = document.getElementById('menu');
            if(x.style.display === "none"){
                x.style.display="block";
            }
            else {
                x.style.display="none"
            }
}

function dropdown(){
    var drop = document.getElementById('dropDown');
    if(drop.style.display === "none"){
        drop.style.display="block";
    }
    else {
        drop.style.display="none"
    }
}
function dropdown1(){
    var drop = document.getElementById('dropDown1');
    if(drop.style.display === "none"){
        drop.style.display="block";
    }
    else {
        drop.style.display="none"
    }
}