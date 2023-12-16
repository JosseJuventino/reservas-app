import './App.css'
import { Landing } from './assets/components/Landing'
import { CardsContainer } from './assets/views/CardsContainer'

function App() {
  return (
    <>
      <div className="w-full bg-slate-100">
        <Landing />
        <CardsContainer />
      </div>
    </>
  )
}

export default App
