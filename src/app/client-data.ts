import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Client } from './client';

export class ClientData implements InMemoryDbService {
  createDb(): { clients: Client[] } {
    const clients: Client[] = [
      {
        id: 1,
        clientName: 'CHASE',
        clientCode: 'CHASE-001',
        category: 'BANK',
      },
      {
        id: 2,
        clientName: 'BOA',
        clientCode: 'BOA-001',
        category: 'BANK',
      },
      {
        id: 3,
        clientName: 'DCU',
        clientCode: 'DCU-001',
        category: 'CREDIT-UNION',
      },
      {
        id: 4,
        clientName: 'PENFED',
        clientCode: 'PENFED-007',
        category: 'CREDIT-UNION',
      },
    ];
    return { clients };
  }
}
