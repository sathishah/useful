import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChartsComponent } from './charts/charts.component';
import { UserIdleComponent } from './user-idle/user-idle.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { CdkscrollComponent } from './cdkscroll/cdkscroll.component';
import { ScrollComponent } from './scroll/scroll.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SelectComponent } from './select/select.component';
import { InfiniteComponent } from './infinite/infinite.component'
import { CircleProgressComponent } from './circle-progress/circle-progress.component';

const routes: Routes = [
  { path: '', redirectTo: '/cdk', pathMatch: 'full' },
  { path: 'cdk', component: CdkscrollComponent },
  { path: 'scroll', component: ScrollComponent },
  { path: 'form', component: ReactiveComponent },
  { path: 'search', component: SearchFilterComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'select', component: SelectComponent },
  { path: 'infinite', component: InfiniteComponent },
  { path: 'upload', component: ImageCropComponent },
  { path: 'timeout', component: UserIdleComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'progress', component: CircleProgressComponent },
  { path: 'auto', component: AutocompleteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ScrollComponent
];