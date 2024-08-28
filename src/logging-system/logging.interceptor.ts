import { CallHandler, ExecutionContext, Injectable } from "@nestjs/common";
import { LoggingSystemService } from "./logging-system.service";
import { tap } from "rxjs";

@Injectable()
export class LoggingInterceptor {
  // The interceptor will automatically log HTTP requests and responses

  constructor(private readonly logger: LoggingSystemService) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    return next.handle().pipe(
      tap((data) => {
        // Log the request/response details
        this.logger.log(`${method} ${url} - Response: ${JSON.stringify(data)}`);
      })
    );
  }
}
