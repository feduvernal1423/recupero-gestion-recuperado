import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import DescripcionBien from '../Tabs/DescripcionBien';
import RelatosHechos from '../Tabs/RelatosHechos';
import Antecedentes from '../Tabs/Antecedentes';
import Liquidacion from '../Tabs/Liquidacion';
import DocumentosRequeridos from '../Tabs/DocumentosRequeridos';
import { useDispatch, useSelector } from 'react-redux';
import DetallesCaso from '../Tabs/DetallesCaso';

const TabsComponent = () => {
  const [key, setKey] = useState('');
  const [tipoPerdida, setTipoPerdida]=useState("")
 
 // El hook useSelector (redux) permite acceder al state en nuestro store.
 const data_encargado_cia = useSelector(state => state.encargado_compania);
 const { cfg_form ,antecedentesCasos} = data_encargado_cia;
 const dispatch = useDispatch();

 useEffect(() => {   
    if(antecedentesCasos && antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro']===15005){      
      setTipoPerdida("Parcial")
    }else {
      setTipoPerdida("Total")
    }
   
}, [antecedentesCasos]);

//  useEffect(() => {
//   let query = Buffer.from(JSON.stringify({ "idCaso": 2,"idImplicado": "0",
//   "idOrganizacion": "99061000",
//   "tipoGestion": "207001", "tipoSiniestro":"15005" })).toString('base64');
//   dispatch(obtenerLiquidacionPerdida(query));

// }, [dispatch]);
  return (
    <Tabs
      style={{color:"red"}}
      activeKey={key}
      id='uncontrolled-tab-example'
      onSelect={(k) => {
        setKey(k)
       // console.log(key)
        }}
      
    >
    
    
      <Tab.Pane eventKey='detallesCaso' title={cfg_form ? cfg_form["gestcasosrecup-tab-detcaso"]:null} onSelect={e=>console.log(e)}>
       <DetallesCaso/>
      </Tab.Pane>
      <Tab.Pane eventKey='descripcionBien' title={cfg_form ? cfg_form["gestcasosrecup-tab-descbien"]:null}  > 
        <DescripcionBien/>
      </Tab.Pane>
      <Tab.Pane eventKey='relato' title={cfg_form ? cfg_form["gestcasosrecup-tab-relhechos-reldelhech"]:null} >
      <RelatosHechos/>
      </Tab.Pane>
      <Tab.Pane eventKey='antecedentes' title={cfg_form ? cfg_form["gestcasosrecup-tab-antecpol"]:null} >
       <Antecedentes/>
      </Tab.Pane>
      <Tab.Pane eventKey='liquidacion' title={cfg_form ? cfg_form["gestcasosrecup-tab-liqaseg"]:null} >
       <Liquidacion tipo={tipoPerdida}/>
      </Tab.Pane>
      <Tab.Pane eventKey='documentos' title={cfg_form ? cfg_form["gestcasosrecup-tab-documentacion"]:null} >
       <DocumentosRequeridos/>
      </Tab.Pane>
    </Tabs>
    
  )
}

export default TabsComponent
