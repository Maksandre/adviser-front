import { fromISO, getMonth, toISO } from './dates';

describe('From ISO to ISO-date formating', () => {
  it('works just fine, if incoming string is correct ISO', () => {
    expect(fromISO('2021-04-02T09:17:41+00:00')).toBe('2021-04-02');
  });

  it('works just fine, if incoming string is the first day of month', () => {
    expect(fromISO('2021-01-01T00:00:00+00:00')).toBe('2021-01-01');
  });

  it('works just fine, if incoming string is the last day of month', () => {
    expect(fromISO('2021-12-31T00:00:00+00:00')).toBe('2021-12-31');
  });

  it('returns null if ISO is null', () => {
    expect(fromISO(null)).toBe(null);
  });

  it('returns null if ISO is undefined', () => {
    expect(fromISO(undefined)).toBe(null);
  });

  it('returns null if ISO is empty string', () => {
    expect(fromISO('')).toBe(null);
  });

  it('returns null if ISO is not correct ISO', () => {
    expect(fromISO('2021-04-02 09:17:41+00:00')).toBe(null);
  });
});

describe('To ISO-string formating', () => {
  it('works just fine, if date format is valid', () => {
    expect(toISO('2021-03-01')).toContain('2021-03-01T');
  });

  it('works just fine with year and month only', () => {
    expect(toISO('2021-03')).toContain('2021-03-01T');
  });

  it('returns null, if date format is not valid', () => {
    expect(toISO('2021-3')).toBe(null);
  });
});

describe('getMonth function', () => {
  it('returns month if date string is correct', () => {
    expect(getMonth('2021-03')).toBe(3);
  });
});
