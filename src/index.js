import { datadogRum } from '/node_modules/@datadog/browser-rum';

console.log(datadogRum);

datadogRum.init({
    applicationId: '5794a062-2dc3-4911-9ce9-948fe9deb7cb',
    clientToken: 'pub227c7d1ed40e56f6e705f5c0e9c7eb97',
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
