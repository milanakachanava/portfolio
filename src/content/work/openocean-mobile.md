---
title: Bringing fleet alerts to the phone in six months
company: 90 Percent of Everything
years: "2023"
order: 3
card: An iOS and Android companion for out-of-hours fleet monitoring, shipped by 2 designers and 4 engineers.
tags: [Mobile, Maritime, Offline-first]
role: Senior Product Designer
team: 2 designers, 4 engineers
timeline: 6 months
platform: iOS, Android
status: Live
tldr:
  problem: Fleet managers and vessel operators needed alerts and vessel data away from the desk and out of hours, often with poor connectivity.
  did: I translated the core onRADAR workflows to phones and tablets, chose the mobile scope from web usage data, designed offline and sync states, and built a mobile design system.
  result: A live iOS and Android companion that brings vessel status, alerts, tasks and messaging to operators away from the desk.
---

<figure><img src="/work/openocean-mobile/cover.webp" alt="OpenOcean Mobile: fleet, measurement tool and messages" loading="lazy" /></figure>

## My role

As Senior Product Designer I worked on the mobile companion to onRADAR and OOS with a second designer and four engineers, from scope to beta testing.

## Research

- Contextual interviews with operators who needed mobile access away from the desk.
- Shadow sessions to observe how crews and shore staff use phones during shifts and in transit.
- Usability testing of compact list and detail patterns and offline sync flows.
- A review of web usage analytics to pick the features that matter most on mobile.

<figure class="half"><img src="/work/openocean-mobile/research-interview.webp" alt="During a remote interview, an operator holds up his phone to show the map tool he uses to check a vessel" loading="lazy" /><figcaption>From a remote interview: an operator shows how he checks a vessel on his phone today.</figcaption></figure>

What we learned:

- People wanted one scannable alerts surface with immediate actions: acknowledge, message the crew, create a task.
- Alerts can arrive while connectivity is intermittent, so offline access and reliable sync are mandatory.
- Map and track views are key for quick verification.
- Dark mode and readable contrast matter for night shifts.
- Out of hours, the real question is time to react: does this alert need me now, or can it wait until the morning?

<figure><img src="/work/openocean-mobile/persona.webp" alt="Fleet Operations Manager persona" loading="lazy" /><figcaption>Fleet Operations Manager: what they need from the phone.</figcaption></figure>

## Design decisions

<div class="decision">

### Bring six features, not the whole platform

<dl>
  <dt>Options</dt><dd>Port the web product to mobile, or choose the features people need away from the desk.</dd>
  <dt>Why this one</dt><dd>Conversations with operators and dispatchers, and web analytics, showed the core of the job away from the desk: open an alert, understand its context, see the vessel on the map, measure a distance, make a basic change to the itinerary. Six features covered it: alerts, messages, fleet list, vessel track, tasks and the measurement tool. Procurement, fuel consumption and the rest of the platform stay on the desktop.</dd>
  <dt>Trade-off</dt><dd>Some web workflows stay desk-only, so mobile screens link back to the full context where needed.</dd>
</dl>

</div>

<div class="decision">

### Design for poor connectivity

<dl>
  <dt>Options</dt><dd>Assume a connection and show errors, or design offline states and sync rules from the start.</dd>
  <dt>Why this one</dt><dd>Operators check alerts in transit and at night. Clear sync indicators prevent lost actions and reduce stress.</dd>
  <dt>Trade-off</dt><dd>More states to design, specify and test for every action.</dd>
</dl>

</div>

<figure class="grid2"><img src="/work/openocean-mobile/ia.webp" alt="Information architecture flow" loading="lazy" /><img src="/work/openocean-mobile/levels.webp" alt="App levels and navigation" loading="lazy" /><figcaption>Information architecture and navigation levels.</figcaption></figure>

<div class="decision">

### Extend the web design system, don't fork it

<dl>
  <dt>Options</dt><dd>A separate mobile design language, or the web tokens extended with mobile sizes and patterns.</dd>
  <dt>Why this one</dt><dd>Shared tokens kept the product recognisable across web and mobile, while component variants gave each platform the right interactions.</dd>
  <dt>Trade-off</dt><dd>Changes to shared tokens now affect both products and need care.</dd>
</dl>

</div>

<figure class="grid2"><img src="/work/openocean-mobile/themes.webp" alt="Component types in dark and light themes" loading="lazy" /><img src="/work/openocean-mobile/position-spec.webp" alt="Position component specification" loading="lazy" /><figcaption>Component types in both themes, and a component specification.</figcaption></figure>

## What shipped

The app was built from scratch on Material Design, for iOS and Android, with the same alert data and messaging as the web product.


A live iOS and Android app with a bottom navigation, a persistent watching / assigned filter, light and dark themes, offline and sync states, and deep links from an alert to the vessel's position.

<figure><img src="/work/openocean-mobile/screens-alerts.webp" alt="Alert details, fleet view and map" loading="lazy" /><figcaption>Alert details, fleet view and map.</figcaption></figure>

<figure><img src="/work/openocean-mobile/screens-fleet.webp" alt="Fleet list, measurement tool and messaging" loading="lazy" /><figcaption>Fleet list, measurement tool and messaging.</figcaption></figure>

## What I would measure next

- Time to acknowledge an alert out of hours, on mobile versus web.
- Actions that fail or wait for sync, and how often.
- Weekly active mobile users among operators who already use the web product.
