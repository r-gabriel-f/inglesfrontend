import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { Pronoun, pronouns } from '../../data/Pronouns';

@Component({
  selector: 'app-pronouns',
  standalone: true,
  imports: [TreeTableModule, CommonModule],
  templateUrl: './pronouns.component.html',
})
export class PronounsComponent implements OnInit {
  files: TreeNode[] = [];

  ngOnInit() {
    this.files = this.createTreeNodes(pronouns);
  }

  createTreeNodes(verbs: Pronoun[]): TreeNode[] {
    return verbs.map(verb => ({
      data: { title: verb.title, ingles: verb.ingles, espanol: verb.espanol },
      children: verb.pronoun.map(tense => ({
        data: {
          word: tense.word,
          meaning: tense.meaning,
          example: tense.example
        }
      }))
    }));
  }
}
