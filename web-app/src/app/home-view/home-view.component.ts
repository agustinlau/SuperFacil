import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item.service';
import { Item } from '../item';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  items : Item[] = [];
  iter: any;

  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.getItems().subscribe(data => {
      if (data) {
        this.iter = data;
        for (const item of this.iter) {
          this.items.push(new Item(item['name'], item['id']));
        }
        console.log(this.items);

      }
    });
    console.log(this.items);
  }

  getItems() {
    return this.itemService.getItems();
  }
}
