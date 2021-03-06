
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors, UsePipes} from '@nestjs/common';
import { Cliente, CreateClienteDto, UpdateClienteDto } from '../create-cliente.dto';
import { CrudInterceptor } from '../extra/crud.interceptor';
import { GetOneClientePipe } from '../extra/crud.pipe';
import { Auth } from '../extra/roles.decorator';
import { CrudService } from '../service/crud.service';

@Controller('crud')
@UseInterceptors(CrudInterceptor)
export class CrudController {
  
  constructor(private crudService: CrudService) {}
  
  @Get(':id')
  getOneCliente(@Param('id', GetOneClientePipe) cliente: Cliente): Cliente{
    return cliente
  }
  
  @Auth('admin')
  @Post('add')
  createCliente(@Body() createClienteDto: CreateClienteDto): Cliente {
    return this.crudService.insertCliente(createClienteDto);
  }

  @Get()
  getCliente(): Cliente[] {
    return this.crudService.listaCliente;
  }

  @Put(':id')
  updateCliente(@Param('id', ParseIntPipe) param, @Body() updateClienteDto: UpdateClienteDto): Cliente {
    return this.crudService.updateCliente(parseInt(param.id), updateClienteDto)
  }

  @Delete(':id')
  deleteAll(@Param('id', ParseIntPipe) param): Cliente {    
    return this.crudService.deleteCliente(parseInt(param.id))
  }

  @Get('parimpar/:id')
  getId(@Param('id', ParseIntPipe) params): boolean{
    return params.id % 2 == 0
  }
}