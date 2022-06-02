import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { CrudGuard } from "./crud.guard";


export function Auth(...roles: string[]) {
    return applyDecorators(
    UseGuards(CrudGuard),
    SetMetadata('roles', roles),
    )
}