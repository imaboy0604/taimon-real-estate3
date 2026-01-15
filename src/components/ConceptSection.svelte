<script lang="ts">
    import { onMount } from "svelte";

    let isVisible = false;
    let sectionRef: HTMLElement;

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
            { threshold: 0.15 },
        );

        if (sectionRef) observer.observe(sectionRef);

        return () => {
            if (sectionRef) observer.disconnect();
        };
    });
</script>

<section
    class="concept-section"
    bind:this={sectionRef}
    class:visible={isVisible}
>
    <!-- 全体レイアウト: 2カラム -->
    <div class="container">
        <!-- 左カラム: 画像 + テキスト -->
        <div class="column-left">
            <!-- 上部: 画像 -->
            <div class="family-photo-wrapper">
                <img
                    src="/images/concept1a.jpg"
                    alt="家族の団欒"
                    class="family-photo"
                />
            </div>

            <!-- 下部: 縦書きテキスト -->
            <div class="concept-text">
                <p>
                    私たちが目指すのは、<br />
                    「成約からはじまる家探し」。<br />
                    不動産仲介の仕事は、<br />
                    単に物件の情報を右から左へ流す<br />
                    ことではありません。<br />
                    <br />
                    その後の三重での暮らしを、<br />
                    どう彩っていくか。<br />
                    どの物件を選ぶかではなく、<br />
                    この街で<br />
                    どんな時間を重ねるか。<br />
                    一人ひとりの「理想の日常」を<br />
                    一緒に見つけ出し、<br />
                    紡いでいくこと。<br />
                    それが、不動産タイモンの<br />
                    使命だと考えます。
                </p>
            </div>
        </div>

        <!-- 右カラム: 地図 -->
        <div class="column-right">
            <img
                src="/images/concept1b.JPG"
                alt="三重県の地図"
                class="map-image"
            />
        </div>
    </div>
</section>

<style>
    .concept-section {
        padding: 120px 0;
        background-color: #fff;
        width: 100%;
        overflow: hidden;
    }

    /* 1. 全体レイアウト（2カラム固定） */
    .container {
        display: flex;
        width: 100%;
        max-width: 1400px; /* 画面幅いっぱいにしつつ適度な制限 */
        margin: 0 auto;
        padding: 0 5vw; /* 左右の余白 */
        gap: 5vw; /* カラム間の余白 */
        box-sizing: border-box;
    }

    /* 2. 左カラムの構造 */
    .column-left {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .family-photo-wrapper {
        width: 100%;
        margin-bottom: 60px; /* 画像とテキストの間隔 */

        /* 5. アニメーション（左上の画像のみ） */
        opacity: 0;
        transform: translateX(-50px);
        transition:
            opacity 1.2s ease-out,
            transform 1.2s ease-out;
    }

    .concept-section.visible .family-photo-wrapper {
        opacity: 1;
        transform: translateX(0);
    }

    .family-photo {
        width: 100%;
        height: auto;
        display: block;
    }

    /* テキストエリア: 縦書き設定 */
    .concept-text {
        writing-mode: vertical-rl;
        width: 100%;
        height: 480px; /* 文章が綺麗に収まる高さ */

        font-family: "Zen Old Mincho", serif;
        font-size: 1rem;
        line-height: 2.2;
        letter-spacing: 0.1em;
        color: #333;

        /* テキストの開始位置調整 */
        text-align: left;
    }

    .concept-text p {
        margin: 0 0 0 2em; /* 段落間の余白 */
    }

    /* 4. 右カラム（地図画像） */
    .column-right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .map-image {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    /* レスポンシブ: スマホでは縦並び */
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 60px;
        }

        .column-left,
        .column-right {
            width: 100%;
        }

        .concept-text {
            height: auto;
            writing-mode: horizontal-tb; /* スマホでは横書きに戻すのが一般的だが、要望次第で縦のままも可。今回は安全策で横書き推奨だが、User request didn't specify mobile. I will keep it vertical unless it breaks, but horizontal is safer for small screens. Let's keep vertical but with min-height if desired, OR switch to horizontal for readability. User asked for "stylish", vertical on mobile can be hard. I'll switch to horizontal for mobile for usability. */
            writing-mode: horizontal-tb;
            margin-top: 40px;
        }

        .concept-text p {
            margin: 0 0 1.5em 0;
        }
    }
</style>
