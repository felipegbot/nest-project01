
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Cliente, CreateClienteDto, UpdateClienteDto } from './create-cliente.dto';



@Controller('crud')
export class CrudController {
  listaCliente: Cliente[] = []
  idGen: number = 0;

  @Post('add')
  createCliente(@Body() createClienteDto: CreateClienteDto): Cliente | string {
    if (!createClienteDto.cel || !createClienteDto.email || !createClienteDto.nome ){
      return 'Cliente incompleto, nada foi adicionado'
    }

    this.idGen = this.idGen + 1

    let clienteToBeAdded: Cliente = {...createClienteDto, id: this.idGen} 
    this.listaCliente.push(clienteToBeAdded)

    return clienteToBeAdded;
  }

  @Get()
  getCliente(): Cliente[] {
    return this.listaCliente;
  }

  @Put(':id')
  updateCliente(@Param() param, @Body() updateClienteDto: UpdateClienteDto): Cliente {
    let updatedCliente: Cliente = this.listaCliente.find((x) => x.id == parseInt(param.id))
    let pos = this.listaCliente.findIndex((x) => x == updatedCliente)

    this.listaCliente[pos] = {...updatedCliente,...updateClienteDto}
    return this.listaCliente[pos]
  }

  @Delete(':id')
  deleteAll(@Param() param): Cliente {    
    let deletedCliente: Cliente = this.listaCliente.find((x) => x.id == parseInt(param.id))
    this.listaCliente = this.listaCliente.filter((x) => x.id != parseInt(param.id))

    return deletedCliente
  }

  @Get('parimpar/:id')
  getId(@Param() params): boolean{
    return params.id % 2 == 0
  }
}