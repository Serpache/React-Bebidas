import React, {useContext, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import {ModalContext} from '../context/ModalContext'

//Posicionamiento del modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
//Estilos para el modal
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

    //Configuraciones del modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpne] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpne(true);
    }
    const handleClose = () => {
        setOpne(false);
    }

    //Extraer valores del context
    const {guardarIdReceta} =  useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img
                    className="card-img-top"
                    src={receta.strDrinkThumb}
                    alta={`Picture of ${receta.strDrink}`}
                />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >Show recipe</button>
                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            guardarIdReceta(null);
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>desde modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;