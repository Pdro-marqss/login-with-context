import React from 'react';
import Form from '../../components/Form';

function LoginPage() {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ marginTop: '-180px', fontSize: '80px' }}>Pagina de login</h1>
            <p style={{ fontSize: '25px', marginTop: '-20px' }}>Rota publica</p>
            <Form />
        </div>
    );
}

export default LoginPage;