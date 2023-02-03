import { Observable, of } from "rxjs";

export class HttpClientMock {
    public lastUrl = ''
    public lastOptions = null;
    public lastHtpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCh';

    public response: { [key: string]: any };

    public get(url: string, options?: { [key: string]: any }): Observable<any> {
        this.lastUrl = url;
        this.lastOptions = options;
        this.lastHtpMethod = 'GET';

        return of(this.response);
    }
}