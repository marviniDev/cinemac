
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Container } from './style'
// import { ProductService } from '../service/ProductService';

function Movies() {
    return (
        <Container>
            <DataTableSortDemo />
        </Container>
    );
}

export default Movies;



const DataTableSortDemo = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
    // const productService = new ProductService();

    useEffect(() => {
        // productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} removableSort responsiveLayout="scroll"
                paginator className="p-datatable-customers" rows={10}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="price" header="Price" sortable></Column>
            </DataTable>
        </div>
    );
}