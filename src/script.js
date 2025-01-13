import { loadPosts } from "./data/post.js";

// import * from "./data/post.js";


const newLink = document.getElementById('newLink')
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
  let template = `<tr>
                      <td>${player.userId}</td>
                      <td>${player.title}</td>
                      <td>${player.body}</td>
                      <td><a href="#" >EDIT</td>
                  </tr>`
  productTableBody.innerHTML = productTableBody.innerHTML + template;
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