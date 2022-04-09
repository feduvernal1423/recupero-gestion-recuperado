import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerLiquidacionPerdida } from '../../../store/actions/encargado-cia-action'
import GrillaPerdidaParcial from './GrillaPerdidaParcial'
import LiquidacionParcial from './LiquidacionParcial'
import LiquidacionTotal from './LiquidacionPerdidaTotal'


const Liquidacion = ({tipo}) => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})
  console.log(antecedentesCasos && antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro'], "idsiniestro")
    // El hook useDispatch (redux) permite invocar una action.
    const dispatch = useDispatch();
  useEffect(() => {
    console.log(antecedentesCasos && antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro']===15005, "este esel tipo")
    if(antecedentesCasos && antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro']===15005){
      let query = Buffer.from(JSON.stringify({
        "idCaso": "6",
        "idImplicado": "0",
        "idOrganizacion": "99061000",
        "tipoGestion": "207001",
        "tipoSiniestro": "15005"
      })).toString('base64');
      dispatch(obtenerLiquidacionPerdida(query));
    }if(antecedentesCasos && antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro']===15001){
      let query = Buffer.from(JSON.stringify({
        "idCaso": "7",
        "idImplicado": "0",
        "idOrganizacion": "99061000",
        "tipoGestion": "207001",
        "tipoSiniestro": "15001"
      })).toString('base64');
      dispatch(obtenerLiquidacionPerdida(query));
    }
   

}, [antecedentesCasos]);
  return (
      <>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#4F517A"}}>
        {cfg_form && antecedentesCasos ? (antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro']===15005? cfg_form['gestcasosrecup-tab-liqasegpp-title']:cfg_form['gestcasosrecup-tab-liqasegpt-title']) : null}
      </Card.Header>
      <Container >
    

        {cfg_form && antecedentesCasos  ? (antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro']===15005 ?
       
        <>

        <LiquidacionParcial/>
         <GrillaPerdidaParcial/> 
        </>
        :<LiquidacionTotal/>
       ):
         null}
   
      </Container>
    </Card>


    </>
  )
}

export default Liquidacion


