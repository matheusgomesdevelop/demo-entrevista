import Swal from "sweetalert2";

export default function SweetEngeluxAlert(title: string, text: string, willClose: () => void) {
  Swal.fire({
    title: `${title}`,
    // text: `${text}`,
    html: `${text}`,

    customClass: {
      icon: "c_sweet-engelux-alert-icon_success",
      popup: "c_sweet-engelux-alert",
      title: "c_sweet-engelux-alert-title-agradecimento",
      htmlContainer: "c_sweet-engelux-alert-html",
      confirmButton: "c_sweet-engelux-alert-confirm-agradecimento",
      actions: "c_sweet-engelux-alert-actions",
    },
    willClose: () => {
      willClose();
    },
  });
}
