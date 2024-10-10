import Router from './Components/Routing/Router'
import { ModeProvider } from './Components/Context/UseContext'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  
  return (
<ModeProvider>
  <Navbar/>
    <Router/>
    <Footer />
</ModeProvider>    
  )
}
export default App
