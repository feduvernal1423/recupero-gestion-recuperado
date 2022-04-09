import React, { Fragment } from 'react'
import Asegurado from './Asegurado'
import Conductor from './Conductor'
import Contratante from './Contratante'
import DatosSiniestro from './DatosSiniestro'

const DetallesCaso = () => {
  return (
    <>
      <DatosSiniestro />
      <Contratante />
      <Asegurado/>
      <Conductor/>
    </>
  )
}

export default DetallesCaso
