/**
 * UI组件相关类型定义
 * 
 * 这个文件通常包含：
 * 1. 组件属性类型
 * 2. 事件处理类型
 * 3. 样式相关类型
 * 4. 布局类型
 * 5. 交互状态类型
 * 6. 组件配置类型
 * 
 * 常见类型定义：
 * 
 * // 组件基础类型
 * export interface ComponentProps {
 *   id?: string;
 *   className?: string;
 *   style?: Partial<CSSStyleDeclaration>;
 *   disabled?: boolean;
 *   visible?: boolean;
 * }
 * 
 * // 按钮类型
 * export interface ButtonProps extends ComponentProps {
 *   text?: string;
 *   icon?: string;
 *   variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
 *   size?: 'small' | 'medium' | 'large';
 *   loading?: boolean;
 *   onClick?: () => void;
 * }
 * 
 * // 输入框类型
 * export interface InputProps extends ComponentProps {
 *   type?: 'text' | 'number' | 'password' | 'email' | 'url';
 *   value?: string;
 *   placeholder?: string;
 *   readonly?: boolean;
 *   maxLength?: number;
 *   onInput?: (value: string) => void;
 *   onChange?: (value: string) => void;
 *   onFocus?: () => void;
 *   onBlur?: () => void;
 * }
 * 
 * // 模态框类型
 * export interface ModalProps extends ComponentProps {
 *   title?: string;
 *   width?: number;
 *   height?: number;
 *   resizable?: boolean;
 *   closable?: boolean;
 *   onOpen?: () => void;
 *   onClose?: () => void;
 *   onConfirm?: () => void;
 *   onCancel?: () => void;
 * }
 * 
 * // 菜单类型
 * export interface MenuItem {
 *   id: string;
 *   text: string;
 *   icon?: string;
 *   shortcut?: string;
 *   disabled?: boolean;
 *   separator?: boolean;
 *   submenu?: MenuItem[];
 *   onClick?: () => void;
 * }
 * 
 * export interface MenuProps extends ComponentProps {
 *   items: MenuItem[];
 *   position?: Position;
 *   onItemClick?: (item: MenuItem) => void;
 *   onShow?: () => void;
 *   onHide?: () => void;
 * }
 * 
 * // 布局类型
 * export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
 * export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
 * export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
 */

// TODO: 定义UI组件相关类型
