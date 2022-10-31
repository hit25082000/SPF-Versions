import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Change } from './models/change.model';
import { Version } from './models/version.model';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}

  GetVersions(): Observable<Version[]> {
    //return this.versions;
    return this.http.get<Version[]>(
      'http://localhost:8080/responseVersion.php'
    );
  }

  GetChanges(): Observable<Change[]> {
    // return this.changes;
    return this.http.get<Change[]>('http://localhost:8080/responseItem.php');
  }
}
