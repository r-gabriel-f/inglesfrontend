import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { VerbosComponent } from '../verbos/verbos.component';
import { VerbstenseComponent } from "../verbstense/verbstense.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TabViewModule, VerbosComponent, VerbstenseComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
