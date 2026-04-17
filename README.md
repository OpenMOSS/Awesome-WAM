<h1 align="center"># WAM-survey
[![NVIDIA](https://img.shields.io/badge/NVIDIA-76B900?style=flat&logo=nvidia&logoColor=white)](https://www.nvidia.com)

<p align="center">[ONE-LINE DESCRIPTION]</p>

这是一个围绕 `[TOPIC / PROBLEM SETTING]` 持续整理的 survey repository。它将路线图、论文条目、阅读方法和 HTML 精读报告放在同一个入口中，目标不是简单堆论文，而是提供一个有组织、可导航、可扩展的学术项目首页。

示例定位：`[e.g., world models / action models / policy learning / planning / evaluation]`。

## Contents

- [Roadmap](#roadmap)
- [Reading Skill](#reading-skill)
- [Survey Branches](#survey-branches)
- [Update Notes](#update-notes)
- [Repository Pointers](#repository-pointers)

## Roadmap

<p align="center">
  <img src="[这里可以放figrue1]" alt="[ROADMAP ALT TEXT]" width="100%">
</p>

Roadmap 是这个仓库的主导航。后面的分支章节应与图中的命名保持一致，这样 README、网页和报告目录可以长期对齐。

示例：如果路线图中有 `[Branch A] -> [Branch B] -> [Branch C]`，那么下方就按相同层级组织对应论文与报告。

## Reading Skill

本仓库的精读报告遵循 `Skill/SKILL.md` 中的工作流。重点不是写一段泛泛摘要，而是尽量保留论文的结构信息、实现细节和附录内容。

### Core Practice

- 从论文源码或可解析文本出发，而不是只依赖 abstract 和 PDF 首页信息。
- 将附录中的证明、超参数、补充实验和实现细节回填到正文对应位置。
- 在生成报告前先做章节覆盖检查，避免论文中的关键内容在总结时被漏掉。
- 将输出整理为可长期链接的 HTML 报告，统一放在 `Report/[REPORT DIR]/index.html`。

### Small Example

如果 `[Appendix B.1]` 给出了训练配置、batch size 或消融设置，那么这些内容应被整合进报告正文里的 `Experiment Setup` 或 `Ablation`，而不是孤立地留在“附录备注”中。

当前仓库中的一个现有报告示例：

- [Cosmos Policy Report](./Report/Cosmos%20Policy/index.html)

## Survey Branches

下面的每个分支都应对应 roadmap 中的一个节点。建议每个分支只保留一段简短说明和一个紧凑表格，方便后续持续补充。

### [BRANCH A TITLE]

[ONE-SENTENCE DESCRIPTION OF THIS BRANCH]

示例：这一分支可用于整理 `[EXAMPLE SUBTOPIC]` 方向的工作。

| Short | Full Paper Name | Released | Links | Report |
| --- | --- | --- | --- | --- |
| `[SHORT NAME]` | `[FULL PAPER NAME]` | `[YYYY-MM / VENUE / STATUS]` | `[PAPER LINK]` · `[PROJECT PAGE LINK]` · `[GITHUB LINK]` · `[HF LINK]` | `[HTML REPORT LINK]` |

### [BRANCH B TITLE]

[ONE-SENTENCE DESCRIPTION OF THIS BRANCH]

示例：这一分支可用于整理围绕 `[EXAMPLE RESEARCH QUESTION]` 展开的工作。

| Short | Full Paper Name | Released | Links | Report |
| --- | --- | --- | --- | --- |
| `[SHORT NAME]` | `[FULL PAPER NAME]` | `[YYYY-MM / VENUE / STATUS]` | `[PAPER LINK]` · `[PROJECT PAGE LINK]` · `[GITHUB LINK]` · `[HF LINK]` | `[HTML REPORT LINK]` |

### [BRANCH C TITLE]

[ONE-SENTENCE DESCRIPTION OF THIS BRANCH]

示例：这一分支可用于整理 `[EXAMPLE METHOD FAMILY / TASK / SETTING]`。

| Short | Full Paper Name | Released | Links | Report |
| --- | --- | --- | --- | --- |
| `[SHORT NAME]` | `[FULL PAPER NAME]` | `[YYYY-MM / VENUE / STATUS]` | `[PAPER LINK]` · `[PROJECT PAGE LINK]` · `[GITHUB LINK]` · `[HF LINK]` | `[HTML REPORT LINK]` |

### Entry Format

为保证长期维护时格式稳定，建议每篇论文都按同一行结构填写：

| 字段 | 说明 |
| --- | --- |
| `Short` | 论文简写名，便于在 roadmap、报告和讨论中快速引用 |
| `Full Paper Name` | 论文全名 |
| `Released` | 统一使用一种时间格式，例如 `[YYYY-MM]` 或 `[Conference, YYYY]` |
| `Links` | 原文、网页、GitHub、HF；缺失项用 `—` |
| `Report` | 指向 `Report/[REPORT DIR]/index.html` 的 HTML 报告链接 |

一个占位示例：

| Short | Full Paper Name | Released | Links | Report |
| --- | --- | --- | --- | --- |
| `[ABC]` | `[PAPER NAME]` | `[2026-04 / arXiv]` | `[PAPER LINK]` · `—` · `[GITHUB LINK]` · `—` | `[HTML REPORT LINK]` |

## Update Notes

- Roadmap 图、分支标题和论文归类应保持一致。
- 每篇论文尽量只占一行，详细解读放到对应 HTML 报告中。
- `Released` 字段保持单一格式，不在同一表内混用多种写法。
- 报告统一放在 `Report/` 下，README 只做入口，不承载大段正文。
- 若某篇论文没有网页、GitHub 或 HF 页面，显式写 `—`，不要留空。

## Repository Pointers

- `Skill/SKILL.md`：阅读工作流与报告生成规范
- `Report/`：已生成的 HTML 精读报告
- `Report/Cosmos Policy/index.html`：当前仓库中的已有报告示例
- `[OPTIONAL DIRECTORY PLACEHOLDER]`：`[OPTIONAL SHORT DESCRIPTION]`
