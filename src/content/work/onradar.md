---
title: Growing an alerts MVP into a fleet operations platform
company: 90 Percent of Everything
years: 2021–2025
order: 2
card: Turning onRADAR from an alerts MVP into a live tool that connects alert triage, vessel context, tasks and messaging.
tags: [Maritime, Enterprise operations, Data-dense UI]
role: Senior Product Designer, web and desktop
team: Cross-functional maritime product team
timeline: 3+ years
platform: Web, desktop
status: Live
tldr:
  problem: Fleet operators had to assess time-critical alerts and act on them while switching between disconnected tools.
  did: "I led design for onRADAR on web and desktop, in order of what operators needed most: richer alert context, ownership of every alert, messaging linked to alerts and vessels, then tasks and events."
  result: An alerts MVP became a live operations platform where an alert, the vessel's context, tasks and ship-to-shore messaging live in one workflow.
---

<figure class="video"><video autoplay muted loop playsinline preload="metadata" poster="/work/onradar/intro-poster.webp" aria-label="Walkthrough of onRADAR: alert list, alert details, history, alert rules and creating an alert"><source src="/work/onradar/intro.mp4" type="video/mp4" /></video></figure>

## My role

OOS onRADAR is a fleet monitoring, alerting and task management system for maritime operations teams. I led product design for the web and desktop solutions, working with product owners, operators and engineers, while also working on other parts of the OpenOcean STUDIO platform.

## The problem

Maritime professionals relied on fragmented systems and manual processes. When an alert arrived, operators needed to see the right information immediately, assess the risk quickly, and act — create a task, contact the vessel — without losing context.

## Research

- Interviews and demos with operators to understand real workflows and failure modes.
- Observation of operators during work shifts to see how they triage alerts.
- Usability testing of sorting alerts, finding information, and alert and task workflows.
- Competitive analysis of monitoring patterns and anti-patterns.

<figure><img src="/work/onradar/research.webp" alt="Remote research session with operators" loading="lazy" /><figcaption>A research session with operators.</figcaption></figure>

What we learned:

- Alerts are handled under time pressure, so severity, location and the recommended next step have to be scannable.
- The most valuable context is vessel information, the timeline and history, and messaging.
- Integrated messaging is essential to coordinate ship and shore without losing history.
- In the early product, messages were easy to lose: no grouping, no read or unread state, and no clear answer to who had picked up an alert.

<figure><img src="/work/onradar/persona.webp" alt="Vessel Operator (onshore) persona" loading="lazy" /><figcaption>Vessel Operator (onshore): goals, needs, frustrations and observations.</figcaption></figure>

## Constraints and priorities

<dl>
  <dt>Data</dt><dd>Positions and events from dozens of vessels came over AIS and satellite links with delays of several hours. Operators had to make decisions on data that was never quite live.</dd>
  <dt>Starting point</dt><dd>The MVP alert carried very little: no alert types, a basic urgency level and almost no context.</dd>
  <dt>Order of work</dt><dd>First, the data and context inside each alert: types, severity, grouping, and everything about an incident in one place instead of several sections. Second, messaging inside the product. Third, the mobile app. Then tasks and events.</dd>
</dl>

<figure><img src="/work/onradar/before-mvp.webp" alt="The onRADAR MVP dashboard: lists of alerts, tasks and events with only an ID, title, date and a generic priority label" loading="lazy" /><figcaption>Where it started: the onRADAR dashboard when I joined. Alerts and tasks carried an ID, a title, a date and a placeholder priority label, with almost no context.</figcaption></figure>

## Design decisions

<div class="decision">

### Link every alert to its context

<dl>
  <dt>Options</dt><dd>Keep alerts as a standalone list, or connect each alert to the vessel status, timeline, tasks and messaging.</dd>
  <dt>Why this one</dt><dd>Operators lost time and context moving between tools. Four product areas one click from the alert keep the whole incident in one workflow.</dd>
  <dt>Trade-off</dt><dd>A denser detail panel. Tabs for details, messages and history keep it readable.</dd>
</dl>

</div>

<figure><img src="/work/onradar/incident.webp" alt="Vessel monitoring with incident management" loading="lazy" /><figcaption>An alert linked to the vessel on the map, its timeline and the incident.</figcaption></figure>

<div class="decision">

### Make ownership of every alert visible

<dl>
  <dt>Options</dt><dd>A shared stream where anyone can respond, or explicit states: who acknowledged the alert, who is responsible, and which tasks it turned into.</dd>
  <dt>Why this one</dt><dd>In a shared stream alerts and messages got lost and two people could pick up the same incident, or nobody did. I reworked the whole mechanic of acknowledging, assigning and handing an alert over to tasks for the right team members.</dd>
  <dt>Trade-off</dt><dd>One more deliberate step for the operator, acknowledging, in exchange for a clear owner.</dd>
</dl>

</div>

<div class="decision">

### Messaging that points at the work

<dl>
  <dt>Options</dt><dd>Keep ship-to-shore communication in email and chat outside the product, or build messaging in.</dd>
  <dt>Why this one</dt><dd>Inside onRADAR people can tag an alert or a vessel in a message and open it from the link without leaving the product. The same messaging runs in the office, on board and in the mobile app.</dd>
  <dt>Trade-off</dt><dd>Messaging had to behave the same on three surfaces with very different connectivity.</dd>
</dl>

</div>

<div class="decision">

### Automate tasks, keep the operator in control

<dl>
  <dt>Options</dt><dd>Let operators create every task by hand, or create common tasks automatically from alerts.</dd>
  <dt>Why this one</dt><dd>Common alerts lead to the same tasks. Creating them automatically saves time under pressure, and manual overrides keep the operator responsible for the outcome.</dd>
  <dt>Trade-off</dt><dd>Automatic tasks need clear defaults and an easy way to change them, so operators trust what the system creates.</dd>
</dl>

</div>

<div class="decision">

### One component library for web and desktop

<dl>
  <dt>Options</dt><dd>Design each surface separately, or build a shared Figma library with tokens, alert states and table and list patterns.</dd>
  <dt>Why this one</dt><dd>The same alerts, badges and tables appear across the platform. A shared library kept severity and states consistent everywhere.</dd>
  <dt>Trade-off</dt><dd>Time spent on the system up front, before new screens.</dd>
</dl>

</div>

<figure><img src="/work/onradar/process.webp" alt="Alert workflow overview and alert states" loading="lazy" /><figcaption>Alert workflow overview: list, detail panel and the states behind them.</figcaption></figure>

## What shipped

A released platform that connects alert triage, vessel context, tasks and messaging in one operational workflow, with rolling releases, demo sessions and post-launch monitoring.

<figure><img src="/work/onradar/final.webp" alt="Final onRADAR design on web and desktop" loading="lazy" /><figcaption>The released design: alert list, detail panel and task creation.</figcaption></figure>

## What I would measure next

- Time from an alert arriving to the first action on it.
- The share of incidents handled without leaving onRADAR.
- How often operators change or remove automatically created tasks.

## Reflection

Design for the decision moment: surface the highest-value context and make the next action one click away. Continuous feedback from operators was what built their trust in the product.
