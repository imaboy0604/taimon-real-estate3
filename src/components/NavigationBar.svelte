<script lang="ts">
  const navItems = [
    { id: 1, label: "私達について", href: "#about" },
    { id: 2, label: "取引形態", href: "#transaction" },
    { id: 3, label: "流れ", href: "#flow" },
    { id: 4, label: "物件一覧", href: "#properties" },
    { id: 5, label: "実例集", href: "#gallery" },
    { id: 6, label: "スタッフブログ", href: "#blog" },
  ];

  let activeItem = navItems[0].id;

  function handleClick(itemId: number) {
    activeItem = itemId;
  }
</script>

<nav class="navigation-bar">
  <div class="nav-container">
    <ul class="nav-list">
      {#each navItems as item}
        <li class="nav-item">
          <a
            href={item.href}
            class="nav-link"
            class:active={activeItem === item.id}
            on:click={() => handleClick(item.id)}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navigation-bar {
    position: relative;
    width: 100%;
    background-color: var(--color-bg-primary, #ffffff);
    border-bottom: 1px solid var(--color-border-light, #f0f0f0);
    z-index: 999;
  }

  .nav-container {
    max-width: var(--breakpoint-desktop, 1440px);
    margin: 0 auto;
    padding: 0 var(--padding-container, 32px);
  }

  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-4, 32px);
    list-style: none;
    padding: var(--spacing-3, 24px) 0;
    margin: 0;
  }

  .nav-item {
    margin: 0;
  }

  .nav-link {
    font-family: var(
      --font-family-serif,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      serif
    );
    font-size: var(--font-size-base, 16px);
    font-weight: 400;
    color: var(--color-text-primary, #1a1a1a);
    text-decoration: none;
    letter-spacing: var(--letter-spacing-heading, 0.05em);
    transition: color var(--transition-base, 0.3s ease);
    position: relative;
    padding: var(--spacing-1, 8px) 0;
    display: block;
  }

  .nav-link:hover {
    color: var(--color-accent-subtle, #8b7355);
  }

  .nav-link.active {
    color: var(--color-text-primary, #1a1a1a);
    font-weight: 500;
  }

  .nav-link.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-text-primary, #1a1a1a);
  }

  /* モバイル・タブレットでは非表示 (PC表示の時は現在のまま) */
  @media (max-width: 1024px) {
    .navigation-bar {
      display: none;
    }
  }
</style>
