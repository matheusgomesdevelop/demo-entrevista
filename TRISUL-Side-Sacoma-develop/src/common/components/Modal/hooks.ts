import { createContext, useContext } from "react";

interface ModalContextValues {
  close: () => void;
}
const modalContext = createContext<ModalContextValues>({
  close: () => {}
});

export const useModalContext = () => {
  return modalContext;
}

export const useModal = () => {
  const modalContext = useModalContext();
  const context = useContext(modalContext);

  return context;
}