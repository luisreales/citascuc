import React, { Fragment } from "react";
const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita para mascotas</h2>
      <form>
        <div>
          <label>Nombre Mascotas</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
          />
        </div>
        <div>
          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño de Mascota"
          />
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            
          />
        </div>
        <div>
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"            
          />
        </div>
        <div>
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"            
          />
        </div>
        <div>
          <label>Sintomas</label>
          <textarea
            name="sintomas"
            className="u-full-width"            
          ></textarea>
        </div>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </Fragment>
  );
};

export default Formulario;
