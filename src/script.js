import { addPost, loadPost, loadPosts, updatePost } from "./data/post.js";

//import * as Posts from "./data/post.js";


const newLink = document.getElementById('newLink')
const listLink = document.getElementById('listLink')


const submitNewButton =  document.getElementById("submitNewButton")
const newTitle =  document.getElementById("newTitle")
const newUserId =  document.getElementById("newUserId")
const newBody =  document.getElementById("newBody")


submitNewButton.addEventListener("click",async (ev)=>{
    ev.preventDefault()
    let post = {
        title: newTitle.value,
        userId:newUserId.value,
        body:newBody.value
    }
    await addPost(post)
    refreshItems()
    showSection("sectionList")
});




const submitEditButton =  document.getElementById("submitEditButton")
const editTitle =  document.getElementById("editTitle")
const editUserId =  document.getElementById("editUserId")
const editBody =  document.getElementById("editBody")
const editId =  document.getElementById("editId")


async function editMe(id){
  let player = await loadPost(id)
  editId.value = player.id
  editTitle.value = player.title
  editUserId.value = player.userId
  editBody.value = player.body
  showSection("sectionEdit");
  
}


submitEditButton.addEventListener("click",async (ev)=>{
    ev.preventDefault()
    let post = {
        title: editTitle.value,
        userId:editUserId.value,
        body:editBody.value,
        id:editId.value
    }
    await updatePost(post)
    refreshItems()
    showSection("sectionList")
});






function showSection(sectionsId){
  if(sectionsId === 'sectionList'){
      sectionList.style.display = "block";
      sectionNew.style.display = "none";
      sectionEdit.style.display = "none";
  }
  else if(sectionsId === 'sectionNew'){
      sectionList.style.display = "none";
      sectionNew.style.display = "block";
      sectionEdit.style.display = "none";
  }
  else if(sectionsId === 'sectionEdit'){
      sectionList.style.display = "none";
      sectionNew.style.display = "none";
      sectionEdit.style.display = "block";
  }
}



function renderTr(player){
  // WHEN EDIT !!!
  let tr = document.createElement("tr")
  productTableBody.appendChild(tr)   
  let td = document.createElement("td")
  td.textContent = player.userId
  tr.appendChild(td)

  td = document.createElement("td")
  td.textContent = player.title
  tr.appendChild(td)

  td = document.createElement("td")
  td.textContent = player.body
  tr.appendChild(td)

  td = document.createElement("td")
  
  let btn = document.createElement("button")
  btn.textContent = "EDIT"
  btn.addEventListener("click",function(){
      alert("EDIT " + player.id)             
      editMe(player.id)
  });
  
  td.appendChild(btn)
  tr.appendChild(td)
  // let template = `<tr>
  //                     <td>${player.userId}</td>
  //                     <td>${player.title}</td>
  //                     <td>${player.body}</td>
  //                     <td><a href="#" click="editMe(${player.id})" >EDIT</td>
  //                 </tr>`
  // productTableBody.innerHTML = productTableBody.innerHTML + template;
}

const productTableBody = document.getElementById('productTableBody')

async function refreshItems(){
  let posts = await loadPosts()
  productTableBody.innerHTML = '';    
  //  THEN är som "addEventListener" dvs det är en eventHandler som anropas senare - vid ett tillfälle
  // JSON och Javascript OBJECT är SAMMA SAK
  posts.forEach(post=>{                    
      renderTr(post)
  });
}

showSection("sectionList")
refreshItems()


newLink.addEventListener("click", ()=>{
  showSection("sectionNew")
})

listLink.addEventListener("click", ()=>{
  showSection("sectionList")
})