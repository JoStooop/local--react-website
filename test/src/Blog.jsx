import React from 'react';
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

const Blog = () => {
  let location = useLocation();
  console.log(location.search)

  let [params] = useSearchParams();
  console.log(params.toString())

  const [posts, setPost] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(data => setPost(data))
  // })


  // поиск
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';


  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const value = form.search.value;

    setSearchParams({ post: value })
  }

  return (
    <div>
      <h1>Our news</h1>
      <Link to="/shoes?brand=vans">Vans</Link>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text"
               value={searchParams.get("filter") || ""}
               onChange={(event) => {
                 let filter = event.target.value;
                 if (filter) {
                   setSearchParams({ filter });
                 } else {
                   setSearchParams({});
                 }
               }}/>
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

      {invoices
        .filter((invoice) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let id = 0
          let name = invoice.name.toLowerCase();
          console.log(invoice)
          console.log(name)
          console.log(id++)
          console.log(name.startsWith(filter.toLowerCase()))
          return name.startsWith(filter.toLowerCase());
        })
        .map((invoice) => (
          <NavLink
            style={({ isActive }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            })}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}

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
