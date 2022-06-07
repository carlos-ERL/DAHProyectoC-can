import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from 'src/app/models/quote';
import { DateService } from 'src/app/services/date.service'; 
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
;

@Component({
  selector: 'app-my-veterinarian-quotes',
  templateUrl: './my-veterinarian-quotes.page.html',
  styleUrls: ['./my-veterinarian-quotes.page.scss'],
})
export class MyVeterinarianQuotesPage implements OnInit {
  myQuotes=[];
  veterinarianId; 
  constructor(private quoteService:DateService,private activatedRoute: ActivatedRoute,private alertas:AlertsServiceService,) { }

  ngOnInit() {
    this.getList()
  }
  getList(){
    this.quoteService
    .getQuotes()
    .subscribe(async (data) => {
      data.map((quote) => { 
        this.myQuotes.push( {
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
          responsable:quote.payload.doc.get('responsable')
        }as Quote);
      });
    });
  }
  async goToScanner(){
    const data = await BarcodeScanner.scan();
    this.alertas.presentToast(`Contenido del QR: ${data.text}`)
  }
  cancelQuote(quote){
    this.quoteService.cancelQuote(quote.id)
    .then(res => {
      this.alertas.presentToast('Fecha establecida correctamente')
      this.getList()
    }).catch(error => console.log(error))
  }


}
