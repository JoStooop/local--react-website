import React from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Blog from "./Blog";
import NotFoundPage from "./NotFoundPage";
import Layout from "./Layout";
import SinglePage from "./SinglePage";
import Createpost from "./Createpost";
import Editpost from "./Editpost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts" element={<Blog/>}/>
          <Route path="posts/:id" element={<SinglePage/>}/>
          <Route path="posts/:id/edit" element={<Editpost/>}/>
          <Route path="posts/new" element={<Createpost/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
