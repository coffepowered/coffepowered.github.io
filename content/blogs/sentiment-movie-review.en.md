---
title: "1 - Movie sentiment review"
description: ""
image: pic10.jpg
keywords: ""
date: 2017-10-31T21:28:43-05:00
categories:
    - "project"
    - "nlp-movie-review"
katex: true
markup: "mmark"
draft: false
---

## Intro

Here, I just scratch the surface of NLP, by commenting [my colab notebook which builds the backend](https://colab.research.google.com/drive/19r9OS9SoBJMXM9GqAXgu6UEZSLwAqoM1?usp=sharing) of a sentiment movie review app from the ground up exploiting Keras' TextVectorization.

You are expected to be familiar with the following concepts and tools:
- Basics of Machine learning and data manipulation: did you try the Titanic dataset?
- Basics of Keras API: you got at least on neural network with Keras tutorial

I will try to provide crash-course on word vectors and text vectorization.

## Turning Words into numbers: Text vectorization
A computer can naturally manipulate and operate on numeric representations of entities but not on text or strings. Understanding and managing effectively at least one way of translating text into numbers-useful-for Machine Learning, should be in the tool belt of any ML practitioner. 

### Data representation: the need for good word vectors

Think of performing a regression: you want to associate a numeric output (y) to numeric inputs (X). The definition of (X) is easy when you have **tabular** data, i.e. the kind of data which is stored in an Excel spreadsheet or in a database. An example could be predicting the value of a used car (y) depending on its age (x1), kilometers (x2) and horsepower (x3) [^1].

To improve your predictions, you may also want to include a non-numeric attribute, as the car market segment (Compact, Suv, Wagon)? In this case, the information is available as a string but numeric representations are well-established and easy to create, as *one-hot-encoding*, which associates to each car (c) a 3D vector (i,j,k) whose entries are 1 if (c) posses the attribute and 0 otherwise. So, if (c) is a compact one, its "market segment" attribure will be (1,0,0) while if it is a station wagon it'll be (0,0,1).

Now think of having also **image data**. A lot of information there and the technology to *represent* an image using numbers has long been there. A quite intuitive representation for a grayscale image is a 2D matrix of pixel with values ranging from 0 (white) to (255) black. 
The problem with image data is that for [long time it has been difficult](https://hackernoon.com/a-brief-history-of-computer-vision-and-convolutional-neural-networks-8fe8aacc79f3) to build a model able to make sense of X to create a good (X)->(y) relationship.  Back to our value of used car example, a simple statistical model is not able to extract useful information (color, size, design) from a car image.

You may well be seeing where we are going. What happens when want to exploit unstructured **textual** data?

If we had to start from scratch, we may try to approach the problem by constructing one-hot-encoded word vectors.

Again, in our example, we may have a series of reviews associated with the car model, let's for instance take the pro & cons of Fiat 500 Convertible for a concrete example of [real-world data](https://www.edmunds.com/fiat/500/2019/convertible/):

> Nimble size for easy parking, Fairly comfortable ride quality for a car of this size, Lots of personality for the price, Disappointing fuel economy given the slow acceleration, Poor rear visibility with the convertible's top lowered.

Notice how descriptive (and difficult to preprocess) textual data may be. We have *30 different vocabulary words* here just for a single piece of text from the data. Even if we could build those one-hot vectors there are at least 2 very clear drawbacks:

1. the number of "numeric" values would be very high. In other words this representation has a very high cardinality: this is a size and computation problem[^2].
2. this representation is very sparse and your model can have a really hard time in finding good 

A possible solution to this is using Bag of Words model, another one -which I usually prefer- is via **words embedding**[^3].

## Words embedding: training from scratch

Writing... (this is connected with the original notebook, we just use movie-reviews toy problem).

## Words embedding: re-use

Writing... 

Remember that word embedding may shift with time!

* [Dynamic Word Embeddings](https://studios.disneyresearch.com/2017/08/06/dynamic-word-embeddings/)



[^1]: You have probably been explosed to Linear Regression (LR). In the particular case of LR you can also solve the relation in [closed form](https://www.cs.toronto.edu/~rgrosse/courses/csc311_f20/readings/notes_on_linear_regression.pdf). Anyway, what's really important here is that the inputs are already numbers.

[^2]: Moreover, such a representation is bad since it is not able to relate word co-occurrence: maybe having poor rear visibility is OK for convertibles but not for standard cars.

[^3]: an attentive reader may wonder why just **words**? In fact, one could create text embedding by using n-grams. 

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.