import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ConvertStringToNumber implements PipeTransform<string, number> {

    transform(value: any, meta: ArgumentMetadata) {
        const id = parseInt(value, 10)

        if (isNaN(id)) {
          throw new BadRequestException('Id inválido');
        }

        return id
    }
}