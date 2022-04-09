import client from './api-client';

export const getConfiguracionForm = async(query) => {
    try {
        
        const response = await client.get(`cfg-forms?q=${query}`);
        console.log(response);
        if (response.status === 200 && response.data.code === 1) {
            return {
                cfg_form: response.data.object
            }
        } else {
            throw new Error(response.data.message);
        }

    } catch(error){
        throw error;
    }
}
export const getAntecedentes = async(query) => {
    try {
        
        const response = await client.get(`caso?q=${query}`);
        console.log(response, "antecedentes");
        if (response.status === 200 && response.data.code === 1) {
            return {
                antecedentesCasos: response.data.object,
               
                query: query
            };
        } else {
            throw new Error(response.data.message);
        }

    } catch(error){
        throw error;
    }
}

export const getLiquidacionPerdida = async(query) => {
    try {
        
        const response = await client.get(`caso/liquidacion?q=${query}`);
        console.log(response, "Perdida Liquidacion");
        if (response.status === 200 && response.data.code === 1) {
            return {
                liquidacionPerdida: response.data.object,
               
                query: query
            };
        } else {
            throw new Error(response.data.message);
        }

    } catch(error){
        throw error;
    }
}
export const getDocumentacion = async(query) => {
    try {
        
        const response = await client.get(`caso/documentos?q=${query}`);
        console.log(response, "Documentos");
        if (response.status === 200 && response.data.code === 1) {
            return {
                documentacion: response.data.object,
               
                query: query
            };
        } else {
            throw new Error(response.data.message);
        }

    } catch(error){
        throw error;
    }
}


export const getSelectDocumentacion= async(query) => {
    try {
        
        const response = await client.getSelect(`caso/implicado/terceros?q=${query}`);
        console.log(response, "Select Documentacion");
        if (response.status === 200 && response.data.code === 1) {
            return {
                selectDocumentacion: response.data.object,               
                query: query
            }
        } else {
            throw new Error(response.data.message);
        }

    } catch(error){
        throw error;
    }
}

// export const getCasosBandeja = async(query) => {
//     try {
        
//         const response = await client.get(`bandeja/tareas?q=${query}`);
//         console.log(response);
//         if (response.status === 200 && response.data.code === 1) {
//             return {
//                 casos: response.data.object,
//                 query: query
//             };
//         } else {
//             throw new Error(response.data.message);
//         }

//     } catch(error){
//         throw error;
//     }
// }


// export const getXlsCasosBandeja = async(query) => {
//     try {
        
//         const response = await client.get(`bandeja/tareas/xls?q=${query}`);
//         console.log(response);
//         if (response.status === 200 && response.data.code === 1) {
//             return response.data.file;
//         } else {
//             throw new Error(response.data.message);
//         }

//     } catch(error){
//         throw error;
//     }
// }

// export const getRangoFechas = async(query) => {
//     try {
        
//         const response = await client.get(`parametros?q=${query}`);
//         console.log(response);
//         if (response.status === 200 && response.data.code === 1) {
//             return response.data.object;
//         } else {
//             throw new Error(response.data.message);
//         }

//     } catch(error){
//         throw error;
//     }
// }