import Header from './components/Header'
import CriarPublicacao from './components/CriarPublicacao'
import Feed from './components/Feed'
import { useState } from 'react'
import './index.css'




function App() {
  
  const [ publicacoes, setPublicacoes] = useState([])
  
  function adicionarPublicacao( novaPublicacao ){
    setPublicacoes([...publicacoes, novaPublicacao])
  }
  return (
    
    <div>
        <Header />
        <CriarPublicacao adicionarPublicacao={adicionarPublicacao}/>
        <Feed publicacoes={publicacoes}/>
     </div>
      
    
    )
  }
  
export default App
