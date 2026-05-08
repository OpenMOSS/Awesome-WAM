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

## Tag Legend
### World Model tags
**![](https://img.shields.io/badge/Action--Conditioned-0284c7) Action-conditioned**
- ![](https://img.shields.io/badge/Explicit-0369a1) Explicit Pixel-level Prediction and Video-based WMs
- ![](https://img.shields.io/badge/Implicit-38bdf8) Implicit Latent-space Dynamics Models

**![](https://img.shields.io/badge/Language--Conditioned-0891b2) Language-conditioned**

**![](https://img.shields.io/badge/Embodied--WM-06b6d4) Embodied World Model**

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

### Training Data
**![](https://img.shields.io/badge/data--RobotCentric-16a34a) Robot-centric Teleoperation**

**![](https://img.shields.io/badge/data--UMI-22c55e) UMI-style Human Demonstration**

**![](https://img.shields.io/badge/data--Simulation-15803d) Simulation Data**

**![](https://img.shields.io/badge/data--Human/Egocentric-65a30d) Human / Egocentric Data**


### Evaluation - 待补全
![](https://img.shields.io/badge/eng--video2data-7c3aed) Robot-centric Teleoperation

![](https://img.shields.io/badge/eng--hardware-2563eb) UMI-style Human Demonstration

![](https://img.shields.io/badge/eng--generative-db2777) Simulation Data

![](https://img.shields.io/badge/src--human-16a34a) Human / Egocentric Data



## World Action Models for Generalist Robotics

目前有重复文章：
- VideoGPT - VideoGPT: Video Generation using VQ-VAE and Transformers
    - World Model -> Action-conditioned main_essay
    - World Model -> Language-conditioned and Multimodal main_essay
- Genie - Genie: Generative Interactive Environments
    - World Model -> Action-conditioned main_essay
    - World Model -> Embodied World Model main_essay
- Unified World Models / UWM - Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets
    - World Model -> Action-conditioned main_essay
    - World Action Model -> Joint World-Action-Model -> Continuous Diffusion main_essay
- VLA-JEPA - VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model
    - World Model -> Action-conditioned main_essay
    - World Action Model -> Joint World-Action-Model -> Discrete Tokenization main_essay
- Video Diffusion Models - Video Diffusion Models
    - World Model -> Language-conditioned and Multimodal -> Video Foundation Models main_essay
    - World Model -> Language-conditioned and Multimodal -> Backbone Design -> U-Net-based main_essay
- Latte - Latte: Latent Diffusion Transformer for Video Generation
    - World Model -> Language-conditioned and Multimodal -> Backbone Design -> ViT-based main_essay
    - World Model -> Language-conditioned and Multimodal -> Backbone Design -> Latent-space Modeling main_essay
- EnerVerse - EnerVerse: Envisioning Embodied Future Space for Robotics Manipulation
    - World Model -> Action-conditioned main_essay
    - World Model -> Embodied World Model main_essay
- 4DGen - Geometry-aware 4D Video Generation for Robot Manipulation
    - World Model -> Embodied World Model main_essay
    - World Action Model -> Cascaded World-Action-Model main_essay
- Vidar
    - World Model -> Embodied World Model main_essay
      标题写的是 Vidar: Embodied Video Diffusion Model for Generalist Manipulation
    - World Action Model -> Cascaded World-Action-Model main_essay
      标题写的是 Vidar: Embodied Video Diffusion Model for Generalist Bimanual Manipulation
    - 这两条是同一篇论文条目，arXiv 编号相同：2507.12898

## World Model
### Action-conditioned

***
#### Physical Interaction - *Unsupervised Learning for Physical Interaction through Video Prediction* - [![arXiv](https://img.shields.io/badge/arXiv-1605.07157-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1605.07157)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

***
#### MCNet - *Decomposing Motion and Content for Natural Video Sequence Prediction* - [![arXiv](https://img.shields.io/badge/arXiv-1706.08033-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1706.08033)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[💻 Code](https://github.com/rubenvillegas/iclr2017mcnet)]

***
#### ContextVP - *ContextVP: Fully Context-Aware Video Prediction* - [![arXiv](https://img.shields.io/badge/arXiv-1710.08518-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1710.08518)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

***
#### VideoGPT - *VideoGPT: Video Generation using VQ-VAE and Transformers* - [![arXiv](https://img.shields.io/badge/arXiv-2104.10157-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.10157)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://wilson1yan.github.io/videogpt/index.html)] · [[💻 Code](https://github.com/wilson1yan/VideoGPT)]
***
#### iVideoGPT - *iVideoGPT: Interactive VideoGPTs are Scalable World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2405.15223-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2405.15223)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://thuml.github.io/iVideoGPT/)] · [[💻 Code](https://github.com/thuml/iVideoGPT)] · [[🤗 Model](https://huggingface.co/thuml/ivideogpt-oxe-64-act-free)]
***
#### Genie - *Genie: Generative Interactive Environments* - [![arXiv](https://img.shields.io/badge/arXiv-2402.15391-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.15391)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://sites.google.com/view/genie-2024/)]
***
#### DWM - *Diffusion World Model: Future Modeling Beyond Step-by-Step Rollout for Offline Reinforcement Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2402.03570-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.03570)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

***
#### Unified World Models 和后面重复了 - *Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets* - [![arXiv](https://img.shields.io/badge/arXiv-2504.02792-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.02792)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://weirdlabuw.github.io/uwm/)] · [[💻 Code](https://github.com/WEIRDLabUW/unified-world-model)]
***
#### FlowDreamer - *FlowDreamer: A RGB-D World Model with Flow-based Motion Representations for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2505.10075-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.10075)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://sharinka0715.github.io/FlowDreamer/)] · [[💻 Code](https://github.com/sharinka0715/FlowDreamer)]
***
#### GPC - *Inference-Time Enhancement of Generative Robot Policies via Predictive World Modeling* - [![arXiv](https://img.shields.io/badge/arXiv-2502.00622-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.00622)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://computationalrobotics.seas.harvard.edu/GPC/)] · [[💻 Code](https://github.com/han20192019/gpc_code)] · [[🤗 Model](https://huggingface.co/han2019/gpc_checkpoints)]
***
#### EnerVerse - *EnerVerse: Envisioning Embodied Future Space for Robotics Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2501.01895-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2501.01895)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://sites.google.com/view/enerverse)]
***
#### Cosmos-Transfer1 - *Cosmos-Transfer1: Conditional World Generation with Adaptive Multimodal Control* - [![arXiv](https://img.shields.io/badge/arXiv-2503.14492-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.14492)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Explicit-0369a1)

[[🌍 Webpage](https://research.nvidia.com/labs/cosmos-lab/cosmos-transfer1/)] · [[💻 Code](https://github.com/nvidia-cosmos/cosmos-transfer1)] · [[🤗 Model](https://huggingface.co/nvidia/Cosmos-Transfer1-7B)]
***
#### World Models - *World Models* - [![arXiv](https://img.shields.io/badge/arXiv-1803.10122-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1803.10122)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://worldmodels.github.io/)] · [[💻 Code](https://github.com/hardmaru/WorldModelsExperiments)]
***
#### Recurrent World Models 这和上面的网页好像是一个啊 - *Recurrent World Models Facilitate Policy Evolution* - [![arXiv](https://img.shields.io/badge/arXiv-1809.01999-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1809.01999) 

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)
[[🌍 Webpage](https://worldmodels.github.io/)]

***
#### PlaNet - *Learning Latent Dynamics for Planning from Pixels* - [![arXiv](https://img.shields.io/badge/arXiv-1811.04551-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1811.04551)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://danijar.com/project/planet/)] · [[💻 Code](https://github.com/google-research/planet)]
***
#### Dreamer - *Dream to Control: Learning Behaviors by Latent Imagination* - [![arXiv](https://img.shields.io/badge/arXiv-1912.01603-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1912.01603)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://danijar.com/project/dreamer/)] · [[💻 Code](https://github.com/google-research/dreamer)]
***
#### DreamerV2 - *Mastering Atari with Discrete World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2010.02193-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2010.02193)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://danijar.com/project/dreamerv2/)] · [[💻 Code](https://github.com/danijar/dreamerv2)]
***
#### Dreamer4 - *Training Agents Inside of Scalable World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2509.24527-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.24527)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://danijar.com/project/dreamer4/)]
***
#### DreamerV3 - *Mastering Diverse Domains through World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2301.04104-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2301.04104)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://danijar.com/dreamerv3/)] · [[💻 Code](https://github.com/danijar/dreamerv3)]
***
#### DayDreamer - *DayDreamer: World Models for Physical Robot Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2206.14176-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2206.14176)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://danijar.com/project/daydreamer/)] · [[💻 Code](https://github.com/danijar/daydreamer)]
***
#### TransDreamer - *TransDreamer: Reinforcement Learning with Transformer World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2202.09481-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2202.09481)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[💻 Code](https://github.com/changchencc/TransDreamer)]
***
#### IRIS - *Transformers are Sample-Efficient World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2209.00588-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2209.00588)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[💻 Code](https://github.com/eloialonso/iris)]
***
#### TWM - *Transformer-based World Models Are Happy With 100k Interactions* - [![arXiv](https://img.shields.io/badge/arXiv-2303.07109-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2303.07109)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[💻 Code](https://github.com/jrobine/twm)]
***
#### STORM - *STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2310.09615-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.09615)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[💻 Code](https://github.com/weipu-zhang/STORM)]
***
#### V-JEPA-2 - *V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning* - [![arXiv](https://img.shields.io/badge/arXiv-2506.09985-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.09985)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[💻 Code](https://github.com/facebookresearch/vjepa2)] · [[🤗 Model](https://huggingface.co/facebook/vjepa2-vitl-fpc64-256)]
***
#### JEPA - *Introduction to latent variable energy-based models: a path toward autonomous machine intelligence* - [![arXiv](https://img.shields.io/badge/arXiv-2306.02572-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2306.02572)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

***
#### V-JEPA - *Revisiting Feature Prediction for Learning Visual Representations from Video* - [![arXiv](https://img.shields.io/badge/arXiv-2404.08471-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2404.08471)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://ai.meta.com/blog/v-jepa-yann-lecun-ai-model-video-joint-embedding-predictive-architecture/)] · [[💻 Code](https://github.com/facebookresearch/jepa)]
***
#### Rethinking JEPA - *Rethinking JEPA: Compute-Efficient Video SSL with Frozen Teachers* - [![arXiv](https://img.shields.io/badge/arXiv-2509.24317-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.24317)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

***
#### V-JEPA-2.1 - *V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2603.14482-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.14482)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://ai.meta.com/blog/v-jepa-2-world-model-benchmarks/)] · [[💻 Code](https://github.com/facebookresearch/vjepa2)]
***
#### Drive-JEPA - *Drive-JEPA: Video JEPA Meets Multimodal Trajectory Distillation for End-to-End Driving* - [![arXiv](https://img.shields.io/badge/arXiv-2601.22032-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.22032)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[💻 Code](https://github.com/linhanwang/Drive-JEPA)]
***
#### JEPA-VLA - *JEPA-VLA: Video Predictive Embedding is Needed for VLA Models* - [![arXiv](https://img.shields.io/badge/arXiv-2602.11832-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.11832)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

***
#### VLA-JEPA 后面重复了 - *VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2602.10098-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.10098)

**Tags:** ![](https://img.shields.io/badge/Action--Conditioned-0284c7) ![](https://img.shields.io/badge/Implicit-38bdf8)

[[🌍 Webpage](https://ginwind.github.io/VLA-JEPA/)] · [[💻 Code](https://github.com/ginwind/VLA-JEPA)] · [[🤗 Model](https://huggingface.co/ginwind/VLA-JEPA)]
***






### Language-conditioned and Multimodal

***
#### MoCoGAN - *MoCoGAN: Decomposing Motion and Content for Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-1707.04993-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1707.04993)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[💻 Code](https://github.com/sergeytulyakov/mocogan)]
***
#### TGAN - *Temporal Generative Adversarial Nets with Singular Value Clipping* - [![arXiv](https://img.shields.io/badge/arXiv-1611.06624-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1611.06624)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://pfnet-research.github.io/tgan/)] · [[💻 Code](https://github.com/pfnet-research/tgan)]
***
#### DVD-GAN - *Adversarial Video Generation on Complex Datasets* - [![arXiv](https://img.shields.io/badge/arXiv-1907.06571-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1907.06571)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***
#### Video Diffusion Models 和下面重复了 - *Video Diffusion Models* - [![arXiv](https://img.shields.io/badge/arXiv-2204.03458-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2204.03458)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://video-diffusion.github.io/)]
***
#### Stable Video Diffusion - *Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets* - [![arXiv](https://img.shields.io/badge/arXiv-2311.15127-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2311.15127)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://stability.ai/news/stable-video-diffusion-open-ai-video-model)] · [[💻 Code](https://github.com/Stability-AI/generative-models)] · [[🤗 Model](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt)]
***
#### U-Net - *U-Net: Convolutional Networks for Biomedical Image Segmentation* - [![arXiv](https://img.shields.io/badge/arXiv-1505.04597-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1505.04597)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)]
***
#### Video Diffusion Models 和上面重复了 - *Video Diffusion Models* - [![arXiv](https://img.shields.io/badge/arXiv-2204.03458-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2204.03458)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://video-diffusion.github.io/)]
***
#### Text2Video-Zero - *Text2Video-Zero: Text-to-Image Diffusion Models are Zero-Shot Video Generators* - [![arXiv](https://img.shields.io/badge/arXiv-2303.13439-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2303.13439)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://text2video-zero.github.io/)] · [[💻 Code](https://github.com/Picsart-AI-Research/Text2Video-Zero)] · [[🤗 Model](https://huggingface.co/PAIR/text2video-zero-controlnet-canny-arcane)]
***
#### AnimateDiff - *AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning* - [![arXiv](https://img.shields.io/badge/arXiv-2307.04725-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2307.04725)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://animatediff.github.io/)] · [[💻 Code](https://github.com/guoyww/AnimateDiff)] · [[🤗 Model](https://huggingface.co/guoyww/animatediff-motion-adapter-v1-5-2)]
***
#### ViT - *An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale* - [![arXiv](https://img.shields.io/badge/arXiv-2010.11929-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2010.11929)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[💻 Code](https://github.com/google-research/vision_transformer)]
***
#### Sora - *Video generation models as world simulators* - [![Website](https://img.shields.io/badge/Website-Link-blue?style=flat-square)](https://openai.com/research/video-generation-models-as-world-simulators)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***
#### Latte 出现两次 - *Latte: Latent Diffusion Transformer for Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2401.03048-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2401.03048)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://maxin-cn.github.io/latte_project/)] · [[💻 Code](https://github.com/Vchitect/Latte)] · [[🤗 Model](https://huggingface.co/maxin-cn/Latte)]
***
#### LDM - *High-Resolution Image Synthesis with Latent Diffusion Models* - [![arXiv](https://img.shields.io/badge/arXiv-2112.10752-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2112.10752)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://ommer-lab.com/research/latent-diffusion-models/)] · [[💻 Code](https://github.com/CompVis/latent-diffusion)]
***
#### VideoGPT - *VideoGPT: Video Generation using VQ-VAE and Transformers* - [![arXiv](https://img.shields.io/badge/arXiv-2104.10157-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.10157)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://wilson1yan.github.io/videogpt/index.html)] · [[💻 Code](https://github.com/wilson1yan/VideoGPT)]
***
#### Video LDMs - *Align your Latents: High-Resolution Video Synthesis with Latent Diffusion Models* - [![arXiv](https://img.shields.io/badge/arXiv-2304.08818-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2304.08818)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://research.nvidia.com/labs/toronto-ai/VideoLDM/)]
***
#### MAGVIT - *MAGVIT: Masked Generative Video Transformer* - [![arXiv](https://img.shields.io/badge/arXiv-2212.05199-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2212.05199)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://magvit.cs.cmu.edu/)] · [[💻 Code](https://github.com/google-research/magvit)]
***
#### Movie Gen - *Movie Gen: A Cast of Media Foundation Models* - [![arXiv](https://img.shields.io/badge/arXiv-2410.13720-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.13720)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://ai.meta.com/research/movie-gen/)]
***
#### Latte 重复了 - *Latte: Latent Diffusion Transformer for Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2401.03048-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2401.03048)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://maxin-cn.github.io/latte_project/)] · [[💻 Code](https://github.com/Vchitect/Latte)] · [[🤗 Model](https://huggingface.co/maxin-cn/Latte)]
***
#### CogVideoX - *CogVideoX: Text-to-Video Diffusion Models with An Expert Transformer* - [![arXiv](https://img.shields.io/badge/arXiv-2408.06072-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.06072)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[💻 Code](https://github.com/zai-org/CogVideo)] · [[🤗 Model](https://huggingface.co/THUDM/CogVideoX-5b)]
***
#### LTX-Video - *LTX-Video: Realtime Video Latent Diffusion* - [![arXiv](https://img.shields.io/badge/arXiv-2501.00103-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2501.00103)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[💻 Code](https://github.com/Lightricks/LTX-Video)] · [[🤗 Model](https://huggingface.co/Lightricks/LTX-Video)]
***
#### Wan - *Wan: Open and Advanced Large-Scale Video Generative Models* - [![arXiv](https://img.shields.io/badge/arXiv-2503.20314-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.20314)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://wan.video/)] · [[💻 Code](https://github.com/Wan-Video/Wan2.1)] · [[🤗 Model](https://huggingface.co/Wan-AI/Wan2.1-T2V-14B)]
***
#### Wan-Animate - *Wan-Animate: Unified Character Animation and Replacement with Holistic Replication* - [![arXiv](https://img.shields.io/badge/arXiv-2509.14055-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.14055)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://humanaigc.github.io/wan-animate)] · [[💻 Code](https://github.com/Wan-Video/Wan2.2)] · [[🤗 Model](https://huggingface.co/Wan-AI/Wan2.2-Animate-14B)]
***
#### Wan-Move - *Wan-Move: Motion-controllable Video Generation via Latent Trajectory Guidance* - [![arXiv](https://img.shields.io/badge/arXiv-2512.08765-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.08765)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

[[🌍 Webpage](https://wan-move.github.io/)] · [[💻 Code](https://github.com/ali-vilab/Wan-Move)] · [[🤗 Model](https://huggingface.co/Ruihang/Wan-Move-14B-480P)]
***
#### Sora 2 - [![Website](https://img.shields.io/badge/Website-Link-blue?style=flat-square)](https://openai.com/index/sora-2/)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***
#### Kling 3.0 - [![Website](https://img.shields.io/badge/Website-Link-blue?style=flat-square)](https://app.klingai.com/cn/quickstart/klingai-video-3-model-user-guide)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***
#### Veo 3 - [![Website](https://img.shields.io/badge/Website-Link-blue?style=flat-square)](https://deepmind.google/models/veo/)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***
#### Gen-4 - [![Website](https://img.shields.io/badge/Website-Link-blue?style=flat-square)](https://runwayml.com/research/introducing-runway-gen-4?gen4-film=3)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***
#### Pika 2.2 - [![Website](https://img.shields.io/badge/Website-Link-blue?style=flat-square)](https://pika.art/release-notes/v2-2)

**Tags:** ![](https://img.shields.io/badge/Language--Conditioned-0891b2)

***









### Embodied World Model

***
#### Genie 在action-condition有了 - *Genie: Generative Interactive Environments* - [![arXiv](https://img.shields.io/badge/arXiv-2402.15391-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.15391)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://sites.google.com/view/genie-2024/)]
***
#### SWIM - *Structured World Models from Human Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2308.10901-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2308.10901)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://human-world-model.github.io/)]
***
#### DreamDojo - *DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2602.06949-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.06949)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://dreamdojo-world.github.io/)] · [[💻 Code](https://github.com/NVIDIA/DreamDojo)] · [[🤗 Model](https://huggingface.co/nvidia/DreamDojo)]
***
#### RoboDreamer - *RoboDreamer: Learning Compositional World Models for Robot Imagination* - [![arXiv](https://img.shields.io/badge/arXiv-2404.12377-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2404.12377)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://umass-embodied-agi.github.io/robodreamer/)] · [[💻 Code](https://github.com/rainbow979/robodreamer)]
***
#### IRASim - *IRASim: A Fine-Grained World Model for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2406.14540-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.14540)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://gen-irasim.github.io/)] · [[💻 Code](https://github.com/bytedance/IRASim)]
***
#### MiLA - *MiLA: Multi-view Intensive-fidelity Long-term Video Generation World Model for Autonomous Driving* - [![arXiv](https://img.shields.io/badge/arXiv-2503.15875-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.15875)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://xiaomi-mlab.github.io/mila.github.io/)] · [[💻 Code](https://github.com/xiaomi-mlab/mila.github.io)]
***
#### Ctrl-World - *Ctrl-World: A Controllable Generative World Model for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2510.10125-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.10125)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://ctrl-world.github.io/)] · [[💻 Code](https://github.com/Robert-gyj/Ctrl-World)]
***
#### EnerVerse 之前action-conditioned有了 - *EnerVerse: Envisioning Embodied Future Space for Robotics Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2501.01895-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2501.01895)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://sites.google.com/view/enerverse)]
***
#### Gemini Robotics in Veo - *Evaluating Gemini Robotics Policies in a Veo World Simulator* - [![arXiv](https://img.shields.io/badge/arXiv-2512.10675-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.10675)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://veo-robotics.github.io/)]
***
#### Scalable Policy Evaluation - *Scalable Policy Evaluation with Video World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2511.11520-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.11520)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://miscsubmission.github.io/world_model_policy_eval/)]

***
#### 4DGen 和cascaded重复了 - *Geometry-aware 4D Video Generation for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2507.01099-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.01099)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://robot4dgen.github.io/)] · [[💻 Code](https://github.com/lzylucy/4dgen)] · [[🤗 Model](https://huggingface.co/Zeyi)]
***
#### Vidar 和后面cascaded重复 - *Vidar: Embodied Video Diffusion Model for Generalist Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2507.12898-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.12898)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://embodiedfoundation.github.io/vidar_anypos)] · [[🤗 Model](https://huggingface.co/embodiedfoundation/VIDAR)]
***
#### RoboScape - *RoboScape: Physics-informed Embodied World Model* - [![arXiv](https://img.shields.io/badge/arXiv-2506.23135-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.23135)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[💻 Code](https://github.com/tsinghua-fib-lab/RoboScape)]
***
#### Visuo-Tactile - *Visuo-Tactile World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2602.06001-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.06001)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://carolinahiguera.github.io/vtml/)]
***
#### PointWorld - *PointWorld: Scaling 3D World Models for In-The-Wild Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2601.03782-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.03782)

**Tags:** ![](https://img.shields.io/badge/Embodied--WM-06b6d4)

[[🌍 Webpage](https://point-world.github.io/)] · [[💻 Code](https://github.com/NVlabs/PointWorld)]
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






### Training Data

***
#### QT-Opt - *QT-Opt: Scalable Deep Reinforcement Learning for Vision-Based Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-1806.10293-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1806.10293)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[🌍 Webpage](https://sites.google.com/view/qtopt)]
***
#### MIME - *Multiple Interactions Made Easy (MIME): Large Scale Demonstrations Data for Imitation* - [![arXiv](https://img.shields.io/badge/arXiv-1810.07121-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1810.07121)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://sites.google.com/view/mimedataset/dataset)] · [[🌍 Webpage](https://sites.google.com/view/mimedataset)]
***
#### RoboNet - *RoboNet: Large-Scale Multi-Robot Learning* - [![arXiv](https://img.shields.io/badge/arXiv-1910.11215-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1910.11215)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://github.com/SudeepDasari/RoboNet/wiki/Getting-Started)] · [[🌍 Webpage](https://www.robonet.wiki/)] · [[💻 Code](https://github.com/SudeepDasari/RoboNet)]
***
#### RoboTurk - *Scaling Robot Supervision to Hundreds of Hours with RoboTurk: Robotic Manipulation Dataset through Human Reasoning and Dexterity* - [![arXiv](https://img.shields.io/badge/arXiv-1911.04052-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1911.04052)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://roboturk.stanford.edu/)] · [[🌍 Webpage](https://roboturk.stanford.edu/realrobotdataset.html)]
***
#### Bridge - *Bridge Data: Boosting Generalization of Robotic Skills with Cross-Domain Datasets* - [![arXiv](https://img.shields.io/badge/arXiv-2109.13396-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2109.13396)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://sites.google.com/view/bridgedata)] · [[🌍 Webpage](https://bair.berkeley.edu/blog/2021/11/18/bridge-data/)]
***
#### MT-Opt - *MT-Opt: Continuous Multi-Task Robotic Reinforcement Learning at Scale* - [![arXiv](https://img.shields.io/badge/arXiv-2104.08212-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.08212)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://www.tensorflow.org/datasets/catalog/mt_opt)] · [[🌍 Webpage](https://karolhausman.github.io/mt-opt/)]
***
#### BC-Z - *BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2202.02005-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2202.02005)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://www.kaggle.com/datasets/google/bc-z-robot)] · [[🌍 Webpage](https://sites.google.com/view/bc-z/home)]
***
#### RT-1 - *RT-1: Robotics Transformer for Real-World Control at Scale* - [![arXiv](https://img.shields.io/badge/arXiv-2212.06817-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2212.06817)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://console.cloud.google.com/storage/browser/gresearch/rt-1-data-release)] · [[🌍 Webpage](https://robotics-transformer1.github.io/)] · [[💻 Code](https://github.com/google-research/robotics_transformer)]
***
#### Language-Table - *Interactive Language: Talking to Robots in Real Time* - [![arXiv](https://img.shields.io/badge/arXiv-2210.06407-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2210.06407)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://github.com/google-research/language-table)] · [[🌍 Webpage](https://interactive-language.github.io/)]
***
#### BridgeData_V2 - *BridgeData V2: A Dataset for Robot Learning at Scale* - [![arXiv](https://img.shields.io/badge/arXiv-2308.12952-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2308.12952)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://rail-berkeley.github.io/bridgedata/?curius=1637)] · [[🌍 Webpage](https://bridgedata-v2.github.io/)] · [[💻 Code](https://github.com/rail-berkeley/bridge_data_v2)]
***
#### Jaco-Play - *CLVR Jaco Play Dataset* - [![Link](https://img.shields.io/badge/Link-Repository-blue?style=flat-square)](https://github.com/clvrai/clvr_jaco_play_dataset)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

***
#### Cable-Routing-Dataset - *Multi-Stage Cable Routing through Hierarchical Imitation Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2307.08927-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2307.08927)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://sites.google.com/view/cablerouting/data)] · [[🌍 Webpage](https://sites.google.com/view/cablerouting)] · [[💻 Code](https://github.com/charlesxu0124/CableRouting)]
***
#### RH20T - *RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot* - [![arXiv](https://img.shields.io/badge/arXiv-2307.00595-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2307.00595)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://rh20t.github.io/#download)] · [[🌍 Webpage](https://rh20t.github.io/)] · [[💻 Code](https://github.com/rh20t/rh20t_api)]
***
#### OXE - *Open X-Embodiment: Robotic Learning Datasets and RT-X Models* - [![arXiv](https://img.shields.io/badge/arXiv-2310.08864-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.08864)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://docs.google.com/spreadsheets/d/1rPBD77tk60AEIGZrGSODwyyzs5FgCU9Uz3h-3_t2A9g/edit?gid=0#gid=0)] · [[🌍 Webpage](https://robotics-transformer-x.github.io/)] · [[💻 Code](https://github.com/google-deepmind/open_x_embodiment)]
***
#### DROID - *DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-2403.12945-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.12945)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://droid-dataset.github.io/droid/the-droid-dataset)] · [[🌍 Webpage](https://droid-dataset.github.io/)] · [[💻 Code](https://github.com/droid-dataset/droid_policy_learning)]
***
#### RH20T-P - *RH20T-P: A Primitive-Level Robotic Dataset Towards Composable Generalization Agents* - [![arXiv](https://img.shields.io/badge/arXiv-2403.19622-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.19622)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://github.com/Zx55/cga-challenge/tree/main/data/rh20tp)] · [[🌍 Webpage](https://sites.google.com/view/rh20t-primitive/main)]
***
#### RoboMIND - *RoboMIND: Benchmark on Multi-embodiment Intelligence Normative Data for Robot Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2412.07215-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.13877)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://huggingface.co/datasets/x-humanoid-robomind/RoboMIND)] · [[🌍 Webpage](https://x-humanoid-robomind.github.io/)] · [[💻 Code](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io)]

***
#### ARIO - *All Robots in One: A New Standard and Unified Dataset for Versatile, General-Purpose Embodied Agents* - [![arXiv](https://img.shields.io/badge/arXiv-2408.10899-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.10899)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://openi.pcl.ac.cn/ARIO/Songling_datasets/datasets)] · [[🌍 Webpage](https://ario-dataset.github.io/)] · [[💻 Code](https://github.com/ario-dataset/ario-tools)]

***
#### RoboData - *RoboTron-Mani: All-in-One Multimodal Large Model for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2412.07215-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2412.07215)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://huggingface.co/datasets/liufanfanlff/RoboData)] · [[💻 Code](https://github.com/RoboUniview/RoboMM)]
***
#### DexCap - *DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2403.07788-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.07788)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://huggingface.co/datasets/chenwangj/DexCap-Data)] · [[🌍 Webpage](https://dex-cap.github.io/)] · [[💻 Code](https://github.com/j96w/DexCap)]
***
#### FuSe - *Beyond Sight: Finetuning Generalist Robot Policies with Heterogeneous Sensors via Language Grounding* - [![arXiv](https://img.shields.io/badge/arXiv-2501.04693-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2501.04693)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://huggingface.co/datasets/oier-mees/FuSe)] · [[🌍 Webpage](https://fuse-model.github.io/)] · [[💻 Code](https://github.com/fuse-model/FuSe)]
***
#### AgiBot World Colosseo - *AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems* - [![arXiv](https://img.shields.io/badge/arXiv-2503.06669-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.06669)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://huggingface.co/datasets/agibot-world/AgiBotWorld-Alpha)] · [[🌍 Webpage](https://agibot-world.com/)] · [[💻 Code](https://github.com/OpenDriveLab/AgiBot-World)] · [[🤗 Model](https://huggingface.co/agibot-world/GO-1)]
***
#### REASSEMBLE - *REASSEMBLE: A Multimodal Dataset for Contact-rich Robotic Assembly and Disassembly* - [![arXiv](https://img.shields.io/badge/arXiv-2502.05086-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.05086)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://researchdata.tuwien.ac.at/records/0ewrv-8cb44)] · [[🌍 Webpage](https://tuwien-asl.github.io/REASSEMBLE_page/)] · [[💻 Code](https://github.com/TUWIEN-ASL/REASSEMBLE)]
***
#### OmniAction - *RoboOmni: Proactive Robot Manipulation in Omni-modal Context* - [![arXiv](https://img.shields.io/badge/arXiv-2510.23763-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.23763)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

[[📦 Dataset](https://huggingface.co/datasets/fnlp/OmniAction)] · [[🌍 Webpage](https://openmoss.github.io/RoboOmni/)] · [[💻 Code](https://github.com/OpenMOSS/RoboOmni)] · [[🤗 Model](https://huggingface.co/fnlp/RoboOmni)]
***
#### UnifoLM-WBT - *UnifoLM-WBT-Dataset* - [![Link](https://img.shields.io/badge/Link-Dataset-blue?style=flat-square)](https://huggingface.co/collections/unitreerobotics/unifolm-wbt-dataset)

**Tags:** ![](https://img.shields.io/badge/data--RobotCentric-16a34a)

***

#### UMI - *Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots* - [![arXiv](https://img.shields.io/badge/arXiv-2402.10329-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.10329)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://umi-gripper.github.io/)] · [[💻 Code](https://github.com/real-stanford/universal_manipulation_interface)]
***
#### FastUMI - *FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-2409.19499-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2409.19499)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[📦 Dataset](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data)] · [[🌍 Webpage](https://fastumi.com/FastUMI/)] · [[💻 Code](https://github.com/zxzm-zak/FastUMI_Data)]
***
#### FastUMI-100K - *FastUMI-100K: Advancing Data-driven Robotic Manipulation with a Large-scale UMI-style Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-2510.08022-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.08022)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[💻 Code](https://github.com/MrKeee/FastUMI-100K)]
***
#### RealOmin - *10Kh-RealOmin-OpenData: A Large-Scale Real-World Manipulation Dataset* - [![Link](https://img.shields.io/badge/Link-Dataset-blue?style=flat-square)](https://huggingface.co/datasets/genrobot2025/10Kh-RealOmin-OpenData)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[📦 Dataset](https://huggingface.co/datasets/genrobot2025/10Kh-RealOmin-OpenData)] · [[🌍 Webpage](https://www.genrobot.ai/data/open-dataset)] · [[💻 Code](https://github.com/genrobot-ai/das-datakit)]
***
#### Hoi! - *Hoi! -- A Multimodal Dataset for Force-Grounded, Cross-View Articulated Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2512.04884-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2512.04884)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[📦 Example Data](https://drive.google.com/drive/folders/1Hzpt5WXFbUg0CNVU7gudH-4z-HkC6kGR)] · [[🌍 Webpage](https://timengelbracht.github.io/Hoi-Dataset-Website/)]
***
#### RDT2 - *RDT2: Exploring the Scaling Limit of UMI Data Towards Zero-Shot Cross-Embodiment Generalization* - [![arXiv](https://img.shields.io/badge/arXiv-2602.03310-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.03310)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://rdt-robotics.github.io/rdt2/)] · [[💻 Code](https://github.com/thu-ml/RDT2)] · [[🤗 Model](https://huggingface.co/robotics-diffusion-transformer/RDT2-VQ)] · [[🤗 Model](https://huggingface.co/robotics-diffusion-transformer/RDT2-FM)]
***
#### MV-UMI - *MV-UMI: A Scalable Multi-View Interface for Cross-Embodiment Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2509.18757-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.18757)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://mv-umi.github.io/)]
***
#### ActiveUMI - *ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations* - [![arXiv](https://img.shields.io/badge/arXiv-2510.01607-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.01607)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://activeumi.github.io/)]
***
#### exUMI - *exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation* - [![arXiv](https://img.shields.io/badge/arXiv-2509.14688-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2509.14688)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://silicx.github.io/exUMI/)] · [[💻 Code](https://github.com/silicx/exUMI)]
***
#### Tactile-Conditioned Diffusion Policy - *Tactile-Conditioned Diffusion Policy for Force-Aware Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2510.13324-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.13324)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://tactile-farm.github.io/)]
***
#### DexUMI - *DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2505.21864-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.21864)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[📦 Dataset](https://umi-data.github.io/)] · [[🌍 Webpage](https://dex-umi.github.io/)] · [[💻 Code](https://github.com/real-stanford/DexUMI)]
***
#### UMI on Legs - *UMI on Legs: Making Manipulation Policies Mobile with Manipulation-Centric Whole-body Controllers* - [![arXiv](https://img.shields.io/badge/arXiv-2407.10353-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2407.10353)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://umi-on-legs.github.io/)] · [[💻 Code](https://github.com/real-stanford/umi-on-legs)]
***
#### HoMMI - *HoMMI: Learning Whole-Body Mobile Manipulation from Human Demonstrations* - [![arXiv](https://img.shields.io/badge/arXiv-2603.03243-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2603.03243)

**Tags:** ![](https://img.shields.io/badge/data--UMI-22c55e)

[[🌍 Webpage](https://hommi-robot.github.io/)] · [[💻 Code](https://github.com/xxm19/hommi)]
***





#### MimicGen - *MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations* - [![arXiv](https://img.shields.io/badge/arXiv-2310.17596-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2310.17596)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/amandlek/mimicgen_datasets)] · [[🌍 Webpage](https://mimicgen.github.io/)] · [[💻 Code](https://github.com/NVlabs/mimicgen)]
***
#### ManiSkill2 - *ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills* - [![arXiv](https://img.shields.io/badge/arXiv-2302.04659-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2302.04659)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/haosulab/ManiSkill2)] · [[🌍 Webpage](https://haosulab.github.io/ManiSkill2/)] · [[💻 Code](https://github.com/KolinGuo/ManiSkill2)]
***
#### RoboCasa - *RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots* - [![arXiv](https://img.shields.io/badge/arXiv-2406.02523-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.02523)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://robocasa.ai/docs/build/html/datasets/using_datasets.html)] · [[🌍 Webpage](https://robocasa.ai/)] · [[💻 Code](https://github.com/robocasa/robocasa)]
***
#### RoboTwin - *RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins* - [![arXiv](https://img.shields.io/badge/arXiv-2504.13059-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.13059)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/TianxingChen/RoboTwin)] · [[🌍 Webpage](https://robotwin-platform.github.io/)] · [[💻 Code](https://github.com/RoboTwin-Platform/RoboTwin)]
***
#### DexMimicGen - *DexMimicGen: Automated Data Generation for Bimanual Dexterous Manipulation via Imitation Learning* - [![arXiv](https://img.shields.io/badge/arXiv-2410.24185-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.24185)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/MimicGen/dexmimicgen_datasets)] · [[🌍 Webpage](https://dexmimicgen.github.io/)] · [[💻 Code](https://github.com/NVlabs/dexmimicgen)]
***
#### QUARD-Auto - *GeRM: A Generalist Robotic Model with Mixture-of-experts for Quadruped Robot* - [![arXiv](https://img.shields.io/badge/arXiv-2403.13358-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.13358)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://github.com/Songwxuan/GeRM)] · [[🌍 Webpage](https://songwxuan.github.io/GeRM/)] · [[💻 Code](https://github.com/Songwxuan/GeRM)]
***
#### TesserAct - *TesserAct: Learning 4D Embodied World Models* - [![arXiv](https://img.shields.io/badge/arXiv-2504.20995-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2504.20995)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

Dataset: No standalone official public dataset page found

[[🌍 Webpage](https://tesseractworld.github.io/)] · [[💻 Code](https://github.com/UMass-Embodied-AGI/TesserAct)] · [[🤗 Model](https://huggingface.co/anyeZHY/tesseract)]
***
#### RoboCerebra - *RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation* - [![arXiv](https://img.shields.io/badge/arXiv-2506.06677-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.06677)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/lerobot/robocerebra_unified)] · [[🌍 Webpage](https://robocerebra.github.io/)] · [[💻 Code](https://github.com/buaa-colalab/RoboCerebra)]
***
#### SynGrasp-1B - *GraspVLA: a Grasping Foundation Model Pre-trained on Billion-scale Synthetic Action Data* - [![arXiv](https://img.shields.io/badge/arXiv-2505.03233-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.03233)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[🌍 Webpage](https://pku-epic.github.io/GraspVLA-web)] · [[💻 Code](https://github.com/PKU-EPIC/GraspVLA)]
***
#### RoboTwin 2.0 - *RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2506.18088-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2506.18088)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/TianxingChen/RoboTwin2.0)] · [[🌍 Webpage](https://robotwin-platform.github.io/)] · [[💻 Code](https://github.com/RoboTwin-Platform/RoboTwin)]
***
#### TLA - *TLA: Tactile-Language-Action Model for Contact-Rich Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2503.08548-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.08548)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[🌍 Webpage](https://sites.google.com/view/tactile-language-action/)]
***
#### InternVLA-M1 - *InternVLA-M1: A Spatially Guided Vision-Language-Action Framework for Generalist Robot Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2510.13778-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.13778)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/InternRobotics/InternData-M1)] · [[🌍 Webpage](https://internrobotics.github.io/internvla-m1.github.io)] · [[💻 Code](https://github.com/InternRobotics/InternVLA-M1)] · [[🤗 Model](https://huggingface.co/InternRobotics/InternVLA-M1)]
***
#### InternData-A1 - *InternVLA-A1: Unifying Understanding, Generation and Action for Robotic Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2601.02456-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2601.02456)

**Tags:** ![](https://img.shields.io/badge/data--Simulation-15803d)

[[📦 Dataset](https://huggingface.co/datasets/InternRobotics/InternData-A1)] · [[🌍 Webpage](https://internrobotics.github.io/interndata-a1.github.io/)] · [[💻 Code](https://github.com/InternRobotics/InternVLA-A1)] · [[🤗 Model](https://huggingface.co/InternRobotics/InternVLA-A1-3B)]
***





***
#### SSv2 - *The "something something" video database for learning and evaluating visual common sense* - [![arXiv](https://img.shields.io/badge/arXiv-1706.04261-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1706.04261)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://developer.qualcomm.com/software/ai-datasets/something-something)]
***
#### EPIC-KITCHENS - *Scaling Egocentric Vision: The EPIC-KITCHENS Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-1804.02748-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1804.02748)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://epic-kitchens.github.io/)] · [[🌍 Webpage](https://epic-kitchens.github.io/)] · [[💻 Code](https://github.com/epic-kitchens/epic-kitchens-download-scripts)]
***
#### HowTo100M - *HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips* - [![arXiv](https://img.shields.io/badge/arXiv-1906.03327-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1906.03327)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://www.di.ens.fr/willow/research/howto100m/)] · [[🌍 Webpage](https://www.di.ens.fr/willow/research/howto100m/)]
***
#### Kinetics-700 - *A Short Note on the Kinetics-700 Human Action Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-1907.06987-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/1907.06987)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://github.com/cvdfoundation/kinetics-dataset)] · [[💻 Code](https://github.com/cvdfoundation/kinetics-dataset)]
***
#### EGTEA Gaze+ - *In the Eye of the Beholder: Gaze and Actions in First Person Video* - [![arXiv](https://img.shields.io/badge/arXiv-2006.00626-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2006.00626)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://cbs.ic.gatech.edu/fpv/)] · [[🌍 Webpage](https://cbs.ic.gatech.edu/fpv/)]
***
#### Ego4D - *Ego4D: Around the World in 3,000 Hours of Egocentric Video* - [![arXiv](https://img.shields.io/badge/arXiv-2110.07058-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2110.07058)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://ego4d-data.org/docs/start-here/)] · [[🌍 Webpage](https://ego4d-data.org/)] · [[💻 Code](https://github.com/facebookresearch/Ego4d)]
***
#### HOI4D - *HOI4D: A 4D Egocentric Dataset for Category-Level Human-Object Interaction* - [![arXiv](https://img.shields.io/badge/arXiv-2203.01577-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2203.01577)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://hoi4d.github.io/)] · [[🌍 Webpage](https://hoi4d.github.io/)]
***
#### EgoVid-5M - *EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation* - [![arXiv](https://img.shields.io/badge/arXiv-2411.08380-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2411.08380)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://egovid.github.io/)] · [[🌍 Webpage](https://egovid.github.io/)]
***
#### COM Kitchens - *COM Kitchens: An Unedited Overhead-view Video Dataset as a Vision-Language Benchmark* - [![arXiv](https://img.shields.io/badge/arXiv-2408.02272-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2408.02272)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://github.com/omron-sinicx/com_kitchens)] · [[💻 Code](https://github.com/omron-sinicx/com_kitchens)]
***
#### Egocentric-10K - *Egocentric-10K* - [![Link](https://img.shields.io/badge/Link-Dataset-blue?style=flat-square)](https://huggingface.co/datasets/builddotai/Egocentric-10K)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/builddotai/Egocentric-10K)] · [[🌍 Webpage](https://egocentric.io/)]
***
#### DreamDojo - *DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2602.06949-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2602.06949)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

Dataset: No standalone official public dataset page found

[[🌍 Webpage](https://dreamdojo-world.github.io/)] · [[💻 Code](https://github.com/NVIDIA/DreamDojo)] · [[🤗 Model](https://huggingface.co/nvidia/DreamDojo)]
***
#### Assembly101 - *Assembly101: A Large-Scale Multi-View Video Dataset for Understanding Procedural Activities* - [![arXiv](https://img.shields.io/badge/arXiv-2203.14712-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2203.14712)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://assembly-101.github.io/)] · [[🌍 Webpage](https://assembly-101.github.io/)] · [[💻 Code](https://github.com/assembly-101/assembly101-download-scripts)]
***
#### H2O - *H2O: Two Hands Manipulating Objects for First Person Interaction Recognition* - [![arXiv](https://img.shields.io/badge/arXiv-2104.11181-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2104.11181)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://taeinkwon.com/projects/h2o/)] · [[🌍 Webpage](https://taeinkwon.com/projects/h2o/)] · [[💻 Code](https://github.com/taeinkwon/h2odataset)]
***
#### EgoPAT3D - *Egocentric Prediction of Action Target in 3D* - [![arXiv](https://img.shields.io/badge/arXiv-2203.13116-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2203.13116)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://github.com/ai4ce/EgoPAT3D)] · [[💻 Code](https://github.com/ai4ce/EgoPAT3D)]
***
#### Ego-Exo4D - *Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives* - [![arXiv](https://img.shields.io/badge/arXiv-2311.18259-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2311.18259)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://docs.ego-exo4d-data.org/download/)] · [[🌍 Webpage](https://ego-exo4d-data.org/)] · [[💻 Code](https://github.com/facebookresearch/Ego4d)]
***
#### ARCTIC - *ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2204.13662-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2204.13662)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://arctic.is.tue.mpg.de/)] · [[🌍 Webpage](https://arctic.is.tue.mpg.de/)] · [[💻 Code](https://github.com/zc-alexfan/arctic)]
***
#### HoloAssist - *HoloAssist: an Egocentric Human Interaction Dataset for Interactive AI Assistants in the Real World* - [![arXiv](https://img.shields.io/badge/arXiv-2309.17024-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2309.17024)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://holoassist.github.io/)] · [[🌍 Webpage](https://holoassist.github.io/)]
***
#### HOT3D - *HOT3D: Hand and Object Tracking in 3D from Egocentric Multi-View Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2411.19167-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2411.19167)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://www.projectaria.com/datasets/hot3D/)] · [[🌍 Webpage](https://www.projectaria.com/datasets/hot3D/)] · [[💻 Code](https://github.com/facebookresearch/hot3d)]
***
#### TACO - *TACO: Benchmarking Generalizable Bimanual Tool-ACtion-Object Understanding* - [![arXiv](https://img.shields.io/badge/arXiv-2401.08399-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2401.08399)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://taco2024.github.io/)] · [[🌍 Webpage](https://taco2024.github.io/)] · [[💻 Code](https://github.com/leolyliu/TACO-Instructions)]
***
#### Aria Everyday Activities - *Aria Everyday Activities Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-2402.13349-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2402.13349)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://www.projectaria.com/datasets/aea/)] · [[🌍 Webpage](https://www.projectaria.com/datasets/aea/)] · [[💻 Code](https://github.com/facebookresearch/projectaria_tools)]
***
#### OAKINK2 - *OAKINK2: A Dataset of Bimanual Hands-Object Manipulation in Complex Task Completion* - [![arXiv](https://img.shields.io/badge/arXiv-2403.19417-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2403.19417)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://oakink.net/v2/)] · [[🌍 Webpage](https://oakink.net/v2/)] · [[💻 Code](https://github.com/oakink/OakInk2)]
***
#### Nymeria - *Nymeria: A Massive Collection of Multimodal Egocentric Daily Motion in the Wild* - [![arXiv](https://img.shields.io/badge/arXiv-2406.09905-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2406.09905)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/projectaria/Nymeria)] · [[🌍 Webpage](https://www.projectaria.com/datasets/nymeria/)] · [[💻 Code](https://github.com/facebookresearch/nymeria_dataset)]
***
#### EgoMimic - *EgoMimic: Scaling Imitation Learning via Egocentric Video* - [![arXiv](https://img.shields.io/badge/arXiv-2410.24221-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2410.24221)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/gatech/EgoMimic)] · [[🌍 Webpage](https://egomimic.github.io/)]
***
#### PH^2D - *Humanoid Policy ~ Human Policy* - [![arXiv](https://img.shields.io/badge/arXiv-2503.13441-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.13441)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/RogerQi/PH2D)] · [[🌍 Webpage](https://human-as-robot.github.io/)]
***
#### Humanoid Everyday - *Humanoid Everyday: A Comprehensive Robotic Dataset for Open-World Humanoid Manipulation* - [![arXiv](https://img.shields.io/badge/arXiv-2510.08807-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2510.08807)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/USC-PSI-Lab/humanoid-everyday)] · [[🌍 Webpage](https://humanoideveryday.github.io/)] · [[💻 Code](https://github.com/ausbxuse/Humanoid-Everyday)]
***
#### IndEgo - *IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants* - [![arXiv](https://img.shields.io/badge/arXiv-2511.19684-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2511.19684)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/FraunhoferIPK/IndEgo)] · [[🌍 Webpage](https://indego-dataset.github.io/)] · [[💻 Code](https://github.com/Vivek9Chavan/IndEgo)]
***
#### PLAICraft - *PLAICraft: Large-Scale Time-Aligned Vision-Speech-Action Dataset for Embodied AI* - [![arXiv](https://img.shields.io/badge/arXiv-2505.12707-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.12707)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

Dataset: No standalone official public dataset page found
***
#### HD-EPIC - *HD-EPIC: A Highly-Detailed Egocentric Video Dataset* - [![arXiv](https://img.shields.io/badge/arXiv-2502.04144-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2502.04144)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://hd-epic.github.io/site/)] · [[🌍 Webpage](https://hd-epic.github.io/site/)]
***
#### UniHand - *Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2507.15597-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.15597)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/BeingBeyond/h0_post_train_db_2508)] · [[🌍 Webpage](https://beingbeyond.github.io/Being-H0)] · [[💻 Code](https://github.com/BeingBeyond/Being-H0)] · [[🤗 Model](https://huggingface.co/BeingBeyond/Being-H0)]
***
#### Ego-Centric Human Manipulation Dataset - *EgoVLA: Learning Vision-Language-Action Models from Egocentric Human Videos* - [![arXiv](https://img.shields.io/badge/arXiv-2507.12440-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2507.12440)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://huggingface.co/datasets/EgoVLA/EgoVLA-Humanoid-Sim)] · [[🌍 Webpage](https://rchalyang.github.io/EgoVLA/)]
***
#### Kaiwu - *Kaiwu: A Multimodal Manipulation Dataset and Framework for Robot Learning and Human-Robot Interaction* - [![arXiv](https://img.shields.io/badge/arXiv-2503.05231-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2503.05231)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

Dataset: No standalone official public dataset page found
***
#### EgoDex - *EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video* - [![arXiv](https://img.shields.io/badge/arXiv-2505.11709-b31b1b?style=flat-square&logo=arxiv)](https://arxiv.org/pdf/2505.11709)

**Tags:** ![](https://img.shields.io/badge/data--Human/Egocentric-65a30d)

[[📦 Dataset](https://github.com/apple/ml-egodex)] · [[💻 Code](https://github.com/apple/ml-egodex)]
***





### Evaluation




