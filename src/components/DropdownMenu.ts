/**
 * 下拉菜单组件
 * 
 * 这个文件通常包含：
 * 1. 下拉菜单容器组件
 * 2. 菜单项组件
 * 3. 菜单项分组和分隔符
 * 4. 菜单位置计算和定位
 * 5. 键盘导航支持
 * 6. 菜单项图标和快捷键显示
 * 
 * 通常的类结构：
 * class DropdownMenu {
 *   constructor(trigger: HTMLElement, options: MenuOptions)
 *   addItem(text: string, callback: () => void, icon?: string): this
 *   addSeparator(): this
 *   addSubmenu(text: string, items: MenuItem[]): this
 *   show(position?: Position): this
 *   hide(): this
 *   onShow(callback: () => void): this
 *   onHide(callback: () => void): this
 * }
 * 
 * 常见用途：
 * - 右键上下文菜单
 * - 工具栏下拉菜单
 * - 选择器菜单
 * - 操作菜单
 */

// TODO: 实现下拉菜单组件
