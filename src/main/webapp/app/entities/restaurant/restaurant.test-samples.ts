import { IRestaurant, NewRestaurant } from './restaurant.model';

export const sampleWithRequiredData: IRestaurant = {
  id: 59197,
  name: 'r',
  restaurantAdresse: 'Manager',
};

export const sampleWithPartialData: IRestaurant = {
  id: 89668,
  name: 'i',
  restaurantAdresse: 'Future-proofed Rustic Directeur',
};

export const sampleWithFullData: IRestaurant = {
  id: 64585,
  name: 'u',
  restaurantAdresse: 'Incredible',
};

export const sampleWithNewData: NewRestaurant = {
  name: 'f',
  restaurantAdresse: 'Champagne-Ardenne withdrawal',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
