import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContacts } from 'models/myContacts';
import { MyGroup } from 'models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-upate-contact',
  templateUrl: './upate-contact.component.html',
  styleUrls: ['./upate-contact.component.css']
})
export class UpateContactComponent implements OnInit {
  contactId:string=''
  contact:MyContacts={} as MyContacts 
  groups:MyGroup [] =[] as MyGroup []

constructor(private activateRoute:ActivatedRoute,private api:ApiService,private router:Router){}
ngOnInit(): void {
  this.activateRoute.params.subscribe((data)=>{
    console.log(data['contactId']);
    this.contactId=data['contactId']
    
  })
// call api 
this.api.viewContact(this.contactId).subscribe(
  (data:any)=>{
    this.contact=data
    console.log(this.contact);
    
  }
)
// call api for getting all grous from service class
this.api.getAllGroups().subscribe(
  (data:any)=>{
    this.groups=data
    console.log(this.groups);
    
  }
)
}
// update
updateContact(){

  this.api.updateContact(this.contactId,this.contact).subscribe(
    (data:any)=>{
      this.router.navigateByUrl('')
    }
  )
}

}
