import React from 'react'
import {exampleLabels} from './data/data'
import MockData from './data/MOCK_DATA.json'
import 'datable-react/dist/index.css'
import { DataTable } from 'datable-react'

const App = () => {

  return <DataTable labels={exampleLabels} data={MockData} />
  
}

export default App
