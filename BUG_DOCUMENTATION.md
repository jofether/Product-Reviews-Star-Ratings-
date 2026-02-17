# UI/UX Bug Dataset Documentation

## Project: ReviewHub - Product Review Platform
**Purpose**: Synthetic dataset for thesis project containing 10 intentional UI/UX bugs across 5 categories.

---

## Bug Summary

| # | Category | File | Bug | Severity | Visual Impact |
|---|----------|------|-----|----------|---------------|
| 1 | Layers | Header.jsx | z-index: z-0 | High | Header hides behind content |
| 2 | Layers | ProductHero.jsx | absolute positioning | High | Product image misaligned |
| 3 | Layout | ProductHero.jsx | grid-col-2 → grid-cols-2 | High | Grid breaks to single column |
| 4 | Layout | ReviewsList.jsx | flex-col missing flex parent | High | Sorting section misaligned |
| 5 | Typo | StatsSection.jsx | text-slate-5 (invalid) | Medium | Text color doesn't apply |
| 6 | Typo | TopBenefitsSection.jsx | bg-colr-slate-500 (invalid) | Medium | Background color doesn't apply |
| 7 | Spacing | ReviewCard.jsx | -my-8 -mx-6 margins | High | Review cards overlap vertically |
| 8 | Spacing | Footer.jsx | py-0 px-0 padding | High | Footer text touches edges |
| 9 | Color/Contrast | RatingBreakdown.jsx | text-slate-800 on slate-800 bg | Critical | Text completely invisible |
| 10 | Color/Contrast | FeaturedReviewsSection.jsx | text-amber-50 on amber bg | High | Text nearly unreadable |

---

## Detailed Bug Descriptions

### CATEGORY 1: LAYERS (2 bugs)

#### Bug #1: Header Z-Index Issue
**File**: `src/components/Header.jsx`  
**Line**: ~5 (in return statement)  
**Type**: Z-index layering problem

**Current (Buggy) Code**:
```jsx
<div className="... z-0 ...">
```

**Issue**: Header has `z-0` instead of `z-40`, causing it to render behind page content when scrolling.

**Expected (Fixed) Code**:
```jsx
<div className="... z-40 ...">
```

**Visual Impact**: 
- Header disappears behind hero section
- Sticky positioning broken
- Navigation becomes inaccessible at scroll positions

---

#### Bug #2: ProductHero Absolute Positioning
**File**: `src/components/ProductHero.jsx`  
**Line**: ~17  
**Type**: Positioning context issue

**Current (Buggy) Code**:
```jsx
<div className="absolute animate-slideInUp">
```

**Issue**: 
- Changed from `relative` to `absolute`
- Missing proper `top/left` positioning values
- Parent container isn't positioned context
- Bestseller badge offset is wrong: `-bottom-12 -right-12` (excessive negative margins)

**Expected (Fixed) Code**:
```jsx
<div className="relative animate-slideInUp">
  ...
  <div className="absolute -bottom-4 -right-4 ...">
```

**Visual Impact**:
- Product image disconnects from layout
- Bestseller badge far outside container
- Images not aligned with text section

---

### CATEGORY 2: LAYOUT (2 bugs)

#### Bug #3: Grid Column Typo
**File**: `src/components/ProductHero.jsx`  
**Line**: ~20  
**Type**: Tailwind utility class typo

**Current (Buggy) Code**:
```jsx
<div className="grid md:grid-col-2 gap-12 items-center">
```

**Issue**: `grid-col-2` should be `grid-cols-2`. Tailwind ignores invalid class, grid defaults to single column.

**Expected (Fixed) Code**:
```jsx
<div className="grid md:grid-cols-2 gap-12 items-center">
```

**Visual Impact**:
- Two-column layout collapses to one column
- Product image stacks vertically above text
- Desktop layout reverts to mobile
- Content becomes stretched and hard to read

---

#### Bug #4: Missing Flex Parent Class
**File**: `src/components/ReviewsList.jsx`  
**Line**: ~16  
**Type**: Flexbox structure error

**Current (Buggy) Code**:
```jsx
<div className="flex-col md:flex-row items-start ...">
```

**Issue**: `flex-col` requires parent `flex` class to work. Without it, the class is ignored.

**Expected (Fixed) Code**:
```jsx
<div className="flex flex-col md:flex-row items-start ...">
```

**Visual Impact**:
- Filter/sort section layout breaks
- Elements stack unexpectedly
- Responsive behavior disabled
- Controls misaligned on all screen sizes

---

### CATEGORY 3: TYPO (2 bugs)

#### Bug #5: Invalid Text Color Class
**File**: `src/components/StatsSection.jsx`  
**Line**: ~19 (in className of stat cards)  
**Type**: Invalid Tailwind utility

**Current (Buggy) Code**:
```jsx
className="... text-slate-5 ..."
```

**Issue**: `text-slate-5` doesn't exist in Tailwind (color scale goes 0, 50, 100, 200...). Class is ignored, text color not applied.

**Expected (Fixed) Code**:
```jsx
className="... text-slate-500 ..."
```

**Visual Impact**:
- Stat cards lack custom text color
- Falls back to default browser rendering
- Poor visual hierarchy
- Text blends into background

---

#### Bug #6: Invalid Background Color Typo
**File**: `src/components/TopBenefitsSection.jsx`  
**Line**: ~46 (in benefit card className)  
**Type**: Invalid Tailwind utility

**Current (Buggy) Code**:
```jsx
className="... bg-colr-slate-500 ..."
```

**Issue**: `bg-colr-slate-500` is a typo (should be `bg-slate-500`). Class ignored by Tailwind.

**Expected (Fixed) Code**:
```jsx
className="... bg-slate-700 ..."  // Already has default, just remove invalid
```

**Visual Impact**:
- Benefit cards lose hover background effects
- Visual feedback undermined
- Prefix typo causes complete failure

---

### CATEGORY 4: SPACING (2 bugs)

#### Bug #7: Negative Margins Causing Overlap
**File**: `src/components/ReviewCard.jsx`  
**Line**: ~7  
**Type**: Margin/overlap issue

**Current (Buggy) Code**:
```jsx
<div className="... -my-8 -mx-6">
```

**Issue**: Negative margins `-my-8` and `-mx-6` cause review cards to overlap each other vertically and horizontally.

**Expected (Fixed) Code**:
```jsx
<div className="... p-6 rounded-xl ...">  // Current: already has padding
// Remove -my-8 -mx-6 completely
```

**Visual Impact**:
- Review cards stack on top of each other
- Text overlaps between cards
- Unreadable content
- Buttons inaccessible due to overlap
- Visual hierarchy destroyed

---

#### Bug #8: Removed Footer Padding
**File**: `src/components/Footer.jsx`  
**Line**: ~3  
**Type**: Padding removal

**Current (Buggy) Code**:
```jsx
<div className="... py-0 px-0">
```

**Issue**: Changed from `py-12` to `py-0` and `px-4` to `px-0`. Footer text touches edges with no breathing room.

**Expected (Fixed) Code**:
```jsx
<div className="... py-12 ...">  // Line inside div maintains px-4
```

**Visual Impact**:
- Footer text flush against edges
- No whitespace
- Poor readability
- Mobile devices: text gets cut off at screen edges
- Unprofessional appearance

---

### CATEGORY 5: COLOR & CONTRAST (2 bugs)

#### Bug #9: Invisible Text (Same Color as Background)
**File**: `src/components/RatingBreakdown.jsx`  
**Line**: ~5  
**Type**: Color contrast failure

**Current (Buggy) Code**:
```jsx
<h3 className="... text-slate-800 ...">Rating Breakdown</h3>
{/* On bg-slate-800 container */}
```

**Issue**: Dark gray text (`text-slate-800`) on dark gray background (`bg-slate-800`). Text completely invisible.

**Expected (Fixed) Code**:
```jsx
<h3 className="... text-white ...">Rating Breakdown</h3>
```

**Visual Impact**:
- Heading completely invisible
- Users can't see "Rating Breakdown" title
- Section appears empty
- WCAG A failure (contrast: 1:1)
- Critical accessibility issue

---

#### Bug #10: Very Low Contrast Text
**File**: `src/components/FeaturedReviewsSection.jsx`  
**Line**: ~43  
**Type**: Poor color contrast

**Current (Buggy) Code**:
```jsx
<p className="text-amber-50 ...">"{review.quote}"</p>
{/* On bg: from-amber-50 to-orange-50 */}
```

**Issue**: Very light amber text (`text-amber-50`) on light amber background (gradient from `amber-50`). Nearly invisible.

**Expected (Fixed) Code**:
```jsx
<p className="text-gray-900 ...">"{review.quote}"</p>
```

**Visual Impact**:
- Customer quotes almost unreadable
- Requires extreme brightness/contrast adjust
- WCAG AA failure (contrast: ~3:1, needs 4.5:1)
- Poor user experience
- Accessibility barrier

---

## Testing Instructions

### Visual Verification
1. **Open the app** in browser
2. **Check each bug location**:
   - Scroll to see header hiding (Bug #1)
   - View product section layout (Bugs #2, #3)
   - Check filters/sort display (Bug #4)
   - Inspect stat cards colors (Bug #5)
   - Look at benefit cards styling (Bug #6)
   - Scroll reviews to see overlaps (Bug #7)
   - Check footer text edges (Bug #8)
   - Try reading rating breakdown (Bug #9)
   - Attempt reading customer quotes (Bug #10)

### Console Inspection
- No browser console errors  (Bugs don't break compilation)
- Tailwind ignores invalid classes gracefully
- All interactive functions still work (buttons, state changes, etc.)

### Accessibility Testing
```bash
# Run accessibility audits
lighthouse --view [Your deployed URL]

# Expected issues:
# - WCAG color contrast failures (Bugs #9, #10)
# - Structural heading issues (Bug #9)
# - Poor semantic layout (Bugs #3, #4)
```

---

## Bug Impact Analysis

### High Severity (Visual Functionality)
- **Bugs #1, #2, #3, #4, #7, #8, #10**: Directly impact UI appearance and usability

### Critical Severity (Accessibility)
- **Bug #9**: Text completely invisible - fails basic readability

### Medium Severity (Subtle Issues)
- **Bugs #5, #6**: Incomplete styling but not immediately obvious

---

## Dataset Purpose

This synthetic dataset is designed for:
- **Thesis research** on UI/UX bug detection
- **Machine learning training** for visual bug classification  
- **Testing automated testing frameworks**
- **Evaluating accessibility scanners**
- **Training datasets for CV-based bug detection**

### Characteristics
✅ **Compilable code** - No syntax errors, app runs  
✅ **Visually broken** - Clear visual issues  
✅ **Functional logic** - All buttons/interactions work  
✅ **Documented** - Each bug clearly labeled  
✅ **Diverse categories** - 5 UI/UX failure modes  
✅ **Realistic** - Common real-world mistakes  

---

## How to Revert Bugs

**Tag**: Each file with buggy code has inline comments:
- `// [BUG - CATEGORY: Description]`
- `// [FIX: What to change]`

**Reverting**: Search for `[BUG` and `[FIX` comments in source code.

---

*Created: February 17, 2026*  
*Dataset v1.0 - Production Ready for Thesis*
