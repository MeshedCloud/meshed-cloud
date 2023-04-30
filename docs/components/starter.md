---
title: Starter
order: 3
group:
  title: 微服务组件
  order: 1
---

## 切面
Spring Aop 扩展提供ResolverKit通过方法参数动态解析EL表达式
```xml
<dependency>
    <groupId>cn.meshed.cloud</groupId>
    <artifactId>meshed-cloud-aop-starter</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

## 上下文
主要提供SecurityContext，需要与安全组件/数据流/Dubbo配套使用
```xml
<dependency>
    <groupId>cn.meshed.cloud</groupId>
    <artifactId>meshed-cloud-context-starter</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

## 启动统一依赖
统一异常处理，JacksonMapper配置，文档，安全，Nacos,Actuator等通用详细配置，简化微服务开发配置项。
```xml
<dependency>
    <groupId>cn.meshed.cloud</groupId>
    <artifactId>meshed-cloud-start-starter</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

## 文档
```xml
<dependency>
    <groupId>cn.meshed.cloud</groupId>
    <artifactId>meshed-cloud-doc-starter</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

通用部分配置
```yaml
openapi:
  doc:
    service-url: https://cloud.meshed.cn
    contact-name: Vincent Vic
    contact-url: https://cloud.meshed.cn
    contact-email: hougq.rd@gmail.com
    license: MIT
```

微服务配置
```yaml
openapi:
  doc:
    title: Meshed Cloud 研发中心
    description: 辅助研发系统和运维管理系统
    group-name: 研发领域
    version: 1.0.0
```

> 一般分为两个部分配置，一个置于通用配置中，一个在微服务中配置简化配置信息方便管理
