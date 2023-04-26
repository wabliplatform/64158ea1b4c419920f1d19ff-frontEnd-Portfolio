# TempApi.PostsApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createposts**](PostsApi.md#createposts) | **POST** /posts | Creates the data
[**deleteposts**](PostsApi.md#deleteposts) | **DELETE** /posts/{postsId} | Delete the element
[**getAllposts**](PostsApi.md#getAllposts) | **GET** /posts/getAll | Get all the data
[**getposts**](PostsApi.md#getposts) | **GET** /posts/{postsId} | Get the element
[**updateposts**](PostsApi.md#updateposts) | **PUT** /posts/{postsId} | Updates the element



## createposts

> Posts createposts(posts)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostsApi();
let posts = new TempApi.Posts(); // Posts | data to be created
apiInstance.createposts(posts, (error, data, response) => {
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
 **posts** | [**Posts**](Posts.md)| data to be created | 

### Return type

[**Posts**](Posts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteposts

> deleteposts(postsId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostsApi();
let postsId = "postsId_example"; // String | the Id parameter
apiInstance.deleteposts(postsId, (error, data, response) => {
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
 **postsId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllposts

> [Posts] getAllposts()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostsApi();
apiInstance.getAllposts((error, data, response) => {
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

[**[Posts]**](Posts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getposts

> Posts getposts(postsId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostsApi();
let postsId = "postsId_example"; // String | the Id parameter
apiInstance.getposts(postsId, (error, data, response) => {
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
 **postsId** | **String**| the Id parameter | 

### Return type

[**Posts**](Posts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateposts

> Posts updateposts(postsId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostsApi();
let postsId = "postsId_example"; // String | the Id parameter
let opts = {
  'posts': new TempApi.Posts() // Posts | data to be updated
};
apiInstance.updateposts(postsId, opts, (error, data, response) => {
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
 **postsId** | **String**| the Id parameter | 
 **posts** | [**Posts**](Posts.md)| data to be updated | [optional] 

### Return type

[**Posts**](Posts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

