import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trash.time',
  appName: 'trashTime',
  webDir: 'dist',
  server: {
    url: 'http://192.168.31.239:8100/',
    hostname: 'http://192.168.31.239:8100/',
    androidScheme: 'https',
    cleartext: true
  }
,
    android: {
      buildOptions: {
          keystorePath: 'd:\mobile\trashTime\trashTime.jks',
          keystoreAlias: 'trashTime',
      }
    }
  };

export default config;
