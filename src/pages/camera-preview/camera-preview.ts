import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";
import {Toast} from "@ionic-native/toast";

@Component({
  selector: 'page-camera-preview',
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage implements AfterViewInit {

  @ViewChild('cameraPreviewContainer') container: ElementRef;

  private previewOpts: CameraPreviewOptions;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private platform: Platform
    , private cameraPreview: CameraPreview
    , private base64ToGallery: Base64ToGallery
    , private toast: Toast
  ) {}

  takePicture() {
    this.cameraPreview.takePicture({
      width: this.previewOpts.width,
      height: this.previewOpts.height,
      quality: 100
    })
      .then(pic => this.base64ToGallery.base64ToGallery(pic))
      .then(() => {
        let sub = this.toast.showShortBottom('Picture taken and saved to gallery').subscribe(() => sub.unsubscribe());
      })
      .catch(e => console.log(e));
  }

  ngAfterViewInit() {
    this.platform.ready()
      .then(() => {
        // not really needed, but just in case

        const el: HTMLElement = this.container.nativeElement;

        const options: CameraPreviewOptions = this.previewOpts = {
          y: el.getBoundingClientRect().top,
          width: el.offsetWidth,
          height: el.offsetHeight
        };

        this.cameraPreview.startCamera(options)
          .then(() => {
            console.log('Camera preview started!');
          })
          .catch(e => {
            console.log('Error starting camera preview', e);
          });

      });
  }

  ngOnDestroy() {
    this.cameraPreview.stopCamera().catch(() => {});
  }

}
