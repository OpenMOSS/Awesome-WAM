<div align="center">

# WAM-survey

[![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b.svg)](https://arxiv.org/abs/2509.07996) [![WebPage](https://img.shields.io/badge/Website-Link-blue)](https://dreamzero0.github.io)

[[Project Page](https://dreamzero0.github.io/)] [[Paper](https://arxiv.org/abs/2602.15922)]

</div>

这是一个围绕 `[TOPIC / PROBLEM SETTING]` 持续整理的 survey repository。它将路线图、论文条目、阅读方法和 HTML 精读报告放在同一个入口中，目标不是简单堆论文，而是提供一个有组织、可导航、可扩展的学术项目首页。

示例定位：`[e.g., world models / action models / policy learning / planning / evaluation]`。

**Reading Skill 提一嘴**

## Contents

- [Roadmap](#roadmap)
- [Survey Branches](#survey-branches)
- [Update Notes](#update-notes)
- [Repository Pointers](#repository-pointers)

## Roadmap

<p align="center">
  <img src="[ROADMAP FIGURE PATH]" alt="[这里可以放figure1]" width="100%">
</p>

Roadmap 是这个仓库的主导航。后面的分支章节应与图中的命名保持一致，这样 README、网页和报告目录可以长期对齐。

示例：如果路线图中有 `[Branch A] -> [Branch B] -> [Branch C]`，那么下方就按相同层级组织对应论文与报告。

## Survey Branches

下面的每个分支都应对应 roadmap 中的一个节点。建议每个分支只保留一段简短说明和一个紧凑表格，方便后续持续补充。

### Cascaded World-Action-Model

### Joint World-Action-Model

***
#### PAD - *Prediction with Action: Visual Policy Learning via Joint Denoising Process* - [![arXiv](https://img.shields.io/badge/arXiv-2411.18179-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2411.18179)

**Tags:** Continuous Diffusion Structure - Single DiT - Explicit Future Generation

[[🌍 Webpage](https://sites.google.com/view/pad-paper)] · [[💻 Code](https://github.com/Robert-gyj/Prediction_with_Action)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/PAD/index.html) ]
***
#### VideoVLA - *VideoVLA: Video Generators Can Be Generalizable Robot Manipulators* - [![arXiv](https://img.shields.io/badge/arXiv-2512.06963-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.06963)

**Tags:** Continuous Diffusion Structure - Single DiT - Explicit Future Generation

[[🌍 Webpage](https://videovla-nips2025.github.io/)] · [[💻 Code](https://github.com/VideoVLA-Project/VideoVLA)] · [[🤗 Model](https://huggingface.co/VideoVLA/VideoVLA_Cogvideobase_Pretrained)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VideoVLA/index.html) ]
***
#### UWM - *Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets* - [![arXiv](https://img.shields.io/badge/arXiv-2504.02792-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.02792)

**Tags:** Continuous Diffusion Structure - Single DiT - Explicit Future Generation

[[🌍 Webpage](https://weirdlabuw.github.io/uwm/)] · [[💻 Code](https://github.com/WEIRDLabUW/unified-world-model)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UWM/index.html) ]
***
#### DreamZero - *World Action Models are Zero-shot Policies* - [![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.15922)

**Tags:** Continuous Diffusion Structure - Single DiT - Explicit Future Generation

[[🌍 Webpage](https://dreamzero0.github.io/)] · [[💻 Code](https://github.com/dreamzero0/dreamzero)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DreamZero/index.html) ]
***
#### Cosmos Policy - *Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2601.16163-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.16163)

**Tags:** Continuous Diffusion Structure - Single DiT - Explicit Future Generation

[[🌍 Webpage](https://research.nvidia.com/labs/dir/cosmos-policy/cosmos_policy_index.html)] · [[💻 Code](https://github.com/nvlabs/cosmos-policy)] · [[🤗 Model](https://huggingface.co/collections/nvidia/cosmos-policy)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CosmosPolicy/index.html) ]
***
#### FLARE - *FLARE: Robot Learning with Implicit World Modeling* - [![arXiv](https://img.shields.io/badge/arXiv-2505.15659-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.15659)

**Tags:** Continuous Diffusion Structure - Single DiT - Implicit Future-Representation Alignment

[[🌍 Webpage](https://research.nvidia.com/labs/gear/flare/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/FLARE/index.html) ]
***
#### FRAPPE - *FRAPPE: Infusing World Modeling into Generalist Policies via Multiple Future Representation Alignment* - [![arXiv](https://img.shields.io/badge/arXiv-2602.17259-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.17259)

**Tags:** Continuous Diffusion Structure - Single DiT - Implicit Future-Representation Alignment

[[🌍 Webpage](https://h-zhao1997.github.io/frappe/)] · [[💻 Code](https://github.com/OpenHelix-Team/frappe)] · [[🤗 Model](https://huggingface.co/collections/hhhJB/frappe)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/FRAPPE/index.html) ]
***
#### CoVAR - *CoVAR: Co-generation of Video and Action for Robotic Manipulation via Multi-Modal Diffusion* - [![arXiv](https://img.shields.io/badge/arXiv-2512.16023-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.16023)

**Tags:** Continuous Diffusion Structure - Multi DiT - Cross-Attention Coupled Branches

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoVAR/index.html) ]
***
#### LDA-1B - *LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion* - [![arXiv](https://img.shields.io/badge/arXiv-2602.12215-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.12215)

**Tags:** Continuous Diffusion Structure - Multi DiT - Cross-Attention Coupled Branches

[[🌍 Webpage](https://pku-epic.github.io/LDA/)] · [[💻 Code](https://github.com/jiangranlv/LDA-1B)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LDA-1B/index.html) ]
***
#### DUST - *Dual-Stream Diffusion for World-Model Augmented Vision-Language-Action Model* - [![arXiv](https://img.shields.io/badge/arXiv-2510.27607-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.27607)

**Tags:** Continuous Diffusion Structure - Multi DiT - Cross-Attention Coupled Branches

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DUST/index.html) ]
***
#### LingBot-VA - *Causal World Modeling for Robot Control* - [![arXiv](https://img.shields.io/badge/arXiv-2601.21998-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.21998)

**Tags:** Continuous Diffusion Structure - Multi DiT - Cross-Attention Coupled Branches

[[💻 Code](https://github.com/robbyant/lingbot-va)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LingBot-VA/index.html) ]
***
#### Motus - *Motus: A Unified Latent Action World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2512.13030-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.13030)

**Tags:** Continuous Diffusion Structure - Multi DiT - Cross-Attention Coupled Branches

[[🌍 Webpage](https://motus-robotics.github.io/motus)] · [[💻 Code](https://github.com/thu-ml/Motus)] · [[🤗 Model](https://huggingface.co/motus-robotics/Motus)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Motus/index.html) ]
***
#### AdaWorldPolicy - *AdaWorldPolicy: World-Model-Driven Diffusion Policy with Online Adaptive Learning for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2602.20057-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.20057)

**Tags:** Continuous Diffusion Structure - Multi DiT - Cross-Attention Coupled Branches

[[🌍 Webpage](https://adaworldpolicy.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/AdaWorldPolicy/index.html) ]
***
#### DiT4DiT - *DiT4DiT: Jointly Modeling Video Dynamics and Actions for Generalizable Robot Control* - [![arXiv](https://img.shields.io/badge/arXiv-2603.10448-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.10448)

**Tags:** Continuous Diffusion Structure - Multi DiT - Hidden-State Coupling

[[🌍 Webpage](https://dit4dit.github.io/)] · [[💻 Code](https://github.com/Mondo-Robotics/DiT4DiT)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DiT4DiT/index.html) ]
***
#### Act2Goal - *Act2Goal: From World Model To General Goal-conditioned Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2512.23541-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.23541)

**Tags:** Continuous Diffusion Structure - Multi DiT - Hidden-State Coupling

[[🌍 Webpage](https://act2goal.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Act2Goal/index.html) ]
***
#### UVA - *Unified Video Action Model* - [![arXiv](https://img.shields.io/badge/arXiv-2503.00200-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.00200)

**Tags:** Continuous Diffusion Structure - Multi DiT - Shared Representation / Unified Encoder

[[🌍 Webpage](https://unified-video-action-model.github.io/)] · [[💻 Code](https://github.com/ShuangLI59/unified_video_action)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UVA/index.html) ]
***
#### PhysGen - *Learning Physics from Pretrained Video Models: A Multimodal Continuous and Sequential World Interaction Models for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2603.00110-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.00110)

**Tags:** Continuous Diffusion Structure - Multi DiT - Shared Representation / Unified Encoder

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/PhysGen/index.html) ]
***
***



