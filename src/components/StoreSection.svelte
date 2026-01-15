<script lang="ts">
  import { onMount } from "svelte";

  interface StoreImage {
    id: number;
    src: string;
    alt: string;
    label: string;
  }

  const storeImages: StoreImage[] = [
    {
      id: 1,
      src: "/images/store-exterior.jpg",
      alt: "店舗外観",
      label: "外観",
    },
    {
      id: 2,
      src: "/images/store-interior-1.jpg",
      alt: "店舗内観1",
      label: "内観",
    },
    {
      id: 3,
      src: "/images/store-interior-2.jpg",
      alt: "店舗内観2",
      label: "内観",
    },
  ];

  let sectionElement: HTMLElement;
  let isVisible: boolean = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  });
</script>

<section
  class="store-section"
  class:visible={isVisible}
  bind:this={sectionElement}
>
  <div class="container">
    <div class="section-header">
      <h2 class="title">店舗紹介</h2>
      <p class="subtitle">
        タイモン不動産の店舗をご紹介します。<br />
        お気軽にご来店ください。
      </p>
    </div>

    <div class="store-gallery">
      {#each storeImages as image}
        <div class="gallery-item">
          <div class="image-wrapper">
            <img src={image.src} alt={image.alt} />
            <div class="image-overlay">
              <span class="image-label">{image.label}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="store-info">
      <div class="info-item">
        <h3 class="info-title">営業時間</h3>
        <p class="info-text">平日：10:00 - 19:00<br />土日祝：10:00 - 18:00</p>
      </div>
      <div class="info-item">
        <h3 class="info-title">アクセス</h3>
        <p class="info-text">JR各線「○○駅」徒歩5分<br />駐車場完備（5台）</p>
      </div>
      <div class="info-item">
        <h3 class="info-title">お問い合わせ</h3>
        <p class="info-text">
          TEL: 03-XXXX-XXXX<br />MAIL: info@taimon-real-estate.jp
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .store-section {
    position: relative;
    background: url("/images/gallery-2.jpg") center/cover;
    padding: 120px 80px;
    overflow: hidden;
    /* セクション自体のフェードインは控えめに */
    opacity: 0;
    transition: opacity 0.8s ease-out;
  }

  .store-section.visible {
    opacity: 1;
  }

  .store-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.88) 100%
    );
    z-index: 0;
  }

  /* ... (middle styles unchanged) ... */

  .container {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .title {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: 44px;
    font-weight: 500;
    line-height: 1.18;
    color: #12161d;
    margin-bottom: 24px;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
  }

  .subtitle {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: 18px;
    font-weight: 400;
    line-height: 1.44;
    color: #61656e;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  .store-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 80px;
  }

  .gallery-item {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

    /* 初期状態: 透明 & 右にずらす */
    opacity: 0;
    transform: translateX(100px);
    /* 滑らかなスライドインアニメーション (Framer Motion風) */
    transition:
      opacity 0.8s ease-out,
      transform 1s cubic-bezier(0.16, 1, 0.3, 1),
      /* Custom easeOutQuart-ish */ box-shadow 0.3s ease;
  }

  /* セクションが表示された時に画像を表示 */
  :global(.store-section.visible) .gallery-item {
    opacity: 1;
    transform: translateX(0);
  }

  /* 時間差で出現させる (Staggered animation) */
  :global(.store-section.visible) .gallery-item:nth-child(1) {
    transition-delay: 0.1s;
  }
  :global(.store-section.visible) .gallery-item:nth-child(2) {
    transition-delay: 0.3s;
  }
  :global(.store-section.visible) .gallery-item:nth-child(3) {
    transition-delay: 0.5s;
  }

  .gallery-item:hover {
    transform: translateY(
      -4px
    ); /* hover時は少し浮く（translateX0の上書きに注意が必要だが、hoverはmouse actionなので分離するか、transitionプロパティでカバー） */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    /* hover時のtransformを再定義する必要があるため、!importantか詳細度で勝つ */
  }

  /* hover時の競合を避けるため、visible状態でのhoverを定義 */
  :global(.store-section.visible) .gallery-item:hover {
    transform: translateY(-4px);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover .image-wrapper img {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 100%
    );
    padding: 24px 20px 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .image-overlay {
    opacity: 1;
  }

  .image-label {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: 16px;
    font-weight: 500;
    color: white;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  .store-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    padding-top: 60px;
    border-top: 1px solid #e5e5e6;
  }

  .info-item {
    text-align: center;
  }

  .info-title {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    color: #12161d;
    margin-bottom: 16px;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
  }

  .info-text {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #61656e;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  @media (max-width: 1024px) {
    .store-gallery {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .store-info {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  @media (max-width: 768px) {
    .store-section {
      padding: 80px 20px;
    }

    .section-header {
      margin-bottom: 60px;
    }

    .title {
      font-size: 36px;
    }

    .store-gallery {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 60px;
    }

    .store-info {
      gap: 32px;
      padding-top: 40px;
    }
  }
</style>
