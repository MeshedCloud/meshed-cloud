---
title: 组件总览
description: 微服务快速开发框架开发文档
keywords: [ Meshed,Meshed Cloud ]
order: 0
group:
  title: 微服务组件
  order: 1
---

# 组件总览

组件生态是Meshed Cloud 微服务快速开发框架的重要组成部分

## 父依赖

| 组件                                                            | 最新版本  | 文档                                                  |
|---------------------------------------------------------------|-------|-----------------------------------------------------|
| [基础父依赖](https://github.com/meshed-cloud/meshed-base-parent)   | 1.0.0 | [基础父依赖](../components/parent-dependency.md#基础父依赖)   |
| [微服务父依赖](https://github.com/meshed-cloud/meshed-cloud-parent) | 1.0.0 | [微服务父依赖](../components/parent-dependency.md#微服务父依赖) |

## 通用组件

| 组件                                                                                                | 最新版本           | 文档                                   |
|---------------------------------------------------------------------------------------------------|----------------|--------------------------------------|
| [common](https://github.com/meshed-cloud/meshed-cloud-base/tree/master/meshed-cloud-common)       | 1.0.0-SNAPSHOT | [通用](../components/common.md#通用组件)   |
| [constant](https://github.com/meshed-cloud/meshed-cloud-base/tree/master/meshed-cloud-constant)   | 1.0.0-SNAPSHOT | [常量](../components/common.md#常量)     |
| [cqrs](https://github.com/meshed-cloud/meshed-cloud-base/tree/master/meshed-cloud-cqrs)           | 1.0.0-SNAPSHOT | [标准化](../components/common.md#标准化)   |
| [dto](https://github.com/meshed-cloud/meshed-cloud-base/tree/master/meshed-cloud-dto)             | 1.0.0-SNAPSHOT | [传输模型](../components/common.md#传输模型) |
| [exception](https://github.com/meshed-cloud/meshed-cloud-base/tree/master/meshed-cloud-exception) | 1.0.0-SNAPSHOT | [异常](../components/common.md#异常)     |
| [json](https://github.com/meshed-cloud/meshed-cloud-base/tree/master/meshed-cloud-json])          | 1.0.0-SNAPSHOT | [序列化](../components/common.md#序列化)   |

## Starter

| 组件                                                                                                       | 最新版本           | 文档                                        |
|----------------------------------------------------------------------------------------------------------|----------------|-------------------------------------------|
| [Aop](https://github.com/meshed-cloud/meshed-cloud-starter/tree/master/meshed-cloud-aop-starter)         | 1.0.0-SNAPSHOT | [切面](../components/starter.md#切面)         |
| [Context](https://github.com/meshed-cloud/meshed-cloud-starter/tree/master/meshed-cloud-context-starter) | 1.0.0-SNAPSHOT | [上下文](../components/starter.md#上下文)       |
| [Start](https://github.com/meshed-cloud/meshed-cloud-starter/tree/master/meshed-cloud-start-starter)     | 1.0.0-SNAPSHOT | [启动统一依赖](../components/starter.md#启动统一依赖) |
| [Doc](https://github.com/meshed-cloud/meshed-cloud-starter/tree/master/meshed-cloud-doc-starter)         | 1.0.0-SNAPSHOT | [文档](../components/starter.md#文档)         |

## 数据

| 组件                                                                                                     | 最新版本           | 文档                                                  |
|--------------------------------------------------------------------------------------------------------|----------------|-----------------------------------------------------|
| [MySql](https://github.com/meshed-cloud/meshed-cloud-data/tree/master/meshed-cloud-data-mysql-starter) | 1.0.0-SNAPSHOT | [MySql数据库](../components/data.md#MySql数据库#MySql数据库) |
| [Redis](https://github.com/meshed-cloud/meshed-cloud-data/tree/master/meshed-cloud-data-redis-starter) | 1.0.0-SNAPSHOT | [Redis数据库](../components/data.md#Redis数据库)          |
| [Stream](https://github.com/meshed-cloud/meshed-cloud-data/tree/master/meshed-cloud-stream-starter)    | 1.0.0-SNAPSHOT | [数据流](../components/data.md#数据流)                    |
| [Dubbo](https://github.com/meshed-cloud/meshed-cloud-data/tree/master/meshed-cloud-dubbo-starter)      | 1.0.0-SNAPSHOT | [DubboRPC](../components/data.md#DubboRPC)          |
| [Nacos](https://github.com/meshed-cloud/meshed-cloud-data/tree/master/meshed-cloud-nacos-starter)      | 1.0.0-SNAPSHOT | [Nacos依赖](../components/data.md#Nacos依赖)            |

## 安全

| 组件                                                                                                                             | 最新版本           | 文档                                               |
|--------------------------------------------------------------------------------------------------------------------------------|----------------|--------------------------------------------------|
| [Security](https://github.com/meshed-cloud/meshed-cloud-security/tree/master/meshed-cloud-security-starter)                    | 1.0.0-SNAPSHOT | [微服务安全](../components/security.md#微服务安全)         |
| [Token](https://github.com/meshed-cloud/meshed-cloud-security/tree/master/meshed-cloud-security-token-starter)                 | 1.0.0-SNAPSHOT | [内网令牌](../components/security.md#内网令牌)           |
| [Oauth2 Client](https://github.com/meshed-cloud/meshed-cloud-security/tree/master/meshed-cloud-security-oauth2-client-starter) | 1.0.0-SNAPSHOT | [OAUTH2客户端](../components/security.md#OAUTH2客户端) |

