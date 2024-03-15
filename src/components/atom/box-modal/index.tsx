import ReactDom from 'react-dom';

interface ModalPortalType {
  children: React.ReactNode;
}

const BoxModal = ({ children }: ModalPortalType) => {
  const el: HTMLElement | null = document.getElementById('root');
  return ReactDom.createPortal(children, el as HTMLElement);
};

export default BoxModal;
