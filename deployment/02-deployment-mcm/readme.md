# Build and Deployment in OCP with MCM

## 1. Build

### 1.1 Build Angular UI

The angular UI is used in `wealthweb` microservices. The angular source code is available in `wealthcare/wealthweb/angularUI/wealthcare-ui2`.

Do the following.

#### Makesure PROD url is enabled

1. Goto the below file.

```
wealthweb/angularUI/wealthcare-ui2/src/app/services/common-url-util.service.ts
```

2. Make sure `dev` is commented and `PROD` is uncommented at line number `34` and `35` like the below.

```
    // this.initUrlDev();
    this.initUrlPROD();
```

#### Build Angular

1. Goto the folder.

```
wealthweb/config
```

2. Run the below command.

```
sh buildAngular2.sh
```

The angular UI might have been compiled and the files are copied to folder

```
wealthweb/src/main/resources/static
```

### 1.2 Build microservices 

Now compile all the microservices.

1. Goto the folder.

```
deployment/01-deployment-ocp
```

2. Run the below command.

```
sh 01-build-jar.sh
```

### 1.3 Make Docker Images

Now we are going to create docker images. 

Note: The jars created using the above step would be used in the below steps by the scripts.

#### Update Parameters

1. Open the file

```
deployment/02-deployment-mcm/build/11-build-dockerhub.sh
```

2. Update the below, image related parameters.

```
export IMAGE_SUFFIX=mcm-dev:0.0.1
export REGISTRY_USER=mydockeruser
```

IMAGE_SUFFIX : Image suffix with version.

REGISTRY_USER : Docker image registry user

With the above parameter the image name would be created like the below.

```
docker.io/mydockeruser/welathcare-web-mcm-dev:0.0.1
docker.io/mydockeruser/welathcare-users-mcm-dev:0.0.1
docker.io/mydockeruser/welathcare-financialplan-mcm-dev:0.0.1
docker.io/mydockeruser/welathcare-notification-mcm-dev:0.0.1
```

3. Login into the docker registry

ex: 
```
docker login -u mydockeruser
```

4. Goto the folder.

```
deployment/02-deployment-mcm
```

5. Run the below command to create docker images

```
sh 02-build-dockerhub.sh
```

## 2. Update Yaml files for deployment

1. In the below file

```
deployment/02-deployment-mcm/yaml/03-subscription/21-placement.yaml
```

find the text `deb-managed-app-1` and replace it with appropriate managed cluster.

2. Open the below file

```
wealthcare/deployment/02-deployment-mcm/yaml/20-deployable-common.yaml
```

3. Update the below parameters which are related to MQ and DB. This will override the application.properties values. If you don't want to override you can copy the same values here from application.properties. 

```
      ibm.mq.channel: DEV.APP.SVRCONN
      ibm.mq.queueManager: qmgr
      ibm.mq.connName: 111.222.333.444(1414)
      ibm.mq.queueName.financialPlan: DEV.QUEUE.1
      ibm.mq.queueName.customer: DEV.QUEUE.2
      ibm.mq.queueName.wealthManager: DEV.QUEUE.3
      app.notification.from: test@test.com
      app.notification.cc: test@test.com
      spring.datasource.url: jdbc:h2:mem:/wcare
      spring.datasource.username: admin
      spring.datasource.password: admin
      spring.datasource.driver-class-name: org.h2.Driver
      spring.jpa.database-platform: org.hibernate.dialect.H2Dialect
```

Update url.user with 

```
      prop.api.server.url.user: http://wealthcare-user-wealthcare-app-ns.<target_managed_cluster_url>
```

Update url.financialplan with 

```
      prop.api.server.url.financialplan: http://wealthcare-financialplan-wealthcare-app-ns.<target_managed_cluster_url>
```


4. In the below files

```
deployment/02-deployment-mcm/yaml/02-channel/21-deployable-web.yaml
deployment/02-deployment-mcm/yaml/02-channel/22-deployable-user.yaml
deployment/02-deployment-mcm/yaml/02-channel/23-deployable-financialplan.yaml
deployment/02-deployment-mcm/yaml/02-channel/24-deployable-notification.yaml
```

find the `image` tag like the below and update it appropriately.

```
   image: "mydockeruser/welathcare-web-mcm-dev:0.0.1"
```


## 3 Deploying in OCP (MCM Hub)

1. Login into the MCM Hub cluster using  ` oc login...... `

2. Goto the folder.

```
deployment/02-deployment-mcm/install
```

3. Run the below command to deploy the app

```
sh 11-install-namespace-in-hub.sh
sh 12-install-app-in-hub.sh
```

## 4 Accessing the installed application

The application get installed in the mcm hub.

1. Login into the managed cluster with ` oc login`  command

2. Run the below command to find the routes installed.

```
oc get route -n wealthcare-app-ns
```

It may list the routes created. Access the route starting with `wealthcare-web-wealthcare-app-ns....`