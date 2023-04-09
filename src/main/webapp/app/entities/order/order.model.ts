import dayjs from 'dayjs/esm';
import { IPlat } from 'app/entities/plat/plat.model';
import { IClient } from 'app/entities/client/client.model';
import { IRestaurant } from 'app/entities/restaurant/restaurant.model';
import { ILivreur } from 'app/entities/livreur/livreur.model';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';

export interface IOrder {
  id: number;
  orderDate?: dayjs.Dayjs | null;
  orderStatus?: OrderStatus | null;
  price?: number | null;
  plats?: Pick<IPlat, 'id'>[] | null;
  client?: Pick<IClient, 'id'> | null;
  restaurant?: Pick<IRestaurant, 'id'> | null;
  livreur?: Pick<ILivreur, 'id'> | null;
}

export type NewOrder = Omit<IOrder, 'id'> & { id: null };
