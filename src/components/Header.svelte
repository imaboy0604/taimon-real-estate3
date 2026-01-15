<script>
  // カルーセルの現在のページ（例：5ページ中1ページ目）
  let currentPage = 1;
  const totalPages = 5;
</script>

<header class="header">
  <div class="header-content">
    <!-- 右上にパジネーションドット（カルーセル用） -->
    <div class="pagination-dots">
      {#each Array(totalPages) as _, index}
        <button
          class="dot"
          class:active={index + 1 === currentPage}
          on:click={() => currentPage = index + 1}
          aria-label="ページ{index + 1}に移動"
        ></button>
      {/each}
    </div>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* 写真がくっきり見えるように完全に透明な背景 */
    background-color: transparent;
    backdrop-filter: none;
    padding: var(--spacing-2, 16px) 0;
    pointer-events: none; /* クリックイベントを透過 */
  }
  
  .header-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: var(--breakpoint-desktop, 1440px);
    margin: 0 auto;
    padding: 0 var(--padding-container, 32px);
    width: 100%;
    pointer-events: auto; /* パジネーションドットはクリック可能 */
  }
  
  .pagination-dots {
    display: flex;
    gap: var(--spacing-1, 8px);
    align-items: center;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all var(--transition-base, 0.3s ease);
    padding: 0;
    outline: none;
  }
  
  .dot:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.2);
  }
  
  .dot.active {
    background-color: rgba(255, 255, 255, 1);
    width: 10px;
    height: 10px;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  }
  
  /* モバイル対応 */
  @media (max-width: 768px) {
    .header {
      padding: var(--spacing-1, 8px) 0;
    }
    
    .header-content {
      padding: 0 var(--spacing-2, 16px);
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
</style>
