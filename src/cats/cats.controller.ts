
import { Controller, Delete, Get, Header, HostParam, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { get } from 'http';

@Controller('crud')
export class CatsController {
  lista: number[] = []

  @Post('add/:id')
  create(@Param() params): string {
    this.lista.push(params.id)
    return params.id + ' adicionado!';
  }

  @Get()
  getLista(): number[] {
    return this.lista;
  }

  @Delete('deleteAll/:id')
  deleteAll(@Param() param): string {
    this.lista = this.lista.filter((x) => x != param.id)
    return 'Todas as ocorrências de ' + param.id + ' foram deletadas'
  }

  @Get('parimpar/:id')
  getId(@Param() params): boolean{
    return params.id % 2 == 0
  }
}