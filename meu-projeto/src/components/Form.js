import { useState } from 'react';

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Nome: ${name} Senha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Digite o seu nome:</label><br/>
                    <input 
                        id="name" 
                        type="text" 
                        placeholder="nome" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Digite sua senha:</label><br/>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>

    );
}

export default Form;