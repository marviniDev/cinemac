import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
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
  let emptyMovie = {
    id: null,
    titulo: "",
    imagem: null,
    descricao: "",
    duracao: 0,
  };

  const [movies, setMovies] = useState([]);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [movie, setMovie] = useState(emptyMovie);
  const [selectedMovies, setSelectedMovies] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    Api.get(Api.defaults.baseURL + url).then((response) => {
      response?.data && setMovies(response.data);
    });
  }, [submitted, url]);

  const newMovie = () => {
    setMovie(emptyMovie);
    setSubmitted(false);
    setModalRegister(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setModalRegister(false);
  };

  const hideModalDelete = () => {
    setModalDelete(false);
  };

  const saveFilme = async () => {
    setSubmitted(true);

    if (
      movie.titulo.trim() &&
      movie.descricao.trim() &&
      movie.duracao > 0 &&
      movie.imagem != null
    ) {
      let _movie = { ...movie };
      if (movie.id) {
        let res = await Api.post(Api.defaults.baseURL + "atualizarFilme", {
          ..._movie,
        });

        if (res.data && res.data.save === "true") {
          toast.current.show({
            severity: "success",
            summary: "Tudo certo!",
            detail: res.data.message ?? "Editado com sucesso!",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo deu errado!",
            detail: res.data.message ?? "Falha ao editar!",
            life: 3000,
          });
        }

        setSubmitted(false);
      } else {
        let res = await Api.post(Api.defaults.baseURL + "salvarFilme", {
          titulo: _movie.titulo,
          imagem: _movie.imagem,
          descricao: _movie.descricao,
          duracao: _movie.duracao,
        });

        if (res.data && res.data.save === "true") {
          toast.current.show({
            severity: "success",
            summary: "Tudo certo!",
            detail: res.data.message ?? "Cadastrado com sucesso!",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo deu errado!",
            detail: res.data.message ?? "Falha ao cadastrar",
            life: 3000,
          });
        }
      }

      setSubmitted(false);
      setModalRegister(false);
      setMovie(emptyMovie);
    }
  };

  const editMovie = (movie) => {
    setMovie({ ...movie });
    setImage(movie.imagem);
    setModalRegister(true);
  };

  const confirmModalDelete = (movie) => {
    setMovie(movie);
    setModalDelete(true);
  };

  const deleteFilme = async () => {
    let res = await Api.delete(
      Api.defaults.baseURL + `deletarFilme/${movie.id}`
    );

    if (res.data && res.data.deleted === "true") {
      toast.current.show({
        severity: "success",
        summary: "Tudo certo!",
        detail: res.data.message ?? "Excluido com sucesso!",
        life: 3000,
      });
    } else {
      toast.current.show({
        severity: "error",
        summary: "Algo deu errado!",
        detail: res.data.message ?? "Falha ao excluir!",
        life: 3000,
      });
    }

    setSubmitted(!submitted);
    setModalDelete(false);
    setMovie(emptyMovie);
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
    const _movie = { ...movie };

    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        _movie[`${name}`] = e.target.result;
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      if (name === "duracao") {
        const valueHora = e.target.value;
        const a = valueHora.split(":");
        const minutos = +a[0] * 60 + +a[1];
        _movie[`${name}`] = minutos;
      } else {
        _movie[`${name}`] = val;
      }
    }

    setMovie(_movie);
  };

  const RightToolbarTemplate = () => {
    return (
      <>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success p-mr-2"
          onClick={newMovie}
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
        className="movie-image"
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editMovie(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmModalDelete(rowData)}
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
  const modalRegisterFooter = (
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
        onClick={saveFilme}
      />
    </>
  );
  const modalDeleteFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideModalDelete}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteFilme}
      />
    </>
  );

  const duracaoBodyTemplate = (rowData) => {
    return (
      <span
        style={{
          fontWeight: "bold",
          background: "#F77F00",
          padding: ".5em",
          borderRadius: "5%",
          color: "#fff",
        }}
      >
        {rowData.duracao}min
      </span>
    );
  };

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
          value={movies}
          selection={selectedMovies}
          onSelectionChange={(e) => setSelectedMovies(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} movies"
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
          <Column
            field="descricao"
            header="Descrição"
            sortable
            style={{ maxWidth: "22em", minWidth: "25em" }}
          ></Column>
          <Column
            field="duracao"
            header="Duração (min)"
            body={duracaoBodyTemplate}
            sortable
          ></Column>
          <Column body={actionBodyTemplate} exportable={false}></Column>
        </DataTable>
      </div>

      <Dialog
        visible={modalRegister}
        style={{ minWidth: "fit-content", minHeight: "fit-content" }}
        header="Detalhes Filme"
        modal
        className="p-fluid"
        footer={modalRegisterFooter}
        onHide={hideDialog}
      >
        <form encType="multipart/form-data">
          <div className="previewImagem">
            {image && (
              <img
                style={{ maxWidth: "100%" }}
                src={`${movie.imagem}`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                alt={movie.imagem}
                className="movie-image p-d-block p-m-auto p-pb-3"
              />
            )}
          </div>

          <div className="p-field">
            <label htmlFor="imagem">Imagem</label>
            <input
              id="imagem"
              type="file"
              accept="image/*"
              src={movie.imagem}
              onChange={(e) => onInputChange(e, "imagem")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !movie.imagem,
              })}
            />
            {submitted && !movie.imagem && (
              <small className="p-error">Imagem é obrigatorio.</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="titulo">Titulo</label>
            <InputText
              id="titulo"
              autoComplete="off"
              value={movie.titulo}
              onChange={(e) => onInputChange(e, "titulo")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !movie.titulo,
              })}
            />
            {submitted && !movie.titulo && (
              <small className="p-error">Titulo é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="descricao">Descricao</label>
            <InputTextarea
              id="descricao"
              autoComplete="off"
              maxLength={500}
              value={movie.descricao}
              onChange={(e) => onInputChange(e, "descricao")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !movie.descricao,
              })}
            />
            {submitted && !movie.descricao && (
              <small className="p-error">Descricao é obrigatoria.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="duracao">Duracao</label>
            <InputText
              id="duracao"
              type="time"
              value={converter(movie.duracao)}
              onChange={(e) => onInputChange(e, "duracao")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !movie.duracao,
              })}
            />
            {submitted && !movie.duracao && !movie.duracao <= 0 && (
              <small className="p-error">Duração é obrigatoria.</small>
            )}
          </div>
        </form>
      </Dialog>

      <Dialog
        visible={modalDelete}
        style={{ width: "450px" }}
        header="Confirm"
        modal
        footer={modalDeleteFooter}
        onHide={hideModalDelete}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          {movie && (
            <span>
              Você tem certeza que deseja deletar <b>{movie.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};
