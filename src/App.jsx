import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <div className='main'>
      <SideBar/>
      <div className='content'>
        <Header/>
        <Main/>
      </div>
    </div>
  )
}

export default App
