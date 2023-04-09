import { ICooperative } from 'app/entities/cooperative/cooperative.model';

export interface ILivreur {
  id: number;
  livreurName?: string | null;
  livreurEmail?: string | null;
  livreurPhone?: string | null;
  livreurAddress?: string | null;
  cooperative?: Pick<ICooperative, 'id'> | null;
}

export type NewLivreur = Omit<ILivreur, 'id'> & { id: null };
