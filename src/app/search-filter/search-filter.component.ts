import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

    public searchText: string;
    public customerData: any;
    public pvalue: any = "";
    public timer: any = "";

    numbers: Array<any> = [1,2,3,4,5,6,7,8,9,10];

    @ViewChild('myContainer') myContainer: ElementRef;

    constructor(private elRef: ElementRef) { }

    ngOnInit() {
        this.customerData = [
            { "name": 'Anil kumar', "Age": 34, "blog": 'https://code-view.com' },
            { "name": 'Sunil Kumar Singh', "Age": 28, "blog": 'https://code-sample.xyz' },
            { "name": 'Sushil Singh', "Age": 24, "blog": 'https://code-sample.com' },
            { "name": 'Aradhya Singh', "Age": 5, "blog": 'https://code-sample.com' },
            { "name": 'Reena Singh', "Age": 28, "blog": 'https://code-sample.com' },
            { "name": 'Alok Singh', "Age": 35, "blog": 'https://code-sample.com' },
            { "name": 'Dilip Singh', "Age": 34, "blog": 'https://code-sample.com' }];
        
        console.log('Calling NG Init');
    }

    ngAfterViewChecked() {
        this.getDataItem();
    }

    getDataItem() {
        var carouselElem: HTMLElement = this.elRef.nativeElement;
        var messageId = carouselElem.getElementsByClassName('test');
        //console.log('Message Id : ', messageId);
        [].forEach.call(messageId, function (el: HTMLElement) {
            //console.log('Element : ', el);
            //console.log("Current Name : ", el.getAttribute('data-name'));
        });
        //console.log("Current Name : ", messageId);
    }

    showHiddenVal(evt: any) {
        console.log('Changed Value : ', evt.target.value);
    }

    currentValue(evt: any) {
        //console.log('Changed Value : ', evt.target.value);
        console.log('This PValue : ', this.pvalue);
        var code = evt.which;
        if (code >= 32 && code <= 127) {
            var character = String.fromCharCode(code);
            //$(".hidpassw").val($(".hidpassw").val() + character);
            this.pvalue = this.pvalue + '' + character;
        }
    }


    myValue(evt: any) {
        console.log('Last Value : ', this.pvalue);
    }

    createstars(n: any) {
        return new Array(n+1).join("*")
    }


    changeMe(evt: any) {
        //console.log('Changed Value : ', evt.target.value);
        var code = evt.which;
        let currentVal = evt.target.value;
        if (code == 8) {
            var length = evt.target.value.length;
            this.pvalue = this.pvalue.substring(0, length);
        } else if (code == 32) {
            console.log('Spaced ');
            var length = evt.target.value.length;
            evt.target.value = evt.target.value.substring(0, length-1);
            this.pvalue = this.pvalue.substring(0, length-1);
        } else {
            var current_val = evt.target.value.length;
            evt.target.value = this.createstars(current_val - 1) + evt.target.value.substring(current_val - 1);
        }

        
        clearTimeout(this.timer);
        var self = this;
        this.timer = setTimeout(function() {
            evt.target.value = self.createstars(evt.target.value.length);
        }, 200);
    }

}
