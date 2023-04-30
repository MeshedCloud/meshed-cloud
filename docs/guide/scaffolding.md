---
title: 脚手架
order: 1
group:
  title: 微服务搭建
  order: 5
---

## 项目构建
### 客户端
[![Meshed-Cloud](https://github-readme-stats.vercel.app/api/pin/?username=meshed-cloud&repo=meshed-cloud-client-archetype )](https://github.com/meshed-cloud-client-archetype)

```shell
mvn archetype:generate -DarchetypeGroupId=cn.meshed.archetype -DarchetypeArtifactId=meshed-cloud-client-archetype -DarchetypeVersion=1.0.0-SNAPSHOT -DgroupId=cn.meshed.cloud.rd  -DartifactId=meshed-cloud-rd-client  -Dversion=1.0.0-SNAPSHOT  -Dpackage=cn.meshed.cloud.rd -Ddomain=project
```

> -Ddomain 项目子领域概念
> 其他参数同正常maven原型

### 服务构建
[![Meshed-Cloud](https://github-readme-stats.vercel.app/api/pin/?username=meshed-cloud&repo=meshed-cloud-archetype )](https://github.com/meshed-cloud-archetype)

```shell
mvn archetype:generate -DarchetypeGroupId=cn.meshed.archetype -DarchetypeCatalog=local -DarchetypeArtifactId=meshed-cloud-archetype -DarchetypeVersion=1.0.0-SNAPSHOT -DgroupId=cn.meshed.cloud.rd  -DartifactId=meshed-cloud-rd  -Dversion=1.0.0-SNAPSHOT  -Dpackage=cn.meshed.cloud.rd -Ddomain=project -DprojectKey=rd
```
> -Ddomain 项目子领域概念
> -DprojectKey 项目唯一标识，一般为项目名称（不含格式）
> 其他参数同正常maven原型
