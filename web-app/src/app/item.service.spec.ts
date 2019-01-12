import { TestBed, getTestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


const jsonFile = [
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

let httpMock: HttpTestingController;


describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });

  it('should get correct json file', () => {
    const service: ItemService = TestBed.get(ItemService);
    console.log("im outside");
    service.getItems().subscribe(data => {
      console.log("got here");
      expect(data).toEqual(jsonFile);
    });
    const req = httpMock.expectOne('assets/data.json');
    expect(req.request.method).toBe("GET");
    req.flush(jsonFile);
  });
});
