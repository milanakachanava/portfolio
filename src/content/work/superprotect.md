---
title: Turning scattered carrier records into a paid fraud-prevention product
company: Super Dispatch
years: 2025–2026
order: 1
card: SuperProtect went from ~20 shipper interviews to a paid release in 9 months, with its first 50 customers.
tags: [Trust & Safety, Marketplace, B2B SaaS]
role: Senior Product Designer, Trust & Safety team
team: Trust & Safety product team
timeline: 9 months
platform: Web
status: Released
tldr:
  problem: Before booking a carrier, shippers checked company data, FMCSA compliance, insurance and ratings on several separate sites, and still had to guess whether the carrier was safe.
  did: I led design for the carrier profile and SuperProtect, from shipper interviews to explainable risk checks shown everywhere a carrier decision happens, and the paid product around them.
  result: SuperProtect reached a paid release in 9 months and won its first 50 customers. In follow-up interviews, shippers were using the flags to choose carriers.
---

<figure><div class="ph">Hero image: the carrier profile with the SuperProtect status</div></figure>

## My role

I led product design for the carrier profile and SuperProtect in the Trust & Safety team at Super Dispatch, an auto-transport platform that connects shippers and carriers. The team identified the patterns that can indicate fraud. I ran the shipper interviews, structured the profile, designed the status and the checks behind it, and extended them across booking workflows, subscription and payment.

## The problem

A shipper has to decide whom to trust with a car. The information they need was scattered across company records, compliance assessments, insurance details, past performance and carrier activity. Shippers moved between external sites, read raw numbers and validated a carrier by hand before every booking.

## Research

<div class="stat">
  <div><b>~20</b><span>interviews with shippers</span></div>
  <div><b>3</b><span>groups of risk signals</span></div>
  <div><b>5</b><span>places where the status appears</span></div>
</div>

- Interviews with shippers about what they check before booking a carrier, and in which order.
- A review of the products shippers already use to check carriers. The information they need lives in separate places, and they move between them before booking.
- An analysis of carrier records: company information, authority status, safety ratings, cargo insurance, ratings and performance. I worked through the source data with Claude and grouped it into the sections a shipper actually needs.
- Heap tracking after release, to see how shippers found, opened and acted on the flags.

## Design decisions

<div class="decision">

### One profile instead of several sources

<dl>
  <dt>Options</dt><dd>Link out to the external sources, or bring everything into one carrier profile split into clear sections.</dd>
  <dt>Why this one</dt><dd>Shippers described the same routine: open several sites, compare, decide. One profile with compliance, insurance, performance and activity removes that routine.</dd>
  <dt>Trade-off</dt><dd>The profile gets longer, so each section has to earn its place and read at a glance.</dd>
</dl>

</div>

<figure><div class="ph">Before: the external sources a shipper checks · After: one carrier profile in sections</div></figure>

<div class="decision">

### Show the evidence, not a score

<dl>
  <dt>Options</dt><dd>A single risk score, or a simple status with every check behind it one click away.</dd>
  <dt>Why this one</dt><dd>The shipper makes the final decision. An unexplained score asks them to trust the system blindly; visible checks let them understand the risk and decide for themselves.</dd>
  <dt>Trade-off</dt><dd>More to read than one number. The detail lives in a drawer, so the status stays simple until someone wants to know why.</dd>
</dl>

</div>

We grouped the checks into three categories: activity on Super Dispatch, entity and registration information, and FMCSA compliance. The status shows <b>Passed</b> when all checks succeed and <b>Failed</b> when a high-risk issue needs review.

<figure><div class="ph">The status in the carrier profile and the drawer with every check</div></figure>

<div class="decision">

### Put the signal where the decision happens

<dl>
  <dt>Options</dt><dd>Keep the status in the carrier profile, or show it wherever a carrier appears.</dd>
  <dt>Why this one</dt><dd>Shippers compare carriers on load requests and offers, not on the profile. If risk only lives in the profile, they have to leave the decision to find it.</dd>
  <dt>Trade-off</dt><dd>The same status has to stay consistent across five surfaces and in light and dark mode, so I documented it as a shared pattern for other teams.</dd>
</dl>

</div>

<figure><div class="ph">The status on marketplace search, carrier cards, load requests and offers, and Manage Carriers</div></figure>

## From a validated model to a paid product

Once the model had proved useful in real carrier evaluations, we turned it into SuperProtect, a paid product. I designed the subscription and payment experience and placed the offer inside existing workflows, so shippers could discover it while reviewing a carrier, request a demo from the product, and understand the service before subscribing.

## What shipped

- A restructured carrier profile: company information, compliance, insurance, ratings and performance in one view.
- A Passed / Failed status with explainable checks in three groups.
- The status on marketplace search, carrier cards, load requests and offers, and the Manage Carriers dashboard.
- Carrier recommendations, SuperProtect subscription, payment and in-product demo request.
- Shared UX and UI patterns, documented so other teams could ship them consistently.

## Results

<div class="stat">
  <div><b>9 mo</b><span>from start to paid release</span></div>
  <div><b>50</b><span>first customers</span></div>
  <div><b>1</b><span>view instead of several external sites</span></div>
</div>

Shippers no longer validate a carrier by hand across external sites. In follow-up interviews, where shippers used the product themselves, they were making booking decisions based on the flags.

## What I would measure next

- The share of bookings where the shipper opened the checks before deciding.
- How often carriers with a Failed status still get booked, before and after the status appeared on load requests.
- Time from opening a load request to booking a carrier.
- Conversion from demo request to a paid SuperProtect subscription.

## Reflection

The work began as a data problem and ended as a trust problem. Bringing records together was the easy part. The real design work was deciding what to show at a glance, what to keep one click away, and how to leave the final decision with the person who carries the risk.
