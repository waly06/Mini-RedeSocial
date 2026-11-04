import { Heart } from 'lucide-react'

function Feed({ publicacoes }){

    return(
        <div className="m-auto text-center mt-3">
            <h2>Publicações</h2>
            <div className="space-y-4">
                {publicacoes.map((publicacao, index) => {
                    return(
                        <div key={index} className="p-6 border rounded-lg">
                            <h3 className="font-bold">Usuario Publicou: <br></br></h3>
                            <p>{publicacao.texto}</p>
                            <button><Heart size={22} color='red' /></button>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Feed