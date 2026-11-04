import { useState } from 'react'

function CriarPublicacao({ adicionarPublicacao }){

    const [texto, setTexto] = useState('')

    return(
        <section className="max-w-xl mx-auto p-4 rounded-lg border">
            <h2 className='text-2xl font-bold'>O que você está pensando?</h2>
            <textarea className="w-full h-28 p-2 border"  value={texto} onChange={(e) => {
                setTexto(e.target.value)
            }}></textarea>
            <button className="bg-blue-400 p-4 text-white rounded-lg hover:bg-blue-600 mt-3"  onClick={() => {
                if(texto.trim()){
                    adicionarPublicacao({texto, curtidas: 0})
                    setTexto('')
                } 
              
                
            }}>Publicar</button>
        </section>
    )
}




export default CriarPublicacao