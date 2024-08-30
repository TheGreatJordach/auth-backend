import { Injectable, LoggerService } from "@nestjs/common";
import { Subject } from "rxjs";

@Injectable()
export class LoggingSystemService implements LoggerService {
  private logSubject = new Subject<{ level: string; message: string }>();

  // Observable that component can subscribe to
  public log$ = this.logSubject.asObservable();

  log(message: string): void {
    this.logSubject.next({ level: "log", message });
    // Add server-side logging logic (e.g., send to an external service)
  }

  warn(message: string): void {
    this.logSubject.next({ level: "warn", message });
    // Add server-side logging logic
  }

  error(message: string): void {
    this.logSubject.next({ level: "error", message });
    //Add server-side logging logic
  }
}
