import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { VerbsTenseModel, verbsTense } from '../../data/VerbsTense';

@Component({
  selector: 'app-verbstense',
  templateUrl: './verbstense.component.html',
  standalone: true,
  imports: [TreeTableModule, CommonModule]
})
export class VerbstenseComponent implements OnInit {
  files: TreeNode[] = [];


  ngOnInit() {
    this.files = this.createTreeNodes(verbsTense);
  }

  createTreeNodes(verbs: VerbsTenseModel[]): TreeNode[] {
    return verbs.map(verb => ({
      data: { title: verb.title, ingles: verb.ingles, espanol: verb.espanol },
      children: verb.tense.map(tense => ({
        data: { verb: tense.verb, ingles: tense.ingles, espanol: tense.espanol }
      }))
    }));
  }
}
