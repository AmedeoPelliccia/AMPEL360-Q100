# S1000D XML to Markdown Transformation

**Directory:** `PUB/AMM/CSDB/DM/transforms/`  
**Purpose:** XSLT stylesheets for transforming S1000D XML Data Modules into human-readable Markdown  
**Owner:** STK_PUB  
**Version:** 1.0  
**Last Updated:** 2026-01-12  

---

## Overview

This directory contains XSLT stylesheets for automatically transforming S1000D Issue 5. 0 XML Data Modules into GitHub-flavored Markdown format. This dual-format approach provides: 

- ✅ **S1000D XML** — BREX-compliant, IETM-ready, certification-approved
- ✅ **Markdown** — Human-readable, version control friendly, GitHub searchable

---

## Transformation Workflow

```
S1000D XML Source
       ↓
   XSLT Transform (automated via GitHub Actions)
       ↓
GitHub-Flavored Markdown
       ↓
   Git commit (auto-commit bot)
```

---

## Files in This Directory

| File | Description |
|------|-------------|
| `s1000d-to-markdown.xslt` | Primary transformation stylesheet (S1000D 5.0 → Markdown) |
| `README.md` | This file — transformation documentation |

---

## Usage

### Automated Transformation (Recommended)

Transformations occur **automatically** via GitHub Actions (`.github/workflows/s1000d-to-markdown.yml`) on every push to `*. XML` files:

```bash
# Just commit your XML changes
git add DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.XML
git commit -m "Update glossary terms"
git push

# GitHub Actions automatically: 
# 1. Detects XML change
# 2. Runs XSLT transformation
# 3. Commits generated Markdown
# 4. Validates links
```

---

### Manual Transformation

If you need to transform locally:

#### Using Saxon HE (Java)

```bash
# Install Saxon
sudo apt-get install libsaxonhe-java

# Transform
saxon-xslt -s:../DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.XML \
           -xsl:s1000d-to-markdown.xslt \
           -o: ../DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.md
```

#### Using Saxon HE (Standalone)

```bash
# Download Saxon HE
wget https://sourceforge.net/projects/saxon/files/Saxon-HE/11/Java/SaxonHE11-4J.zip
unzip SaxonHE11-4J.zip

# Transform
java -jar saxon-he-11.4.jar \
     -s:../DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.XML \
     -xsl:s1000d-to-markdown.xslt \
     -o:../DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.md
```

#### Using xsltproc (libxslt)

```bash
# Note: xsltproc only supports XSLT 1.0; stylesheet uses 2.0 features
# Use Saxon for full compatibility

xsltproc -o ../DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.md \
         s1000d-to-markdown.xslt \
         ../DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US. XML
```

---

## Supported S1000D Elements

### Text Structure

| S1000D Element | Markdown Output | Example |
|----------------|-----------------|---------|
| `<levelledPara>` | Hierarchical headings | `##`, `###`, `####` |
| `<para>` | Paragraph with spacing | Plain text with blank line |
| `<simplePara>` | Single-line paragraph | Plain text |
| `<title>` | Section heading | `## Title` |

### Text Formatting

| S1000D Element | Markdown Output | Example |
|----------------|-----------------|---------|
| `<emphasis emphasisType="em01">` | **Bold** | `**text**` |
| `<emphasis emphasisType="em02">` | *Italic* | `*text*` |
| `<emphasis emphasisType="em03">` | ***Bold Italic*** | `***text***` |
| `<subscript>` | Subscript | H₂ → `H₂` |
| `<superscript>` | Superscript | m² → `m²` |

### Lists

| S1000D Element | Markdown Output | Example |
|----------------|-----------------|---------|
| `<randomList>` | Bullet list | `- Item` |
| `<sequentialList>` | Numbered list | `1. Item` |
| `<definitionList>` | Term + Definition | `### Term` + paragraphs |
| `<listItem>` | List item | `- ` or `1. ` |

### Tables

| S1000D Element | Markdown Output | Notes |
|----------------|-----------------|-------|
| `<table>` | GitHub table | Pipe-delimited |
| `<tgroup>` | Table group | Flattened |
| `<thead>` | Table header | `| Header |` |
| `<tbody>` | Table body | `| Data |` |
| `<row>` | Table row | One per line |
| `<entry>` | Table cell | `| Cell |` |

### Warnings and Cautions

| S1000D Element | Markdown Output | Example |
|----------------|-----------------|---------|
| `<warningAndCautionPara>` (WARNING) | `> [!WARNING]` | GitHub alert syntax |
| `<warningAndCautionPara>` (CAUTION) | `> [!CAUTION]` | GitHub alert syntax |
| `<warningAndCautionPara>` (NOTE) | `> [!NOTE]` | GitHub alert syntax |

### Cross-References

| S1000D Element | Markdown Output | Example |
|----------------|-----------------|---------|
| `<internalRef>` | Anchor link | `[text](#id)` |
| `<dmRef>` | DM link | `[Title](DMC-...)` |
| `<externalPubRef>` | Code/URI | `` `ampel360:term: id` `` |

### Code and Technical Content

| S1000D Element | Markdown Output | Example |
|----------------|-----------------|---------|
| `<verbatimText>` | Code block | ` ```text``` ` |
| `<acronym>` | Plain text | `BWB` |
| `<inlineSignificantData>` | Code inline | `` `code` `` |

---

## Transformation Limitations

### Not Supported

| S1000D Feature | Reason | Workaround |
|----------------|--------|------------|
| **Graphics** (`<graphic>`) | CGM/SVG not Markdown-native | Reference external image files |
| **3D Models** (`<multimediaObject>`) | Interactive content not supported | Link to external viewer |
| **Hotspots** | Interactive areas not supported | Convert to numbered list |
| **Complex Tables** (spanning cells) | Markdown tables are simple | Flatten or split tables |
| **Applicability** (`<applic>`) | Conditional text not rendered | Shows all content |
| **Change Markup** (`<reasonForUpdate>`) | Version control handles this | Use Git diff |
| **S1000D Styling** | Markdown uses GitHub CSS | Accept default styling |

### Partial Support

| S1000D Feature | Markdown Approximation | Notes |
|----------------|------------------------|-------|
| **Nested Tables** | Flattened structure | Information preserved, structure simplified |
| **Multi-level Lists** | Indented lists | Max 4 levels recommended |
| **Footnotes** | Inline parenthetical | No Markdown footnote equivalent |
| **Cross-DM References** | Relative links | May break if DM not transformed |

---

## Validation

### Automated Checks (CI/CD)

The GitHub Actions workflow automatically validates: 

1. ✅ **XSLT Transformation Success** — No parsing errors
2. ✅ **Markdown Formatting** — `markdownlint` validation
3. ✅ **Internal Links** — `markdown-link-check` validation
4. ✅ **Git Commit** — Auto-commit transformed files

### Manual Validation

```bash
# Check Markdown formatting
markdownlint DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.md

# Check links
markdown-link-check DMC-AMPEL360-00-00-00-00A-001A-A_001-00_EN-US.md

# Preview in GitHub
gh repo view --web
```

---

## Customization

### Extending the Stylesheet

To add support for additional S1000D elements: 

1. **Add template** to `s1000d-to-markdown.xslt`:

```xml
<xsl:template match="yourElement">
    <xsl:text>Your Markdown output</xsl:text>
    <xsl:apply-templates/>
</xsl: template>
```

2. **Test transformation**:

```bash
saxon-xslt -s:test.xml -xsl:s1000d-to-markdown.xslt -o:test.md
```

3. **Commit changes**:

```bash
git add s1000d-to-markdown. xslt
git commit -m "Add support for <yourElement>"
git push
```

### ATA-Specific Transforms

To create chapter-specific transforms (e.g., ATA 28 fuel system):

```
transforms/
├── s1000d-to-markdown. xslt           ← Default (all chapters)
├── s1000d-to-markdown-ata28.xslt     ← Fuel-specific formatting
└── s1000d-to-markdown-ata95.xslt     ← AI/ML-specific formatting
```

Update `.github/workflows/s1000d-to-markdown.yml` to select stylesheet based on DMC: 

```bash
if [[ "$xml_file" == *"ATA-28"* ]]; then
  xslt="$dir/transforms/s1000d-to-markdown-ata28.xslt"
elif [[ "$xml_file" == *"ATA-95"* ]]; then
  xslt="$dir/transforms/s1000d-to-markdown-ata95.xslt"
else
  xslt="$dir/transforms/s1000d-to-markdown.xslt"
fi
```

---

## Troubleshooting

### Common Issues

#### Issue: "XSLT transformation failed"

**Cause:** Invalid XML or malformed S1000D structure  
**Solution:**

```bash
# Validate XML
xmllint --noout --schema S1000D_5-0_schema.xsd your-dm.xml

# Check BREX compliance
# (Use S1000D BREX validator)
```

#### Issue: "Markdown links broken"

**Cause:** Internal references not transformed correctly  
**Solution:**

- Check `@internalRefId` matches `@id` in source XML
- Verify anchor generation in XSLT template

#### Issue: "Table formatting incorrect"

**Cause:** Complex table structure (nested tables, spanning)  
**Solution:**

- Simplify table in XML source
- Use multiple simple tables instead of one complex table

#### Issue: "Special characters garbled"

**Cause:** Character encoding mismatch  
**Solution:**

```xml
<!-- Ensure XML declaration specifies UTF-8 -->
<? xml version="1.0" encoding="UTF-8"?>

<!-- Ensure XSLT output method uses UTF-8 -->
<xsl:output method="text" encoding="UTF-8"/>
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-12 | Initial release — supports S1000D 5.0 descriptive DMs |
| | | Supports:  para, lists, tables, emphasis, warnings, cross-refs |

---

## References

### S1000D Specifications

- **S1000D Issue 5.0** — International specification for technical publications
- **S1000D XML Schema** — `http://www.s1000d.org/S1000D_5-0/xml_schema_flat/`
- **S1000D BREX** — Business Rule Exchange for validation

### XSLT Resources

- **XSLT 2.0 Specification** — W3C Recommendation
- **Saxon XSLT Processor** — https://www.saxonica.com/
- **XSLT Tutorial** — https://www.w3schools.com/xml/xsl_intro.asp

### Markdown Specifications

- **GitHub Flavored Markdown** — https://github.github.com/gfm/
- **Markdown Guide** — https://www.markdownguide.org/
- **GitHub Alerts Syntax** — `> [!WARNING]`, `> [!NOTE]`, `> [!CAUTION]`

---

## Support

### Questions or Issues

- **Technical Issues:** Open GitHub issue with `[S1000D Transform]` tag
- **Stylesheet Requests:** Contact STK_PUB via `pub@ampel360.aero`
- **BREX Validation:** Contact STK_CM via `cm@ampel360.aero`

### Contributing

To contribute improvements to the transformation stylesheet:

1. Fork repository
2. Create feature branch: `git checkout -b transform/add-hotspot-support`
3. Make changes to `s1000d-to-markdown.xslt`
4. Test transformation on sample DMs
5. Submit pull request with test cases

---

## License

This transformation stylesheet is part of the AMPEL360 Q100 program documentation framework. 

**Classification:** INTERNAL  
**Export Control:** NONE  
**Distribution:** AMPEL360 program participants only  

---

*For the authoritative S1000D XML source, always refer to the CSDB repository.*  
*Markdown transformations are for convenience and may not reflect 100% fidelity to S1000D presentation rules.*
```


