import { ICooperative, NewCooperative } from './cooperative.model';

export const sampleWithRequiredData: ICooperative = {
  id: 84816,
  name: 'incentivize program Presbourg',
};

export const sampleWithPartialData: ICooperative = {
  id: 80783,
  name: 'Tasty compressing program',
};

export const sampleWithFullData: ICooperative = {
  id: 35566,
  name: 'Montorgueil',
};

export const sampleWithNewData: NewCooperative = {
  name: 'Rubber olive Chicken',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
