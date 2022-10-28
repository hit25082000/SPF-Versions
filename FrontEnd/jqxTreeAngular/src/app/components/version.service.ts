import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}

  GetVersions(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/responseVersion.php');
  }

  GetChanges(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/responseItem.php');
  }
}
