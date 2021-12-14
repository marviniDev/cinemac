import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { classNames } from "primereact/utils";
import React, { useEffect, useRef, useState } from "react";
import Api from "../../services/Api.js";
import { Container } from "./style";

// import './DataTableDemo.css';

function Movie() {
  return (
    <Container>
      <TableComponent {...{ url: "salas" }} />
    </Container>
  );
}

export default Movie;

const TableComponent = ({ url }) => {
  let emptyProduct = {
    id: null,
    nome: "",
    quant_assentos: 0,
  };

  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    Api.get(Api.defaults.baseURL + url).then((response) => {
      response?.data && setProducts(response.data);
    });
  }, [submitted, url]);

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);

    if (product.nome.trim()) {
      let _product = { ...product };
      if (product.id) {
        let res = await Api.post(Api.defaults.baseURL + "salvarSala", {
          ..._product,
        });

        if (res.data && res.data.save === "true") {
          toast.current.show({
            severity: "success",
            summary: "Tudo certo!",
            detail: "Filme alterado com sucesso.",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo deu errado!",
            detail: res.data && res.data.message,
            life: 3000,
          });
        }

        setSubmitted(false);
      } else {
        let res = await Api.post(Api.defaults.baseURL + "salvarSala ", {
          nome: _product.nome,
          quant_assentos: _product.quant_assentos,
        });

        if (res.data && res.data.save === "true") {
          toast.current.show({
            severity: "success",
            summary: "Tudo certo!",
            detail: "Filme alterado com sucesso.",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo deu errado!",
            detail: res.data && res.data.message,
            life: 3000,
          });
        }
      }

      setSubmitted(false);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  // const editProduct = (product) => {
  //   setProduct({ ...product });
  //   setProductDialog(true);
  // };

  // const confirmDeleteProduct = (product) => {
  //   setProduct(product);
  //   setDeleteProductDialog(true);
  // };

  const deleteProduct = async () => {
    await Api.delete(Api.defaults.baseURL + `deletarFilme/${product.id}`);

    // let _products = products.filter((val) => val.id !== product.id);
    // setProducts(_products);
    setSubmitted(!submitted);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Tudo certo!",
      detail: "Filme deletado com sucesso.",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = val;
    setProduct(_product);
  };

  const RightToolbarTemplate = () => {
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

  // const actionBodyTemplate = (rowData) => {
  //   return (
  //     <>
  //       <Button
  //         icon="pi pi-pencil"
  //         className="p-button-rounded p-button-success p-mr-2"
  //         onClick={() => editProduct(rowData)}
  //       />
  //       <Button
  //         icon="pi pi-trash"
  //         className="p-button-rounded p-button-warning"
  //         onClick={() => confirmDeleteProduct(rowData)}
  //       />
  //     </>
  //   );
  // };

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
  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </>
  );

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />

      <div className="card">
        <Toolbar
          className="p-mb-4"
          right={RightToolbarTemplate}
          left={header}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          // header={header}
          responsiveLayout="scroll"
        >
          {/* <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
            exportable={false}
          ></Column> */}
          <Column field="nome" header="Nome" sortable></Column>
          <Column field="quant_assentos" header="Assentos" sortable></Column>
        </DataTable>
      </div>

      <Dialog
        visible={productDialog}
        style={{ minWidth: "fit-content", minHeight: "fit-content" }}
        header="Detalhes Sala"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <form encType="multipart/form-data">
          <div className="p-field">
            <label htmlFor="nome">Nome</label>
            <InputText
              id="nome"
              value={product.nome}
              onChange={(e) => onInputChange(e, "nome")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.nome,
              })}
            />
            {submitted && !product.nome && (
              <small className="p-error">Nome é obrigatoria.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="quant_assentos">Assentos</label>
            <InputText
              id="quant_assentos"
              value={product.quant_assentos}
              onChange={(e) => onInputChange(e, "quant_assentos")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.quant_assentos,
              })}
            />
            {submitted && !product.quant_assentos && (
              <small className="p-error">
                Quantidade de assentos é obrigatoria.
              </small>
            )}
          </div>
        </form>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "450px" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
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
};
