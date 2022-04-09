import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'
import {formato_monto} from '../../../common/Formatos'

const GrillaPerdidaParcial= () => {
    const data_encargado_cia = useSelector((state) => state.encargado_compania)
    const { cfg_form, liquidacionPerdida } = data_encargado_cia
  
  console.log(liquidacionPerdida && liquidacionPerdida.liquidacionPerdida["detalles"])
    return (
    <div>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#0040FF"}}>
      {cfg_form ? (
          <div>
       
        <Row>
          <Col>{cfg_form['gestcasosrecup-tab-liqasegpp-grilla-id']}</Col>
          <Col>{cfg_form['gestcasosrecup-tab-liqasegpp-grilla-prodor']}</Col>
          <Col>{cfg_form['gestcasosrecup-tab-liqasegpp-grilla-iddocto']}</Col>
          <Col>{cfg_form['gestcasosrecup-tab-liqasegpp-grilla-fecdocto']}</Col>
          <Col>{cfg_form['gestcasosrecup-tab-liqasegpp-grilla-mtoneto']}</Col>
        </Row>
      
        </div>):null}
      </Card.Header>
      <Container>
      {liquidacionPerdida && liquidacionPerdida.liquidacionPerdida["detalles"].map(l=>(
      <Row key={l.idProveedor}>
        <Col className="mt-2 mb-1">{l.idProveedor}</Col>
        <Col className="mt-2 mb-1">{l.nombreProveedor}</Col>
        <Col className="mt-2 mb-1">{l.nroDocumento}</Col>
        <Col className="mt-2 mb-1">{l.fechaDocumentoFormat}</Col>
        <Col className="mt-2 mb-1">{formato_monto(l.montoNeto)}</Col>
      </Row>
      ))}
          
       
      </Container>
     
     </Card>
    
    </div>
  )
}

export default GrillaPerdidaParcial