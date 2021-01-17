import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'


export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, guardarIdReceta] = useState(null); 
    const [infoReceta, guardarInfoReceta] = useState({});

    //Llamar API para información completa de la receta
    useEffect(() => {
        const obtenerRecetaCompleta = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const resultado = await axios.get(url);

            guardarInfoReceta(resultado.data.drinks[0]);
        }
        obtenerRecetaCompleta();
    }, [idReceta]);

    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;