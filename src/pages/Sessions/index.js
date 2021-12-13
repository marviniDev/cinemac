import "jquery-mask-plugin/dist/jquery.mask.min";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
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
      <TableComponent {...{ url: "sessoes" }} />
    </Container>
  );
}

export default Movie;

const TableComponent = ({ url }) => {
  let emptyProduct = {
    id: null,
    data: "",
    tipoAudio: null,
    horaInicio: "",
    horaFim: "",
    filmeId: null,
    salaId: null,
    animacao: "",
    valorIngresso: 0,
  };

  // $("#data").mask("99/99/9999", {
  //   reverse: true,
  //   placeholder: "dd/mm/aaaa",
  // });

  // $("#valorIngresso").mask("000.000.000,00", {
  //   reverse: true,
  //   placeholder: "0,00",
  // });

  const [products, setSessoes] = useState(null);
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState(null);
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
      response?.data && setSessoes(response.data);
    });
  }, [submitted, url]);

  useEffect(() => {
    const listarFilmes = async () => {
      let resFilmes = await Api.get(Api.defaults.baseURL + "listaFilmes");
      setFilmes(resFilmes.data);
    };
    const listarSalas = async () => {
      let resSalas = await Api.get(Api.defaults.baseURL + "salas");
      setSalas(resSalas.data);
    };
    listarFilmes();
    listarSalas();
  }, []);

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
    console.log(product);

    if (
      product.data.trim() &&
      product.tipoAudio != null &&
      product.horaInicio.trim() &&
      product.horaFim.trim() &&
      product.filmeId != null &&
      product.salaId != null &&
      product.animacao != null &&
      product.valorIngresso !== 0
    ) {
      let _product = { ...product };
      if (product.id) {
        let res = await Api.post(Api.defaults.baseURL + "salvaSessao", {
          animacao: _product.animacao?.code ?? _product.animacao,
          data: _product.data,
          filmeId: _product.filmeId?.code ?? _product.filmeId,
          horaFim: _product.horaFim,
          horaInicio: _product.horaInicio,
          id: _product.id,
          salaId: _product.salaId?.code ?? _product.salaId,
          tipoAudio: _product.tipoAudio?.code ?? _product.tipoAudio,
          valorIngresso: _product.valorIngresso,
        });

        if (res.data && res.data.save === "true") {
          toast.current.show({
            severity: "success",
            summary: "Tudo certo!",
            detail: res.data.message,
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo deu errado!",
            detail: res.data.message,
            life: 3000,
          });
        }

        setSubmitted(false);
      } else {
        let res = await Api.post(Api.defaults.baseURL + "salvaSessao", {
          animacao: _product.animacao?.code ?? _product.animacao,
          data: _product.data,
          filmeId: _product.filmeId?.code ?? _product.filmeId,
          horaFim: _product.horaFim,
          horaInicio: _product.horaInicio,
          id: _product.id,
          salaId: _product.salaId?.code ?? _product.salaId,
          tipoAudio: _product.tipoAudio?.code ?? _product.tipoAudio,
          valorIngresso: _product.valorIngresso,
        });

        if (res.data && res.data.save === "true") {
          toast.current.show({
            severity: "success",
            summary: "Tudo certo!",
            detail: res.data.message,
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo deu errado!",
            detail: res.data.message,
            life: 3000,
          });
        }
      }

      setSubmitted(false);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product) => {
    console.log(product);
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

  const converteToHours = (minuts) => {
    const horas = Math.floor(minuts / 60);
    const min = minuts % 60;
    const textoHoras = `00${horas}`.slice(-2);
    const textoMinuts = `00${min}`.slice(-2);

    return `${textoHoras}:${textoMinuts}`;
  };

  const converteToMinuts = (hour) => {
    const valueHora = hour;
    const a = valueHora.split(":");
    const minutos = +a[0] * 60 + +a[1];

    return minutos;
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const onChangeFilm = (e) => {
    const { code } = e.target.value;
    const result = filmes.find((Element) => Element.id === code);

    if (result) {
      let _product = { ...product };
      const duracaoFilme = result.duracao;

      _product.horaInicio ?? setSubmitted(true);

      _product["horaFim"] = converteToHours(
        converteToMinuts(_product.horaInicio) + duracaoFilme
      );
      _product["filmeId"] = e.target.value;

      setProduct(_product);
    }
  };

  const onChangeHoraInicio = (e) => {
    if (product.filmeId && product.filmeId != null) {
      const code = product.filmeId?.code ?? product.filmeId;

      const result = filmes.find((Element) => Element.id === code);
      const duracaoFilme = result.duracao;
      let _product = { ...product };

      const minutos = converteToMinuts(e.target.value);

      _product["horaFim"] = converteToHours(minutos + duracaoFilme);
      _product["horaInicio"] = converteToHours(minutos);

      setProduct(_product);
    }
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

  const generateOptionsFilms = (data) => {
    let newData = [];
    data?.map((value, index) => {
      newData.push({
        name: value.titulo,
        code: value.id,
      });
    });
    return newData;
  };

  const generateOptionsRooms = (data) => {
    let newData = [];
    data?.map((value, index) => {
      newData.push({
        name: value.nome,
        code: value.id,
      });
    });
    return newData;
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
          <Column field="data" header="Data" sortable></Column>
          <Column field="horaInicio" header="Hora Inicial" sortable></Column>
          <Column field="horaFim" header="Hora final" sortable></Column>
          <Column field="tipoAudio" header="Áudio" sortable></Column>
          <Column field="animacao" header="Animação" sortable></Column>
          <Column field="valorIngresso" header="Ingresso" sortable></Column>
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
          <div className="p-field">
            <label htmlFor="data">Data</label>
            <InputText
              id="data"
              type="date"
              value={product.data}
              onChange={(e) => onInputChange(e, "data")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.data,
              })}
            />
            {submitted && !product.data && (
              <small className="p-error">Data é obrigatorio.</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="tipoAudio">Tipo do Audio</label>
            <Dropdown
              id="tipoAudio"
              name="tipoAudio"
              required
              autoFocus
              value={product.tipoAudio}
              options={[
                { name: "Dublado", code: "dub" },
                { name: "Original", code: "org" },
              ]}
              onChange={(e) => onInputChange(e, "tipoAudio")}
              optionLabel="name"
              placeholder="Selecione um Áudio"
            />
            {submitted && !product.tipoAudio && (
              <small className="p-error">Audio é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="horaInicio">Hora de inicio</label>
            <InputText
              id="horaInicio"
              type="time"
              value={product.horaInicio}
              onChange={(e) => {
                onInputChange(e, "horaInicio");
                onChangeHoraInicio(e);
              }}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.horaInicio,
              })}
            />
            {submitted && !product.horaInicio && (
              <small className="p-error">hora de inicio é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="horaFim">Hora de termino</label>
            <InputText
              id="horaFim"
              type="time"
              disabled
              value={product.horaFim}
              onChange={(e) => onInputChange(e, "horaFim")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.horaFim,
              })}
            />
            {submitted && !product.horaFim && (
              <small className="p-error">hora de termino é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="filmeId">Filme</label>
            <Dropdown
              id="filmeId"
              value={product.filmeId}
              required
              autoFocus
              options={generateOptionsFilms(filmes)}
              className={classNames({
                "p-invalid": submitted && !product.filmeId,
              })}
              onChange={(e) => {
                onInputChange(e, "filmeId");
                onChangeFilm(e);
              }}
              optionLabel="name"
              placeholder="Selecione um Filme"
            />
            {submitted && !product.filmeId && (
              <small className="p-error">Filme é obrigatorio.</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="salaId">Sala</label>
            <Dropdown
              id="salaId"
              value={product.salaId}
              onChange={(e) => onInputChange(e, "salaId")}
              required
              autoFocus
              options={generateOptionsRooms(salas)}
              className={classNames({
                "p-invalid": submitted && !product.salaId,
              })}
              optionLabel="name"
              placeholder="Selecione uma Sala"
            />
            {submitted && !product.salaId && (
              <small className="p-error">Sala é obrigatoria.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="animacao">Animação</label>
            <Dropdown
              id="animacao"
              value={product.animacao}
              required
              autoFocus
              options={[
                { name: "2D", code: "2D" },
                { name: "3D", code: "3D" },
              ]}
              className={classNames({
                "p-invalid": submitted && !product.animacao,
              })}
              onChange={(e) => onInputChange(e, "animacao")}
              optionLabel="name"
              placeholder="Selecione uma Animação"
            />
            {submitted && !product.animacao && (
              <small className="p-error">Animação é obrigatoria.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="valorIngresso">Valor do ingresso</label>
            <InputText
              id="valorIngresso"
              type="number"
              autoComplete="off"
              step={0.01}
              value={product.valorIngresso}
              onChange={(e) => onInputChange(e, "valorIngresso")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.valorIngresso,
              })}
            />
            {submitted && !product.valorIngresso && (
              <small className="p-error">
                Valor do ingresso é obrigatoria.
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
