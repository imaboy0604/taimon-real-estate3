<script>
  import { onMount } from 'svelte';

  let openIndex = -1;
  let sectionElement;
  let isVisible = false;

  const faqs = [
    {
      question: 'タイモン不動産とは何ですか？',
      answer: 'タイモン不動産は、ゲート付きの物件群で構成される住まいのコンセプトです。快適で安全、そして手頃な価格の住まいを、様々な充実したモダンな施設と共に提供しています。'
    },
    {
      question: 'タイモン不動産の物件はどこにありますか？',
      answer: 'タイモン不動産の物件は、都心、空港、その他の重要な施設へのアクセスが容易な、戦略的に選ばれた立地にあります。'
    },
    {
      question: 'タイモン不動産の物件の価格とタイプはどのくらいですか？',
      answer: 'タイモン不動産は、36㎡タイプから120㎡タイプまで、様々なタイプの物件を提供しています。価格はタイプと立地によって異なります。詳細な価格情報については、お気軽にお問い合わせください。'
    },
    {
      question: 'タイモン不動産ではどのような施設が提供されていますか？',
      answer: 'タイモン不動産では、遊び場、スポーツ施設、ショッピングセンター、学校、セキュリティシステムなど、様々なモダンな施設を提供しています。'
    }
  ];

  function toggleFAQ(index) {
    openIndex = openIndex === index ? -1 : index;
  }

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

<section class="faq-section" class:visible={isVisible} bind:this={sectionElement}>
  <div class="container">
    <div class="header">
      <h2 class="title">よくある質問</h2>
      <p class="subtitle">
        ご質問がございましたら、<br />
        お気軽にお問い合わせください。
      </p>
    </div>

    <div class="faq-list">
      {#each faqs as faq, index}
        <div class="faq-item" class:open={openIndex === index}>
          <button class="faq-question" on:click={() => toggleFAQ(index)}>
            <span class="question-text">{faq.question}</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              {#if openIndex === index}
                <path d="M5 10H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              {:else}
                <path d="M10 5V15M5 10H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              {/if}
            </svg>
          </button>
          {#if openIndex === index}
            <div class="faq-answer">
              <p>{faq.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-section {
    position: relative;
    background: url('/images/gallery-2.jpg') center/cover;
    padding: 120px 80px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .faq-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .faq-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.88) 100%);
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 64px;
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

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-item {
    border: 1px solid #E5E5E6;
    border-radius: 6px;
    background-color: #FFFFFF;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    border-color: #D0D0D0;
  }

  .faq-item.open {
    border-color: #12161D;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #12161D;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
    transition: color 0.3s ease;
  }

  .faq-question:hover {
    color: #61656E;
  }

  .question-text {
    flex: 1;
    padding-right: 16px;
  }

  .faq-question .icon {
    flex-shrink: 0;
    color: #61656E;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .faq-item.open .icon {
    color: #12161D;
  }

  .faq-answer {
    padding: 0 20px 16px 20px;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .faq-answer p {
    font-family: var(--font-family-serif, 'Noto Serif JP', 'Yu Mincho', '游明朝', serif);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.8;
    color: #61656E;
    letter-spacing: var(--letter-spacing-body-wide, 0.05em);
    margin: 0;
  }

  @media (max-width: 768px) {
    .faq-section {
      padding: 80px 20px;
    }

    .header {
      margin-bottom: 48px;
    }

    .title {
      font-size: 36px;
    }

    .faq-question {
      font-size: 15px;
      padding: 14px 16px;
    }

    .faq-answer {
      padding: 0 16px 14px 16px;
    }

    .faq-answer p {
      font-size: 14px;
    }
  }
</style>
