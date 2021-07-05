import React, { useState, useEffect } from 'react';
import { useFirestore } from 'reactfire';

export default function Historico() {
    const [historial, setHistorial] = useState([]);
    const db = useFirestore();

    useEffect(() => {

        db.collection('historial')
            .orderBy('date','desc')
            .onSnapshot((querySnapshot) => {
                const arrayData = []
                querySnapshot.forEach((doc) => {
                    const data = [doc.data()]
                    arrayData.push({ ...data })
                })
                setHistorial(arrayData);
            })
        return () => {
            setHistorial([])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='factura-caja'>
            <h2>Registro Histórico</h2>
            <div className='registro-caja'>
                <ul className='registro'>
                    {
                        historial.map((data, index) => (
                            <li key={index}>
                                <details className='up'>
                                    <summary className='sum-up'>
                                        <div>{data[0].cliente}</div>
                                        <div>{(data[0].date.slice(4, -36))}</div>
                                    </summary>
                                    <details>
                                        <summary className='opciones-historial'>Datos servicio</summary>
                                        <p>Cliente: {data[0].cliente}</p>
                                        <p>Mesa: {data[0].mesa}</p>
                                        <p>Tiempo: {data[0].tiempo}</p>
                                        <p>Fecha: {data[0].date}</p>
                                    </details>
                                    <details>
                                        <summary className='opciones-historial'>Detalle consumo</summary>
                                        <p>Total: $ {data[0].total}.00</p>
                                        <p>Productos :</p>
                                        {data[0].lista.map((item, index) => (
                                            <p key={index}>
                                                <span>( {item.split(',')[2]} ) </span>
                                                <span>{item.split(',')[0]}</span>
                                            </p>
                                        ))}
                                    </details>
                                </details>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}