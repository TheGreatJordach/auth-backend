import {
  BadRequestException,
  Module,
  ValidationError,
  ValidationPipe,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggingSystemModule } from "./logging-system/logging-system.module";
import { UsersModule } from "./users/users.module";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { LoggingInterceptor } from "./logging-system/logging.interceptor";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggingSystemModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
        exceptionFactory: (errors: ValidationError[]) => {
          const formattedErrors = errors.map((error: ValidationError) => ({
            field: error.property,
            issues: Object.values(error.constraints),
          }));
          return new BadRequestException({
            message: "validation failed",
            errors: formattedErrors,
          });
        },
      }),
    },
  ],
})
export class AppModule {}
