let list=[],flag=true,f2=true,f3=false;
let clear=document.querySelector('#clean');
console.log("To-Do List");
clear.disabled=true;
delet.disabled=true;
addnew.onclick=()=>{
    flag=true;
    if(f2===true){
    let h4e1=document.createElement('h4');
    h4e1.innerText="LISTED ITEMS:";
    h4e1.classList.add('head','has-text-weight-bold','is-family-monospace');
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
    let item=document.createElement('li');
    item.innerText=p;
    item.classList.add('has-text-weight-medium');
    contain.appendChild(item);
    document.querySelectorAll('input')[0].value="";
    clear.disabled=false;
    delet.disabled=false;
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
  clear.disabled=true;
  delet.disabled=true;
}