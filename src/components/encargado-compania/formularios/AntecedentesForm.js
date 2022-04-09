import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'
import { configuracionFormAction8,obtenerCasoImplicado  } from '../../../store/actions/encargado-cia-action'


const AntecendentesForm = () => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos,cfg_form8, casoImplicado } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})
  const dispatch = useDispatch();
  useEffect(() => {
    // @TODO: reemplazar valor estáticos.
    let query = Buffer.from(JSON.stringify({ "idform": 8, "rutcia": 99061000 })).toString('base64');
    dispatch(configuracionFormAction8(query));

}, [dispatch]);
useEffect(() => {
    // @TODO: reemplazar valor estáticos.
    let query = Buffer.from(JSON.stringify({ "idImplicado": 1, "idCaso": 5 })).toString('base64');
    dispatch(obtenerCasoImplicado(query));

}, [dispatch]);
console.log(casoImplicado && casoImplicado.casoImplicado[0])
  return (
      <>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#4F517A"}}>
        {cfg_form8 ? cfg_form8['preparacartacobro-title-antecimpl'] : null}
      </Card.Header>
      <Container>
        {cfg_form ? (
          <div>
            <Row>
              <Col>
                <Form.Label
                  className='mb-0 mt-2'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-lbl-idimpl']}
                </Form.Label>{' '}
                <br />
                <Form.Text className='mb-3'>
                  {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['RutInvolucrado']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0  mt-2'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8 ['preparacartacobro-lbl-nombreimpl']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3  ' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['NombreInvolucrado']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className=' mb-0  mt-2'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-lbl-gestion']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['TipoGestion'] 
                    : null}
                </Form.Text>
              </Col>
              

              <Col>
                <Form.Label
                  className='mb-0  mt-2'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-lbl-estadorec']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? `${casoImplicado.casoImplicado[0]['IsEstadoImplicado']}-${casoImplicado.casoImplicado[0]['EstadoImplicado']}`
                    : null}
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-input - tipovh']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? `${casoImplicado.casoImplicado[0]['IdTipoVehiculo']} - ${casoImplicado.casoImplicado[0]['TipoVehiculo']}`
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-input-patente']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['Patente']
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-input-marca']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['IdMarca']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-input-descripcion']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['Descripcion']
                    : null}
                </Form.Text>
              </Col>
              
            </Row>
            <Row>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-cmb-seguro']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? `${casoImplicado.casoImplicado[0]['IdSeguroImplicado']} - ${casoImplicado.casoImplicado[0]['SeguroImplicado']}`
                    : null}
                </Form.Text>
              </Col>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-cmb-cia']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? `${casoImplicado.casoImplicado[0]['IdCiaImplicado']} - ${casoImplicado.casoImplicado[0]['CiaImplicado']}`
                    : ""}
                </Form.Text>
              </Col>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-input-siniestroimpl']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['SiniestroIM']
                    : null}
                </Form.Text>
              </Col>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form8 && cfg_form8['preparacartacobro-input-fechasinimpl']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                {casoImplicado && casoImplicado.length !== 'undefined'
                    ? casoImplicado.casoImplicado[0]['FechaSiniestroIM']
                    : null}
                </Form.Text>
              </Col>
            </Row>
          </div>
        ) : null}
      </Container>
    </Card>


    </>
  )
}

export default AntecendentesForm


