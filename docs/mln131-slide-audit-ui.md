# MLN131 Slide Audit And UI Direction

Source checked: `E:\mln111\MLN131.docx`; Hiển source checked later: `E:\mln111\hien.txt`; Thỏ source checked later: `E:\mln111\tho.docx`; Tiên source checked later: `D:\thao_mln131\tien.docx`

The DOCX currently contains the opening theory section: "Khái niệm và đặc trưng cơ bản của dân tộc". It defines 5 content blocks for the home slide deck.

Full DOCX package scan note: the local file currently does not contain a separate `Hiển` / `Quan điểm của Đảng, Nhà nước Việt Nam về vấn đề dân tộc` section. Searching the extracted DOCX XML for `Hiển`, `Quan điểm`, `Đảng`, and `vấn đề dân tộc` returned no Hiển-specific source content.

Hiển update note: `E:\mln111\hien.txt` contains the Hiển source. The home slides `Quan điểm 1/3` to `Quan điểm 3/3` were updated from this file: strategic/long-term and urgent nature of ethnic issues; equality, solidarity and mutual support; and comprehensive development across economy, politics, national defense-security, culture and society.

Thỏ update note: `E:\mln111\tho.docx` contains the 5 policy faces source. The shared `policyPillars` data and home slides `Chính sách 1/5` to `Chính sách 5/5` were updated from this file: politics, economy, culture, society and security-national defense, including practical examples and official source links.

Tiên update note: `D:\thao_mln131\tien.docx` contains the achievement and action-call source. The shared `achievementMetrics`, `achievementAreas`, `antiDiscriminationActions`, `solidarityCommitments`, quiz questions, and home slides were updated from this file. Achievement slides now use 5 groups: infrastructure, education, health-social security, economy-poverty reduction, and culture; images were extracted to `public/images/mln131/tien`.

## Content Match

| DOCX block | Current slide | Status | Notes |
|---|---|---|---|
| Opening/câu dẫn: "Dân tộc: từ cộng đồng người đến đại gia đình Việt Nam" | `Khái niệm 1/6` exists in source but is hidden by `.slice(1)` | Intentional mismatch | Earlier direction was "không dùng slide 1 nữa". If the group wants DOCX fidelity, restore this as a short intro slide or merge its sentence into hero. |
| Khối 1: Thị tộc -> Bộ lạc -> Bộ tộc -> Dân tộc | `Khái niệm 2/6` | Good | Timeline content and 4 images match the requested concept. |
| Khối 2: Phương Tây / Phương Đông | `Khái niệm 3/6` | Good | Text and points match the DOCX table; images from `D:\thao_mln131` are used. |
| Khối 3, nghĩa 1: Dân tộc - quốc gia dân tộc | `Khái niệm 4/6` | Good after latest change | Content has all 5 factors. UI now uses factor tabs instead of overlapping node diagram. |
| Khối 3, nghĩa 2: Dân tộc - tộc người | `Khái niệm 5/6` | Good | 3 factors match DOCX: Ngôn ngữ, Văn hóa, Ý thức tự giác tộc người. |
| Khối 4: Phân biệt quốc gia dân tộc / tộc người | `Khái niệm 6/6` | Partial | Current slide explains the distinction, but does not show the full DOCX comparison table rows: English term, bản chất, yếu tố nổi bật, ví dụ, ý nghĩa. |
| Khối 5: Liên hệ Việt Nam và bình đẳng, đoàn kết, tương trợ | Spread across `Khái niệm 6/6` and later Vietnam slides | Partial | The DOCX wants a direct closing connection: Vietnam is one unified nation and a home of many ethnic groups; equality preserves difference instead of erasing identity. |

## Recommended UI By Remaining Slide Group

### Khái niệm 4/6

Implemented direction: media panel + 5 factor tabs + one detail panel.

Reason: the old radial node diagram causes overlap because five labels are long. Tabs make the interaction explicit and keep reading load low.

### Khái niệm 6/6

Use a compact comparison matrix instead of three separate cards.

Suggested layout:
- Center visual: two large labeled columns, `Nation` and `Ethnic group`.
- Right side: one row visible at a time with a segmented selector: `Tên gọi`, `Bản chất`, `Yếu tố`, `Ví dụ`, `Ý nghĩa`.
- Bottom callout: "Việt Nam là một quốc gia thống nhất, đồng thời là mái nhà chung của nhiều tộc người."

This matches the DOCX table without making the slide too text-heavy.

### Liên hệ Việt Nam

Add or merge a "closing bridge" slide after `Khái niệm 6/6`.

Suggested layout:
- Hero stat strip: `1 quốc gia`, `54 dân tộc`, `đa dạng bản sắc`, `đoàn kết`.
- Visual: Vietnam map + community/gallery.
- Interaction: click each stat to show one short explanation.
- Final sentence: "Bình đẳng không làm mất bản sắc riêng; bình đẳng là tôn trọng khác biệt và bảo đảm quyền phát triển."

### Mác - Lênin 1/4

Use a two-flow layout.

Suggested layout:
- Left flow: "Tách ra để hình thành cộng đồng độc lập".
- Right flow: "Liên hiệp lại với nhau".
- Middle connector: "quan hệ dân tộc phát triển khách quan".
- Interaction: hover/click each flow to reveal 2-3 bullet points.

### Mác - Lênin 2/4

Use a 3-pillar principle layout.

Suggested layout:
- Three equal pillars: `Bình đẳng`, `Tự quyết`, `Liên hiệp`.
- Each pillar has one icon-like number and one concise explanation.
- Right/under area shows "ý nghĩa thực tiễn" for the selected pillar.

### Việt Nam 3/4 And 4/4

Use a Vietnam-context dashboard.

Suggested layout:
- Map/terrain visual as background.
- Cards grouped by category: `Dân số`, `Cư trú`, `Địa bàn`, `Phát triển`, `Đoàn kết`, `Bản sắc`.
- Interaction: filter chips; only 2-3 cards visible per state.

### Quan điểm 1/3 To 3/3

Use a policy stance carousel.

Suggested layout:
- Large principle statement on the left.
- Right side: "vì sao quan trọng" and "hành động chính sách".
- Progress rail: `Chiến lược`, `Bình đẳng`, `Phát triển toàn diện`.

### Chính sách 1/5 To 5/5

Use a five-sector policy dashboard.

Suggested layout:
- Top segmented controls: `Chính trị`, `Kinh tế`, `Văn hóa`, `Xã hội`, `An ninh - quốc phòng`.
- Main panel: one policy pillar at a time.
- Add source badge for any cited policy/statistic.

### Thành tựu 1/4 To 4/4

Use evidence cards with before/after framing.

Suggested layout:
- Visual gallery on the left.
- Right side: "Vấn đề trước đây" -> "Thay đổi" -> "Ý nghĩa".
- Keep each slide focused on one evidence theme: hạ tầng, giáo dục-y tế, sinh kế, văn hóa.

### Hành động 1/2 And 2/2

Use scenario-based cards.

Suggested layout:
- `Không nên`: kỳ thị, chế giễu, chia rẽ, lan truyền tin sai.
- `Nên`: gọi đúng tên, lắng nghe, kiểm chứng, hỗ trợ.
- Interaction: click scenario to show a better response.

## Immediate Fix Priority

1. Keep the new tab UI for `Khái niệm 4/6`.
2. Redesign `Khái niệm 6/6` into the DOCX comparison table interaction.
3. Add a short "Liên hệ Việt Nam" closing interaction if the team wants strict DOCX coverage.
4. Then improve the remaining Linh/Hiển/Thỏ/Tiên slides by using the UI directions above.
