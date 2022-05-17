import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: Partial<ObjectSchema>){}
    
    transform(value: any, metadata: ArgumentMetadata) {
        const error = this.schema.validate(value)
        if(error) {
            throw new BadRequestException('Validação falhou, não foi recebido o modelo de dado esperado')
        }
        return value
    }
}