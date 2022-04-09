import React, { useEffect, useState, Fragment } from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'

import DescripcionBien from '../Tabs/DescripcionBien'
import RelatosHechos from '../Tabs/RelatosHechos'
import Antecedentes from '../Tabs/Antecedentes'
import Liquidacion from '../Tabs/Liquidacion'
import DocumentosRequeridos from '../Tabs/DocumentosRequeridos'
import { useDispatch, useSelector } from 'react-redux'
import DetallesCaso from '../Tabs/DetallesCaso'

const TabsComponent = () => {
  const [key, setKey] = useState('')
  const [tipoPerdida, setTipoPerdida] = useState('')

  // El hook useSelector (redux) permite acceder al state en nuestro store.
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, antecedentesCasos } = data_encargado_cia
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      antecedentesCasos &&
      antecedentesCasos.antecedentesCasos[0]['IdTipoSiniestro'] === 15005
    ) {
      setTipoPerdida('Parcial')
    } else {
      setTipoPerdida('Total')
    }
  }, [antecedentesCasos])

  return (
    <>
      <style type='text/css'>
        {`
          .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
          color: white;
          background-color: #01CECA;
          }

          .nav-tabs {
              border-Bottom: 1px solid #253B6D;
              
          }
          .nav-item{
           
   
            color: #d9d9d9;
            border: 1px solid #01CECA;
            border-radius:5px 5px 0px 0px;  
            margin-right:2px;
            border-Bottom:none;            
            
          }
          .nav-tabs .nav-link:hover{
            color:white;
              background-color: #01CECA;
          }
     `}
      </style>

      <Tabs
        className='nav-tabs'
        activeKey={key}
        id='uncontrolled-tab-example'
        onSelect={(k) => {
          setKey(k)
          if(k===key){
            console.log("es el mismo")
            setKey("")
            }
          console.log(key)
        }}
      >
        <Tab.Pane        
          eventKey='detallesCaso'
          title={cfg_form ? cfg_form['gestcasosrecup-tab-detcaso'] : null}
          onClick={(e) => console.log(e,"Tab presionado")}
        >
          <DetallesCaso />
        </Tab.Pane>
        <Tab.Pane
          eventKey='descripcionBien'
          title={cfg_form ? cfg_form['gestcasosrecup-tab-descbien'] : null}
        >
          <DescripcionBien />
        </Tab.Pane>
        <Tab.Pane
          eventKey='relato'
          title={
            cfg_form
              ? cfg_form['gestcasosrecup-tab-relhechos-reldelhech']
              : null
          }
        >
          <RelatosHechos />
        </Tab.Pane>
        <Tab.Pane
          eventKey='antecedentes'
          title={cfg_form ? cfg_form['gestcasosrecup-tab-antecpol'] : null}
        >
          <Antecedentes />
        </Tab.Pane>
        <Tab.Pane
          eventKey='liquidacion'
          title={cfg_form ? cfg_form['gestcasosrecup-tab-liqaseg'] : null}
        >
          <Liquidacion tipo={tipoPerdida} />
        </Tab.Pane>
        <Tab.Pane
          eventKey='documentos'
          title={cfg_form ? cfg_form['gestcasosrecup-tab-documentacion'] : null}
        >
          <DocumentosRequeridos />
        </Tab.Pane>
      </Tabs>
    </>
  )
}

export default TabsComponent
