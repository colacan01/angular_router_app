import { Component } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterMapComponent } from './footer-map/footer-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '내비게이션(라우터사용)';
}
