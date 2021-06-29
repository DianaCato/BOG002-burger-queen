import './componentes.css';

export default function Titulo(props) {
    return (
        <div className='titulo'>
            <h1> {props.text} </h1>
            <hr></hr>
        </div>
    )
}
