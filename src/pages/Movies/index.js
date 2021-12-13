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
      <TableComponent {...{ url: "listaFilmes" }} />
    </Container>
  );
}

export default Movie;

const TableComponent = ({ url }) => {
  let emptyProduct = {
    id: null,
    titulo: "",
    imagem: null,
    descricao: "",
    duracao: 0,
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
  const [image, setImage] = useState(null);

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

    if (
      product.titulo.trim() &&
      product.descricao.trim() &&
      product.duracao > 0 &&
      product.imagem != null
    ) {
      let _products = [...products];
      console.log(_products);
      let _product = { ...product };
      if (product.id) {
        let res = await Api.post(Api.defaults.baseURL + "atualizarFilme", {
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
        let res = await Api.post(Api.defaults.baseURL + "salvarFilme", {
          titulo: _product.titulo,
          imagem: _product.imagem,
          descricao: _product.descricao,
          duracao: _product.duracao,
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
      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = async () => {
    await Api.delete(Api.defaults.baseURL + `deletarFilme/${product.id}`);

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

  const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `00${horas}`.slice(-2);
    const textoMinutos = `00${min}`.slice(-2);

    return `${textoHoras}:${textoMinutos}`;
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    const _product = { ...product };

    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        _product[`${name}`] = e.target.result;
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      if (name === "duracao") {
        const valueHora = e.target.value;
        const a = valueHora.split(":");
        const minutos = +a[0] * 60 + +a[1];
        _product[`${name}`] = minutos;
      } else {
        _product[`${name}`] = val;
      }
    }

    console.log(e.target.value, name);
    console.log(_product);

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

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        style={{ width: "100px" }}
        src={`${rowData.imagem}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.imagem}
        className="product-image"
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
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
          autoComplete="off"
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
        visible={productDialog}
        style={{ minWidth: "fit-content", minHeight: "fit-content" }}
        header="Editar Filme"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <form encType="multipart/form-data">
          <div className="previewImagem">
            {image && (
              <img
                style={{ maxWidth: "100%" }}
                src={`${product.imagem}`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                alt={product.imagem}
                className="product-image p-d-block p-m-auto p-pb-3"
              />
            )}
          </div>

          <div className="p-field">
            <label htmlFor="imagem">Imagem</label>
            <input
              id="imagem"
              type="file"
              accept="image/*"
              src={product.imagem}
              onChange={(e) => onInputChange(e, "imagem")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.imagem,
              })}
            />
            {submitted && !product.imagem && (
              <small className="p-error">Imagem é obrigatorio.</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="titulo">Titulo</label>
            <InputText
              id="titulo"
              autoComplete="off"
              value={product.titulo}
              onChange={(e) => onInputChange(e, "titulo")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.titulo,
              })}
            />
            {submitted && !product.titulo && (
              <small className="p-error">Titulo é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="descricao">Descricao</label>
            <InputText
              id="descricao"
              autoComplete="off"
              value={product.descricao}
              onChange={(e) => onInputChange(e, "descricao")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.descricao,
              })}
            />
            {submitted && !product.descricao && (
              <small className="p-error">Descricao é obrigatoria.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="duracao">Duracao</label>
            <InputText
              id="duracao"
              type="time"
              value={converter(product.duracao)}
              onChange={(e) => onInputChange(e, "duracao")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.duracao,
              })}
            />
            {submitted && !product.duracao && !product.duracao <= 0 && (
              <small className="p-error">Duração é obrigatoria.</small>
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
