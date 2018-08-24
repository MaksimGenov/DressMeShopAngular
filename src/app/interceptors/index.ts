import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenIterceptor } from "./token.interceptor";


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenIterceptor, multi: true },
]