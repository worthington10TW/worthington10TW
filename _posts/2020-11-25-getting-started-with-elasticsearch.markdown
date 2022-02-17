---
layout: post
title:  Getting started with elastic search
date:   2020-11-25 00:00:00 +0000
categories: getting-started workshop search
tech: 
    - elasticsearch
    - dotnet
    - C#
code: https://github.com/worthington10TW/ElasticsearchBrownBag
image: /assets/2020-11-25-getting-started-with-elasticsearch/elastic-elasticsearch-logo.webp
published: true
---

I recently engaged with a client that wanted to improve their search relevance and speed. We decided to run some experiments to see if elasticsearch would be a good fit. 

<!--more-->

We wanted to be as visible as possible, and open for anyone interested to look at what we are doing. Many of the engineering team had not worked with Lucence based search engines before. I remember when I first used lucene, I felt pretty lost. So I threw together some lunch and learns and opened them up to everyone that wanted to pop by and learn the basics of elasticsearch. 

[The deck that went with the workshop can be found here](https://hackmd.io/@worthington10tw/S16Ds3ycv#/){:target="_blank"  rel="noreferrer"} and there is a GitHub repo that will help spin up a single node instance and populate the search engine with some test data. 

This post covers the basics of elasticsearch, just enough to get up and running.

The running example of the workshop is a fictious university consisting of trainers and students.

## Elasticsearch

First off, its worth mentioning that [elasticsearch documentation is amazing](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html){:target="_blank"  rel="noreferrer"}. I hope to provide a brief overview, just enough to get going with elasticsearch; go check out the docs once you've decided to make the jump.

So, what is elasticsearch?

> [Elasticsearch is a distributed, RESTful search and analytics engine capable of addressing a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data for lightning fast search, fine‑tuned relevancy, and powerful analytics that scale with ease.](https://www.elastic.co/elasticsearch/){:target="_blank"  rel="noreferrer"}

Simple put, elasticsearch stores data, organises data and retrieves data.

To get started we can look a few of the key components that make up elasticsearch

- Documents
- Indexes
- (Types of) Nodes
- Shards
- Clusters

## Documents 

Lets start and the most relatable component- the data. A document is a record of data, they are stored as JSON (Key value pairs).

We can the add this into our search engine by using the REST API.

```curl
PUT trainer/_doc/1
{
  "name": "Matthew",
  "startDate": "2020-11-1",
  "interests": ["Search", "Baking"],
  "subjects": ["Java", "JS", "C#", "Elasticsearch"]
}
```

In this example we are adding our trainer to the trainer index (more on this later) and an ID of `1`. The body of this request contains the document that we want to index and search over.

If we then retrieve this document using we are returned the document and some extra information.

```curl
GET trainer/_doc/1
```

Returns 

```json
{
    "_index": "trainer",
    "_id": "1",
    "_version": 1,
    "_seq_no": 1,
    "_primary_term": 1,
    "found": true,
    "_source": {
        "name": "Matthew",
        "startDate": "2020-11-1",
        "interests": [
            "Search",
            "Baking"
        ],
        "subjects": [
            "Java",
            "JS",
            "C#",
            "Elasticsearch"
        ]
    }
}
```

The document is then returned with extra information- the ones I find the most useful being 

- _index
- _id
- _version
- _seq_no
- _source

### Creating a document

#### ID 

Identifier of our document ES will generate these when omitted. Personally in most cases I prefer to supply my own ID, I find it much easier to keep my search engine up to date when my document is updated.

#### Field

We have a few different ways to store data including

- lists
- dates
- numbers
- booleans
- ranges

#### What if my data is complex?

Sometimes our data is much more complex than what the basic fields can accomodate for. We have a few different methods for storing more complex data structures. 

These methods all have a use, however they also all have drawbacks. Its important to think about what type would be best for your usecase for each field. The cleaners your data is going in, the easier it will be to search later.

##### Object

```json
{
  "name": {
      "first": "Matthew",
      "last": "Worthington"
  }
}
```

These will then be flattened when stored like this

```json
{
  "name.first": "Matthew",
  "name.last": "Worthington"
}
```

##### Flat

This is when all the data is flattened into a single field, this method is particularly useful when dealing with large amounts of data with unknown fields as this can prevent defining too many fields which can cause memory errors.

However we also want to be careful when using this method as it treats the entire value as keywords which does not provide full search functionality.

We first update our mappings to set the property we would like flattened.

```curl
PUT trainer
{
  "mappings": {
    "properties": {
      "name": {
        "type": "text"
      },
      "information": {
        "type": "flattened"
      }
    }
  }
}
```

In this example we have a unstructured object called `information`, the payload varies document to document, we want the ability to search over this field, so we decide to store them by flattening the object.

```curl
POST trainer/_doc/1
{
    // TODO
  "name": "Matthew",
  "information": {
    "availability": "urgent",
    "timestamp": {
      "created": 1541458026,
      "closed": 1541457010
    }
  }
}
```

##### Nested 

We may want to store an array of objects, like this

```json
{
  "name": "Matthew",
  "lessons": [
    { 
        "name": "Super amazing session",
        "description": "Dolorem non voluptatem odio maiores minus. Amet nisi est recusandae veniam quasi maxime. Natus alias pariatur eos magni. Hic quo ipsa suscipit voluptas magni Pascal  nobis et rerum. " 
    },
    { 
        "name": "Slightly dull workshop",
        "description": "Dolorem non voluptatem odio maiores minus. Amet nisi est recusandae veniam quasi maxime. Natus alias pariatur eos magni. Hic quo ipsa suscipit voluptas magni Pascal  nobis et rerum. " 
    },
  ]
}
```

These will then be flattened when stored like this

```json
{
  "name": "Matthew",
  "lessons.Name": [ "Super amazing session", "Slightly dull workshop" ],
  "lessons.Description": [ "Dolorem non voluptatem odio maiores minus. Amet nisi est recusandae veniam quasi maxime. Natus alias pariatur eos magni. Hic quo ipsa suscipit voluptas magni Pascal  nobis et rerum. ", "Dolorem non voluptatem odio maiores minus. Amet nisi est recusandae veniam quasi maxime. Natus alias pariatur eos magni. Hic quo ipsa suscipit voluptas magni Pascal  nobis et rerum. "]
}
```

As we can see we now have 2 arrays with a string in each, this might be totally fine for your purpose, but this also means that we no longer maintain the relationship between `Name` and `Description`. If we need to maintain that relationship we can update our index mappings, setting lessons to a nested type.

```curl
PUT /trainer
{
  "mappings": {
    "properties": {
      "lessons": {
        "type": "nested" 
      }
    }
  }
}
```

These will now be stored as independent objects and maintain their relationship.

##### Join 
Parent child

#### What about locations?

- Geo
- long / lat
- polygons
- coordinate system (Cartesian)
- points
- geometries (shapes)

## Indexes

Indexes are the place elasticsearch keeps your documents The logical name which maps to one or more shards

We can explicitly create an index

```curl
PUT /trainer
{
  "settings": {
    "index": {
      "number_of_shards": 3,  
      "number_of_replicas": 2 
    }
  },
  "mappings": {
    "properties": {
      "bio":    { "type": "text" },  
      "subjects":  { "type": "keyword"  }, 
      "name":   { "type": "text"  }     
    }
  }
}
```

Or have elasticsearch create an index when adding a document when not exists.

I find that if I create my indexes explicitly I have an easier time source controlling my configuration and replicating my configuration across many environments.

### Adding many documents to an index

A particularly useful endpoint when indexing documents is the `_bulk` endpoint. You may have large amounts of data to index, if we used the above example of putting a single document we would very quickly run out of connections and indexing would take a very long time. 

We can send many updates in one request by using the `_bulk` endpoint.

```curl
POST _bulk
{ "index" : { "_index" : "trainer", "_id" : "1" } }
{ "field1" : "value1" }
{ "index" : { "_index" : "trainer", "_id" : "2" } }
{ "field1" : "value2" }
{ "index" : { "_index" : "trainer", "_id" : "2" } }
{ "field1" : "value2" }
```

On first impression this might look like an array of updates, however it does not have square brackets surrounding it.

When sending a bulk request we first send an object of intent- this will let elasticsearch know what the operation will be (In this example the first instruction is to index a document in the trainer index with the ID of 1), the second object will then be the data for this request (Similar to the payload when putting a single document). 

## Index alias

Rename your index Group many indexes

At our fictious university we have trainers and students, we want to search across people. An index alias of people containing teachers and pupils to the rescue!

[![index alias](/assets/2020-11-25-getting-started-with-elasticsearch/alias.png)](/assets/2020-11-25-getting-started-with-elasticsearch/alias.png)

## Nodes you should know about

Data nodes Ingest nodes Master nodes Client nodes

Note: Data nodes stores data and executes data-related operations such as search and aggregation Ingest nodes (Default role).Apply an ingest pipeline to a document in order to transform and enrich the document before indexing. With a heavy ingest load, it makes sense to use dedicated ingest nodes and to not include the ingest role from nodes that have the master or data roles. ETL

Master nodes in charge of cluster-wide management and configuration actions such as adding and removing nodes Client nodes forwards cluster requests to the master node and data-related requests to data nodes

## Other nodes

Tribe nodes Machine learning nodes

Note: Tribe nodes act as a client node, performing read and write operations against all of the nodes in the cluster Machine Learning nodes These are nodes available under Elastic’s Basic License that enable machine learning tasks. Machine learning nodes have xpack.ml.enabled and node.ml set to true.

## Data nodes

Contains indexes Data nodes host the shards
[![node](/assets/2020-11-25-getting-started-with-elasticsearch/node.png)](/assets/2020-11-25-getting-started-with-elasticsearch/node.png)

## Shards

Single lucene index Automatically managed by Elasticsearch We can configure primary and replica count Placed in random nodes across the cluster Indexes are split into 5 shards by default The rest should just work itself out

### Lucene

Open source Core search library Written in Java

### Replica shards

Used when primary fails Never on the same node as the primary shard Increased search performance

[![shard](/assets/2020-11-25-getting-started-with-elasticsearch/shard.png)](/assets/2020-11-25-getting-started-with-elasticsearch/shard.png)

## Cluster

One of more nodes Master node controllers cluster management Nodes all share the same cluster name

[![cluster](/assets/2020-11-25-getting-started-with-elasticsearch/cluster.png)](/assets/2020-11-25-getting-started-with-elasticsearch/cluster.png)

---

[The deck from the talk can be found here](https://hackmd.io/@worthington10tw/S16Ds3ycv#/){:target="_blank"  rel="noreferrer"}