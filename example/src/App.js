import React from 'react'
import {exampleLabels, exampleData} from './data/data'
import 'datable-react/dist/index.css'
import { DataTable } from 'datable-react'

const App = () => {

  return <DataTable labels={exampleLabels} data={exampleData} />
  
}

export default App
