import { ILivreur, NewLivreur } from './livreur.model';

export const sampleWithRequiredData: ILivreur = {
  id: 71552,
  livreurName: 'Rubber',
  livreurEmail: 'H@2{n.f',
  livreurPhone: '9399',
  livreurAddress: 'Berkshire Small',
};

export const sampleWithPartialData: ILivreur = {
  id: 22071,
  livreurName: 'Account Soft',
  livreurEmail: 'Z(-~-2@x.";',
  livreurPhone: '148454',
  livreurAddress: 'c Cotton',
};

export const sampleWithFullData: ILivreur = {
  id: 32966,
  livreurName: 'Borders',
  livreurEmail: '/R{.RO@%4Ab.9|p',
  livreurPhone: '099128',
  livreurAddress: 'Fully-configurable Cotton',
};

export const sampleWithNewData: NewLivreur = {
  livreurName: 'streamline e-markets',
  livreurEmail: "m@mHJYs'.w(R]Q",
  livreurPhone: '93384',
  livreurAddress: 'Electronics scalable la',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
