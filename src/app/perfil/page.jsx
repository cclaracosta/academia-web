export default () => {
    return (
        <div className="tela">
            <div className="tela-em-colunas">
                <div className="coluna">
                    <div className="titulo">
                        <img src="/perfil.png" width={80} height={80} style={{ marginRight: 10 }} />
                        <h2 >Nome Sobrenome</h2>
                    </div>
                    <div style={{ width: 100 }}>
                        <input 
                            className="text-input"
                            type="text" 
                            placeholder="idade"                            
                        />
                        <input 
                            className="text-input"
                            type="text" 
                            placeholder="peso"
                        />
                        <input 
                            className="text-input"          
                            type="text" 
                            placeholder="objetivo"                        
                        />
                    </div>
                </div>
                <div className="coluna">
                    <h1>Teste</h1>
                </div>
            </div>
        </div>
    )
} 