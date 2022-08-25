import * as http from 'http';
import { datadogRum } from '/node_modules/@datadog/browser-rum';

console.log(datadogRum);

datadogRum.init({
    applicationId: '',
    clientToken: '',
    site: 'datadoghq.com',
    service:'myapplication',
    
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
