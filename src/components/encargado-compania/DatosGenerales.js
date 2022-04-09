import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { 
    configuracionFormAction,
    obtenerAntecedentesCaso   
  } from "../../store/actions/encargado-cia-action";

  
const DatosGenerales = () => { 
  // El hook useSelector (redux) permite acceder al state en nuestro store.
  const data_encargado_cia = useSelector(state => state.encargado_compania);
  const { cfg_form ,antecedentesCasos} = data_encargado_cia;
  const [idcaso, setIdCaso]=useState(5)
  // El hook useDispatch (redux) permite invocar una action.
  const dispatch = useDispatch();
 ; useEffect(() => { 
   
    let query = Buffer.from(JSON.stringify({ "idOrgCaso": 99061000, "idCaso": idcaso })).toString('base64');
    dispatch(obtenerAntecedentesCaso(query));
  
  }, [dispatch])  
  useEffect(() => {

    // @TODO: reemplazar valor estáticos.
    let query = Buffer.from(JSON.stringify({ "idform": 7, "rutcia": 99061000 })).toString('base64');
    dispatch(configuracionFormAction(query));

}, [dispatch]);

//console.log(antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["Siniestro"]:null, "casos")
  return (
    <Form.Group className="mb-3">
    { cfg_form  ?
    <div>
    <Row >
        <Col >    

          <Form.Label className="mb-0" style={{fontWeight:"bold",fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-siniestro"]}</Form.Label> <br/>      
          <Form.Text className="mb-3">{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos?.antecedentesCasos[0]["Siniestro"]:null}</Form.Text>       
          
        </Col>
        <Col >
          <Form.Label className="mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-fechasiniestro"]}</Form.Label><br/> 
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["FechaSiniestroFormat"]:null}</Form.Text>
        </Col>
        <Col>
          <Form.Label className="mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-tiposiniestro"]}</Form.Label><br/> 
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["TipoSiniestro"]:null}</Form.Text>
          
        </Col>
        <Col >
          <Form.Label className="mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-situacionsiniestro"]}</Form.Label><br/> 
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["EstadoSiniestro"]:null}</Form.Text>
        </Col>
        <Col>
          <Form.Label className="mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-tipogestion"]}</Form.Label><br/> 
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["TipoGestion"]:null}</Form.Text>
         
        </Col>
      
      </Row>
    <Row md="10" >
        <Col >
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-ciudadocu"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["CiudadOcurrencia"]:null}</Form.Text>
        </Col>
        <Col >
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold",fontSize:"14px"}}>{cfg_form["gestcasosrecup-tab-detcaso-politem"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["Poliza"]+" / "+antecedentesCasos.antecedentesCasos[0]["Item"]:null}</Form.Text>
        </Col>
        <Col>
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-patente"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["Patente"]:null}</Form.Text>
        </Col>
        <Col >
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-seguroter"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["SeguroTercero"]:null}</Form.Text>
        </Col>
        <Col>
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-estadocaso"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["EstadoCaso"]:null}</Form.Text>
        </Col>
      
      </Row>
    <Row md="10" >
        <Col >
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-contratante"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["NombreContratante"]:null}</Form.Text>
        </Col>
        <Col >
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-corredor"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["Corredor"]:null}</Form.Text>
        </Col>
        <Col>
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-analistarecdef"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["AnalistaRecDef"]:null}</Form.Text>
        </Col>
        <Col >
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-responsable"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["ResponsableAsignado"]:null}</Form.Text>
        </Col>
        <Col>
          <Form.Label className="mt-3 mb-0" style={{fontWeight:"bold", fontSize:"14px"}}>{cfg_form["gestcasosrecup-lbl-fechaasig"]}</Form.Label><br/>
          <Form.Text className="mb-3" style={{fontSize:"14px"}}>{antecedentesCasos && antecedentesCasos.length!=="undefined"  ? antecedentesCasos.antecedentesCasos[0]["FechaAsignacionFormat"]:null}</Form.Text>
        </Col>
      
      </Row>
   
    </div>
      :null}
    </Form.Group>
  )
}

export default DatosGenerales