import { Component ,OnInit} from '@angular/core';
import { MyContacts } from 'models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent  implements OnInit {

  allContacts:MyContacts[]=[]
  searchKey:string=''
  constructor(private api: ApiService) { 
  
  }
  ngOnInit(): void {
this.api.getAllContacts().subscribe(
  (data:any)=>{
  console.log(data);
  this.allContacts= data
  
})
  }
// search

search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value
}


}
