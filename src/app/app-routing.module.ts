import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { NewestComponent } from './pages/newest/newest.component';
import { AskComponent } from './pages/ask/ask.component';
import { JobComponent } from './pages/job/job.component';
import { ShowComponent } from './pages/show/show.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'newest',
    component: NewestComponent,
  },
  {
    path: 'ask',
    component: AskComponent,
  },
  {
    path: 'show',
    component: ShowComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
