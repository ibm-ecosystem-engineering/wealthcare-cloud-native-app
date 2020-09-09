# Configurations

The Configurations related to Database, MQ and Watson are given here.

## 1. Database

Wealthcare application can be used with any database.

### Schema definitions

Schema definitions are given for 3 databases.

- sql/schema-mysql.sql
- sql/schema-db2.sql
- sql/schema-h2.sql

You can run this schema and create database. 

### Data

Table data is given in the below file. This is common for all the databases

- sql/data.sql

You can run this data.sql and create data in database. 

### Database Configuration in application.properties

The database configuration to be done in the below 2 property files.

```
wealthfinancialplan/src/main/resources/application.properties
wealthusers/src/main/resources/application.properties
```

Sample configurations.

MySQL : 

```
spring.datasource.url=jdbc:mysql://11.22.33.44:3306/wealthcare
spring.datasource.username=root
spring.datasource.password=root
```

H2:
```
spring.datasource.url=jdbc:h2:mem:/wcare
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=admin
spring.datasource.password=admin
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

### H2 Database

H2 is a in-memory databases used by the springboot. 

If you want to use h2, it is not required to create the database. But copy the below 2 files.

- data.sql and schema.sql
- schema.sql (schema-h2.sql is renamed)
 
 into the folders

```
wealthfinancialplan/src/main/resources
wealthusers/src/main/resources
```


## 2. MQ

MQ is used for notification services in the below microservices.

- wealthusers
- wealthfinancialplan
- wealthnotification

MQ to be configured with the below properties.

```
ibm.mq.channel=DEV.APP.SVRCONN
ibm.mq.queueName.financialPlan=PROD.QUEUE.1
ibm.mq.queueName.customer=PROD.QUEUE.2
ibm.mq.queueName.wealthManager=PROD.QUEUE.3
ibm.mq.deadQueueName=DEV.DEAD.LETTER.QUEUE

ibm.mq.queueManager=qmgr
ibm.mq.connName=1.2.3.4(1414)
```

### OpenWhisk

Notifications are sent as mail through IBM Functions OpenWhisk. You need to create OpenWhisk functions and give the following parameters.

```
app.notification.from=test
app.notification.cc=test
app.notification.openwhisk.user=testconfigmap.test1.key
app.notification.openwhisk.password=test
app.notification.openwhisk.url=test
```

If you have someother mailsending solutions you can modify the code in the below file.
```
wealthnotification/src/main/java/com/wealth/wealthnotification/mail/OpenWhiskMail.java
```

Note: The MQ configuration scan be skipped if you don't want to have notification services. Leave the configuration as it is and application will not be breaking.

## 3. Watson Service

Helps to decide on the financial planning for the Customer. 

The property file `wealthfinancialplan/src/main/resources/application.properties` contains the below properties.

```
watson.financialPlan.url = https://test@test.com
watson.enabled = true
```

You can disable this service using the `watson.enabled` property.