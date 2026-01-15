<script>
  import Header from "./components/Header.svelte";
  import NavigationBar from "./components/NavigationBar.svelte";
  import HeroSection from "./components/HeroSection.svelte";
  import FeaturesSection from "./components/FeaturesSection.svelte";
  import StoreSection from "./components/StoreSection.svelte";
  import Features2Section from "./components/Features2Section.svelte";
  import Features3Section from "./components/Features3Section.svelte";
  import FAQSection from "./components/FAQSection.svelte";
  import Footer from "./components/Footer.svelte";
  import MenuButton from "./components/MenuButton.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+JP:wght@200;300;400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <Header />
  <HeroSection />
  <NavigationBar />
  <FeaturesSection />
  <StoreSection />
  <Features2Section />
  <Features3Section />
  <FAQSection />
  <Footer />
</main>

<MenuButton />

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }

  :global(body) {
    font-family: var(
      --font-family-base,
      "Noto Serif JP",
      "Yu Mincho",
      "游明朝",
      "Hiragino Mincho ProN",
      "MS PMincho",
      serif
    );
    color: var(--color-text-primary, #1a1a1a);
    background-color: var(--color-bg-primary, #ffffff);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }

  main {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
</style>
