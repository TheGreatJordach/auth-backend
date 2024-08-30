import { Module } from "@nestjs/common";
import { LoggingSystemService } from "./logging-system.service";
import { LoggingSystemController } from "./logging-system.controller";
import { LoggingInterceptor } from "./logging.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  providers: [
    LoggingSystemService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  controllers: [LoggingSystemController],
  exports: [LoggingSystemService],
})
export class LoggingSystemModule {}
