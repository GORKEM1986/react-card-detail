import Header from "./components/header/Header"
import "./App.css"
import data from "./data"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"




function App() {
  return (
    <div className="App">
      <Header/>
      {data.map((item)=>  <Main {...item} />)}
      <Footer/>
     

     
     
    </div>
  )
}

export default App
