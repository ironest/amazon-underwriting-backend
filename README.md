# amazon-underwriting-backend

### Getting started:

1. Clone the repository: `git clone https://github.com/ironest/amazon-underwriting-backend.git`

2. Create a `.env` file containing
   * `DB_HOST=mongodb://localhost/auw-dev`
   * `PORT=3000`

3. Start the project: `npm start`
---

### API Documentation:

**Pages of the website**

| Purpose            | Method           | Endpoint        | URL Params                      | Data Params                      |
|--------------------|------------------|-----------------|---------------------------------|----------------------------------|
| List of all pages  | `GET`            | `/pages`        | None                            | None                             |
| Show one page      | `GET`            | `/pages/:id`    | `id=[Mongo _id of the Page]`    | None                             |

**Sections grouping links**

| Purpose            | Method           | Endpoint        | URL Params                      | Data Params                      |
|--------------------|------------------|-----------------|---------------------------------|----------------------------------|
| Show one section   | `GET`            | `/sections/:id` | `id=[Mongo _id of the Section]` | None                             |
| Update one section | `PUT` or `PATCH` | `/sections/:id` | `id=[Mongo _id of the Section]` | `name=[New name of the section]` |

**Links in the side bar**

| Purpose            | Method           | Endpoint        | URL Params                      | Data Params                      |
|--------------------|------------------|-----------------|---------------------------------|----------------------------------|
| Show one link      | `GET`            | `/links/:id`    | `id=[Mongo _id of the link]`    | None                             |
| Update one link    | `PUT` or `PATCH` | `/links/:id`    | `id=[Mongo _id of the link]`    | `name=[New name of the link]`    |
| Delete one link    | `DELETE`         | `/links/:id`    | `id=[Mongo _id of the link]`    | `name=[New name of the link]`    |
| Create one link    | `POST`           | `/links`        | None                            | `name=[Text for the link]`<br/>`url=[Url of the link]`<br/>`id=[Mongo _id of the Section]` |

**Business Information**

| Purpose            | Method           | Endpoint        | URL Params                      | Data Params                      |
|--------------------|------------------|-----------------|---------------------------------|----------------------------------|
| Show information   | `GET`            | `/info`         | None                            | None                             |
| Update information | `PUT` or `PATCH` | `/info`         | None                            | `footer_info`<br />`childcare_info`<br />`hbb_info`<br/>`accident_info`<br/>See below for more details |

```js
{
  footer_info: {
    website: {
      name: "Amazon Underwriting Pty Ltd",
      url: "https://www.amazonunderwriting.com.au/index.html"
    },
    address: "52 Chisholm Street, Darlinghurst NSW 2010",
    AFSL: "482029",
    ABN: "17 605 879 507"
  }
}
```
or
```js
{
  childcare_info: {
    tel: "(02) 9357 1798",
    email: "gida@amazonunderwriting.com.au"
  }
}
```
or
```js
{
  hbb_info: {
    tel: "(02) 9357 1798 (press line 2)",
    email: "info@amazonunderwriting.com.au"
  },
}
```
or
```js
{
  accident_info: {
    tel: "(02) 9357 1798",
    email: "toni@amazonunderwriting.com.au"
  }
}
```
or
```js
{
  contact_info: {
    tel: "+61 2 9357 1798",
    email: "info@amazonunderwriting.com.au"
  }
}
```

**Newsletter data**

| Purpose            | Method           | Endpoint        | URL Params                      | Data Params                      |
|--------------------|------------------|-----------------|---------------------------------|----------------------------------|
| Show one News      | `GET`            | `/news/:id`    | `id=[Mongo _id of the news]`    | None                             |
| Update one News    | `PUT` or `PATCH` | `/news/:id`    | `id=[Mongo _id of the news]`    | `name=[New name of the link]`    |
| Delete one News    | `DELETE`         | `/news/:id`    | `id=[Mongo _id of the news]`    | `name=[New name of the link]`    |
| Create one News    | `POST`           | `/news`        | None                            | `name=[Text for the link]`<br/>`url=[Url of the link]`<br/>`id=[Mongo _id of the Section]` |

---

### Responses Documentation:

* **Success Response:**

  * Code: `200`
```js
{
  _id: "5e2690be73e08ade5954dbd5",
  name: "Click here to download",
  url: "http://www.domain.com.au/PDFs/filename.pdf"
}
```
 
* **Error Response:**

  * Code: `404`
  ```js
  {
    error: "Resource doesn't exist"
  }
  ```

  * Code: `500`
  ```js
  {
    error: "<Any error on the backend>"
  }
  ```