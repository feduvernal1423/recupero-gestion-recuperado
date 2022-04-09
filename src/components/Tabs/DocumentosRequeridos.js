import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'
import {
  obtenerDocumentacion,
  obtenerSelectDocumentacion
} from '../../store/actions/encargado-cia-action'

const DocumentosRequeridos = () => {
  const [listaDocumentos, setListaDocumentos]=useState([])
  const [isAsegurado, setIsAsegurado]=useState(false)
  const [isImplicado, setIsImplicado]=useState(false)
  // El hook useSelector (redux) permite acceder al state en nuestro store.
  const data_encargado_cia = useSelector((state) => state.encargado_compania)
  const { cfg_form, selectDocumentacion, documentacion } = data_encargado_cia
  const dispatch = useDispatch()
  useEffect(()=>{
    setListaDocumentos(documentacion && documentacion.documentacion)
  },[documentacion])
  useEffect(() => {
    let query = Buffer.from(
      JSON.stringify({
        idOrgCaso: '99061000',
        idCaso: '2',
        idImplicado: 0
      })
    ).toString('base64')
    dispatch(obtenerDocumentacion(query))
  }, [dispatch])
  useEffect(() => {
    let query = Buffer.from(
      JSON.stringify({
        idOrgCaso: 99061000,
        idCaso: 5
      })
    ).toString('base64')
    dispatch(obtenerSelectDocumentacion(query))
  }, [dispatch])

  console.log(listaDocumentos, "estado de lista")
  const obtenerColumnas = () => {

    return [
        { 
            dataField: 'NombreDocumento', text: cfg_form['gestcasosrecup-tab-documentacion-grilla-tipdocto'], sort: true, headerAlign: 'center', align: 'center',
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => (<div>{ column.text }<br/>{sortElement}</div>)
        },
        { 
            dataField: 'Obligatorio', text: cfg_form['gestcasosrecup-tab-documentacion-grilla-obliga'], sort: true, headerAlign: 'center', align: 'center',
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => (<div>{ column.text }<br/>{sortElement}</div>)
        },
        { 
            dataField: 'Situacion', text: cfg_form['gestcasosrecup-tab-documentacion-grilla-situacion'], sort: true, headerAlign: 'center', align: 'center',
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => (<div>{ column.text }<br/>{sortElement}</div>)
        },
        { 
            dataField: 'FechaCarga:', text: cfg_form['gestcasosrecup-tab-documentacion-grilla-fechacarga'], sort: true, headerAlign: 'center', align: 'center',
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => (<div>{ column.text }<br/>{sortElement}</div>)
        },
        { 
            dataField: 'Referencia', text: cfg_form['gestcasosrecup-tab-documentacion-grilla-refdocto'], sort: true, headerAlign: 'center', align: 'center',
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => (<div>{ column.text }<br/>{sortElement}</div>)
        },
        { 
            dataField: 'UsuarioIngreso', text: cfg_form['gestcasosrecup-tab-documentacion-grilla-usring'], sort: true, headerAlign: 'center', align: 'center',
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => (<div>{ column.text }<br/>{sortElement}</div>)
        }
       
       
    ];
}
const handleToggleA=(e)=>{
  setIsAsegurado(e.target.checked)
  if(e.target.checked && !isImplicado ){   

      setListaDocumentos(documentacion && documentacion.documentacion.filter(d=>d.IdImplicado===0))  
  }
  else if(e.target.checked && isImplicado ){   

    setListaDocumentos(documentacion && documentacion.documentacion)  
}
  else if(isImplicado){
   
    setListaDocumentos(documentacion && documentacion.documentacion.filter(d=>d.IdImplicado>0))
  }else{
    setListaDocumentos(documentacion && documentacion.documentacion)

  }
}
const handleToggleI=(e)=>{
  setIsImplicado(e.target.checked)

  if(e.target.checked && !isAsegurado){    
    setListaDocumentos(documentacion && documentacion.documentacion.filter(d=>d.IdImplicado>0))
  }
  else if(e.target.checked && isAsegurado){    
    setListaDocumentos(documentacion && documentacion.documentacion)
  }else if(isAsegurado){
    setListaDocumentos(documentacion && documentacion.documentacion.filter(d=>d.IdImplicado===0))  
  }else {
    setListaDocumentos(documentacion && documentacion.documentacion)
  }
}
const handleSelect=(e)=>{
  console.log(e.target.value)
  setListaDocumentos(documentacion && documentacion.documentacion.filter(d=>d.IdImplicado===parseInt(e.target.value)))
}
  return (
     
    <div>
      <Container>
      <Row className="mt-2">
        <Col>
          <Form.Check className='mt-2' type='checkbox' label='Asegurado' onChange={(e)=>handleToggleA(e)} />
        </Col>
        <Col>
          <Form.Check className='mt-2' type='checkbox' label='Implicado' onChange={(e)=>handleToggleI(e)} />
        </Col>
        <Col>
          <Form.Select className='mt-2' aria-label='Default select example' onChange={e=>handleSelect(e)}>
            <option>Seleccione...</option>
            {selectDocumentacion &&
              selectDocumentacion.selectDocumentacion.map((s) => (
                <option key={s.IdImplicado} value={s.IdImplicado}>
                  {s.NombreImplicado} {`(${s.IdImplicado} ${s.PlacaPatente})`}
                </option>
              ))}
          </Form.Select>
        </Col>
        <Col  className="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2">                        
                        <Button type="button" variant="outline-secondary" size="sm" onClick={() => { handleReload() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                            </svg>
                        </Button>
                    </Col>
      </Row>
      
    </Container>
   
    { cfg_form ? 
    <ToolkitProvider search bootstrap4 keyField="Id" 
        data={ listaDocumentos ? listaDocumentos : [] } 
        columns={ obtenerColumnas() } defaultSorted={ [{ dataField: 'NombreDocumento', order: 'asc' }] }>
        { 
        props =>                   
            <div>
                <div className="bg-secondary text-light rounded mt-4 mb-0">
                    <h5 className=" p-2">{ `${cfg_form['gestcasosrecup-tab-documentacion-titledocu']} ` }</h5>
                </div>
            
                                     
                <BootstrapTable { ...props.baseProps } headerWrapperClasses="table-secondary" pagination={ paginationFactory() } noDataIndication={<div className="text-center">No hay registros encontrados</div>} />
            </div>
        }
    </ToolkitProvider>
    : null }
    </div>
  )
}

export default DocumentosRequeridos
