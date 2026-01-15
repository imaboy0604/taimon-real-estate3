<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  interface Bubble {
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
  }

  // 泡のエフェクト用の配列
  const bubbles: Bubble[] = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // 4-12px
    left: Math.random() * 100, // 0-100% (コンテナ内でランダム)
    delay: Math.random() * 5, // 0-5s
    duration: Math.random() * 3 + 8, // 8-11s
  }));

  // カルーセル用の画像配列
  const images: string[] = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
  ];

  let currentImageIndex: number = 0;
  let interval: ReturnType<typeof setInterval>;
  let y: number = 0;

  const nextSlide = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  };

  const setIndex = (index: number) => {
    currentImageIndex = index;
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  };

  onMount(() => {
    interval = setInterval(nextSlide, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<svelte:window bind:scrollY={y} />

<section class="hero-section">
  <!-- 背景画像カルーセル -->
  <div class="carousel-container">
    {#each images as src, index}
      <img
        {src}
        alt="Hero Background {index + 1}"
        class="bg-image"
        class:active={index === currentImageIndex}
      />
    {/each}
  </div>

  <div class="overlay-top"></div>

  <div class="bubbles-container">
    <!-- 泡のエフェクト (中央配置) -->
    {#each bubbles as bubble}
      <div
        class="bubble"
        style="left: {bubble.left}%; width: {bubble.size}px; height: {bubble.size}px; animation-delay: {bubble.delay}s; animation-duration: {bubble.duration}s;"
      ></div>
    {/each}
  </div>

  <div class="overlay-bottom"></div>

  <!-- パジネーションドット (上部中央) -->
  <div class="pagination-dots">
    {#each images as _, index}
      <button
        class="dot"
        class:active={index === currentImageIndex}
        on:click={() => setIndex(index)}
        aria-label="画像{index + 1}に切り替え"
      ></button>
    {/each}
  </div>

  <div class="hero-content">
    <h1 class="hero-title">
      より快適に。<br />
      より上質に。
    </h1>
    <p class="hero-subtitle">あなたの住まい探しを、より特別な体験に。</p>
    <div class="hero-logo">
      <img src="/images/logo1.jpg" alt="タイモン不動産" class="logo1-image" />
    </div>
  </div>

  <!-- スクロールインジケーター -->
  <div
    class="scroll-indicator"
    style="transform: translate(-50%, {y * 0.5}px); opacity: {Math.max(
      0,
      1 - y / 400,
    )};"
  >
    <div class="floating-content">
      <span class="scroll-text">Scroll</span>
      <div class="scroll-arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9L12 17L20 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</section>

<style>
  /* ... existing styles ... */
  /* ============================================
     ロゴサイズの微調整用CSS変数（最適化済み）
     ============================================ */
  :global(.hero-section) {
    --logo-nav-height: 40px; /* ナビゲーションバーのロゴ高さ */
    --logo-hero-max-width: 220px; /* ヒーローセクションのロゴ最大幅（縮小） */
    --logo-hero-max-width-mobile: 180px; /* モバイル時のロゴ最大幅 */
  }

  /* ... */

  /* スクロールインジケーター */
  /* スクロールインジケーター */
  .scroll-indicator {
    position: fixed;
    bottom: 40px;
    left: 50%;
    /* transform: translateX(-50%); Inline parallax handles this */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 100;
    color: #12161d;
    pointer-events: none;
  }

  /* 内部コンテンツ（アニメーション用） */
  .floating-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    animation: floating 3s ease-in-out infinite;
  }

  .scroll-text {
    font-family: var(--font-family-en, serif);
    font-size: 13px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .scroll-arrow {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes floating {
    0%,
    100% {
      transform: translateY(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(10px);
      opacity: 0.5;
    }
  }

  .hero-section {
    position: relative;
    /* ... */
    --logo-nav-height: 40px; /* ナビゲーションバーのロゴ高さ */
    --logo-hero-max-width: 220px; /* ヒーローセクションのロゴ最大幅（縮小） */
    --logo-hero-max-width-mobile: 180px; /* モバイル時のロゴ最大幅 */
  }

  .hero-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
    overflow: hidden;
    /* ヘッダー分の余白を考慮 */
    padding-top: 80px;
    background-color: #333; /* 画像読み込み前の背景色 */
  }

  /* カルーセルコンテナ */
  .carousel-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  /* 背景画像 */
  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.5s ease-in-out; /* ふわっと切り替え */
    z-index: 0;
  }

  .bg-image.active {
    opacity: 1;
    z-index: 1;
  }

  .overlay-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 2; /* 画像より上 */
  }

  .overlay-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    z-index: 3;
    overflow: hidden;
  }

  /* 半透明な波のベース */
  .overlay-bottom::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 20%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0.9) 80%,
      rgba(255, 255, 255, 1) 100%
    );
    clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
    animation: waveClip 8s ease-in-out infinite;
  }

  /* 波の動きをより滑らかに */
  @keyframes waveClip {
    0%,
    100% {
      clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
    }
    25% {
      clip-path: polygon(0 35%, 100% 8%, 100% 100%, 0% 100%);
    }
    50% {
      clip-path: polygon(0 45%, 100% -5%, 100% 100%, 0% 100%);
    }
    75% {
      clip-path: polygon(0 38%, 100% 5%, 100% 100%, 0% 100%);
    }
  }

  /* 追加の波の層（より自然な動き） */
  .overlay-bottom::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0.85) 90%,
      rgba(255, 255, 255, 1) 100%
    );
    clip-path: polygon(0 42%, 100% 2%, 100% 100%, 0% 100%);
    animation: waveClip2 10s ease-in-out infinite;
    animation-delay: -2s;
  }

  @keyframes waveClip2 {
    0%,
    100% {
      clip-path: polygon(0 42%, 100% 2%, 100% 100%, 0% 100%);
    }
    33% {
      clip-path: polygon(0 38%, 100% 6%, 100% 100%, 0% 100%);
    }
    66% {
      clip-path: polygon(0 46%, 100% -3%, 100% 100%, 0% 100%);
    }
  }

  /* 泡のエフェクト用コンテナ（画面中央配置） */
  .bubbles-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px; /* 中央のエリア幅 */
    height: 300px;
    z-index: 5; /* テキストの背面、背景の前面 */
    pointer-events: none;
    /* デバッグ用ボーダー（確認後削除） */
    /* border: 1px solid red; */
  }

  /* 泡のエフェクト */
  .bubble {
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(2px);
    animation: bubbleRise linear infinite;
    pointer-events: none;
  }

  @keyframes bubbleRise {
    0% {
      transform: translateY(0) scale(0.8);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-75px) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-150px) scale(1.2);
      opacity: 0;
    }
  }

  /* 泡に揺れの動きを追加 */
  .bubble:nth-child(odd) {
    animation-name: bubbleRise, bubbleSway;
    animation-duration: inherit, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
  }

  @keyframes bubbleSway {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
  }

  /* パジネーションドット */
  .pagination-dots {
    position: absolute;
    top: 24px; /* 上部からの距離 */
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 20; /* テキストより前面 */
    pointer-events: auto;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }

  .dot:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.2);
  }

  .dot.active {
    background-color: white;
    width: 10px;
    height: 10px;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  }

  .hero-content {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 0;
    text-align: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
  }

  .hero-title {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: clamp(32px, 8vw, 72px);
    font-weight: 500;
    line-height: var(--line-height-tight, 1.4);
    letter-spacing: var(--letter-spacing-heading-large, 0.1em);
    max-width: 90%;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  .hero-subtitle {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: clamp(16px, 2.5vw, 18px);
    font-weight: 400;
    line-height: var(--line-height-relaxed, 1.8);
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
    color: white;
    opacity: 1;
    max-width: 90%;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 40px;
  }

  .hero-logo {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo1-image {
    max-width: var(--logo-hero-max-width, 220px);
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.4));
    /* 白色背景を透過させる - darkenモードで白色を透明化 */
    mix-blend-mode: darken;
  }

  @media (max-width: 1024px) {
    .hero-section {
      /* モバイルでも画像の高さを確保 */
      padding-top: 60px;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      min-height: 100vh;
      padding-top: 50px;
    }

    .hero-content {
      padding: 0;
      min-height: 100vh;
    }

    .hero-title {
      font-size: clamp(28px, 10vw, 44px);
      padding: 0 20px;
    }

    .hero-subtitle {
      font-size: clamp(14px, 4vw, 18px);
      padding: 0 20px;
    }

    .logo1-image {
      max-width: var(--logo-hero-max-width-mobile, 180px);
    }

    .dot {
      width: 6px;
      height: 6px;
    }

    .dot.active {
      width: 8px;
      height: 8px;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      padding: 0 16px;
    }

    .hero-subtitle {
      padding: 0 16px;
    }
  }
</style>
