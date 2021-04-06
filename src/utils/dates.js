import { DateTime } from 'luxon';

export const fromISO = (stringISO) => {
  const dt = DateTime.fromISO(stringISO);
  if (dt.isValid) return dt.toISODate();
  return null;
};

export const toISO = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  if (dt.isValid) return dt.toISO();
  return null;
};

export const getMonth = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  if (dt.isValid) return dt.month;
};

export const getYear = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  if (dt.isValid) return dt.year;
};
