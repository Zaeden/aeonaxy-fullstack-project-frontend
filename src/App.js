import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import CreateProfile from './pages/CreateProfile'

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/get-started/profile" element={<CreateProfile />} />
      <Route path="/get-started/purpose" element={<CreateProfile />} />
    </Routes>
  )
}

export default App;

//       /get-started     ------>    for uploading profile pic
//      /get-started#welcomeHiring   ------> for the question
//      /get-started#welcomeDesigner   ------> for the question