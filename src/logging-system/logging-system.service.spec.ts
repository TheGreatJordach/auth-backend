import { Test, TestingModule } from "@nestjs/testing";
import { LoggingSystemService } from "./logging-system.service";

describe("LoggingSystemService", () => {
  let service: LoggingSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingSystemService],
    }).compile();

    service = module.get<LoggingSystemService>(LoggingSystemService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
