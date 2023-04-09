import { IPlat, NewPlat } from './plat.model';

export const sampleWithRequiredData: IPlat = {
  id: 26319,
  name: 'architectures Metal frame',
  price: 10980,
  quantity: 42260,
};

export const sampleWithPartialData: IPlat = {
  id: 4000,
  name: 'override Garden Bedfordshire',
  price: 38293,
  quantity: 65722,
};

export const sampleWithFullData: IPlat = {
  id: 90005,
  name: 'Sharable Ball',
  price: 69096,
  quantity: 14308,
};

export const sampleWithNewData: NewPlat = {
  name: 'Advanced e-commerce',
  price: 77634,
  quantity: 47073,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
