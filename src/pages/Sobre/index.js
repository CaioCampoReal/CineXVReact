import { Link } from 'react-router-dom';

function Sobre (){
    return(
        <div className='container'>
            <h1>About me</h1>
            <p>lorem lorem</p>

            <Link to="/sobre">Sobre</Link>
            <br/>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Sobre;