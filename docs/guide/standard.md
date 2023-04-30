---
title: 开发规范
order: 2
group:
  title: 快速上手
  order: 2
---

## 前端规范
### 控制台

> 格式: meshed-fe-backend-{projectName}
>
> 如: 项目名称: iam
>
> meshed-fe-backend-iam

### 前端项目

> 格式: meshed-fe-{projectName}
>
> 如: 项目名称: project
>
> meshed-fe-project


## 控制台结构

**目录结构**
```shell
│  .editorconfig
│  .env
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc.js
│  jsconfig.json
│  LICENSE
│  package-lock.json
│  package.json
│  playwright.config.ts
│  README.md
│  tsconfig.json
│
├─config
│      config.ts
│      defaultSettings.ts
│      oauth2.ts
│      oneapi.json
│      proxy.ts
│      routes.ts
│
├─mock
│      commonMock.ts
│      route.ts
│      user.ts
│
├─public
│  │  CNAME
│  │  favicon.ico
│  │  logo.svg
│  │  pro_icon.svg
│  │
│  └─icons
│          icon-128x128.png
│          icon-192x192.png
│          icon-512x512.png
│
├─src
│  │  access.ts
│  │  app.tsx
│  │  global.less
│  │  global.tsx
│  │  manifest.json
│  │  requestErrorConfig.ts
│  │  service-worker.js
│  │  typings.d.ts
│  │
│  ├─common
│  │      common.tsx
│  │      confirms.tsx
│  │      messages.ts
│  │      models.ts
│  │      request.ts
│  │      strings.ts
│  │      transfer.tsx
│  │      tree.ts
│  │      uri.ts
│  │      utils.ts
│  │
│  ├─components
│  │  │  index.md
│  │  │
│  │  ├─CheckCardModal
│  │  │      index.tsx
│  │  │
│  │  ├─ConfirmButton
│  │  │      index.tsx
│  │  │
│  │  ├─Footer
│  │  │      index.tsx
│  │  │
│  │  ├─HeaderDropdown
│  │  │      index.less
│  │  │      index.tsx
│  │  │
│  │  ├─HeaderSearch
│  │  │      index.less
│  │  │      index.tsx
│  │  │
│  │  ├─NoticeIcon
│  │  │      index.less
│  │  │      index.tsx
│  │  │      NoticeIcon.tsx
│  │  │      NoticeList.less
│  │  │      NoticeList.tsx
│  │  │
│  │  └─RightContent
│  │          AvatarDropdown.tsx
│  │          index.less
│  │          index.tsx
│  │
│  ├─e2e
│  │      baseLayout.e2e.spec.ts
│  │
│  ├─pages
│  │  │  error.tsx
│  │  │  Welcome.tsx
│  │  │
│  │  └─User
│  │      └─Login
│  │              index.less
│  │              index.tsx
│  │
│  └─services
│      ├─swagger
│      │      index.ts
│      │      pet.ts
│      │      store.ts
│      │      typings.d.ts
│      │      user.ts
│      │
│      └─user
│              api.ts
│              index.ts
│              typings.d.ts
│
└─tests
        run-tests.js
        setupTests.js
```

当前前端控制台管理整体架构设计，基座和微应用均采用Ant Design Pro模板，微应用独立接入OAUTH2可以单独访问也可以在基座控制台中访问，微应用目前提供Github模板：

[![Meshed-Cloud](https://github-readme-stats.vercel.app/api/pin/?username=meshed-cloud&repo=meshed-fe-backend-template)](https://github.com/meshed-fe-backend-template)



## COLA 架构
> [COLA](https://github.com/alibaba/COLA) 架构是一种基于泛化用例业务场景的微服务架构，由阿里巴巴提出并实现。COLA 的全称为 Context、Outcome、Location、Action，分别代表上下文、结果、位置和操作。

### 模块结构
![cola](https://s.meshed.cn/meshed/png/cola.png)

### 目录结构

**服务**
```shell
│  .gitignore
│  Dockerfile
│  pom.xml
│  README.md
├─meshed-cloud-projectName-adapter
│  └─src
│      └─main
│          └─java
│              └─cn/meshed/cloud
│                  └─projectName
│                       └─subDomain
│                            ├─mobile
│                            ├─wap
│                            └─web
├─meshed-cloud-projectName-app
│  └─src
│      └─main
│          └─java
│             └─cn
│                 └─meshed
│                     └─cloud
│                         └─projectName
│                             └─subDomain
│                                 ├─executor
│                                 │  ├─command
│                                 │  ├─listener
│                                 │  └─query
│                                 └─remote
├─meshed-cloud-projectName-domain
│  └─src
│      └─main
│          └─java
│             └─cn
│                 └─meshed
│                     └─cloud
│                         └─projectName
│                             └─domain
│                                 └─subDomain
│                                     ├─ability
│                                     ├─constant
│                                     ├─domainservice
│                                     └─gateway
├─meshed-cloud-projectName-infrastructure
│  └─src
│      └─main
│          ├─java
│          │  └─cn
│          │      └─meshed
│          │          └─cloud
│          │              └─projectName
│          │                  └─projectName
│          │                      ├─config
│          │                      └─gatewayimpl
│          │                          └─database
│          │                              ├─dao
│          │                              ├─dataobject
│          │                              └─mapper
│          └─resources
│              └─mapper
│                  └─subDomain
└─start
    └─src
        └─main
            ├─java
            │  └─cn
            │      └─meshed
            │          └─cloud
            │              └─projectName
            └─resources
                   application-dev.yml
                   application-mq.yml
                   application-prod.yml
                   bootstrap.yml
                   logback-spring.xml
```
客户端
```shell
│  .gitignore
│  pom.xml
│  README.md
└─src
    └─main
        └─java
            └─cn
                └─meshed
                    └─cloud
                        └─projectName
                            └─subdomain
                                ├─command
                                ├─data
                                ├─enums
                                ├─event
                                └─query
```
## 后端项目规范
项目命名由统一格式组成,后端项目统一前缀为: meshed-cloud
### 通用组件
> 格式: meshed-cloud-{projectName}
> 
> 如: 项目名称: common
> 
> meshed-cloud-common

### 原型组件

> 格式: meshed-cloud-{projectName}-archetype
>
> 如: 项目名称: client
>
> meshed-cloud-client-archetype

### 数据组件

> 格式: meshed-cloud-data-{projectName}-starter
>
> 如: 项目名称: redis
>
> meshed-cloud-data-redis-starter

### 微服务

> 格式: meshed-cloud-{projectName}
>
> 如: 项目名称: iam
>
> meshed-cloud-iam

构建项目见: <Link to=""></a>[脚手架](../guide/scaffolding.md)

## 开发模式Demo
### 接口定义
案例项目: IAM & IAM-Client

定义RESTful接口和DUBBO RPC接口,意义在于可以直接作为Feign客户端和Dubbo客户端接口
> 提醒: RPC 接口需要继承Serializable
>
> 当前适配器未加入@FeignClient（待支持）

**定义RESTful接口**
```java
package cn.meshed.cloud.iam.account;

import cn.meshed.cloud.iam.account.data.UserDTO;
import cn.meshed.cloud.iam.account.query.UserSelectQry;
import com.alibaba.cola.dto.MultiResponse;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <h1>用户适配器</h1>
 *
 * @author Vincent Vic
 * @version 1.0
 */
@RequestMapping("user")
public interface UserAdapter {

    /**
     * 选项列表
     *
     * @param userSelectQry 选项参数
     * @return {@link MultiResponse<UserDTO>}
     */
    @Operation(summary = "选项列表")
    @GetMapping("select")
    MultiResponse<UserDTO> list(UserSelectQry userSelectQry);
}
```

**DUBBO RPC接口**
```java
package cn.meshed.cloud.iam.account;

import cn.meshed.cloud.iam.account.data.AccountDTO;
import cn.meshed.cloud.iam.account.data.UserDTO;
import cn.meshed.cloud.iam.account.query.AccountPageQry;
import cn.meshed.cloud.iam.account.query.GrantedAuthorityQry;
import cn.meshed.cloud.iam.account.query.UserByOneQry;
import cn.meshed.cloud.iam.account.query.UserQry;
import com.alibaba.cola.dto.MultiResponse;
import com.alibaba.cola.dto.PageResponse;
import com.alibaba.cola.dto.SingleResponse;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.Serializable;

/**
 * <h1>用户内部服务</h1>
 *
 * @author Vincent Vic
 * @version 1.0
 */
public interface UserRpc extends Serializable {

    long serialVersionUID = 1L;

    /**
     * 获取用户信息
     *
     * @param userByOneQry 用户查询
     * @return 用户信息
     */
    SingleResponse<UserDTO> getUserInfo(UserByOneQry userByOneQry);


    /**
     * 批量获取用户信息
     *
     * @param userQry 用户查询
     * @return 用户信息列表
     */
    MultiResponse<UserDTO> getUserList(UserQry userQry);


    /**
     * 分页列表
     *
     * @param pageQry 分页参数
     * @return {@link PageResponse < AccountDTO >}
     */
    @Operation(summary = "分页列表")
    @GetMapping("list")
    PageResponse<AccountDTO> list(AccountPageQry pageQry);
}

```

### 客户端实现
**用户RESTful实现**
```javas
package cn.meshed.cloud.iam.account.web;

import cn.meshed.cloud.iam.account.UserAdapter;
import cn.meshed.cloud.iam.account.data.UserDTO;
import cn.meshed.cloud.iam.account.query.UserSelectQry;
import cn.meshed.cloud.iam.domain.account.ability.UserAbility;
import com.alibaba.cola.dto.MultiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

/**
 * <h1>用户Web适配器</h1>
 *
 * @author Vincent Vic
 * @version 1.0
 */
@RequiredArgsConstructor
@RestController
public class UserWebAdapter implements UserAdapter {

    private final UserAbility userAbility;

    /**
     * 选项列表
     *
     * @param userSelectQry 选项参数
     * @return {@link MultiResponse < UserDTO >}
     */
    @Override
    public MultiResponse<UserDTO> list(UserSelectQry userSelectQry) {
        return userAbility.select(userSelectQry);
    }
}

```
**用户RPC实现**
```java
package cn.meshed.cloud.iam.account.remote;

import cn.meshed.cloud.iam.account.UserRpc;
import cn.meshed.cloud.iam.account.data.AccountDTO;
import cn.meshed.cloud.iam.account.data.UserDTO;
import cn.meshed.cloud.iam.account.executor.query.UserByOneQryExe;
import cn.meshed.cloud.iam.account.query.UserByOneQry;
import cn.meshed.cloud.iam.account.query.UserQry;
import cn.meshed.cloud.iam.domain.account.Account;
import cn.meshed.cloud.iam.domain.account.gateway.AccountGateway;
import cn.meshed.cloud.utils.AssertUtils;
import cn.meshed.cloud.utils.CopyUtils;
import com.alibaba.cola.dto.MultiResponse;
import com.alibaba.cola.dto.SingleResponse;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.dubbo.config.annotation.DubboService;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <h1>用户服务提供者实现</h1>
 *
 * @author Vincent Vic
 * @version 1.0
 */
@DubboService
@RequiredArgsConstructor
public class UserRemote implements UserRpc {

    private final UserByOneQryExe userByOneQryExe;
    private final AccountGateway accountGateway;

    /**
     * 获取用户信息
     *
     * @param userByOneQry 用户查询
     * @return 用户信息
     */
    @Override
    public SingleResponse<UserDTO> getUserInfo(UserByOneQry userByOneQry) {
        return userByOneQryExe.execute(userByOneQry);
    }

    /**
     * 批量获取用户信息
     *
     * @param userQry 用户查询
     * @return 用户信息列表
     */
    @Override
    public MultiResponse<UserDTO> getUserList(UserQry userQry) {
        AssertUtils.isTrue(CollectionUtils.isNotEmpty(userQry.getIds()), "查询id列表不能为空");
        List<Account> accounts = accountGateway.searchList(userQry);
        if (CollectionUtils.isNotEmpty(accounts)) {

            List<UserDTO> list = accounts.stream().map(account -> {
                UserDTO userDTO = CopyUtils.copy(account, UserDTO.class);
                userDTO.setName(account.getRealName());
                return userDTO;
            }).collect(Collectors.toList());
            return MultiResponse.of(list);
        }
        return MultiResponse.buildSuccess();
    }


}
```

## 客户端使用
### 添加依赖

```xml
<dependency>
    <groupId>cn.meshed.cloud.iam</groupId>
    <artifactId>meshed-cloud-iam-client</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```
### 使用

```java
package cn.meshed.cloud.rd.wrapper.user;

import cn.meshed.cloud.iam.account.UserRpc;
import cn.meshed.cloud.iam.account.data.AccountDTO;
import cn.meshed.cloud.iam.account.data.UserDTO;
import cn.meshed.cloud.iam.account.query.AccountPageQry;
import cn.meshed.cloud.iam.account.query.UserByOneQry;
import cn.meshed.cloud.iam.account.query.UserQry;
import com.alibaba.cola.dto.MultiResponse;
import com.alibaba.cola.dto.PageResponse;
import com.alibaba.cola.dto.SingleResponse;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * <h1>用户RPC包装类</h1>
 *
 * @author Vincent Vic
 * @version 1.0
 */
@Component
public class UserWrapper {

    @DubboReference
    private UserRpc userRpc;

    public UserDTO getUser(Long id) {
        UserByOneQry userByOneQry = new UserByOneQry();
        userByOneQry.setId(id);
        userByOneQry.setHasGrantedAuthority(false);
        SingleResponse<UserDTO> userInfo = userRpc.getUserInfo(userByOneQry);
        if (userInfo.isSuccess()) {
            return userInfo.getData();
        }
        return null;
    }

    public Map<Long, UserDTO> getUserMap(Set<Long> ids) {
        if (CollectionUtils.isNotEmpty(ids)) {
            UserQry userQry = new UserQry();
            userQry.setIds(ids);
            MultiResponse<UserDTO> userList = userRpc.getUserList(userQry);
            if (userList.isSuccess()) {
                return userList.getData()
                        .stream().collect(Collectors.toMap(UserDTO::getId, Function.identity()));
            }
        }
        return new HashMap<>();
    }
}

```
