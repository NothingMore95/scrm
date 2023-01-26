var btn=document.querySelector('.btn')
var inp=document.querySelector('input')

inp.oninput=function(){
    if(inp.value.length < 2){
        btn.setAttribute('disabled',true)
    }
    else{
        btn.removeAttribute('disabled')
    }
}