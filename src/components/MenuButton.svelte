<script>
  import { fade, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  const menuItems = [
    { label: "私達について", link: "#about" },
    { label: "取引形態", link: "#service" },
    { label: "流れ", link: "#flow" },
    { label: "物件一覧", link: "#properties" },
    { label: "実例集", link: "#works" },
    { label: "スタッフブログ", link: "#blog" },
  ];
</script>

<div class="menu-container">
  <!-- Menu Button -->
  <button
    class="menu-button {isOpen ? 'open' : ''}"
    on:click={toggleMenu}
    aria-label="Menu"
  >
    <div class="liquid-bg"></div>
    <span class="menu-text">{isOpen ? "CLOSE" : "MENU"}</span>
  </button>

  <!-- Fullscreen Menu Overlay -->
  {#if isOpen}
    <div class="menu-overlay" transition:fade={{ duration: 400 }}>
      <nav class="menu-nav">
        <ul>
          {#each menuItems as item, i}
            <li
              in:fly={{
                y: 30,
                duration: 600,
                delay: 100 + i * 50,
                easing: cubicOut,
              }}
            >
              <a href={item.link} on:click={toggleMenu}>
                <span class="en-num">0{i + 1}.</span>
                <span class="jp-label">{item.label}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
</div>

<style>
  /* Menu Button Container */
  .menu-container {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 1000;
  }

  /* Button Styles */
  .menu-button {
    position: relative;
    width: 80px;
    height: 80px;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-en, serif);
    font-size: 12px;
    letter-spacing: 0.1em;
    color: var(--color-text-primary);
    transition: transform 0.3s ease;
    z-index: 1001; /* Ensure button stays above overlay (900) */
  }

  .menu-button:hover {
    transform: scale(1.05);
  }

  /* Liquid Wave Animation Background */
  .liquid-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(
      --color-bg-primary
    ); /* Use a solid color or semi-transparent */
    opacity: 0.9;
    border: 1px solid var(--color-border);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    z-index: -1;

    /* The liquid morphing animation */
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: liquidMorph 8s ease-in-out infinite;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }

  .menu-button:hover .liquid-bg {
    background-color: var(--color-text-primary);
    border-color: var(--color-text-primary);
  }

  .menu-button:hover .menu-text {
    color: #fff;
  }

  /* Keyframes defined in global css or here locally */
  @keyframes liquidMorph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  .menu-text {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  /* Fullscreen Overlay */
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(253, 251, 248, 0.98); /* Based on new design token */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 900; /* Behind button */
  }

  .menu-nav ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  .menu-nav li {
    margin: 24px 0;
  }

  .menu-nav a {
    text-decoration: none;
    color: var(--color-text-primary);
    display: block;
    transition: opacity 0.3s ease;
  }

  .menu-nav a:hover {
    opacity: 0.6;
  }

  /* List Item Styling */
  .en-num {
    display: block;
    font-family: var(--font-family-en, serif);
    font-size: 14px;
    color: var(--color-accent-subtle);
    margin-bottom: 4px;
  }

  .jp-label {
    font-family: var(--font-family-serif);
    font-size: 24px;
    letter-spacing: 0.2em;
  }
</style>
