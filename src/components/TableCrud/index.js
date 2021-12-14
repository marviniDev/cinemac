import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import React, { useEffect, useRef, useState } from "react";
import Api from "../../services/Api.js";
// import './DataTableDemo.css';

function TableCrud({
  emptyFilm = {},
  url = "",
  actions = true,
  TemplateModalRegister,
  setSubmitted,
}) {
  const [data, setData] = useState(null);
  const [modalRegister, setModalRegister] = useState(false);
  const [deleteDataDialog, setDeleteDataDialog] = useState(false);
  const [product, setProduct] = useState(emptyFilm);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    Api.get(Api.defaults.baseURL + url).then((response) => {
      response?.data && setData(response.data);
    });
  }, [url]);

  const openNew = () => {
    setProduct(emptyFilm);
    setSubmitted(false);
    setModalRegister(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setModalRegister(false);
  };

  const hideDeleteDataDialog = () => {
    setDeleteDataDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...data];
      let _product = { ...product };
      if (product.id) {
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _product.imagem = "product-placeholder.svg";
        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setData(_products);
      setModalRegister(false);
      setProduct(emptyFilm);
    }
  };

  const editData = (product) => {
    setProduct({ ...product });
    setModalRegister(true);
  };

  const confirmDeleteData = (product) => {
    setProduct(product);
    setDeleteDataDialog(true);
  };

  const deleteData = () => {
    let _products = data.filter((val) => val.id !== product.id);
    setData(_products);
    setDeleteDataDialog(false);
    setProduct(emptyFilm);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const rightToolbarTemplate = () => {
    return (
      <>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success p-mr-2"
          onClick={openNew}
        />
      </>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editData(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteData(rowData)}
        />
      </>
    );
  };

  const header = (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveProduct}
      />
    </>
  );
  const deleteDataDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteDataDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteData}
      />
    </>
  );

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`images/product/${rowData.imagem}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.imagem}
        className="product-image"
      />
    );
  };

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />

      <div className="card">
        <Toolbar className="p-mb-4" right={rightToolbarTemplate}></Toolbar>

        <DataTable
          ref={dt}
          value={data}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={actions ? header : null}
          responsiveLayout="scroll"
        >
          {/* <Column selectionMode="multiple" exportable={false}></Column> */}
          <Column
            field="image"
            header="Image"
            body={imageBodyTemplate}
          ></Column>
          <Column field="titulo" header="Titulo" sortable></Column>
          <Column field="descricao" header="Descrição" sortable></Column>
          <Column field="duracao" header="Duração" sortable></Column>
          <Column body={actionBodyTemplate} exportable={false}></Column>
        </DataTable>
      </div>

      <Dialog
        visible={modalRegister}
        style={{ minWidth: "100%", minHeight: "100%" }}
        header="Product Details"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <TemplateModalRegister {...{ product }} />
      </Dialog>

      <Dialog
        visible={deleteDataDialog}
        style={{ f: "450px" }}
        header="Confirm"
        modal
        footer={deleteDataDialogFooter}
        onHide={hideDeleteDataDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Você tem certeza que deseja deletar <b>{product.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default TableCrud;
