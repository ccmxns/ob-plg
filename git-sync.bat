@echo off
REM 切换到当前脚本所在目录
cd /d %~dp0

echo ================================
echo   Git 自动提交并推送
echo ================================

REM 显示当前状态
git status

REM 添加所有修改
git add .

REM 提交到本地仓库
git commit -m "update"

REM 推送到远程（main 分支，如果是 master 改成 master）
git push origin main

echo.
echo ====== 推送完成 ======
pause