import React, { useEffect, useState,Fragment } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { useDispatch, useSelector } from 'react-redux'
import {formato_monto} from '../../../common/Formatos'
import GrillaPerdidaParcial from './GrillaPerdidaParcial'
import GrillaPerdidaTotal from './GrillaPerdidaParcial'
const LiquidacionParcial= () => {
    const data_encargado_cia = useSelector((state) => state.encargado_compania)
    const { cfg_form, liquidacionPerdida,antecedentesCasos } = data_encargado_cia
  

    return (
    <div>
      <Row>
      <Col>
          <Form.Label
            className='mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpt-mdapago']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida[
                  'codMonedaPago'
                ]
              : null}
          </Form.Text>
        </Col>

        <Col>
          <Form.Label
            className='mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpt-mtopago']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? formato_monto(liquidacionPerdida.liquidacionPerdida['mtoPago'])
              : null}
          </Form.Text>
        </Col>
       
        <Col>
          <Form.Label
            className=' mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpp-fechultpago']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {antecedentesCasos && antecedentesCasos.length !== 'undefined'
              ? antecedentesCasos.antecedentesCasos[0]['UltFechaPagoFormat'] 
              : null}
          </Form.Text>
        </Col>
        

        <Col>
          <Form.Label
            className='mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpp-sitpago']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['situacionPago']
              : null}
          </Form.Text>
        </Col>
        <Col>
          <Form.Label
            className='mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpp-facturas']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida[
                  'cntFacturas'
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
            {cfg_form['gestcasosrecup-tab-liqasegpp-mdaindem']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3'>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['codMonedaIndeminza']
              : null}
          </Form.Text>
        </Col>
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpp-mtoindem']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['mtoIndemnizacion']
              : null}
          </Form.Text>
        </Col>
        
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpp-informeliq']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? (liquidacionPerdida.liquidacionPerdida['indInformeLiquida']===1?"Si":"NO")
              : null}
          </Form.Text>
        </Col>
        
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpt-fechpago']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['fechaPagoFormat']
              : null}
          </Form.Text>
        </Col>
        
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpp-facturas']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['indicaFacturaVenta']
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
            {cfg_form['gestcasosrecup-tab-liqasegpt-mdaprovi']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['codMonedaProvision']
              : null}
          </Form.Text>
        </Col>
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpt-mtoprovi']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? formato_monto(liquidacionPerdida.liquidacionPerdida['mtoProvision'])
              : null}
          </Form.Text>
        </Col>
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpt-mdasalva']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? liquidacionPerdida.liquidacionPerdida['codMonedaSalvataje']
              : null}
          </Form.Text>
        </Col>
        <Col>
          <Form.Label
            className='mt-3 mb-0'
            style={{ fontWeight: 'bold', fontSize: '14px' }}
          >
            {cfg_form['gestcasosrecup-tab-liqasegpt-mtosalva']}
          </Form.Label>
          <br />
          <Form.Text className='mb-3' style={{ fontSize: '14px' }}>
            {liquidacionPerdida && liquidacionPerdida.length !== 'undefined'
              ? formato_monto(liquidacionPerdida.liquidacionPerdida['mtoSalvataje'])
              : null}
          </Form.Text>
        </Col>
        <Col></Col>
      </Row>
      
    </div>
  )
}

export default LiquidacionParcial