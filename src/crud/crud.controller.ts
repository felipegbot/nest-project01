
import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreateClienteDto } from './create-cliente.dto';

class Cliente extends CreateClienteDto {
  id: number;
}

@Controller('crud')
export class CrudController {
  listaCliente: Cliente[] = []
  idGen: number = 0;

  @Post('add')
  createCliente(@Body() createClienteDto: CreateClienteDto): string {
    if (!createClienteDto.cel || !createClienteDto.email || !createClienteDto.nome ){
      return 'Sem cliente no body, nada foi adicionado'
    }

    this.listaCliente.push({...createClienteDto, id: this.idGen})
    this.idGen = this.idGen + 1
    return 'Cliente com id ' + this.idGen + ' adicionado';
  }

  @Get()
  getCliente(): Cliente[] {
    return this.listaCliente;
  }

  @Delete('deleteCliente/:id')
  deleteAll(@Param() param): Cliente {
    let deletedClient: Cliente
    this.listaCliente = this.listaCliente.filter((x) => {
      x.id != param.id
      deletedClient = x
    })
    return deletedClient
  }

  @Get('parimpar/:id')
  getId(@Param() params): boolean{
    return params.id % 2 == 0
  }
}