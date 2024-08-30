import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggingSystemModule } from "./logging-system/logging-system.module";

@Module({
  imports: [LoggingSystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
