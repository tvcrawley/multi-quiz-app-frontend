import './App.css'
import Signup from './Signup'
import Login from './Login'

function App() {

  let logout = () => {
    localStorage.clear()
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Signup />
      <Login />
      <button onClick={() => logout()}>Log Out</button>
    </div>
  )
}

export default App
