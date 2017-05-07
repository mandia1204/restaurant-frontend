export default class AnulacionesFormatter {
  format(data) {
    data.forEach(d => {
      if (!d.observacion) {
        d.observacion = '<vacio>';
      }
      switch (d.tipo) {
      case 'cambio':
        d.icon = 'compare_arrows';
        d.color = 'green';
        break;
      case 'derrame':
        d.icon = 'local_bar';
        d.color = 'light-blue';
        break;
      case 'digitación':
        d.icon = 'keyboard';
        d.color = 'black';
        break;
      case 'falta producción':
        d.icon = 'error';
        d.color = 'red';
        break;
      default:
        d.icon = 'warning';
        d.color = 'amber';
      }
    });
    return data;
  }
}
