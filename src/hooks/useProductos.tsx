import React from 'react';
import { Producto,Productos } from '../interfaces/Productos';

interface State {
    data : Producto[],
    load : boolean
}

export const useProductos = (url:string)=> {

    const [state, setstate] = React.useState<State>({ 
        load : true, 
        data : []
    });

    const peticionProductos = React.useCallback(async ()=>{
        const resp = await fetch(url);
        const {result} : Productos = await resp.json();
        setstate({
           load :false,
           data : result.msg.productos
       });
    },[]);

    React.useEffect(() => {
        peticionProductos();
    }, [peticionProductos]);

    return [state];
}


