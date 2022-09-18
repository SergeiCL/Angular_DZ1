import {Component, OnInit} from '@angular/core';

@Component({

    selector: 'app-about_me',
    templateUrl: './about_me.component.html',
    styleUrls: ['./about_me.component.scss']

})

export class About_meComponent implements OnInit{

title: string = 'My card title'
name: string = 'My name is Sergei'
hobby: string = 'I love to study the IT-industry'
live: string = 'I live in KOLODISCHI'
text: string = 'I want to learn Angular'
age = 33

getInfo() {
    return "This is my info"
}

imgUrl: string = 'https://avatars.githubusercontent.com/u/98906426?s=400&u=fdf7a008f18844313218a89764cb6f49253dca68&v=4'

ngOnInit() {
    setTimeout(() => {
       this.imgUrl = 'https://sun9-28.userapi.com/impf/2bm3yKuGHSgOR1dnl3gk3nu4Aq79j-oASVmkxA/ZDG4pmdCkGQ.jpg?size=647x1080&quality=96&sign=b17174c7c839c546b9a2d6ff0bac47b5&type=album'
    }, 5000 )
}
}

