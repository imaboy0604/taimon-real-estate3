<script>
  import { onMount } from 'svelte';

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

<section class="features-section" class:visible={isVisible} bind:this={sectionElement}>
  <div class="container">
    <div class="content">
      <div class="left">
        <h2 class="title">私たちの想い</h2>
      </div>

      <div class="right">
        <div class="mission-content">
          <p class="mission-text">
            タイモン不動産は、お客様一人ひとりの「住まいへの想い」を大切にしています。住まいは、人生の基盤となる場所。そこには、家族の笑顔、新しい生活への期待、そして未来への希望が詰まっています。
          </p>
          <p class="mission-text">
            私たちは、単なる物件の紹介だけでなく、お客様の人生のパートナーとして、最適な住まい探しをサポートいたします。お客様のライフスタイル、ご予算、ご希望を丁寧にお伺いし、長く安心してお住まいいただける物件をご提案いたします。
          </p>
          <p class="mission-text">
            住まい探しは、人生の大きな決断の一つです。だからこそ、私たちは誠実に、そして真摯に向き合います。お客様の「理想の住まい」を一緒に見つけていきましょう。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .features-section {
    position: relative;
    background: url("/images/gallery-1.jpg") center/cover;
    padding: 120px 80px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .features-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .features-section::before {
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

  .container {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    gap: 80px;
    align-items: flex-start;
  }

  .left {
    flex: 0 0 520px;
  }

  .title {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 44px;
    font-weight: 500;
    line-height: 1.18;
    color: #12161d;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .mission-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .mission-text {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #61656e;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  @media (max-width: 1024px) {
    .content {
      flex-direction: column;
      gap: 60px;
    }

    .left {
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    .features-section {
      padding: 80px 20px;
    }

    .content {
      gap: 32px;
    }

    .title {
      font-size: 36px;
    }

    .mission-content {
      gap: 24px;
    }

    .mission-text {
      font-size: 16px;
      line-height: 1.8;
    }
  }
</style>
