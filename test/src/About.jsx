import React from 'react';
import {Link, Outlet, useNavigate, useLocation, useParams} from "react-router-dom";

const About = () => {

  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    async function submitForm(target) {

    }

    await submitForm(event.target);
    navigate("/success", {replace: true});
    console.log(event.target)
  }

  // let location = useLocation();
  // console.log(location.pathname)

  return (
    <div>
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom library.</p>
      <form onSubmit={handleSubmit}>
        <input type="text"/>
      </form>

      <ul>
        <Link to='/'>Click</Link> | {' '}
        <li><Link to="contacts">Our Contacts</Link></li>
        <li><Link to="team">Our Team</Link></li>
      </ul>

      {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}
      <Outlet/>
    </div>
  );
};

export default About;

