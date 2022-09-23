import React from 'react';

function Form() {
    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const usuarioCorreto = 'jubicleison';
    const senhaCorreta = '1234';


    return (
        <form style={{ display: 'flex', flexDirection: 'column', width: '10%', minWidth: '100px', gap: '15px' }}>
            {/* Label e input usuario */}
            <label style={{ marginBottom: '-10px', marginTop: '100px', fontSize: '20px' }}>Usuario:</label>
            <input
                type="text"
                value={usuario}
                autoComplete='off'
                required
                onChange={(e) => setUsuario(e.target.value)}
                style={{ padding: '5px', fontSize: '16px' }}
            />

            {/* Label e input senha */}
            <label style={{ marginBottom: '-10px', fontSize: '20px' }}>Senha:</label>
            <input
                type="password"
                value={senha}
                autoComplete='off'
                required
                onChange={(e) => setSenha(e.target.value)}
                style={{ padding: '5px', fontSize: '16px' }}
            />

            {/* Botao de enviar */}
            <input
                type="submit"
                value="Enviar"
                style={{ width: '120px', height: '30px', textAlign: 'center', margin: '0 auto', color: 'black', marginTop: '20px' }}
            />
        </form>

    );
};

export default Form;