export interface ICreateClientDTO {
  cnpj: string;
  fantasy_name: string;
  corporate_name: string;
  zip_code: string;
  address: string;
  number: string;
  complement: string;
  neighbourhood: string;
  city: string;
  state: string;
}
export interface IUpdateClientDTO {
  id: string;
  cnpj?: string;
  fantasy_name?: string;
  corporate_name?: string;
  zip_code?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighbourhood?: string;
  city?: string;
  state?: string;
}
