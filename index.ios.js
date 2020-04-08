/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, suject, userInfo) => {
  userInfo = userInfo || {};
  call(url, suject, userInfo);
}
JitsiMeetModule.audioCall = (url, suject, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, suject, userInfo);
}
export default JitsiMeetModule;


