import { ObjectSchema } from "joi";
export class CreateClienteDto implements Partial<ObjectSchema>{
    nome: string;
    email: string;
    cel: number;
    and: any
}

export class Cliente extends CreateClienteDto {
    id: number;
}

export class UpdateClienteDto {
    nome?: string;
    email?: string;
    cel?: number;
}