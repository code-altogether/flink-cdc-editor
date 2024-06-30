import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EditorOptions, NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

const code = `# @see https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/zh/docs/get-started/introduction/
source:
  type: mysql
  hostname: localhost
  port: 3306
  username: root
  password: 123456
  tables: app_db.\\.*
  server-id: 5400-5404
  server-time-zone: UTC

sink:
  type: doris
  fenodes: 127.0.0.1:8030
  username: root
  password: ""
  table.create.properties.light_schema_change: true
  table.create.properties.replication_num: 1

pipeline:
  name: Sync MySQL Database to Doris
  parallelism: 2
`;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NzCodeEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  readonly editorOptions: EditorOptions = {
    language: 'yaml'
  };

  code = code;
}
