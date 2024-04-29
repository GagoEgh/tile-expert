import { Component } from '@angular/core';
import { IPath } from 'src/app/model/path.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  path: IPath[] = [
    {
      name: 'Ссылки',
      isSvg:true
    },
    {
      name: 'Контакты',
      isSvg:false
    },
    {
      name: 'Теги',
      isSvg:true
    },
    {
      name: 'Просьбы',
      isSvg:true
    },
    {
      name: 'Избранное',
      isSvg:true
    },
    {
      name: 'Посещения',
      isSvg:true
    },
  ]

}


