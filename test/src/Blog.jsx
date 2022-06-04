import React from 'react';
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Blog = () => {
  let location = useLocation();
  console.log(location.pathname)
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  })


  // поиск
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';


  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const value = form.search.value;

    setSearchParams({post: value})
  }

  return (
    <div>
      <h1>Our news</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="search"/>
        <input type="submit" value="Найти"/>
      </form>
      {
        posts
          .filter(
            post => post.title.includes(postQuery)
          )
          .map(post => {
            return <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          })
      }

      {/*<BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />*/}

      {/*<Link to="/posts/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>*/}
      {/*{*/}
      {/*    posts.filter(*/}
      {/*        post => post.title.includes(postQuery) && post.id >= startsFrom*/}
      {/*    ).map(post => (*/}
      {/*        <Link key={post.id} to={`/posts/${post.id}`}>*/}
      {/*            <li>{post.title}</li>*/}
      {/*        </Link>*/}
      {/*    ))*/}
      {/*}*/}
    </div>
  );
};

export default Blog;