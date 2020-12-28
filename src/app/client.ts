export interface Client {
  id: number;
  clientName: string;
  clientCode: string;
  category: string;
}

export interface ClientResolved {
  client: Client;
  error?: any;
}
