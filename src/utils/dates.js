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

export const toMonthAndYear = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  if (dt.isValid) return dt.toFormat('MMM yyyy');
  return null;
};

export const getMonth = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  if (dt.isValid) return dt.month;
  return '';
};

export const getYear = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  if (dt.isValid) return dt.year;
  return '';
};

export const isValid = (dateString) => {
  const date = DateTime.fromISO(dateString);
  if (!date.isValid) return false;
  if (dateString.split('-')[0].length < 4) return false;
  return true;
};

export const today = () => {
  return DateTime.now().toISO();
};
