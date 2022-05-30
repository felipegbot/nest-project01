import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class CrudGuard implements CanActivate {
    constructor(private reflector: Reflector){}
    
    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<any>('roles', context.getHandler())
        const userRoles = context.switchToHttp().getRequest().body?.user?.roles
        
        return roles ? this.matchRoles(roles, userRoles) : true
    }

    matchRoles(roles: string[], userRoles: string[]): boolean {
        return userRoles ? userRoles.some(role => roles.includes(role)) : false
    }
}