# OLL mapping: CubeHead PDF to existing cases

Date: 2026-10-20. Status: recommendations accepted 2026-10-20 (user confirms in-app per batch). Decision 2: OLL 29 and 30 keep their numbers. No data changed.

Source: `references/OLL in one month.pdf` ("How to Learn OLL in One Month" by CubeHead, 7 pages). STATE.md named `learn-oll-cubehead.pdf`; that file does not exist, and this is the only file in `references/`.

## Method

1. Text and algs taken with `pdftotext -layout`. Pages 2 to 6 rendered at 200 dpi and read by eye.
2. A scratch script (not committed) ran each PDF alg's inverse on a solved cube with `cube.ts` and `notation.ts`, then compared the 21 last-layer stickers that show U color against every Full OLL case's `algs[0]` picture under U, U2, U'.
3. Each PDF picture was checked by eye against the computed pattern of its first alg, including the side stickers. Four pictures are partly covered by note icons in the PDF (Sune, Headlights, Anti-Couch, Anti-Breakneck). The visible stickers agree.

## Results

- The PDF has 57 cases. Each one maps to exactly one existing Full OLL id, and all 57 ids are covered.
- Every PDF alg, primary and secondary, leaves F2L solved and orients the last layer.
- 39 PDF pictures match the app picture as is. 18 are the same case viewed after a U turn (column "Picture").
- One PDF picture disagrees with its own alg: City (OLL 34). The picture is the alg's case after U, so the printed alg needs U' first to solve the printed picture.
- One secondary alg uses a different AUF from its picture: Anti-Gun (OLL 14) `(r' U r) (U r' U' r) y (R U' R')` solves the picture only after U2.
- 35 PDF algs already appear in the data, all as algs[0]. The other 44 of the 79 are new. The comparison treats `X2'` the same as `X2` and ignores grouping.

## Table

Picture: "yes" means the PDF picture is the app picture. "rotated U2" means the PDF picture is the app picture after U2.

Alg status: "algs[0]" means it is already the case's first alg. "new" means it is not in the data. "needs U2 first" means the alg orients the app picture only with that AUF in front.

| PDF section | PDF name | PDF algs (status) | Id | Current name | Picture | Proposed change |
|---|---|---|---|---|---|---|
| Oriented Edges | Sune | `R U R' U R U2' R'` (algs[0])<br>`y' R' U2' R U R' U R` (new) | oll-27 | Sune | yes | Add 2nd alg as alternate |
| Oriented Edges | Anti-Sune | `R U2 R' U' R U' R'` (algs[0])<br>`y' R' U' R U' R' U2 R` (new) | oll-26 | Anti-Sune | yes | Add 2nd alg as alternate |
| Oriented Edges | Cross | `(R U2 R') (U' R U R') (U' R U' R')` (new, needs U first)<br>`y (R U R' U) (R U' R' U) (R U2' R')` (new, needs U first) | oll-21 | H | rotated U | Add both as alternates with U prefix. Keep name "H", add alias "Cross" (see decision 1) |
| Oriented Edges | Bruno | `R U2' R2' U' R2 U' R2' U2' R` (algs[0]) | oll-22 | Pi | yes | None. "Bruno" is already an alias |
| Oriented Edges | Chameleon | `(r U R' U') (r' F R F')` (algs[0]) | oll-24 | Chameleon | yes | None |
| Oriented Edges | Headlights | `R2 D (R' U2 R) D' (R' U2 R')` (algs[0])<br>`y2 R2' D' (R U2 R') D (R U2 R)` (new) | oll-23 | Headlights | yes | Add 2nd alg as alternate |
| Oriented Edges | Bowtie | `F' (r U R' U') r' F R` (algs[0]) | oll-25 | Bowtie | yes | None |
| T-shapes | T | `F (R U R' U') F'` (algs[0]) | oll-45 | OLL 45 | yes | Name "T" |
| T-shapes | Key | `(R U R' U') (R' F R F')` (algs[0]) | oll-33 | OLL 33 | yes | Name "Key" |
| Squares | Righty-Square | `r U2 R' U' R U' r'` (algs[0]) | oll-6 | OLL 6 | yes | Name "Righty Square" |
| Squares | Lefty-Square | `r' U2' R U R' U r` (algs[0]) | oll-5 | OLL 5 | yes | Name "Lefty Square" |
| Solved Corners | Arrow | `(r U R' U') M (U R U' R')` (algs[0]) | oll-28 | OLL 28 | yes | Name "Arrow" |
| Solved Corners | H | `(R U R' U') M' (U R U' r')` (algs[0]) | oll-57 | OLL 57 | yes | Name collides with oll-21 (see decision 1) |
| Lightning Bolts | Lightning | `r U R' U R U2' r'` (algs[0]) | oll-7 | OLL 7 | yes | Name "Lightning" |
| Lightning Bolts | Reverse Lightning | `r' U' R U' R' U2 r` (new, needs U2 first)<br>`y2 l' U' L U' L' U2 l` (new, needs U2 first) | oll-8 | OLL 8 | rotated U2 | Name "Reverse Lightning". Add both as alternates with U2 prefix |
| Lightning Bolts | Downstairs | `r' (R2 U R' U R U2 R') U M'` (algs[0]) | oll-11 | OLL 11 | yes | Name "Downstairs" |
| Lightning Bolts | Upstairs | `M' (R' U' R U' R' U2 R) U' M` (new) | oll-12 | OLL 12 | yes | Name "Upstairs". Add alg as alternate (algs[0] eligible) |
| Lightning Bolts | Big Lightning | `R' F (R U R' U') F' U R` (new, needs U2 first) | oll-40 | OLL 40 | rotated U2 | Name "Big Lightning". Add as alternate with U2 prefix |
| Lightning Bolts | Lefty Big Lightning | `L F' (L' U' L U) F U' L'` (new, needs U2 first)<br>`y2 (R U R') (F' U' F) (U R U2 R')` (new, needs U2 first) | oll-39 | OLL 39 | rotated U2 | Name "Lefty Big Lightning". Add both as alternates with U2 prefix |
| P-shapes | P | `f (R U R' U') f'` (new, needs U2 first)<br>`y2 F (U R U' R') F'` (new, needs U2 first) | oll-44 | OLL 44 | rotated U2 | Name "P". Add both as alternates with U2 prefix |
| P-shapes | Inverse P | `f' (L' U' L U) f` (new, needs U' first)<br>`y R' U' F' U F R` (new, needs U' first) | oll-43 | OLL 43 | rotated U' | Name "Inverse P". Add both as alternates with U' prefix |
| P-shapes | Couch | `R' U' F (U R U' R') F' R` (algs[0]) | oll-31 | OLL 31 | yes | Name "Couch" |
| P-shapes | Anti-Couch | `R U B' (U' R' U) R B R'` (new)<br>`S (R U R' U') (R' F R f')` (algs[0]) | oll-32 | OLL 32 | yes | Name "Anti-Couch". Add 1st alg as alternate (algs[0] eligible) |
| C-shapes | Seein' Headlights | `R' U' (R' F R F') U R` (algs[0]) | oll-46 | OLL 46 | yes | Name "Seein' Headlights" |
| C-shapes | City | `(R U R' U') B' (R' F R F') B` (new, needs U first)<br>`(R U R2' U') (R' F R U) R U' F'` (new, needs U first) | oll-34 | OLL 34 | rotated U2 | Name "City". Add both as alternates with U prefix. The PDF picture does not match its own alg (see Results) |
| Fishes | Mounted Fish | `F (R U' R' U') (R U R' F')` (new) | oll-37 | OLL 37 | yes | Name "Mounted Fish". Add as alternate (algs[0] eligible) |
| Fishes | Fish Salad | `(R U2') (R2' F R F') (R U2' R')` (algs[0]) | oll-35 | OLL 35 | yes | Name "Fish Salad" |
| Fishes | Kite | `(R U R' U') R' F (R2 U R' U') F'` (algs[0]) | oll-9 | OLL 9 | yes | Name "Kite" |
| Fishes | Anti-Kite | `(R U R' U) (R' F R F') (R U2' R')` (algs[0]) | oll-10 | OLL 10 | yes | Name "Anti-Kite" |
| L-shapes | Breakneck | `F (R U R' U') (R U R' U') F'` (algs[0]) | oll-48 | OLL 48 | yes | Name "Breakneck" |
| L-shapes | Anti-Breakneck | `R' U' (R' F R F') (R' F R F') U R` (new, needs U first)<br>`F' (L' U' L U) (L' U' L U) F` (new, needs U first) | oll-47 | OLL 47 | rotated U | Name "Anti-Breakneck". Add both as alternates with U prefix |
| L-shapes | Frying Pan | `(r' U' R U') (R' U R U') R' U2 r` (algs[0]) | oll-53 | OLL 53 | yes | Name "Frying Pan" |
| L-shapes | Anti-Frying Pan | `(r U R' U) (R U' R' U) R U2' r'` (algs[0]) | oll-54 | OLL 54 | yes | Name "Anti-Frying Pan" |
| L-shapes | Front Squeezy | `r' U r2 U' r2' U' r2 U r'` (algs[0]) | oll-50 | OLL 50 | yes | Name "Front Squeezy" |
| L-shapes | Back Squeezy | `r U' r2' U r2 U r2' U' r` (algs[0]) | oll-49 | OLL 49 | yes | Name "Back Squeezy" |
| W-Shapes | Mario | `(R U R' U) (R U' R' U') (R' F R F')` (algs[0]) | oll-38 | OLL 38 | yes | Name "Mario" |
| W-Shapes | Wario | `(R' U' R U') (R' U R U) l U' R' U x` (new, needs U2 first)<br>`y2 L' U' L U' L' U L U L F' L' F` (new, needs U2 first) | oll-36 | OLL 36 | rotated U2 | Name "Wario". Add both as alternates with U2 prefix. 1st alg ends with x (see decision 5) |
| Lines | Ant | `f (R U R' U') (R U R' U') f'` (new, needs U2 first)<br>`y2 F (U R U' R') (U R U' R') F'` (new, needs U2 first) | oll-51 | OLL 51 | rotated U2 | Name "Ant". Add both as alternates with U2 prefix |
| Lines | Rice Cooker | `(R U R' U R U') y (R U' R') F'` (new, needs U2 first)<br>`(R' U' R U' R' U) y' (R' U R) B` (new, needs U2 first) | oll-52 | OLL 52 | rotated U2 | Name "Rice Cooker". Add both as alternates with U2 prefix. Both rotate mid-alg (see decision 5) |
| Lines | Streetlights | `r U r' (U R U' R') (U R U' R') r U' r'` (algs[0])<br>`r' U' r (U' R' U R) (U' R' U R) r' U r` (new) | oll-56 | OLL 56 | yes | Name "Streetlights". Add 2nd alg as alternate |
| Lines | Highway | `R U2 R2 (U' R U' R') U2 F R F'` (new, needs U first)<br>`y (R' F R U) (R U' R2' F') R2 U' R' (U R U R')` (new, needs U first) | oll-55 | OLL 55 | rotated U | Name "Highway". Add both as alternates with U prefix |
| Knight Moves | Squeegee | `(r' U' r) (R' U' R U) (r' U r)` (new, needs U2 first)<br>`y2 l' U' l (L' U' L U) l' U l` (new, needs U2 first) | oll-15 | OLL 15 | rotated U2 | Name "Squeegee". Add both as alternates with U2 prefix |
| Knight Moves | Anti-Squeegee | `(r U r') (R U R' U') (r U' r')` (algs[0]) | oll-16 | OLL 16 | yes | Name "Anti-Squeegee" |
| Knight Moves | Gun | `F U R U' R2' F' R U (R U' R')` (algs[0])<br>`(r U' r') (U' r U r') (F' U F)` (new) | oll-13 | OLL 13 | yes | Name "Gun". Add 2nd alg as alternate |
| Knight Moves | Anti-Gun | `(R' F R) (U R' F' R) (F U' F')` (algs[0])<br>`(r' U r) (U r' U' r) y (R U' R')` (new, needs U2 first) | oll-14 | OLL 14 | yes | Name "Anti-Gun". Add 2nd alg as alternate with U2 prefix |
| Awkward Shapes | Poodle | `(R U R' U R U2' R') F (R U R' U') F'` (algs[0]) | oll-41 | OLL 41 | yes | Name "Poodle" |
| Awkward Shapes | Anti-Poodle | `(R' U' R U' R' U2 R) F (R U R' U') F'` (new, needs U' first) | oll-42 | OLL 42 | rotated U' | Name "Anti-Poodle". Add as alternate with U' prefix |
| Awkward Shapes | WTF | `r2 D' (r U r') D r2 (U' r' U' r)` (algs[0])<br>`y (R U R' U') (R U' R') (F' U' F) (R U R')` (new) | oll-29 | OLL 29 | yes | Add 2nd alg as alternate. Name: see decision 2 |
| Awkward Shapes | Anti-WTF | `F U (R U2 R' U') (R U2 R' U') F'` (algs[0]) | oll-30 | OLL 30 | yes | Name: see decision 2 |
| Dot-cases | Blank | `(R U2') (R2' F R F') U2' (R' F R F')` (algs[0]) | oll-1 | OLL 1 | yes | Name "Blank" |
| Dot-cases | Zamboni | `F (R U R' U') F' f (R U R' U') f'` (new, needs U2 first)<br>`y (r U r') U2 R U2' R' U2 (r U' r')` (new, needs U2 first) | oll-2 | OLL 2 | rotated U2 | Name "Zamboni". Add both as alternates with U2 prefix |
| Dot-cases | Slash | `(R U R' U) (R' F R F') U2' (R' F R F')` (new, needs U2 first) | oll-17 | OLL 17 | rotated U2 | Name "Slash". Add as alternate with U2 prefix |
| Dot-cases | X, aka Super lip | `M U (R U R' U') M2' (U R U' r')` (new) | oll-20 | OLL 20 | yes | Name "X", alias "Super Lip". Add as alternate (algs[0] eligible) |
| Dot-cases | Bunny | `M U (R U R' U') M' (R' F R F')` (new, needs U' first) | oll-19 | OLL 19 | rotated U' | Name "Bunny". Add as alternate with U' prefix |
| Dot-cases | Crown | `(r U R' U R U2 r') (r' U' R U' R' U2 r)` (algs[0])<br>`y R U2' (R2' F R F') U2' M' (U R U' r')` (new) | oll-18 | OLL 18 | yes | Name "Crown". Add 2nd alg as alternate |
| Dot-cases | (offensive name) | `f (R U R' U') f' U' F (R U R' U') F'` (new, needs U2 first) | oll-3 | OLL 3 | rotated U2 | Keep "OLL 3" (see decision 2). Add as alternate with U2 prefix |
| Dot-cases | (offensive name) | `f (R U R' U') f' U F (R U R' U') F'` (new) | oll-4 | OLL 4 | yes | Keep "OLL 4" (see decision 2). Add as alternate (algs[0] eligible) |

When a name is proposed for a case named "OLL n", "OLL n" moves to `aliases`, so search and the number stay available.

The PDF writes "X, aka Super lip" with no closing parenthesis on its alg. The table closes it.

## Decisions needed

1. **"H" collision.** The PDF calls OLL 21 "Cross" and OLL 57 "H". The app calls OLL 21 "H" (the 2-Look name). Recommendation: keep oll-21 as "H" and add alias "Cross". Leave oll-57 as "OLL 57" with alias "H" so two cards never show the same name.
2. **Names not fit for UI copy.** The PDF names OLL 3 and OLL 4 after a hate group. Recommendation: do not use them anywhere, not even as aliases. Keep "OLL 3" and "OLL 4". OLL 29 and 30 are "WTF" and "Anti-WTF". Your call: adopt them or keep the numbers.
3. **algs[0] policy.** 12 new algs solve the app picture as is: the only or first PDF alg of Upstairs, Anti-Couch, Mounted Fish, X and OLL 4, and the second PDF alg of Sune, Anti-Sune, Headlights, Streetlights, Gun, WTF and Crown. STATE says: alternate unless it solves the picture exactly. These do, so they could become algs[0]. Promoting one changes `setupCube` (permutation only; the masked OLL picture stays the same), so the 3D start state changes. Recommendation: add all of them as alternates and change no algs[0]. That keeps each picture and 3D state stable.
4. **AUF prefixes.** 18 cases have a PDF picture that is the app picture after a U turn. Two ways to handle them:
   - (a) Store the PDF alg as an alternate with the AUF in front, following the existing pattern in oll-24 and oll-25 (`U (R U R) D ...`). The app picture stays as it is.
   - (b) Make the PDF alg algs[0] so the app picture turns to match the PDF.

   Recommendation: (a). Option (b) changes pictures users have already learned.
5. **Rotations inside algs.** 15 new algs start with `y`, `y'` or `y2`. Three rotate later: Rice Cooker (both algs, `y` or `y'` mid-alg), Anti-Gun 2nd (`y` mid-alg), and Wario 1st (ends with `x`). `algorithms-structure.test.ts` normalizes the cube before checking, so the data tests accept them. I have not checked how Verify's regrip handles a mid-alg rotation. Check that in the batch that adds them.
6. **Section names.** Sections are display text only. The gallery keys on ids. The PDF groups match current sections one to one, but some labels differ:

   | Current section | PDF section | Ids |
   |---|---|---|
   | Finish OLL | Oriented Edges | 21 to 27 (shared with 2-Look OLL) |
   | Block Shapes | Squares | 5, 6 |
   | Edges Only | Solved Corners | 28, 57 |
   | Lightning Shapes | Lightning Bolts | 7, 8, 11, 12, 39, 40 |
   | Hook Shapes | L-shapes | 47, 48, 49, 50, 53, 54 |
   | L Shapes | Knight Moves | 13, 14, 15, 16 |
   | Line Shapes | Lines | 51, 52, 55, 56 |

   T, P, C, Fish, W, Awkward and Dot match apart from spelling. Current "L Shapes" holds what the PDF calls Knight Moves, and the PDF's "L-shapes" are current "Hook Shapes", which is easy to mix up. Recommendation: leave sections unchanged, or rename only "L Shapes" to "Knight Moves". Leave "Finish OLL" alone because 2-Look shows it.
7. **Hints.** The PDF notes (for example "Wide Sune, easy right?", "Never release r!", "Starts as a T-perm") are the obvious hint source. This is still blocked on the open CubeHead permission decision. Several notes are jokes or contain profanity, so they need rewriting either way. No hint text is proposed here.

## Batch plan check

The batches in STATE.md follow the PDF sections and add up to 57: batch 1 (Oriented Edges 7, T 2, Squares 2), batch 2 (Lightning 6, P 4), batch 3 (C 2, Fish 4, L 6), batch 4 (W 2, Lines 4, Knight 4, Awkward 4), batch 5 (Dot 8). Solved Corners (28, 57) is in no batch. Add it to batch 1.
