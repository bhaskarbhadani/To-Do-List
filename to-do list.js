const n="new",q="quit",d="delete",l="list";
let input=" ";
let list=[],flag=true,f2=true;
console.log("To-Do List");
addnew.onclick=()=>{
    flag=true;
    while(flag)
    {
        let p=prompt("Enter item to be added");
        list.push(p);
        console.log(p,"added to list");
        let check=prompt("Wanna add more items....press 1");
        let item=document.createElement('li');
        item.innerText=p;
        container.appendChild(item);
        if(parseInt(check)===1)
          flag=true;
        else
         flag=false;  
    }
}
delet.onclick=()=>{
    let item=prompt("Which task is completed");
    let index=list.indexOf(item);
    parseInt(index);
    if(index!==-1)
    {
        alert(`${list[index]} is deleted`);
        list.splice(index,1);
        const get=container.querySelectorAll('li');
        get[index].remove();
    }
    else
     alert("item not found");
}
clean.onclick=()=>{
  alert("All items will be deleted");
  for(let i=0;i<list.length;i++)
  {
      list.pop();
      let item=container.querySelector('li');
      item.remove();
  }
  let last=container.querySelector('li');
  last.remove();
  list.pop();
}