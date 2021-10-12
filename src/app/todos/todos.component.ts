import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
   

  todos:any[]=[] ;

  addItem(item:string){
     this.todos.push({id:this.todos.length,value:item,edit:false,editValue:''})
     console.log(this.todos)
  }
  removeItem(id:number){
    this.todos = this.todos.filter(item=>item.id!==id)
  }

  editItem(id:number){
    this.todos.forEach(item => {
      if(item.id===id){
        item.edit=true
      }
    })
     
  }

  saveItem(id:number){
    this.todos.forEach(item => {
      if(item.id===id){
        item.edit=false
      
      }
    })
  }

}
