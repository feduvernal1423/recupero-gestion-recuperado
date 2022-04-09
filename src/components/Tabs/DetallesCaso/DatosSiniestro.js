import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'
import {formato_monto} from '../../../common/Formatos'
import styles from '../../../common/styles'
const DatosSiniestro = () => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})

  return (
      <>
    <Card className='mt-0 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#0040FF"}}>
        {cfg_form ? cfg_form['gestcasosrecup-tab-detcaso-title-datsini'] : null}
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
                  {cfg_form['gestcasosrecup-lbl-siniestro']}
                </Form.Label>{' '}
                <br />
                <Form.Text className='mb-3'>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Siniestro']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className=' mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-politem']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Poliza']+" / "+antecedentesCasos.antecedentesCasos[0]["Item"]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-lbl-corredor']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Corredor']
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-sucpol']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['SucursalPoliza']
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
                  {cfg_form['gestcasosrecup-lbl-fechasiniestro']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'FechaSiniestroFormat'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-fecden']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'FechaDenuncioFormat'
                      ]
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-liquidador']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Liquidador']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-ramo']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Ramo']
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
                  {cfg_form['gestcasosrecup-tab-detcaso-mtopag']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? `${formato_monto(antecedentesCasos.antecedentesCasos[0]['MontoPago'])} ${antecedentesCasos.antecedentesCasos[0]['MonedaPago']}`
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-mtoprov']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? `${formato_monto(antecedentesCasos.antecedentesCasos[0]['MontoProvision'])} ${antecedentesCasos.antecedentesCasos[0]['MonedaPago']}`
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-anasini']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'AnalistaSiniestro'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-respons']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Responsabilidad']
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
                  {cfg_form['gestcasosrecup-tab-detcaso-ultfecpgo']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'UltFechaPagoFormat'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-condaseg']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'ConductorAsegurado'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-anarecdef']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['AnalistaRecDef']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-detcaso-canalden']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['CanalDenuncio']
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

export default DatosSiniestro
