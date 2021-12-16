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
  let emptySession = {
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

  const [sessions, setSessions] = useState(null);
  const [movies, setMovies] = useState([]);
  const [rooms, setRooms] = useState(null);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [session, setSession] = useState(emptySession);
  const [selectedSessions, setSelectedSessions] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const optionsTipoAudio = [
    { name: "Dublado", code: "dub" },
    { name: "Original", code: "org" },
  ];
  const optionsAnimacao = [
    { name: "2D", code: "2D" },
    { name: "3D", code: "3D" },
  ];

  useEffect(() => {
    Api.get(Api.defaults.baseURL + url).then((response) => {
      response?.data && setSessions(response.data);
    });
  }, [submitted, url]);

  useEffect(() => {
    const listMovies = async () => {
      let resMovies = await Api.get(Api.defaults.baseURL + "listaFilmes");
      setMovies(resMovies.data);
    };
    const listRooms = async () => {
      let resrooms = await Api.get(Api.defaults.baseURL + "salas");
      setRooms(resrooms.data);
    };
    listMovies();
    listRooms();
  }, []);

  const newSession = () => {
    setSession(emptySession);
    setSubmitted(false);
    setModalRegister(true);
  };

  const hideModalRegister = () => {
    setSubmitted(false);
    setModalRegister(false);
  };

  const hideModalDelete = () => {
    setModalDelete(false);
  };

  const saveSession = async () => {
    setSubmitted(true);

    if (
      session.data.trim() &&
      session.tipoAudio != null &&
      session.horaInicio.trim() &&
      session.horaFim.trim() &&
      session.filmeId != null &&
      session.salaId != null &&
      session.animacao != null &&
      session.valorIngresso !== 0
    ) {
      let _session = { ...session };
      if (session.id) {
        let res = await Api.post(Api.defaults.baseURL + "salvaSessao", {
          animacao: _session.animacao?.code ?? _session.animacao,
          data: _session.data,
          filmeId: _session.filmeId?.code ?? _session.filmeId,
          horaFim: _session.horaFim,
          horaInicio: _session.horaInicio,
          id: _session.id,
          salaId: _session.salaId?.code ?? _session.salaId,
          tipoAudio: _session.tipoAudio?.code ?? _session.tipoAudio,
          valorIngresso: _session.valorIngresso,
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
        let res = await Api.post(Api.defaults.baseURL + "salvaSessao", {
          animacao: _session.animacao?.code ?? _session.animacao,
          data: _session.data,
          filmeId: _session.filmeId?.code ?? _session.filmeId,
          horaFim: _session.horaFim,
          horaInicio: _session.horaInicio,
          id: _session.id,
          salaId: _session.salaId?.code ?? _session.salaId,
          tipoAudio: _session.tipoAudio?.code ?? _session.tipoAudio,
          valorIngresso: _session.valorIngresso,
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
            detail: res.data.message ?? "Falha ao cadastrar!",
            life: 3000,
          });
        }
      }

      setSubmitted(false);
      setModalRegister(false);
      setSession(emptySession);
    }
  };

  const editSession = (session) => {
    setSession({ ...session });
    setModalRegister(true);
  };

  const confirmDeleteSession = (session) => {
    setSession(session);
    setModalDelete(true);
  };

  const deleteSession = async () => {
    let res = await Api.delete(
      Api.defaults.baseURL + `deletaSessao/${session.id}`
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
    setSession(emptySession);
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
    let _session = { ...session };

    if (name === "data") {
      _session[`${name}`] = dateToday(val);
    } else {
      _session[`${name}`] = val;
    }

    setSession(_session);
  };

  const onChangeFilm = (e) => {
    const { code } = e.target.value;
    const result = movies.find((Element) => Element.id === code);

    if (result) {
      let _session = { ...session };
      const duracaoFilme = result.duracao;

      _session.horaInicio ?? setSubmitted(true);

      _session["horaFim"] = converteToHours(
        converteToMinuts(_session.horaInicio) + duracaoFilme
      );
      _session["filmeId"] = e.target.value;

      setSession(_session);
    }
  };

  const onChangeHoraInicio = (e) => {
    if (session.filmeId && session.filmeId != null) {
      const code = session.filmeId?.code ?? session.filmeId;

      const result = movies.find((Element) => Element.id === code);
      const duracaoFilme = result.duracao;
      let _session = { ...session };

      const minutos = converteToMinuts(e.target.value);

      _session["horaFim"] = converteToHours(minutos + duracaoFilme);
      _session["horaInicio"] = converteToHours(minutos);

      setSession(_session);
    }
  };

  const RightToolbarTemplate = () => {
    return (
      <>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success p-mr-2"
          onClick={newSession}
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
          onClick={() => editSession(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteSession(rowData)}
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

  function checkObject(obj) {
    return typeof obj === "object" && obj !== null;
  }

  const findByOptionsTipoAudio = (code) => {
    return optionsTipoAudio.find((Element) => Element.code === code);
  };

  const findByOptionsAnimacao = (code) => {
    return optionsAnimacao.find((Element) => Element.code === code);
  };

  const findByOptionsMovies = (id) => {
    let filterMovie = movies?.find((Element) => Element.id === id);
    let newData = {};

    newData.name = filterMovie && filterMovie.titulo;
    newData.code = filterMovie && filterMovie.id;

    return newData;
  };

  const findByOptionsRooms = (id) => {
    let filterRoom = rooms?.find((Element) => Element.id === id);
    let newData = {};

    newData.name = filterRoom && filterRoom.nome;
    newData.code = filterRoom && filterRoom.id;

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
  const modalRegisterFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideModalRegister}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveSession}
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
        onClick={deleteSession}
      />
    </>
  );

  const dataBodyTemplate = (rowData) => {
    let newDate = [];
    newDate = rowData.data.split("-");

    let yyyy = newDate[0];
    let mm = newDate[1];
    let dd = newDate[2];

    return (
      <span
        style={{
          fontWeight: "bold",
          padding: ".5em",
          borderRadius: "5%",
        }}
      >
        {dd + "/" + mm + "/" + yyyy}
      </span>
    );
  };

  const horaInicioBodyTemplate = (rowData) => {
    return (
      <span
        style={{
          fontWeight: "bold",
          background: "#00c369",
          padding: ".5em",
          borderRadius: "5%",
          color: "#fff",
        }}
      >
        {rowData.horaInicio}
      </span>
    );
  };

  const horaFimBodyTemplate = (rowData) => {
    return (
      <span
        style={{
          fontWeight: "bold",
          background: "#f50b4c",
          padding: ".5em",
          borderRadius: "5%",
          color: "#fff",
        }}
      >
        {rowData.horaFim}
      </span>
    );
  };

  const tipoAudioBodyTemplate = (rowData) => {
    return (
      <span
        style={{
          fontWeight: "bold",
          padding: ".5em",
          borderRadius: "5%",
        }}
      >
        {rowData.tipoAudio}
      </span>
    );
  };

  const animacaoBodyTemplate = (rowData) => {
    return (
      <span
        style={{
          fontWeight: "bold",

          padding: ".5em",
          borderRadius: "5%",
        }}
      >
        {rowData.animacao}
      </span>
    );
  };

  const valorIngressoBodyTemplate = (rowData) => {
    var valorFormatado = rowData.valorIngresso.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <span
        style={{
          fontWeight: "bold",
          background: "#f77f00",
          padding: ".5em",
          borderRadius: "5%",
          color: "#fff",
        }}
      >
        {valorFormatado}
      </span>
    );
  };

  const filmeBodyTemplate = (rowData) => {
    const id = rowData.filmeId;
    const result = movies.find((Element) => Element.id === id);

    return (
      <span
        style={{
          fontWeight: "bold",
          padding: ".5em",
          borderRadius: "5%",
        }}
      >
        {result && result.titulo}
      </span>
    );
  };

  const dateToday = (valueDate) => {
    let newDate = [];
    newDate = valueDate.split("-");

    const date = new Date();
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const today = yyyy + "-" + mm + "-" + dd;

    if (newDate[2] < dd) {
      return today;
    } else if (newDate[1] < mm) {
      return today;
    } else if (newDate[0] < yyyy) {
      return today;
    } else {
      return valueDate;
    }
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
          value={sessions}
          selection={selectedSessions}
          onSelectionChange={(e) => setSelectedSessions(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} sessions"
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
            field="data"
            body={dataBodyTemplate}
            header="Data"
            sortable
          ></Column>
          <Column
            field="salaId"
            body={filmeBodyTemplate}
            header="Filme"
            sortable
          ></Column>
          <Column
            field="horaInicio"
            body={horaInicioBodyTemplate}
            header="Hora Inicial"
            sortable
          ></Column>
          <Column
            field="horaFim"
            body={horaFimBodyTemplate}
            header="Hora final"
            sortable
          ></Column>
          <Column
            field="tipoAudio"
            body={tipoAudioBodyTemplate}
            header="Áudio"
            sortable
          ></Column>
          <Column
            field="animacao"
            body={animacaoBodyTemplate}
            header="Animação"
            sortable
          ></Column>
          <Column
            field="valorIngresso"
            body={valorIngressoBodyTemplate}
            header="Ingresso(R$)"
            sortable
          ></Column>
          <Column body={actionBodyTemplate} exportable={false}></Column>
        </DataTable>
      </div>

      <Dialog
        visible={modalRegister}
        style={{ minWidth: "fit-content", minHeight: "fit-content" }}
        header="Detalhes Sessão"
        modal
        className="p-fluid"
        footer={modalRegisterFooter}
        onHide={hideModalRegister}
      >
        <form encType="multipart/form-data">
          <div className="p-field">
            <label htmlFor="data">Data</label>
            <InputText
              id="data"
              type="date"
              value={session.data}
              onChange={(e) => onInputChange(e, "data")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !session.data,
              })}
            />
            {submitted && !session.data && (
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
              value={
                checkObject(session.tipoAudio)
                  ? session.tipoAudio
                  : findByOptionsTipoAudio(session.tipoAudio)
              }
              options={optionsTipoAudio}
              onChange={(e) => onInputChange(e, "tipoAudio")}
              optionLabel="name"
              placeholder="Selecione um Áudio"
            />
            {submitted && !session.tipoAudio && (
              <small className="p-error">Audio é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="horaInicio">Hora de inicio</label>
            <InputText
              id="horaInicio"
              type="time"
              value={session.horaInicio}
              onChange={(e) => {
                onInputChange(e, "horaInicio");
                onChangeHoraInicio(e);
              }}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !session.horaInicio,
              })}
            />
            {submitted && !session.horaInicio && (
              <small className="p-error">hora de inicio é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="horaFim">Hora de termino</label>
            <InputText
              id="horaFim"
              type="time"
              disabled
              value={session.horaFim}
              onChange={(e) => onInputChange(e, "horaFim")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !session.horaFim,
              })}
            />
            {submitted && !session.horaFim && (
              <small className="p-error">hora de termino é obrigatorio.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="filmeId">Filme</label>
            <Dropdown
              id="filmeId"
              value={
                checkObject(session.filmeId)
                  ? session.filmeId
                  : findByOptionsMovies(session.filmeId)
              }
              required
              autoFocus
              options={generateOptionsFilms(movies)}
              className={classNames({
                "p-invalid": submitted && !session.filmeId,
              })}
              onChange={(e) => {
                onInputChange(e, "filmeId");
                onChangeFilm(e);
              }}
              optionLabel="name"
              placeholder="Selecione um Filme"
            />
            {submitted && !session.filmeId && (
              <small className="p-error">Filme é obrigatorio.</small>
            )}
          </div>

          <div className="p-field">
            <label htmlFor="salaId">Sala</label>
            <Dropdown
              id="salaId"
              value={
                checkObject(session.salaId)
                  ? session.salaId
                  : findByOptionsRooms(session.salaId)
              }
              onChange={(e) => onInputChange(e, "salaId")}
              required
              autoFocus
              options={generateOptionsRooms(rooms)}
              className={classNames({
                "p-invalid": submitted && !session.salaId,
              })}
              optionLabel="name"
              placeholder="Selecione uma Sala"
            />
            {submitted && !session.salaId && (
              <small className="p-error">Sala é obrigatoria.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="animacao">Animação</label>
            <Dropdown
              id="animacao"
              value={
                checkObject(session.animacao)
                  ? session.animacao
                  : findByOptionsAnimacao(session.animacao)
              }
              required
              autoFocus
              options={optionsAnimacao}
              className={classNames({
                "p-invalid": submitted && !session.animacao,
              })}
              onChange={(e) => onInputChange(e, "animacao")}
              optionLabel="name"
              placeholder="Selecione uma Animação"
            />
            {submitted && !session.animacao && (
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
              value={session.valorIngresso}
              onChange={(e) => onInputChange(e, "valorIngresso")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !session.valorIngresso,
              })}
            />
            {submitted && !session.valorIngresso && (
              <small className="p-error">
                Valor do ingresso é obrigatoria.
              </small>
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
          {session && (
            <span>
              Você tem certeza que deseja deletar <b>{session.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};
