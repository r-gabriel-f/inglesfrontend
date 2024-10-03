import { Component, OnInit, ViewChild } from '@angular/core';
import { VerbsService } from '../../services/verbs.service';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
interface Verb {
  espanol: string;
  infinitivo: string;
  past_simple: string;
  participio: string;
}
@Component({
  selector: 'app-verbos',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, CommonModule],
  templateUrl: './verbos.component.html',
  styleUrl: './verbos.component.css',
})
export class VerbosComponent implements OnInit {
  dataverbs: Verb[] = [];
  @ViewChild('dt2') dt2: Table | undefined;
  constructor(private verbsService: VerbsService) {}
  ngOnInit(): void {
    this.verbsService.getAll().subscribe({
      next: (data) => {
        this.dataverbs = data as Verb[];

      },
    });
  }
  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const filterValue = target.value;
      this.dt2?.filterGlobal(filterValue, 'contains');
    }
  }
}
