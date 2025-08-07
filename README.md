# Obsidian Demo Plugin 开发框架

这是一个简单的Obsidian插件开发框架，基于mini-toolbar项目结构创建。该demo插件展示了Obsidian插件的基本功能，包括启动通知和简单命令。

## 功能特性

- ✅ 插件启动时显示通知："demo插件启动成功"
- ✅ 提供两个示例命令：
  - **显示Hello World**: 显示问候消息
  - **显示当前时间**: 显示格式化的当前时间
- ✅ 完整的开发环境配置
- ✅ 热重载支持（开发模式）

## 项目结构

```
demo-plugin/
├── src/
│   ├── main.ts                           # 主插件文件
│   ├── commands/                         # 命令模块
│   │   ├── index.ts                      # 命令模块导出
│   │   ├── CommandManager.ts             # 命令管理器
│   │   ├── BaseCommand.ts                # 基础命令类
│   │   ├── fileCommands.ts               # 文件操作命令
│   │   ├── editCommands.ts               # 编辑操作命令
│   │   └── viewCommands.ts               # 视图操作命令
│   ├── components/                       # UI组件模块
│   │   ├── index.ts                      # 组件模块导出
│   │   ├── Modal.ts                      # 模态框组件
│   │   ├── Button.ts                     # 按钮组件
│   │   ├── Input.ts                      # 输入组件
│   │   ├── DropdownMenu.ts               # 下拉菜单组件
│   │   └── StatusBar.ts                  # 状态栏组件
│   ├── views/                            # 视图模块
│   │   ├── index.ts                      # 视图模块导出
│   │   ├── CustomView.ts                 # 自定义视图
│   │   ├── SidebarView.ts                # 侧边栏视图
│   │   ├── LeafView.ts                   # 叶子视图
│   │   └── WorkspaceManager.ts           # 工作区管理器
│   ├── services/                         # 服务模块
│   │   ├── index.ts                      # 服务模块导出
│   │   ├── EventService.ts               # 事件服务
│   │   ├── FileService.ts                # 文件服务
│   │   ├── StorageService.ts             # 存储服务
│   │   ├── LoggerService.ts              # 日志服务
│   │   └── APIService.ts                 # API服务
│   ├── settings/                         # 设置模块
│   │   ├── index.ts                      # 设置模块导出
│   │   ├── PluginSettings.ts             # 插件设置定义
│   │   ├── SettingTab.ts                 # 设置页面UI
│   │   ├── SettingsManager.ts            # 设置管理器
│   │   └── SettingsValidator.ts          # 设置验证器
│   ├── types/                            # 类型定义模块
│   │   ├── index.ts                      # 类型模块导出
│   │   ├── common.ts                     # 通用类型
│   │   ├── plugin.ts                     # 插件相关类型
│   │   ├── ui.ts                         # UI组件类型
│   │   └── events.ts                     # 事件系统类型
│   └── utils/                            # 工具类模块
│       ├── index.ts                      # 工具模块导出
│       ├── dateUtils.ts                  # 日期时间工具
│       ├── fileUtils.ts                  # 文件操作工具
│       ├── stringUtils.ts                # 字符串处理工具
│       └── performanceUtils.ts           # 性能优化工具
├── build/                                # 构建输出目录（自动生成）
├── package.json                          # 项目依赖和脚本
├── manifest.json                         # Obsidian插件清单
├── tsconfig.json                         # TypeScript配置
├── esbuild.js                           # 构建配置
└── README.md                            # 说明文档
```

## 快速开始

### 1. 安装依赖

```bash
cd demo-plugin
npm install
```

### 2. 开发模式

```bash
npm run dev
```

这将启动开发模式，支持热重载。

### 3. 生产构建

```bash
npm run build
```

这将创建优化后的生产版本。

## 安装到Obsidian

1. 将整个`demo-plugin`文件夹复制到你的Obsidian vault的`.obsidian/plugins/`目录下
2. 重命名文件夹为`demo-plugin`（如果需要）
3. 在Obsidian中进入设置 > 第三方插件
4. 启用"Demo Plugin"

## 开发指南

### 插件入口点

主插件类位于`src/main.ts`，继承自Obsidian的`Plugin`类：

```typescript
export default class DemoPlugin extends Plugin {
  async onload() {
    // 插件加载时的逻辑
  }
  
  onunload() {
    // 插件卸载时的清理逻辑
  }
}
```

### 添加命令

使用`addCommand`方法添加新命令：

```typescript
this.addCommand({
  id: "unique-command-id",
  name: "命令显示名称",
  icon: "icon-name", // 可选
  callback: () => {
    // 命令执行逻辑
  }
});
```

### 显示通知

使用`Notice`类显示用户通知：

```typescript
import { Notice } from "obsidian";

new Notice("通知消息", 3000); // 3秒后自动消失
```

## 🏗️ 框架模块说明

### 1. Commands 命令模块 (`src/commands/`)
负责插件中所有命令的定义和管理：
- **CommandManager**: 统一管理所有命令的注册、执行和调度
- **BaseCommand**: 提供命令基类，包含通用的执行逻辑和错误处理
- **fileCommands**: 文件操作相关命令（创建、删除、重命名等）
- **editCommands**: 编辑器操作命令（插入、格式化、查找替换等）
- **viewCommands**: 视图操作命令（切换视图、分割窗口等）

### 2. Components 组件模块 (`src/components/`)
提供常用的UI组件和界面元素：
- **Modal**: 模态框组件，用于弹出对话框和表单
- **Button**: 按钮组件，支持不同样式和状态
- **Input**: 输入组件，包括文本框、数字输入等
- **DropdownMenu**: 下拉菜单，用于上下文菜单和选择器
- **StatusBar**: 状态栏管理，显示插件状态和信息

### 3. Views 视图模块 (`src/views/`)
管理插件的自定义视图和界面：
- **CustomView**: 自定义视图基类
- **SidebarView**: 侧边栏视图，用于创建侧边栏面板
- **LeafView**: 叶子视图，可在标签页中打开
- **WorkspaceManager**: 工作区管理器，处理视图的创建和布局

### 4. Services 服务模块 (`src/services/`)
核心业务逻辑和数据处理服务：
- **EventService**: 事件总线，处理组件间通信
- **FileService**: 文件操作服务，封装Obsidian文件API
- **StorageService**: 数据存储服务，管理插件数据持久化
- **LoggerService**: 日志服务，统一日志记录和调试
- **APIService**: API服务，处理HTTP请求和外部集成

### 5. Settings 设置模块 (`src/settings/`)
插件配置和设置管理：
- **PluginSettings**: 设置数据结构定义和默认值
- **SettingTab**: 设置页面UI，提供用户配置界面
- **SettingsManager**: 设置管理器，处理设置的加载和保存
- **SettingsValidator**: 设置验证器，确保配置数据有效性

### 6. Types 类型模块 (`src/types/`)
TypeScript类型定义，提供类型安全：
- **common**: 通用类型定义（基础类型、工具类型）
- **plugin**: 插件相关类型（配置、状态、API）
- **ui**: UI组件类型（属性、事件、样式）
- **events**: 事件系统类型（事件定义、处理器）

### 7. Utils 工具模块 (`src/utils/`)
通用工具函数和辅助类：
- **dateUtils**: 日期时间处理工具
- **fileUtils**: 文件路径和内容处理工具
- **stringUtils**: 字符串格式化和处理工具
- **performanceUtils**: 性能优化工具（防抖、节流、缓存）

## 🚀 使用指南

### 基础用法
1. **创建新命令**：在`commands/`目录下定义新的命令类
2. **添加UI组件**：使用`components/`模块构建用户界面
3. **管理数据**：通过`services/`模块处理业务逻辑
4. **配置设置**：在`settings/`模块添加新的配置项

### 自定义扩展

要扩展这个框架，你可以：

1. **添加新的命令**: 继承`BaseCommand`类创建自定义命令
2. **创建UI组件**: 使用组件模块构建复杂界面
3. **添加服务**: 在services目录创建新的业务服务
4. **扩展类型**: 在types目录添加新的类型定义
5. **添加工具函数**: 在utils目录创建通用工具

## 文件说明

- **`manifest.json`**: 定义插件的基本信息，如ID、名称、版本等
- **`package.json`**: Node.js项目配置，包含依赖和构建脚本
- **`esbuild.js`**: 构建配置，将TypeScript编译为JavaScript
- **`tsconfig.json`**: TypeScript编译器配置
- **`src/main.ts`**: 主插件文件，包含所有插件逻辑

## 技术栈

- **TypeScript**: 主要开发语言
- **esbuild**: 快速构建工具
- **Obsidian API**: 插件开发框架

## 许可证

MIT License

## 贡献

欢迎提交issue和pull request来改进这个框架！

---

🎉 **开始你的Obsidian插件开发之旅吧！**
