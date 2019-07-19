import { Component, OnInit } from '@angular/core';
import { Dados2Service } from 'src/app/services/dados2.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.page.html',
  styleUrls: ['./vitrine.page.scss'],
})
export class VitrinePage implements OnInit {

  produtos:any = [];
  public armList: any[];
  public loadedGoalList: any[];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  //   this.firestore.collection(`goals`).valueChanges().subscribe(armList =&gt; {
  //   this.armList = armList;
  //   this.loadedGoalList = armList;
  //   });
  // }
  // initializeItems(): void {
  //   this.armList = this.loadedGoalList;
  //   }

  //   filterList(evt) {
  //     this.initializeItems();
      
  //     const searchTerm = evt.srcElement.value;
      
  //     if (!searchTerm) {
  //     return;
  //     }
      
  //     this.armList = this.armList.filter(currentGoal => {
  //     if (currentGoal.goalName && searchTerm) {
  //     if (currentGoal.goalName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
  //     return true;
  //     }
  //     return false;
  //     }
  //     });
  //     }
  }
}