---
layout: post
title:  Training in pseudo situ
date:   2020-09-06 00:00:00 +0000
categories:
  - Guides
tags: 
  - Training 
  - Course
  - Leadership
image: /assets/2020-09-06-training-in-pseudo-situ/student.webp
published: true
mermaid: true
---

A developer's role is not just code, and a BA’s role is not just story writing, anyone in the industry will attest to this. However many training programs offer little in the way of understanding the role and expectations for a member of an autonomous team; these lessons are commonly deferred. Learning these on the job. 

<!--more-->

<nav id="contents">
  <ul>
    <li>
      <a href="#why">Why I created the course</a>
    </li>
    <li>
      <a href="#structure">Structure</a>
    </li>
    <li>
      <a href="#shape-the-team">Shape the team</a>
    </li>
    <li>
      <a href="#getting-going">Getting going</a>
      <ul>
        <li>
          <a href="#lean-inception">Lean inception</a>
        </li>
        <li>
          <a href="#remote-first">Remote first</a>
        </li>
        <li>
          <a href="#cadence-and-ceremonies">Cadence and ceremonies</a>
        </li>
        <li>
          <a href="#wellbeing">Wellbeing</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#delivery">Delivery</a>
      <ul>
        <li>
          <a href="#focus-on-value">Focus on value</a>
        </li>
        <li>
          <a href="#pairing-on-everything-by-everyone">
            Pairing on everything, by everyone
          </a>
        </li>
        <li>
          <a href="#mobbing">Mobbing</a>
        </li>
        <li>
          <a href="#showcase--little-and-often">Showcase- little and often</a>
        </li>
        <li>
          <a href="#guest-speakers">Guest speakers</a>
        </li>
        <li>
          <a href="#stepping-back">Stepping back</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

## Why?

I'm a mentor, coach and cultivator. I mentor a few graduate and junior developers. They had just started their career in tech and I was keen to understand how it felt to enter the industry and the pain points. It became apparent very early on that many of the difficulties were not unique and the same issues kept popping up. I decided to investigate this further and interview a sample group. 

Over the course of a couple of weeks I interviewed around ~20 people and synthesised my findings.

- Implicit expectations causes anxiety.
- Impossible to contribute with so much unfamiliar terminology and ceremonies.
- Difficult to identify good practice from dubious practice.
- High pressure deliverables can impact learning experience.
- Paring with tenured folk can be a daunting experience.

I didn't set out to create a training course, but I did want to address these pain points. After lots of spit balling I ended on this course.

I ended up with a 9 week course that would give the team a taster of what it's like to be part of a team, including as much of the developer lifecycle as possible; from inception to delivery. We used what I believe to be best practice, and a heavy focus on creating a safe environment, we incorporated guest speakers and encouraged the team to be self driving. As the team's confidence grew the workload for the trainers decreased.

The purpose of this article is to give an outline of what I believe is an effective way to introduce folks to the industry in a safe and enjoyable way. Many of the implementation details will change depending on the need at the time, however it should provide just enough to seed your own implementation. 

### What is it?

I wanted to maintain direction. I'm easily distracted and sometimes lose sight of the bigger picture. I decided to create an impact map to serve as a reminder why I'm doing this, and what should be the driver to my decisions. I printed it out and stuck it above my monitor; everyday I would see it as a reminder. It really helped me maintain focus.

It's a bit tricky to display the entire map on a website and keep it looking pretty, so I've split it out into the goal and 3 parts. 

```mermaid
graph TD;
 goal(Goal: Improve onboarding of junior or graduates to the industry by operating as closely to a business critical, highly performant teams)
```

```mermaid
graph LR;
  expectation(We believe that running a project with similar expectations of existing teams</br><strong>Will result in shorter lead time when joining a new team</strong>);
    tech(A widely adopted tech stack will reduce onboarding friction.)
    workflow(A workflow similar to business critical teams will manage expectations when joining a team.)

 expectation-->tech;
 expectation-->workflow;

```

```mermaid
graph LR;
  habits(We believe that fostering good habits</br><strong>Will result in an increase in productivity, code quality, and velocity</strong>)
    pairing(Having a pairing culture will decrease onboarding time)
    tdd(Following TDD will increase code maintainability)
    ddd(Following DDD will increase code readability)
    draw(Drawing often will increase understanding of a domain and enable DDD practices)
    windows(Fix broken windows first mindset will reduce code rot.)

 habits-->pairing;
 habits-->tdd;
 habits-->ddd;
 habits-->draw;
 habits-->windows;
```

```mermaid
graph LR;
  env(We believe that creating a safe working environment</br><strong>Will increase confidence and reducing onboarding friction when joining a business critical team</strong>)
    feedback(A Feedback matrix to increase constructive conversation)
    1to1(Frequent 1-1s to give increased visibility of team health)
    wellbeing(Wellbeing questionnaire to give us visibility of team health: </br>measuring Independence/ support/ learning/ pace)

 env-->feedback;
 env-->1to1;
 env-->wellbeing;
```

This should be visible to all and serves as a reminder why the team makes certain decisions. During the course lifetime there will be many sessions, blockers, tech tasks, and possible stories that may arise. It can be difficult to know the best course of action; use the above to gauge whether to drop these activities or pursue them. Constantly reevaluate current state- *Do all activities contribute to the vision?*

### What it is not?

#### This is not a manufactured role playing exercise

The goal is not to put the team into an artificial high pressure environment to force them to perform, in fact it is completely the opposite. By having a safe environment built on trust, we believe that teams will perform, grow and learn rapidly. 

#### This is not a deep dive into a particular language or framework

This may seem counterintuitive. We want our developers to be the best they can possibly be, why would we not want them to know everything about a language, framework or tool?

- Because languages come in and out of fashion, frameworks change rapidly and tools often reach EOL.
- By taking a tech stack that is common today, and building high quality real applications, with a real use and value in mind we can craft a culture where the team learns the skills required to deliver at pace, giving a real understanding of why we push particular practices.
- The goal is to create a motivated, experienced, self learning, highly performant team. The tech stack is the tool to help us reach the goal.

---

## Structure

### Duration

- 1 week lean inception & team building
- 8 weeks delivery
- Weekly cadence (Showcases, retrospectives, reporting)


### Team

- 6 developers with a goal to gain as close to real world experience as possible.
- 1 business analyst with a goal to gain as close to real world experience as possible.
- 2 senior developers with a goal to aid in the teams health, support and upskilling (For all roles)
- 1 experienced (part time) PO with the goal to keep the program and the project on track, offering support to the team.

Having an even number of participants will really help. Everyone within the team will be pairing, it is important for the trainers to pair as much as possible, if you do have an odd number of folks in the team you will have a difficult decision to make. As a trainer do you step back and float, or do you allow a new developer or BA to go unsupported? 

The number of each role isn't a hard requirement, they serve as a rough guide, try to stick to the [two pizza rule](https://whatis.techtarget.com/definition/two-pizza-rule){:target="_blank"  rel="noreferrer"}.

For the purposes of this section we will split the team into 2 camps- The trainers and the trainees, however when on the ground remind yourself that you are one complete and equal team, all on the same journey.

#### Trainers

Paring is a must, not just developers. Tech leads, BA’s, developers will all be pairing, all the time. 

Picking the right project and planning effectively before inception is key to making this work. The majority of the day the team will all be pairing, the responsibilities of the tech lead will be shared between the team, exposing all members to all team activities.

Make sure that the trainers are not just aware, but happy to follow this flow. The majority of the team will need support in the form of 1-1 pairing. That may put some folks out of their comfort zone, use your best judgement, keeping the vision and goals in mind.

#### Trainees

- Observe standard project ceremonies, inceptions, standups, showcases, retrospectives
- Observe working practices including pairing and TDD
- Work to key deliverables as identified during inception

### Up and running

Planning is key, when the project starts it will be intense. Identifying the tech stack and finding a project that enabled all the learning objectives is a difficult process.

#### The tech stack

During the pilot of this program we decided to use the follow:

- Java 11
- Postgres
- Flyway
- Lombock
- Gradle
- REST API Design

- React

- Docker
- Auth (Okta)
- Infrastructure as code (Terraform)
- Secret management (GCP secret manager)
- Host using a cloud provider (GCP) 
- CI/CD and pipelines as code (CircleCI)
- Governance (Code styling, vulnerability detection)

- Trunk based (When pairing)

- TDD, code maintainability and code quality

This will change. Different tech will come in and out of fashion and we may see a need to upskill folks in particular stack. We found ourselves with the above by interviewing graduates, tenured folks in the business, leadership teams, etc. The list will change from company to company and over time. 

#### The project

This has to be one of the most challenging parts of getting the program up and running, do not underestimate how difficult it will be.

Aim for you project to be

- Independent 
  - Spending time integrating with other systems is hard with little benefit to the team/ program.
- Complex 
    - Your team is a decent size, the domain should be complex enough to allow for truly independent, vertical sliced stories. 
- Real
  - The team will be much more engaged if they are solving a real problem, bonus points if you can make it relevant to them.
- Not business critical
  - The goal of the program is not to produce a complete application, by having something business critical you add in another variable. Team safety will be difficult to manage and code quality may suffer when deadlines are tight.

#### The code

I interviewed many folks that have contributed to open source or company side projects. A common theme came up; it takes too long to get up and running, people get left behind and code quickly becomes messy with many hands touching a small codebase. 

Gift the team some code to get going. You should have a good idea what the team will be building, with what tools. It will also take a long time to get approval, repos setup, and build servers running. Kick this off as early as possible. 

You should have enough information to throw together some sample code for the team to use. It is important to keep the sample codebase as slim as possible, it is not there to show everything that a framework can do, it's just enough to get something running, think [tracer bullet](https://growsmethod.com/practices/TracerBullets.html){:target="_blank"  rel="noreferrer"} .

It is also important to document this step, READMEs are important, the team will benefit by having a well documented, easy to understand codebase, onboarding will be easy, and those lessons can be taken forward to the team, not only improving the projects onboarding, but future teams.


During the pilot we decided to create 2 projects, with okta authentication and deployed to GCP. The code was produced using TDD, was small and simple, however functional.

- Both front and back used Okta for authentication. 
- One endpoint returning a simple message
- A front end that could integrate with the endpoint
- A build pipeline that tests and deploys
- Terraform that builds the infrastructure
- Readmes, don’t forget the readmes!

We also attached a git tag to the base code, reach out if you would find this useful.

---

## Shape the team

Time for the real work to begin! You have a project, a tech stack, a sample codebase, and even a team. It’s important to create a safe working environment from the very beginning, the team may not know each other, they may have not even worked in a team before. Getting everyone on the same page quickly is the next objective.

- Setup frequent 1-1s
    - They don’t have to be long, but make them frequent. 15 minutes weekly with each person is plenty.
- Create anonymous feedback forms
    - The team should be able to share their thoughts and feelings at any time without fear of judgement.
- Introduce the project
    - Clearly define the training program goals and the project goals. They are vastly different, the team should have complete clarity of this and their priorities.
- Ice breakers
    - In the first week, run these frequently… like, all the time
    - We ran a short icebreaker morning and afternoon for an entire week, each member of the team facilitated at least one, by the end of the week the ice was definitely broken. The team felt comfortable with each other and the atmosphere was joyous.  
- [Run a team canvas](http://theteamcanvas.com/){:target="_blank"  rel="noreferrer"}
    - This is a brilliant tool to get the team all on the same page
    - Everything takes a little longer when remote, running the basic canvas over 1.5 hours is ideal.
    - Get a facilitator that is not part of the team
    - The team is completely equal, a third party will help show this. 
- Hold a ‘Ways of working’ session
    - This is incredibly important, most folks would not have been part of a team, your experiences will be different from most of the team, make no assumptions and talk about everything.
- Create a social contract
    - This should be an amalgamation of your ways of working and team canvas, everyone should know what to expect from each other (Inside and outside the team), no assumptions.


## Getting going

Week 1 will be intense, the sessions are packed and require all team members to be present, however do not rush the sessions, if the conversation is constructive and useful, then continue the session and plan for overflow sessions over the first week.

During the pilot we missed key sessions and overrand on occasion, this was ok. As a team we acknowledged the importance of the sessions and found time to run them over the first week of delivery. The lean inception is a great tool, we tried to outsmart it by making shortcuts and it didn’t work, we made the mistake so hopefully you won’t have to.

### Lean inception

Before we can move into execution we need to define a strategy. An Inception allows us to diverge before we converge. A week of workshops that allow us to understand and define the problem, with the goal of creating just enough of a backlog to get us going.

Paulo Caroli crafted the lean inception; an incredibly useful set of workshops. The entire week is planned out and well documented. He has documented these in a [book](https://www.amazon.co.uk/Lean-Inception-Align-People-Product-ebook/dp/B079CMQQB5/ref=sr_1_1?dchild=1&keywords=lean+inception&qid=1601575358&sr=8-1){:target="_blank"  rel="noreferrer"} and [blog posts](https://martinfowler.com/articles/lean-inception/){:target="_blank"  rel="noreferrer"}.

If you follow Paulo's plan you will cover

- The product Is/ is not/ does/ does not
- Write the Product Vision
- Describe the users
- Discover the Features
- Current codebase demo
- Codebase walkthrough & integrations
- Display Features in Journeys
- Show the User Journeys
- How do we know we did good (RAID)/ measures
- Technical and business review / prioritisation
- Sequence the Features


Running the inception remote seems like a daunting task. Remember to take frequent breaks, remind the team that any team member can request a break at any point in time, and allow for extra time. Using tools like Mural really helped keep collaboration high, if these are not available then google slides can also work (Although a little clunky).

Most of the team will be new to inceptions, it is important to stay nimble. End of day wrap ups with the product owner, tech lead and business analyst will really help get the most out of the week, if this is impossible try to regroup in the morning or at any free point during the day.


### Remote first

We ran our pilot over the summer of 2020, during a pandemic, this meant that the team was remote first from the start. We successfully ran the pilot, never actually being with each other in real life. It will be bumpy, but can work.

Being remote first brings a whole host of challenges and requires a change in mindset. Moving all existing meetings and ceremonies to video and expecting real time feedback does not transition well, we end up with video call fatigue, back to back meetings in the same position, and a dip in our productivity.

If you are remote first a few important lessons:

- Agree on core hours
    - These are a subset of your working hours, allow for flexibility, the rigidness of office life does not have to be brought into the remote world.
- Agree on video etiquette
    - This will be different for all teams, however using real microphones is extremely useful, there is nothing worse than hearing the clip clop of a keyboard during a video call or pairing session.
    - For us, video on policy works, do not push this onto teams that do not want it. There are real reasons why this is not achievable for some. Compromise and talk everything through as a team.
- Be visible
    - Chat is a great way to feel like a team, share your findings, successes and failures. Some days people will feel lonely when remote, having a conversation stream open will help.
- Do not expect real time responses
    - We should not feel tied to our desks, chat messages are asynchronous, they are not real time conversations. It's ok to not get a response straight away. And if you don't, it doesn't matter, that's what stand up is for.  
- Try to be on time to meetings
    - Waiting around for meetings when remote is painful, minutes feels like hours. And when you finally get going the time goes fast.
- Use timers
    - Tools like Mural have timers built in, use them. They give visibility to everyone and help keep the meetings on track
- Adopt a ‘pop in’ culture
    - In real life it is easy for a BA to pop over to a pair to ask about a story, or a dev to overhear another pair having difficulty on a solved problem. These micro interactions disappear when remote. Everyone in the team should feel empowered to pop into virtual meeting rooms to have a chat, ask how things are going, or reach out for help. 


### Cadence and ceremonies

This course only has 8 weeks of development. That's not a very long time, when dealing with cadence it is worth looking at your iterations as an excuse to learn and improve. I strongly suggest a weekly cadence; that gives you 8 attempts at getting it right. Any less frequent and you run the risk of not rectifying issues, any more frequent and you may struggle to deliver enough value.

Each week aim to do the following:
- Retrospective
- Wellbeing report
- Showcase
- 1-1s
- Pair switch (Depending on your ways of working session)
- Knowledge share/ guest speaker

### Wellbeing

Visibility of your new team's wellbeing should be a constant thought throughout the process. Many of the team members will not have worked in a team like this, on the particular tech stack, or even in tech at all. I believe that when people feel safe and are not fearful of experimentation they will learn quickly and produce value at pace.

#### Monitoring/ Well-being report 

A weekly report is a useful tool to use to gauge the health of the report, every question should be optional and the results are anonymous, however completely open and visible to the team.

For us we implemented this by creating a google form with some key questions, participants could enter comments and submit a Red, Amber, Green (RAG) status. The results each week were then displayed in our retro on a slide deck for everyone to see and to help seed conversation during the retro (Any particularly alarming comments should be actioned well before the retro).

The tool is owned by the entire team, the questions, format and cadence are up for discussion, team members should be allowed to suggest changes to the form, it needs to work for your team, and capture what your team finds valuable.

The results of the report will also be used to give us an idea of what to change in the next iteration of the program, and therefore participation is key, it should not be forced, but the team should know the impact of the report.

Nominate someone within the team to own the initiative. This involved making a copy of the form and sending it to the team, allowing the team enough time to fill it out, and reporting findings back to the team.

During the pilot the questions did not change, we saw a dip in responses, and occasionally results that triggered change. Without this tool the difficulties may have gone unnoticed and the health of our team would have suffered. 

We decided on the following questions, all with a comments section and RAG status.

- Am I independent?
- Am I supported?
- Am I learning?
- Am I happy with the pace?

These questions correlate with our goals for the program, this serves as a metric against our bets.

We found that on occasion health/ morale of the team dropped, by exploring these concerns as soon as possible using a variety of tools alleviated the concerns. These include Hopes & fears, happiness revisited and the [Spotify health check](https://engineering.atspotify.com/2014/09/squad-health-check-model/){:target="_blank"  rel="noreferrer"}. 

---

## Delivery

### Focus on value

The goal of the 9 weeks is not to produce an application that is business critical or in production. If this happens by accident, that's a bonus. However the team should treat this like a real client, getting value out quickly and iterating on them is the delivery method of choice. Stories should be as thin as possible, whilst still containing end to end value for your users. 

By having engaged stakeholders and holding user testing sessions we can simulate feedback that we would get from real users in production.

### Pairing on everything, by everyone

All team members will wear different hats, with many roles and responsibilities, it is important for the team to take ownership of particular initiatives and pair on as much as possible.

#### Cross role pairing

We get closer collaboration by having developers pair with BA’s, even BA’s sitting in on QA tasks, we also increase empathy towards other roles within the teams. 

During the pilot we found on occasion that the goals of the devs and business analyst were not completely aligned, which led to conflict. By cross core capability pairing we managed to quickly align the team, giving an increased respect and understanding for the roles and responsibilities within the group.  

#### Developer pairing

Although we are aiming to give the team a real life experience of an account, we are also here to help technically upskill devs, tweaking your pairing method will be beneficial.

The trainers should keep the goals in mind when pairing, at the start of the program pairing may feel similar to a knowledge share or onboarding exercise; transferring pairing skills are as important as delivering value. 

This should change over time. The [ping pong](https://martinfowler.com/articles/on-pair-programming.html#PingPong){:target="_blank"  rel="noreferrer"} technique is excellent to gauge how much support your pair needs, gradually stepping back, giving your pair much more freedom and responsibility, allowing them to drive the majority of the sessions. 

### Mobbing

Mobbing is an excellent tool to get the team aligned, share knowledge, or roll out a global change to the codebase. 

Picking a piece of work to mob on takes some thought, we first thought that mobbing on a terraform piece would be beneficial, the majority team did not have any experience with [GCP](https://cloud.google.com/){:target="_blank"  rel="noreferrer"} or [Terraform](https://www.terraform.io/){:target="_blank"  rel="noreferrer"}. We thought that mobbing would be beneficial to the entire team as they will all get exposure to both GCP and Terraform, this was not correct. We ended up in a session with many folks feeling left behind and not able to contribute. In hindsight this sort of task would have been better suited to a timeboxed trainer led session.  

#### How to identify a mobbing session

- Discuss the challenge during a tech huddle
- Organised a 1 hour mobbing session session
- Ask the team to review documentation before kick starting
- Use 1 computer with Zoom’s remote control functionality
- Run “mini sprints” of work 
- Discuss Approach- Facilitated by the current navigator. Don’t jump into coding right away!
- Set Timer- Approx. 5 minute “mini-sprints”
- Code- The entire team (incl. driver) discuss the implementation facilitated by the navigator
- Pair Swap- At the nearest logical stopping point (e.g. after writing or implementing a test)

Tips
- It takes longer to develop when mobbing but the value gained in knowledge sharing saves time later on
- Think about if mobbing is a good idea?
- If you run into any issues with development, you’re taking up a lot of combined time
- Timeboxing discussions is really important
- Prevents the team going off on a tangent, and it means that people who aren’t part of the discussions are less likely to lose engagement
- Ensure that the conversation is equally weighted
- It could be quite easy to turn into a lecture which doesn’t hold as much value, the more each person contributes the better

When does it work
- In small-medium teams (3 - 8 people)
- Keeps everyone engaged and focused without chaos
- Remote working makes it easier to become disengaged
- When there are small pre-defined* goals
- Breaking down your end goal into the steps that are needed
- Part of mobbing is to explore and discuss, therefore, the team must be agile if there is a change in direction/goals

### Showcase- little and often

Weekly showcases will bring many benefits.
- Gives the team presenting experience
- Shares the teams successes with the wider business
- Free advertising for your product  

During the pilot we opened our showcase to everyone in the organisation. It was a time to celebrate what we had achieved and each week our attendees grew and so did the trainees' confidence. As trainers its important to not position yourself as the entry point or the lead, its vital to lead from the back. Let the team run these, but be available to jump in and support.

### Guest speakers

Having weekly guest speakers is a great way to break up the week whilst seeding new ideas to the team.

We experimented with speakers more and less than once a week, we received feedback that more than once a week did not leave enough time to code, and ad hoc meetings distubed the workflow of the team. We decided to have core coding hours (Meeting free time) and a KT session on Wednesdays.

During the pilot we managed to find speakers on a variety of topics:

- Cross functional requirements (CFR circus)
- Introduction to React
- User testing
- Betting on performance/ architecture
- Domain Driven Design
- Responsible tech
- Diagrams as code
- Infrastructure as code

### Stepping back

At some point during the 9 weeks you will notice the team is running. Stories are flying through the board, QA is a quick and easy process, code quality is consistently high, TDD is apparent, and getting a story ready is seamless. This is the time to start stepping back.
