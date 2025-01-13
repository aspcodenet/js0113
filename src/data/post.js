import axios from "axios";


const url = 'https://jsonplaceholder.typicode.com/posts';


export async function loadPosts(){
    const posts = await axios.get(url)
    return posts.data
    // const response = await fetch(url);
    // const posts = await response.json();
  
    // return posts
}