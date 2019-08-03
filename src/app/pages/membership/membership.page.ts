import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {

  private memberships:any=[];
  private pageNumber:number=0;

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
        //load first page on view load
        this.loadData(null);

  }


  /* This event will be fired initially on page load, and then for the subsequent requests of ininite page scrolling by the user*/
  loadData(event){
    
    //initiate data for next page
     this.pageNumber+=1;

    //request Data Service Provider for data pull
     this.dataSvc.getMemberships(this.pageNumber).subscribe((response) => {

      var res:any=response;
        /* Append data to the subscribed memberships data list array so that UI will be
        updated with exiting and new membership dataset */
        this.memberships  = this.memberships.concat(res.results);
        
        //console.log(this.memberships);

        //once the data is loaded, notify infinite scroll component that the event is complete
        if(event)
        event.target.complete();
 
   });
 

  }
}
