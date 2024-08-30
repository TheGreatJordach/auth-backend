import { Test, TestingModule } from "@nestjs/testing";
import { LoggingSystemController } from "./logging-system.controller";
import { LoggingSystemService } from "./logging-system.service";

describe("LoggingSystemController", () => {
  let controller: LoggingSystemController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: LoggingSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoggingSystemController],
      providers: [LoggingSystemService], // Provide the LoggingSystemService here
    }).compile();

    controller = module.get<LoggingSystemController>(LoggingSystemController);
    service = module.get<LoggingSystemService>(LoggingSystemService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
