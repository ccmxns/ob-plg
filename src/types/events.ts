/**
 * 事件系统相关类型定义
 * 
 * 这个文件通常包含：
 * 1. 事件基础类型
 * 2. 事件处理器类型
 * 3. 事件总线类型
 * 4. 自定义事件类型
 * 5. 事件生命周期类型
 * 6. 事件过滤类型
 * 
 * 常见类型定义：
 * 
 * // 基础事件类型
 * export interface BaseEvent {
 *   type: string;
 *   timestamp: number;
 *   source?: string;
 *   target?: string;
 *   data?: any;
 *   bubbles?: boolean;
 *   cancelable?: boolean;
 *   defaultPrevented?: boolean;
 * }
 * 
 * // 事件处理器
 * export type EventHandler<T = any> = (event: BaseEvent & { data: T }) => void;
 * export type AsyncEventHandler<T = any> = (event: BaseEvent & { data: T }) => Promise<void>;
 * 
 * // 事件监听器
 * export interface EventListener<T = any> {
 *   handler: EventHandler<T>;
 *   once?: boolean;
 *   priority?: number;
 *   filter?: (event: BaseEvent) => boolean;
 * }
 * 
 * // 事件总线接口
 * export interface EventBus {
 *   on<T = any>(eventType: string, handler: EventHandler<T>, options?: Partial<EventListener>): void;
 *   off<T = any>(eventType: string, handler: EventHandler<T>): void;
 *   emit<T = any>(eventType: string, data?: T, options?: Partial<BaseEvent>): void;
 *   once<T = any>(eventType: string, handler: EventHandler<T>): void;
 *   clear(eventType?: string): void;
 *   listenerCount(eventType: string): number;
 * }
 * 
 * // 插件特定事件
 * export interface PluginEvents {
 *   'plugin:loaded': { pluginId: string };
 *   'plugin:enabled': { pluginId: string };
 *   'plugin:disabled': { pluginId: string };
 *   'plugin:error': { pluginId: string; error: Error };
 *   'settings:changed': { key: string; value: any; oldValue: any };
 *   'file:created': { file: any };
 *   'file:modified': { file: any };
 *   'file:deleted': { file: any };
 *   'editor:selection': { selection: any };
 *   'workspace:layout': { layout: any };
 * }
 * 
 * // 事件类型映射
 * export type EventMap = PluginEvents & {
 *   [K: string]: any;
 * };
 * 
 * // 类型安全的事件发射器
 * export interface TypedEventEmitter<T extends Record<string, any> = EventMap> {
 *   on<K extends keyof T>(event: K, handler: EventHandler<T[K]>): void;
 *   off<K extends keyof T>(event: K, handler: EventHandler<T[K]>): void;
 *   emit<K extends keyof T>(event: K, data: T[K]): void;
 *   once<K extends keyof T>(event: K, handler: EventHandler<T[K]>): void;
 * }
 */

// TODO: 定义事件系统相关类型
