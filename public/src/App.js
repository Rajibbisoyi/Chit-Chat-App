// import React from 'react'
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Chat from "./pages/Chat";
// import SetAvatar from "./components/SetAvatar";

// export default function App() {
//   return (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/setAvatar" element={<SetAvatar />} />
//       <Route path="/" element={<Chat />} />
//     </Routes>
//   </BrowserRouter>
//   );
// }

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const SetAvatar = lazy(() => import("./components/SetAvatar"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/" element={<Chat />} />
          {/* Handle 404 Not Found */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
