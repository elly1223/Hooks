export const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof callback !== 'function') {
    return;
  }
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
