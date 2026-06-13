export interface ComparisonMetric {
  key: string;
  label: string;
  description: string;
  type: "score" | "badge" | "text";
  sortable: boolean;
}

export const comparisonMetrics: ComparisonMetric[] = [
  {
    key: "overallScore",
    label: "General",
    description: "Valoración global de la compañía",
    type: "score",
    sortable: true,
  },
  {
    key: "foodScore",
    label: "Gastronomía",
    description: "Calidad de la comida y restaurantes a bordo",
    type: "score",
    sortable: true,
  },
  {
    key: "serviceScore",
    label: "Servicio",
    description: "Atención y amabilidad del personal",
    type: "score",
    sortable: true,
  },
  {
    key: "shipScore",
    label: "Barco",
    description: "Calidad de las instalaciones y camarotes",
    type: "score",
    sortable: true,
  },
  {
    key: "entertainmentScore",
    label: "Entretenimiento",
    description: "Actividades y espectáculos a bordo",
    type: "score",
    sortable: true,
  },
  {
    key: "tranquilityScore",
    label: "Tranquilidad",
    description: "Ambiente sereno, ideal para el descanso",
    type: "score",
    sortable: true,
  },
  {
    key: "valueScore",
    label: "Calidad-precio",
    description: "Relación entre el precio y la calidad ofrecida",
    type: "score",
    sortable: true,
  },
  {
    key: "category",
    label: "Categoría",
    description: "Segmento de mercado: lujo, premium o estándar",
    type: "badge",
    sortable: true,
  },
  {
    key: "atmosphere",
    label: "Ambiente",
    description: "Tipo de ambiente predominante a bordo",
    type: "badge",
    sortable: false,
  },
  {
    key: "averagePassengerAge",
    label: "Perfil de edad",
    description: "Rango de edad predominante de los pasajeros",
    type: "text",
    sortable: false,
  },
];
