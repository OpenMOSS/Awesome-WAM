<div align="center">

# World Action Models: The Next Frontier in Embodied AI

[![arXiv](https://img.shields.io/badge/arXiv-2605.xxx-b31b1b.svg)](https://arxiv.org/abs/2509.07996) [![ProjectPage](https://img.shields.io/badge/Website-Link-blue)](https://dreamzero0.github.io)

<p align="center">
  <a href="https://sinwang20.github.io/">Siyin Wang</a></strong><sup>1,2,*,‡</sup>,  
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Junhao Shi</a></strong><sup>1,2,*</sup>,  
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Zhaoyang Fu</a></strong><sup>1,*</sup>, 
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Xinzhe He</a></strong><sup>1,*</sup>,  
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Feihong Liu</a></strong><sup>1,*</sup>,<br>
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Chenchen Yang</a><sup>1,2</sup>, 
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Yikang Zhou</a><sup>2</sup>, 
  <a href="https://github.com/OpenMOSS/Awesome-WAM">Zhaoye Fei</a><sup>1</sup>, 
  <a href="https://scholar.google.com/citations?user=IlNreT4AAAAJ&hl=zh-TW">Jingjing Gong</a><sup>2</sup>, 
  <a href="https://jinlanfu.github.io/">Jinlan Fu</a><sup>1</sup><br>,
  <a href="https://sites.google.com/view/showlab">Mike Zheng Shou</a><sup>3</sup> · 
  <a href="https://xuanjing-huang.github.io/">Xuanjing Huang</a><sup>1,2</sup> · 
  <a href="https://xpqiu.github.io/">Xipeng Qiu</a><sup>1,2</sup> · 
  <a href="https://teai.fudan.edu.cn/">Yu-Gang Jiang</a></strong><sup>1,†</sup>
</p>

<p align="center">
  <sup>1</sup>Fudan University, 
  <sup>2</sup>Shanghai Innovation Institute, 
  <sup>3</sup>National University of Singapore<br>
  <sup>*</sup>Equal Contribution,
  <sup>‡</sup>Project Lead,
  <sup>†</sup>Corresponding Author
</p>



</div>


This repository accompanies our survey on **World Action Models (WAMs)** — the emerging paradigm that unifies predictive world modeling with action generation for embodied AI. We will keep this repo continuously updated as the field evolves.

- 📄 The **first systematic WAM survey**, covering architecture taxonomy (Cascaded & Joint WAMs), training data, evaluation protocols, and world models for VLA learning.
- 📖 **Reading blogs included**: we also provide a concise, structured summary blog for each paper to help you quickly grasp the key ideas, architecture, and contributions. The summarization skill used to generate them is also open-sourced in this repository.
- 🤝 Community-driven: found a missing paper or have a suggestion? Feel free to open an issue or submit a pull request!


<p align="center">
  <img src="figs/roadmap.svg" alt="Temporal evolution and taxonomy of representative works on World Action Models (WAMs). " width="100%">
</p>


## 🔔 News

- **[2026-05-13]**  Initial release of the survey paper and repository.

## Contents

- [Tag Legend](#tag-legend)
- [World Action Model](#world-action-model)
  - [Cascaded World-Action-Model](#cascaded-world-action-model)
  - [Joint World-Action-Model](#joint-world-action-model)
    - [Autoregressive Generation](#autoregressive-generation)
    - [Diffusion-based Generation](#diffusion--based-generation)
- [World Model for VLA](#world-model-for-vla)
  - [Imitation Learning](#imitation-learning)
  - [Reinforcement Learning](#reinforcement-learning)
  - [Evaluation](#evaluation)
- [Training Data](#training-data)
- [Evaluation](#evaluation)

## Tag Legend
### World Action Model tags
**Cascaded WAM**
- ![](https://img.shields.io/badge/Explicit-d97706) Pixel-space Representations
  - ![](https://img.shields.io/badge/Learned-b45309) Learned Action Extraction
  - ![](https://img.shields.io/badge/Geometric-fbbf24) Geometric Extraction
- ![](https://img.shields.io/badge/Implicit-ea580c) Implicit Planning via Latent Representations

**Joint WAM**
- Autoregressive Generation
  - ![](https://img.shields.io/badge/Explicit--Decoupled-be185d) Explicit Decoupled Representation
  - ![](https://img.shields.io/badge/Unified--Discrete-f472b6) Unified Discrete Representations
  - ![](https://img.shields.io/badge/Predictive--Latent-c026d3) Predictive Latent Representation

- Diffusion-based Generation
  - ![](https://img.shields.io/badge/Unified--Stream-be123c) Unified Stream
    - ![](https://img.shields.io/badge/Explicit-f43f5e) Explicit Future Generation
    - ![](https://img.shields.io/badge/Implicit-fda4af) Implicit Future Prediction
  - ![](https://img.shields.io/badge/Multi--Stream-9f1239) Multi-Stream
    - ![](https://img.shields.io/badge/Cross--Attention-f97316) Cross-Attention Coupling
    - ![](https://img.shields.io/badge/Hidden--State-fb7185) Hidden-State Coupling
    - ![](https://img.shields.io/badge/Shared--Rep-db2777) Shared Representation


## World Action Model
### Cascaded World-Action-Model


**UniPi**: "Learning Universal Policies via Text-Guided Video Generation", NeurIPS 2023. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://openreview.net/forum?id=bo8q5MRcwy)] [[🌍 Webpage](https://research.google/blog/unipi-learning-universal-policies-via-text-guided-video-generation/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UniPi/index.html) ]

**VLP**: "Video Language Planning", ICLR 2024. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://openreview.net/forum?id=9pKtcJcMP3)] [[🌍 Webpage](https://video-language-planning.github.io/)] [[💻 Code](https://github.com/video-language-planning/vlp_code)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLP/index.html) ]

**RoboEnvision**: "RoboEnvision: A Long-Horizon Video Generation Model for Multi-Task Robot Manipulation", IROS 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11246352)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RoboEnvision/index.html) ]

**ThisAndThat**: "This&That: Language-Gesture Controlled Video Generation for Robot Planning", ICRA 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11128780)] [[🌍 Webpage](https://mvandermerwe.github.io/publication/this-and-that/)] [[💻 Code](https://github.com/Kiteretsu77/This_and_That_VDM)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/ThisAndThat/index.html) ]

**SayDreamAct**: "Say, Dream, and Act: Learning Video World Models for Instruction-Driven Robot Manipulation", arXiv 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://arxiv.org/pdf/2602.10717)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/SayDreamAct/index.html) ]

**TesserAct**: "TesserAct: Learning 4D Embodied World Models", ICCV 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://openaccess.thecvf.com/content/ICCV2025/papers/Zhen_Learning_4D_Embodied_World_Models_ICCV_2025_paper.pdf)] [[🌍 Webpage](https://tesseractworld.github.io/)] [[💻 Code](https://github.com/UMass-Embodied-AGI/TesserAct)] [[🤗 Model](https://huggingface.co/anyeZHY/tesseract)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/TesserAct/index.html) ]

**MVISTA-4D**: "MVISTA-4D: View-Consistent 4D World Model with Test-Time Action Inference for Robotic Manipulation", arXiv 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://arxiv.org/pdf/2602.09878)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/MVISTA-4D/index.html) ]

**Vidar**: "Vidar: Embodied Video Diffusion Model for Generalist Bimanual Manipulation", arXiv 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://arxiv.org/pdf/2507.12898)] [[🌍 Webpage](https://embodiedfoundation.github.io/vidar_anypos)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Vidar/index.html) ]

**Gen2Act**: "Gen2Act: Human Video Generation in Novel Scenarios Enables Generalizable Robot Manipulation", CoRL 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://openreview.net/forum?id=HprBJupvvM)] [[🌍 Webpage](https://homangab.github.io/gen2act/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Gen2Act/index.html) ]

**Veo-Act**: "Veo-Act: How Far Can Frontier Video Models Advance Generalizable Robot Manipulation?", arXiv 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://arxiv.org/pdf/2604.04502)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2604.04502/index.html)]

**VAG**: "VAG: Dual-Stream Video-Action Generation for Embodied Data Synthesis", arXiv 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://arxiv.org/pdf/2604.09330)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.09330/index.html)]

**pi0.7**: "pi0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities", arXiv 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Learned-b45309)
[[📄 Paper](https://arxiv.org/pdf/2604.15483)] [[🌍 Webpage](https://pi.website/pi07)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2604.15483/index.html)]

**AVDC**: "Learning to Act from Actionless Videos through Dense Correspondences", ICLR 2024. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://openreview.net/forum?id=Mhb5fpA1T0)] [[🌍 Webpage](https://flow-diffusion.github.io/)] [[💻 Code](https://github.com/flow-diffusion/AVDC)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/AVDC/index.html) ]

**Im2Flow2Act**: "Flow as the Cross-Domain Manipulation Interface", CoRL 2024. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://proceedings.mlr.press/v270/xu25a.html)] [[🌍 Webpage](https://im2flow2act.github.io/)] [[💻 Code](https://github.com/real-stanford/im2Flow2Act)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Im2Flow2Act/index.html) ]

**3DFlowAction**: "3DFlowAction: Learning Cross-Embodiment Manipulation from 3D Flow World Model", arXiv 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://arxiv.org/pdf/2506.06199)] [[💻 Code](https://github.com/Hoyyyaard/3DFlowAction/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/3DFlowAction/index.html) ]

**NovaFlow**: "NovaFlow: Zero-Shot Manipulation via Actionable Flow from Generated Videos", arXiv 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://arxiv.org/pdf/2510.08568)] [[🌍 Webpage](https://novaflow.lhy.xyz/)] [[💻 Code](https://github.com/rai-opensource/NovaFlow)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/NovaFlow/index.html) ]

**Dream2Flow**: "Dream2Flow: Bridging Video Generation and Open-World Manipulation with 3D Object Flow", arXiv 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://arxiv.org/pdf/2512.24766)] [[🌍 Webpage](https://dream2flow.github.io/)] [[💻 Code](https://github.com/KDharmarajanDev/Dream2Flow/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Dream2Flow/index.html) ]

**Dreamitate**: "Dreamitate: Real-World Visuomotor Policy Learning via Video Generation", CoRL 2024. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://proceedings.mlr.press/v270/liang25b.html)] [[🌍 Webpage](https://dreamitate.cs.columbia.edu/)] [[💻 Code](https://github.com/cvlab-columbia/dreamitate)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Dreamitate/index.html) ]

**4DGen**: "Geometry-aware 4D Video Generation for Robot Manipulation", ICLR 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://openreview.net/forum?id=18gC6pZVVc)] [[🌍 Webpage](https://robot4dgen.github.io/)] [[💻 Code](https://github.com/lzylucy/4dgen)] [[🤗 Model](https://huggingface.co/Zeyi)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/4DGen/index.html) ]

**RIGVid**: "Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations", ICLR 2026. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://openreview.net/forum?id=tv0Sz8A9Tc)] [[🌍 Webpage](https://rigvid-robot.github.io/)] [[💻 Code](https://github.com/shivanshpatel35/rigvid)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RIGVid/index.html) ]

**LV-P**: "Large Video Planner Enables Generalizable Robot Control", arXiv 2025. ![](https://img.shields.io/badge/Explicit-d97706) ![](https://img.shields.io/badge/Geometric-fbbf24)
[[📄 Paper](https://arxiv.org/pdf/2512.15840)] [[🌍 Webpage](https://www.boyuan.space/large-video-planner/)] [[💻 Code](https://github.com/buoyancy99/large-video-planner)] [[🤗 Model](https://huggingface.co/KempnerInstituteAI/LVP)] [[🌟 Blog](https://github.com/OpenMOSS/WAM-survey/blob/main/report/cn_enhance_ver2/LVP%20-%20Large%20Video%20Planner%20Enables%20Generalizable%20Robot%20Control%20(CN-Enhance2).md)]

**VideoPolicy**: "Video Generators are Robot Policies", arXiv 2025. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://arxiv.org/pdf/2508.00795)] [[🌍 Webpage](https://videopolicy.cs.columbia.edu/)] [[💻 Code](https://github.com/cvlab-columbia/videopolicy)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VideoPolicy/index.html) ]

**ARDuP**: "ARDuP: Active Region Video Diffusion for Universal Policies", IROS 2024. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://ieeexplore.ieee.org/document/10802264)] [[🌍 Webpage](https://rpl.cs.utexas.edu/publications/2024/10/14/huang-iros24-ardup/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/ARDuP/index.html) ]

**mimic-video**: "mimic-video: Video-Action Models for Generalizable Robot Control Beyond VLAs", arXiv 2025. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://arxiv.org/pdf/2512.15692)] [[🌍 Webpage](https://mimic-video.github.io/)] [[💻 Code](https://github.com/mimic-video/mimic-video)] [[🤗 Model](https://huggingface.co/jonpai/mimic-video)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/mimic-video/index.html) ]

**VPP**: "Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations", ICML 2025. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://openreview.net/forum?id=c0dhw1du33)] [[🌍 Webpage](https://video-prediction-policy.github.io/)] [[💻 Code](https://github.com/roboterax/video-prediction-policy)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VPP/index.html) ]

**VILP**: "VILP: Imitation Learning with Latent Video Planning", RA-L 2025. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10887293)] [[💻 Code](https://github.com/ZhengtongXu/VILP)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VILP/index.html) ]

**LaPA**: "Latent Action Pretraining from Videos", ICLR 2025. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://openreview.net/forum?id=VYOe2eBQeh)] [[🌍 Webpage](https://latentactionpretraining.github.io/)] [[💻 Code](https://github.com/LatentActionPretraining/LAPA)] [[🤗 Model](https://huggingface.co/latent-action-pretraining/LAPA-7B-openx)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LaPA/index.html) ]

**villa-X**: "villa-X: Enhancing Latent Action Modeling in Vision-Language-Action Models", ICLR 2026. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://openreview.net/forum?id=y5CaJb17Fn)] [[🌍 Webpage](https://microsoft.github.io/villa-x/)] [[💻 Code](https://github.com/microsoft/villa-x)] [[🤗 Model](https://huggingface.co/microsoft/villa-x)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/villa-X/index.html) ]

**S-VAM**: "S-VAM: Shortcut Video-Action Model by Self-Distilling Geometric and Semantic Foresight", arXiv 2026. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://arxiv.org/pdf/2603.16195)] [[🌍 Webpage](https://haodong-yan.github.io/S-VAM/)] [[💻 Code](https://github.com/Haodong-Yan/S-VAM-Code)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2603.16195/index.html)]

**OmniVTA**: "OmniVTA: Visuo-Tactile World Modeling for Contact-Rich Robotic Manipulation", arXiv 2026. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://arxiv.org/pdf/2603.19201)] [[🌍 Webpage](https://mrsecant.github.io/OmniVTA)] [[💻 Code](https://github.com/MrSecant/OmniVTA)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/cascade/2603.19201/index.html)]

**MWM**: "Mask World Model: Predicting What Matters for Robust Robot Policy Learning", arXiv 2026. ![](https://img.shields.io/badge/Implicit-ea580c)
[[📄 Paper](https://arxiv.org/pdf/2604.19683)] [[💻 Code](https://github.com/LYFCLOUDFAN/mask-world-model)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.19683/index.html)]






### Joint World-Action-Model
### Autoregressive Generation


**GR-1**: "Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation", ICLR 2024. ![](https://img.shields.io/badge/Explicit--Decoupled-be185d)
[[📄 Paper](https://openreview.net/forum?id=NxoFmGgWC9)] [[🌍 Webpage](https://gr1-manipulation.github.io/)] [[💻 Code](https://github.com/bytedance/GR-1)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-1/index.html) ]

**GR-MG**: "GR-MG: Leveraging Partially-Annotated Data via Multi-Modal Goal-Conditioned Policy", RA-L 2025. ![](https://img.shields.io/badge/Explicit--Decoupled-be185d)
[[📄 Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10829675)] [[🌍 Webpage](https://gr-mg.github.io/)] [[💻 Code](https://github.com/bytedance/GR-MG)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-MG/index.html) ]

**GR-2**: "GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation", arXiv 2024. ![](https://img.shields.io/badge/Explicit--Decoupled-be185d)
[[📄 Paper](https://arxiv.org/pdf/2410.06158)] [[🌍 Webpage](https://gr2-manipulation.github.io/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/GR-2/index.html) ]

**CoT-VLA**: "CoT-VLA: Visual Chain-of-Thought Reasoning for Vision-Language-Action Models", CVPR 2025. ![](https://img.shields.io/badge/Unified--Discrete-f472b6)
[[📄 Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_CoT-VLA_Visual_Chain-of-Thought_Reasoning_for_Vision-Language-Action_Models_CVPR_2025_paper.pdf)] [[🌍 Webpage](https://cot-vla.github.io/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoT-VLA/index.html) ]

**WorldVLA**: "WorldVLA: Towards Autoregressive Action World Model", arXiv 2025. ![](https://img.shields.io/badge/Unified--Discrete-f472b6)
[[📄 Paper](https://arxiv.org/pdf/2506.21539)] [[💻 Code](https://github.com/alibaba-damo-academy/WorldVLA)] [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/WorldVLA)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/WorldVLA/index.html) ]
**RynnVLA-002**: "RynnVLA-002: A Unified Vision-Language-Action and World Model", arXiv 2025. ![](https://img.shields.io/badge/Unified--Discrete-f472b6)
[[📄 Paper](https://arxiv.org/pdf/2511.17502)] [[💻 Code](https://github.com/alibaba-damo-academy/RynnVLA-002)] [[🤗 Model](https://huggingface.co/Alibaba-DAMO-Academy/RynnVLA-002)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/RynnVLA-002/index.html) ]

**F1**: "F1: A Vision-Language-Action Model Bridging Understanding and Generation to Actions", arXiv 2025. ![](https://img.shields.io/badge/Unified--Discrete-f472b6)
[[📄 Paper](https://arxiv.org/pdf/2509.06951)] [[🌍 Webpage](https://aopolin-lv.github.io/F1-VLA/)] [[💻 Code](https://github.com/InternRobotics/F1-VLA)] [[🤗 Model](https://huggingface.co/InternRobotics/F1-VLA)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/F1/index.html) ]

**VLA-JEPA**: "VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model", arXiv 2026. ![](https://img.shields.io/badge/Predictive--Latent-c026d3)
[[📄 Paper](https://arxiv.org/pdf/2602.10098)] [[🌍 Webpage](https://ginwind.github.io/VLA-JEPA/)] [[💻 Code](https://github.com/ginwind/VLA-JEPA)] [[🤗 Model](https://huggingface.co/ginwind/VLA-JEPA)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VLA-JEPA/index.html) ]


### Diffusion-based Generation

**PAD**: "Prediction with Action: Visual Policy Learning via Joint Denoising Process", NeurIPS 2024. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://openreview.net/forum?id=teVxVdy8R2)] [[🌍 Webpage](https://sites.google.com/view/pad-paper)] [[💻 Code](https://github.com/Robert-gyj/Prediction_with_Action)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/PAD/index.html) ]

**VideoVLA**: "VideoVLA: Video Generators Can Be Generalizable Robot Manipulators", NeurIPS 2025. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://openreview.net/forum?id=UPHlqbZFZB)] [[🌍 Webpage](https://videovla-nips2025.github.io/)] [[💻 Code](https://github.com/VideoVLA-Project/VideoVLA)] [[🤗 Model](https://huggingface.co/VideoVLA/VideoVLA_Cogvideobase_Pretrained)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/VideoVLA/index.html) ]

**UWM**: "Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets", RSS 2025. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://www.roboticsproceedings.org/rss21/p015.pdf)] [[🌍 Webpage](https://weirdlabuw.github.io/uwm/)] [[💻 Code](https://github.com/WEIRDLabUW/unified-world-model)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UWM/index.html) ]

**DreamZero**: "World Action Models are Zero-shot Policies", arXiv 2026. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://arxiv.org/pdf/2602.15922)] [[🌍 Webpage](https://dreamzero0.github.io/)] [[💻 Code](https://github.com/dreamzero0/dreamzero)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DreamZero/index.html) ]

**Cosmos Policy**: "Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning", arXiv 2026. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://arxiv.org/pdf/2601.16163)] [[🌍 Webpage](https://research.nvidia.com/labs/dir/cosmos-policy/cosmos_policy_index.html)] [[💻 Code](https://github.com/nvlabs/cosmos-policy)] [[🤗 Model](https://huggingface.co/collections/nvidia/cosmos-policy)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CosmosPolicy/index.html) ]

**GigaWorld-Policy**: "GigaWorld-Policy: An Efficient Action-Centered World-Action Model", arXiv 2026. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://arxiv.org/pdf/2603.17240)] [[🌍 Webpage](https://gigaai-research.github.io/GigaWorld-Policy/)] [[💻 Code](https://github.com/open-gigaai/giga-world-policy)] [[🤗 Model](https://huggingface.co/open-gigaai)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2603.17240/index.html)]

**X-WAM**: "Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising", arXiv 2026. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Explicit-f43f5e)
[[📄 Paper](https://arxiv.org/pdf/2604.26694)] [[🌍 Webpage](https://sharinka0715.github.io/X-WAM/)] [[💻 Code](https://github.com/sharinka0715/X-WAM)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/single-dit/2604.26694/index.html)]

**FLARE**: "FLARE: Robot Learning with Implicit World Modeling", CoRL 2025. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Implicit-fda4af)
[[📄 Paper](https://proceedings.mlr.press/v305/zheng25a.html)] [[🌍 Webpage](https://research.nvidia.com/labs/gear/flare/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/FLARE/index.html) ]

**FRAPPE**: "FRAPPE: Infusing World Modeling into Generalist Policies via Multiple Future Representation Alignment", arXiv 2026. ![](https://img.shields.io/badge/Unified--DiT-be123c) ![](https://img.shields.io/badge/Implicit-fda4af)
[[📄 Paper](https://arxiv.org/pdf/2602.17259)] [[🌍 Webpage](https://h-zhao1997.github.io/frappe/)] [[💻 Code](https://github.com/OpenHelix-Team/frappe)] [[🤗 Model](https://huggingface.co/collections/hhhJB/frappe)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/FRAPPE/index.html) ]

**CoVAR**: "CoVAR: Co-generation of Video and Action for Robotic Manipulation via Multi-Modal Diffusion", arXiv 2025. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2512.16023)] [[🌍 Webpage](https://mcml.ai/publications/ybe%2B26/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/CoVAR/index.html) ]

**LDA-1B**: "LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2602.12215)] [[🌍 Webpage](https://pku-epic.github.io/LDA/)] [[💻 Code](https://github.com/jiangranlv/LDA-1B)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LDA-1B/index.html) ]

**DUST**: "Dual-Stream Diffusion for World-Model Augmented Vision-Language-Action Model", arXiv 2025. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2510.27607)] [[🌍 Webpage](https://openreview.net/forum?id=mK1SdO7j3t)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DUST/index.html) ]

**LingBot-VA**: "Causal World Modeling for Robot Control", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2601.21998)] [[💻 Code](https://github.com/robbyant/lingbot-va)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/LingBot-VA/index.html) ]

**DexWorldModel**: "DexWorldModel: Causal Latent World Modeling towards Automated Learning of Embodied Tasks", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2604.16484)] [[💻 Code](https://github.com/DexForce/EmbodiChain)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.16484/index.html)]

**AIM**: "AIM: Intent-Aware Unified world action Modeling with Spatial Value Maps", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2604.11135)] [[💻 Code](https://github.com/Agentic-Intelligence-Lab/AIM)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.11135/index.html)]

**Motus**: "Motus: A Unified Latent Action World Model", arXiv 2025. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2512.13030)] [[🌍 Webpage](https://motus-robotics.github.io/motus)] [[💻 Code](https://github.com/thu-ml/Motus)] [[🤗 Model](https://huggingface.co/motus-robotics/Motus)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Motus/index.html) ]

**MotuBrain**: "MotuBrain: An Advanced World Action Model for Robot Control", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2604.27792)] [[🌍 Webpage](https://www.shengshu.com/en/motubrain)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.27792/index.html)]

**AdaWorldPolicy**: "AdaWorldPolicy: World-Model-Driven Diffusion Policy with Online Adaptive Learning for Robotic Manipulation", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2602.20057)] [[🌍 Webpage](https://adaworldpolicy.github.io/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/AdaWorldPolicy/index.html) ]

**UD-VLA**: "Unified Diffusion VLA: Vision-Language-Action Model via Joint Discrete Denoising Diffusion Process", arXiv 2025. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Cross--Attention-f97316)
[[📄 Paper](https://arxiv.org/pdf/2511.01718)] [[🌍 Webpage](https://irpn-eai.github.io/UD-VLA.github.io/)] [[💻 Code](https://github.com/OpenHelix-Team/Unified-Diffusion-VLA)] [[🤗 Model](https://huggingface.co/chenpyyy/UD-VLA_CALVIN_ABCD_D)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UD-VLA/index.html) ]

**DiT4DiT**: "DiT4DiT: Jointly Modeling Video Dynamics and Actions for Generalizable Robot Control", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Hidden--State-fb7185)
[[📄 Paper](https://arxiv.org/pdf/2603.10448)] [[🌍 Webpage](https://dit4dit.github.io/)] [[💻 Code](https://github.com/Mondo-Robotics/DiT4DiT)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/DiT4DiT/index.html) ]

**Fast-WAM**: "Fast-WAM: Do World Action Models Need Test-time Future Imagination?", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Hidden--State-fb7185)
[[📄 Paper](https://arxiv.org/pdf/2603.16666)] [[🌍 Webpage](https://yuantianyuan01.github.io/FastWAM/)] [[💻 Code](https://github.com/yuantianyuan01/FastWAM)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2603.16666/index.html)]

**WAV**: "World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Hidden--State-fb7185)
[[📄 Paper](https://arxiv.org/pdf/2604.14732)] [[🌍 Webpage](https://win-commit.github.io/wavpage/)] [[💻 Code](https://github.com/Win-commit/WAV)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/temp-check/multi-dit/2604.14732/index.html)]

**Act2Goal**: "Act2Goal: From World Model To General Goal-conditioned Policy", arXiv 2025. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Hidden--State-fb7185)
[[📄 Paper](https://arxiv.org/pdf/2512.23541)] [[🌍 Webpage](https://act2goal.github.io/)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/Act2Goal/index.html) ]

**UVA**: "Unified Video Action Model", RSS 2025. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Shared--Rep-db2777)
[[📄 Paper](https://www.roboticsproceedings.org/rss21/p074.pdf)] [[🌍 Webpage](https://unified-video-action-model.github.io/)] [[💻 Code](https://github.com/ShuangLI59/unified_video_action)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/UVA/index.html) ]

**PhysGen**: "Learning Physics from Pretrained Video Models: A Multimodal Continuous and Sequential World Interaction Models for Robotic Manipulation", arXiv 2026. ![](https://img.shields.io/badge/Multi--Dit-9f1239) ![](https://img.shields.io/badge/Shared--Rep-db2777)
[[📄 Paper](https://arxiv.org/pdf/2603.00110)] [[🌟 Blog](https://htmlpreview.github.io/?https://github.com/OpenMOSS/WAM-survey/blob/main/Report/PhysGen/index.html) ]







## World Model for VLA

### World Model for Imitation Learning

**DREMA**: "Dream to Manipulate: Compositional World Models Empowering Robot Imitation Learning with Imagination", ICLR 2025.
[[📄 Paper](https://openreview.net/forum?id=3RSLW9YSgk)] [[🌍 Webpage](https://dreamtomanipulate.github.io/)] [[💻 Code](https://github.com/leobarcellona/drema_code)]

**RoboScape**: "RoboScape: Physics-informed Embodied World Model", arXiv 2025.
[[📄 Paper](https://openreview.net/forum?id=wbZCBBrq3W)]

**Ctrl-World**: "Ctrl-World: A Controllable Generative World Model for Robot", ICLR 2026.
[[📄 Paper](https://openreview.net/forum?id=748bHL2BAv)] [[🌍 Webpage](https://ctrl-world.github.io/)] [[💻 Code](https://github.com/Robert-gyj/Ctrl-World)]

### World Model for Reinforcement Learning 

**PlaNet**: "Learning Latent Dynamics for Planning from Pixels", ICML 2019.
[[📄 Paper](https://proceedings.mlr.press/v97/hafner19a/hafner19a.pdf)] [[🌍 Webpage](https://planetrl.github.io/)] [[💻 Code](https://github.com/google-research/planet)]

**Dream to Control**: "Dream to Control: Learning Behaviors by Latent Imagination", ICLR 2020.
[[📄 Paper](https://openreview.net/forum?id=S1lOTC4tDS)] [[🌍 Webpage](https://danijar.com/project/dreamer/)] [[💻 Code](https://github.com/danijar/dreamer)]

**Dreamer V2**: "Mastering Atari with Discrete World Models", ICLR 2021.
[[📄 Paper](https://openreview.net/forum?id=0oabwyZbOu)] [[🌍 Webpage](https://danijar.com/project/dreamerv2/)] [[💻 Code](https://github.com/danijar/dreamerv2)]

**DayDreamer**: "DayDreamer: World Models for Physical Robot Learning", CoRL 2022.
[[📄 Paper](https://proceedings.mlr.press/v205/wu23c/wu23c.pdf)] [[🌍 Webpage](https://danijar.com/project/daydreamer/)] [[💻 Code](https://github.com/danijar/daydreamer)]

**Dreamer V3**: "Mastering Diverse Domains through World Models", Nature 2025.
[[📄 Paper](https://www.nature.com/articles/s41586-025-08744-2)] [[🌍 Webpage](https://danijar.com/project/dreamerv3/)] [[💻 Code](https://github.com/danijar/dreamerv3)]

**Dreamer 4**: "Training Agents Inside of Scalable World Models", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2509.24527)] [[🌍 Webpage](https://danijar.com/project/dreamer4/)]

**World-Env**: "World-Env: Leveraging World Model as a Virtual Environment for VLA Post-Training", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2509.24948)] [[💻 Code](https://github.com/amap-cvlab/world-env)]

**WMPO**: "WMPO: World Model-based Policy Optimization for Vision-Language-Action Models", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2511.09515)] [[🌍 Webpage](https://wm-po.github.io/)] [[💻 Code](https://github.com/WM-PO/WMPO)]

**RISE**: "RISE: Self-Improving Robot Policy with Compositional World Model", arXiv 2026.
[[📄 Paper](https://arxiv.org/pdf/2602.11075)] [[💻 Code](https://github.com/OpenDriveLab/RISE)]

**WoVR**: "WoVR: World Models as Reliable Simulators for Post-Training VLA Policies with RL", arXiv 2026.
[[📄 Paper](https://arxiv.org/pdf/2602.13977)] [[💻 Code](https://github.com/RLinf/RLinf)] [[🤗 Model](https://huggingface.co/collections/RLinf/wovr)]

**MoDem-V2**: "MoDem-V2: Visuo-Motor World Models for Real-World Robot Manipulation", ICRA 2024.
[[📄 Paper](https://ieeexplore.ieee.org/document/10611121/)] [[🌍 Webpage](https://sites.google.com/view/modem-v2)] [[💻 Code](https://github.com/facebookresearch/modemv2)]

**World-Gymnast**: "World-Gymnast: Training Robots with Reinforcement Learning in a World Model", arXiv 2026.
[[📄 Paper](https://arxiv.org/pdf/2602.02454)] [[🌍 Webpage](https://world-gymnast.github.io/)] [[💻 Code](https://github.com/world-gymnast/world-gymnast)]

**RWM‑U**: "Uncertainty-Aware Robotic World Model Makes Offline Model-Based Reinforcement Learning Work on Real Robots", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2504.16680)] [[🌍 Webpage](https://sites.google.com/view/uncertainty-aware-rwm)] [[💻 Code](https://github.com/leggedrobotics/robotic_world_model)]

**World4RL**: "World4RL: Diffusion World Models for Policy Refinement with Reinforcement Learning for Robotic Manipulation", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2509.19080)] [[🌍 Webpage](https://world4rl.github.io/)] [[💻 Code](https://anonymous.4open.science/r/World4RL-0410)]

**DiWA**: "DiWA: Diffusion Policy Adaptation with World Models", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2508.03645)] [[🌍 Webpage](https://diwa.cs.uni-freiburg.de/)] [[💻 Code](https://github.com/acl21/diwa)]

**VLA-RFT**: "VLA-RFT: Vision-Language-Action Reinforcement Fine-tuning with Verified Rewards in World Simulators", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2510.00406)] [[🌍 Webpage](https://vla-rft.github.io/)] [[💻 Code](https://github.com/OpenHelix-Team/VLA-RFT)] [[🤗 Model](https://huggingface.co/VLA-RFT)]

**RWML**: "Reinforcement World Model Learning for LLM-based Agents", arXiv 2026.
[[📄 Paper](https://arxiv.org/pdf/2602.05842)]

**PhysWorl**: "Robot Learning from a Physical World Model", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2511.07416)] [[🌍 Webpage](https://pointscoder.github.io/PhysWorld_Web/)] [[💻 Code](https://github.com/PointsCoder/OpenReal2Sim)]

**VIPER**: "Video Prediction Models as Rewards for Reinforcement Learning", NeurIPS 2023.
[[📄 Paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/d9042abf40782fbce28901c1c9c0e8d8-Paper-Conference.pdf)] [[🌍 Webpage](https://escontrela.me/viper)] [[💻 Code](https://github.com/Alescontrela/viper_rl)]

**Diffusion Reward**: "Diffusion Reward: Learning Rewards via Conditional Video Diffusion", ECCV 2024.
[[📄 Paper](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/05914.pdf)] [[🌍 Webpage](https://diffusion-reward.github.io/)] [[💻 Code](https://github.com/TEA-Lab/diffusion_reward)] [[🤗 Model](https://huggingface.co/tauhuang/diffusion_reward/tree/main)]

**GenReward**: "Goal-Driven Reward by Video Diffusion Models for Reinforcement Learning", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2512.00961)] [[🌍 Webpage](https://qiwang067.github.io/genreward)]

**SRPO**: "SRPO: Self-Referential Policy Optimization for Vision-Language-Action Models", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2511.15605)] [[💻 Code](https://github.com/sii-research/siiRL)] [[🤗 Model](https://huggingface.co/collections/Sylvest/srpo)]

**RoboScape-R**: "RoboScape-R: Unified Reward-Observation World Models for Generalizable Robotics Training via RL", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2512.03556)]

### World Model for Evaluation

**Veo**: "Evaluating Gemini Robotics Policies in a Veo World Simulator", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2512.10675)] [[🌍 Webpage](https://veo-robotics.github.io/)]

**Interactive World Simulator**: "Interactive World Simulator for Robot Policy Training and Evaluation", arXiv 2026.
[[📄 Paper](https://arxiv.org/pdf/2603.08546)] [[🌍 Webpage](https://www.yixuanwang.me/interactive_world_sim/)] [[💻 Code](https://github.com/WangYixuan12/interactive_world_sim)] [[🤗 Model](https://huggingface.co/yixuan1999/interactive-world-sim-checkpoints)]

**WorldEval**: "WorldEval: World Model as Real-World Robot Policies Evaluator", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2505.19017)] [[🌍 Webpage](https://worldeval.github.io/)] [[💻 Code](https://github.com/liyaxuanliyaxuan/Worldeval)]

**WorldGym**: "WorldGym: World Model as An Environment for Policy Evaluation", arXiv 2025.
[[📄 Paper](https://arxiv.org/pdf/2506.00613)] [[🌍 Webpage](https://world-model-eval.github.io/abstract)] [[💻 Code](https://github.com/world-model-eval/world-model-eval)]

**dWorldEval**: "dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model", arXiv 2026.
[[📄 Paper](https://arxiv.org/pdf/2604.22152)] [[🌍 Webpage](https://dworldeval.github.io/)]


### Training Data

---

#### 🤖 Robot-Centric

| Paper | Released | Links |
|-------|----------|-------|
| **QT-Opt** - *QT-Opt: Scalable Deep Reinforcement Learning for Vision-Based Robotic Manipulation* | 2018-06 | [📄 Paper](https://arxiv.org/pdf/1806.10293) · [🌍&nbsp;Web](https://sites.google.com/view/qtopt) |
| **MIME** - *Multiple Interactions Made Easy (MIME): Large Scale Demonstrations Data for Imitation* | 2018-10 | [📄 Paper](https://arxiv.org/pdf/1810.07121) · [🌍&nbsp;Web](https://sites.google.com/view/mimedataset) · [📦&nbsp;Dataset](https://sites.google.com/view/mimedataset/dataset) |
| **RoboNet** - *RoboNet: Large-Scale Multi-Robot Learning* | 2019-10 | [📄 Paper](https://arxiv.org/pdf/1910.11215) · [🌍&nbsp;Web](https://www.robonet.wiki/) · [📦&nbsp;Dataset](https://github.com/SudeepDasari/RoboNet/wiki/Getting-Started) · [💻&nbsp;Code](https://github.com/SudeepDasari/RoboNet) |
| **RoboTurk** - *Scaling Robot Supervision to Hundreds of Hours with RoboTurk: Robotic Manipulation Dataset through Human Reasoning and Dexterity* | 2019-11 | [📄 Paper](https://arxiv.org/pdf/1911.04052) · [🌍&nbsp;Web](https://roboturk.stanford.edu/realrobotdataset.html) · [📦&nbsp;Dataset](https://roboturk.stanford.edu/) |
| **Bridge** - *Bridge Data: Boosting Generalization of Robotic Skills with Cross-Domain Datasets* | 2021-09 | [📄 Paper](https://arxiv.org/pdf/2109.13396) · [🌍&nbsp;Web](https://bair.berkeley.edu/blog/2021/11/18/bridge-data/) · [📦&nbsp;Dataset](https://sites.google.com/view/bridgedata) |
| **MT-Opt** - *MT-Opt: Continuous Multi-Task Robotic Reinforcement Learning at Scale* | 2021-04 | [📄 Paper](https://arxiv.org/pdf/2104.08212) · [🌍&nbsp;Web](https://karolhausman.github.io/mt-opt/) · [📦&nbsp;Dataset](https://www.tensorflow.org/datasets/catalog/mt_opt) |
| **BC-Z** - *BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning* | 2022-02 | [📄 Paper](https://arxiv.org/pdf/2202.02005) · [🌍&nbsp;Web](https://sites.google.com/view/bc-z/home) · [📦&nbsp;Dataset](https://www.kaggle.com/datasets/google/bc-z-robot) |
| **Language-Table** - *Interactive Language: Talking to Robots in Real Time* | 2022-10 | [📄 Paper](https://arxiv.org/pdf/2210.06407) · [🌍&nbsp;Web](https://interactive-language.github.io/) · [📦&nbsp;Dataset](https://github.com/google-research/language-table) |
| **RT-1** - *RT-1: Robotics Transformer for Real-World Control at Scale* | 2022-12 | [📄 Paper](https://arxiv.org/pdf/2212.06817) · [🌍&nbsp;Web](https://robotics-transformer1.github.io/) · [📦&nbsp;Dataset](https://console.cloud.google.com/storage/browser/gresearch/rt-1-data-release) · [💻&nbsp;Code](https://github.com/google-research/robotics_transformer) |
| **BridgeData V2** - *BridgeData V2: A Dataset for Robot Learning at Scale* | 2023-08 | [📄 Paper](https://arxiv.org/pdf/2308.12952) · [🌍&nbsp;Web](https://bridgedata-v2.github.io/) · [📦&nbsp;Dataset](https://rail-berkeley.github.io/bridgedata/?curius=1637) · [💻&nbsp;Code](https://github.com/rail-berkeley/bridge_data_v2) |
| **Jaco-Play** - *CLVR Jaco Play Dataset* | — | [💻&nbsp;Code](https://github.com/clvrai/clvr_jaco_play_dataset) |
| **Cable-Routing-Dataset** - *Multi-Stage Cable Routing through Hierarchical Imitation Learning* | 2023-07 | [📄 Paper](https://arxiv.org/pdf/2307.08927) · [🌍&nbsp;Web](https://sites.google.com/view/cablerouting) · [📦&nbsp;Dataset](https://sites.google.com/view/cablerouting/data) · [💻&nbsp;Code](https://github.com/charlesxu0124/CableRouting) |
| **RH20T** - *RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot* | 2023-07 | [📄 Paper](https://arxiv.org/pdf/2307.00595) · [🌍&nbsp;Web](https://rh20t.github.io/) · [📦&nbsp;Dataset](https://rh20t.github.io/#download) · [💻&nbsp;Code](https://github.com/rh20t/rh20t_api) |
| **OXE** - *Open X-Embodiment: Robotic Learning Datasets and RT-X Models* | 2023-10 | [📄 Paper](https://arxiv.org/pdf/2310.08864) · [🌍&nbsp;Web](https://robotics-transformer-x.github.io/) · [📦&nbsp;Dataset](https://docs.google.com/spreadsheets/d/1rPBD77tk60AEIGZrGSODwyyzs5FgCU9Uz3h-3_t2A9g/edit?gid=0#gid=0) · [💻&nbsp;Code](https://github.com/google-deepmind/open_x_embodiment) |
| **DROID** - *DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.12945) · [🌍&nbsp;Web](https://droid-dataset.github.io/) · [📦&nbsp;Dataset](https://droid-dataset.github.io/droid/the-droid-dataset) · [💻&nbsp;Code](https://github.com/droid-dataset/droid_policy_learning) |
| **RH20T-P** - *RH20T-P: A Primitive-Level Robotic Dataset Towards Composable Generalization Agents* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.19622) · [🌍&nbsp;Web](https://sites.google.com/view/rh20t-primitive/main) · [📦&nbsp;Dataset](https://github.com/Zx55/cga-challenge/tree/main/data/rh20tp) |
| **RoboMIND** - *RoboMIND: Benchmark on Multi-embodiment Intelligence Normative Data for Robot Manipulation* | 2024-12 | [📄 Paper](https://arxiv.org/pdf/2412.13877) · [🌍&nbsp;Web](https://x-humanoid-robomind.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/x-humanoid-robomind/RoboMIND) · [💻&nbsp;Code](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) |
| **ARIO** - *All Robots in One: A New Standard and Unified Dataset for Versatile, General-Purpose Embodied Agents* | 2024-08 | [📄 Paper](https://arxiv.org/pdf/2408.10899) · [🌍&nbsp;Web](https://ario-dataset.github.io/) · [📦&nbsp;Dataset](https://openi.pcl.ac.cn/ARIO/Songling_datasets/datasets) · [💻&nbsp;Code](https://github.com/ario-dataset/ario-tools) |
| **RoboData** - *RoboTron-Mani: All-in-One Multimodal Large Model for Robotic Manipulation* | 2024-12 | [📄 Paper](https://arxiv.org/pdf/2412.07215) · [📦&nbsp;Dataset](https://huggingface.co/datasets/liufanfanlff/RoboData) · [💻&nbsp;Code](https://github.com/RoboUniview/RoboMM) |
| **DexCap** - *DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.07788) · [🌍&nbsp;Web](https://dex-cap.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/chenwangj/DexCap-Data) · [💻&nbsp;Code](https://github.com/j96w/DexCap) |
| **FuSe** - *Beyond Sight: Finetuning Generalist Robot Policies with Heterogeneous Sensors via Language Grounding* | 2025-01 | [📄 Paper](https://arxiv.org/pdf/2501.04693) · [🌍&nbsp;Web](https://fuse-model.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/oier-mees/FuSe) · [💻&nbsp;Code](https://github.com/fuse-model/FuSe) |
| **AgiBot World Colosseo** - *AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems* | 2025-03 | [📄 Paper](https://arxiv.org/pdf/2503.06669) · [🌍&nbsp;Web](https://agibot-world.com/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/agibot-world/AgiBotWorld-Alpha) · [💻&nbsp;Code](https://github.com/OpenDriveLab/AgiBot-World)|
| **REASSEMBLE** - *REASSEMBLE: A Multimodal Dataset for Contact-rich Robotic Assembly and Disassembly* | 2025-02 | [📄 Paper](https://arxiv.org/pdf/2502.05086) · [🌍&nbsp;Web](https://tuwien-asl.github.io/REASSEMBLE_page/) · [📦&nbsp;Dataset](https://researchdata.tuwien.ac.at/records/0ewrv-8cb44) · [💻&nbsp;Code](https://github.com/TUWIEN-ASL/REASSEMBLE) |
| **OmniAction** - *RoboOmni: Proactive Robot Manipulation in Omni-modal Context* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.23763) · [🌍&nbsp;Web](https://openmoss.github.io/RoboOmni/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/fnlp/OmniAction) · [💻&nbsp;Code](https://github.com/OpenMOSS/RoboOmni) ·  |
| **UnifoLM-WBT** - *UnifoLM-WBT-Dataset* | — | [📦&nbsp;Dataset](https://huggingface.co/collections/unitreerobotics/unifolm-wbt-dataset) |

---

#### 🖐️ UMI

| Paper | Released | Links |
|-------|----------|-------|
| **UMI** - *Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots* | 2024-02 | [📄 Paper](https://arxiv.org/pdf/2402.10329) · [🌍&nbsp;Web](https://umi-gripper.github.io/) · [💻&nbsp;Code](https://github.com/real-stanford/universal_manipulation_interface) |
| **FastUMI** - *FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset* | 2024-09 | [📄 Paper](https://arxiv.org/pdf/2409.19499) · [🌍&nbsp;Web](https://fastumi.com/FastUMI/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data) · [💻&nbsp;Code](https://github.com/zxzm-zak/FastUMI_Data) |
| **FastUMI-100K** - *FastUMI-100K: Advancing Data-driven Robotic Manipulation with a Large-scale UMI-style Dataset* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.08022) · [💻&nbsp;Code](https://github.com/MrKeee/FastUMI-100K) |
| **RealOmin** - *10Kh-RealOmin-OpenData: A Large-Scale Real-World Manipulation Dataset* | — | [🌍&nbsp;Web](https://www.genrobot.ai/data/open-dataset) · [📦&nbsp;Dataset](https://huggingface.co/datasets/genrobot2025/10Kh-RealOmin-OpenData) · [💻&nbsp;Code](https://github.com/genrobot-ai/das-datakit) |
| **Hoi!** - *Hoi! -- A Multimodal Dataset for Force-Grounded, Cross-View Articulated Manipulation* | 2025-12 | [📄 Paper](https://arxiv.org/pdf/2512.04884) · [🌍&nbsp;Web](https://timengelbracht.github.io/Hoi-Dataset-Website/) · [📦&nbsp;Dataset](https://drive.google.com/drive/folders/1Hzpt5WXFbUg0CNVU7gudH-4z-HkC6kGR) |
| **RDT2** - *RDT2: Exploring the Scaling Limit of UMI Data Towards Zero-Shot Cross-Embodiment Generalization* | 2026-02 | [📄 Paper](https://arxiv.org/pdf/2602.03310) · [🌍&nbsp;Web](https://rdt-robotics.github.io/rdt2/) · [💻&nbsp;Code](https://github.com/thu-ml/RDT2) |
| **MV-UMI** - *MV-UMI: A Scalable Multi-View Interface for Cross-Embodiment Learning* | 2025-09 | [📄 Paper](https://arxiv.org/pdf/2509.18757) · [🌍&nbsp;Web](https://mv-umi.github.io/) |
| **ActiveUMI** - *ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.01607) · [🌍&nbsp;Web](https://activeumi.github.io/) |
| **exUMI** - *exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation* | 2025-09 | [📄 Paper](https://arxiv.org/pdf/2509.14688) · [🌍&nbsp;Web](https://silicx.github.io/exUMI/) · [💻&nbsp;Code](https://github.com/silicx/exUMI) |
| **Tactile-Conditioned Diffusion Policy** - *Tactile-Conditioned Diffusion Policy for Force-Aware Robotic Manipulation* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.13324) · [🌍&nbsp;Web](https://tactile-farm.github.io/) |
| **DexUMI** - *DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.21864) · [🌍&nbsp;Web](https://dex-umi.github.io/) · [📦&nbsp;Dataset](https://umi-data.github.io/) · [💻&nbsp;Code](https://github.com/real-stanford/DexUMI) |
| **UMI on Legs** - *UMI on Legs: Making Manipulation Policies Mobile with Manipulation-Centric Whole-body Controllers* | 2024-07 | [📄 Paper](https://arxiv.org/pdf/2407.10353) · [🌍&nbsp;Web](https://umi-on-legs.github.io/) · [💻&nbsp;Code](https://github.com/real-stanford/umi-on-legs) |
| **HoMMI** - *HoMMI: Learning Whole-Body Mobile Manipulation from Human Demonstrations* | 2026-03 | [📄 Paper](https://arxiv.org/pdf/2603.03243) · [🌍&nbsp;Web](https://hommi-robot.github.io/) · [💻&nbsp;Code](https://github.com/xxm19/hommi) |

---

#### 🖥️ Simulation

| Paper | Released | Links |
|-------|----------|-------|
| **MimicGen** - *MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations* | 2023-10 | [📄 Paper](https://arxiv.org/pdf/2310.17596) · [🌍&nbsp;Web](https://mimicgen.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/amandlek/mimicgen_datasets) · [💻&nbsp;Code](https://github.com/NVlabs/mimicgen) |
| **ManiSkill2** - *ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills* | 2023-02 | [📄 Paper](https://arxiv.org/pdf/2302.04659) · [🌍&nbsp;Web](https://haosulab.github.io/ManiSkill2/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/haosulab/ManiSkill2) · [💻&nbsp;Code](https://github.com/KolinGuo/ManiSkill2) |
| **RoboCasa** - *RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots* | 2024-06 | [📄 Paper](https://arxiv.org/pdf/2406.02523) · [🌍&nbsp;Web](https://robocasa.ai/) · [📦&nbsp;Dataset](https://robocasa.ai/docs/build/html/datasets/using_datasets.html) · [💻&nbsp;Code](https://github.com/robocasa/robocasa) |
| **RoboTwin** - *RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins* | 2025-04 | [📄 Paper](https://arxiv.org/pdf/2504.13059) · [🌍&nbsp;Web](https://robotwin-platform.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/TianxingChen/RoboTwin) · [💻&nbsp;Code](https://github.com/RoboTwin-Platform/RoboTwin) |
| **DexMimicGen** - *DexMimicGen: Automated Data Generation for Bimanual Dexterous Manipulation via Imitation Learning* | 2024-10 | [📄 Paper](https://arxiv.org/pdf/2410.24185) · [🌍&nbsp;Web](https://dexmimicgen.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/MimicGen/dexmimicgen_datasets) · [💻&nbsp;Code](https://github.com/NVlabs/dexmimicgen) |
| **QUARD-Auto** - *GeRM: A Generalist Robotic Model with Mixture-of-experts for Quadruped Robot* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.13358) · [🌍&nbsp;Web](https://songwxuan.github.io/GeRM/) · [📦&nbsp;Dataset](https://github.com/Songwxuan/GeRM) · [💻&nbsp;Code](https://github.com/Songwxuan/GeRM) |
| **TesserAct** - *TesserAct: Learning 4D Embodied World Models* | 2025-04 | [📄 Paper](https://arxiv.org/pdf/2504.20995) · [🌍&nbsp;Web](https://tesseractworld.github.io/) · [💻&nbsp;Code](https://github.com/UMass-Embodied-AGI/TesserAct)|
| **RoboCerebra** - *RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation* | 2025-06 | [📄 Paper](https://arxiv.org/pdf/2506.06677) · [🌍&nbsp;Web](https://robocerebra.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/lerobot/robocerebra_unified) · [💻&nbsp;Code](https://github.com/buaa-colalab/RoboCerebra) |
| **SynGrasp-1B** - *GraspVLA: a Grasping Foundation Model Pre-trained on Billion-scale Synthetic Action Data* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.03233) · [🌍&nbsp;Web](https://pku-epic.github.io/GraspVLA-web) · [💻&nbsp;Code](https://github.com/PKU-EPIC/GraspVLA) |
| **RoboTwin 2.0** - *RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation* | 2025-06 | [📄 Paper](https://arxiv.org/pdf/2506.18088) · [🌍&nbsp;Web](https://robotwin-platform.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/TianxingChen/RoboTwin2.0) · [💻&nbsp;Code](https://github.com/RoboTwin-Platform/RoboTwin) |
| **TLA** - *TLA: Tactile-Language-Action Model for Contact-Rich Manipulation* | 2025-03 | [📄 Paper](https://arxiv.org/pdf/2503.08548) · [🌍&nbsp;Web](https://sites.google.com/view/tactile-language-action/) |
| **InternVLA-M1** - *InternVLA-M1: A Spatially Guided Vision-Language-Action Framework for Generalist Robot Policy* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.13778) · [🌍&nbsp;Web](https://internrobotics.github.io/internvla-m1.github.io) · [📦&nbsp;Dataset](https://huggingface.co/datasets/InternRobotics/InternData-M1) · [💻&nbsp;Code](https://github.com/InternRobotics/InternVLA-M1)|
| **InternData-A1** - *InternVLA-A1: Unifying Understanding, Generation and Action for Robotic Manipulation* | 2026-01 | [📄 Paper](https://arxiv.org/pdf/2601.02456) · [🌍&nbsp;Web](https://internrobotics.github.io/interndata-a1.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/InternRobotics/InternData-A1) · [💻&nbsp;Code](https://github.com/InternRobotics/InternVLA-A1)  |

---

#### 👁️ Human / Egocentric

| Paper | Released | Links |
|-------|----------|-------|
| **SSv2** - *The "something something" video database for learning and evaluating visual common sense* | 2017-06 | [📄 Paper](https://arxiv.org/pdf/1706.04261) · [📦&nbsp;Dataset](https://developer.qualcomm.com/software/ai-datasets/something-something) |
| **EPIC-KITCHENS** - *Scaling Egocentric Vision: The EPIC-KITCHENS Dataset* | 2018-04 | [📄 Paper](https://arxiv.org/pdf/1804.02748) · [🌍&nbsp;Web](https://epic-kitchens.github.io/) · [📦&nbsp;Dataset](https://epic-kitchens.github.io/) · [💻&nbsp;Code](https://github.com/epic-kitchens/epic-kitchens-download-scripts) |
| **HowTo100M** - *HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips* | 2019-06 | [📄 Paper](https://arxiv.org/pdf/1906.03327) · [🌍&nbsp;Web](https://www.di.ens.fr/willow/research/howto100m/) · [📦&nbsp;Dataset](https://www.di.ens.fr/willow/research/howto100m/) |
| **Kinetics-700** - *A Short Note on the Kinetics-700 Human Action Dataset* | 2019-07 | [📄 Paper](https://arxiv.org/pdf/1907.06987) · [📦&nbsp;Dataset](https://github.com/cvdfoundation/kinetics-dataset) · [💻&nbsp;Code](https://github.com/cvdfoundation/kinetics-dataset) |
| **EGTEA Gaze+** - *In the Eye of the Beholder: Gaze and Actions in First Person Video* | 2020-06 | [📄 Paper](https://arxiv.org/pdf/2006.00626) · [🌍&nbsp;Web](https://cbs.ic.gatech.edu/fpv/) · [📦&nbsp;Dataset](https://cbs.ic.gatech.edu/fpv/) |
| **Ego4D** - *Ego4D: Around the World in 3,000 Hours of Egocentric Video* | 2021-10 | [📄 Paper](https://arxiv.org/pdf/2110.07058) · [🌍&nbsp;Web](https://ego4d-data.org/) · [📦&nbsp;Dataset](https://ego4d-data.org/docs/start-here/) · [💻&nbsp;Code](https://github.com/facebookresearch/Ego4d) |
| **H2O** - *H2O: Two Hands Manipulating Objects for First Person Interaction Recognition* | 2021-04 | [📄 Paper](https://arxiv.org/pdf/2104.11181) · [🌍&nbsp;Web](https://taeinkwon.com/projects/h2o/) · [📦&nbsp;Dataset](https://taeinkwon.com/projects/h2o/) · [💻&nbsp;Code](https://github.com/taeinkwon/h2odataset) |
| **HOI4D** - *HOI4D: A 4D Egocentric Dataset for Category-Level Human-Object Interaction* | 2022-03 | [📄 Paper](https://arxiv.org/pdf/2203.01577) · [🌍&nbsp;Web](https://hoi4d.github.io/) · [📦&nbsp;Dataset](https://hoi4d.github.io/) |
| **Assembly101** - *Assembly101: A Large-Scale Multi-View Video Dataset for Understanding Procedural Activities* | 2022-03 | [📄 Paper](https://arxiv.org/pdf/2203.14712) · [🌍&nbsp;Web](https://assembly-101.github.io/) · [📦&nbsp;Dataset](https://assembly-101.github.io/) · [💻&nbsp;Code](https://github.com/assembly-101/assembly101-download-scripts) |
| **EgoPAT3D** - *Egocentric Prediction of Action Target in 3D* | 2022-03 | [📄 Paper](https://arxiv.org/pdf/2203.13116) · [📦&nbsp;Dataset](https://github.com/ai4ce/EgoPAT3D) · [💻&nbsp;Code](https://github.com/ai4ce/EgoPAT3D) |
| **ARCTIC** - *ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation* | 2022-04 | [📄 Paper](https://arxiv.org/pdf/2204.13662) · [🌍&nbsp;Web](https://arctic.is.tue.mpg.de/) · [📦&nbsp;Dataset](https://arctic.is.tue.mpg.de/) · [💻&nbsp;Code](https://github.com/zc-alexfan/arctic) |
| **HoloAssist** - *HoloAssist: an Egocentric Human Interaction Dataset for Interactive AI Assistants in the Real World* | 2023-09 | [📄 Paper](https://arxiv.org/pdf/2309.17024) · [🌍&nbsp;Web](https://holoassist.github.io/) · [📦&nbsp;Dataset](https://holoassist.github.io/) |
| **Ego-Exo4D** - *Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives* | 2023-11 | [📄 Paper](https://arxiv.org/pdf/2311.18259) · [🌍&nbsp;Web](https://ego-exo4d-data.org/) · [📦&nbsp;Dataset](https://docs.ego-exo4d-data.org/download/) · [💻&nbsp;Code](https://github.com/facebookresearch/Ego4d) |
| **TACO** - *TACO: Benchmarking Generalizable Bimanual Tool-ACtion-Object Understanding* | 2024-01 | [📄 Paper](https://arxiv.org/pdf/2401.08399) · [🌍&nbsp;Web](https://taco2024.github.io/) · [📦&nbsp;Dataset](https://taco2024.github.io/) · [💻&nbsp;Code](https://github.com/leolyliu/TACO-Instructions) |
| **Aria Everyday Activities** - *Aria Everyday Activities Dataset* | 2024-02 | [📄 Paper](https://arxiv.org/pdf/2402.13349) · [🌍&nbsp;Web](https://www.projectaria.com/datasets/aea/) · [📦&nbsp;Dataset](https://www.projectaria.com/datasets/aea/) · [💻&nbsp;Code](https://github.com/facebookresearch/projectaria_tools) |
| **OAKINK2** - *OAKINK2: A Dataset of Bimanual Hands-Object Manipulation in Complex Task Completion* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.19417) · [🌍&nbsp;Web](https://oakink.net/v2/) · [📦&nbsp;Dataset](https://oakink.net/v2/) · [💻&nbsp;Code](https://github.com/oakink/OakInk2) |
| **Nymeria** - *Nymeria: A Massive Collection of Multimodal Egocentric Daily Motion in the Wild* | 2024-06 | [📄 Paper](https://arxiv.org/pdf/2406.09905) · [🌍&nbsp;Web](https://www.projectaria.com/datasets/nymeria/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/projectaria/Nymeria) · [💻&nbsp;Code](https://github.com/facebookresearch/nymeria_dataset) |
| **COM Kitchens** - *COM Kitchens: An Unedited Overhead-view Video Dataset as a Vision-Language Benchmark* | 2024-08 | [📄 Paper](https://arxiv.org/pdf/2408.02272) · [📦&nbsp;Dataset](https://github.com/omron-sinicx/com_kitchens) · [💻&nbsp;Code](https://github.com/omron-sinicx/com_kitchens) |
| **EgoVid-5M** - *EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation* | 2024-11 | [📄 Paper](https://arxiv.org/pdf/2411.08380) · [🌍&nbsp;Web](https://egovid.github.io/) · [📦&nbsp;Dataset](https://egovid.github.io/) |
| **EgoMimic** - *EgoMimic: Scaling Imitation Learning via Egocentric Video* | 2024-10 | [📄 Paper](https://arxiv.org/pdf/2410.24221) · [🌍&nbsp;Web](https://egomimic.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/gatech/EgoMimic) |
| **HOT3D** - *HOT3D: Hand and Object Tracking in 3D from Egocentric Multi-View Videos* | 2024-11 | [📄 Paper](https://arxiv.org/pdf/2411.19167) · [🌍&nbsp;Web](https://www.projectaria.com/datasets/hot3D/) · [📦&nbsp;Dataset](https://www.projectaria.com/datasets/hot3D/) · [💻&nbsp;Code](https://github.com/facebookresearch/hot3d) |
| **Egocentric-10K** - *Egocentric-10K* | — | [🌍&nbsp;Web](https://egocentric.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/builddotai/Egocentric-10K) |
| **DreamDojo** - *DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos* | 2026-02 | [📄 Paper](https://arxiv.org/pdf/2602.06949) · [🌍&nbsp;Web](https://dreamdojo-world.github.io/) · [💻&nbsp;Code](https://github.com/NVIDIA/DreamDojo) |
| **PH²D** - *Humanoid Policy ~ Human Policy* | 2025-03 | [📄 Paper](https://arxiv.org/pdf/2503.13441) · [🌍&nbsp;Web](https://human-as-robot.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/RogerQi/PH2D) |
| **Humanoid Everyday** - *Humanoid Everyday: A Comprehensive Robotic Dataset for Open-World Humanoid Manipulation* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.08807) · [🌍&nbsp;Web](https://humanoideveryday.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/USC-PSI-Lab/humanoid-everyday) · [💻&nbsp;Code](https://github.com/ausbxuse/Humanoid-Everyday) |
| **IndEgo** - *IndEgo: A Dataset of Industrial Scenarios and Collaborative Work for Egocentric Assistants* | 2025-11 | [📄 Paper](https://arxiv.org/pdf/2511.19684) · [🌍&nbsp;Web](https://indego-dataset.github.io/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/FraunhoferIPK/IndEgo) · [💻&nbsp;Code](https://github.com/Vivek9Chavan/IndEgo) |
| **PLAICraft** - *PLAICraft: Large-Scale Time-Aligned Vision-Speech-Action Dataset for Embodied AI* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.12707) |
| **HD-EPIC** - *HD-EPIC: A Highly-Detailed Egocentric Video Dataset* | 2025-02 | [📄 Paper](https://arxiv.org/pdf/2502.04144) · [🌍&nbsp;Web](https://hd-epic.github.io/site/) · [📦&nbsp;Dataset](https://hd-epic.github.io/site/) |
| **UniHand** - *Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos* | 2025-07 | [📄 Paper](https://arxiv.org/pdf/2507.15597) · [🌍&nbsp;Web](https://beingbeyond.github.io/Being-H0) · [📦&nbsp;Dataset](https://huggingface.co/datasets/BeingBeyond/h0_post_train_db_2508) · [💻&nbsp;Code](https://github.com/BeingBeyond/Being-H0) |
| **Ego-Centric Human Manipulation Dataset** - *EgoVLA: Learning Vision-Language-Action Models from Egocentric Human Videos* | 2025-07 | [📄 Paper](https://arxiv.org/pdf/2507.12440) · [🌍&nbsp;Web](https://rchalyang.github.io/EgoVLA/) · [📦&nbsp;Dataset](https://huggingface.co/datasets/EgoVLA/EgoVLA-Humanoid-Sim) |
| **Kaiwu** - *Kaiwu: A Multimodal Manipulation Dataset and Framework for Robot Learning and Human-Robot Interaction* | 2025-03 | [📄 Paper](https://arxiv.org/pdf/2503.05231) |
| **EgoDex** - *EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.11709) · [📦&nbsp;Dataset](https://github.com/apple/ml-egodex) · [💻&nbsp;Code](https://github.com/apple/ml-egodex) |

### Evaluation

---

#### 🌐 World Model — Visual Fidelity

| Paper | Released | Links |
|-------|----------|-------|
| **PSNR / SSIM** - *Image Quality Assessment: From Error Visibility to Structural Similarity* | 2004 | [📄 Paper](https://ieeexplore.ieee.org/document/1284395) · [🌍&nbsp;Web](https://ece.uwaterloo.ca/~z70wang/research/ssim/) · [💻&nbsp;Code](https://ece.uwaterloo.ca/~z70wang/research/ssim/) |
| **LPIPS** - *The Unreasonable Effectiveness of Deep Features as a Perceptual Metric* | 2018-01 | [📄 Paper](https://arxiv.org/pdf/1801.03924) · [🌍&nbsp;Web](https://richzhang.github.io/PerceptualSimilarity/) · [💻&nbsp;Code](https://github.com/richzhang/PerceptualSimilarity) |
| **DreamSim** - *DreamSim: Learning New Dimensions of Human Visual Similarity Using Synthetic Data* | 2023-06 | [📄 Paper](https://arxiv.org/pdf/2306.09344) · [🌍&nbsp;Web](https://dreamsim-nights.github.io/) · [💻&nbsp;Code](https://github.com/ssundaram21/dreamsim) |
| **DINOv2** - *DINOv2: Learning Robust Visual Features without Supervision* | 2023-04 | [📄 Paper](https://arxiv.org/pdf/2304.07193) · [🌍&nbsp;Web](https://dinov2.metademolab.com/) · [💻&nbsp;Code](https://github.com/facebookresearch/dinov2) |
| **FVD** - *Towards Accurate Generative Models of Video: A New Metric & Challenges* | 2018-12 | [📄 Paper](https://arxiv.org/pdf/1812.01717) · [💻&nbsp;Code](https://github.com/google-research/google-research/tree/master/frechet_video_distance) |

---

#### 🌐 World Model — Physical Commonsense

| Paper | Released | Links |
|-------|----------|-------|
| **VideoPhy** - *VideoPhy: Evaluating Physical Commonsense for Video Generation* | 2024-06 | [📄 Paper](https://arxiv.org/pdf/2406.03520) · [🌍&nbsp;Web](https://videophy.github.io/) · [💻&nbsp;Code](https://github.com/Hritikbansal/videophy) · [📦&nbsp;Dataset](https://huggingface.co/datasets/videophysics/videophy_test_public) 
| **PhyGenBench** - *Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation* | 2024-10 | [📄 Paper](https://arxiv.org/pdf/2410.05363) · [🌍&nbsp;Web](https://phygenbench123.github.io/) · [💻&nbsp;Code](https://github.com/OpenGVLab/PhyGenBench) 
| **VBench-2.0** - *VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness* | 2025-03 | [📄 Paper](https://arxiv.org/pdf/2503.21755) · [🌍&nbsp;Web](https://vchitect.github.io/VBench-2.0-project/) · [💻&nbsp;Code](https://github.com/Vchitect/VBench) · [📦&nbsp;Dataset](https://huggingface.co/datasets/Vchitect/VBench-2.0_sampled_videos) 
| **WorldModelBench** - *WorldModelBench: Judging Video Generation Models as World Models* | 2025-02 | [📄 Paper](https://arxiv.org/pdf/2502.20694) · [🌍&nbsp;Web](https://worldmodelbench-team.github.io/) · [💻&nbsp;Code](https://github.com/WorldModelBench-Team/WorldModelBench) |
| **Physics-IQ** - *Do Generative Video Models Understand Physical Principles?* | 2025-01 | [📄 Paper](https://arxiv.org/pdf/2501.09038) · [🌍&nbsp;Web](https://physics-iq.github.io/) · [💻&nbsp;Code](https://github.com/google-deepmind/physics-iq-benchmark) |
| **WorldScore** - *WorldScore: A Unified Evaluation Benchmark for World Generation* | 2025-04 | [📄 Paper](https://arxiv.org/pdf/2504.00983) · [🌍&nbsp;Web](https://haoyi-duan.github.io/WorldScore/) · [💻&nbsp;Code](https://github.com/haoyi-duan/WorldScore) |
| **EWMBench** - *EWMBench: Evaluating Scene, Motion, and Semantic Quality in Embodied World Models* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.09694) · [💻&nbsp;Code](https://github.com/AgibotTech/EWMBench) |

---

#### 🌐 World Model — Action Plausibility

| Paper | Released | Links |
|-------|----------|-------|
| **WorldSimBench** - *WorldSimBench: Towards Video Generation Models as World Simulators* | 2024-10 | [📄 Paper](https://arxiv.org/pdf/2410.18072) · [🌍&nbsp;Web](https://iranqin.github.io/WorldSimBench.github.io/) · [💻&nbsp;Code](https://github.com/iranqin/WorldSimBench) |
| **Wow, wo, val!** - *A Comprehensive Embodied World Model Evaluation Turing Test* | 2026-01 | [📄 Paper](https://arxiv.org/pdf/2601.04137) |

---

#### 🤖 Action Policy — General

| Paper | Released | Links |
|-------|----------|-------|
| **MetaWorld** - *MetaWorld: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning* | 2019-10 | [📄 Paper](https://arxiv.org/pdf/1910.10897) · [🌍&nbsp;Web](https://meta-world.github.io/) · [💻&nbsp;Code](https://github.com/Farama-Foundation/Metaworld) |
| **RLBench** - *RLBench: The Robot Learning Benchmark & Learning Environment* | 2019-09 | [📄 Paper](https://arxiv.org/pdf/1909.12271) · [🌍&nbsp;Web](https://sites.google.com/view/rlbench) · [💻&nbsp;Code](https://github.com/stepjam/RLBench) |
| **Robomimic** - *What Matters in Learning from Offline Human Demonstrations for Robot Manipulation* | 2021-08 | [📄 Paper](https://arxiv.org/pdf/2108.03298) · [🌍&nbsp;Web](https://robomimic.github.io/) · [💻&nbsp;Code](https://github.com/ARISE-Initiative/robomimic) · [📦&nbsp;Dataset](https://huggingface.co/datasets/robomimic/robomimic_datasets) |
| **Franka Kitchen** - *Relay Policy Learning: Solving Long-Horizon Tasks via Imitation and Reinforcement Learning* | 2019-10 | [📄 Paper](https://arxiv.org/pdf/1910.11956) · [🌍&nbsp;Web](https://relay-policy-learning.github.io/) · [💻&nbsp;Code](https://github.com/google-research/relay-policy-learning) |
| **ManiSkill** - *ManiSkill: Generalizable Manipulation Skill Benchmark with Large-Scale Demonstrations* | 2021-07 | [📄 Paper](https://arxiv.org/pdf/2107.14483) · [🌍&nbsp;Web](https://maniskill.ai/) · [💻&nbsp;Code](https://github.com/haosulab/ManiSkill) |
| **ManiSkill2** - *ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills* | 2023-02 | [📄 Paper](https://arxiv.org/pdf/2302.04659) · [🌍&nbsp;Web](https://haosulab.github.io/ManiSkill2/) · [💻&nbsp;Code](https://github.com/haosulab/ManiSkill2) · [📦&nbsp;Dataset](https://huggingface.co/datasets/haosulab/ManiSkill2) |
| **ManiSkill3** - *ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI* | 2024-10 | [📄 Paper](https://arxiv.org/pdf/2410.00425) · [🌍&nbsp;Web](https://maniskill.ai/) · [💻&nbsp;Code](https://github.com/haosulab/ManiSkill) · [📦&nbsp;Dataset](https://huggingface.co/datasets/haosulab/ManiSkill_Demonstrations) |
| **RoboCasa** - *RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots* | 2024-06 | [📄 Paper](https://arxiv.org/pdf/2406.02523) · [🌍&nbsp;Web](https://robocasa.ai/) · [💻&nbsp;Code](https://github.com/robocasa/robocasa) |
| **CALVIN** - *CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks* | 2021-12 | [📄 Paper](https://arxiv.org/pdf/2112.03227) · [🌍&nbsp;Web](http://calvin.cs.uni-freiburg.de/) · [💻&nbsp;Code](https://github.com/mees/calvin) |
| **VIMAbench** - *VIMA: General Robot Manipulation with Multimodal Prompts* | 2022-10 | [📄 Paper](https://arxiv.org/pdf/2210.03094) · [🌍&nbsp;Web](https://vimalabs.github.io/) · [💻&nbsp;Code](https://github.com/vimalabs/VIMA) |
| **VLMbench** - *VLMbench: A Compositional Benchmark for Vision-and-Language Manipulation* | 2022-06 | [📄 Paper](https://arxiv.org/pdf/2206.08522) · [💻&nbsp;Code](https://github.com/eric-ai-lab/VLMbench) |
| **LIBERO** - *LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning* | 2023-06 | [📄 Paper](https://arxiv.org/pdf/2306.03310) · [🌍&nbsp;Web](https://libero-project.github.io/) · [💻&nbsp;Code](https://github.com/Lifelong-Robot-Learning/LIBERO) |
| **LIBERO-Plus** - *LIBERO-Plus: In-Depth Robustness Analysis of Vision-Language-Action Models* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.13626) · [🌍&nbsp;Web](https://sylvestf.github.io/LIBERO-plus/) · [💻&nbsp;Code](https://github.com/sylvestf/LIBERO-plus) · [📦&nbsp;Dataset](https://huggingface.co/datasets/Sylvest/LIBERO-plus) |
| **LIBERO-PRO** - *LIBERO-PRO: Towards Robust and Fair Evaluation of VLA Models beyond Memorization* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.03827) · [🌍&nbsp;Web](https://zxy-mllab.github.io/LIBERO-PRO-Webpage/) · [💻&nbsp;Code](https://github.com/Zxy-MLlab/LIBERO-PRO) · [📦&nbsp;Dataset](https://huggingface.co/datasets/zhouxueyang/LIBERO-Pro) |
| **LIBERO-X** - *LIBERO-X: Robustness Litmus for Vision-Language-Action Models* | 2026-02 | [📄 Paper](https://arxiv.org/pdf/2602.06556)· [🌍&nbsp;Web](https://meituan.github.io/LIBERO-X/) · [💻&nbsp;Code](https://github.com/meituan/LIBERO-X) |
| **COLOSSEUM** - *THE COLOSSEUM: A Benchmark for Evaluating Generalization for Robotic Manipulation* | 2024-02 | [📄 Paper](https://arxiv.org/pdf/2402.08191) · [🌍&nbsp;Web](https://robot-colosseum.github.io/) · [💻&nbsp;Code](https://github.com/robot-colosseum/robot-colosseum) |
| **AGNOSTOS** - *Exploring the Limits of Vision-Language-Action Manipulations in Cross-Task Generalization* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.15660) · [🌍&nbsp;Web](https://jiaming-zhou.github.io/AGNOSTOS) · [💻&nbsp;Code](https://github.com/jiaming-zhou/X-ICM) |
| **RoboEval** - *RoboEval: Where Robotic Manipulation Meets Structured and Scalable Evaluation* | 2025-07 | [📄 Paper](https://arxiv.org/pdf/2507.00435) · [🌍&nbsp;Web](https://robo-eval.github.io/)· [💻&nbsp;Code](https://github.com/Robo-Eval/RoboEval) |
| **RoboVerse** - *RoboVerse: Towards a Unified Platform, Dataset and Benchmark for Scalable and Generalizable Robot Learning* | 2025-04 | [📄 Paper](https://arxiv.org/pdf/2504.18904) · [🌍&nbsp;Web](https://roboverse.wiki/) · [💻&nbsp;Code](https://github.com/RoboVerseOrg/RoboVerse) |
| **PolaRiS** - *PolaRiS: Scalable Real-to-Sim Evaluations for Generalist Robot Policies* | 2025-12 | [📄 Paper](https://arxiv.org/pdf/2512.16881) · [🌍&nbsp;Web](https://polaris-evals.github.io/) · [💻&nbsp;Code](https://github.com/arhanjain/polaris) · [📦&nbsp;Dataset](https://huggingface.co/datasets/owhan/PolaRiS-Hub) |
| **RoboMME** - *RoboMME: Benchmarking and Understanding Memory for Robotic Generalist Policies* | 2026-03 | [📄 Paper](https://arxiv.org/pdf/2603.04639) · [🌍&nbsp;Web](https://robomme.github.io/) · [💻&nbsp;Code](https://github.com/RoboMME/robomme_benchmark) |
| **GenManip** - *GenManip: LLM-Driven Simulation for Generalizable Instruction-Following Manipulation* | 2025-06 | [📄 Paper](https://arxiv.org/pdf/2506.10966) · [🌍&nbsp;Web](https://genmanip.axi404.top/) |
| **VLABench** - *VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks* | 2024-12 | [📄 Paper](https://arxiv.org/pdf/2412.18194) · [💻&nbsp;Code](https://github.com/OpenMOSS/VLABench) |
| **RoboSuite** - *Robosuite: A Modular Simulation Framework and Benchmark for Robot Learning* | 2020-09 | [📄 Paper](https://arxiv.org/pdf/2009.12293) · [🌍&nbsp;Web](https://robosuite.ai/) · [💻&nbsp;Code](https://github.com/ARISE-Initiative/robosuite) |
| **RoboLab** - *RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies* | 2026-04 | [📄 Paper](https://arxiv.org/pdf/2604.09860) |
| **SimplerEnv** - *Evaluating Real-World Robot Manipulation Policies in Simulation* | 2024-05 | [📄 Paper](https://arxiv.org/pdf/2405.05941) · [🌍&nbsp;Web](https://simpler-env.github.io/) · [💻&nbsp;Code](https://github.com/simpler-env/SimplerEnv) |
| **ARNOLD** - *ARNOLD: A Benchmark for Language-Grounded Task Learning with Continuous States in Realistic 3D Scenes* | 2023-04 | [📄 Paper](https://arxiv.org/pdf/2304.04321) · [🌍&nbsp;Web](https://arnold-benchmark.github.io/) · [💻&nbsp;Code](https://github.com/arnold-benchmark/arnold) |
| **GemBench** - *Towards Generalizable Vision-Language Robotic Manipulation: A Benchmark and LLM-Guided 3D Policy* | 2024-10 | [📄 Paper](https://arxiv.org/pdf/2410.01345) · [🌍&nbsp;Web](https://www.di.ens.fr/willow/research/gembench/) · [💻&nbsp;Code](https://github.com/vlc-robot/robot-3dlotus/) |

---

#### 🤖 Action Policy — Bimanual and Humanoid Form

| Paper | Released | Links |
|-------|----------|-------|
| **RoboTwin** - *RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins* | 2025-04 | [📄 Paper](https://arxiv.org/pdf/2504.13059) · [🌍&nbsp;Web](https://robotwin-platform.github.io/) · [💻&nbsp;Code](https://github.com/RoboTwin-Platform/RoboTwin) |
| **BiGym** - *BiGym: A Demo-Driven Mobile Bi-Manual Manipulation Benchmark* | 2024-07 | [📄 Paper](https://arxiv.org/pdf/2407.07788) · [🌍&nbsp;Web](https://chernyadev.github.io/bigym/) · [💻&nbsp;Code](https://github.com/chernyadev/bigym) |
| **HumanoidBench** - *HumanoidBench: Simulated Humanoid Benchmark for Whole-Body Locomotion and Manipulation* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.10506) · [🌍&nbsp;Web](https://humanoid-bench.github.io/) · [💻&nbsp;Code](https://github.com/humanoid-bench/humanoid-bench) |
| **HumanoidGen** - *HumanoidGen: Data Generation for Bimanual Dexterous Manipulation via LLM Reasoning* | 2025-07 | [📄 Paper](https://arxiv.org/pdf/2507.00833) · [🌍&nbsp;Web](https://openhumanoidgen.github.io/) · [💻&nbsp;Code](https://github.com/carlosferrazza/humanoid-bench) |

---

#### 🤖 Action Policy — Mobile Manipulation

| Paper | Released | Links |
|-------|----------|-------|
| **ManipulaTHOR** - *ManipulaTHOR: A Framework for Visual Object Manipulation* | 2021-04 | [📄 Paper](https://arxiv.org/pdf/2104.11213) · [🌍&nbsp;Web](https://ai2thor.allenai.org/manipulathor/) · [💻&nbsp;Code](https://github.com/allenai/manipulathor) |
| **HomeRobot** - *HomeRobot: Open-Vocabulary Mobile Manipulation* | 2023-06 | [📄 Paper](https://arxiv.org/pdf/2306.11565) · [🌍&nbsp;Web](https://ovmm.github.io/) · [💻&nbsp;Code](https://github.com/facebookresearch/home-robot) |
| **BEHAVIOR-1K** - *BEHAVIOR-1K: A Benchmark for Embodied AI with 1,000 Everyday Activities and Realistic Simulation* | 2024-03 | [📄 Paper](https://arxiv.org/pdf/2403.09227) · [🌍&nbsp;Web](https://behavior.stanford.edu/) · [💻&nbsp;Code](https://github.com/StanfordVL/OmniGibson) |

---

#### 🤖 Action Policy — Contact and Deformation Manipulation

| Paper | Released | Links |
|-------|----------|-------|
| **SoftGym** - *SoftGym: Benchmarking Deep Reinforcement Learning for Deformable Object Manipulation* | 2020-11 | [📄 Paper](https://arxiv.org/pdf/2011.07215)· [🌍&nbsp;Web](https://sites.google.com/view/softgym) · [💻&nbsp;Code](https://github.com/Xingyu-Lin/softgym) |
| **PlasticineLab** - *PlasticineLab: A Soft-Body Manipulation Benchmark with Differentiable Physics* | 2021-04 | [📄 Paper](https://arxiv.org/pdf/2104.03311) · [🌍&nbsp;Web](https://plasticinelab.csail.mit.edu/) · [💻&nbsp;Code](https://github.com/hzaskywalker/PlasticineLab) |
| **DaXBench** - *DaXBench: Benchmarking Deformable Object Manipulation with Differentiable Physics* | 2022-10 | [📄 Paper](https://arxiv.org/pdf/2210.13066) · [🌍&nbsp;Web](https://daxbench.github.io/) · [💻&nbsp;Code](https://github.com/AdaCompNUS/DaXBench) |
| **TacSL** - *TacSL: A Library for Visuotactile Sensor Simulation and Learning* | 2024-08 | [📄 Paper](https://arxiv.org/pdf/2408.06506) · [🌍&nbsp;Web](https://iakinola23.github.io/tacsl/) · [💻&nbsp;Code](https://github.com/isaac-sim/IsaacGymEnvs/blob/tacsl/isaacgymenvs/tacsl_sensors/install/tacsl_setup.md) |
| **ManiFeel** - *ManiFeel: Benchmarking and Understanding Visuotactile Manipulation Policy Learning* | 2025-05 | [📄 Paper](https://arxiv.org/pdf/2505.18472) · [🌍&nbsp;Web](https://zhengtongxu.github.io/manifeel-website/)· [💻&nbsp;Code](https://github.com/purdue-mars/manifeel) |

---

#### 🤖 Action Policy — Real-Device

| Paper | Released | Links |
|-------|----------|-------|
| **RoboArena** - *RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies* | 2025-06 | [📄 Paper](https://arxiv.org/pdf/2506.18123) · [🌍&nbsp;Web](https://robo-arena.github.io/) · [💻&nbsp;Code](https://github.com/robo-arena/roboarena) |
| **RoboChallenge** - *RoboChallenge: Large-Scale Real-Robot Evaluation of Embodied Policies* | 2025-10 | [📄 Paper](https://arxiv.org/pdf/2510.17950) · [🌍&nbsp;Web](https://robochallenge.ai/)· [💻&nbsp;Code](https://github.com/RoboChallenge) |
| **ManipArena** - *ManipArena: Comprehensive Real-World Evaluation of Reasoning-Oriented Generalist Robot Manipulation* | 2026-03 | [📄 Paper](https://arxiv.org/pdf/2603.28545) · [🌍&nbsp;Web](https://maniparena.x2robot.com/) · [💻&nbsp;Code](https://github.com/maniparena/maniparena-repo) |



## 👋 Citation

If you find this survey or repository helpful for your research, please consider citing our paper:

```bibtex
@article{wang2026world,
  title={World Action Models for Generalist Robotics: From Next Token Prediction to Next State Synthesis},
  author={Wang, Siyin and Shi, Junhao and Fu, Zhaoyang and He, Xinzhe and Liu, Feihong and Yang, Chenchen and Zhou, Yikang and Fei, Zhaoye and Gong, Jingjing and Fu, Jinlan and Shou, Mike Zheng and Huang, Xuanjing and Qiu, Xipeng and Jiang, Yu-Gang},
  year={2026}
}
```