export default function (id: string) {
  const dialogDOM = document.getElementById(id) as HTMLDialogElement;
  dialogDOM.showModal();
}
