import { Link } from 'react-router-dom';

function Produto (){
    return(
        <div className='container'>
            <h1>Pagina de Produto</h1>
            <span>Meu produto!</span><br></br>

            <Link to="/">Home</Link>
            <br/>
            <Link to="/sobre">Sobre</Link>

            <hr/>           
        </div>
    );
}

export default Produto;