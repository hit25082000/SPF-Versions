import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}

  changes: any[] = [
    {
      ID: '1012',
      ID_CONTROLE_VERSAO: '1004',
      SEQUENCIAL: '9',
      DESCRICAO: 'novo',
    },
    {
      ID: '1011',
      ID_CONTROLE_VERSAO: '1002',
      SEQUENCIAL: '8',
      DESCRICAO: 'Mudado',
    },
    {
      ID: '1007',
      ID_CONTROLE_VERSAO: '1005',
      SEQUENCIAL: '7',
      DESCRICAO: 'desc',
    },
    {
      ID: '1006',
      ID_CONTROLE_VERSAO: '1004',
      SEQUENCIAL: '6',
      DESCRICAO: 'task2title5',
    },
    {
      ID: '1005',
      ID_CONTROLE_VERSAO: '1004',
      SEQUENCIAL: '5',
      DESCRICAO: 'task1title4',
    },
    {
      ID: '1004',
      ID_CONTROLE_VERSAO: '1004',
      SEQUENCIAL: '4',
      DESCRICAO: 'task2title4',
    },
    {
      ID: '1003',
      ID_CONTROLE_VERSAO: '1001',
      SEQUENCIAL: '3',
      DESCRICAO: 'task1title3',
    },
    {
      ID: '1002',
      ID_CONTROLE_VERSAO: '1001',
      SEQUENCIAL: '2',
      DESCRICAO: 'task2title',
    },
    {
      ID: '1001',
      ID_CONTROLE_VERSAO: '1001',
      SEQUENCIAL: '1',
      DESCRICAO: 'task1title',
    },
  ];

  versions: any[] = [
    { ID: '1001', VERSAO: '2022-02-10' },
    { ID: '1002', VERSAO: '2022-02-09' },
    { ID: '1003', VERSAO: '2022-02-06' },
    { ID: '1004', VERSAO: '2022-02-05' },
    { ID: '1005', VERSAO: '2022-02-02' },
  ];

  GetVersions(): any {
    return this.versions;
  }

  GetChanges(): any {
    return this.changes;
    // return this.http.get<any>('http://localhost:8000/responseItem.php');
  }
}
