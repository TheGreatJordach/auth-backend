import { Injectable, LoggerService } from "@nestjs/common";
import { Subject } from "rxjs";

@Injectable()
export class LoggingSystemService implements LoggerService {
  private logSubjet = new Subject<{ level: string; message: string }>();

  // Observable that component can subscribe to
  public log$ = this.logSubjet.asObservable();

  log(message: string): void {
    this.logSubjet.next({ level: "log", message });
    // Add server-side logging logic (e.g., send to an external service)
  }

  warn(message: string): void {
    this.logSubjet.next({ level: "warn", message });
    // Add server-side logging logic
  }

  error(message: string): void {
    this.logSubjet.next({ level: "error", message });
    //Add server-side logging logic
  }
}
