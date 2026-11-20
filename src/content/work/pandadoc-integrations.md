---
title: One guided flow for connecting six CRMs
company: PandaDoc
years: 2019–2020
order: 4
card: Integration setup for HubSpot, Salesforce, Pipedrive, Zoho and more, redesigned as one self-serve flow.
tags: [B2B SaaS, CRM integrations, Workflow automation]
role: Product Designer, Integrations team
team: 1 designer, 3 engineers, 2 PMs
timeline: 8 months
platform: Web
status: Live
tldr:
  problem: Sales reps and admins faced error-prone field mapping and disconnected setup steps, so many contacted support instead of finishing setup.
  did: I redesigned the setup for 6 CRMs as one guided flow, with visual status-to-stage mapping, live field samples, test sync and in-context validation.
  result: The integration shipped with guided setup, field mapping and CRM data sync that non-technical users can configure themselves.
---

<figure><div class="ph">Hero image: the field mapping step with live samples</div></figure>

## My role

As Product Designer in the Integrations team I worked with two PMs, three engineers and support on the setup flows, mapping interactions and validation for PandaDoc's CRM integrations.

## Research

- Interviews with sales ops and sales reps about current integration pain points.
- Shadow sessions watching admins configure existing integrations and troubleshoot them.
- An analysis of CRM fields and the data users moved by hand.
- A competitive review of common integration patterns.

What we learned:

- Admins wanted one mapping page, not several disconnected screens.
- Users were unsure which PandaDoc field maps to which CRM field and needed live samples and clear names.
- Status-to-stage mapping is conceptually hard; a visual mapping with validation is easier to trust.
- Without a preview, people got scared and contacted support instead of finishing setup.

## Design decisions

<div class="decision">

### One flow from connection to enable

<dl>
  <dt>Options</dt><dd>Keep setup spread across settings screens, or guide users through one sequence.</dd>
  <dt>Why this one</dt><dd>Connect, select a template, map fields, map statuses to stages, test sync, enable. Each step depends on the one before, so a single flow prevents half-finished setups.</dd>
  <dt>Trade-off</dt><dd>Power users lose some freedom to jump around, so every step stays editable later.</dd>
</dl>

</div>

<div class="decision">

### Show the data before it syncs

<dl>
  <dt>Options</dt><dd>Map fields by name only, or show live samples and let users run a test sync.</dd>
  <dt>Why this one</dt><dd>Seeing real values removed the fear of breaking CRM data, the main reason people stopped and asked support.</dd>
  <dt>Trade-off</dt><dd>More engineering for previews, rate limits and permission errors.</dd>
</dl>

</div>

<figure><div class="ph">Document status → CRM deal stage mapping with validation</div></figure>

## What shipped

Guided setup for 6 CRMs, including HubSpot, Salesforce, Pipedrive and Zoho; visual field and stage mapping; test sync with feedback; and new mapping components in the shared Sketch library.

## What I would measure next

- Setup completion rate.
- Time from connecting a CRM to enabling the sync.
- Support tickets about integration setup.
