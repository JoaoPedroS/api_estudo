import { applyDecorators } from "@nestjs/common/decorators/core/apply-decorators";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { ApiTags } from '@nestjs/swagger';

export function AppointmentApiTag(routeName: string): ClassDecorator {
    return applyDecorators(
      Controller(),
      ApiTags(routeName),
    );
}