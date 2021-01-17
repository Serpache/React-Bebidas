import React, { useContext, useState } from "react";

import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        ingrediente:"",
        categoria:""
    })

  const { categorias } = useContext(CategoriasContext);

  const obtenerDatosReceta = e => {
    guardarBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    })
  }

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría e ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="ingrediente"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
            <option value="">-- Selecciona categoría --</option>
            {categorias.map(categoria => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            value="Buscar recetas"
            className="btn btn-block btn-primary"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
