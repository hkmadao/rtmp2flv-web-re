import { TAudit } from '@/models';

/**摄像头 */
export type TCamera = {
  /**摄像头主属性 */
  id?: string;
  /**编号 */
  code?: string;
  /**rtmp识别码 */
  rtmpAuthCode?: string;
  /**播放权限码 */
  playAuthCode?: string;
  /**在线状态 */
  onlineStatus?: boolean;
  /**启用状态 */
  enabled?: boolean;
  /**保存录像状态 */
  saveVideo?: boolean;
  /**直播状态 */
  live?: boolean;
  /**创建时间 */
  created?: string;
  /**加密标志 */
  fgSecret?: boolean;
  /**密钥 */
  secret?: string;
  /**被动推送rtmp标志 */
  fgPassive?: boolean;
  /**客户端信息 */
  clientInfo?: TClientInfo;
  idClientInfo?: string;
  /**摄像头 */
  cameraShares?: TCameraShare;
  /**摄像头 */
  cameraRecords?: TCameraRecord;
} & TAudit;
/**客户端信息 */
export type TClientInfo = {
  /**注册信息签名密钥 */
  signSecret?: string;
  /**编号 */
  clientCode?: string;
  /**数据传输加密密钥 */
  secret?: string;
  /**备注 */
  note?: string;
  /**客户端信息主属性 */
  idClientInfo?: string;
} & TAudit;
/**摄像头分享 */
export type TCameraShare = {
  /**开始时间 */
  startTime?: string;
  /**摄像头分享主属性 */
  id?: string;
  /**创建时间 */
  created?: string;
  /**权限码 */
  authCode?: string;
  /**结束时间 */
  deadline?: string;
  /**名称 */
  name?: string;
  /**启用状态 */
  enabled?: boolean;
} & TAudit;
/**摄像头记录 */
export type TCameraRecord = {
  /**记录id */
  idCameraRecord?: string;
  /**文件删除标志 */
  fgRemove?: boolean;
  /**结束时间 */
  endTime?: string;
  /**临时文件名称 */
  tempFileName?: string;
  /**临时文件标志 */
  fgTemp?: boolean;
  /**创建时间 */
  created?: string;
  /**文件名称 */
  fileName?: string;
  /**开始时间 */
  startTime?: string;
  /**文件时长 */
  duration?: number;
  /**是否有音频 */
  hasAudio?: boolean;
} & TAudit;
