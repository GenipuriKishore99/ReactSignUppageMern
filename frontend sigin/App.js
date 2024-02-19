import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { Route } from './route'
function App() {
  return (
    <div>
      <CookiesProvider>
        <Route></Route>
      
      </CookiesProvider>
      {/* <UserRegistration></UserRegistration> */}
    </div>
  )
}

export default App