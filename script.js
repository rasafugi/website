/**
 * =========================================
 * script.js - 網站互動與動態效果
 * =========================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------
    // 1. 初始化 AOS (Animate On Scroll)
    // -----------------------------------------
    // 這是實現您需求的「多樣的動態效果」的核心。
    // 它會讓您在 HTML 中添加了 data-aos="..." 屬性的元素，在進入視窗時觸發動畫。
    AOS.init({
        // 設定動畫持續時間 (毫秒)
        duration: 1200, 
        // 延遲時間 (毫秒)
        delay: 50, 
        // 觸發動畫的偏移量 (像素)
        offset: 100,
        // 只在向下捲動時觸發動畫
        once: true,
        // 是否啟用手機上的動畫
        disable: 'mobile' 
    });


    // -----------------------------------------
    // 2. 導航平滑捲動 (Smooth Scroll)
    // -----------------------------------------
    // 讓使用者點擊導航鏈結時，頁面能平穩地捲動到目標區塊，提升使用者體驗。
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止預設的錨點跳轉行為
            e.preventDefault();

            // 獲取目標區塊的 ID (例如 #about, #skills)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 使用 window.scrollTo 實現平滑捲動
                window.scrollTo({
                    top: targetElement.offsetTop - (targetId === '#hero' ? 0 : 50), // 減去 50px 給導航預留空間
                    behavior: 'smooth'
                });
            }
        });
    });

    // -----------------------------------------
    // 3. (選作) 英雄區塊的文字打字機效果
    // -----------------------------------------
    // 為您的 Tagline 增加一個醒目的動態效果
    const taglineElement = document.querySelector('.tagline');
    const originalText = taglineElement.textContent;
    taglineElement.textContent = ''; // 清空原始文字準備動畫
    let i = 0;
    
    // 如果想要打字機效果，請取消註釋以下程式碼
    /*
    function typeWriter() {
        if (i < originalText.length) {
            taglineElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 70); // 調整速度 (毫秒)
        } else {
            // 打完後可以執行其他效果，例如閃爍光標
            // taglineElement.classList.add('finished-typing');
        }
    }
    
    // 延遲啟動打字機效果，等頁面基本載入完成
    setTimeout(typeWriter, 1500); 
    */

});