import { Component , OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FollowingService } from '../../services/following.service';
import { FollowerscardComponent } from '../followerscard/followerscard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-followinglist',
  standalone: true,
  imports: [FooterComponent,FollowerscardComponent,CommonModule],
  templateUrl: './followinglist.component.html',
  styleUrl: './followinglist.component.scss'
})
export class FollowinglistComponent  implements OnInit{

  followingList: any[] = [];

  ngOnInit() {
    const storedList = sessionStorage.getItem('followingList');
    if (storedList) {
      this.followingList = JSON.parse(storedList);
    }
  }

}
