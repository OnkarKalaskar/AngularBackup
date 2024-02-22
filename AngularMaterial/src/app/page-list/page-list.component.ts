import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../login/UserObj';
import { Users } from '../login/UserList';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  users : User[] = []
  dataSource : any;
  displayedColumns : string[] = ["id","email","password","age","city","role"]
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  p: number = 1;

  constructor()
  {
    
  }

  ngOnInit(): void {
      this.getList();
      
  }

  getList()
  {
    
    this.dataSource = new MatTableDataSource<User>(Users);
    this.dataSource.paginator = this.paginator;
    
  }
}
