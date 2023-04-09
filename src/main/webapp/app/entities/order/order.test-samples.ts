import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 47761,
  orderDate: dayjs('2023-04-09T06:38'),
  orderStatus: OrderStatus['EN_LIVRAISON'],
  price: 52696,
};

export const sampleWithPartialData: IOrder = {
  id: 69128,
  orderDate: dayjs('2023-04-09T06:44'),
  orderStatus: OrderStatus['PRETE'],
  price: 56605,
};

export const sampleWithFullData: IOrder = {
  id: 84971,
  orderDate: dayjs('2023-04-09T12:17'),
  orderStatus: OrderStatus['EN_LIVRAISON'],
  price: 93694,
};

export const sampleWithNewData: NewOrder = {
  orderDate: dayjs('2023-04-09T00:09'),
  orderStatus: OrderStatus['PREPARATION'],
  price: 82425,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
