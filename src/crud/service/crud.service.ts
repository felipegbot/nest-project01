import { Injectable } from '@nestjs/common';
import { Cliente, CreateClienteDto, UpdateClienteDto } from '../create-cliente.dto';

@Injectable()
export class CrudService {
    readonly listaCliente: Cliente[] = []
    idGen: number = 0;

    insertCliente(cliente: CreateClienteDto): Cliente | string {
        if (!cliente.cel || !cliente.email || !cliente.nome ){
            return 'Cliente incompleto, nada foi adicionado'
          }
      
          this.idGen = this.idGen + 1
      
          let clienteToBeAdded: Cliente = {...cliente, id: this.idGen} 
          this.listaCliente.push(clienteToBeAdded)
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
