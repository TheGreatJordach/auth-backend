import { Controller, Get } from "@nestjs/common";
import { LoggingSystemService } from "./logging-system.service";

@Controller("logs")
export class LoggingSystemController {
  constructor(private readonly loggingSystemService: LoggingSystemService) {}

  @Get()
  getLogs() {
    return this.loggingSystemService.log$;
  }
}
