import {
    AfterViewInit,
    Component,
    OnInit,
    ViewChild,
    ViewChildren,
    ElementRef,
    QueryList,
    HostListener
} from '@angular/core';

@Component({
    selector: 'app-infinite',
    templateUrl: './infinite.component.html',
    styleUrls: ['./infinite.component.scss']
})
export class InfiniteComponent implements OnInit {

    @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
    @ViewChildren('item') itemElements: QueryList<any>;

    public itemContainer: any;
    public scrollContainer: any;
    public items: any = [];
    public isNearBottom = true;
    public counter: number = 0;

    constructor() { }

    ngOnInit() {
        this.items.push({ 1: "test" });
        this.items.push({ 2: "test" });
        this.counter = 2;
        console.log('Current Items : ', this.items);
    }

    ngAfterViewInit() {
        this.scrollContainer = this.scrollFrame.nativeElement;
    }

    private isUserNearBottom(): boolean {
        const threshold = 150;
        const position =
            this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
        const height = this.scrollContainer.scrollHeight;
        return position > height - threshold;
    }

    scrolled(event: any): void {
        var self = this;
        this.isNearBottom = this.isUserNearBottom();
        const currentValue =
            event.target.offsetHeight + event.target.scrollTop >=
            event.target.scrollHeight;
        if (currentValue && this.counter++ < 50) {
            this.items.push({
                [self.counter]: 'Test'
            });
        }
    }

}
