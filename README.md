<div align="center">

# World Action Models for Generalist Robotics: From Next Token Prediction to Next State Synthesis

[![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b.svg)](https://arxiv.org/abs/2509.07996) [![ProjectPage](https://img.shields.io/badge/Website-Link-blue)](https://dreamzero0.github.io)

</div>

这是一个围绕 `[TOPIC / PROBLEM SETTING]` 持续整理的 survey repository。它将路线图、论文条目、阅读方法和 HTML 精读报告放在同一个入口中，目标不是简单堆论文，而是提供一个有组织、可导航、可扩展的学术项目首页。

示例定位：`[e.g., world models / action models / policy learning / planning / evaluation]`。

**Reading Skill 提一嘴**

## Contents

- [Roadmap](#roadmap)
- [Tag Legend](#tag-legend)
- [World Action Model](#world-action-model)
  - [Cascaded World-Action-Model](#cascaded-world-action-model)
  - [Joint World-Action-Model](#joint-world-action-model)
- [World Model for VLA](#world-model-for-vla)
  - [Imitation Learning](#imitation-learning)
  - [Reinforcement Learning](#reinforcement-learning)
  - [Evaluation](#evaluation)
- [Training Data](#training-data)
- [Evaluation](#evaluation)

## Roadmap

<p align="center">
  <img src="[ROADMAP FIGURE PATH]" alt="[这里可以放figure1]" width="100%">
</p>

Roadmap 是这个仓库的主导航。后面的分支章节应与图中的命名保持一致，这样 README、网页和报告目录可以长期对齐。

示例：如果路线图中有 `[Branch A] -> [Branch B] -> [Branch C]`，那么下方就按相同层级组织对应论文与报告。

## Tag Legend


### World Action Model tags
**![](https://img.shields.io/badge/Cascaded-f59e0b) Cascaded WAM**
- ![](https://img.shields.io/badge/Explicit-d97706) Explicit Planning
  - ![](https://img.shields.io/badge/Learned-b45309) Learned Action Extraction
  - ![](https://img.shields.io/badge/Geometric-fbbf24) Geometric Action Extraction
- ![](https://img.shields.io/badge/Implicit-ea580c) Implicit Planning

**![](https://img.shields.io/badge/Joint-ec4899) Joint WAM**
- ![](https://img.shields.io/badge/Discrete-db2777) Discrete Tokenization
  - ![](https://img.shields.io/badge/Causal--TF-be185d) Causal Transformer
  - ![](https://img.shields.io/badge/MLLM-f472b6) Unified MLLM
  - ![](https://img.shields.io/badge/LatentPred-c026d3) Latent Predictive
  - ![](https://img.shields.io/badge/Parallel-fb7185) Parallel Decoding
- ![](https://img.shields.io/badge/Continuous-e11d48) Continuous Diffusion
  - ![](https://img.shields.io/badge/Single--DiT-be123c) Single Dit
    - ![](https://img.shields.io/badge/Explicit-f43f5e) Explicit Future Generation
    - ![](https://img.shields.io/badge/Implicit-fda4af) Implicit Future-Representation Alignment
  - ![](https://img.shields.io/badge/Multi--Dit-9f1239) Multi Dit
    - ![](https://img.shields.io/badge/CrossAttention-f97316) Cross-Attention Coupling
    - ![](https://img.shields.io/badge/HiddenState-fb7185) Hidden-State Coupling
    - ![](https://img.shields.io/badge/SharedRep-db2777) Unified Encoder

### World Model tags
**![](https://img.shields.io/badge/Imitation-0284c7) Imitation Learning**

**![](https://img.shields.io/badge/RL-0891b2) Reinforcement Learning**

**![](https://img.shields.io/badge/Eval-06b6d4) Evaluation**

***
#### S-VAM - *S-VAM: Shortcut Video-Action Model by Self-Distilling Geometric and Semantic Foresight* - [![arXiv](https://img.shields.io/badge/arXiv-2603.16195-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.16195)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://haodong-yan.github.io/S-VAM/)] · [[💻 Code](https://github.com/Haodong-Yan/S-VAM-Code)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2603.16195/index.html)]
***
#### OmniVTA - *OmniVTA: Visuo-Tactile World Modeling for Contact-Rich Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2603.19201-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.19201)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://mrsecant.github.io/OmniVTA)] · [[💻 Code](https://github.com/MrSecant/OmniVTA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2603.19201/index.html)]
***
#### Veo-Act - *Veo-Act: How Far Can Frontier Video Models Advance Generalizable Robot Manipulation?* - [![arXiv](https://img.shields.io/badge/arXiv-2604.04502-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.04502)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2604.04502/index.html)]
***
#### pi0.7 - *pi0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities* - [![arXiv](https://img.shields.io/badge/arXiv-2604.15483-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.15483)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://pi.website/pi07)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2604.15483/index.html)]
***
#### Fast-WAM - *Fast-WAM: Do World Action Models Need Test-time Future Imagination?* - [![arXiv](https://img.shields.io/badge/arXiv-2603.16666-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.16666)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/HiddenState-fb7185)

[[🌍 Webpage](https://yuantianyuan01.github.io/FastWAM/)] · [[💻 Code](https://github.com/yuantianyuan01/FastWAM)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2603.16666/index.html)]
***
#### AIM - *AIM: Intent-Aware Unified world action Modeling with Spatial Value Maps* - [![arXiv](https://img.shields.io/badge/arXiv-2604.11135-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.11135)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[💻 Code](https://github.com/Agentic-Intelligence-Lab/AIM)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.11135/index.html)]
***
#### WAV - *World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems* - [![arXiv](https://img.shields.io/badge/arXiv-2604.14732-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.14732)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/HiddenState-fb7185)

[[🌍 Webpage](https://win-commit.github.io/wavpage/)] · [[💻 Code](https://github.com/Win-commit/WAV)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.14732/index.html)]
***
#### DexWorldModel - *DexWorldModel: Causal Latent World Modeling towards Automated Learning of Embodied Tasks* - [![arXiv](https://img.shields.io/badge/arXiv-2604.16484-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.16484)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/SharedRep-db2777)

[[💻 Code](https://github.com/DexForce/EmbodiChain)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.16484/index.html)]
***
#### MotuBrain - *MotuBrain: An Advanced World Action Model for Robot Control* - [![arXiv](https://img.shields.io/badge/arXiv-2604.27792-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.27792)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[🌍 Webpage](https://www.shengshu.com/en/motubrain)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.27792/index.html)]
***
#### GigaWorld-Policy - *GigaWorld-Policy: An Efficient Action-Centered World-Action Model* - [![arXiv](https://img.shields.io/badge/arXiv-2603.17240-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.17240)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://gigaai-research.github.io/GigaWorld-Policy/)] · [[💻 Code](https://github.com/open-gigaai/giga-world-policy)] · [[🤗 Model](https://huggingface.co/open-gigaai)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2603.17240/index.html)]
***
#### DDP - *Dreaming the Unseen: World Model-regularized Diffusion Policy for Out-of-Distribution Robustness* - [![arXiv](https://img.shields.io/badge/arXiv-2603.21017-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.21017)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Implicit-fda4af)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2603.21017/index.html)]
***
#### VAG - *VAG: Dual-Stream Video-Action Generation for Embodied Data Synthesis* - [![arXiv](https://img.shields.io/badge/arXiv-2604.09330-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.09330)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.09330/index.html)]
***
#### MWM - *Mask World Model: Predicting What Matters for Robust Robot Policy Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2604.19683-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.19683)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[💻 Code](https://github.com/LYFCLOUDFAN/mask-world-model)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.19683/index.html)]
***
#### dWorldEval - *dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2604.22152-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.22152)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/Parallel-fb7185)

[[🌍 Webpage](https://dworldeval.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.22152/index.html)]
***
#### X-WAM - *Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising* - [![arXiv](https://img.shields.io/badge/arXiv-2604.26694-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.26694)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://sharinka0715.github.io/X-WAM/)] · [[💻 Code](https://github.com/sharinka0715/X-WAM)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.26694/index.html)]
***



## World Action Model
### Cascaded World-Action-Model

***
#### UniPi - *Learning Universal Policies via Text-Guided Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2302.00111-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2302.00111)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://research.google/blog/unipi-learning-universal-policies-via-text-guided-video-generation/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UniPi/index.html) ]
***
#### VLP - *Video Language Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2310.10625-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.10625)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://video-language-planning.github.io/)] · [[💻 Code](https://github.com/video-language-planning/vlp_code)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLP/index.html) ]
***
#### RoboEnvision - *RoboEnvision: A Long-Horizon Video Generation Model for Multi-Task Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2506.22007-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.22007)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RoboEnvision/index.html) ]
***
#### ThisAndThat - *This&That: Language-Gesture Controlled Video Generation for Robot Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2407.05530-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.05530)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://mvandermerwe.github.io/publication/this-and-that/)] · [[💻 Code](https://github.com/Kiteretsu77/This_and_That_VDM)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/ThisAndThat/index.html) ]
***
#### SayDreamAct - *Say, Dream, and Act: Learning Video World Models for Instruction-Driven Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2602.10717-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.10717)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/SayDreamAct/index.html) ]
***
#### TesserAct - *TesserAct: Learning 4D Embodied World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2504.20995-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.20995)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://tesseractworld.github.io/)] · [[💻 Code](https://github.com/UMass-Embodied-AGI/TesserAct)] · [[🤗 Model](https://huggingface.co/anyeZHY/tesseract)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/TesserAct/index.html) ]
***
#### MVISTA-4D - *MVISTA-4D: View-Consistent 4D World Model with Test-Time Action Inference for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2602.09878-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.09878)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/MVISTA-4D/index.html) ]
***
#### Vidar - *Vidar: Embodied Video Diffusion Model for Generalist Bimanual Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2507.12898-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.12898)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://embodiedfoundation.github.io/vidar_anypos)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Vidar/index.html) ]
***
#### Gen2Act - *Gen2Act: Human Video Generation in Novel Scenarios Enables Generalizable Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2409.16283-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2409.16283)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)

[[🌍 Webpage](https://homangab.github.io/gen2act/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Gen2Act/index.html) ]
***
#### AVDC - *Learning to Act from Actionless Videos through Dense Correspondences* - [![arXiv](https://img.shields.io/badge/arXiv-2310.08576-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.08576)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://flow-diffusion.github.io/)] · [[💻 Code](https://github.com/flow-diffusion/AVDC)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/AVDC/index.html) ]
***
#### Im2Flow2Act - *Flow as the Cross-Domain Manipulation Interface* - [![arXiv](https://img.shields.io/badge/arXiv-2407.15208-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.15208)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://im2flow2act.github.io/)] · [[💻 Code](https://github.com/real-stanford/im2Flow2Act)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Im2Flow2Act/index.html) ]
***
#### 3DFlowAction - *3DFlowAction: Learning Cross-Embodiment Manipulation from 3D Flow World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2506.06199-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.06199)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[💻 Code](https://github.com/Hoyyyaard/3DFlowAction/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/3DFlowAction/index.html) ]
***
#### NovaFlow - *NovaFlow: Zero-Shot Manipulation via Actionable Flow from Generated Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2510.08568-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.08568)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://novaflow.lhy.xyz/)] · [[💻 Code](https://github.com/rai-opensource/NovaFlow)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/NovaFlow/index.html) ]
***
#### Dream2Flow - *Dream2Flow: Bridging Video Generation and Open-World Manipulation with 3D Object Flow* - [![arXiv](https://img.shields.io/badge/arXiv-2512.24766-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.24766)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://dream2flow.github.io/)] · [[💻 Code](https://github.com/KDharmarajanDev/Dream2Flow/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Dream2Flow/index.html) ]
***
#### Dreamitate - *Dreamitate: Real-World Visuomotor Policy Learning via Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2406.16862-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.16862)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://dreamitate.cs.columbia.edu/)] · [[💻 Code](https://github.com/cvlab-columbia/dreamitate)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Dreamitate/index.html) ]
***
#### 4DGen - *Geometry-aware 4D Video Generation for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2507.01099-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.01099)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://robot4dgen.github.io/)] · [[💻 Code](https://github.com/lzylucy/4dgen)] · [[🤗 Model](https://huggingface.co/Zeyi)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/4DGen/index.html) ]
***
#### RIGVid - *Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations* - [![arXiv](https://img.shields.io/badge/arXiv-2507.00990-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.00990)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)

[[🌍 Webpage](https://rigvid-robot.github.io/)] · [[💻 Code](https://github.com/shivanshpatel35/rigvid)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RIGVid/index.html) ]
***
#### VPP - *Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations* - [![arXiv](https://img.shields.io/badge/arXiv-2412.14803-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.14803)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://video-prediction-policy.github.io/)] · [[💻 Code](https://github.com/roboterax/video-prediction-policy)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VPP/index.html) ]
***
#### VILP - *VILP: Imitation Learning with Latent Video Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2502.01784-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.01784)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[💻 Code](https://github.com/ZhengtongXu/VILP)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VILP/index.html) ]
***
#### VideoPolicy - *Video Generators are Robot Policies* - [![arXiv](https://img.shields.io/badge/arXiv-2508.00795-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2508.00795)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://videopolicy.cs.columbia.edu/)] · [[💻 Code](https://github.com/cvlab-columbia/videopolicy)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VideoPolicy/index.html) ]
***
#### ARDuP - *ARDuP: Active Region Video Diffusion for Universal Policies* - [![arXiv](https://img.shields.io/badge/arXiv-2406.13301-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.13301)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://rpl.cs.utexas.edu/publications/2024/10/14/huang-iros24-ardup/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/ARDuP/index.html) ]
***
#### mimic-video - *mimic-video: Video-Action Models for Generalizable Robot Control Beyond VLAs* - [![arXiv](https://img.shields.io/badge/arXiv-2512.15692-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.15692)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://mimic-video.github.io/)] · [[💻 Code](https://github.com/mimic-video/mimic-video)] · [[🤗 Model](https://huggingface.co/jonpai/mimic-video)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/mimic-video/index.html) ]
***
#### LaPA - *Latent Action Pretraining from Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2410.11758-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.11758)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://latentactionpretraining.github.io/)] · [[💻 Code](https://github.com/LatentActionPretraining/LAPA)] · [[🤗 Model](https://huggingface.co/latent-action-pretraining/LAPA-7B-openx)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LaPA/index.html) ]
***
#### villa-X - *villa-X: Enhancing Latent Action Modeling in Vision-Language-Action Models* - [![arXiv](https://img.shields.io/badge/arXiv-2507.23682-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.23682)

**Tags:** ![](https://img.shields.io/badge/Cascaded-f59e0b) ![](https://img.shields.io/badge/Implicit-ea580c)

[[🌍 Webpage](https://microsoft.github.io/villa-x/)] · [[💻 Code](https://github.com/microsoft/villa-x)] · [[🤗 Model](https://huggingface.co/microsoft/villa-x)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/villa-X/index.html) ]
***



### Joint World-Action-Model

***
#### GR-1 - *Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2312.13139-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2312.13139)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/Causal--TF-be185d)

[[🌍 Webpage](https://gr1-manipulation.github.io/)] · [[💻 Code](https://github.com/bytedance/GR-1)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-1/index.html) ]
***
#### GR-MG - *GR-MG: Leveraging Partially-Annotated Data via Multi-Modal Goal-Conditioned Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2408.14368-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.14368)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/Causal--TF-be185d)

[[🌍 Webpage](https://gr-mg.github.io/)] · [[💻 Code](https://github.com/bytedance/GR-MG)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-MG/index.html) ]
***
#### GR-2 - *GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2410.06158-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.06158)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/Causal--TF-be185d)

[[🌍 Webpage](https://gr2-manipulation.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-2/index.html) ]
***
#### CoT-VLA - *CoT-VLA: Visual Chain-of-Thought Reasoning for Vision-Language-Action Models* - [![arXiv](https://img.shields.io/badge/arXiv-2503.22020-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.22020)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/MLLM-f472b6)

[[🌍 Webpage](https://cot-vla.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoT-VLA/index.html) ]
***
#### WorldVLA - *WorldVLA: Towards Autoregressive Action World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2506.21539-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.21539)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/MLLM-f472b6)

[[💻 Code](https://github.com/alibaba-damo-academy/WorldVLA)] · [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/WorldVLA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/WorldVLA/index.html) ]
***
#### RynnVLA-002 - *RynnVLA-002: A Unified Vision-Language-Action and World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2511.17502-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.17502)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/MLLM-f472b6)

[[💻 Code](https://github.com/alibaba-damo-academy/RynnVLA-002)] · [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/RynnVLA-002)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RynnVLA-002/index.html) ]
***
#### VLA-JEPA - *VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2602.10098-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.10098)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/LatentPred-c026d3)

[[🌍 Webpage](https://ginwind.github.io/VLA-JEPA/)] · [[💻 Code](https://github.com/ginwind/VLA-JEPA)] · [[🤗 Model](https://huggingface.co/ginwind/VLA-JEPA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLA-JEPA/index.html) ]
***
#### UD-VLA - *Unified Diffusion VLA: Vision-Language-Action Model via Joint Discrete Denoising Diffusion Process* - [![arXiv](https://img.shields.io/badge/arXiv-2511.01718-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.01718)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/Parallel-fb7185)

[[🌍 Webpage](https://irpn-eai.github.io/UD-VLA.github.io/)] · [[💻 Code](https://github.com/OpenHelix-Team/Unified-Diffusion-VLA)] · [[🤗 Model](https://huggingface.co/chenpyyy/UD-VLA_CALVIN_ABCD_D)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UD-VLA/index.html) ]
***
#### F1 - *F1: A Vision-Language-Action Model Bridging Understanding and Generation to Actions* - [![arXiv](https://img.shields.io/badge/arXiv-2509.06951-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.06951)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Discrete-db2777) ![](https://img.shields.io/badge/Parallel-fb7185)

[[🌍 Webpage](https://aopolin-lv.github.io/F1-VLA/)] · [[💻 Code](https://github.com/InternRobotics/F1-VLA)] · [[🤗 Model](https://huggingface.co/InternRobotics/F1-VLA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/F1/index.html) ]
***
#### PAD - *Prediction with Action: Visual Policy Learning via Joint Denoising Process* - [![arXiv](https://img.shields.io/badge/arXiv-2411.18179-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2411.18179)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://sites.google.com/view/pad-paper)] · [[💻 Code](https://github.com/Robert-gyj/Prediction_with_Action)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/PAD/index.html) ]
***
#### VideoVLA - *VideoVLA: Video Generators Can Be Generalizable Robot Manipulators* - [![arXiv](https://img.shields.io/badge/arXiv-2512.06963-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.06963)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://videovla-nips2025.github.io/)] · [[💻 Code](https://github.com/VideoVLA-Project/VideoVLA)] · [[🤗 Model](https://huggingface.co/VideoVLA/VideoVLA_Cogvideobase_Pretrained)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VideoVLA/index.html) ]
***
#### UWM - *Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets* - [![arXiv](https://img.shields.io/badge/arXiv-2504.02792-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.02792)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://weirdlabuw.github.io/uwm/)] · [[💻 Code](https://github.com/WEIRDLabUW/unified-world-model)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UWM/index.html) ]
***
#### DreamZero - *World Action Models are Zero-shot Policies* - [![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.15922)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://dreamzero0.github.io/)] · [[💻 Code](https://github.com/dreamzero0/dreamzero)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DreamZero/index.html) ]
***
#### Cosmos Policy - *Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2601.16163-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.16163)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)

[[🌍 Webpage](https://research.nvidia.com/labs/dir/cosmos-policy/cosmos_policy_index.html)] · [[💻 Code](https://github.com/nvlabs/cosmos-policy)] · [[🤗 Model](https://huggingface.co/collections/nvidia/cosmos-policy)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CosmosPolicy/index.html) ]
***
#### FLARE - *FLARE: Robot Learning with Implicit World Modeling* - [![arXiv](https://img.shields.io/badge/arXiv-2505.15659-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.15659)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Implicit-fda4af)

[[🌍 Webpage](https://research.nvidia.com/labs/gear/flare/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/FLARE/index.html) ]
***
#### FRAPPE - *FRAPPE: Infusing World Modeling into Generalist Policies via Multiple Future Representation Alignment* - [![arXiv](https://img.shields.io/badge/arXiv-2602.17259-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.17259)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Single--DiT-be123c) ![](https://img.shields.io/badge/Implicit-fda4af)

[[🌍 Webpage](https://h-zhao1997.github.io/frappe/)] · [[💻 Code](https://github.com/OpenHelix-Team/frappe)] · [[🤗 Model](https://huggingface.co/collections/hhhJB/frappe)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/FRAPPE/index.html) ]
***
#### CoVAR - *CoVAR: Co-generation of Video and Action for Robotic Manipulation via Multi-Modal Diffusion* - [![arXiv](https://img.shields.io/badge/arXiv-2512.16023-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.16023)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[🌍 Webpage](https://mcml.ai/publications/ybe%2B26/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoVAR/index.html) ]
***
#### LDA-1B - *LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion* - [![arXiv](https://img.shields.io/badge/arXiv-2602.12215-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.12215)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[🌍 Webpage](https://pku-epic.github.io/LDA/)] · [[💻 Code](https://github.com/jiangranlv/LDA-1B)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LDA-1B/index.html) ]
***
#### DUST - *Dual-Stream Diffusion for World-Model Augmented Vision-Language-Action Model* - [![arXiv](https://img.shields.io/badge/arXiv-2510.27607-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.27607)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[🌍 Webpage](https://openreview.net/forum?id=mK1SdO7j3t)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DUST/index.html) ]
***
#### LingBot-VA - *Causal World Modeling for Robot Control* - [![arXiv](https://img.shields.io/badge/arXiv-2601.21998-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.21998)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[💻 Code](https://github.com/robbyant/lingbot-va)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LingBot-VA/index.html) ]
***
#### Motus - *Motus: A Unified Latent Action World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2512.13030-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.13030)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[🌍 Webpage](https://motus-robotics.github.io/motus)] · [[💻 Code](https://github.com/thu-ml/Motus)] · [[🤗 Model](https://huggingface.co/motus-robotics/Motus)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Motus/index.html) ]
***
#### AdaWorldPolicy - *AdaWorldPolicy: World-Model-Driven Diffusion Policy with Online Adaptive Learning for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2602.20057-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.20057)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/CrossAttention-f97316)

[[🌍 Webpage](https://adaworldpolicy.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/AdaWorldPolicy/index.html) ]
***
#### DiT4DiT - *DiT4DiT: Jointly Modeling Video Dynamics and Actions for Generalizable Robot Control* - [![arXiv](https://img.shields.io/badge/arXiv-2603.10448-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.10448)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/HiddenState-fb7185)

[[🌍 Webpage](https://dit4dit.github.io/)] · [[💻 Code](https://github.com/Mondo-Robotics/DiT4DiT)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DiT4DiT/index.html) ]
***
#### Act2Goal - *Act2Goal: From World Model To General Goal-conditioned Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2512.23541-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.23541)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/HiddenState-fb7185)

[[🌍 Webpage](https://act2goal.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Act2Goal/index.html) ]
***
#### UVA - *Unified Video Action Model* - [![arXiv](https://img.shields.io/badge/arXiv-2503.00200-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.00200)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/SharedRep-db2777)

[[🌍 Webpage](https://unified-video-action-model.github.io/)] · [[💻 Code](https://github.com/ShuangLI59/unified_video_action)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UVA/index.html) ]
***
#### PhysGen - *Learning Physics from Pretrained Video Models: A Multimodal Continuous and Sequential World Interaction Models for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2603.00110-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.00110)

**Tags:** ![](https://img.shields.io/badge/Joint-ec4899) ![](https://img.shields.io/badge/Continuous-e11d48) ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/SharedRep-db2777)

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/PhysGen/index.html) ]
***







## World Model for VLA




### Training Data

---

#### 🤖 Robot-Centric

| Paper | Released | Links |
|-------|----------|-------|
| **QT-Opt** - *QT-Opt: Scalable Deep Reinforcement Learning for Vision-Based Robotic Manipulation* | 2018-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1806.10293) · [🌍 Web](https://sites.google.com/view/qtopt) |
| **MIME** - *Multiple Interactions Made Easy (MIME): Large Scale Demonstrations Data for Imitation* | 2018-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1810.07121) · [🌍 Web](https://sites.google.com/view/mimedataset)<br>[📦 Dataset](https://sites.google.com/view/mimedataset/dataset) |
| **RoboNet** - *RoboNet: Large-Scale Multi-Robot Learning* | 2019-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1910.11215) · [🌍 Web](https://www.robonet.wiki/)<br>[📦 Dataset](https://github.com/SudeepDasari/RoboNet/wiki/Getting-Started) · [💻 Code](https://github.com/SudeepDasari/RoboNet) |
| **RoboTurk** - *Scaling Robot Supervision to Hundreds of Hours with RoboTurk: Robotic Manipulation Dataset through Human Reasoning and Dexterity* | 2019-11 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1911.04052) · [🌍 Web](https://roboturk.stanford.edu/realrobotdataset.html)<br>[📦 Dataset](https://roboturk.stanford.edu/) |
| **Bridge** - *Bridge Data: Boosting Generalization of Robotic Skills with Cross-Domain Datasets* | 2021-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2109.13396) · [🌍 Web](https://bair.berkeley.edu/blog/2021/11/18/bridge-data/)<br>[📦 Dataset](https://sites.google.com/view/bridgedata) |
| **MT-Opt** - *MT-Opt: Continuous Multi-Task Robotic Reinforcement Learning at Scale* | 2021-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.08212) · [🌍 Web](https://karolhausman.github.io/mt-opt/)<br>[📦 Dataset](https://www.tensorflow.org/datasets/catalog/mt_opt) |
| **BC-Z** - *BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning* | 2022-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2202.02005) · [🌍 Web](https://sites.google.com/view/bc-z/home)<br>[📦 Dataset](https://www.kaggle.com/datasets/google/bc-z-robot) |
| **Language-Table** - *Interactive Language: Talking to Robots in Real Time* | 2022-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2210.06407) · [🌍 Web](https://interactive-language.github.io/)<br>[📦 Dataset](https://github.com/google-research/language-table) |
| **RT-1** - *RT-1: Robotics Transformer for Real-World Control at Scale* | 2022-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2212.06817) · [🌍 Web](https://robotics-transformer1.github.io/)<br>[📦 Dataset](https://console.cloud.google.com/storage/browser/gresearch/rt-1-data-release) · [💻 Code](https://github.com/google-research/robotics_transformer) |
| **BridgeData V2** - *BridgeData V2: A Dataset for Robot Learning at Scale* | 2023-08 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2308.12952) · [🌍 Web](https://bridgedata-v2.github.io/)<br>[📦 Dataset](https://rail-berkeley.github.io/bridgedata/?curius=1637) · [💻 Code](https://github.com/rail-berkeley/bridge_data_v2) |
| **Jaco-Play** - *CLVR Jaco Play Dataset* | — | [💻 Code](https://github.com/clvrai/clvr_jaco_play_dataset) |
| **Cable-Routing-Dataset** - *Multi-Stage Cable Routing through Hierarchical Imitation Learning* | 2023-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2307.08927) · [🌍 Web](https://sites.google.com/view/cablerouting)<br>[📦 Dataset](https://sites.google.com/view/cablerouting/data) · [💻 Code](https://github.com/charlesxu0124/CableRouting) |
| **RH20T** - *RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot* | 2023-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2307.00595) · [🌍 Web](https://rh20t.github.io/)<br>[📦 Dataset](https://rh20t.github.io/#download) · [💻 Code](https://github.com/rh20t/rh20t_api) |
| **OXE** - *Open X-Embodiment: Robotic Learning Datasets and RT-X Models* | 2023-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.08864) · [🌍 Web](https://robotics-transformer-x.github.io/)<br>[📦 Dataset](https://docs.google.com/spreadsheets/d/1rPBD77tk60AEIGZrGSODwyyzs5FgCU9Uz3h-3_t2A9g/edit?gid=0#gid=0) · [💻 Code](https://github.com/google-deepmind/open_x_embodiment) |
| **DROID** - *DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.12945) · [🌍 Web](https://droid-dataset.github.io/)<br>[📦 Dataset](https://droid-dataset.github.io/droid/the-droid-dataset) · [💻 Code](https://github.com/droid-dataset/droid_policy_learning) |
| **RH20T-P** - *RH20T-P: A Primitive-Level Robotic Dataset Towards Composable Generalization Agents* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.19622) · [🌍 Web](https://sites.google.com/view/rh20t-primitive/main)<br>[📦 Dataset](https://github.com/Zx55/cga-challenge/tree/main/data/rh20tp) |
| **RoboMIND** - *RoboMIND: Benchmark on Multi-embodiment Intelligence Normative Data for Robot Manipulation* | 2024-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.13877) · [🌍 Web](https://x-humanoid-robomind.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/x-humanoid-robomind/RoboMIND) · [💻 Code](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) |
| **ARIO** - *All Robots in One: A New Standard and Unified Dataset for Versatile, General-Purpose Embodied Agents* | 2024-08 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.10899) · [🌍 Web](https://ario-dataset.github.io/)<br>[📦 Dataset](https://openi.pcl.ac.cn/ARIO/Songling_datasets/datasets) · [💻 Code](https://github.com/ario-dataset/ario-tools) |
| **RoboData** - *RoboTron-Mani: All-in-One Multimodal Large Model for Robotic Manipulation* | 2024-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.07215)<br>[📦 Dataset](https://huggingface.co/datasets/liufanfanlff/RoboData) · [💻 Code](https://github.com/RoboUniview/RoboMM) |
| **DexCap** - *DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.07788) · [🌍 Web](https://dex-cap.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/chenwangj/DexCap-Data) · [💻 Code](https://github.com/j96w/DexCap) |
| **FuSe** - *Beyond Sight: Finetuning Generalist Robot Policies with Heterogeneous Sensors via Language Grounding* | 2025-01 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2501.04693) · [🌍 Web](https://fuse-model.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/oier-mees/FuSe) · [💻 Code](https://github.com/fuse-model/FuSe) |
| **AgiBot World Colosseo** - *AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems* | 2025-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.06669) · [🌍 Web](https://agibot-world.com/)<br>[📦 Dataset](https://huggingface.co/datasets/agibot-world/AgiBotWorld-Alpha) · [💻 Code](https://github.com/OpenDriveLab/AgiBot-World) · [🤗 Model](https://huggingface.co/agibot-world/GO-1) |
| **REASSEMBLE** - *REASSEMBLE: A Multimodal Dataset for Contact-rich Robotic Assembly and Disassembly* | 2025-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.05086) · [🌍 Web](https://tuwien-asl.github.io/REASSEMBLE_page/)<br>[📦 Dataset](https://researchdata.tuwien.ac.at/records/0ewrv-8cb44) · [💻 Code](https://github.com/TUWIEN-ASL/REASSEMBLE) |
| **OmniAction** - *RoboOmni: Proactive Robot Manipulation in Omni-modal Context* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.23763) · [🌍 Web](https://openmoss.github.io/RoboOmni/)<br>[📦 Dataset](https://huggingface.co/datasets/fnlp/OmniAction) · [💻 Code](https://github.com/OpenMOSS/RoboOmni) · [🤗 Model](https://huggingface.co/fnlp/RoboOmni) |
| **UnifoLM-WBT** - *UnifoLM-WBT-Dataset* | — | [📦 Dataset](https://huggingface.co/collections/unitreerobotics/unifolm-wbt-dataset) |

---

#### 🖐️ UMI

| Paper | Released | Links |
|-------|----------|-------|
| **UMI** - *Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots* | 2024-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.10329) · [🌍 Web](https://umi-gripper.github.io/) · [💻 Code](https://github.com/real-stanford/universal_manipulation_interface) |
| **FastUMI** - *FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset* | 2024-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2409.19499) · [🌍 Web](https://fastumi.com/FastUMI/)<br>[📦 Dataset](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data) · [💻 Code](https://github.com/zxzm-zak/FastUMI_Data) |
| **FastUMI-100K** - *FastUMI-100K: Advancing Data-driven Robotic Manipulation with a Large-scale UMI-style Dataset* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.08022) · [💻 Code](https://github.com/MrKeee/FastUMI-100K) |
| **RealOmin** - *10Kh-RealOmin-OpenData: A Large-Scale Real-World Manipulation Dataset* | — | [🌍 Web](https://www.genrobot.ai/data/open-dataset)<br>[📦 Dataset](https://huggingface.co/datasets/genrobot2025/10Kh-RealOmin-OpenData) · [💻 Code](https://github.com/genrobot-ai/das-datakit) |
| **Hoi!** - *Hoi! -- A Multimodal Dataset for Force-Grounded, Cross-View Articulated Manipulation* | 2025-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.04884) · [🌍 Web](https://timengelbracht.github.io/Hoi-Dataset-Website/)<br>[📦 Dataset](https://drive.google.com/drive/folders/1Hzpt5WXFbUg0CNVU7gudH-4z-HkC6kGR) |
| **RDT2** - *RDT2: Exploring the Scaling Limit of UMI Data Towards Zero-Shot Cross-Embodiment Generalization* | 2026-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.03310) · [🌍 Web](https://rdt-robotics.github.io/rdt2/) · [💻 Code](https://github.com/thu-ml/RDT2) · [🤗 Model](https://huggingface.co/robotics-diffusion-transformer/RDT2-VQ) |
| **MV-UMI** - *MV-UMI: A Scalable Multi-View Interface for Cross-Embodiment Learning* | 2025-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.18757) · [🌍 Web](https://mv-umi.github.io/) |
| **ActiveUMI** - *ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.01607) · [🌍 Web](https://activeumi.github.io/) |
| **exUMI** - *exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation* | 2025-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.14688) · [🌍 Web](https://silicx.github.io/exUMI/) · [💻 Code](https://github.com/silicx/exUMI) |
| **Tactile-Conditioned Diffusion Policy** - *Tactile-Conditioned Diffusion Policy for Force-Aware Robotic Manipulation* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.13324) · [🌍 Web](https://tactile-farm.github.io/) |
| **DexUMI** - *DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.21864) · [🌍 Web](https://dex-umi.github.io/)<br>[📦 Dataset](https://umi-data.github.io/) · [💻 Code](https://github.com/real-stanford/DexUMI) |
| **UMI on Legs** - *UMI on Legs: Making Manipulation Policies Mobile with Manipulation-Centric Whole-body Controllers* | 2024-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.10353) · [🌍 Web](https://umi-on-legs.github.io/) · [💻 Code](https://github.com/real-stanford/umi-on-legs) |
| **HoMMI** - *HoMMI: Learning Whole-Body Mobile Manipulation from Human Demonstrations* | 2026-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.03243) · [🌍 Web](https://hommi-robot.github.io/) · [💻 Code](https://github.com/xxm19/hommi) |

---

#### 🖥️ Simulation

| Paper | Released | Links |
|-------|----------|-------|
| **MimicGen** - *MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations* | 2023-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.17596) · [🌍 Web](https://mimicgen.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/amandlek/mimicgen_datasets) · [💻 Code](https://github.com/NVlabs/mimicgen) |
| **ManiSkill2** - *ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills* | 2023-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2302.04659) · [🌍 Web](https://haosulab.github.io/ManiSkill2/)<br>[📦 Dataset](https://huggingface.co/datasets/haosulab/ManiSkill2) · [💻 Code](https://github.com/KolinGuo/ManiSkill2) |
| **RoboCasa** - *RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots* | 2024-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.02523) · [🌍 Web](https://robocasa.ai/)<br>[📦 Dataset](https://robocasa.ai/docs/build/html/datasets/using_datasets.html) · [💻 Code](https://github.com/robocasa/robocasa) |
| **RoboTwin** - *RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins* | 2025-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.13059) · [🌍 Web](https://robotwin-platform.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/TianxingChen/RoboTwin) · [💻 Code](https://github.com/RoboTwin-Platform/RoboTwin) |
| **DexMimicGen** - *DexMimicGen: Automated Data Generation for Bimanual Dexterous Manipulation via Imitation Learning* | 2024-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.24185) · [🌍 Web](https://dexmimicgen.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/MimicGen/dexmimicgen_datasets) · [💻 Code](https://github.com/NVlabs/dexmimicgen) |
| **QUARD-Auto** - *GeRM: A Generalist Robotic Model with Mixture-of-experts for Quadruped Robot* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.13358) · [🌍 Web](https://songwxuan.github.io/GeRM/)<br>[📦 Dataset](https://github.com/Songwxuan/GeRM) · [💻 Code](https://github.com/Songwxuan/GeRM) |
| **TesserAct** - *TesserAct: Learning 4D Embodied World Models* | 2025-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.20995) · [🌍 Web](https://tesseractworld.github.io/)<br>[💻 Code](https://github.com/UMass-Embodied-AGI/TesserAct) · [🤗 Model](https://huggingface.co/anyeZHY/tesseract) |
| **RoboCerebra** - *RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation* | 2025-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.06677) · [🌍 Web](https://robocerebra.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/lerobot/robocerebra_unified) · [💻 Code](https://github.com/buaa-colalab/RoboCerebra) |
| **SynGrasp-1B** - *GraspVLA: a Grasping Foundation Model Pre-trained on Billion-scale Synthetic Action Data* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.03233) · [🌍 Web](https://pku-epic.github.io/GraspVLA-web)<br>[💻 Code](https://github.com/PKU-EPIC/GraspVLA) |
| **RoboTwin 2.0** - *RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation* | 2025-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.18088) · [🌍 Web](https://robotwin-platform.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/TianxingChen/RoboTwin2.0) · [💻 Code](https://github.com/RoboTwin-Platform/RoboTwin) |
| **TLA** - *TLA: Tactile-Language-Action Model for Contact-Rich Manipulation* | 2025-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.08548) · [🌍 Web](https://sites.google.com/view/tactile-language-action/) |
| **InternVLA-M1** - *InternVLA-M1: A Spatially Guided Vision-Language-Action Framework for Generalist Robot Policy* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.13778) · [🌍 Web](https://internrobotics.github.io/internvla-m1.github.io)<br>[📦 Dataset](https://huggingface.co/datasets/InternRobotics/InternData-M1) · [💻 Code](https://github.com/InternRobotics/InternVLA-M1)<br>[🤗 Model](https://huggingface.co/InternRobotics/InternVLA-M1) |
| **InternData-A1** - *InternVLA-A1: Unifying Understanding, Generation and Action for Robotic Manipulation* | 2026-01 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.02456) · [🌍 Web](https://internrobotics.github.io/interndata-a1.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/InternRobotics/InternData-A1) · [💻 Code](https://github.com/InternRobotics/InternVLA-A1)<br>[🤗 Model](https://huggingface.co/InternRobotics/InternVLA-A1-3B) |

---

#### 👁️ Human / Egocentric

| Paper | Released | Links |
|-------|----------|-------|
| **SSv2** - *The "something something" video database for learning and evaluating visual common sense* | 2017-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1706.04261)<br>[📦 Dataset](https://developer.qualcomm.com/software/ai-datasets/something-something) |
| **EPIC-KITCHENS** - *Scaling Egocentric Vision: The EPIC-KITCHENS Dataset* | 2018-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1804.02748) · [🌍 Web](https://epic-kitchens.github.io/)<br>[📦 Dataset](https://epic-kitchens.github.io/) · [💻 Code](https://github.com/epic-kitchens/epic-kitchens-download-scripts) |
| **HowTo100M** - *HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips* | 2019-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1906.03327) · [🌍 Web](https://www.di.ens.fr/willow/research/howto100m/)<br>[📦 Dataset](https://www.di.ens.fr/willow/research/howto100m/) |
| **Kinetics-700** - *A Short Note on the Kinetics-700 Human Action Dataset* | 2019-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1907.06987)<br>[📦 Dataset](https://github.com/cvdfoundation/kinetics-dataset) · [💻 Code](https://github.com/cvdfoundation/kinetics-dataset) |
| **EGTEA Gaze+** - *In the Eye of the Beholder: Gaze and Actions in First Person Video* | 2020-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2006.00626) · [🌍 Web](https://cbs.ic.gatech.edu/fpv/)<br>[📦 Dataset](https://cbs.ic.gatech.edu/fpv/) |
| **Ego4D** - *Ego4D: Around the World in 3,000 Hours of Egocentric Video* | 2021-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2110.07058) · [🌍 Web](https://ego4d-data.org/)<br>[📦 Dataset](https://ego4d-data.org/docs/start-here/) · [💻 Code](https://github.com/facebookresearch/Ego4d) |
| **H2O** - *H2O: Two Hands Manipulating Objects for First Person Interaction Recognition* | 2021-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.11181) · [🌍 Web](https://taeinkwon.com/projects/h2o/)<br>[📦 Dataset](https://taeinkwon.com/projects/h2o/) · [💻 Code](https://github.com/taeinkwon/h2odataset) |
| **HOI4D** - *HOI4D: A 4D Egocentric Dataset for Category-Level Human-Object Interaction* | 2022-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2203.01577) · [🌍 Web](https://hoi4d.github.io/)<br>[📦 Dataset](https://hoi4d.github.io/) |
| **Assembly101** - *Assembly101: A Large-Scale Multi-View Video Dataset for Understanding Procedural Activities* | 2022-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2203.14712) · [🌍 Web](https://assembly-101.github.io/)<br>[📦 Dataset](https://assembly-101.github.io/) · [💻 Code](https://github.com/assembly-101/assembly101-download-scripts) |
| **EgoPAT3D** - *Egocentric Prediction of Action Target in 3D* | 2022-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2203.13116)<br>[📦 Dataset](https://github.com/ai4ce/EgoPAT3D) · [💻 Code](https://github.com/ai4ce/EgoPAT3D) |
| **ARCTIC** - *ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation* | 2022-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2204.13662) · [🌍 Web](https://arctic.is.tue.mpg.de/)<br>[📦 Dataset](https://arctic.is.tue.mpg.de/) · [💻 Code](https://github.com/zc-alexfan/arctic) |
| **HoloAssist** - *HoloAssist: an Egocentric Human Interaction Dataset for Interactive AI Assistants in the Real World* | 2023-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2309.17024) · [🌍 Web](https://holoassist.github.io/)<br>[📦 Dataset](https://holoassist.github.io/) |
| **Ego-Exo4D** - *Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives* | 2023-11 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2311.18259) · [🌍 Web](https://ego-exo4d-data.org/)<br>[📦 Dataset](https://docs.ego-exo4d-data.org/download/) · [💻 Code](https://github.com/facebookresearch/Ego4d) |
| **TACO** - *TACO: Benchmarking Generalizable Bimanual Tool-ACtion-Object Understanding* | 2024-01 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2401.08399) · [🌍 Web](https://taco2024.github.io/)<br>[📦 Dataset](https://taco2024.github.io/) · [💻 Code](https://github.com/leolyliu/TACO-Instructions) |
| **Aria Everyday Activities** - *Aria Everyday Activities Dataset* | 2024-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.13349) · [🌍 Web](https://www.projectaria.com/datasets/aea/)<br>[📦 Dataset](https://www.projectaria.com/datasets/aea/) · [💻 Code](https://github.com/facebookresearch/projectaria_tools) |
| **OAKINK2** - *OAKINK2: A Dataset of Bimanual Hands-Object Manipulation in Complex Task Completion* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.19417) · [🌍 Web](https://oakink.net/v2/)<br>[📦 Dataset](https://oakink.net/v2/) · [💻 Code](https://github.com/oakink/OakInk2) |
| **Nymeria** - *Nymeria: A Massive Collection of Multimodal Egocentric Daily Motion in the Wild* | 2024-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.09905) · [🌍 Web](https://www.projectaria.com/datasets/nymeria/)<br>[📦 Dataset](https://huggingface.co/datasets/projectaria/Nymeria) · [💻 Code](https://github.com/facebookresearch/nymeria_dataset) |
| **COM Kitchens** - *COM Kitchens: An Unedited Overhead-view Video Dataset as a Vision-Language Benchmark* | 2024-08 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.02272)<br>[📦 Dataset](https://github.com/omron-sinicx/com_kitchens) · [💻 Code](https://github.com/omron-sinicx/com_kitchens) |
| **EgoVid-5M** - *EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation* | 2024-11 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2411.08380) · [🌍 Web](https://egovid.github.io/)<br>[📦 Dataset](https://egovid.github.io/) |
| **EgoMimic** - *EgoMimic: Scaling Imitation Learning via Egocentric Video* | 2024-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.24221) · [🌍 Web](https://egomimic.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/gatech/EgoMimic) |
| **HOT3D** - *HOT3D: Hand and Object Tracking in 3D from Egocentric Multi-View Videos* | 2024-11 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2411.19167) · [🌍 Web](https://www.projectaria.com/datasets/hot3D/)<br>[📦 Dataset](https://www.projectaria.com/datasets/hot3D/) · [💻 Code](https://github.com/facebookresearch/hot3d) |
| **Egocentric-10K** - *Egocentric-10K* | — | [🌍 Web](https://egocentric.io/)<br>[📦 Dataset](https://huggingface.co/datasets/builddotai/Egocentric-10K) |
| **DreamDojo** - *DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos* | 2026-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.06949) · [🌍 Web](https://dreamdojo-world.github.io/) · [💻 Code](https://github.com/NVIDIA/DreamDojo) · [🤗 Model](https://huggingface.co/nvidia/DreamDojo) |
| **PH²D** - *Humanoid Policy ~ Human Policy* | 2025-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.13441) · [🌍 Web](https://human-as-robot.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/RogerQi/PH2D) |
| **Humanoid Everyday** - *Humanoid Everyday: A Comprehensive Robotic Dataset for Open-World Humanoid Manipulation* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.08807) · [🌍 Web](https://humanoideveryday.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/USC-PSI-Lab/humanoid-everyday) · [💻 Code](https://github.com/ausbxuse/Humanoid-Everyday) |
| **IndEgo** - *IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants* | 2025-11 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.19684) · [🌍 Web](https://indego-dataset.github.io/)<br>[📦 Dataset](https://huggingface.co/datasets/FraunhoferIPK/IndEgo) · [💻 Code](https://github.com/Vivek9Chavan/IndEgo) |
| **PLAICraft** - *PLAICraft: Large-Scale Time-Aligned Vision-Speech-Action Dataset for Embodied AI* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.12707) |
| **HD-EPIC** - *HD-EPIC: A Highly-Detailed Egocentric Video Dataset* | 2025-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.04144) · [🌍 Web](https://hd-epic.github.io/site/)<br>[📦 Dataset](https://hd-epic.github.io/site/) |
| **UniHand** - *Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos* | 2025-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.15597) · [🌍 Web](https://beingbeyond.github.io/Being-H0)<br>[📦 Dataset](https://huggingface.co/datasets/BeingBeyond/h0_post_train_db_2508) · [💻 Code](https://github.com/BeingBeyond/Being-H0)<br>[🤗 Model](https://huggingface.co/BeingBeyond/Being-H0) |
| **Ego-Centric Human Manipulation Dataset** - *EgoVLA: Learning Vision-Language-Action Models from Egocentric Human Videos* | 2025-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.12440) · [🌍 Web](https://rchalyang.github.io/EgoVLA/)<br>[📦 Dataset](https://huggingface.co/datasets/EgoVLA/EgoVLA-Humanoid-Sim) |
| **Kaiwu** - *Kaiwu: A Multimodal Manipulation Dataset and Framework for Robot Learning and Human-Robot Interaction* | 2025-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.05231) |
| **EgoDex** - *EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.11709)<br>[📦 Dataset](https://github.com/apple/ml-egodex) · [💻 Code](https://github.com/apple/ml-egodex) |


### Evaluation

---

#### 🌐 World Model — Visual Fidelity

| Paper | Released | Links |
|-------|----------|-------|
| **PSNR / SSIM** - *Image Quality Assessment: From Error Visibility to Structural Similarity* | 2004 | — |
| **LPIPS** - *The Unreasonable Effectiveness of Deep Features as a Perceptual Metric* | 2018-01 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1801.03924) · [🌍 Web](https://richzhang.github.io/PerceptualSimilarity/) · [💻 Code](https://github.com/richzhang/PerceptualSimilarity) |
| **DreamSim** - *DreamSim: Learning New Dimensions of Human Visual Similarity Using Synthetic Data* | 2023-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2306.09344) · [🌍 Web](https://dreamsim-nights.github.io/) · [💻 Code](https://github.com/ssundaram21/dreamsim) |
| **DINOv2** - *DINOv2: Learning Robust Visual Features without Supervision* | 2023-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2304.07193) · [🌍 Web](https://dinov2.metademolab.com/) · [💻 Code](https://github.com/facebookresearch/dinov2) |
| **FVD** - *Towards Accurate Generative Models of Video: A New Metric & Challenges* | 2018-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1812.01717) |

---

#### 🌐 World Model — Physical Commonsense

| Paper | Released | Links |
|-------|----------|-------|
| **VideoPhy** - *VideoPhy: Evaluating Physical Commonsense for Video Generation* | 2024-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.03520) · [🌍 Web](https://videophy.github.io/) · [💻 Code](https://github.com/Hritikbansal/videophy) |
| **PhyGenBench** - *Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation* | 2024-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.05363) · [💻 Code](https://github.com/OpenGVLab/PhyGenBench) |
| **VBench-2.0** - *VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness* | 2025-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.21755) · [🌍 Web](https://vchitect.github.io/VBench-project/) · [💻 Code](https://github.com/Vchitect/VBench) |
| **WorldModelBench** - *WorldModelBench: Judging Video Generation Models as World Models* | 2025-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.20694) · [🌍 Web](https://worldmodelbench-team.github.io/) · [💻 Code](https://github.com/WorldModelBench-Team/WorldModelBench) |
| **Physics-IQ** - *Do Generative Video Models Understand Physical Principles?* | 2026 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2501.09038) · [🌍 Web](https://physics-iq.github.io/) · [💻 Code](https://github.com/google-deepmind/physics-iq-benchmark) |
| **WorldScore** - *WorldScore: A Unified Evaluation Benchmark for World Generation* | 2025-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.00983) · [🌍 Web](https://haoyi-duan.github.io/WorldScore/) · [💻 Code](https://github.com/haoyi-duan/WorldScore) |
| **EWMBench** - *EWMBench: Evaluating Scene, Motion, and Semantic Quality in Embodied World Models* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.09694) · [💻 Code](https://github.com/AgibotTech/EWMBench) |

---

#### 🌐 World Model — Action Plausibility

| Paper | Released | Links |
|-------|----------|-------|
| **WorldSimBench** - *WorldSimBench: Towards Video Generation Models as World Simulators* | 2024-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.18072) · [🌍 Web](https://iranqin.github.io/WorldSimBench.github.io/) · [💻 Code](https://github.com/iranqin/WorldSimBench) |
| **Wow, wo, val!** - *A Comprehensive Embodied World Model Evaluation Turing Test* | 2026-01 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.04137) |

---

#### 🤖 Action Policy — General

| Paper | Released | Links |
|-------|----------|-------|
| **MetaWorld** - *MetaWorld: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning* | 2019-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1910.10897) · [🌍 Web](https://meta-world.github.io/) · [💻 Code](https://github.com/Farama-Foundation/Metaworld) |
| **RLBench** - *RLBench: The Robot Learning Benchmark & Learning Environment* | 2019-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1909.12271) · [🌍 Web](https://sites.google.com/view/rlbench) · [💻 Code](https://github.com/stepjam/RLBench) |
| **Robomimic** - *What Matters in Learning from Offline Human Demonstrations for Robot Manipulation* | 2021-08 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2108.03298) · [🌍 Web](https://robomimic.github.io/) · [💻 Code](https://github.com/ARISE-Initiative/robomimic) |
| **Franka Kitchen** - *Relay Policy Learning: Solving Long-Horizon Tasks via Imitation and Reinforcement Learning* | 2019-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1910.11956) · [🌍 Web](https://relay-policy-learning.github.io/) · [💻 Code](https://github.com/google-research/relay-policy-learning) |
| **ManiSkill** - *ManiSkill: Generalizable Manipulation Skill Benchmark with Large-Scale Demonstrations* | 2021-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2107.14483) · [🌍 Web](https://maniskill.ai/) · [💻 Code](https://github.com/haosulab/ManiSkill) |
| **ManiSkill2** - *ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills* | 2023-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2302.04659) · [🌍 Web](https://haosulab.github.io/ManiSkill2/) · [💻 Code](https://github.com/haosulab/ManiSkill2) |
| **ManiSkill3** - *ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI* | 2024-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.00425) · [🌍 Web](https://maniskill.ai/) · [💻 Code](https://github.com/haosulab/ManiSkill) |
| **RoboCasa** - *RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots* | 2024-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.02523) · [🌍 Web](https://robocasa.ai/) · [💻 Code](https://github.com/robocasa/robocasa) |
| **CALVIN** - *CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks* | 2021-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2112.03227) · [🌍 Web](http://calvin.cs.uni-freiburg.de/) · [💻 Code](https://github.com/mees/calvin) |
| **VIMAbench** - *VIMA: General Robot Manipulation with Multimodal Prompts* | 2022-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2210.03094) · [🌍 Web](https://vimalabs.github.io/) · [💻 Code](https://github.com/vimalabs/VIMA) |
| **VLMbench** - *VLMbench: A Compositional Benchmark for Vision-and-Language Manipulation* | 2022-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2206.08522) · [💻 Code](https://github.com/eltociear/VLMbench) |
| **LIBERO** - *LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning* | 2023-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2306.03310) · [🌍 Web](https://libero-project.github.io/) · [💻 Code](https://github.com/Lifelong-Robot-Learning/LIBERO) |
| **LIBERO-Plus** - *LIBERO-Plus: In-Depth Robustness Analysis of Vision-Language-Action Models* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.13626) · [🌍 Web](https://sylvestf.github.io/LIBERO-plus/) · [💻 Code](https://github.com/sylvestf/LIBERO-plus) · [📦 Dataset](https://huggingface.co/datasets/Sylvest/LIBERO-plus) |
| **LIBERO-PRO** - *LIBERO-PRO: Towards Robust and Fair Evaluation of VLA Models beyond Memorization* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.03827) · [💻 Code](https://github.com/Zxy-MLlab/LIBERO-PRO) |
| **LIBERO-X** - *LIBERO-X: Robustness Litmus for Vision-Language-Action Models* | 2026-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.06556) |
| **COLOSSEUM** - *THE COLOSSEUM: A Benchmark for Evaluating Generalization for Robotic Manipulation* | 2024-02 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.08191) · [🌍 Web](https://robot-colosseum.github.io/) · [💻 Code](https://github.com/robot-colosseum/robot-colosseum) |
| **AGNOSTOS** - *Exploring the Limits of Vision-Language-Action Manipulations in Cross-Task Generalization* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.15660) |
| **RoboEval** - *RoboEval: Where Robotic Manipulation Meets Structured and Scalable Evaluation* | 2025-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.00435) · [🌍 Web](https://robo-eval.github.io/) |
| **RoboVerse** - *RoboVerse: Towards a Unified Platform, Dataset and Benchmark for Scalable and Generalizable Robot Learning* | 2025-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.18904) · [🌍 Web](https://roboverse.wiki/) · [💻 Code](https://github.com/RoboVerseOrg/RoboVerse) |
| **PolaRiS** - *PolaRiS: Scalable Real-to-Sim Evaluations for Generalist Robot Policies* | 2025-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.16881) · [🌍 Web](https://polaris-evals.github.io/) · [💻 Code](https://github.com/arhanjain/polaris) |
| **RoboMME** - *RoboMME: Benchmarking and Understanding Memory for Robotic Generalist Policies* | 2026-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.04639) · [🌍 Web](https://robomme.github.io/) |
| **GenManip** - *GenManip: LLM-Driven Simulation for Generalizable Instruction-Following Manipulation* | 2025-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.10966) · [💻 Code](https://github.com/OpenDriveLab/GenManip) |
| **VLABench** - *VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks* | 2024-12 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.18194) · [💻 Code](https://github.com/OpenDriveLab/VLABench) |
| **RoboSuite** - *Robosuite: A Modular Simulation Framework and Benchmark for Robot Learning* | 2020-09 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2009.12293) · [🌍 Web](https://robosuite.ai/) · [💻 Code](https://github.com/ARISE-Initiative/robosuite) |
| **RoboLab** - *RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies* | 2026-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2604.09860) |
| **SimplerEnv** - *Evaluating Real-World Robot Manipulation Policies in Simulation* | 2024-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2405.05941) · [🌍 Web](https://simpler-env.github.io/) · [💻 Code](https://github.com/simpler-env/SimplerEnv) |
| **ARNOLD** - *ARNOLD: A Benchmark for Language-Grounded Task Learning with Continuous States in Realistic 3D Scenes* | 2023-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2304.04321) · [🌍 Web](https://arnold-benchmark.github.io/) · [💻 Code](https://github.com/arnold-benchmark/arnold) |
| **GemBench** - *Towards Generalizable Vision-Language Robotic Manipulation: A Benchmark and LLM-Guided 3D Policy* | 2024-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.01345) · [🌍 Web](https://www.di.ens.fr/willow/research/gembench/) · [💻 Code](https://github.com/theophilegervet/gembench) |

---

#### 🤖 Action Policy — Bimanual and Humanoid Form

| Paper | Released | Links |
|-------|----------|-------|
| **RoboTwin** - *RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins* | 2025-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.13059) · [🌍 Web](https://robotwin-platform.github.io/) · [💻 Code](https://github.com/RoboTwin-Platform/RoboTwin) |
| **BiGym** - *BiGym: A Demo-Driven Mobile Bi-Manual Manipulation Benchmark* | 2024-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.07788) · [🌍 Web](https://chernyadev.github.io/bigym/) · [💻 Code](https://github.com/chernyadev/bigym) |
| **HumanoidBench** - *HumanoidBench: Simulated Humanoid Benchmark for Whole-Body Locomotion and Manipulation* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.10506) · [🌍 Web](https://humanoid-bench.github.io/) · [💻 Code](https://github.com/humanoid-bench/humanoid-bench) |
| **HumanoidGen** - *HumanoidGen: Data Generation for Bimanual Dexterous Manipulation via LLM Reasoning* | 2025-07 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.00833) |

---

#### 🤖 Action Policy — Mobile Manipulation

| Paper | Released | Links |
|-------|----------|-------|
| **ManipulaTHOR** - *ManipulaTHOR: A Framework for Visual Object Manipulation* | 2021-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.11213) · [🌍 Web](https://ai2thor.allenai.org/manipulathor/) · [💻 Code](https://github.com/allenai/manipulathor) |
| **HomeRobot** - *HomeRobot: Open-Vocabulary Mobile Manipulation* | 2023-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2306.11565) · [💻 Code](https://github.com/facebookresearch/home-robot) |
| **BEHAVIOR-1K** - *BEHAVIOR-1K: A Benchmark for Embodied AI with 1,000 Everyday Activities and Realistic Simulation* | 2024-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.09227) · [🌍 Web](https://behavior.stanford.edu/) · [💻 Code](https://github.com/StanfordVL/OmniGibson) |

---

#### 🤖 Action Policy — Contact and Deformation Manipulation

| Paper | Released | Links |
|-------|----------|-------|
| **SoftGym** - *SoftGym: Benchmarking Deep Reinforcement Learning for Deformable Object Manipulation* | 2020-11 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2011.07215) · [💻 Code](https://github.com/Xingyu-Lin/softgym) |
| **PlasticineLab** - *PlasticineLab: A Soft-Body Manipulation Benchmark with Differentiable Physics* | 2021-04 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.03311) · [🌍 Web](https://plasticinelab.csail.mit.edu/) · [💻 Code](https://github.com/hzaskywalker/PlasticineLab) |
| **DaXBench** - *DaXBench: Benchmarking Deformable Object Manipulation with Differentiable Physics* | 2022-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2210.13066) · [💻 Code](https://github.com/AdaCompNUS/DaXBench) |
| **TacSL** - *TacSL: A Library for Visuotactile Sensor Simulation and Learning* | 2024-08 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.06506) |
| **ManiFeel** - *ManiFeel: Benchmarking and Understanding Visuotactile Manipulation Policy Learning* | 2025-05 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.18472) |

---

#### 🤖 Action Policy — Real-Device

| Paper | Released | Links |
|-------|----------|-------|
| **RoboArena** - *RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies* | 2025-06 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.18123) · [🌍 Web](https://roboarena.github.io/) |
| **RoboChallenge** - *RoboChallenge: Large-Scale Real-Robot Evaluation of Embodied Policies* | 2025-10 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.17950) · [🌍 Web](https://robochallenge.ai/) |
| **ManipArena** - *ManipArena: Comprehensive Real-World Evaluation of Reasoning-Oriented Generalist Robot Manipulation* | 2026-03 | [![arXiv](https://img.shields.io/badge/arXiv-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.28545) |


