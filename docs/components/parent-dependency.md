---
title: 父依赖
order: 1
group:
  title: 微服务组件
  order: 1
---

## 基础父依赖

主要作为组件开发的依赖顶层依赖管理

```xml

<parent>
  <artifactId>meshed-base-parent</artifactId>
  <groupId>cn.meshed.cloud</groupId>
  <version>1.0.0</version>
</parent>
```

> 聚合管理项目中需要加入relativePath标签

管理的依赖信息，其中“.”的仅为版本信息，非依赖管理

| 依赖                  | 版本          |
|---------------------|-------------|
| spring.version      | 5.3.19      |
| spring-web          | 5.3.22      |
| spring-context      | 5.3.22      |
| spring.boot.version | 2.6.11      |
| slf4j-api           | 1.6.1       |
| lombok              | 1.18.22     |
| cola-components-bom | 4.3.1       |
| validation-api      | 2.0.1.Final |

## 微服务父依赖

主要作为微服务的顶层依赖管理

```xml

<parent>
  <artifactId>meshed-cloud-parent</artifactId>
  <groupId>cn.meshed.cloud</groupId>
  <version>1.0.0</version>
</parent>
```

> 聚合管理项目中需要加入relativePath标签

Spring Cloud 主要依赖版本

| 依赖                   | 版本         |
|----------------------|------------|
| spring-web           | 5.3.22     |
| spring-boot.version  | 2.6.11     |
| spring-cloud         | 2021.0.4   |
| spring-cloud-alibaba | 2021.0.4.0 |
| dubbo                | 3.0.2.1    |
| bootstrap            | 3.0.2      |
