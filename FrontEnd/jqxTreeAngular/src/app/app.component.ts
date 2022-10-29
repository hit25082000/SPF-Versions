import { VersionService } from './components/version.service';
import { Component, OnInit } from '@angular/core';
import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  versions: any;
  changes: any;
  data: Array<any> = []
  dataAdapter: any;
  source: any;
  records: any;
  i: any;
  j: any;
  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.GetTreeData();
    this.RenderTree();
  }

  GetTreeData(): void {
    this.versions = this.versionService.GetVersions();
    this.changes = this.versionService.GetChanges();
  }

  RenderTree(){
    this.i=1
    this.versions.forEach((version: { ID: any; VERSAO: any; }) => {
      this.data.push({
        id: (this.i++).toString(),
        parentid: '-1',
        text: version.VERSAO,
        value: ''
      },)
      this.j = this.i
      this.changes.forEach((change: { ID_CONTROLE_VERSAO: any; ID: any; DESCRICAO: any; SEQUENCIAL: any; })  => {
        if(change.ID_CONTROLE_VERSAO == version.ID)
        {
          this.data.push( {
            id: (this.i++).toString(),
            parentid: (this.j -1).toString(),
            text: change.DESCRICAO,
            value: ""
        },)
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

    console.log(this.data)
  }
  tree: any[] = [
    {
      text: 'Chocolate Beverage',
      id: '1',
      parentid: '-1',
      value: '$2.3',
    },
    {
      id: '2',
      parentid: '1',
      text: 'Hot Chocolate',
      value: '$2.3',
    },
    {
      id: '3',
      parentid: '1',
      text: 'Peppermint Hot Chocolate',
      value: '$2.3',
    },
    {
      id: '4',
      parentid: '1',
      text: 'Salted Caramel Hot Chocolate',
      value: '$2.3',
    },
    {
      id: '5',
      parentid: '1',
      text: 'White Hot Chocolate',
      value: '$2.3',
    },
    {
      id: '6',
      text: 'Espresso Beverage',
      parentid: '-1',
      value: '$2.3',
    },
    {
      id: '7',
      parentid: '6',
      text: 'Caffe Americano',
      value: '$2.3',
    },
    {
      id: '8',
      text: 'Caffe Latte',
      parentid: '6',
      value: '$2.3',
    },
    {
      id: '9',
      text: 'Caffe Mocha',
      parentid: '6',
      value: '$2.3',
    },
    {
      id: '10',
      text: 'Cappuccino',
      parentid: '6',
      value: '$2.3',
    },
    {
      id: '11',
      text: 'Pumpkin Spice Latte',
      parentid: '6',
      value: '$2.3',
    },
    {
      id: '12',
      text: 'Frappuccino',
      parentid: '-1',
    },
    {
      id: '13',
      text: 'Caffe Vanilla Frappuccino',
      parentid: '12',
      value: '$2.3',
    },
    {
      id: '15',
      text: '450 calories',
      parentid: '13',
      value: '$2.3',
    },
    {
      id: '16',
      text: '16g fat',
      parentid: '13',
      value: '$2.3',
    },
    {
      id: '17',
      text: '13g protein',
      parentid: '13',
      value: '$2.3',
    },
    {
      id: '14',
      text: 'Caffe Vanilla Frappuccino Light',
      parentid: '12',
      value: '$2.3',
    },
  ];
}
