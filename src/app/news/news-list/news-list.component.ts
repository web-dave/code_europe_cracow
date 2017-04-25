import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news = [
      {
        'author': 'Anthony Ha',
        'title': 'Crunch Report',
        'description': 'Your daily roundup of the biggest TechCrunch stories and startup news.',
        'url': 'https://techcrunch.com/video/crunchreport/',
        'urlToImage': 'https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1',
        'publishedAt': '2017-04-24T17:00:30Z'
      },
      {
        'author': 'Megan Rose Dickey',
        'title': 'Uber gets sued over alleged ‘Hell’ program to track Lyft drivers',
        'description': 'Uber has another lawsuit on its hands. This time, it\'s about Uber\'s alleged use of a program called \'Hell.\' The plaintiff, Michael Gonzales, drove for Lyft..',
        'url': 'https://techcrunch.com/2017/04/24/uber-hell-lawsuit/',
        'urlToImage': 'https://tctechcrunch2011.files.wordpress.com/2017/03/gettyimages-598354318.jpg?w=764&h=400&crop=1',
        'publishedAt': '2017-04-24T21:41:38Z'
      },
      {
        'author': 'Lora Kolodny',
        'title': 'Flush with funding, Instacart accelerates US expansion',
        'description': 'Grocery delivery startup Instacart recently closed a $400 million Series D round of funding at a valuation of $3.4 billion. Now, the company is putting that..',
        'url': 'https://techcrunch.com/2017/04/24/flush-with-funding-instacart-accelerates-us-expansion/',
        'urlToImage': 'https://tctechcrunch2011.files.wordpress.com/2017/04/instacart58277.jpg?w=764&h=400&crop=1',
        'publishedAt': '2017-04-24T20:12:42Z'
      },
      {
        'author': 'Romain Dillet',
        'title': 'Apple cuts App Store affiliate commission from 7% to 2.5%',
        'description': 'Apple just sent an email to members of the App Store affiliate program saying that App Store commissions will be reduced from 7 percent to 2.5 percent on May..',
        'url': 'https://techcrunch.com/2017/04/24/apple-cuts-app-store-affiliate-commission-from-7-to-25/',
        'urlToImage': 'https://tctechcrunch2011.files.wordpress.com/2016/11/app-store-purge-hero.jpg?w=764&h=400&crop=1',
        'publishedAt': '2017-04-24T18:32:37Z'
      },
      {
        'author': 'Josh Constine',
        'title': 'Every feed app should steal Pinterest’s ‘more like this’ button',
        'description': 'This is the best new social app feature in a long time. Twitter should copy it. Instagram should copy it. Facebook probably already is copying it. I\'m talking..',
        'url': 'https://techcrunch.com/2017/04/24/anotherrrr/',
        'urlToImage': 'https://tctechcrunch2011.files.wordpress.com/2017/04/pinterest-button.png?w=680&h=356&crop=1',
        'publishedAt': '2017-04-24T14:01:30Z'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
