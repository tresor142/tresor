import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgURL: string
  constructor(
    private camera: Camera
  ) {}

  getCamera(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType:this.camera.DestinationType.DATA_URL,
      mediaType:this.camera.MediaType.PICTURE,
    }).then((res) => {this.imgURL = res;
    }).catch(e=>{
      console.log(e);
    })
  }
  getGalerie(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e=>{
      console.log(e)
    })
  }
}
