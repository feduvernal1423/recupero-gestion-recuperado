import {
    GET_CONFIG_FORM,
    GET_ANTECEDENTES_CASO,
    GET_LIQUIDACION_PERDIDA,
    GET_DOCUMENTACION,
    GET_SELECT_DOCUMENTACION
    // GET_DECLARACION_POLICIAL,
    // GET_ESTADOS_CASO,
    // GET_SITUACION_SINIESTRO,
    // GET_TAREAS,
    // GET_TIPO_GESTION,
    // GET_TAREAS_USUARIO,
    // GET_CASOS_BANDEJA,
    // GET_XLS_CASOS_BANDEJA,
    // GET_RANGO_FECHAS,
    // CLEAR_CASOS_BANDEJA
} from '../types';


export default function encargadoCompaniaReducer(state = {}, action) {
    switch (action.type) {
        case GET_CONFIG_FORM:
            return { ...state, ...action.payload }
        case GET_ANTECEDENTES_CASO:
            return { ...state, antecedentesCasos:action.payload }
        case GET_LIQUIDACION_PERDIDA:
            return { ...state, liquidacionPerdida:action.payload }
        case GET_DOCUMENTACION:
            return { ...state, documentacion: action.payload }
        case GET_SELECT_DOCUMENTACION:
            return { ...state, selectDocumentacion: action.payload }
        // case GET_ESTADOS_CASO:
        //     return { ...state, estadocaso: action.payload }
        // case GET_TIPO_GESTION:
        //     return { ...state, tipogestion: action.payload }
        // case GET_SITUACION_SINIESTRO:
        //     return { ...state, situacionsiniestro: action.payload }
        // case GET_DECLARACION_POLICIAL:
        //     return { ...state, declaracionpolicial: action.payload }
        // case GET_CRITERIOS_FECHA:
        //     return { ...state, criteriofecha: action.payload }
        // case GET_TAREAS_USUARIO:
        //     return { ...state, tareasusuario: action.payload }
        // case GET_CASOS_BANDEJA:
        //     return { ...state, bandeja: action.payload }
        // case CLEAR_CASOS_BANDEJA:
        //     return { ...state, bandeja: action.payload }
        // case GET_XLS_CASOS_BANDEJA:
        //     return { ...state, xlscasosbandeja: action.payload }
        // case GET_RANGO_FECHAS:
        //     return { ...state, rangofechas: action.payload }
        default:
            return state
    }
}