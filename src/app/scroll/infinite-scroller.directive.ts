import { Directive, AfterViewInit, ElementRef, Input, Pipe } from '@angular/core';
import { map, filter, pairwise } from 'rxjs/operators';
import { Observable, of, Subject, fromEvent } from 'rxjs';

interface ScrollPosition {
    sH: number;
    sT: number;
    cH: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
    sH: 0,
    sT: 0,
    cH: 0
};

@Directive({
    selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective implements AfterViewInit {

    private scrollEvent$: any;

    private userScrolledDown$: any;

    private requestStream$: any;

    private requestOnScroll$: any;

    @Input()
    scrollCallback: any;

    @Input()
    immediateCallback: any;

    @Input()
    scrollPercent: any = 70;

    constructor(private elm: ElementRef) { }

    ngAfterViewInit() {
        this.registerScrollEvent();
        this.streamScrollEvents();
        this.requestCallbackOnScroll();
    }

    private registerScrollEvent() {
        this.scrollEvent$ = fromEvent(this.elm.nativeElement, 'scroll');
    }

    private streamScrollEvents() {
        console.log('this.scrollEvent$ : ', this.scrollEvent$);
        this.userScrolledDown$ = this.scrollEvent$
            .map((e: any): ScrollPosition => ({
                sH: e.target.scrollHeight,
                sT: e.target.scrollTop,
                cH: e.target.clientHeight
            }))
            .pairwise()
            .filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1]))
    }

    private requestCallbackOnScroll() {
        this.requestOnScroll$ = this.userScrolledDown$;

        if (this.immediateCallback) {
            this.requestOnScroll$ = this.requestOnScroll$
                .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
        }

        this.requestOnScroll$
            .exhaustMap(() => {
                return this.scrollCallback();
            })
            .subscribe((data: any) => { console.log(data) }, (err: any) => console.log(err));

    }

    private isUserScrollingDown = (positions: any) => {
        return positions[0].sT < positions[1].sT;
    }

    private isScrollExpectedPercent = (position: any) => {
        return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
    }

}