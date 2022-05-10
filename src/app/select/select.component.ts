import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    public obj: any = {};
    public language_list: any[] = [];
    public active: boolean = false;

    selectedCar: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

    constructor() { }


    ngOnInit(): void {
        this.obj = {
            language_selected: { 'name': 'Choose a language' }
        };
        this.language_list = [
            {
                'name': 'english',
                'url': 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png'
            },
            {
                'name': 'italian',
                'url': 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/it.png'
            }
        ];

    }

    updateSelectBox(language: any) {
        this.obj.language_selected = language;
        console.log('This Obj : ', this.obj);
    }

}
