
import  './styles.scss';

function elementCreator(type,inHtml,tof,name,appendtype,appendname,posclass = 0 ){
    console.log(posclass)
    let newelement=document.createElement(type);
    if(tof=="id"){
        console.log("setid")
        newelement.id=name;
    }
    if(tof=="class"){
        console.log("setclass")
        newelement.classList.add(name);
        }
    if(inHtml!=null){
        console.log("ihtml")
            if(type!="img"){
                newelement.innerHTML=inHtml;

            }
            if(type=="img"){
                newelement.src=inHtml;
            }
        }
    if(appendtype=="id"){
        console.log("appendid")
        document.getElementById(appendname).appendChild(newelement)
    }
    if(appendtype=="class"){
        console.log("appendclass")
        document.getElementsByClassName(appendname)[posclass].appendChild(newelement)
    }
}
function inputCreator(type,name,id,checked,appendtype,appendname,posclass=0){
   let newipm= document.createElement("INPUT");
   newipm.setAttribute("type", type);
   newipm.id=id
   newipm.setAttribute("name", name);
   if(checked==true){
    newipm.checked = true
   }
   if(appendtype=="id"){
       console.log("runnedid")
       let appendid=document.getElementById(appendname)
       appendid.appendChild(newipm)
   }
   if(appendtype=="class"){
    console.log("runnedclass")

       let appendclss=document.getElementsByClassName(appendname)[posclass]
       appendclss.appendChild(newipm)
   }
}
function labelCreator(witchfor,innhtml,appendtype,appendname,posclass=0){
    let label= document.createElement("LABEL");
    label.htmlFor=witchfor
    label.innerHTML=innhtml
    if(appendtype=="id"){
        console.log("runnedid")
        let appendid=document.getElementById(appendname)
        appendid.appendChild(label)
    }
    if(appendtype=="class"){
     console.log("runnedclass")
 
        let appendclss=document.getElementsByClassName(appendname)[posclass]
        appendclss.appendChild(label)
    }
    
}
let contimg=elementCreator("div",null,"id","imgcont","id","content")
let img1=elementCreator("img","rest.jpg","id","mainimg","id","imgcont")
let test=elementCreator("h1","Townstorant","id","bigtxt","id","imgcont")
let h2=elementCreator("p","Hello dear customer and welcome to our iconic restorant, we are located at the center of our lovely town, and you should come to visit us because you will love our 'magic dishes'","id","upperp","id","imgcont")
let divtabs=elementCreator("div",null,"class","tabs","id","content")
let tab1=inputCreator("radio","tabs","tabone",true,"class","tabs")
let labtab1=labelCreator("tabone","Menu","class","tabs")
let divtab1=elementCreator("div",null,"class","tab","class","tabs")
let h1tab1=elementCreator("h1","Menu","id","h1t1","class","tab")
let ptab1=elementCreator("p","pizza, pizza and more pizza","id","p1t1","class","tab")
let tab2=inputCreator("radio","tabs","tabtwo",false,"class","tabs")
let labtab2=labelCreator("tabtwo","Contact","class","tabs")
let divtab2=elementCreator("div",null,"class","tab","class","tabs")
let h1tab2=elementCreator("h1","Tab Two Content","id","h1t2","class","tab",1)
let ptab2=elementCreator("p","Lorem ipsum dolor  adipisicing elit","id","p1t2","class","tab",1)
let p2tab2=elementCreator("p","Tab Two Content","id","p2t2","class","tab",1)
let tab3=inputCreator("radio","tabs","tabthree",false,"class","tabs")
let labtab3=labelCreator("tabthree","About","class","tabs")
let divtab3=elementCreator("div",null,"class","tab","class","tabs")
let h1tab3=elementCreator("h1","Tab Three Content","id","h1t3","class","tab",2)
let ptab3=elementCreator("p","Lorem ipsum dolor   elit","id","p1t3","class","tab",2)
let p2tab3=elementCreator("p","Tab Three Content","id","p2t3","class","tab",2)
