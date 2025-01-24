import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components'


const Employees = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header title="Orders" category="Pages" />
      <GridComponent
        dataSource={employeesData}
        allowSorting={true}
        allowResizing={true}
        allowFiltering={true}
        allowPaging={true} 
        pageSettings={{ pageSize: 10 }} 
        toolbar={['Search']}
        width="auto"
        
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Search,
            Page,
            Toolbar 
          ]}
        />
      </GridComponent>
    </div>
  )
}

export default Employees
