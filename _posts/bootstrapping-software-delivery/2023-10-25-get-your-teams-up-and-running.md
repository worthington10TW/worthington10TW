---
layout: post
title:  Get your teams up and running
date:   2023-10-24 03:00:00 +0000
published: false
category: bootstrapping-software-delivery
image: /assets/2023-10-22-bootstrapping-software-delivery/boot.webp
tags:
  - Guides
  - Getting started
---

Joining a new team is often painful and slow. Often you have to work out who to talk to, what software to install, request to be invited to meetings, hunt around for access to environments and repositories, and many more tasks. Without clear documentation, things will fall through the cracks giving vastly different onboarding experiences to new joiners. This post's goal is to streamline your JML process, delivering value faster.

<!--more-->

To maintain focus I will be making a few assumptions across this series. For this article, I assume that your product is well-defined, teams are positioned around bounded contexts and, teams can work autonomously. Interactions outside the sub-products are intentional, keeping dependencies to a minimum.

I also assume that teams are cross-functional. All roles that are required to deliver the product are found within the teams. This varies from team to team; Some teams may need a data scientist or designer, and others may create headless services with complex infrastructure needs. Team shapes will flex over time depending on user needs, it is worth reviewing if your team shapes are optimal every few months to ensure everyone in the team is given the best opportunity to deliver value. When putting a team together I turn to [Team Topologies](https://teamtopologies.com/”). Identifying the style of the team is important, whether it be stream-aligned, enabling, complicated-sub-system, or platform team. This gives clarity inside and outside the team on what their role is and how they contribute to the organisation.

## The organisation

We take our knowledge for granted, once embedded in an orgnisation it is easy to assume we all have the same level of understanding and alignment. This makes onboarding tricky, a new joiner might have no idea what the organisation does, the products it creates, or the users it serves. Having a clear and concise wiki with a group understanding that it is in everyone's best interest to keep documentation up to date is important.

I've been a tech lead and a developer for the majority of my career, I brought my own bias when compiling this list and it is certainly not exhaustive. Below is my lean opinionated list of what I find useful when joining a new team.

### [Organisation or product elevator pitch](https://www.mindtools.com/aofwxxv/crafting-an-elevator-pitch)

What are we trying to achieve? Why are we here? We should all be equipped to answer these questions. If we can we should remove this smell as a priority. We get the most out of people when everyone understands our purpose.

### [Up-to-date Lean Value Tree](https://www.thoughtworks.com/insights/blog/digital-transformation/how-to-brew-a-perfect-strategy-responsibly-part-one)

What is currently important? Why are we placing bets here? what is our Goal? These are important questions. There are so many ways to move the needle, we need to understand the direction we are going in and conversely what we are not exploring. New joiners bring a fresh perspective, bets and hypotheses should be visible and open to challenge. Being visible allows for rich debate with our teams.

### Brief description of all roles

Many of us have worked in our roles for long periods. We underestimate the knowledge we have. Our new joiner(s) might have no experience with these roles or have a different understanding of them. Defining our roles keeps us honest and aids alignment.

### Abbreviations & acronyms dictionaries/ Glossaries

The TLA (Three-letter acronym) plagues organisations. How much information can you give in 3 tiny letters? New joiners have enough to take on without having to guess what we are talking about. Your TLA’s might be obvious to you but might throw off new joiners. Would my mate down the pub know what I do if I read them our documentation? If not it needs improving. Documentation to explain the sub-sector, project, and organisation is a necessity.

### Product(s) overview and the personas they serve

We build products that people use. A new joiner may not be a persona we serve, they might not have heard of our product before. We need to convince them that what we are building is valuable as much as the personas we serve. Everyone in the team should be inspired to build the best product for our users and this starts with understanding who they are.

### Architecture, infrastructure, and security principles

It is easy to say our teams are autonomous, but what does that mean? For me, autonomous teams are those that can deliver value to users mostly independently, they understand and work within the constraints of the organisation and are visible with their decisions. For this to work we must give teams clear and concise constraints for them to work within. Deciding on these principles is hard, there is a balance between setting the teams up for success and being overly constrictive, leading to delivery paralysis. More on this later.

## Within the Team

Having a well-defined set of Joiners/Movers/Leavers documentation will save the team time, give new joiners a brilliant first impression, and deliver value faster.

The organisation must know what each team does, what they are responsible for, and how they interact with other teams. The authors of Team Topologies produced a wonderful template for a [team API](https://github.com/TeamTopologies/Team-API-template). I use this template as the entry page for a team's dedicated documentation repository. It gives just the right level of information to new joiners and other teams.

### Team Topologies API

``` markdown
## Team API

Date:

* Team name and focus:
* Team type:
* Part of a Platform? (y/n) Details:
* Do we provide a service to other teams? (y/n) Details:
* What kind of Service Level Expectations do other teams have of us?
* Software owned and evolved by this team:
* Versioning approaches:
* Wiki search terms:
* Chat tool channels: #_____________ #_____________ #_____________
* Time of daily sync meeting:

> Team type: (Stream-Aligned, Enabling, Complicated Subsystem, Platform)

### What we're currently working on

* Our services and systems:
* Ways of working:
* Wider cross-team or organisational improvements:

### Teams we currently interact with

| Team name/focus | Interaction Mode | Purpose | Duration |
| --------------- | ---------------- | ------- | -------- |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |

> Team Interaction Modes: (Collaboration, X-as-a-Service, Facilitating)

### Teams we expect to interact with soon

| Team name/focus | Interaction Mode | Purpose | Duration |
| --------------- | ---------------- | ------- | -------- |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |
| .               |                  |         |          |


```

### Onboarding scripts

### Moving team

### Leaving
