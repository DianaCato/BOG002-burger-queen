import { useFirestore } from 'reactfire';

export default function Factura({ factura, setFactura }) {

    let nombre = '';
    let mesa = '';
    let lista = [];
    let total = 0;
    let tiempo= 0;
    let minutos = '';
    let segundos = '';
    const DateNow = Date.now();

    if (factura[0]) {
        nombre = factura[0][0].cliente;
        mesa = factura[0][0].mesa;
        lista = factura[0][0].lista;
        tiempo = Math.floor(factura[0][0].time/1000)
        minutos = Math.floor((tiempo/60)%60)+' m '
        segundos = tiempo%60<10?' 0'+tiempo%60 +' s':' '+tiempo%60 +' s'
        
        lista.map(item => (
        total += parseInt(item.split(',')[1]) 
        ))
    }

    const db = useFirestore();

    const handleClick = (data) =>{
        db.collection('historial')
        .doc().set({
            lista: data[0].lista,
            cliente: data[0].cliente,
            mesa: data[0].mesa,
            tiempo: minutos + segundos,
            date: new Date(DateNow).toString(),
            total,
        });
        db.collection("caja").doc(data[1]).delete();
        setFactura([])
    }

    return (
        <div className='factura-caja'>
            <h2>Facturación</h2>
            <div className='data-pagar'>
                <div className='data-caja'>
                    <h3> 
                        <span>Nombre : </span>
                        {nombre}
                    </h3>
                    <h3> 
                        <span>Mesa : </span>
                        {mesa}
                    </h3>
                </div>
                <div className='orden-caja'>
                    <ul>
                        <li>Cant. Producto Valor  </li>
                        {lista.map((item, index) => (
                            <li className='li-orden' key={index}>
                                <span className='span-1'>{item.split(',')[2]}</span>
                                <span className='span-2'>{item.split(',')[0]}</span>
                                <span className='span-3'>{item.split(',')[1]}.00</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='detalle-caja'>
                    <span>Tiempo : {minutos + segundos}</span>
                    <span>Total: $ {total}.00</span>
                </div>
            </div>
            <button className='btn-2' onClick={()=>{
                handleClick(factura[0])
            }}>Pagar</button>
        </div>
    )
}