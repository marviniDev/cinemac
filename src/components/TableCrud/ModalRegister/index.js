import { Dialog } from "primereact/dialog";

function ModelRegister({
  modalRegister,
  hideDialog,
  productDialogFooter,
  data,
  childrem,
}) {
  return (
    <Dialog
      visible={modalRegister}
      style={{ minWidth: "100%", minHeight: "100%" }}
      header="Product Details"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    >
      {childrem}
    </Dialog>
  );
}

export default ModelRegister;
