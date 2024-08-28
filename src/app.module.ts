import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggingSystemModule } from "./logging-system/logging-system.module";
import { LoggingSystemService } from "./logging-system/logging-system.service";

@Module({
  imports: [LoggingSystemModule],
  controllers: [AppController],
  providers: [AppService, LoggingSystemService],
})
export class AppModule {}
