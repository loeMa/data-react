# datable-react

> Datable is a ReactJS library to create a custom and sortable data table. This is the V1 of this project. 

[![NPM](https://img.shields.io/npm/v/datable-react.svg)](https://www.npmjs.com/package/datable-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Image](./example/public/datable.png)

## Features

   - Searching a direct data
   - Paginate and Sort data
   - Customizable
   - Add table headers
   - Responsive


## Install

```bash
npm install --save datable-react
```

or

```bash
npm i datable-react
```
### General
```reactJS
import {DataTable} from 'datable-react';
import {Header} from 'datable-react';
import {Table} from 'datable-react';
import {Footer} from 'datable-react';
import {labels, data} from './your-data-repository'

//css module for the table
import "datable-react/dist/index.css";

//to use all the table - Header, table, footer 
<DataTable labels={labels} data={data} />

//to use the header
<Header labels={labels} data={data} />

//to use only the table
<Table labels={labels} data={data} />

//to use the footer
<Footer labels={labels} data={data} />
```

### include data

```
// titles of columns:
const labels = [ 
      { text: "column title 1", value: "valueTitle1" },
      { text: "column title 2", value: "valueTitle2" },
      { text: "column title 3", value: "valueTitle3" },
      {...},
]

// data in rows:
const data = [ 
      { valueTitle1: "data 1",
        valueTitle2: "data 2",
        valueTitle3: "data 3",
       }
]

// example
const labels = [
    { text: "First Name", value: "firstName" },
    { text: "Last Name", value: "lastName" },
    { text: "Start Date", value: "startDate" },
    { text: "Department", value: "department" },
  ];
  
  const data = [
    {
      firstName: "Tyson",
      lastName: "Doe",
      startDate: "04/14/2021",
      department: "Marketing",
    },
    {
      firstName: "Anna",
      lastName: "Alia",
      startDate: "03/02/2020",
      department: "Marketing",
    },
]

```
### Custom 


| Property         | Type    | Required | Default                 | Description                                           |
| :--------------- | :------ | :------- | :---------------------- | :---------------------------------------------------- |
| labels           | array   | true     | []                      | Names of columns                                      |
| data             | array   | true     | []                      | Data in rows                                          |
| language         | boolean | false    | false                   | false = french, true = english                        |
| firstBackground  | string  | false    | '#5e5d5c'               | Background color of columns and active page           |
| secondBackground | string  | false    | '#e9e9ed'               | Background color of certains rows and page not active |
| color            | string  | false    | 'white'                 | Column font color                                     |
| arrowColor       | string  | false    | '#75797a'               | Arrow's color to sort data                            |
| customButton     | object  | false    | []                      | to customize the previous and next button             |
| customColumn     | object  | false    | backgroundColor, color  | to customize the column component                     |
| customFooter     | object  | false    | []                      | to customize the footer component                     |
| customHeader     | object  | false    | []                      | to customize the header component                     |
| customPagination | object  | false    | []                      | to customize the pagination                           |
| customRow        | object  | false    | backgroundColor, filter | to customize the row component                        |
| customSearch     | object  | false    | []                      | to customize the search section                       |
| customArrow      | object  | false    | []                      | to customize arrows to sort data                      |
| customLength     | object  | false    | []                      | to customize the section of "show length entries"     |

#### Exemple custom

```
<DataTable 
labels={labels} 
data={data} 
language={true}
firstBackground={"#038C3E"}
secondBackground={"#DEF4E0"}
arrowColor={"#022601"}
/>
```
![Image](./example/public/data-tableCustom.png)
## License

MIT © [loeMa](https://github.com/loeMa)
