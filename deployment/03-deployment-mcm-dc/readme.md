# Build and Deployment in OCP with MCM and Monitoring

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
deployment/03-deployment-mcm-dc
```

3. Run the below command.

```
sh 01-build-jar.sh
```

### 1.3 Make Docker Images

Now create docker images. 

Note: The jars created using the above step would be used in the below steps by the scripts.

#### Download Runtime Data collector

1. Download the runtime data collector using info the below url.

https://www.ibm.com/support/knowledgecenter/SSFC4F_2.1.0/icam/download_j2se_dc.html


2. Copy the `j2se_datacollector.tgz` file into the below folders.

```
wealthweb/config-icam/
wealthusers/config-icam/
wealthfinanciaplan/config-icam/
wealthnotification/config-icam/
```

#### Update Parameters

1. Open the file

```
deployment/03-deployment-mcm-dc/build/11-build-dockerhub.sh
```

2. Update the below, image related parameters.

```
export IMAGE_SUFFIX=mcm-200-dc-oss:0.0.1
export REGISTRY_USER=gandhicloudlab
```

IMAGE_SUFFIX : Image suffix with version.
REGISTRY_USER : Docker image registry user

**Note:** You need to change the REGISTRY_USER with your dockerhub id.

With the above parameter the image name would be created like the below.

```
docker.io/gandhicloudlab/welathcare-web-mcm-200-dc-oss:0.0.1
docker.io/gandhicloudlab/welathcare-users-mcm-200-dc-oss:0.0.1
docker.io/gandhicloudlab/welathcare-financialplan-mcm-200-dc-oss:0.0.1
docker.io/gandhicloudlab/welathcare-notification-mcm-200-dc-oss:0.0.1
```

3. Login into the docker registry

ex:
```
docker login -u gandhicloudlab
```

4. Goto the folder.

```
deployment/03-deployment-mcm-dc
```

5. Run the below command to create docker images

```
sh 02-build-dockerhub.sh
```
----------

## 2. Update Yaml files for deployment

1. In the below file

```
deployment/03-deployment-mcm-dc/yaml/03-subscription/21-placement.yaml
```

find the text `mcm-managed-cp4a-cluster` and replace it with appropriate managed cluster.


2. In the below files

```
deployment/03-deployment-mcm-dc/yaml/02-channel/21-deployable-web.yaml
deployment/03-deployment-mcm-dc/yaml/02-channel/22-deployable-user.yaml
deployment/03-deployment-mcm-dc/yaml/02-channel/23-deployable-financialplan.yaml
deployment/03-deployment-mcm-dc/yaml/02-channel/24-deployable-notification.yaml
```

find the `image` tag like the below and update it appropriately.

```
      image: "gandhicloudlab/wealthcare-web-mcm-200-dc-oss:0.0.1"
```

3. In the below file, make sure you have the right values for MQ, DB, urls and etc.

```
wealthcare-cloud-native-app/deployment/03-deployment-mcm-dc/yaml/02-channel/20-deployable-common.yaml
```

4. Update the below two properties which are pointing to the `user` and `financialplan` microservices.

```
      apiUrlUser: http://wealthcare-user-wealthcare-app-ns.<target_managed_cluster_url>
      apiUrlFinancialplan: http://wealthcare-financialplan-wealthcare-app-ns.<target_managed_cluster_url>
```
----------
## 3 Deploying in OCP (MCM Hub)

### 3.1 Log in to the hub cluster as an **account operator**

Login into hub cluster as an **account operator**. If you don't have operator user, stick to the account administrator user.

```
cloudctl login -a <cluster URL> -u <account-admin-username> -p <account-operator-password> --skip-ssl-validation -c <account ID or name> -n <namespace>
```

### 3.2 Install the app in Hub

1. Goto `deployment/03-deployment-mcm-dc/install` folder in command prompt

2. Run the below command to install.

```
sh 12-install-app-in-hub.sh
```

The application get installed in the mcm hub. Based the placement rule the deployables are placed on the right managed cluster.

----------
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

----------
## References

There is a detailed documentation on Deploying  Runtime data collector enabled MCM application is given in the below urls.

https://www.ibm.com/support/knowledgecenter/SSFC4F_2.1.0/icam/config_j2se_dc_intro.html
https://www.ibm.com/support/knowledgecenter/SSFC4F_1.3.0/icam/config_j2se_dc_intro.html


#### MCM 1.3.0
https://developer.ibm.com/recipes/tutorials/installing-runtime-data-collector-instrumented-app-and-monitoring-mcm-golden-signals/

https://github.com/GandhiCloudLab/mcm-goldensignals-upro

