<script lang="ts">
  import NavigationBar from "./components/NavigationBar.svelte";
  import HeroSection from "./components/HeroSection.svelte";
  import FeaturesSection from "./components/FeaturesSection.svelte";
  // import StoreSection from "./components/StoreSection.svelte";
  import ConceptSection from "./components/ConceptSection.svelte";
  import Features2Section from "./components/Features2Section.svelte";
  import Features3Section from "./components/Features3Section.svelte";
  import FAQSection from "./components/FAQSection.svelte";
  import Footer from "./components/Footer.svelte";
  import MenuButton from "./components/MenuButton.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+JP:wght@200;300;400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <HeroSection />
  <NavigationBar />
  <FeaturesSection />
  <ConceptSection />
  <!-- <StoreSection /> -->
  <Features2Section />
  <Features3Section />
  <FAQSection />
  <Footer />
</main>

<MenuButton />
