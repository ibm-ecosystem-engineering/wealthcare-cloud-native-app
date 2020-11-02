# Build and Deployment in OCP with MCM

If you want to use the default image provided with this app, you can skip the step 1 and goto the step 2 (Update Yaml files for deployment) directly. 


## 1. Build 

### 1.1 Build Angular UI  (Do this step only if you have modified the angular code)

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

### 1.2 Build microservices (You can skip this step, if you want to use the default images given)

Now compile all the microservices.

1. Make sure you have the right values for MQ, DB, urls and etc in the below property files. You can also override this in configmap yaml.

```
wealthweb/src/main/resources/application.properties
wealthusers/src/main/resources/application.properties
wealthfinancialplan/src/main/resources/application.properties
wealthnotification/src/main/resources/application.properties
```

The property file `wealthweb/src/main/resources/application.properties` contains the below two properties and they points to the `user` and `financialplan` microservices.

```
      configmap.prop.api.server.url.user: http://wealthcare-user-wealthcare-app-ns.<target_managed_cluster_url>
      configmap.prop.api.server.url.financialplan: http://wealthcare-financialplan-wealthcare-app-ns.<target_managed_cluster_url>
```

2. Goto the folder.

```
deployment/02-deployment-mcm
```

3. Run the below command.

```
sh 01-build-jar.sh
```

### 1.3 Make Docker Images

Now create docker images. 

Note: The jars created using the above step would be used in the below steps by the scripts.

#### Update Parameters

1. Open the file

```
deployment/02-deployment-mcm/build/11-build-dockerhub.sh
```

2. Update the below, image related parameters.

```
export IMAGE_SUFFIX=mcm-oss:0.0.1
export REGISTRY_USER=gandhicloudlab
```

IMAGE_SUFFIX : Image suffix with version.
REGISTRY_USER : Docker image registry user

**Note:** You need to change the REGISTRY_USER with your dockerhub id.

With the above parameter the image name would be created like the below.

```
docker.io/gandhicloudlab/welathcare-web-mcm-oss:0.0.1
docker.io/gandhicloudlab/welathcare-users-mcm-oss:0.0.1
docker.io/gandhicloudlab/welathcare-financialplan-mcm-oss:0.0.1
docker.io/gandhicloudlab/welathcare-notification-mcm-oss:0.0.1
```

3. Login into the docker registry

ex:
```
docker login -u gandhicloudlab
```

4. Goto the folder.

```
deployment/02-deployment-mcm-
```

5. Run the below command to create docker images

```
sh 02-build-dockerhub.sh
```
----------

## 2. Update Yaml files for deployment

1. In the below file

```
deployment/02-deployment-mcm/yaml/03-subscription/21-placement.yaml
```

find the text `mcm-managed-cp4a-cluster` and replace it with appropriate managed cluster.

2. In the below files

```
deployment/02-deployment-mcm/yaml/02-channel/21-deployable-web.yaml
deployment/02-deployment-mcm/yaml/02-channel/22-deployable-user.yaml
deployment/02-deployment-mcm/yaml/02-channel/23-deployable-financialplan.yaml
deployment/02-deployment-mcm/yaml/02-channel/24-deployable-notification.yaml
```

find the `image` tag like the below and update it appropriately.

```
      image: "gandhicloudlab/wealthcare-web-mcm-oss:0.0.1"
```

3. In the below file

```
wealthcare-cloud-native-app/deployment/02-deployment-mcm/yaml/02-channel/20-deployable-common.yaml
```

update the below two properties which are pointing to the `user` and `financialplan` microservices.

```
      apiUrlUser: http://wealthcare-user-wealthcare-app-ns.<target_managed_cluster_url>
      apiUrlFinancialplan: http://wealthcare-financialplan-wealthcare-app-ns.<target_managed_cluster_url>
```

You can also update the DB, MQ and etc. But they are optional.

----------

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

3. You can use the below user names and passwords.

```
sam/sam           (Wealth Manager)
sandy/sandy       (Customer)
harry/harry       (Business Manager)
```