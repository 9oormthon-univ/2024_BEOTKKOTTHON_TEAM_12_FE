import ReactDom from 'react-dom';

interface ModalPortalType {
  children: React.ReactNode;
}

const BoxModal = ({ children }: ModalPortalType) => {
  return ReactDom.createPortal(<>{children}</>, document.getElementById('root') as HTMLElement);
};

export default BoxModal;
