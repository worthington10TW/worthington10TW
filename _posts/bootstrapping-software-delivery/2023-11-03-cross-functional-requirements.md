---
layout: post
title: Cross functional requirements
date:   2023-11-03 07:00:00 +0000
published: false
category: bootstrapping-software-delivery
image: /assets/2023-10-22-bootstrapping-software-delivery/boot.webp
tags:
  - Guides
  - Getting started
---

Cross functional requirements (CFR's) should be owned by the business. When setting up your software delivery capability this can be a hard ask. We have the best intentions to craft a set of well defined, testable cross functional requirements, however to do this we need to ask the organisation to become experts in maintainability, accessibility, resilience, security, privacy, reliability, compliance, disaster recovery to name just a few.

<!--more-->

The goal of this article is to get us up and running and to seed conversations with a sensible set of defaults.

## What happened to NFR’s?

Language is important, if we make the distinction between “Functional Requirements” and “Non Functional Requirements (NFR’s)" we remove the importance; declaring a requirement as non important could give the impression these are optional. 

A small change can have a significant impact. By naming these requirements as cross-functional we show these are just as important as functional requirements and highlight the cross cutting concerns. CFR specifies criteria that can be used to judge the operation of a system, rather than its functionality.

## Who owns CFR’s?

Many stakeholders have an interest in CFR’s, including product owner’s, the team, architects, security team, information governance, risk & compliance, data protection officers, customer and more. With so many different people owning and contributing to CFR’s it can be time consuming and tricky to get started. Seeding conversations with standards, guidelines and best practice should help to break down these barriers and reach alignment quickly. It's more important to get started and find out what works for you than creating the perfect set of CFR’s that are not open to change and evolution. 

## Shifting left

Shifting left refers to our path to production. On the left is our code on our machine and all the way to the right we have our release to production. Our environments in which we test gets progressively more prod-like and with that becomes more expensive. We want to reduce feedback loop time as much as possible. When following TDD we reduce this right down to minutes between validating a new line of code, however when it comes to CFR’s this can be sometime before we test against these requirements. Days, weeks or even months could go by before our code makes it to an environment in which we test against performance, load, maintainability or accessibility. At this point we have invested long periods of time into a solution that might not work. By pulling these left we reduce the feedback loop and can test if our solution is the right one. 

Many standards, guidelines and frameworks already exist including [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), [NIST Cybersecurity Framework](https://csrc.nist.gov/Projects/cybersecurity-framework/Filters#/csf/filters (CAF)), [NCSC Cyber Assessment Framework (CAF)](https://www.ncsc.gov.uk/collection/caf), [Center for Internet Security (CIS)Critical Security Controls](https://www.cisecurity.org/controls). These standards are mature and adopted by many, because of this a wide array of tools have been created to automate alignment to these standards, allowing us to shift our testing against these CFR's left.

### Getting started

There is a **huge** amount of cross functional requirements to discuss, including:

Availability
, Accessibility
, Audit and control
, Availability
, Backup
, Capacity current and forecast
, Certification
, Compatibility
, Compliance
, Configuration management
, Deployment
, Documentation
, Disaster recovery
, Efficiency
, Effectiveness
, Environmental protection
, Escrow
, Exploitability
, Extensibility
, Failure management
, Fault tolerance
, Legal and licensing
, Interoperability
, Maintainability
, Modifiability
, Network topology
, Open source
, Operability
, Performance / response time
, Platform compatibility
, Price
, Privacy
, Portability
, Quality
, Recoverability
, Reliability
, Reporting
, Resilience
, Response time
, Reusability
, Robustness
, Safety
, Scalability
, Security
, Stability
, Supportability
, Testability
, Usability.

Discussing all of these can be overwhelming with many of them overlapping, the thought of getting through this list can cause procrastination paralysis. Luckily we have so many well thought out standards that we can adopt these and get going pretty quickly. It's important to document and automate these as much as possible so everyone understands the constraints we will be working with.

I’ve selected a few that I believe will give our users a great experience on a secure and robust platform.

### Maintainability

I believe within a team code consistency is important. I’ve discussed the difficulty of onboarding 

### Accessibility

### Resilience

### Security

### Reliability

### Compliance

### Disaster Recovery
