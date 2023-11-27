import './styles.css';

export function Navbar(props) {
    const { title } = props;
    return (
        <nav className='container-botoes'>
            <div className='botoes'>
                <button className='botao-topo'>Ladder Game</button>
                <button className='botao-topo'>Quick Game</button>
                <button className='botao-topo'>Private Game</button>
                <button className='botao-topo'>Training Mode</button>
            </div>
        </nav>
    )
}