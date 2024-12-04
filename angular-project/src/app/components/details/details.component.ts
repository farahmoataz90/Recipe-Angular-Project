import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,ReviewComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  reviews = [
    {
      imageSrc: 'assets/images/avatar1.jpg',
      name : 'Shankar Subbaraman',
      date: '30 December 2022',
      comments: 'Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .'
    },
    {
      imageSrc: 'assets/images/avatar2.jpg',
      name : 'Robert Thomas',
      date: '29 December 2022',
      comments: 'Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .'
    },
    {
      imageSrc: 'assets/images/avatar3.jpg',
      name : 'Barbara Tay',
      date: '28 December 2022',
      comments: 'Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.'
    },
    {
      imageSrc: 'assets/images/avatar4.jpg',
      name : 'Sandra Langevin',
      date: '8 December 2022',
      comments: 'Great product & package. Delivery can be expedited.'
    }

  ];


  image!: string;
  title!: string;
  rating!: string;
  time!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.image = params['image'];
      this.title = params['title'];
      this.rating = params['rating'];
      this.time = params['time'];
    });

}}
