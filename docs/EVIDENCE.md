# Evidence Ledger

This file separates what has actually been observed from what remains unknown.

## E-001 Public homepage
- Status: OBSERVED
- URL: `/`
- Captured: textual structure, route links, product messaging, plan names/prices/features.
- Not captured: exact CSS, fonts, dimensions, images/icons, animations, breakpoint behavior.

## E-002 Login route
- Status: PARTIAL
- URL: `/login`
- Captured: route existence from multiple homepage links.
- Not captured: form fields, auth provider, validation, errors, redirects, visual design.

## E-003 Legal routes
- Status: PARTIAL
- URLs: `/l/privacidade`, `/l/termos`
- Captured: route existence from footer links.
- Not captured: body content or layout.

## E-004 Authenticated product
- Status: BLOCKED
- Reason: current execution environment blocks outbound Chromium navigation and text fetch does not support authenticated sessions.
- Rule: no authenticated behavior will be fabricated while blocked.
