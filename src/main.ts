import { enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*import { MainComponent } from './app/main/main.module';
import { EditorComponent } from './app/editor/editor.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }
]*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
