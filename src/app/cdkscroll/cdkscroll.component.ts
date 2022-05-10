import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdkscroll',
  templateUrl: './cdkscroll.component.html',
  styleUrls: ['./cdkscroll.component.scss']
})
export class CdkscrollComponent implements OnInit {

    colorOptions: string[] = ['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink'];
    initialColor: string = 'black';

  items = [];
    lastItem = 0;

    constructor() { }
    addMoreItems() {
        let y = [];
        y.push(...this.items);
        for (let index = 0; index < 50; index++) {
            y.push(this.lastItem++);
        }
        this.items = y;
    }
    ngOnInit() {
        this.addMoreItems();
    }

    lastRefreshItems = -1;
    itemRendered(item: number) {
        var y = this.items.indexOf(item);
        if (y == this.items.length - 1) {
            if (y == this.lastRefreshItems)
                return;
            this.lastRefreshItems = y;
            console.log('want refresh');
            setTimeout(() => {
                console.log('refresh');
                this.addMoreItems();
            }, 100);
        }
    }

}
