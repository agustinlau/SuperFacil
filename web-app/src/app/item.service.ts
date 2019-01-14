import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // USED FOR SECOND IMPLEMENTATION
  // items : any;
  // itemArray : Item[] = [];

  constructor(private httpClient : HttpClient) { }

  getItems() : Observable<Object> {
    let sdf = this.httpClient.get('assets/data.json');
    console.log(sdf);
    return sdf;
  }
  

  // another way of doing it *ignore*
  // getItem2() : Observable<Item[]> {
  //   const request = new HttpRequest('GET', 'assets/data.json', {
  //     reportProgress: true
  //   });
  //   return this.httpClient.request(request).pipe(
  //     map(event => {
  //       if (event.type == HttpEventType.Response) {
  //         console.log(event.body);
  //         this.items = event.body;
  //         for (const item of this.items) {
  //           this.itemArray.push(new Item(item['name'], item['id']));
  //         }
  //         return this.itemArray;
  //       }
  //     })
  //   );
  // }
}
