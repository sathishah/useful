import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { AppRoutingModule } from './app-routing.module';
import { CdkscrollComponent } from './cdkscroll/cdkscroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteComponent } from './infinite/infinite.component';
import { ScrollableDirective } from './scrollable.directive';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchPipe } from './search.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SelectComponent } from './select/select.component';
import { InfiniteScrollerDirective } from './scroll/infinite-scroller.directive';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { UserIdleComponent } from './user-idle/user-idle.component';

import { Ng2TelInputModule } from 'ng2-tel-input';
import { CountryPickerModule } from 'ngx-country-picker';
import { ChartsComponent } from './charts/charts.component';

import { HighchartsChartModule } from 'highcharts-angular';

import * as highcharts from 'highcharts';
import { TooltipComponent } from './charts/tooltip/tooltip.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { CounterModule } from 'angular-circle-counter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ScrollingModule, AppRoutingModule, InfiniteScrollModule, HttpClientModule, ReactiveFormsModule, ImageCropperModule, Ng2TelInputModule, CountryPickerModule.forRoot(), HighchartsChartModule, NgSelectModule, CounterModule, NgScrollbarModule, NgxSkeletonLoaderModule],
  declarations: [AppComponent, ScrollComponent, CdkscrollComponent, InfiniteComponent, ScrollableDirective, SearchFilterComponent, SearchPipe, ReactiveComponent, ParentComponent, ChildComponent, SelectComponent, InfiniteScrollerDirective, ImageCropComponent, UserIdleComponent, ChartsComponent, TooltipComponent, CircleProgressComponent, AutocompleteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
