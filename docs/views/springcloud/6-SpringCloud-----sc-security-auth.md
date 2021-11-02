---
title: SpringCloud-----sc-security-auth
date: 2021-07-06 16:51:00
sidebar: "auto"
categories:
 - 微服务-springcloud
tags:
 - springcloud
---

:::tip
六、构建微服务第六步，搭建认证服务
:::

<!-- more -->

#### 一、父级目录下构建Springboot项目---->New->Module->Spring Initializr
##### 1.1、新建一个模块
![cli](./public/images/ss-1.png)
##### 1.2、选择Spring Initializr
![cli](./public/images/ss-2.png)
##### 1.3、填写相关内容
![cli](./public/images/ss-3.png)
##### 1.4、点击到最后一步，暂时不进行选择jar
![cli](./public/images/ss-4.png)
##### 1.5、创建完成后目录结构
![cli](./public/images/ss-5.png)


#### 二、`pom.xml`文件更改，删除无用设置，将父级引用设置为sc-springcloud
##### ![cli](./public/images/ss-6.png)
#### 
#### 三、添加完子模块sc-security-auth后，进行对父模块sc-springcloud的pom.xml文件设置
![cli](./public/images/ss-7.png)
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
    </modules>
```


#### 五、进行sc-security-auth配置
##### 5.1、pom.xml导入相关所需包
```java
 <dependencies>
        <!--公共模块包-->
        <dependency>
            <groupId>org.example</groupId>
            <artifactId>sc-common</artifactId>
            <version>1.0-SNAPSHOT</version>
            <scope>compile</scope>
        </dependency>
        <!--mybatis plus依赖包-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.2.0</version>
        </dependency>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.2.0</version>
        </dependency>
        <!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
       <!-- security-->
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-web</artifactId>
        </dependency>
    </dependencies>
```
##### 5.2、application.yml配置相关参数
```java
############################################################
#
# 服务端口配置/数据库配置  端口：8080
#
############################################################
server:
  port: 8082
spring:
  application:
    name: sc-security-auth
  datasource:
    name: dataSource
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/springcloud?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    servlet:
      multipart:
        max-file-size: 50MB
        max-request-size: 50MB

############################################################
#
# mybatis-plus配置
#
############################################################
mybatis-plus:
  configuration:
    map-underscore-to-camel-case: true
  global-config:
    db-config:
      logic-delete-value: 1
      logic-not-delete-value: 0
  mapper-locations: classpath:mapper/*.xml

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
# 日志相关配置
#
############################################################
logging:
  level:
    com.springcloud.security.mapper: debug
  file:
    path: ./logs

```
##### 5.3、开始写一些简单的登录代码，目录结构如下（相关代码可由mybatis-plus相关生成，后续再写）

- controller
   - [LoginController.java](https://www.yuque.com/attachments/yuque/0/2021/java/21821479/1630046832243-56e609a2-438e-405e-8250-6d81972121db.java?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fjava%2F21821479%2F1630046832243-56e609a2-438e-405e-8250-6d81972121db.java%22%2C%22name%22%3A%22LoginController.java%22%2C%22size%22%3A2332%2C%22type%22%3A%22%22%2C%22ext%22%3A%22java%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22ub435bd5f-0834-474c-96c5-357409197fb%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u8152ab99%22%2C%22card%22%3A%22file%22%7D)
- entity
   - [User.java](https://www.yuque.com/attachments/yuque/0/2021/java/21821479/1630046840970-e9ff99ec-0794-4e8c-a030-3b796c4d88be.java?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fjava%2F21821479%2F1630046840970-e9ff99ec-0794-4e8c-a030-3b796c4d88be.java%22%2C%22name%22%3A%22User.java%22%2C%22size%22%3A1721%2C%22type%22%3A%22%22%2C%22ext%22%3A%22java%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22u6205b8d1-3902-4cd7-8303-0eca843459e%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u2584410e%22%2C%22card%22%3A%22file%22%7D)
- mapper
   - [UserMapper.java](https://www.yuque.com/attachments/yuque/0/2021/java/21821479/1630046852346-c6ba7716-a7d8-44bf-986f-4c19de00e7e0.java?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fjava%2F21821479%2F1630046852346-c6ba7716-a7d8-44bf-986f-4c19de00e7e0.java%22%2C%22name%22%3A%22UserMapper.java%22%2C%22size%22%3A351%2C%22type%22%3A%22%22%2C%22ext%22%3A%22java%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22u44624067-6925-439b-93c6-1267dcb0f15%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u50c437c8%22%2C%22card%22%3A%22file%22%7D)
- service
   - [IUserService.java](https://www.yuque.com/attachments/yuque/0/2021/java/21821479/1630046878457-aacc877c-5998-4145-a5e9-fdcab011c9c8.java?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fjava%2F21821479%2F1630046878457-aacc877c-5998-4145-a5e9-fdcab011c9c8.java%22%2C%22name%22%3A%22IUserService.java%22%2C%22size%22%3A269%2C%22type%22%3A%22%22%2C%22ext%22%3A%22java%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22u54d5bb49-36a3-484f-bb02-36eece5fd19%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22ud7e35895%22%2C%22card%22%3A%22file%22%7D)
      - impl
         - [UserServiceImpl.java](https://www.yuque.com/attachments/yuque/0/2021/java/21821479/1630046885711-3d971e1d-c102-4b8a-8d9b-25b94edd2798.java?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fjava%2F21821479%2F1630046885711-3d971e1d-c102-4b8a-8d9b-25b94edd2798.java%22%2C%22name%22%3A%22UserServiceImpl.java%22%2C%22size%22%3A800%2C%22type%22%3A%22%22%2C%22ext%22%3A%22java%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22uc9166b4c-9538-4f1d-a9d7-832bc6a882c%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u15b4e06d%22%2C%22card%22%3A%22file%22%7D)
- resources-->mapper
   - [UserMapper.xml](https://www.yuque.com/attachments/yuque/0/2021/xml/21821479/1630046913754-869b3d30-8544-4cf9-bfea-e5c06cbdb982.xml?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fxml%2F21821479%2F1630046913754-869b3d30-8544-4cf9-bfea-e5c06cbdb982.xml%22%2C%22name%22%3A%22UserMapper.xml%22%2C%22size%22%3A220%2C%22type%22%3A%22text%2Fxml%22%2C%22ext%22%3A%22xml%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22ue8101cb4-673a-4b83-af19-bc92993752c%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u4ce36c00%22%2C%22card%22%3A%22file%22%7D)

![cli](./public/images/ss-8.png)
##### 
##### 5.4、在SecurityAuthApplication启动类加上注解**@EnableDiscoveryClient，**开启security-auth服务
![cli](./public/images/ss-9.png)
#### 六、配置完成后，启动服务(eureka->security-gateway)
![cli](./public/images/ss-10.png)


#### 七、访问eureka服务，并输入账户密码admin，admin
![cli](./public/images/ss-11.png)

#### 八、大功告成
![cli](./public/images/ss-12.png)


#### 九、测试登录接口
##### 9.1、通过该服务端口8082测试
![cli](./public/images/ss-13.png)
##### 9.2、通过网关服务8080路由转发测试
![cli](./public/images/ss-14.png)
