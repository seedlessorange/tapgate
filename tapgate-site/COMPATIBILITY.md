# TapGate Compatibility Guide

## How TapGate connects

TapGate connects to any gate operator that has a **dry-contact trigger input** — the same terminals your existing remote or keypad uses. Two wires, no special adapter.

## Compatibility quiz logic

The `/compatibility` page runs a 3-question client-side quiz:

### Q1: Gate type

| Type | Verdict |
|------|---------|
| Swing | ✅ Compatible |
| Sliding | ✅ Compatible |
| Barrier | ⚠️ Likely compatible (contact us) |
| Garage | ❌ Not directly supported |
| Other | ⚠️ Likely compatible (contact us) |

### Q2: Gate operator brand

Known compatible brands (trigger input confirmed):

- **CAME** — BXV, BKV, ZL, ATI, Krono, Frog, Fast
- **FAAC** — 400, 402, 412, 415, 740, 741, 746
- **Nice** — RD400, ROX, RDBA, Wingo, Too, Pop
- **BFT** — Deimos, Eli, Phobos, Virgo, Ares
- **Sommer** — twist, base+, pro+, Slimdrive
- **Hörmann** — ProMatic, SupraMatic, LineaMatic, RotaMatic
- **Marantec** — Comfort, Dynamic, Synergy
- **Ditec** — Facil, Neos, Cross
- **ROGER Technology** — R30, H30, SMARTY
- **LiftMaster** — LA400, CSW24, RSW12

Brands marked "Other/Unknown" → ⚠️ Likely compatible (contact us to confirm).

### Q3: Does your remote have a button that opens the gate?

| Answer | Meaning |
|--------|---------|
| Yes | Gate has a trigger input → ✅ |
| No | No obvious trigger → ❌ |
| Not sure | → ⚠️ Contact us |

### Result matrix

- **✅ Compatible**: Swing/Sliding + known brand + "Yes" → show buy CTA
- **⚠️ Likely compatible**: Barrier, Other, unknown brand, or "Not sure" → show contact form
- **❌ Not supported**: Garage, or "No" to button question → show contact form for custom integration

## Adding new brands

To add a supported brand, update the `brands` array in `/src/app/compatibility/page.tsx`. The quiz logic doesn't change — all named brands resolve as compatible for swing/sliding gate types.
