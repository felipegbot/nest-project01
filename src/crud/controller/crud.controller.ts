
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Cliente, CreateClienteDto, UpdateClienteDto } from '../create-cliente.dto';
import { CrudService } from '../service/crud.service';



@Controller('crud')
export class CrudController {

  constructor(private crudService: CrudService) {}

  @Post('add')
  createCliente(@Body() createClienteDto: CreateClienteDto): Cliente | string {
    return this.crudService.insertCliente(createClienteDto);
  }

  @Get()
  getCliente(): Cliente[] {
    return this.crudService.listaCliente;
  }

  @Put(':id')
  updateCliente(@Param() param, @Body() updateClienteDto: UpdateClienteDto): Cliente {
    return this.crudService.updateCliente(parseInt(param.id), updateClienteDto)
  }

  @Delete(':id')
  deleteAll(@Param() param): Cliente {    
    return this.crudService.deleteCliente(parseInt(param.id))
  }

  @Get('parimpar/:id')
  getId(@Param() params): boolean{
    return params.id % 2 == 0
  }
}