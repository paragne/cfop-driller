# Owner hints and legend

Date: 2026-10-22. Written by the owner. Source text for Case.hint (OLL and PLL) and the legend drawer (STATE task 6). Copy hints as written.

Names are PDF names (docs/oll-mapping.md). "Anti-Nazi" and "Nazi" are keys from the owner's list only: they are oll-3 and oll-4, which keep the names "OLL 3" and "OLL 4" in the app (DECISIONS.md 2026-10-20). Sune, Anti-Sune and Pi/Bruno get no hint.

## Hints

| Case | Hint |
|---|---|
| Cross (oll-21) | `(Su) (R U' R' U) (Ne)` |
| Chameleon | `(fat sexy) (fat sledge)` |
| Headlights | `R2 D (~Ne~) D' (~Ne~) R2` |
| Bowtie | `F' (Chameleon*) F, * = (fat sexy) (fat sledge)` |
| T | `F (sexy) F'` |
| Key | `(sexy) (sledge)` |
| Righty-Square | `Wide Anti-Sune` |
| Lefty-Square | `~Righty-Square*~ [*Wide Anti-Sune]` |
| Arrow | `(fat sexy) M (insert)` |
| H (oll-57) | `(sexy) M' (thick insert)` |
| Lightning | `Wide Sune` |
| Reverse Lightning | `~Lightning*~ [*Wide Sune]` |
| Downstairs | `M (Sune) U M'` |
| Upstairs | `~Downstairs~ = M' (~Sune~) U' M` |
| Big Lightning | `R' F (sexy) F' U R` |
| Lefty Big Lightning | `\|\|Big Lightning\|\|` |
| P | `f (sexy) f'` |
| Inverse P | `\|\|P\|\|` |
| Couch | `(Big Lightning)⁻¹` |
| Anti-Couch | `~Couch~ = S (Key) S'` |
| Seein' Headlights | `R' U' (sledge) U R` |
| City | `(sexy) B' (sledge) B` |
| Mounted Fish | `F (anti-sexy) (Su[:3]) F'` |
| Fish Salad | `(Ne) (sledge) (Ne)` |
| Kite | `(sexy) (sledge[:3]) (sexy) F'` |
| Anti-Kite | `(Su) (sledge) (Ne)` |
| Breakneck | `F 2(sexy) F'` |
| Anti-Breakneck | `R' U' 2(sledge) U R` |
| Anti-Frying Pan | `Wide Cross* [*(Su) (R U' R' U) (Ne)]` |
| Frying Pan | `~Wide Cross*~ [*(Su) (R U' R' U) (Ne)]` |
| Front Squeezy | `r' U r2 U' r2 U' r2 U r'   (pdrome U goes + - - +)` |
| Back Squeezy | `~Front Squeezy~` |
| Mario | `(Su) (anti-sexy) (sledge)` |
| Wario | `~Mario*~ [*(Su) (anti-sexy) (sledge)]` |
| Ant | `f 2(sexy) f'` |
| Rice Cooker | `(Su) R U' y (R U' R') F'` |
| Streetlights | `(r U r') 2(insert) (r U' r')` |
| Highway | `(Ne) (~Sune~) (sledge)` |
| Anti-Squeegee | `(r U r') (sexy) (r U' r')` |
| Squeegee | `~Anti-Squeegee*~ [*(r U r') (sexy) (r U' r')]` |
| Gun | `(Kite)⁻¹ = F (insert) (sledge[:3])⁻¹ (insert)` |
| Anti-Gun | `(sledge[:3]) U (sledge[:3])⁻¹ (F U' F')` |
| Poodle | `(Sune) (T)` |
| Anti-Poodle | `(~Sune~) (T)` |
| WTF | `y (sexy) (R U' R') (F' U' F) (R U R')` |
| Anti-WTF | `F U 2(Ne U') F'` |
| Blank | `(Ne) (sledge) U2' (sledge)` |
| Zamboni | `(T) (P)` |
| Slash | `(Su) (sledge) U2' (sledge)` |
| X | `M U (sexy) M2 (thick insert)` |
| Bunny | `M U (sexy) M' (sledge)` |
| Crown | `(Wide Sune) ~Wide Sune~` |
| Anti-Nazi (oll-3) | `(P) U' (T)` |
| Nazi (oll-4) | `(P) U (T)` |

## PLL hints

The PLL list arrived 2026-10-22, in the owner's words.

```
EDGES ONLY
Ua = (Su) (R' U' R2 U' R') (⇌Su⇌)          palindrome: reads the same backward
Ub = R' U R' U' R' (~insert~) U R2
H  = M2 U' M2 U2 M2 U' M2                   palindrome
Z  = M' U' 2(M2 U') M' U2 M2

CORNERS ONLY
Aa = x R' U (R' D2 R) U' (R' D2 R) R x'     same shape as Headlights
Ab = (Aa)⁻¹
E  = x' (a D b D') (b D a D') x             a = R U' R', b = Su[:3] = R U R'

ADJACENT SWAP
T  = (sexy) (sledge[:3]) (anti-sexy) (Su[:3]) F'
F  = (R' U' F') (T) (F U R)
Jb = (R U R' F') (T[:9])
Ja = x R2 (F R F') R U2 (r' U r) U2 x'
Ra = (anti-sexy) R U R D (R' U' R) D' R' U2 R'
Rb = (~Ne~) U2 R' F (sexy) R' F' R2

DIAGONAL SWAP
Y  = (Mounted Fish) (Key)
Na = (Su) (Jb) U2 (R U' R')
Nb = (R' U R U') R' (F' U' F) (sexy) R U' (f R f')
V  = (R' U R' U') (R D' R' D) R' (U D') R2 U' R2 D R2

G-PERMS
Ga = R2 U (R' U R' U') R U' R2 D (~insert~) D'
Gb = (Ga)⁻¹
Gc = D (~Ga~) D'
Gd = (Gc)⁻¹ = D (~Gb~) D'
```

In the app the column padding is cut to three spaces.

## Legend

```
ELEMENTS
sexy        = R U R' U'
anti-sexy   = R U' R' U'
insert      = U R U' R'
sledge      = R' F R F'
Su          = R U R' U        (first half of Sune)
Ne          = R U2' R'        (second half of Sune)

LAYER MODIFIERS
fat         = first turn is 2 layers
thick       = last turn is 2 layers
wide        = first and last turn are 2 layers

TRANSFORMS
⇌alg⇌       = reverse: same moves, backward order, primes unchanged
(alg)⁻¹     = inverse: backward order, flip every turn (X2 stays X2)
||alg||     = left/right mirror: swap R↔L and r↔l, flip every turn except M
              (M stays M); y→y', z→z', x stays
~alg~       = front/back mirror: swap F↔B and f↔b, flip every turn except S
              (S stays S); x→x', y→y', z stays
              for R/U/M/r-only algs: just flip every turn, keep faces

STRUCTURE
n(alg)      = repeat alg n times
[:n]        = first n moves of alg, drop the rest
∧           = applies condition
*           = definition of cited alg
=           = "explanation / other name"

MERGE RULE
When chunks are joined, adjacent turns of the same face combine:
R' R' → R2,  R R' → nothing,  R R2 → R'

COMMONLY DERIVED ELEMENTS
~Ne~        = R' U2 R
~Sune~      = R' U' R U' R' U2 R
~sexy~      = R' U' R U
sledge[:3]  = R' F R
(sledge[:3])⁻¹ = R' F' R
```
