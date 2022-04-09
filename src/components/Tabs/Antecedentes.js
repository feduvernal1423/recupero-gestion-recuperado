import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'


const Antecedentes = () => {
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const [datosSiniestro, setDatosSiniestro] = useState({})

  return (
      <>
    <Card className='mt-1 '>
      <Card.Header className='mt-0 mb-0' as='h6' style={{backgroundColor:"#CEECF5", color:"#0040FF"}}>
        {cfg_form ? cfg_form['gestcasosrecup-tab-antecpol-title-antec'] : null}
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
                  {cfg_form['gestcasosrecup-tab-antecpol-tipodeclara']}
                </Form.Label>{' '}
                <br />
                <Form.Text className='mb-3'>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['TipoDeclaracion']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-comisaria']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Comisaria']
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className=' mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-nroparte']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['NroPartePolicial']
                    : null}
                </Form.Text>
              </Col>
              

              <Col>
                <Form.Label
                  className='mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-fechaparte']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['FechaPartePolicialFormat']
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
                  {cfg_form['gestcasosrecup-tab-antecpol-juzgado']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'Juzgado'
                      ]
                    : null}
                </Form.Text>
              </Col>
              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-nrocausa']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0][
                        'NroCausaRol'
                      ]
                    : null}
                </Form.Text>
              </Col>

              <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-fechaingcausa']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['FechaIngresoCausaFormat']
                    : null}
                </Form.Text>
              </Col>
             <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-lesionados']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Lesionados']
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
                  {cfg_form['gestcasosrecup-tab-antecpol-tribunal']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['TribunalFiscalia']
                    : null}
                </Form.Text>
              </Col>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-fechacitacion']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['FechaCitacionFormat']
                    : null}
                </Form.Text>
              </Col>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-diascitacion']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['DiasCitacion']
                    : null}
                </Form.Text>
              </Col>
            <Col>
                <Form.Label
                  className='mt-3 mb-0'
                  style={{ fontWeight: 'bold', fontSize: '14px' }}
                >
                  {cfg_form['gestcasosrecup-tab-antecpol-alcohol']}
                </Form.Label>
                <br />
                <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
                  {antecedentesCasos && antecedentesCasos.length !== 'undefined'
                    ? antecedentesCasos.antecedentesCasos[0]['Alcoholemia']
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

export default Antecedentes


