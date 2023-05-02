# TempApi.DescsApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createdescs**](DescsApi.md#createdescs) | **POST** /descs | Creates the data
[**deletedescs**](DescsApi.md#deletedescs) | **DELETE** /descs/{descsId} | Delete the element
[**getAlldescs**](DescsApi.md#getAlldescs) | **GET** /descs/getAll | Get all the data
[**getdescs**](DescsApi.md#getdescs) | **GET** /descs/{descsId} | Get the element
[**updatedescs**](DescsApi.md#updatedescs) | **PUT** /descs/{descsId} | Updates the element



## createdescs

> Descs createdescs(descs)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DescsApi();
let descs = new TempApi.Descs(); // Descs | data to be created
apiInstance.createdescs(descs, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descs** | [**Descs**](Descs.md)| data to be created | 

### Return type

[**Descs**](Descs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletedescs

> deletedescs(descsId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DescsApi();
let descsId = "descsId_example"; // String | the Id parameter
apiInstance.deletedescs(descsId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descsId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlldescs

> [Descs] getAlldescs()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DescsApi();
apiInstance.getAlldescs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Descs]**](Descs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getdescs

> Descs getdescs(descsId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DescsApi();
let descsId = "descsId_example"; // String | the Id parameter
apiInstance.getdescs(descsId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descsId** | **String**| the Id parameter | 

### Return type

[**Descs**](Descs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatedescs

> Descs updatedescs(descsId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DescsApi();
let descsId = "descsId_example"; // String | the Id parameter
let opts = {
  'descs': new TempApi.Descs() // Descs | data to be updated
};
apiInstance.updatedescs(descsId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descsId** | **String**| the Id parameter | 
 **descs** | [**Descs**](Descs.md)| data to be updated | [optional] 

### Return type

[**Descs**](Descs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

