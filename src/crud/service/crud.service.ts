import { BadRequestException, Injectable } from '@nestjs/common';
import { Cliente, CreateClienteDto, UpdateClienteDto } from '../create-cliente.dto';

@Injectable()
export class CrudService {
    readonly listaCliente: Cliente[] = []
    idGen: number = 0;

    getOneCliente(id: number): Cliente {
        const cliente: Cliente = this.listaCliente.find((cliente) => cliente.id == id) 
        if(!cliente){
            throw new BadRequestException('Id não encontrado');
        }
        return cliente
    }

    insertCliente(cliente: CreateClienteDto): Cliente {
          this.idGen = this.idGen + 1
      
          let clienteToBeAdded: Cliente = {...cliente, id: this.idGen} 
          this.listaCliente.push(clienteToBeAdded)

          return clienteToBeAdded
    }

    updateCliente(id: number, updateClienteDto: UpdateClienteDto): Cliente {
        let updatedCliente: Cliente = this.listaCliente.find((cliente) => cliente.id == id)
        let pos = this.listaCliente.findIndex((cliente) => cliente == updatedCliente)
    
        this.listaCliente[pos] = {...updatedCliente,...updateClienteDto}
        return this.listaCliente[pos]
    }

    deleteCliente(id: number): Cliente {
        let pos: number = this.listaCliente.findIndex((cliente) => cliente.id === id)
        return this.listaCliente.splice(pos, 1)[0]
    }
}
