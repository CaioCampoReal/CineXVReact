import { Link } from 'react-router-dom';

function Contato (){
    return(
        <div className='container'>
            <h1>Pagina de Contato</h1>
            <span>Contato da empresa (dd) xxxx-xxxx</span><br></br>

            <Link to="/">Home</Link>
            <br/>
            <Link to="/contato">Sobre</Link>

            <hr/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Contato;