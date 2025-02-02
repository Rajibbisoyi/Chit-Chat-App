// import React, { useState, useEffect } from "react";
// import { useNavigate , Link } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components"
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Logo from "../assets/logo.svg"
// import { registerRoute } from "../utils/APIRoutes";
// export default function Register() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
  
//   const handleChange = (event) =>{
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };
  
//   const handleValidation = () => {
//     const { password, confirmPassword, username, email } = values;
//     if (password !== confirmPassword) {
//       toast.error(
//         "Password and confirm password should be same.",
//         toastOptions
//       );
//       return false;
//     } else if (username.length < 3) {
//       toast.error(
//         "Username should be greater than 3 characters.",
//         toastOptions
//       );
//       return false;
//     } else if (password.length < 8) {
//       toast.error(
//         "Password should be equal or greater than 8 characters.",
//         toastOptions
//       );
//       return false;
//     } else if (email === "") {
//       toast.error("Email is required.", toastOptions);
//       return false;
//     }

//     return true;
//   };
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (handleValidation()) {
//       // console.log("in validation", registerRoute)
//       const { email, username, password } = values;
//       console.log(email,username,password);
//       const { data } = await axios.post(registerRoute, {
//         username,
//         email,
//         password,
//       });

//       if (data.status === false) {
//         toast.error(data.msg, toastOptions);
//       }
//       if (data.status === true) {
//         localStorage.setItem(
//           ("chat-app-user"),
//           JSON.stringify(data.user)
//         );
//         navigate("/");
//       }
//       // navigate("/");
//     }
//   };
//   return (
//     <>
//       <FormContainer>
//         <form onSubmit={(event)=>handleSubmit(event)}>
//           <div className="brand"> 
//             <img src={Logo} alt="Logo" />
//             <h1>Chit Chat</h1>
//           </div>
//           <input type="text" placeholder="Username" name="username" onChange={e=>handleChange(e)}/>
//           <input type="email" placeholder="Email" name="email" onChange={e=>handleChange(e)}/>
//           <input type="password" placeholder="Password" name="password" onChange={e=>handleChange(e)}/>
//           <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={e=>handleChange(e)}/>
//           <button type="submit">Create User</button>
//           <span>
//             Already have an account ? <Link to="/login">Login.</Link>
//           </span>
//         </form>
//       </FormContainer>
//       <ToastContainer />
//     </>
//   );
// }
// const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//   }
//   input {
//     background-color: transparent;
//     padding: 1rem;
//     border: 0.1rem solid #4e0eff;
//     border-radius: 0.4rem;
//     color: white;
//     width: 100%;
//     font-size: 1rem;
//     &:focus {
//       border: 0.1rem solid #f8e559;
//       outline: none;
//     }
//   }
//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//     &:hover {
//       background-color: #f8e559;
//       color: #000000;
//     }
//   }
//   span {
//     color: white;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
//   }

 
// `;


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo.svg";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username must be at least 3 characters long.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.", toastOptions);
      return false;
    } else if (!email) {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      try {
        const { email, username, password } = values;
        const { data } = await axios.post(registerRoute, {
          username,
          email,
          password,
        });

        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else if (data.status === true) {
          localStorage.setItem("chat-app-user", JSON.stringify(data.user));
          navigate("/");
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("An error occurred. Please try again.", toastOptions);
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Chit Chat</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
            minLength="3"
            aria-label="Username"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            aria-label="Email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
            minLength="8"
            aria-label="Password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
            aria-label="Confirm Password"
          />
          <button type="submit">Create Account</button>
          <span>
            Already have an account? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #131324;
  gap: 1rem;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
      height: 5rem;
    }

    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    width: 100%;
    max-width: 400px;
  }

  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;

    &:focus {
      border: 0.1rem solid #f8e559;
      outline: none;
    }
  }

  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #f8e559;
      color: #000000;
    }
  }

  span {
    color: white;
    text-transform: uppercase;

    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
