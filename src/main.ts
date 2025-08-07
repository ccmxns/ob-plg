import { Plugin, Notice } from "obsidian";

// 导入各个模块（实际使用时根据需要导入）
// import { EventService, FileService, StorageService, LoggerService } from './services';
// import { Modal, Button, Input } from './components';
// import { CustomView, SidebarView } from './views';
// import { PluginSettings, SettingsManager } from './settings';
// import { CommandManager, BaseCommand } from './commands';
// import { formatDate, debounce } from './utils';
// import { PluginConfig, ButtonProps } from './types';

/**
 * Demo插件主类
 * 这是一个完整的Obsidian插件开发框架示例
 * 展示了如何组织和使用各种模块
 */
export default class DemoPlugin extends Plugin {
  
  // 插件的各种服务和管理器实例
  // private eventService: EventService;
  // private fileService: FileService;
  // private storageService: StorageService;
  // private logger: LoggerService;
  // private settingsManager: SettingsManager;
  // private commandManager: CommandManager;
  
  /**
   * 插件加载时执行
   * 这个方法在插件启动时被Obsidian调用
   */
  async onload() {
    console.log("正在加载Demo插件...");
    
    // 显示启动成功的通知
    new Notice("demo插件启动成功", 3000);
    
    // 初始化各种服务（示例代码，实际使用时取消注释）
    await this.initializeServices();
    
    // 初始化设置
    await this.initializeSettings();
    
    // 注册命令
    this.registerCommands();
    
    // 注册视图
    this.registerViews();
    
    // 设置事件监听
    this.setupEventListeners();
    
    console.log("Demo插件加载完成！");
  }
  
  /**
   * 初始化各种服务
   */
  private async initializeServices() {
    // 初始化日志服务
    // this.logger = new LoggerService('DemoPlugin');
    // this.logger.info('初始化服务...');
    
    // 初始化事件服务
    // this.eventService = new EventService();
    
    // 初始化文件服务
    // this.fileService = new FileService(this.app);
    
    // 初始化存储服务
    // this.storageService = new StorageService(this);
    
    // 初始化命令管理器
    // this.commandManager = new CommandManager(this.app, this);
  }
  
  /**
   * 初始化设置
   */
  private async initializeSettings() {
    // 初始化设置管理器
    // this.settingsManager = new SettingsManager(this);
    // await this.settingsManager.loadSettings();
    
    // 注册设置页面
    // this.addSettingTab(new PluginSettingTab(this.app, this));
  }
  
  /**
   * 注册命令
   */
  private registerCommands() {
    // 添加基础命令示例
    this.addCommand({
      id: "demo-hello-world",
      name: "显示Hello World",
      callback: () => {
        new Notice("Hello World! 来自Demo插件的问候 👋");
      }
    });
    
    // 添加带图标的命令
    this.addCommand({
      id: "demo-current-time", 
      name: "显示当前时间",
      icon: "clock",
      callback: () => {
        const now = new Date().toLocaleString('zh-CN');
        new Notice(`当前时间：${now}`);
      }
    });
    
    // 使用命令管理器注册复杂命令（示例）
    // const fileCommands = [
    //   new CreateFileCommand(this.app, this),
    //   new DeleteFileCommand(this.app, this),
    //   new RenameFileCommand(this.app, this)
    // ];
    // this.commandManager.registerCommands(fileCommands);
  }
  
  /**
   * 注册视图
   */
  private registerViews() {
    // 注册自定义视图（示例）
    // this.registerView(VIEW_TYPE_CUSTOM, (leaf) => new CustomView(leaf));
    // this.registerView(VIEW_TYPE_SIDEBAR, (leaf) => new SidebarView(leaf));
  }
  
  /**
   * 设置事件监听
   */
  private setupEventListeners() {
    // 监听文件变化事件（示例）
    // this.registerEvent(
    //   this.app.vault.on('create', (file) => {
    //     this.logger?.info(`文件已创建: ${file.path}`);
    //     this.eventService?.emit('file:created', { file });
    //   })
    // );
    
    // 监听编辑器变化事件
    // this.registerEvent(
    //   this.app.workspace.on('active-leaf-change', (leaf) => {
    //     this.logger?.info('活动页面已变化');
    //     this.eventService?.emit('workspace:leaf-change', { leaf });
    //   })
    // );
  }
  
  /**
   * 插件卸载时执行
   * 这个方法在插件被禁用或重新加载时被调用
   */
  onunload() {
    console.log("正在卸载Demo插件...");
    
    // 清理各种服务
    this.cleanup();
    
    new Notice("demo插件已停用", 2000);
    console.log("Demo插件已卸载");
  }
  
  /**
   * 清理资源
   */
  private cleanup() {
    // 清理事件监听器
    // this.eventService?.clear();
    
    // 保存设置
    // this.settingsManager?.saveSettings();
    
    // 清理日志
    // this.logger?.info('插件已卸载');
  }
}
