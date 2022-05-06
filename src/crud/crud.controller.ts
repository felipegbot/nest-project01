
import { Body, Controller, Delete, Get, Header, HostParam, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { get } from 'http';
import { CreateClienteDto } from './create-cliente.dto';

interface Cliente extends CreateClienteDto {
  id: number;
}

@Controller('crud')
export class CrudController {
  listaCliente: Cliente[] = []
  idGen: number = 1;

  @Post('add')
  createCliente(@Body() createClienteDto: CreateClienteDto): string {
    this.listaCliente.push({...createClienteDto, id: this.idGen})
    return 'Cliente com id ' + this.idGen + ' adicionado';
  }

  @Get()
  getCliente(): Cliente[] {
    return this.listaCliente;
  }

  @Delete('deleteAll/:id')
  deleteAll(@Param() param): string {
    this.listaCliente = this.listaCliente.filter((x) => x != param.id)
    return 'Todas as ocorrências de ' + param.id + ' foram deletadas'
  }

  @Get('parimpar/:id')
  getId(@Param() params): boolean{
    return params.id % 2 == 0
  }
}