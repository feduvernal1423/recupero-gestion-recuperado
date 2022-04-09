import * as api from '../../api/encargado-cia-client';
import { 
    GET_CONFIG_FORM,
    GET_ANTECEDENTES_CASO,
    GET_LIQUIDACION_PERDIDA,
    GET_DOCUMENTACION,
    GET_SELECT_DOCUMENTACION
    // GET_DECLARACION_POLICIAL,
    // GET_SITUACION_SINIESTRO,
    // GET_TAREAS,
    // GET_TIPO_GESTION,
    // GET_TAREAS_USUARIO,
    // GET_CASOS_BANDEJA,
    // GET_RANGO_FECHAS,
    // GET_XLS_CASOS_BANDEJA,
    // CLEAR_CASOS_BANDEJA
} from '../types';


export const configuracionFormAction = (query) => ({
    type: GET_CONFIG_FORM,
    payload: api.getConfiguracionForm(query)
});

export const obtenerAntecedentesCaso = (query) => ({
    type: GET_ANTECEDENTES_CASO,
    payload: api.getAntecedentes(query)
});
export const obtenerLiquidacionPerdida = (query) => ({
    type: GET_LIQUIDACION_PERDIDA,
    payload: api.getLiquidacionPerdida(query)
});


export const obtenerDocumentacion = (query) => ({
    type: GET_DOCUMENTACION,
    payload: api.getDocumentacion(query)
});

export const obtenerSelectDocumentacion = (query) => ({
    type: GET_SELECT_DOCUMENTACION,
    payload: api.getSelectDocumentacion(query)
});

// export const obtenerDeclaracionPolicialAction = (query) => ({
//     type: GET_DECLARACION_POLICIAL,
//     payload: api.getConceptos(query)
// });

// export const obtenerCriteriosFechaAction = (query) => ({
//     type: GET_CRITERIOS_FECHA,
//     payload: api.getConceptos(query)
// });

// export const obtenerTareasUsuarioAction = (query) => ({
//     type: GET_TAREAS_USUARIO,
//     payload: api.getTareasUsuario(query)
// });

// export const obtenerCasosBandeja = (query) => ({
//     type: GET_CASOS_BANDEJA,
//     payload: api.getCasosBandeja(query)
// });

// export const obtenerRangoFechas = (query) => ({
//     type: GET_RANGO_FECHAS,
//     payload: api.getRangoFechas(query)
// });

// export const obtenerXlsCasosBandeja = (query) => ({
//     type: GET_XLS_CASOS_BANDEJA,
//     payload: api.getXlsCasosBandeja(query)
// });

// export const limpiarCasosBandeja = () => ({
//     type: CLEAR_CASOS_BANDEJA,
//     payload: { casos: [], query: null }
// });