import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  public selectedTabIndex = 0;
  public createAdvertisementSubject = new Subject<null>();

  constructor() { }

  public get advertisementCreatedObservable(): Observable<null> {
    return this.createAdvertisementSubject;
  }

  ngOnInit(): void {
    this.createAdvertisementSubject.subscribe({
      next: () => this.selectedTabIndex = 0
    });
  }

  public onSelectedTabIndexChange(newIndex: number): void {
    this.selectedTabIndex = newIndex;
  }
}
