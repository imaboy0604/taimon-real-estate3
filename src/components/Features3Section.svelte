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

<section class="features3-section" class:visible={isVisible} bind:this={sectionElement}>
  <div class="container">
    <div class="content">
      <div class="text-content">
        <h2 class="title">理想の住まいを<br />ここで見つける</h2>
        <p class="description">
          タイモン不動産が、あなたとご家族のために美しく快適な住まいを提供する様子を、ぜひご覧ください。物件、環境、そして私たちが提供する施設の写真をご覧いただけます。
        </p>
      </div>
      
      <div class="image-content">
        <img 
          src="/images/gallery-1.jpg" 
          alt="理想の住まい"
          class="main-image"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .features3-section {
    position: relative;
    background-color: #FFFFFF;
    padding: 120px 80px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .features3-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .title {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 44px;
    font-weight: 500;
    line-height: 1.4;
    color: #12161D;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
  }

  .description {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #61656E;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
  }

  .image-content {
    width: 100%;
    position: relative;
  }

  .main-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .image-content:hover .main-image {
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    .content {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .text-content {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .features3-section {
      padding: 80px 20px;
    }

    .content {
      gap: 48px;
    }

    .title {
      font-size: 36px;
    }

    .description {
      font-size: 16px;
    }
  }
</style>
