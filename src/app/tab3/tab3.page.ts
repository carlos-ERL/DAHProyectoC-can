import { Component, ViewChild } from '@angular/core';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;
  constructor(private alertas:AlertsServiceService) {}
}
