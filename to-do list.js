const n="new",q="quit",d="delete",l="list";
let input=" ";
let list=[],flag=true,f2=true,f3=false;
console.log("To-Do List");
addnew.onclick=()=>{
    flag=true;
    if(f2===true){
    let h4e1=document.createElement('h4');
    h4e1.innerText="Listed Items:";
    header.append(h4e1);
    f2=false;
    }
    if(f3===true){
       let lasti=endon.querySelector('h4');
       lasti.remove();
       f3=false;
    }
    let p=document.querySelectorAll('input')[0].value;
    list.push(p);
    console.log(p,"added to list");
    let item=document.createElement('li');
    item.innerText=p;
    contain.appendChild(item);
    document.querySelectorAll('input')[0].value="";
}
delet.onclick=()=>{
    let item=document.querySelectorAll('input')[1].value;
    let index=list.indexOf(item);
    parseInt(index);
    if(index!==-1)
    {
        list.splice(index,1);
        const get=contain.querySelectorAll('li');
        get[index].remove();
    }
    else
     alert("item not found");
    document.querySelectorAll('input')[1].value="";
}
clean.onclick=()=>{
  let item=contain.querySelectorAll('li');
  for(let i=list.length-1;i>=0;i--)
  {
    list.pop();
    item[i].remove();
  }
  let h4e2=header.querySelector('h4');
  h4e2.remove();
  f2=true;
  let end=document.createElement('h4');
  end.innerText="All items cleared!!!";
  endon.append(end);
  f3=true;
}