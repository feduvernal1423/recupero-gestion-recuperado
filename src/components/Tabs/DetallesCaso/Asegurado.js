import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'
import {formato_rut} from '../../../common/Formatos'

const Asegurado = () => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})

  return (
      <>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#4F517A"}}>
        {cfg_form ? cfg_form['gestcasosrecup-tab-detcaso-title-aseg'] : null}
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
                  {cfg_form['gestcasosrecup-tab-detcaso-rutaseg']}
                </Form.Label>{' '}
                <br />
                <Form.Text className='mb-3'>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? formato_rut(antecedentesCasos.antecedentesCasos[0]['RutAsegurado'])
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className=' mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-nomaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['NombreAsegurado']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-diraseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['DireccionAsegurado']
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-emailaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['EmailAsegurado']
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
                  {cfg_form['gestcasosrecup-tab-detcaso-fonoaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'FonoAsegurado'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-movilaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'MovilAsegurado'
                      ]
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-comunaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['ComunaAsegurado']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-ciudadaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['CiudadAsegurado']
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

export default Asegurado
