import React from 'react'
import Heading from './assets/Components/Heading'
import Form from './assets/Components/Form'
import ListGroup from './assets/Components/ListGroup'
import QuoteCom from './assets/Components/QuoteCom'


const App = () => {
  return (
    <>
      <div className='main-container'>
        <Heading />
        <div className='form-sec'>
          <Form />
          <ListGroup />
        </div>
        <QuoteCom />
      </div>
    </>


  )
}

export default App
