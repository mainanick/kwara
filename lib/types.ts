export interface Client {
  options: {
    version?: string;
  };
  members: ClientResource;
  [k: string]: any;
}

export interface ClientResource {
  client: Client;
}
