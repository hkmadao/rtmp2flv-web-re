import { TAudit } from '@/models';

/**客户端信息 */
export type TClientInfo = {
  /**客户端信息主属性 */
  idClientInfo?: string;
  /**编号 */
  clientCode?: string;
  /**注册信息签名密钥 */
  signSecret?: string;
  /**数据传输加密密钥 */
  secret?: string;
  /**备注 */
  note?: string;
} & TAudit;
