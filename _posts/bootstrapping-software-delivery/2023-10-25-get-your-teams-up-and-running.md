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

Joining a new team is often painful and slow. Often you have to work out who to talk to, what software to install, request to be invited to meetings, hunt around for access to environments and repositories and many more tasks. Without clear documentation things will fall through the cracks giving vastly different onboarding experiences to new joiners. This posts goal is to streamline your JML process, deliverying value faster.

<!--more-->

To maintain focus I will be making a few assumptions across this series. For this article I assume that your product is well defined and teams are positioned around bounded contexts, allowing teams to work autonomously. Interactions outside the sub-products are intentional, keeping dependencies to a minimum. 


I also make the assumption that teams are cross-functional. All roles that are required to deliver the product are found within the teams. This varies from team to team- Some teams may need a data scientist or designer, others may create headless services with complex infrastructure needs. Team shapes will flex overtime depending on user needs, it is worth reviewing if your team shapes are optimal every few months to ensure everyone in the team is given the best oppertunity to deliver value. When putting a team together I turn to [Team Topologies](https://teamtopologies.com/”). Identifying the style of the team is important, whether it be stream-aligned, enabling, complicated-sub-system or platform team. This gives clarity inside and outside the team what their role is and how they contribute to the organisation.

Having a well defined set of Joiners/Movers/Leavers documentation will save the team time, give new joiners a brilliant first impression and deliver value faster.

## Visibility

### The organisation

We take our knowledge for granted, once embedded in an orgnisation for sometime it is easy to assume we all have the same level of understading and alignment. This makes onboarding tricky, a new joiner might have no idea what the organisation does, the products they create or the users they serve.

Having a clear and concise wiki with a group understanding that it is within everyones best interest to keep documentation up to date is important. I've been a tech lead and a developer for the majority of my career, I bring my own bias when compiling this list, offcourse there will be many missing items that are certainly important. Below is my lean opioniated list of what I find useful when joining a new team.

1. [Organisation or product elevator pitch](https://www.mindtools.com/aofwxxv/crafting-an-elevator-pitch) 
2. [Up to date Lean Value Tree](https://www.thoughtworks.com/insights/blog/digital-transformation/how-to-brew-a-perfect-strategy-responsibly-part-one)
3. Brief description of all roles
4. Abbreviations & acronyms dictionaries/ Glossaries
5. Product(s) overview and the personas they serve
6. Architecture, infrastructure and, security principles (More on this later)

<!-- TODO -->

### Within the Team

It is important that the organisation knows what each team does, what they are responsible for and how they interact with other teams. The authors of Team Topologies produced a wonderful template for a [team API](https://github.com/TeamTopologies/Team-API-template). I use this template as the entry page for a teams dedicated documentation repository. It gives just the right level of information to new joiners and other teams about the team. 


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
