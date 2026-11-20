---
title: Growing an alerts MVP into a fleet operations platform
company: 90 Percent of Everything
years: 2021–2025
order: 2
card: Three years of turning onRADAR into a live tool that connects alert triage, vessel context, tasks and messaging.
tags: [Maritime, Enterprise operations, Data-dense UI]
role: Senior Product Designer, web and desktop
team: Cross-functional maritime product team
timeline: 3+ years
platform: Web, desktop
status: Live
tldr:
  problem: Fleet operators had to assess time-critical alerts and act on them while switching between disconnected tools.
  did: I led design for onRADAR on web and desktop, from the alert-to-action flow and information architecture to auto-created tasks and a shared component library.
  result: An alerts MVP became a live operations platform where an alert, the vessel's context, tasks and ship-to-shore messaging live in one workflow.
---

<figure><div class="ph">Hero image: onRADAR alert triage with the vessel context panel</div></figure>

## My role

OOS onRADAR is a fleet monitoring, alerting and task management system for maritime operations teams. I led product design for the web and desktop solutions for more than three years, working with product owners, operators and engineers, while also working on other parts of the OpenOcean STUDIO platform.

## The problem

Maritime professionals relied on fragmented systems and manual processes. When an alert arrived, operators needed to see the right information immediately, assess the risk quickly, and act — create a task, contact the vessel — without losing context.

## Research

- Interviews and demos with operators to understand real workflows and failure modes.
- Observation of operators during work shifts to see how they triage alerts.
- Usability testing of sorting alerts, finding information, and alert and task workflows.
- Competitive analysis of monitoring patterns and anti-patterns.

What we learned:

- Alerts are handled under time pressure, so severity, location and the recommended next step have to be scannable.
- The most valuable context is vessel information, the timeline and history, and messaging.
- Integrated messaging is essential to coordinate ship and shore without losing history.

## Design decisions

<div class="decision">

### Link every alert to its context

<dl>
  <dt>Options</dt><dd>Keep alerts as a standalone list, or connect each alert to the vessel status, timeline, tasks and messaging.</dd>
  <dt>Why this one</dt><dd>Operators lost time and context moving between tools. Four product areas one click from the alert keep the whole incident in one workflow.</dd>
  <dt>Trade-off</dt><dd>A denser detail panel. Tabs for details, messages and history keep it readable.</dd>
</dl>

</div>

<figure><div class="ph">Alert list and detail panel with tabs: Details, Messages, History</div></figure>

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

## What shipped

A released platform that connects alert triage, vessel context, tasks and messaging in one operational workflow, with rolling releases, demo sessions and post-launch monitoring.

## What I would measure next

- Time from an alert arriving to the first action on it.
- The share of incidents handled without leaving onRADAR.
- How often operators change or remove automatically created tasks.

## Reflection

Design for the decision moment: surface the highest-value context and make the next action one click away. Three years of continuous feedback from operators were what built their trust in the product.
