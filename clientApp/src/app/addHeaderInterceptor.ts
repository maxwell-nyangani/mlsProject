import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Md5 } from "ts-md5/dist/md5";

export class AddHeaderInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Clone the request to add the new header
        const clonedRequest = req.clone({
            headers: req.headers.set(
                "Authorization",
                "Basic " + btoa("maxwell:maxwell1234")
                //"Basic " + Md5.hashStr("maxwell:maxwell1234")
            )
        });
        console.log("interceptor invoked  " + btoa("maxwell:maxwell1234"));
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}
