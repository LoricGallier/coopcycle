import { IClient, NewClient } from './client.model';

export const sampleWithRequiredData: IClient = {
  id: 71655,
  clientName: 'hacking',
  clientEmail: "m'MUur@6.x;)Q[",
  clientPhone: '99241',
  clientAddress: 'Bedfordshire',
};

export const sampleWithPartialData: IClient = {
  id: 44801,
  clientName: 'c card',
  clientEmail: "hi@'U.c",
  clientPhone: '741',
  clientAddress: 'PNG seamless initiatives',
};

export const sampleWithFullData: IClient = {
  id: 70359,
  clientName: 'Automotive Shirt Soft',
  clientEmail: '?:<7s@x&.Td$swP',
  clientPhone: '93274',
  clientAddress: 'program',
};

export const sampleWithNewData: NewClient = {
  clientName: 'Bretagne',
  clientEmail: 'r5-z|@x<d.-.6',
  clientPhone: '4',
  clientAddress: 'Cuba e-commerce',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
