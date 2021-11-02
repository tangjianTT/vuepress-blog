---
title: SpringCloud-----sc-provide-server
date: 2021-07-05 16:51:00
sidebar: "auto"
categories:
 - 微服务-springcloud
tags:
 - springcloud
---

:::tip
五、构建微服务第五步，搭建提供者服务
:::



<!-- more -->


### 一、父级目录下构建Springboot项目---->New->Module->Spring Initializr
#### 1.1、新建一个模块
![cli](./public/images/sp-1.png)
#### 1.2、选择Spring Initializr
![cli](./public/images/sp-2.png)
#### 1.3、填写相关内容
![cli](./public/images/sp-3.png)
#### 1.4、点击到最后一步，暂时不进行选择jar
![cli](./public/images/sp-4.png)
#### 1.5、创建完成后目录结构
![cli](./public/images/sp-5.png)


### 二、`pom.xml`文件更改，删除无用设置，将父级引用设置为sc-springcloud
#### ![cli](./public/images/sp-6.png)
### 
### 三、添加完子模块sc-provide-server后，进行对父模块sc-springcloud的pom.xml文件设置
![cli](./public/images/sp-7.png)
```java
  <modules>
        <!--eureka注册服务-->
        <module>sc-eureka-server</module>
        <!--公共模块服务-->
        <module>sc-common</module>
        <!--网关服务-->
        <module>sc-api-gateway</module>
        <!--权限登录服务-->
        <module>sc-security-auth</module>
        <!--提供者服务-->
        <module>sc-provide-sever</module>
    </modules>
```


### 四、进行sc-provide-server配置
#### 4.1、pom.xml导入相关包
```java
 <dependencies>
        <!--公共模块包-->
        <dependency>
            <groupId>org.example</groupId>
            <artifactId>sc-common</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
        <!--mybatis plus依赖包-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.2.0</version>
        </dependency>
        <!--locadate/locadatetime的时间依赖-->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis-typehandlers-jsr310</artifactId>
            <version>1.0.2</version>
        </dependency>
        <!--mybatis plus生成代码-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.2.0</version>
        </dependency>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-core</artifactId>
            <version>3.2.0</version>
            <scope>compile</scope>
        </dependency>
        <!-- mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.18</version>
        </dependency>
    </dependencies>
```
#### 4.2、application.yml配置相关参数
```java
############################################################
#
# 服务端口配置/数据库配置  端口：8085
#
############################################################
server:
  port: 8085
spring:
  application:
    name: sc-provide-server
  datasource:
    name: dataSource
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/springcloud?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password:
    servlet:
      multipart:
        max-file-size: 50MB
        max-request-size: 50MB

############################################################
#
# eureka注册地址配置
#
############################################################
eureka:
  client:
    service-url:
      register-with-eureka: false
      fetch-registry: false
      defaultZone: http://admin:admin@localhost:8761/eureka/

############################################################
#
# mybatis-plus配置
#
############################################################
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    map-underscore-to-camel-case: true
  mapper-locations: /mapper/*Mapper.xml

```
#### 4.3、创建一个controller层，随意创建一个TestController类，进行测试
```java
package com.springcloud.provide.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author TJ
 * @description TODO
 * @date 2021/8/27 15:38
 **/
@RequestMapping("/test")
@RestController
public class TestController {

    @RequestMapping("/a")
    public String a(){
        return "123";
    }
}

```
#### 4.4、在ProvideApplication启动类加上注解**@EnableDiscoveryClient，**开启provide服务
![cli](./public/images/sp-8.png)
### 六、配置完成后，启动服务
![cli](./public/images/sp-9.png)


### 五、访问eureka服务，并输入账户密码admin，admin
![cli](./public/images/sp-10.png)


### 六、大功告成
![cli](./public/images/sp-11.png)




