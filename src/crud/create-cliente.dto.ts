import { IsString, IsInt } from 'class-validator'

export class CreateClienteDto {
    @IsString()
    nome: string;
    @IsString()
    email: string;
    @IsInt()
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