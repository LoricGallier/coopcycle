import { ICooperative } from 'app/entities/cooperative/cooperative.model';

export interface IRestaurant {
  id: number;
  name?: string | null;
  restaurantAdresse?: string | null;
  cooperative?: Pick<ICooperative, 'id'> | null;
}

export type NewRestaurant = Omit<IRestaurant, 'id'> & { id: null };
