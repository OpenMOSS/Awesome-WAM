论文章节盘点
═══════════════════════════════════════════════════════

§ Abstract
  内容摘要：WAV 将 world model、trajectory value 和 action decoding 统一到 VLA 中，把动作生成表述为 latent-space inference。
  → 报告位置：§1 论文速览 / §4 方法详解

§ 1. Introduction
  内容摘要：指出现有 VLA 多为直接动作预测，缺少长时域轨迹推理和结果评估；world model 能预测未来但通常不负责价值评估或动作选择。
  关键论点/分析：提出直接 action-space search 随 horizon 增长会遇到 feasible trajectory probability exponential decay。
  → 报告位置：§2 动机 / §4.3 数学推导

§ 2. Related Work
  §2.1 World Models for VLA
    内容摘要：覆盖 unified VLA-world-model architectures、world-model-driven virtual environments/post-training。
    → 报告位置：§3.1
  §2.2 RL post-training for VLA Models
    内容摘要：覆盖 RL/post-training 对 VLA 的提升，以及奖励、偏好和真实部署方面的相关工作。
    → 报告位置：§3.1
  §2.3 Model-Based Reinforcement Learning
    内容摘要：从 Dyna、probabilistic dynamics、latent world models 到 MPPI/MPC，说明本文借鉴 model-based RL 的 trajectory evaluation/planning 思路。
    → 报告位置：§3.1 / §4.2

§ 3. Preliminaries
  内容摘要：定义 language-conditioned VLA 与 MPC，给出 expert dataset、policy factorization 和 finite-horizon objective。
  涉及公式：VLA conditional distribution；MPC objective。
  → 报告位置：§4.1 / §4.3

§ 4. Methodology
  §4.1 Theoretical Analysis of Latent Planning
    内容摘要：证明 action-space feasible mass 随 H 指数衰减；latent generator 若覆盖 feasible manifold，则可指数级提高 feasible probability。
    涉及公式：Lemma 1；Proposition 1。
    → 报告位置：§4.3
  §4.2 Model Architecture and Training Objectives
    内容摘要：三模块：language-conditioned video generation、trajectory value、action decoding；三阶段 flow matching training。
    涉及图表：Figure pipeline。
    → 报告位置：§4.1 / §4.3 / §4.4
  §4.3 Latent Planning and Iterative Inference
    内容摘要：MPPI-like latent-space iterative optimization，维护 video/value 两个 Gaussian noise distributions，用 SNR 选 elite 更新均值和方差。
    涉及公式：SNR、video/value mean-std updates、smoothing。
    → 报告位置：§4.3 / §4.4

§ 5. Experiments
  §5.1 Generalization Comparison in Simulation
    内容摘要：LIBERO 四套件；WAV 平均 98.1，去掉 latent trajectory planning 后 96.4，Long 从 94.4 到 91.8。
    涉及表格：Table LIBERO。
    → 报告位置：§5.1 / §5.2 / §5.3
  §5.2 Real-World Evaluation
    内容摘要：Piper 双臂机器人，bowl organization、towel flattening、drawer task；与 GE-ACT 比较，平均成功率 35.6% 到 75.6%。
    涉及图表：real_world_bar、real_world_tasks。
    → 报告位置：§5.1 / §5.2
  §5.3 Ablation Study
    内容摘要：分析 K、M、N、alpha/beta、K1/K2、speed/memory trade-off。
    涉及图表：stage1_main、stage2_stage3_vis、speed_memory。
    → 报告位置：§5.3 / §5.4

§ 6. Conclusion
  内容摘要：作者总结 WAV 通过 latent trajectory planning 将 search distribution 推向 high-value/low-uncertainty regions；主要局限是 deployment time/storage overhead，未来方向为 richer multi-modal instructions 与 real-time closed-loop deployment。
  → 报告位置：§6

§ Appendix A Theoretical Analysis Details of Latent Planning
  内容分类：完整证明 / 理论推导。
  → 报告位置：§4.3，标注 [附录 A]

§ Appendix A.1 Why Action-Space Search Becomes Intractable
  内容分类：Lemma 完整证明，covering number argument，epsilon-neighborhood volume bound。
  → 报告位置：§4.3，标注 [附录 A.1]

§ Appendix A.2 Latent Planning as Probability Mass Reweighting
  内容分类：Proposition 完整证明；Corollary 说明 one-shot latent sampling 不保证 near-optimal，因此需要 iterative latent planning。
  → 报告位置：§4.3 / §4.4，标注 [附录 A.2]

§ Appendix B Algorithm Implementation Details
  内容分类：真实机器人数据、奖励项、硬件、训练时长、超参数、附录图。
  → 报告位置：§5.1 / §5.4，标注 [附录 B]

未覆盖内容检查：
  [x] 所有节都有对应报告位置。
  [x] Introduction 的理论动机进入 §4.3。
  [x] Related Work 技术背景进入 §3 与 §4.2。
  [x] Conclusion 局限进入 §6.2。
  [x] Appendix 理论、实现、超参数和补充图已整合到对应章节。
