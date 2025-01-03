# 基础镜像
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:18

# 安装必要工具
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && apt-get clean -y

# 设置默认工作目录
WORKDIR /workspace

# 安装全局工具
RUN npm install -g create-react-app
