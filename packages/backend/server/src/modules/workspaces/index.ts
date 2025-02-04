import { Module } from '@nestjs/common';

import { DocModule } from '../doc';
import { UsersService } from '../users';
import { WorkspacesController } from './controller';
import { DocHistoryResolver } from './history.resolver';
import { PermissionService } from './permission';
import { PagePermissionResolver, WorkspaceResolver } from './resolver';

@Module({
  imports: [DocModule],
  controllers: [WorkspacesController],
  providers: [
    WorkspaceResolver,
    PermissionService,
    UsersService,
    PagePermissionResolver,
    DocHistoryResolver,
  ],
  exports: [PermissionService],
})
export class WorkspaceModule {}
export { InvitationType, WorkspaceType } from './resolver';
