import React, {useEffect, useState} from 'react';
import {Link, useParams,useNavigate,  useLocation} from "react-router-dom";

// useParams - он возвращает параметры

// useNavigate - возвращает функцию, которая позволяет перемещаться, после отправки формы
// Функция работает с 2 параметрами:
// 1 - может сказать, куда мы хотим переадрисовать пользователя
// 2 - две опции предполагает для нас


const SinglePage = () => {
  let location = useLocation();
  console.log(location.pathname)

  console.log(useParams())


  const {id} = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])


  const goBack = () => navigate(-1) // на 1 страницу назад и тд.. Какая цифра столько страниц и возвращаемся назад


  return (
    <div>
      {post && (
        <>
          <button onClick={goBack}>Go back</button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )

      }
    </div>
  );
};

export default SinglePage;