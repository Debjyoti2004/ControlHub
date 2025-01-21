import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  ExcelExport,
  PdfExport,
  Edit,
  Page,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header title="Orders" category="Pages" />
      <GridComponent
        dataSource={ordersData}
        allowSorting={true}
        contextMenuItems={contextMenuItems}
        allowResizing={true}
        allowFiltering={true}
        allowPaging={true} // Enable pagination
        pageSettings={{ pageSize: 10 }} // Configure page size
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
            Page, 
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
