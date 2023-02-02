import { Layout } from "components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';


// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;
export const App = () => {  
    return (
        <>
        <Layout/>
        {/* <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav> */}

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes></>


    )}
