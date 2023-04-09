import { IClient } from 'app/entities/client/client.model';

export interface ICooperative {
  id: number;
  name?: string | null;
  client?: Pick<IClient, 'id'> | null;
}

export type NewCooperative = Omit<ICooperative, 'id'> & { id: null };
