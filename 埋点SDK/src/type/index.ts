/*
 * @Author: QqqIAs 1982421402@qq.com
 * @Date: 2023-04-24 22:54:20
 * @LastEditors: QqqIAs 1982421402@qq.com
 * @LastEditTime: 2023-04-24 23:00:40
 * @FilePath: \埋点\埋点SDK\src\type\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @requestUrl 接口地址
 * @historyTracker history上报
 * @hashTracker hash上报
 * @domTracker 携带Tracker-key 点击事件上报
 * @sdkVersionsdk版本
 * @extra透传字段
 * @jsError js 和 promise 报错异常上报
 */
export interface DefaultOptons {
  uuid: string | undefined;
  requestUrl: string | undefined;
  historyTracker: boolean;
  hashTracker: boolean;
  domTracker: boolean;
  sdkVersion: string | number;
  extra: Record<string, any> | undefined;
  jsError: boolean;
}

//必传参数 requestUrl
export interface Options extends Partial<DefaultOptons> {
  requestUrl: string;
}

//版本
export enum TrackerConfig {
  version = "1.0.0",
}
//上报必传参数
export type reportTrackerData = {
  [key: string]: any;
  event: string;
  targetKey: string;
};
