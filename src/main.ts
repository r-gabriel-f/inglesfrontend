import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { VerbTenseTableComponent } from './app/app.component';

bootstrapApplication(VerbTenseTableComponent, appConfig)
  .catch((err) => console.error(err));
