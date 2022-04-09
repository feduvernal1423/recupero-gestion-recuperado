import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'


const DescripcionBien = () => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})

  return (
      <>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#4F517A"}}>
        {cfg_form ? cfg_form['gestcasosrecup-tab-descbien-title-datbien'] : null}
      </Card.Header>
      <Container>
        {cfg_form ? (
          <div>
            <Row>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-patente']}
                </Form.Label>{' '}
                <br />
                <Form.Text className='mb-3'>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Patente']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-tipvh']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['TipoVehiculo']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className=' mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-marcamodelo']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Marca'] +" / "+antecedentesCasos.antecedentesCasos[0]['Modelo']
                    : null}
                </Form.Text>
              </Col>
              

              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-aniovh']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Anio']
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
                  {cfg_form['gestcasosrecup-tab-descbien-motor']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'Motor'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-chasis']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'Chassis'
                      ]
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-color']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Color']
                    : null}
                </Form.Text>
              </Col>
              <Col></Col>
            </Row>
            <Row>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-descbien-obs']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Observaciones']
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

export default DescripcionBien


