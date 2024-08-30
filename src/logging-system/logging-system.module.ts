import { Module } from "@nestjs/common";
import { LoggingSystemService } from "./logging-system.service";
import { LoggingSystemController } from "./logging-system.controller";

@Module({
  providers: [LoggingSystemService],
  controllers: [LoggingSystemController],
  exports: [LoggingSystemService],
})
export class LoggingSystemModule {}
