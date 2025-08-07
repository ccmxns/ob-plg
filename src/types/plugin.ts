/**
 * 插件相关类型定义
 * 
 * 这个文件通常包含：
 * 1. 插件配置类型
 * 2. 插件状态类型
 * 3. 插件事件类型
 * 4. 插件API类型
 * 5. 插件扩展点类型
 * 6. 插件生命周期类型
 * 
 * 常见类型定义：
 * 
 * // 插件配置
 * export interface PluginConfig {
 *   id: string;
 *   name: string;
 *   version: string;
 *   description: string;
 *   author: string;
 *   enabled: boolean;
 *   settings: Record<string, any>;
 * }
 * 
 * // 插件状态
 * export type PluginStatus = 'inactive' | 'loading' | 'active' | 'error' | 'disabled';
 * 
 * export interface PluginState {
 *   status: PluginStatus;
 *   error?: Error;
 *   loadTime?: number;
 *   lastUpdate?: number;
 * }
 * 
 * // 插件事件
 * export interface PluginEvent {
 *   type: string;
 *   plugin: string;
 *   timestamp: number;
 *   data?: any;
 * }
 * 
 * export type PluginEventHandler<T = any> = (event: PluginEvent & { data: T }) => void;
 * 
 * // 插件API
 * export interface PluginAPI {
 *   version: string;
 *   methods: Record<string, Function>;
 *   events: Record<string, PluginEventHandler>;
 * }
 * 
 * // 扩展点
 * export interface ExtensionPoint {
 *   id: string;
 *   type: 'command' | 'view' | 'editor' | 'ribbon' | 'statusbar';
 *   config: Record<string, any>;
 * }
 */

// TODO: 定义插件相关类型
