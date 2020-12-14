## Simulation

The following simulation can be done in Wealthcare application easily.

- Memory Saturation 
- Response Time high

## 1. Memory Saturation

Here are the APIs available to consume memory in `User` and `FinancialPlan` microservices.

- `startMemory/${increaseMemoryMB}`
- `consumeMemory/${memoryMB}`
- `clearMemory`
- `memorySize`

#### startMemory

Once this API is called in `User` or `FinancialPlan` services, for every new request to those services would consume additional memory specified in the url.  

Example: 

```
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/startMemory/100
```

Here the `user` service will start consuming extra `100 MB` memory for every new request to the service.

Sample script using this API is available [here](scripts/13-continous-traffic-saturation-high.sh).

#### consumeMemory

Once this API is called in `User` or `FinancialPlan` services, this will consume the given memory immediately for one time. This will is useful, if we want to bring the saturation immediately.

Example: 

```
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/consumeMemory/1000
```

Here the `user` service consuming  `1000 MB` memory immediately. 

Sample script using this API is available [here](scripts/21-saturation-high-start.sh).

#### clearMemory

Once this API is called in `User` or `FinancialPlan` services, this will clear the memory consumed so far in the service.

Example: 

```
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/clearMemory
```

#### memorySize

Once this API is called in `User` or `FinancialPlan` services, this will print the memory consumed so far in the service.

Example: 

```
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/memorySize
```


## 2. Response Time High

Here are the APIs available to increase response time in `User` and `FinancialPlan` microservices.

- `startSleep/${startMilliSeconds/${incrementMilliSeconds}/${requestCount}`
- `stopSleep`
- `sleepMilliSeconds`

#### startSleep

Once this API is called in `User` or `FinancialPlan` services, for any new request to those services there is an additional delay increased before it respond back, so that the response time will be increased gradually.  

Syntax: 

```
startSleep/${startMilliSeconds}/${incrementMilliSeconds}/${requestCount}
```

- `startMilliSeconds` : The delay in Milliseconds for the first request in the service.
- `incrementMilliSeconds` : To the existing delay in Milliseconds this delay in Milliseconds get added after every `requestCount` no of requests.
- `requestCount` : The `incrementMilliSeconds` of Milliseconds get added to the existing delay after every `requestCount` no of requests.


Example 1:

```
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/startSleep/2500/0/1
```

Here the `user` service will start delay by `2500` milliseconds.

Example 2:

```
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/startSleep/2500/200/100
```

Here the `user` service will start delay by `2500` milliseconds. Then for every `100 requests`, it will add `200 milliseconds` delay.

Here is the simple calculation for easy understanding.

- For the request no. 1   the delay would be 2500 milliseconds
- For the request no. 10  the delay would be 2500 milliseconds
- For the request no. 99  the delay would be 2500 milliseconds
- For the request no. 100 the delay would be 2700 milliseconds
- For the request no. 190 the delay would be 2700 milliseconds
- For the request no. 200 the delay would be 2900 milliseconds
- For the request no. 270 the delay would be 2900 milliseconds


Sample script :

Sample script using this API is available [here](scripts/11-responsetime-high-start.sh).

#### stopSleep

Once this API is called in `User` or `FinancialPlan` services, this will clear the delay flag. There is no simulated delay after this call.

Example: 

```
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/stopSleep
```

#### sleepMilliSeconds

Once this API is called in `User` or `FinancialPlan` services, this will print the current delay used in the simulation.

Example: 

```
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/sleepMilliSeconds
```
