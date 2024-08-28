import { Test, TestingModule } from "@nestjs/testing";
import { LoggingSystemController } from "./logging-system.controller";

describe("LoggingSystemController", () => {
  let controller: LoggingSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoggingSystemController],
    }).compile();

    controller = module.get<LoggingSystemController>(LoggingSystemController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
