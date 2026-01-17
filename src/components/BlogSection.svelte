<script lang="ts">
    // Mock Data for the Blog/Event Slider
    const blogPosts = [
        {
            id: 1,
            image: "/images/concept1a.jpg",
            tag: "SHOWHOME",
            location: "@鹿児島市東谷山",
            title: "【予約制見学会】平屋の暮らしを体感！ショーホームオープン",
            date: "1/13(火)〜6/14(日)",
        },
        {
            id: 2,
            image: "/images/store-exterior.jpg",
            tag: "見学会",
            location: "@鹿児島市吉野町",
            title: "【予約制見学会】南北に風が抜ける薪ストーブのある平屋",
            date: "1/25(日)",
        },
        {
            id: 3,
            image: "/images/gallery-3.jpg",
            tag: "abc",
            location: "@鹿児島市東谷山",
            title: "【予約制見学会】ショーホームグランドオープン！",
            date: "1/10.11.12(月祝)",
        },
        {
            id: 4,
            image: "/images/gallery-2.jpg",
            tag: "EVENT",
            location: "@鹿児島市",
            title: "家づくり相談会を開催します",
            date: "毎週土日開催",
        },
        {
            id: 5,
            image: "/images/store-interior-1.jpg",
            tag: "BLOG",
            location: "",
            title: "スタッフブログ：新しいモデルハウスのインテリアについて",
            date: "2024.02.15",
        },
    ];

    // Double the posts to create seamless loop effect
    const displayPosts = [...blogPosts, ...blogPosts];
</script>

<section class="blog-section">
    <div class="container-fluid">
        <div class="blog-header">
            <h2 class="section-title">ブログ</h2>
            <a href="/blog" class="view-more">View More</a>
        </div>

        <div class="marquee-container">
            <div class="marquee-track">
                {#each displayPosts as post, i}
                    <div class="marquee-item">
                        <div class="blog-card">
                            <div class="image-wrapper">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                />
                                <span class="tag">{post.tag}</span>
                            </div>
                            <div class="content">
                                <h3 class="post-title">{post.title}</h3>
                                <p class="post-meta">
                                    {post.date}
                                    {post.location}
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .blog-section {
        padding: 100px 0;
        background-color: #fff;
        overflow: hidden;
        position: relative; /* Ensure stacking context */
        z-index: 1;
    }

    .container-fluid {
        width: 100%;
        max-width: 100%;
        padding: 0;
    }

    .blog-header {
        position: relative; /* Explicitly relative to avoid weird sticky behavior */
        text-align: center;
        margin-bottom: 60px;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 24px;
        background-color: transparent; /* Ensure no weird background issues */
    }

    .section-title {
        font-family: "Noto Serif JP", serif;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 16px;
        letter-spacing: 0.1em;
        color: #000;
    }

    .view-more {
        display: inline-block;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #666;
        text-decoration: none;
        border-bottom: 1px solid #666;
        padding-bottom: 4px;
        transition: color 0.3s;
    }

    .view-more:hover {
        color: #000;
        border-color: #000;
    }

    /* Marquee Styles */
    .marquee-container {
        overflow: hidden;
        width: 100%;
        display: flex;
        position: relative;
        z-index: 2; /* Ensure marquee is above/below correctly? */
    }

    .marquee-track {
        display: flex;
        gap: 32px;
        width: max-content;
        animation: scroll 40s linear infinite;
        padding-left: 32px;
    }

    .marquee-container:hover .marquee-track {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    .marquee-item {
        flex-shrink: 0;
        width: 400px;
    }

    .blog-card {
        display: flex;
        flex-direction: column;
        gap: 16px;
        cursor: pointer;
        transition: opacity 0.3s;
    }

    .blog-card:hover {
        opacity: 0.8;
    }

    .image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 4/3;
        overflow: hidden;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .blog-card:hover .image-wrapper img {
        transform: scale(1.05);
    }

    .tag {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #666;
        color: white;
        padding: 6px 16px;
        font-size: 12px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .post-title {
        font-size: 18px;
        line-height: 1.6;
        font-weight: 500;
        font-family: "Noto Serif JP", serif;
        color: #111;
    }

    .post-meta {
        font-size: 14px;
        color: #888;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        .blog-section {
            padding: 60px 0;
        }

        .marquee-item {
            width: 300px;
        }

        .marquee-track {
            gap: 20px;
            animation-duration: 30s;
        }

        .section-title {
            font-size: 24px;
        }
    }
</style>
