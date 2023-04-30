---
title: 环境需求
order: 1
group:
  title: 快速上手
  order: 3
---

## 基本开发环境

| 设施                                                           | 版本     |
|--------------------------------------------------------------|--------|
| MySql                                                        | 5.7    |
| Redis                                                        | 6.0    |
| Nacos                                                        | 2.1.1  |
| RabbitMQ                                                     | 3.9.x |
| Java                                                         | JDK8   |
| Node                                                         | v14.x  |

## Redis

Docker 部署

```shell
docker run -m 1024M -p 6379:6379 --name redis -v /data/redis/redis.conf:/etc/redis/redis.conf -v /data/redis/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes --requirepass "root"
```
## MySql

Docker 搭建
```shell
docker run --name mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```

## Nacos

Docker部署简单示例

```shell
docker run \
-m 1024M \
--name nacos -d \
-p 8848:8848 \
-p 9848:9848 \
-p 9849:9849 \
--privileged=true \
--restart=always \
-e JVM_XMS=256m \
-e JVM_XMX=256m \
-e MODE=standalone \
-e SPRING_DATASOURCE_PLATFORM=mysql \
-e MYSQL_SERVICE_HOST=localhost \
-e MYSQL_SERVICE_PORT=3306 \
-e MYSQL_SERVICE_DB_NAME=meshed_cloud_nacos \
-e MYSQL_SERVICE_USER=root \
-e MYSQL_SERVICE_PASSWORD=root \
-e NACOS_AUTH_CACHE_ENABLE=true \
nacos/nacos-server:v2.1.1

```

数据库账号信息请根据实际情况，请更多部署方式见[官网](https://nacos.io/zh-cn/docs/quick-start.html)

### Nacos数据库

下载[Nacos Releases](https://github.com/alibaba/nacos/releases) SQL存放在压缩包中conf/nacos-mysql.sql

### 配置

新建命名空间

Namespace ID:
> meshed-cloud
>
> meshed-cloud-dubbo

### 配置文件
common.yaml
```yaml
#开启日志
logging:
  level:
    cn.meshed.cloud.**: DEBUG
spring:
  #不要为我们工程中的资源文件建立映射
  resources:
    add-mappings: false
  mvc:
    #出现错误时, 直接抛出异常
    throw-exception-if-no-handler-found: true
    pathmatch:
      # 配置策略
      matching-strategy: ANT_PATH_MATCHER
  main:
    allow-bean-definition-overriding: true  # 因为将来会引入很多依赖, 难免有重名的 bean
    
openapi:
  doc:
    service-url: https://cloud.meshed.cn
    contact-name: Vincent Vic
    contact-url: https://cloud.meshed.cn
    contact-email: hougq.rd@gmail.com
    license: MIT
knife4j:
  enable: true
  setting:
    language: zh-CN
    enable-swagger-models: true
    enable-document-manage: true
    swagger-model-name: 模型列表
    enable-version: true
    enable-reload-cache-parameter: false
    enable-after-script: true
    enable-filter-multipart-api-method-type: POST
    enable-filter-multipart-apis: false
    enable-request-cache: true
    enable-host: false
    # enable-host-text: ""
    enable-home-custom: false
    # home-custom-path: classpath:markdown/home.md
    enable-search: true
    enable-footer: false
    enable-footer-custom: true
    footer-custom-content: Apache License 2.0 | Copyright  2023-[微网格Mesh | Meshed Cloud](https://github.com/meshed-cloud)
    enable-dynamic-parameter: false
    enable-debug: true
    enable-open-api: true
    enable-group: true
  cors: false
  production: false
  basic:
    enable: false
    username: meshed
    password: meshed
service:
  security:
    secret: 4MnlSFAyjazlvPxB3nqWPNAAcClfs2kr5Yo17LgVV0fERsY7SzMATPfHTPAXOJDHBkMJyYDIQNvxVzPeKHPggqkjavOC4i2zcrLt4IMXbIG9oR5jLRX2wy65swBs1nFt
```

mybatis-common.yaml

```yaml
# mybatis-plus配置
mybatis-plus:
  # mapper.xml路径
  mapper-locations: classpath*:mapper/**/*.xml
  # 实体扫描，多个package用逗号或者分号分隔
  type-aliases-package: cn.meshed.cloud.*.*.gatewayimpl.database.dataobject
  type-handlers-package: org.apache.ibatis.type.EnumOrdinalTypeHandler
  global-config:
    db-config:
      # 驼峰下划线转换
      table-underline: true
  configuration:
    # 配置返回数据库(column下划线命名&&返回java实体是驼峰命名)，自动匹配无需as（如不开启，SQL需要写as： select user_id as userId）
    map-underscore-to-camel-case: true
    default-enum-type-handler: org.apache.ibatis.type.EnumOrdinalTypeHandler
    cache-enabled: false
    # 打印sql配置
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl

# pageHelper分页插件配置
#分页设置
pagehelper:
  helper-dialect: mysql
  reasonable: true
  supportMethods-arguments: true
  pageSizeZero: false #pageSize=0 返回所有
  params: count=countSql
```

security.yaml

```yaml
sa-token:
  # token 名称 (同时也是cookie名称)
  token-name: Authorization
  # token 样式
  token-style: random-64
  # 是否输出操作日志
  is-log: true
  oauth2:
    is-code: true
    is-implicit: true
    is-password: true
    is-client: true
```

dubbo.yaml

```yaml
dubbo:
  protocol:
    name: dubbo
    port: -1
    check: false
  registry:
    address: nacos://localhost:8848?namespace=meshed-cloud-dubbo
    use-as-config-center: false
    id: nacos
  application:
    register-consumer: true
    parameters:
      namespace: meshed-cloud-dubbo
  consumer:
    check: false
    timeout: 5000
    retries: 2
  reference:
    check: false
```
mq.yaml
```yaml
spring:
  rabbitmq:
    host: localhost   #rabbitmq 服务器的地址
    port: 5672           #rabbitmq 服务器端口
    username: root       #rabbitmq 用户名
    password: root       #rabbitmq 密码
    virtual-host: meshed       #虚拟路径
  cloud:
    stream:
      binders: # 在此处配置要绑定的rabbitmq的服务信息；
        defaultRabbit: # 表示定义的名称，用于于binding整合
          type: rabbit # 消息组件类型
          environment: # 设置rabbitmq的相关的环境配置
            spring:
              rabbitmq:
                host: localhost   #rabbitmq 服务器的地址
                port: 5672           #rabbitmq 服务器端口
                username: root       #rabbitmq 用户名
                password: root       #rabbitmq 密码
                virtual-host: meshed       #虚拟路径
```

非通用配置见项目介绍下

