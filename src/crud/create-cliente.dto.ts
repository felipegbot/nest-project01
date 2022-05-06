export class CreateClienteDto {
    nome: string;
    email: string;
    cel: number;
}

export class Cliente extends CreateClienteDto {
    id: number;
}

export class UpdateClienteDto {
    nome?: string;
    email?: string;
    cel?: number;
}