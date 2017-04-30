import FieldFormat from './field-format';
export const CardOptions = {
  PRODUCCION_DIA: { title: 'Producción del día', color: 'green', format: FieldFormat.soles },
  VENTA_DIA: { title: 'Ventas del día', color: 'pink', format: FieldFormat.soles },
  PAX_DIA: { title: 'Pax del día', color: 'blue-grey', format: FieldFormat.unidades },
  TICKET_PROMEDIO_DIA: { title: 'Ticket promedio del día', color: 'purple', format: FieldFormat.soles }
};
