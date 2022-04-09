import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import TabsComponent from './TabsComponent'
import DatosGenerales from './DatosGenerales'
import {  useSelector } from 'react-redux';

const EncargadoCompania = () => {
  // El hook useSelector (redux) permite acceder al state en nuestro store.
  const data_encargado_cia = useSelector(state => state.encargado_compania);
  const { antecedentesCasos} = data_encargado_cia;
  //console.log(antecedentesCasos && antecedentesCasos.antecedentesCasos[0].IdCaso, "este es el id")
  return (
    <Container>
      <Card className='mt-2'>
        <Card.Header as='h6' className="text-center" styles={{backgroundColor:"#084B8A"}}>{`Gestionar Notificación de Cobro CIA - ID Caso ${antecedentesCasos ? antecedentesCasos.antecedentesCasos[0]?.IdCaso: ""}`}</Card.Header>
        <Card.Body>
        <DatosGenerales/>
           <TabsComponent/>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default EncargadoCompania
