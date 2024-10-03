import { Injectable } from '@angular/core';
import { ApiService } from '../controller/api.service';
interface Verb {
  id?: string;
  infinitive?: string;
  pastSimple?: string;
  pastParticiple?: string;
}
@Injectable({
  providedIn: 'root'
})
export class VerbsService  extends ApiService<Verb> {
  constructor() {
    super('/verbs');
  }
}
