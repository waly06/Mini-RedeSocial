import { Heart } from 'lucide-react'

function Feed({ publicacoes, curtirPublicacao }){

    return(
        <div className="max-w-xl mx-auto mt-6 px-4">
            <h2 className='mb-6 text-2xl font-bold'>Publicações</h2>
            <div className="space-y-4">
                {publicacoes.map((publicacao, index) => {
                    return(
                       <div key={index} className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                           <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                    U
                                </div>
                                                
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-800">Usuário</h3>
                                    <p className="text-xs text-gray-500">Agora</p>
                                </div>
                            </div>
                            <p className="text-left text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {publicacao.texto}
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                                <button
                                   className="flex items-center justify-center p-2 rounded-full hover:bg-red-50 hover:scale-110 transition"
                                    onClick={() => curtirPublicacao(index)}
                                >
                                    <Heart size={22}className='text-red-500' fill={publicacao.curtido ? "red" : "none"}/>
                                </button>

                                <span className="text-sm text-gray-600">
                                    {publicacao.curtidas} curtidas
                                </span>
                            </div>
                          
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feed