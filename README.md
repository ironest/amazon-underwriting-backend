# amazon-underwriting-backend

### Setup a (dev) environment:

Create a `.env` file containing
* `DB_HOST=mongodb://localhost/auw-dev`
* `PORT=3000`

---

### API Documentation:

**Show Link**

Returns json data about a single link.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   * `id=[Mongo DB identifier of the Link to look up]`

* **Data Params**

  None

* **Success Response:**
  Code: `200`
  Content:
```js
{
  _id: "5e2690be73e08ade5954dbd5",
  name: "Click here to download",
  url: "http://www.domain.com.au/PDFs/filename.pdf"
}
```
 
* **Error Response:**
  Code: 404 NOT FOUND
  Content: `{ error : "Link doesn't exist" }`

* **Sample Call:**

```js
  axios.get("/links/5e2690be73e08ade5954dbe9")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
```

**Create Link**

Returns json data about the newly created link.

* **URL**

  /users

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

   **Required:**

   * `id=[Mongo DB identifier of the Section under which creating a Link]` 
   * `name=[Text of the Link]`
   * `url=[Url to be used as HREF]`

* **Success Response:**
  Code: `200`
  Content:
```js
{
  _id: "5e2690be73e08ade5954dbd5",
  name: "Click here to download",
  url: "http://www.domain.com.au/PDFs/filename.pdf"
}
```
 
* **Error Response:**
  Code: 404 NOT FOUND
  Content: `{ error : "Section doesn't exist" }`

* **Sample Call:**

```js
axios.post('/links', {
    _id: "5e2690be73e08ade5954dbd5",
    name: "Click here to download",
    url: "http://www.domain.com.au/PDFs/filename.pdf"
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

**Update Link**

Returns json data about a link with the updated state.

* **URL**

  /users/:id

* **Method:**

  `PUT` or `PATCH`
  
*  **URL Params**

   * `id=[Mongo DB identifier of the Link to update]` 

* **Data Params**

   **Required:**

   * `name=[New text for the Link]`
   * `url=[New url to be used as HREF]`

* **Success Response:**
  Code: `200`
  Content:
```js
{
  _id: "5e2690be73e08ade5954dbd5",
  name: "Click here to download",
  url: "http://www.domain.com.au/PDFs/filename.pdf"
}
```
 
* **Error Response:**
  Code: 404 NOT FOUND
  Content: `{ error : "Link doesn't exist" }`

* **Sample Call:**

```js
axios.put('/links/5e2690be73e08ade5954dbd5', {
    name: "Click here to download",
    url: "http://www.domain.com.au/PDFs/filename.pdf"
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```


**Delete Link**

Returns json data about the deleted link.

* **URL**

  /users/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   * `id=[Mongo DB identifier of the Link to delete]`

* **Data Params**

  None

* **Success Response:**
  Code: `200`
  Content:
```js
{
  _id: "5e2690be73e08ade5954dbd5",
  name: "Click here to download",
  url: "http://www.domain.com.au/PDFs/filename.pdf"
}
```
 
* **Error Response:**
  Code: 404 NOT FOUND
  Content: `{ error : "Link doesn't exist" }`

* **Sample Call:**

```js
  axios.delete("/links/5e2690be73e08ade5954dbe9")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
```