import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'


const RelatosHechos = () => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})

  return (
      <>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#4F517A"}}>
        {cfg_form ? cfg_form['gestcasosrecup-tab-relhechos-title-decla'] : null}
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
                  {cfg_form['gestcasosrecup-tab-relhechos-comocurr']}
                </Form.Label>{' '}
                <br />
                <Form.Text className='mb-3'>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['ComunaOcurrencia']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-relhechos-ciudocurr']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['CiudadOcurrencia']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className=' mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-relhechos-comtram']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['ComunaTramite'] 
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-relhechos-ciudtram']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['CiudadTramite']
                    : null}
                </Form.Text>
              </Col>

             
            </Row>
            <Row>
            <Col >
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-relhechos-lugarocurr']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['LugarOcurrencia']
                    : null}
                </Form.Text>
              </Col>
              <Col >
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-relhechos-respdeclar']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'Responsabilidad'
                      ]
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
                  {cfg_form['gestcasosrecup-tab-relhechos-reldelhech']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'RelatoHechos'
                      ]
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

export default RelatosHechos


