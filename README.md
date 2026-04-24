<div align="center">

# World Action Models for Generalist Robotics: From Next Token Prediction to Next State Synthesis

[![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b.svg)](https://arxiv.org/abs/2509.07996) [![ProjectPage](https://img.shields.io/badge/Website-Link-blue)](https://dreamzero0.github.io)

</div>

这是一个围绕 `[TOPIC / PROBLEM SETTING]` 持续整理的 survey repository。它将路线图、论文条目、阅读方法和 HTML 精读报告放在同一个入口中，目标不是简单堆论文，而是提供一个有组织、可导航、可扩展的学术项目首页。

示例定位：`[e.g., world models / action models / policy learning / planning / evaluation]`。

**Reading Skill 提一嘴**

## Contents

- [Roadmap](#roadmap)
- [World Action Models for Generalist Robotics](#world-action-models-for-generalist-robotics)
  - [World Model](#world-model)
    - [Action-Conditioned](#action-conditioned)
    - [Language-Conditioned and Multimodal](#language-conditioned-and-multimodal)
    - [Embodied World Model](#embodied-world-model)
  - [World Action Model](#world-action-model)
    - [Cascaded World-Action-Model](#cascaded-world-action-model)
    - [Joint World-Action-Model](#joint-world-action-model)
  - [Training Data](#training-data)
  - [Evaluation](#evaluation)

## Roadmap

<p align="center">
  <img src="[ROADMAP FIGURE PATH]" alt="[这里可以放figure1]" width="100%">
</p>

Roadmap 是这个仓库的主导航。后面的分支章节应与图中的命名保持一致，这样 README、网页和报告目录可以长期对齐。

示例：如果路线图中有 `[Branch A] -> [Branch B] -> [Branch C]`，那么下方就按相同层级组织对应论文与报告。

## World Action Models for Generalist Robotics
下面的每个分支都应对应 roadmap 中的一个节点。建议每个分支只保留一段简短说明和一个紧凑表格，方便后续持续补充。

## World Model
### Action-conditioned
### Language-conditioned and Multimodal
### Embodied World Model

## World Action Model
### Cascaded World-Action-Model
***
#### UniPi - *Learning Universal Policies via Text-Guided Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2302.00111-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2302.00111)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌍 Webpage](https://research.google/blog/unipi-learning-universal-policies-via-text-guided-video-generation/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UniPi/index.html) ]
***
#### VLP - *Video Language Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2310.10625-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.10625)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌍 Webpage](https://video-language-planning.github.io/)] · [[💻 Code](https://github.com/video-language-planning/vlp_code)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLP/index.html) ]
***
#### RoboEnvision - *RoboEnvision: A Long-Horizon Video Generation Model for Multi-Task Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2506.22007-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.22007)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RoboEnvision/index.html) ]
***
#### ThisAndThat - *This&That: Language-Gesture Controlled Video Generation for Robot Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2407.05530-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.05530)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌍 Webpage](https://mvandermerwe.github.io/publication/this-and-that/)] · [[💻 Code](https://github.com/Kiteretsu77/This_and_That_VDM)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/ThisAndThat/index.html) ]
***
#### SayDreamAct - *Say, Dream, and Act: Learning Video World Models for Instruction-Driven Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2602.10717-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.10717)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/SayDreamAct/index.html) ]
***
#### TesserAct - *TesserAct: Learning 4D Embodied World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2504.20995-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.20995)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌍 Webpage](https://tesseractworld.github.io/)] · [[💻 Code](https://github.com/UMass-Embodied-AGI/TesserAct)] · [[🤗 Model](https://huggingface.co/anyeZHY/tesseract)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/TesserAct/index.html) ]
***
#### MVISTA-4D - *MVISTA-4D: View-Consistent 4D World Model with Test-Time Action Inference for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2602.09878-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.09878)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/MVISTA-4D/index.html) ]
***
#### Vidar - *Vidar: Embodied Video Diffusion Model for Generalist Bimanual Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2507.12898-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.12898)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌍 Webpage](https://embodiedfoundation.github.io/vidar_anypos)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Vidar/index.html) ]
***
#### Gen2Act - *Gen2Act: Human Video Generation in Novel Scenarios Enables Generalizable Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2409.16283-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2409.16283)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Learned Action Extraction

[[🌍 Webpage](https://homangab.github.io/gen2act/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Gen2Act/index.html) ]
***
#### AVDC - *Learning to Act from Actionless Videos through Dense Correspondences* - [![arXiv](https://img.shields.io/badge/arXiv-2310.08576-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.08576)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://flow-diffusion.github.io/)] · [[💻 Code](https://github.com/flow-diffusion/AVDC)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/AVDC/index.html) ]
***
#### Im2Flow2Act - *Flow as the Cross-Domain Manipulation Interface* - [![arXiv](https://img.shields.io/badge/arXiv-2407.15208-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.15208)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://im2flow2act.github.io/)] · [[💻 Code](https://github.com/real-stanford/im2Flow2Act)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Im2Flow2Act/index.html) ]
***
#### 3DFlowAction - *3DFlowAction: Learning Cross-Embodiment Manipulation from 3D Flow World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2506.06199-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.06199)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/3DFlowAction/index.html) ]
***
#### NovaFlow - *NovaFlow: Zero-Shot Manipulation via Actionable Flow from Generated Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2510.08568-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.08568)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://novaflow.lhy.xyz/)] · [[💻 Code](https://github.com/rai-opensource/NovaFlow)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/NovaFlow/index.html) ]
***
#### Dream2Flow - *Dream2Flow: Bridging Video Generation and Open-World Manipulation with 3D Object Flow* - [![arXiv](https://img.shields.io/badge/arXiv-2512.24766-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.24766)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://dream2flow.github.io/)] · [[💻 Code](https://github.com/KDharmarajanDev/Dream2Flow/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Dream2Flow/index.html) ]
***
#### Dreamitate - *Dreamitate: Real-World Visuomotor Policy Learning via Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2406.16862-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.16862)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://dreamitate.cs.columbia.edu/)] · [[💻 Code](https://github.com/cvlab-columbia/dreamitate)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Dreamitate/index.html) ]
***
#### 4DGen - *Geometry-aware 4D Video Generation for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2507.01099-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.01099)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://robot4dgen.github.io/)] · [[💻 Code](https://github.com/lzylucy/4dgen)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/4DGen/index.html) ]
***
#### RIGVid - *Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations* - [![arXiv](https://img.shields.io/badge/arXiv-2507.00990-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.00990)

**Tags:** Cascaded - Explicit Visual Planning via Pixel-Space Representations - Geometric Action Extraction

[[🌍 Webpage](https://rigvid-robot.github.io/)] · [[💻 Code](https://github.com/shivanshpatel35/rigvid)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RIGVid/index.html) ]
***
#### VPP - *Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations* - [![arXiv](https://img.shields.io/badge/arXiv-2412.14803-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.14803)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[🌍 Webpage](https://video-prediction-policy.github.io/)] · [[💻 Code](https://github.com/roboterax/video-prediction-policy)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VPP/index.html) ]
***
#### VILP - *VILP: Imitation Learning with Latent Video Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2502.01784-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.01784)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[💻 Code](https://github.com/ZhengtongXu/VILP)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VILP/index.html) ]
***
#### VideoPolicy - *Video Generators are Robot Policies* - [![arXiv](https://img.shields.io/badge/arXiv-2508.00795-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2508.00795)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[🌍 Webpage](https://videopolicy.cs.columbia.edu/)] · [[💻 Code](https://github.com/cvlab-columbia/videopolicy)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VideoPolicy/index.html) ]
***
#### ARDuP - *ARDuP: Active Region Video Diffusion for Universal Policies* - [![arXiv](https://img.shields.io/badge/arXiv-2406.13301-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.13301)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[🌍 Webpage](https://rpl.cs.utexas.edu/publications/2024/10/14/huang-iros24-ardup/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/ARDuP/index.html) ]
***
#### mimic-video - *mimic-video: Video-Action Models for Generalizable Robot Control Beyond VLAs* - [![arXiv](https://img.shields.io/badge/arXiv-2512.15692-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.15692)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[🌍 Webpage](https://mimic-video.github.io/)] · [[💻 Code](https://github.com/mimic-video/mimic-video)] · [[🤗 Model](https://huggingface.co/jonpai/mimic-video)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/mimic-video/index.html) ]
***
#### LaPA - *Latent Action Pretraining from Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2410.11758-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.11758)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[🌍 Webpage](https://latentactionpretraining.github.io/)] · [[💻 Code](https://github.com/LatentActionPretraining/LAPA)] · [[🤗 Model](https://huggingface.co/latent-action-pretraining/LAPA-7B-openx)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LaPA/index.html) ]
***
#### villa-X - *villa-X: Enhancing Latent Action Modeling in Vision-Language-Action Models* - [![arXiv](https://img.shields.io/badge/arXiv-2507.23682-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.23682)

**Tags:** Cascaded - Implicit Planning via Latent Representations

[[🌍 Webpage](https://microsoft.github.io/villa-x/)] · [[💻 Code](https://github.com/microsoft/villa-x)] · [[🤗 Model](https://huggingface.co/microsoft/villa-x)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/villa-X/index.html) ]

#### Joint World-Action-Model

***
#### GR-1 - *Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2312.13139-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2312.13139)

**Tags:** Discrete Tokenization - Causal Transformer

[[🌍 Webpage](https://gr1-manipulation.github.io/)] · [[💻 Code](https://github.com/bytedance/GR-1)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-1/index.html) ]
***
#### GR-MG - *GR-MG: Leveraging Partially-Annotated Data via Multi-Modal Goal-Conditioned Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2408.14368-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.14368)

**Tags:** Discrete Tokenization - Causal Transformer

[[🌍 Webpage](https://gr-mg.github.io/)] · [[💻 Code](https://github.com/bytedance/GR-MG)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-MG/index.html) ]
***
#### GR-2 - *GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2410.06158-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.06158)

**Tags:** Discrete Tokenization - Causal Transformer

[[🌍 Webpage](https://gr2-manipulation.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-2/index.html) ]
***
#### CoT-VLA - *CoT-VLA: Visual Chain-of-Thought Reasoning for Vision-Language-Action Models* - [![arXiv](https://img.shields.io/badge/arXiv-2503.22020-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.22020)

**Tags:** Discrete Tokenization - Unified MLLM

[[🌍 Webpage](https://cot-vla.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoT-VLA/index.html) ]
***
#### WorldVLA - *WorldVLA: Towards Autoregressive Action World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2506.21539-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.21539)

**Tags:** Discrete Tokenization - Unified MLLM

[[💻 Code](https://github.com/alibaba-damo-academy/WorldVLA)] · [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/WorldVLA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/WorldVLA/index.html) ]
***
#### RynnVLA-002 - *RynnVLA-002: A Unified Vision-Language-Action and World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2511.17502-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.17502)

**Tags:** Discrete Tokenization - Unified MLLM

[[💻 Code](https://github.com/alibaba-damo-academy/RynnVLA-002)] · [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/RynnVLA-002)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RynnVLA-002/index.html) ]
***
#### VLA-JEPA - *VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2602.10098-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.10098)

**Tags:** Discrete Tokenization - Latent Predictive

[[🌍 Webpage](https://ginwind.github.io/VLA-JEPA/)] · [[💻 Code](https://github.com/ginwind/VLA-JEPA)] · [[🤗 Model](https://huggingface.co/ginwind/VLA-JEPA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLA-JEPA/index.html) ]
***
#### UD-VLA - *Unified Diffusion VLA: Vision-Language-Action Model via Joint Discrete Denoising Diffusion Process* - [![arXiv](https://img.shields.io/badge/arXiv-2511.01718-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.01718)

**Tags:** Discrete Tokenization - Parallel Decoding

[[🌍 Webpage](https://irpn-eai.github.io/UD-VLA.github.io/)] · [[💻 Code](https://github.com/OpenHelix-Team/Unified-Diffusion-VLA)] · [[🤗 Model](https://huggingface.co/chenpyyy/UD-VLA_CALVIN_ABCD_D)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UD-VLA/index.html) ]
***
#### F1 - *F1: A Vision-Language-Action Model Bridging Understanding and Generation to Actions* - [![arXiv](https://img.shields.io/badge/arXiv-2509.06951-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.06951)

**Tags:** Discrete Tokenization - Parallel Decoding

[[🌍 Webpage](https://aopolin-lv.github.io/F1-VLA/)] · [[💻 Code](https://github.com/InternRobotics/F1-VLA)] · [[🤗 Model](https://huggingface.co/InternRobotics/F1-VLA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/F1/index.html) ]
***
### Joint World-Action-Model
***
#### GR-1 - *Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2312.13139-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2312.13139)

**Tags:** Discrete Tokenization - Causal Transformer

[[🌍 Webpage](https://gr1-manipulation.github.io/)] · [[💻 Code](https://github.com/bytedance/GR-1)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-1/index.html) ]
***
#### GR-MG - *GR-MG: Leveraging Partially-Annotated Data via Multi-Modal Goal-Conditioned Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2408.14368-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.14368)

**Tags:** Discrete Tokenization - Causal Transformer

[[🌍 Webpage](https://gr-mg.github.io/)] · [[💻 Code](https://github.com/bytedance/GR-MG)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-MG/index.html) ]
***
#### GR-2 - *GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2410.06158-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.06158)

**Tags:** Discrete Tokenization - Causal Transformer

[[🌍 Webpage](https://gr2-manipulation.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-2/index.html) ]
***
#### CoT-VLA - *CoT-VLA: Visual Chain-of-Thought Reasoning for Vision-Language-Action Models* - [![arXiv](https://img.shields.io/badge/arXiv-2503.22020-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.22020)

**Tags:** Discrete Tokenization - Unified MLLM

[[🌍 Webpage](https://cot-vla.github.io/)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoT-VLA/index.html) ]
***
#### WorldVLA - *WorldVLA: Towards Autoregressive Action World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2506.21539-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.21539)

**Tags:** Discrete Tokenization - Unified MLLM

[[💻 Code](https://github.com/alibaba-damo-academy/WorldVLA)] · [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/WorldVLA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/WorldVLA/index.html) ]
***
#### RynnVLA-002 - *RynnVLA-002: A Unified Vision-Language-Action and World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2511.17502-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.17502)

**Tags:** Discrete Tokenization - Unified MLLM

[[💻 Code](https://github.com/alibaba-damo-academy/RynnVLA-002)] · [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/RynnVLA-002)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RynnVLA-002/index.html) ]
***
#### VLA-JEPA - *VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2602.10098-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.10098)

**Tags:** Discrete Tokenization - Latent Predictive

[[🌍 Webpage](https://ginwind.github.io/VLA-JEPA/)] · [[💻 Code](https://github.com/ginwind/VLA-JEPA)] · [[🤗 Model](https://huggingface.co/ginwind/VLA-JEPA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLA-JEPA/index.html) ]
***
#### UD-VLA - *Unified Diffusion VLA: Vision-Language-Action Model via Joint Discrete Denoising Diffusion Process* - [![arXiv](https://img.shields.io/badge/arXiv-2511.01718-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.01718)

**Tags:** Discrete Tokenization - Parallel Decoding

[[🌍 Webpage](https://irpn-eai.github.io/UD-VLA.github.io/)] · [[💻 Code](https://github.com/OpenHelix-Team/Unified-Diffusion-VLA)] · [[🤗 Model](https://huggingface.co/chenpyyy/UD-VLA_CALVIN_ABCD_D)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UD-VLA/index.html) ]
***
#### F1 - *F1: A Vision-Language-Action Model Bridging Understanding and Generation to Actions* - [![arXiv](https://img.shields.io/badge/arXiv-2509.06951-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.06951)

**Tags:** Discrete Tokenization - Parallel Decoding

[[🌍 Webpage](https://aopolin-lv.github.io/F1-VLA/)] · [[💻 Code](https://github.com/InternRobotics/F1-VLA)] · [[🤗 Model](https://huggingface.co/InternRobotics/F1-VLA)] · [[🌟 Summary](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/F1/index.html) ]

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
### Training Data
### Evaluation



