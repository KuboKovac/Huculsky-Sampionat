import { EMPTY, Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "./message.service";

export function errorHandler(err: any, messageTimeout: number, msgService: MessageService): Observable<never> {
    if (err instanceof HttpErrorResponse) {
        if (err.status === 0) {
            msgService.message('Server neodpovedá !')
            console.error('Error code: ' + err.status + ' Error: ' + err.message)
            return EMPTY
        }
        else if (err.status < 500) {
            const msg = err.error
            msgService.message(msg, messageTimeout)
            console.error('Error code: ' + err.status + ' Error: ' + err.message)
            return EMPTY
        }
        else if (err.status >= 500) {
            msgService.message('Interná chyba serveru!', messageTimeout)
            console.error('Error code: ' + err.status + ' Error: ' + err.message)
            return EMPTY
        }
    }
    return EMPTY
}