<script lang="ts">
    // Property/Case Study Section
    // State: Under Preparation (Coming Soon)
</script>

<section class="property-section">
    <div class="container">
        <!-- Header with Vertical Text -->
        <div class="header-content">
            <div class="title-area">
                <h2 class="vertical-title">
                    <span class="main">Properties</span>
                    <span class="sub">取扱物件</span>
                </h2>
            </div>

            <div class="message-area">
                <p class="vertical-text">
                    住まいは、人生の舞台。<br />
                    私たちがお届けするのは、<br />
                    単なる「建物」や「土地」ではなく、<br />
                    そこで紡がれる「豊かな時間」です。<br />
                    <br />
                    お客様一人ひとりのライフスタイルに<br />
                    寄り添ったご提案を大切にしています。<br />
                    これからの暮らしを、<br />
                    もっと自由に、もっと心地よく。<br />
                </p>
            </div>
        </div>

        <!-- Coming Soon Display -->
        <div class="coming-soon-container">
            <div class="coming-soon-content">
                <div class="icon-wrapper">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        ></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </div>
                <p class="en">Coming Soon</p>
                <div class="divider"></div>
                <p class="jp-title">物件情報は準備中です</p>
                <p class="desc">
                    現在、公開できる物件情報を準備しております。<br />
                    最新情報は随時更新いたしますので、<br />
                    今しばらくお待ちください。
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .property-section {
        padding: 120px 0;
        background-color: #fff;
        /* Adding subtle background texture or color could help distinguish, 
       but user requested "match existing design" which is minimal. 
       Let's keep it white or very subtle gray. */
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 24px;
    }

    /* Header Layout */
    .header-content {
        display: flex;
        justify-content: center;
        gap: 60px;
        margin-bottom: 80px;
        flex-direction: row-reverse; /* Title Right, Text Left */
    }

    .title-area,
    .message-area {
        padding: 20px;
        /* Removed background-color as requested */
    }

    .vertical-title {
        writing-mode: vertical-rl;
        font-family: "Cormorant Garamond", serif; /* More stylish english font? */
        font-size: 48px;
        font-weight: 300;
        letter-spacing: 0.1em;
        line-height: 1;
        color: #111;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center vertically in the block */
        align-items: center;
        border-left: 1px solid #eee; /* Subtle design element? or clean */
        padding-left: 20px;
    }

    .vertical-title .main {
        font-size: 56px;
        margin-left: 16px; /* In vertical-rl this pushes it Left (visually) or Right?
                            Vertical: flow is Right to Left.
                            If we want "Properties" to be the Right-most line.
                            And "取扱物件" to be the Left line.
                         */
        letter-spacing: 0.05em;
    }

    .vertical-title .sub {
        font-family: "Noto Serif JP", serif;
        font-size: 16px;
        color: #666;
        letter-spacing: 0.3em;
        margin-top: 20px; /* Gap between lines */
    }

    .vertical-text {
        writing-mode: vertical-rl;
        font-family: "Noto Serif JP", serif;
        font-size: 15px;
        line-height: 2.4;
        letter-spacing: 0.12em;
        color: #444;
        height: 300px;
        text-align: justify;
    }

    /* Coming Soon Styles */
    .coming-soon-container {
        padding: 80px 40px;
        text-align: center;
        background-color: #fafafa; /* Very light gray for distinction */
        border: 1px solid #eee;
        margin-top: 40px;
    }

    .coming-soon-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

    .icon-wrapper {
        color: #ccc;
        margin-bottom: 8px;
    }

    .en {
        font-family: "Cormorant Garamond", serif;
        font-size: 56px;
        letter-spacing: 0.1em;
        color: #ccc;
        font-weight: 300;
        line-height: 1;
    }

    .divider {
        width: 40px;
        height: 1px;
        background-color: #ddd;
        margin: 8px 0;
    }

    .jp-title {
        font-family: "Noto Serif JP", serif;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.2em;
        color: #333;
    }

    .desc {
        font-family: "Noto Serif JP", serif;
        font-size: 14px;
        color: #888;
        line-height: 2;
        letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
        .header-content {
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }

        .title-area,
        .message-area {
            width: 100%;
            height: auto;
            padding: 0;
        }

        .vertical-title {
            writing-mode: horizontal-tb;
            height: auto;
            text-align: center;
            flex-direction: column;
            border-left: none;
            border-bottom: 1px solid #eee;
            padding: 0 0 20px 0;
        }

        .vertical-title .main {
            margin-left: 0;
            font-size: 40px;
        }

        .vertical-title .sub {
            margin-top: 8px;
        }

        .vertical-text {
            writing-mode: horizontal-tb;
            height: auto;
            text-align: center;
            line-height: 2.2;
        }

        .coming-soon-container {
            padding: 60px 20px;
        }

        .en {
            font-size: 40px;
        }
    }
</style>
