import { IRestaurant } from 'app/entities/restaurant/restaurant.model';
import { IOrder } from 'app/entities/order/order.model';

export interface IPlat {
  id: number;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  restaurant?: Pick<IRestaurant, 'id'> | null;
  orders?: Pick<IOrder, 'id'>[] | null;
}

export type NewPlat = Omit<IPlat, 'id'> & { id: null };
