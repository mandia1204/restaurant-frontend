const Dialog = () => {
  const time = 4000;
  const _show = (message) => {
    Materialize.toast(message, time);
  };

  return {
    show: _show
  };
};

export default Dialog;
