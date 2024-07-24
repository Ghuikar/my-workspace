import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class KommunicateWidgetService {

  private scriptLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // loadScript() {
  //   if (isPlatformBrowser(this.platformId) && !this.scriptLoaded) {
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.async = true;
  //     script.src = 'https://widget.kommunicate.io/v2/kommunicate.app';

  //     script.onload = () => {
  //       window['kommunicate'] = window['kommunicate'] || {};
  //       window['kommunicate']._globals = {
  //         appId: '264986f8659e100c89e5f32f91be1194e',
  //         popupWidget: true,
  //         automaticChatOpenOnNavigation: true
  //       };
  //       this.scriptLoaded = true;
  //     };

  //     document.head.appendChild(script);
  //   }
  // }

  loadScript() {
    if (isPlatformBrowser(this.platformId) && !this.scriptLoaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.kommunicate.io/v2/kommunicate.app';

      script.onload = () => {
        // Safe access to window.kommunicate
        (window as any)['kommunicate'] = (window as any)['kommunicate'] || {};
        (window as any)['kommunicate']._globals = {
          appId: '264',
          popupWidget: true,
          automaticChatOpenOnNavigation: true
        };
        this.scriptLoaded = true;
      };

      document.head.appendChild(script);
    }
  }

}
