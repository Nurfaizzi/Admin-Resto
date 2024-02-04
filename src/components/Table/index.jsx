import React, { useEffect, useMemo, useState, useCallback} from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from "./data";
import './style.css'
import { Paginator } from 'primereact/paginator';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
const Table = () => {
    const [products, setProducts] = useState([]);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);
    

      useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);
const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const dateEditor = (options) => {
        return <InputText type="date" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const priceEditor = (options) => {
        return <InputText type="number" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(rowData.price);
    };


    const allowEdit = (rowData) => {
        return rowData.name !== 'Blues Band';
    };


  return (
    <div className='mt-14 pl-12 p-30 card  '>
        <h1 className="flex justify-center pb-8 font-semibold">Stock Bahan Makanan Dan Minuman</h1>

   <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }} stripedRows
paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="id" header="No" editor={(options) => textEditor(options)} style={{ width: '10%' }} sortable ></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '12%' }} sortable ></Column>
                <Column field="bahanmakanan" header="Bahan Makanan" editor={(options) => textEditor(options)} style={{ width: '20%' }} sortable ></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }} sortable ></Column>
                <Column field="date" header="Update Date" editor={(options) => dateEditor(options)} style={{ width: '18%' }} sortable ></Column>
                <Column field="name" header="Name User" editor={(options) => textEditor(options)} style={{ width: '18%' }} sortable ></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
            
    </div>
  )
}


export default Table