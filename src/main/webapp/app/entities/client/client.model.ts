export interface IClient {
  id: number;
  clientName?: string | null;
  clientEmail?: string | null;
  clientPhone?: string | null;
  clientAddress?: string | null;
}

export type NewClient = Omit<IClient, 'id'> & { id: null };
