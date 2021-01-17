import React, { useContext, useState } from "react";

import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        ingrediente: "",
        categoria: ""
    })

    //Contexts
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}>
            <fieldset className="text-center">
                <legend>Search drinks by category and ingredient</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input
                        name="ingrediente"
                        className="form-control"
                        type="text"
                        placeholder="Enter the ingredient. Example: Tequila"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
                        <option value="">-- Select category --</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        value="Search recipes"
                        className="btn btn-block btn-primary"
                        type="submit"
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;
