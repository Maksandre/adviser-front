import { fromISO, toISO } from './dates';

const forDB = (entity) => {
  const convertedEntity = { ...entity };
  if (entity.dateBegin) convertedEntity.dateBegin = toISO(entity.dateBegin);
  if (entity.dateEnd) convertedEntity.dateEnd = toISO(entity.dateEnd);
  return convertedEntity;
};

const forUI = (entity) => {
  const convertedEntity = { ...entity };
  if (entity.dateBegin) convertedEntity.dateBegin = fromISO(entity.dateBegin);
  if (entity.dateEnd) convertedEntity.dateEnd = fromISO(entity.dateEnd);
  return convertedEntity;
};

export default { forDB, forUI };
