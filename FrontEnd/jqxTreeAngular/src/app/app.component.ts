import { HttpClient } from '@angular/common/http';
import { Change } from './components/models/change.model';
import { Version } from './components/models/version.model';
import { Observable, timeInterval } from 'rxjs';
import { VersionService } from './components/version.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxTreeComponent, jqxTreeModule } from 'jqwidgets-ng/jqxtree';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('myTree') myTree: jqxTreeComponent;
  versions: Version[] = [];
  changes: Change[] = [];
  data: Array<any> = [];
  dataAdapter: any;
  source: any;
  records: any;
  width: any;
  i: any;
  j: any;
  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.GetTreeData();
  }

  GetTreeData() {
    this.versionService.GetVersions().subscribe((version) => {
      this.versions = version;
      console.log(this.versions);

      this.versionService.GetChanges().subscribe((changes) => {
        this.changes = changes;
        console.log(this.changes);

        this.RenderTree();
      });
    });
  }

  RenderTree() {
    this.i = 1;
    this.versions.forEach((version) => {
      this.data.push({
        id: (this.i++).toString(),
        parentid: '-1',
        text: version.VERSAO,
        value: '',
      });
      this.j = this.i;
      this.changes.forEach((change) => {
        if (change.ID_CONTROLE_VERSAO == version.ID) {
          this.data.push({
            id: (this.i++).toString(),
            parentid: (this.j - 1).toString(),
            text: change.SEQUENCIAL + ' - ' + this.lineBreak(change.DESCRICAO),
            value: '',
          });
        }
      });
    });

    this.source = {
      datatype: 'json',
      datafields: [
        { name: 'id' },
        { name: 'parentid' },
        { name: 'text' },
        { name: 'value' },
      ],
      id: 'id',
      localdata: this.data,
    };
    // create data adapter & perform Data Binding.
    this.dataAdapter = new jqx.dataAdapter(this.source, { autoBind: true });
    // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents
    // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter
    // specifies the mapping between the 'text' and 'label' fields.
    this.records = this.dataAdapter.getRecordsHierarchy(
      'id',
      'parentid',
      'items',
      [{ name: 'text', map: 'label' }]
    );
  }
  lineBreak(descricao: string): string {
    if (descricao.length > 100) {
      var novaDescricao =
        descricao.substring(0, 100) +
        '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
        descricao.substring(100);
        if(novaDescricao.length >200) {
          novaDescricao.substring(100, 200) +
          '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
          novaDescricao.substring(200);
        }
      return novaDescricao;
    }
    return descricao;
  }
}
