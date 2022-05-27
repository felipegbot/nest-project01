import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { Cliente } from "../create-cliente.dto";
import { CrudService } from "../service/crud.service";

@Injectable()
export class GetOneClientePipe implements PipeTransform<string, Cliente> {
  constructor(private crudService: CrudService){}

    transform(value: any, meta: ArgumentMetadata) {      
      const id = parseInt(value, 10)

      if (isNaN(id)) {
        throw new BadRequestException('Id inválido');
      }

      const cliente: Cliente = this.crudService.listaCliente.find(
          cliente => cliente.id == id
        ) 
      
      if(!cliente){
          throw new BadRequestException('Id não encontrado');
      }

      return cliente
    }
}