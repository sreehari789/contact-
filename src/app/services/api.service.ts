import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyContacts } from 'models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 baseUrl:string = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }
  // api call for get allcontacts
  getAllContacts():Observable<MyContacts>{
return  this.http.get(this.baseUrl)
  }
  // view a particular
  viewContact(contactId:string){
  return this.http.get( `${this.baseUrl}/${contactId}`)

  }

  // get particular group
  getGroupName(groupId:string){
return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  // function for fetch all groups from 'http://localhost:3000/groups/'
getAllGroups(){
 return this.http.get('http://localhost:3000/groups')

}
// function for adding new contact to server
addContact(contactBody:any){
return  this.http.post(this.baseUrl,contactBody)

}
// function for deleting a contact

deleteContact(contactId:any){
 return  this.http.delete(`${this.baseUrl}/${contactId}`)
}
// update contact 

updateContact(contactId:any,contactBody:any){
 return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}

}
