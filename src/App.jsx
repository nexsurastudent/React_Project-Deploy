import Brands from "./components/home/brands"

const App = ()=>{
  return(
    <main className="w-full min-h-screen p-10">
      <Logo />
        <Brands />
    </main>
  )
}

export default App




function Logo(){
  return(
    <img src="cider.jpg" className="w-40 h-40 object-cover rounded-full" alt="" />
  )
}








