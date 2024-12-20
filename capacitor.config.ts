import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miammiam.miammiam',
  appName: 'MiamMiam',
  webDir: 'www',
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
    },
  },
  server: {
    iosScheme: 'ionic',
    cleartext: true,
    allowNavigation: [
      'developers.google.com',
      'apis.google.com',
      '*.firebaseio.com',
      '*.googleapis.com',
      'firebaseio.com',
      'googleapis.com',
    ],
  },
  plugins: {
    Http: {
      enabled: true,
      allowNavigation: [
        'firebaseio.com',
        '*.firebaseio.com',
        'googleapis.com',
        '*.googleapis.com',
      ],
    },
  },
};

export default config;
