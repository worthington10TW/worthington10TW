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
  - Cross functional requirements
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

Understanding what to test and what good looks like is our first task, luckilyl many standards, guidelines and frameworks already exist including [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), [NIST Cybersecurity Framework](https://csrc.nist.gov/Projects/cybersecurity-framework/Filters#/csf/filters (CAF)), [NCSC Cyber Assessment Framework (CAF)](https://www.ncsc.gov.uk/collection/caf), [Center for Internet Security (CIS)Critical Security Controls](https://www.cisecurity.org/controls). These standards are mature and adopted by many, because of this a wide array of tools have been created to automate alignment to these standards, allowing us to shift our testing against these CFR's left.

### Getting started

There is a **huge** number of cross functional requirements to discuss, including:

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

Team autonomy helps us go faster by reducing lengthy approvals to reach consistency where consistency is not most valuable. If our teams are positioned around a bounded context and own their code there is little value in cross team code consistency if teams rarely contribute to other teams repositories. The time spent to align many teams will not be made back by increased development productivity. For the same reason code inconsistency within the team can slow us down. Having to familiarise ourselves with everyone's individual code style each time we contribute to the codebase can be slow and may need discussion. 

Our rulesets should work for us, they should help to keep consistency and reduce cognitive load, they should also be open to challenge. We may find that a particular rule does not allow us to write the best quality code for the task, hopefully these are anomalies and should trigger a constructive conversation around them. In some cases we may find ignoring the rule for a particular code block is all we need, in other circumstances we may find the rule does not work for us at all, in these cases the rules should be updated and an Architecture Decision Record, ADR (More on these in the next post) should be created to capture our discussions, highlighting the consequence of our change.

#### Static code analysis

There are many excellent paid static code analysis tools including [SonarQube](https://www.sonarsource.com/products/sonarqube/), [Klockwork](https://www.perforce.com/products/klocwork) [Snyk](https://snyk.io/) and [Embold](https://embold.io/product/) to name a few. When starting a project the approval times to get these setup might not be desirable, as a minimum I ask the team to implement code linting tools into their [pre-commit hooks](https://pre-commit.com/) and pipelines to ensure only high code quality can progress through our path to production. 
There are many style guides and tools you may want to consider however it is easy to get bogged down trying to pick the perfect one. Picking a tool and tweaking the ruleset over time is more important than not having one at all. Below is a list of my go-to tools when starting up a project. I use these in my IDE, pre-commit hooks and pipeline to ensure alignment. 

| Language | Tools |
| -------- | ---------------- |
| Java | [PMD](https://pmd.github.io/), [Checkstyle](https://checkstyle.sourceforge.io/) [SpotBugs](https://spotbugs.github.io/) |
| C# | [Roslyn's built in NETAnalyzers](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview?tabs=net-7) with [StyleCop](https://www.nuget.org/packages/StyleCop.Analyzers/) |
| Python | [Flake8](https://flake8.pycqa.org/en/latest/) |
| JavaScript, JSX, Typescript | [ESLint](https://eslint.org/) |

#### Vulnerabilities

Pretty quickly your project will have dependencies, these come with some level of risk. Luckily NIST maintain the [National Vulnerability Database (NVD)](https://nvd.nist.gov/vuln/search), we also have many tools to stay on top of your dependency management including [Dependabot](https://github.com/dependabot) which has been acquired by GitHub and therefore Microsoft. I’d strongly recommend enabling Dependabot across all of your repositories if you’re using GitHub. It makes managing dependency vulnerabilities a breeze, once enabled and setup (By adding `/.github/dependabot.yml` file into your repository [following this guide](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file) ) You’ll start receiving alerts when vulnerabilities are detected and pull requests are automatically generated to reduce the burden on the team.

There are also many tools we can use locally to highlight vulnerabilities including 

| Language | Tools |
| -------- | ---------------- |
| Maven | [OWASP dependency check](https://jeremylong.github.io/DependencyCheck/dependency-check-maven/) |
| NuGet | [dotnet CLI `dotnet list package --vulnerable`](https://devblogs.microsoft.com/nuget/how-to-scan-nuget-packages-for-security-vulnerabilities/) |
| PyPI | [Trail of Bits pip-audit](https://pypi.org/project/pip-audit/) |
| NPM | [NPM Audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)  |


There is also lots of discussion around dependency scanning in your pipeline. Some argue that adding dependency checking into your main pipeline will force developers to fix vulnerabilities before releasing any new code and without doing this dependency management priority will drop. I take a different view, of course there should be a priority on dependency management and should be baked into our ways of working. If there is a critical vulnerability detected it should be the team's top priority to fix the issue and release a new version of our code. However our main pipeline is triggered by a code change and vulnerabilities are raised outside of this, by tightly coupling these together we add unnecessary friction to our release process which can have negative impacts including mixing our feature updates and vulnerabilities fixes in the same releases increasing scope of our testing. When updating dependencies we should give these the same level of testing and scrutiny as our features, the authors have published a change to their package, those could impact how we use the dependency. By making our release process more difficult we may see teams rush through updates so they can push their current story through as quickly as possible. I believe we should give teams adequate time to test their changes and reduce the number of variables as much as possible. I prefer running a nightly dependency check, using the results as a talking point during standup to assign an owner to the packages that need to be updated, allowing our pipeline to flow and be releasable.

#### Architecture

In some circumstances there may be a need to keep a close architectural style in your codebase. These can be useful when working on large codebases with many teams working across them, however when working with smaller microservices I find these can be an overhead that doesn't tend to pay off with much benefit. When working in large multi-team monoliths having a tool like Java’s [ArchUnit](https://www.archunit.org/userguide/html/000_Index.html#_introduction) can help keep the codebase consistent.

### Accessibility

[I’ve previously written about my love for semantic HTML](https://mzworthington.co.uk/guides/how-what-why). We can build anything with HTML but without understanding what features are on offer we run the risk of creating something beautiful for us and our machine only, leaving out those that require screen readers and other aids. [WCAG 2.1](https://www.w3.org/TR/WCAG21/) is a set of guidelines outlining best practices for web content. The [A11y Project](https://www.a11yproject.com/checklist/) produce a brilliant checklist and resources focused around accessibility. If I’m producing something for the web I feel a minimum is to align to these standards. [BrowserStack has a brilliant article on some of the common pitfalls](https://www.browserstack.com/guide/common-web-accessibility-issues).

We have a variety of tools to test compliance to these guidelines available to us. Chrome users have [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) baked into dev tools. This gives a user friendly view of a website's accessibility, performance, SEO and PWA alignment. 

To increase software delivery performance we want to automate testing and pull as far left as possible. Accessibility is no exception to this, adding accessibility tests to check alignment to WCAG 2.1 guidelines into our pipeline will ensure our site remains accessible.

My go-to browser testing tool is [Cypress](https://www.cypress.io/), they offer A11y support via the [Axe](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/blogs__a11y) plugin, which makes testing for accessibility a breeze, we simply inject the Axe plugin and check the page against the A11y guidelines.

```js
/// <reference types="cypress" />
describe('A11y passes', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('accessibility check', () => {
    cy.contains('This page should pass A11y checks')
    cy.injectAxe()
    cy.checkA11y()
  })
})
```

> [https://github.com/cypress-io/cypress-example-recipes](https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/blogs__a11y/cypress/e2e/passing-spec.cy.js)

Adding accessibility testing into your code needn't be a heavy challenging task, by selecting the right tools we can ensure every commit remains accessible.

### Cyber resilence

The National Cyber Security Centre (NCSC) uses the term Cyber Resilience to group many groups cross functional requirements. We are able to qualify our resilience by assessing ourselves against the [Cyber Assessment Framework (CAF](https://www.ncsc.gov.uk/collection/caf/cyber-assessment-framework)). The CAF provides valuable insight on how to manage risk, protect against malicious attacks, detecting events and minimising impact. These objectives are appropriate for every product that provides a service to real users, not limited to Critical National Infrastructure (CNI).

#### Automated governance

With the rise of serverless, microservices, and nanoservices we’ve observed an increase in change rate of our infrastructure. An increased rate of change comes with a perception of increased risk. Without testing these changes this perception is not ill founded, a small change to our infrastructure-as-code has the potential to pull down services, block network connections or even destroy data. Our goal is to empower teams and increase delivery speed, but with so much on the line an easy suggestion would be to introduce lengthy peer reviews and release trains. There is a better way, we can automate our governance. By adopting compliance-as-code and policy-as-code we can give clear guidance of our constraints in code, guiding our engineers and automating alignment, giving us confidence to practise CI/CD.

##### Open Policy Agent (OPA)

[OPA](https://www.openpolicyagent.org/docs/latest/terraform/) uses the [Rego language](https://www.openpolicyagent.org/docs/latest/policy-language/) to write your policies. These are run against Terraform plans (And other providers) to ensure policy alignment. Running these in your path-to-production pipeline ensures policy alignment as a gate. 

OPA is incredibly flexible. We are able to limit the blast radius of our proposed changes, restrict individual properties for newly provisioned infrastructure, enforce networking and security group rules and more, all in readable code that can be bundled and served as a static site.

We may want to ensure security groups only use HTTPS.

```rego
deny[msg] {
    desc := resources[r].values.description
    contains(desc, "HTTP")
    msg := sprintf("No security groups should be using HTTP. Resource in violation: %v", [r.address])
}
```
>https://www.openpolicyagent.org/docs/latest/terraform/

Or protect against over permissive CIDR ranges 
```rego
package terraform.policies.public_ingress

import input.plan as tfplan

deny[msg] {
  r := tfplan.resource_changes[_]
  r.type == "aws_security_group"
  r.change.after.ingress[_].cidr_blocks[_] == "0.0.0.0/0"
  msg := sprintf("%v has 0.0.0.0/0 as allowed ingress", [r.address])
}
```
> https://www.openpolicyagent.org/docs/latest/terraform/

##### AWS Config

##### AWS Prowler

##### IAM Policies

##### SSM Policies


### Security

### Reliability

### Compliance

### Disaster Recovery



