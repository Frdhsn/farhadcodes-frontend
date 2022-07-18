// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import authService from '../services/authService';

// const AuthContext = React.createContext();

// // custom hook
// export function useAuth() {
//   return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState();
//   const [error, setError] = useState('');

//   const navigate = useNavigate();
//   // signup function
//   const signup = async (username, email, password) => {
//     try {
//       const data = await authService.signUp(username, email, password).then(
//         (response) => {
//           navigate('/'); // home page
//           window.location.reload();
//         },
//         (error) => {
//           setError('Failed to create an account');
//           console.log(error);
//         }
//       );
//     } catch (e) {
//       console.log(error);
//     }
//     setCurrentUser(await authService.getCurrentUser());
//   };
//   // login function
//   const login = async (username, email, password) => {
//     await authService.login(email, password).then(
//       () => {
//         navigate('/');
//         //window.location.reload();
//       },
//       (error) => {
//         setError('Incorrect email or Password');
//         console.log(error);
//       }
//     );
//     setCurrentUser(await authService.getCurrentUser());
//   };
//   // logout function
//   const logout = async (username, email, password) => {
//     await authService.logout().then(
//       () => {
//         navigate('/');
//         //window.location.reload();
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
//   const value = {
//     currentUser,
//     signup,
//     login,
//     logout,
//   };
//   return <AuthContext.Provider value={value}>{/*!loading &&*/ children}</AuthContext.Provider>;
// }
// // export { AuthContext, AuthProvider };

// // import axios from "axios";
// // import { useState, createContext } from "react";
// // import {Redirect} from 'react-router-dom';

// // const AuthContext = createContext();

// // const AuthProvider = (props) => {

// //   const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')) || false);
// //   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || false);

// //   const login = (userDetails) => {
// //     setLoggedIn(true);

// //   }
// // }
