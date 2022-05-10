import { Component, OnInit, Output, EventEmitter } from '@angular/core'

import { HackerNewsService } from '../services/hackernews.service'
import { InfiniteScrollerDirective } from './infinite-scroller.directive';

@Component({
    selector: 'app-scroll',
    templateUrl: './scroll.component.html',
    styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

    public title = '';
    public currentPage: number = 1;
    public news: Array<any> = [];
    public scrollCallback: any;

    constructor(private hackerNewsSerivce: HackerNewsService) {
        this.title = 'Angular Infinite Scroller with RxJS';
        this.scrollCallback = this.getStories.bind(this);
    }

    ngOnInit() {

    }

    getStories() {
        return this.hackerNewsSerivce.getLatestStories(this.currentPage).subscribe(() => {
            this.processData
        });
    }

    private processData = (news: any) => {
        this.currentPage++;
        this.news = this.news.concat(news.json());
    }

}
