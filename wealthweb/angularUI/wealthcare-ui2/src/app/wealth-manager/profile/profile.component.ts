import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() customerDetails;


  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  public editProfile(){
    this.modalService.create({ component: EditProfileComponent, inputs: { user: this.customerDetails } });

  }
}
