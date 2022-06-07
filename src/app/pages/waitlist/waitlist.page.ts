import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Quote } from 'src/app/models/quote';
import { DateService } from 'src/app/services/date.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.page.html',
  styleUrls: ['./waitlist.page.scss'],
})
export class WaitlistPage implements OnInit {
  quotes=[];
  dateFormated
  constructor(private dateServices:DateService,private activatedRoute: ActivatedRoute,private router:Router) { 

    this.dateServices.getQuotesInWaitList().subscribe( data=>{
       data.map(quote=>{
          this.quotes.push( {
            id:quote.payload.doc.id,
            description:quote.payload.doc.get('description'),
            creationDateQuote: quote.payload.doc.get('creationDateQuote'),
            status:quote.payload.doc.get('status'),
            petName:quote.payload.doc.get('petName'),
            photo:quote.payload.doc.get('photo'),
            color:quote.payload.doc.get('color'),
            weight:quote.payload.doc.get('weight'),
            race:quote.payload.doc.get('race'),
            particularSign:quote.payload.doc.get('particularSign'),
            size:quote.payload.doc.get('size'),
            userID :quote.payload.doc.get('userID'), 
            responsable:quote.payload.doc.get('responsable'),
            dateQuote : quote.payload.doc.get('dateQuote')
          }as Quote);

     })
         
   });
  }


  ngOnInit() {

  }

  async toDateSchedule(quote){

    const userString = await Storage.get({key: 'user_data'});
    const parseUser = JSON.parse(userString.value) 
    console.log(quote.id,parseUser.id);
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify({veterianrianId:parseUser.id,quoteId:quote.id}),
      },
    };
    this.dateServices.asignResponsable(quote.id,parseUser.id).then(res =>{
      this.router.navigate(['/date-schedule'], extras); 
    }).catch(error=>console.log(error))
  }

}
