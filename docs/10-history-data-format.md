# PRISM: Patient History Data Format

The **header** must be exactly:

```
| WHEN | WHO | WHERE | WHAT | WHY |
| ---- | --- | ----- | ---- | --- |
```

Below the header, each **row** represents a single procedure (or dispensed product) with the following **five** columns:


## 1. WHEN

- **Definition**: Date of service in `YYYY-MM-DD` format (ISO 8601).
- **Requirement**: Always included.
- **If missing**: Leave the cell blank, but do **not** drop the row.

Example:

```
2024-02-15
```


## 2. WHO

- **Definition**: Provider specialty, using NUCC taxonomy.
- **Format**: `NUCC-<code>: <official NUCC short descriptor>`
- **Requirement**: Always included.
- **If missing**: Leave blank, but keep the row.

Example:

```
NUCC-207X00000X: Orthopaedic Surgery
```


## 3. WHERE

- **Definition**: Place of service, using CMS POS codes.
- **Format**: `POS-<code>: <official CMS POS descriptor>`
- **Requirement**: Always included.
- **If missing**: Leave blank, but keep the row.

Example:

```
POS-22: On Campus-Outpatient Hospital
```


## 4. WHAT

- **Definition**: The procedure or product (CPT, HCPCS, or NDC), plus any modifiers.
- **Format**:
  1. Start with one of:
     - `CPT-<code>` (for AMA CPT)
     - `HCPCS-<code>` (for CMS HCPCS)
     - `NDC-<10 or 11-digit code>` (for FDA National Drug Codes)
  2. If modifiers are present, **chain them** onto the code with dashes (e.g., `CPT-29881-59-RT`).
  3. After the colon, **first** include the *official code descriptor* (no truncation).
  4. If there are one or more modifiers, **append** each modifier’s official short descriptor as additional semicolon-separated items.

**Example with a CPT code and two modifiers**:
```
CPT-29881-59-RT: Arthroscopy, knee, surgical; with meniscectomy (medial or lateral, including any meniscal shaving); Distinct procedural service; Right side
```
Here:
- **`29881`** is the CPT code.
- **`-59`** is the Distinct Procedural Service modifier.
- **`-RT`** is the Right Side modifier.
- The official CPT code descriptor is listed first, then each modifier’s descriptor follows, separated by semicolons.

**Requirement**: Always included.
- If no modifiers apply, you only have something like:
  ```
  CPT-84443: Thyroid stimulating hormone (TSH) assay
  ```
- If missing data, leave blank.


## 5. WHY

- **Definition**: One or more ICD-10 codes (from CDC/WHO), each with their official short descriptor.
- **Format**:
  - For each diagnosis: `ICD10-<code>: <official ICD-10 short descriptor>`
  - If multiple diagnoses, **separate them with semicolons**.
- **Requirement**: Always included. (At least one diagnosis is expected if a procedure is billed.)
- **If missing data**: Leave blank, but keep the row.

Example with two diagnoses:

```
ICD10-E03.9: Hypothyroidism, unspecified; ICD10-R53.83: Other fatigue
```


## 6. No Dropping Rows

- **If any field** (WHEN, WHO, WHERE, WHAT, WHY) is missing data, you must still produce a row.
- The missing field is left empty, but never replaced with a placeholder (e.g., “N/A”) — just leave it blank.


## 7. No Financial or Identifying Data

- **Exclude** any cost, payment, approval/denial, or personal identifiers (patient name, provider ID, etc.).
- Only use code sets: NUCC (WHO), POS (WHERE), CPT/HCPCS/NDC (WHAT), ICD-10 (WHY).


## 8. Example

Below is a **single** table (for one patient) with three rows, illustrating all rules:

```
| WHEN | WHO | WHERE | WHAT | WHY |
| ---- | --- | ----- | ---- | --- |
| 2024-02-15 | NUCC-207X00000X: Orthopaedic Surgery | POS-22: On Campus-Outpatient Hospital | CPT-29881-59-RT: Arthroscopy, knee, surgical; with meniscectomy (medial or lateral, including any meniscal shaving); Distinct procedural service; Right side | ICD10-M23.2: Derangement of meniscus due to old tear or injury |
| 2024-02-15 | NUCC-2085R0202X: Diagnostic Radiology | POS-22: On Campus-Outpatient Hospital | CPT-73721-26: Magnetic resonance imaging, lower extremity joint; without contrast material; Professional component                                       | ICD10-M23.2: Derangement of meniscus due to old tear or injury |
| 2024-06-10 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-84443: Thyroid stimulating hormone (TSH) assay | ICD10-E03.9: Hypothyroidism, unspecified; ICD10-R53.83: Other fatigue |
```

### Row 1 Explanation
- **WHEN**: `2024-02-15`
- **WHO**: Orthopaedic Surgery (NUCC code `207X00000X`)
- **WHERE**: On Campus-Outpatient Hospital (POS `22`)
- **WHAT**:
  - `CPT-29881-59-RT`: The code is **29881** (arthroscopy knee with meniscectomy).
  - After the colon, the official CPT short descriptor is shown exactly, then two modifiers appended with their official short descriptors:
    - `; Distinct procedural service`
    - `; Right side`
- **WHY**: `ICD10-M23.2: Derangement of meniscus due to old tear or injury`

### Row 2 Explanation
- **WHEN**: Same date, same facility, but a separate procedure.
- **WHAT**:
  - `CPT-73721-26`: MRI of the lower extremity joint, without contrast;
  - `-26` is appended; after the official CPT descriptor, we add `; Professional component`.

### Row 3 Explanation
- Different date, different setting (POS-11 = Office), no modifiers.
- **Multiple diagnoses** separated by semicolons in the **WHY** column.


## Final Notes

- **No row is omitted**—if data is missing, the field is blank.
- **No extra whitespace**—the header row appears exactly as shown, and each subsequent row is just one line.
- **Modifier short descriptors** are appended after the procedure code’s official descriptor, each separated by semicolons.
- All code descriptors (CPT, ICD-10, NUCC, POS, etc.) **must** be the official ones from their source sets, **unchanged**.
