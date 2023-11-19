import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h2>Ops! falha</h2>
            <br/>
            <Link to="/">Home</Link>

            <br/>
            <Link to="/sobre">Sobre</Link>

            <br/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Erro;