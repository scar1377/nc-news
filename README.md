# Northcoders News - Front End

<img src="https://victorine.ch/wordpress/wp-content/uploads/2014/03/news.jpg"></a>

<p align="right"><font size=1>*The picture is from internet</font></p>

### **Introduction**

NC news is a Reddit-style news website. It is the front-end built using `React` for interacting with Northcoders News - SZA API.

It allows users to -

- view a list of all articles
- view a page for each topic with a list of related articles.
- view an individual article.
- view an individual article's comments.
- vote on an article and immediately see the change.
- post a new comment to an existing article (as a valid user from a drop-down box. e.g. 'tickle122').
- sort articles by:
  - date created
  - comment_count
  - votes
  - delete my own comments (as a valid user from a drop-down box. e.g. 'tickle122').

**Deployed using <a href="https://www.netlify.com/">Netlife</a>**

**To visit the hosted site please visit https://nc-news-sza.netlify.app/**

---

### **Prerequisites**

- react version 17.0.2
- axios 0.24.0

---

### **Installation**

#### To run this project, listed dependencies are needed

- date-fns
- react-dom
- react-router-dom
- react-scripts
- web-vitals

#### To run locally

1. Clone the repository

```
git clone https://github.com/scar1377/nc-news
```

2. Navigate into the repository

```
cd nc-news
```

3. Install the required dependencies by using

```
npm i
```

4. Launch the application locally

```
npm start
```

### **Link to API and back end repository**

**Link to API: https://szanews.herokuapp.com/api**

**Link to back end repo: https://github.com/scar1377/be-nc-news-sza**

In order to use `node-postgres` to connect to different databases, we need two .env files. Duplicate the `.env-example` and rename both of them to `.env.test` and `.env.development`.

in `.env.development`

```
PGDATABASE=development_database_name
```

in `.env.test`

```
PGDATABASE=test_database_name
```

**Now we can seed the local databases**

please run the following CLI

```
npm run setup-dbs
npm run seed
```

To check the tables please run (optional)

```
npm run check
```

To test all the endpoints please run

```
npm test
```
