<script>
  import { onMount } from 'svelte';

  const features = [
    {
      title: '立地の良さ',
      description: 'タイモン不動産の物件は、各方面からアクセスしやすい立地にあります。都心、空港、駅、バスターミナルなど、重要な場所へ簡単かつ迅速にアクセスできます。'
    },
    {
      title: 'モダンデザイン',
      description: 'タイモン不動産は、モダンで洗練された住まいのデザインを提供しています。お客様の好みやニーズに合わせて、36㎡タイプから120㎡タイプまで、様々なタイプからお選びいただけます。'
    },
    {
      title: 'セキュリティ',
      description: 'タイモン不動産は、統合セキュリティシステムを備えています。各物件にはフェンス、ゲート、警備員が常駐する警備室が設置されており、プロの警備員が監視しています。さらに、各住戸には火災報知器と防犯カメラも完備されています。'
    }
  ];

  let sectionElement;
  let isVisible = false;

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
        rootMargin: '0px 0px -50px 0px',
      }
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

<section class="features2-section" class:visible={isVisible} bind:this={sectionElement}>
  <div class="container">
    <div class="header">
      <h2 class="title">家づくりの特徴</h2>
      <p class="subtitle">
        タイモン不動産が選ばれる理由をご紹介します。
      </p>
    </div>

    <div class="features-grid">
      {#each features as feature}
        <div class="feature-card">
          <h3 class="feature-title">{feature.title}</h3>
          <p class="feature-description">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features2-section {
    position: relative;
    background: url('/images/gallery-3.jpg') center/cover;
    padding: 120px 80px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .features2-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .features2-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.82) 100%);
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 80px;
  }

  .title {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 44px;
    font-weight: 500;
    line-height: 1.18;
    color: #12161D;
    margin-bottom: 24px;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
  }

  .subtitle {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.44;
    color: #61656E;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 32px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.8);
  }

  .feature-title {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    color: #12161D;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
  }

  .feature-description {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #61656E;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    .features2-section {
      padding: 80px 20px;
    }

    .header {
      margin-bottom: 60px;
    }

    .title {
      font-size: 36px;
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .feature-card {
      padding: 24px;
    }

    .feature-title {
      font-size: 20px;
    }

    .feature-description {
      font-size: 15px;
    }
  }
</style>
