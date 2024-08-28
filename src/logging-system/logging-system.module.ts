import { Module } from "@nestjs/common";
import { LoggingSystemService } from "./logging-system.service";
import { LoggingSystemController } from "./logging-system.controller";
import { LoggingInterceptor } from "./logging.interceptor";

@Module({
  providers: [LoggingSystemService, LoggingInterceptor],
  controllers: [LoggingSystemController],
})
export class LoggingSystemModule {}
