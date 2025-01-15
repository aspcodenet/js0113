import axios from 'axios';

const url = 'http://localhost:3000/posts';

export async function loadPosts() {
  const posts = await axios.get(url);
  return posts.data;
  // const response = await fetch(url);
  // const posts = await response.json();

  // return posts
}

export async function addPost(blogpost) {
  await axios.post(url, blogpost, {
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export async function loadPost(id) {
  const response = await axios.get(`${url}/${id}`);
  const players = response.data;
  return players;
}

export async function updatePost(blogpost) {
  await axios.put(`${url}/${blogpost.id}`, blogpost, {
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}
