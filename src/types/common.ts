/**
 * 通用类型定义
 * 
 * 这个文件通常包含：
 * 1. 基础数据类型
 * 2. 通用接口定义
 * 3. 工具类型定义
 * 4. 枚举类型
 * 5. 联合类型
 * 6. 泛型类型
 * 
 * 常见类型定义：
 * 
 * // 基础类型
 * export type ID = string | number;
 * export type Timestamp = number;
 * export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
 * export interface JSONObject { [key: string]: JSONValue; }
 * export interface JSONArray extends Array<JSONValue> {}
 * 
 * // 工具类型
 * export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
 * export type RequiredOnly<T, K extends keyof T> = Required<Pick<T, K>> & Partial<Omit<T, K>>;
 * export type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; };
 * 
 * // 回调类型
 * export type Callback<T = void> = (result: T) => void;
 * export type AsyncCallback<T = void> = (result: T) => Promise<void>;
 * export type ErrorCallback = (error: Error) => void;
 * 
 * // 状态类型
 * export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
 * export type ThemeMode = 'light' | 'dark' | 'auto';
 * export type SortDirection = 'asc' | 'desc';
 * 
 * // 位置类型
 * export interface Position {
 *   x: number;
 *   y: number;
 * }
 * 
 * export interface Size {
 *   width: number;
 *   height: number;
 * }
 * 
 * export interface Rect extends Position, Size {}
 */

// TODO: 定义通用类型
