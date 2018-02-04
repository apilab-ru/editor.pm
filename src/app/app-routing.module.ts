import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }        from './main/main.component';
import { EditorComponent }      from './editor/editor.component';
import { CabinetComponent }     from './cabinet/cabinet.component';
import { Error404Component }     from './error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',       component: MainComponent },
  { path: 'editor/:id', component: EditorComponent },
  //{ path: 'view/:id', component: EditorComponent },
  { path: 'cabinet',    component: CabinetComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
