import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeViewComponent } from './home-view.component';
import { Item } from '../item';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  let spy: any;
  let jsonFile = [
    {
        "name": "product1",
        "id": 23,
        "description": "Is very yummy"
    },
    {
        "name": "product2",
        "id": 99,
        "description": "Not so good"
    }
  ];
  let items = [new Item("product1", 23), new Item("product2", 99)];
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct item array', () => {
    expect(component.items).toBeTruthy(items);
  });

  it('should get correct json file from service', () => {
    component.getItems().subscribe(data => {
      console.log("got here");
      expect(data).toEqual(jsonFile);
    });
  });

  
});
