---
title: Turning scattered carrier records into a paid fraud-prevention product
company: Super Dispatch
years: 2025–2026
order: 1
card: SuperProtect went from ~20 shipper interviews to a paid release in 9 months, and replaced four sources with one carrier profile.
tags: [Trust & Safety, Marketplace, B2B SaaS]
role: Senior Product Designer, Trust & Safety team
team: 1 PM, 3 engineers and me
timeline: 9 months
platform: Web
status: Released
tldr:
  problem: Before booking a carrier, shippers cross-checked the same carrier in four places, Super Dispatch, MyCarrierPortal, Carrier411 and FMCSA, looking it up by ID each time, and still had to guess whether it was safe.
  did: I led design for the carrier profile and SuperProtect, from shipper interviews to explainable risk checks shown everywhere a carrier decision happens, and the paid product around them.
  result: SuperProtect reached a paid release in 9 months and won its first paying customers. In follow-up interviews, shippers were using the flags to choose carriers.
---

<figure class="video"><video autoplay muted loop playsinline preload="metadata" poster="/work/superprotect/intro-poster.webp" aria-label="Walkthrough of SuperProtect in dark theme: promo, carrier profile, passed and failed checks, internal records, monitored carriers and billing"><source src="/work/superprotect/intro.mp4" type="video/mp4" /></video></figure>

## My role

I led product design for the carrier profile and SuperProtect in the Trust & Safety team at Super Dispatch, an auto-transport platform that connects shippers and carriers. The team identified the patterns that can indicate fraud. I ran the shipper interviews, structured the profile, designed the status and the checks behind it, and extended them across booking workflows, subscription and payment.

## The problem

A shipper has to decide whom to trust with a car. The information they need was scattered across company records, compliance assessments, insurance details, past performance and carrier activity. Before every booking, shippers checked the carrier in Super Dispatch, then went to MyCarrierPortal, Carrier411 and FMCSA, looked it up by ID, and cross-checked the same data by hand.

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

What a shipper needs to vet a carrier, from the interviews and the sources they used:

- **Identity:** is the carrier verified with the phone number registered at FMCSA.
- **Documents:** W-9 and certificates of insurance on file.
- **Cargo insurance:** limit, deductible and expiry date.
- **FMCSA status:** USDOT status, entity and operating type, cargo carried, operating authority.
- **Authority history:** when authority was granted, revoked or reinstated, and any pending applications.
- **Size and age:** power units, drivers, years in business.
- **Safety:** inspections and safety rating.
- **Liability insurance:** coverage on file and when it is cancelled or about to expire.

<figure><img src="/work/superprotect/shipper-interview.webp" alt="Shipper research interview reviewing carrier records" loading="lazy" /><figcaption>A shipper interview about vetting carriers, participant names blurred.</figcaption></figure>

<figure class="grid2"><img src="/work/superprotect/mycarrierportal.webp" alt="Carrier profile in MyCarrierPortal with a risk assessment" loading="lazy" /><img src="/work/superprotect/fmcsa-safer.webp" alt="FMCSA SAFER company snapshot" loading="lazy" /><img src="/work/superprotect/fmcsa-licensing.webp" alt="FMCSA licensing and insurance record" loading="lazy" /><img src="/work/superprotect/authority-data.webp" alt="Carrier authority and safety data marked up during research" loading="lazy" /><figcaption>What shippers check today: MyCarrierPortal, FMCSA SAFER, FMCSA licensing and insurance, and carrier records marked up during research.</figcaption></figure>

<figure><img src="/work/superprotect/carrier411.webp" alt="Carrier411 truck VIN association report with other carriers sharing the same trucks" loading="lazy" /><figcaption>Carrier411, one more source shippers checked: which other companies share the same trucks, and their authority and insurance status.</figcaption></figure>

<figure><img src="/work/superprotect/inspiration.webp" alt="Inspiration board for risk and trust interfaces" loading="lazy" /><figcaption>How other products communicate trust, risk and account health.</figcaption></figure>

## Constraints and priorities

<dl>
  <dt>Data</dt><dd>Carrier data from FMCSA, MyCarrierPortal, Carrier411, insurance records and Super Dispatch's own activity data, refreshed daily. We could only show what these sources provide, so the design had to work with their gaps.</dd>
  <dt>Team</dt><dd>One PM, three engineers and me, alongside the rest of the Trust & Safety roadmap.</dd>
  <dt>First</dt><dd>Learn what shippers actually look at when they vet a carrier, then keep only the data needed to judge trust and bring it into the product with a daily refresh, so nobody has to leave for FMCSA again.</dd>
  <dt>Later</dt><dd>Manually adding carriers to monitoring, and a separate SuperProtect tab, were left for after the first version.</dd>
</dl>

## Design decisions

<div class="decision">

### One profile instead of several sources

<dl>
  <dt>Options</dt><dd>Link out to the external sources, or bring everything into one carrier profile split into clear sections.</dd>
  <dt>Why this one</dt><dd>Shippers described the same routine: open several sites, compare, decide. One profile with compliance, insurance, performance and activity removes that routine.</dd>
  <dt>Trade-off</dt><dd>The profile gets longer, so each section has to earn its place and read at a glance.</dd>
</dl>

</div>

<figure class="tall"><img src="/work/superprotect/profile-full.webp" alt="The restructured carrier profile with compliance, insurance, performance and company information" loading="lazy" /><figcaption>The restructured carrier profile: compliance, insurance, performance and company information in one view.</figcaption></figure>

<div class="decision">

### Show the evidence, not a score

<dl>
  <dt>Options</dt><dd>A single risk score, or a simple status with every check behind it one click away.</dd>
  <dt>Why this one</dt><dd>The shipper makes the final decision. An unexplained score asks them to trust the system blindly; visible checks let them understand the risk and decide for themselves.</dd>
  <dt>Trade-off</dt><dd>More to read than one number. The detail lives in a drawer, so the status stays simple until someone wants to know why.</dd>
</dl>

</div>

We grouped the checks into three categories: activity on Super Dispatch, entity and registration information, and FMCSA compliance. The status shows <b>Passed</b> when all checks succeed and <b>Failed</b> when a high-risk issue needs review.

<figure class="grid2"><img src="/work/superprotect/passed-drawer.webp" alt="SuperProtect Passed drawer with successful checks" loading="lazy" /><img src="/work/superprotect/failed-drawer.webp" alt="SuperProtect Failed drawer with checks that need review" loading="lazy" /><figcaption>Passed and Failed: every check behind the status, grouped by activity, entity and registration, and FMCSA compliance.</figcaption></figure>

<figure><img src="/work/superprotect/profile-passed.webp" alt="Carrier profile showing the SuperProtect Passed status" loading="lazy" /><figcaption>The status sits at the top of the carrier profile.</figcaption></figure>

<div class="decision">

### Explain the edge case where it appears

<dl>
  <dt>Options</dt><dd>Show FMCSA fields as they come, or add a short explanation next to the values that are easy to misread.</dd>
  <dt>Why this one</dt><dd>Raw data can look alarming or reassuring for the wrong reason. "Not authorized" is normal for an intrastate carrier, a pending application can change a status, and insurance that expires in 12 days is still valid today. Each case got a one-line tooltip, the FMCSA snapshot shows when it was last updated and links back to FMCSA.</dd>
  <dt>Trade-off</dt><dd>More interface copy to write and keep accurate as rules and sources change.</dd>
</dl>

</div>

<figure class="tall"><img src="/work/superprotect/compliance-assessment.webp" alt="Compliance Assessment in the carrier profile with FMCSA snapshot, authority, company, safety and insurance sections and explanatory tooltips" loading="lazy" /><figcaption>The Compliance Assessment: FMCSA data updated daily, with tooltips on intrastate authority, pending applications and expiring insurance. Personal data blurred.</figcaption></figure>

<div class="decision">

### Put the signal where the decision happens

<dl>
  <dt>Options</dt><dd>Keep the status in the carrier profile, or show it wherever a carrier appears.</dd>
  <dt>Why this one</dt><dd>Shippers compare carriers on load requests and offers, not on the profile. If risk only lives in the profile, they have to leave the decision to find it.</dd>
  <dt>Trade-off</dt><dd>The same status has to stay consistent across five surfaces and in light and dark mode, so I documented it as a shared pattern for other teams.</dd>
</dl>

</div>

<figure class="grid2"><img src="/work/superprotect/load-requests-light.webp" alt="Carrier requests in light mode with a status on each carrier" loading="lazy" /><img src="/work/superprotect/load-requests-dark.webp" alt="Carrier requests in dark mode with the same statuses" loading="lazy" /><figcaption>Load requests: every carrier arrives with its status, in light and dark mode.</figcaption></figure>

<figure><img src="/work/superprotect/manage-carriers.webp" alt="Manage Carriers list with statuses, contacts and active loads" loading="lazy" /><figcaption>Manage Carriers: the carriers a shipper works with, each with its status, contacts and active loads.</figcaption></figure>

## From a validated model to a paid product

Once the model had proved useful in real carrier evaluations, we turned it into SuperProtect, a paid product. I designed the subscription and payment experience and placed the offer inside existing workflows, so shippers could discover it while reviewing a carrier, request a demo from the product, and understand the service before subscribing.

<figure class="grid2"><img src="/work/superprotect/contextual-promo.webp" alt="Caution drawer with a contextual SuperProtect offer" loading="lazy" /><img src="/work/superprotect/in-product.webp" alt="SuperProtect page inside the product" loading="lazy" /><img src="/work/superprotect/subscription-promo.webp" alt="Subscription details with a Request Demo action" loading="lazy" /><img src="/work/superprotect/subscription-active.webp" alt="Subscription details with an active SuperProtect plan" loading="lazy" /><figcaption>The offer in context, the in-product page, and subscription before and after purchase.</figcaption></figure>

<figure><img src="/work/superprotect/public-page.webp" alt="Public Super Dispatch page introducing SuperProtect" loading="lazy" /><figcaption>SuperProtect on the public Super Dispatch website.</figcaption></figure>

## How I worked with AI

Claude was my research partner on the data. We read through the same carrier source material, company details, authority status, safety ratings, environmental registrations and commodity information, and grouped it into the sections a shipper needs before booking. The judgment on what a shipper sees first stayed mine and the team's.

Tools on this project: Figma, FigJam, Figma Make, Claude, Codex, Heap.

## What shipped

- A restructured carrier profile: company information, compliance, insurance, ratings and performance in one view.
- A Passed / Failed status with explainable checks in three groups.
- The status on marketplace search, carrier cards, load requests and offers, and the Manage Carriers dashboard.
- Carrier recommendations, SuperProtect subscription, payment and in-product demo request.
- Shared UX and UI patterns, documented so other teams could ship them consistently.

## Results

<div class="stat">
  <div><b>9 mo</b><span>from start to paid release</span></div>
  <div><b>Paid</b><span>released and selling to its first customers</span></div>
  <div><b>4 → 1</b><span>sources a shipper checks before booking</span></div>
</div>

Shippers no longer validate a carrier by hand across external sites. In follow-up interviews, where shippers used the product themselves, they were making booking decisions based on the flags.

<figure><img src="/work/superprotect/heap-usage.webp" alt="Heap chart of SuperProtect flag usage over time" loading="lazy" /><figcaption>Heap tracking of how shippers used the risk flags.</figcaption></figure>

## What I would measure next

- The share of bookings where the shipper opened the checks before deciding.
- How often carriers with a Failed status still get booked, before and after the status appeared on load requests.
- Time from opening a load request to booking a carrier.
- Conversion from demo request to a paid SuperProtect subscription.

## Reflection

The work began as a data problem and ended as a trust problem. Bringing records together was the easy part. The real design work was deciding what to show at a glance, what to keep one click away, and how to leave the final decision with the person who carries the risk.
