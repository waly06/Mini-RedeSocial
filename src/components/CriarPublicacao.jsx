import { useState } from 'react'

function CriarPublicacao({ adicionarPublicacao }){

    const [texto, setTexto] = useState('')

    return(
        <section className="max-w-xl mx-auto p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 className='text-2xl font-bold mb-3'>O que você está pensando?</h2>
            <textarea className="w-full h-28 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"  value={texto} onChange={(e) => {
                setTexto(e.target.value)
            }}></textarea>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition mt-6"onClick={() => {
                if(texto.trim()){
                    adicionarPublicacao({texto, curtidas: 0, curtido: false})
                    setTexto('')
                } 
              
                
            }}>Publicar</button>
        </section>
    )
}




export default CriarPublicacao