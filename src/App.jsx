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

  function curtirPublicacao( index ){
      setPublicacoes(publicacoes.map((publicacao, i) => {
          if(i == index){
            return {
              ...publicacao,
              curtido: !publicacao.curtido,
              curtidas: publicacao.curtido 
                    ? publicacao.curtidas - 1
                    : publicacao.curtidas + 1
            }
          }else{
            return publicacao
          } 
      }
    ))
  }
  return (
    
    <div className="min-h-screen bg-gray-100">
        <Header />
        <CriarPublicacao adicionarPublicacao={adicionarPublicacao}/>
        <Feed publicacoes={publicacoes} curtirPublicacao={curtirPublicacao}/>
     </div>
      
    
    )
  }
  
export default App
