export const getEventTitle = (event: any) => {
  return (
    event.data.evenement?.value ??
    (event.data as { titre?: string }).titre ??
    ""
  );
};

export const getEventType = (event: any) => {
  return (
    event.data.evenement?.discriminant ??
    (event.data as { type?: string }).type ??
    ""
  );
};

export const formatDayMonth = (date: Date) =>
  date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
  });
