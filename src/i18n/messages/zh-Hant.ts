import type { Messages } from "../types";

export const zhHant: Messages = {
  localeLabel: "繁體中文",
  brand: "水印大師",
  meta: {
    home: {
      title: "水印大師 · 為照片，留下你的印記",
      description:
        "水印大師，為照片留下你的印記。探索經典影像、旅行郵票等八款浮水印，編輯拍攝資訊，精修照片，在裝置本機完成創作。",
    },
    privacy: {
      title: "隱私政策 · 水印大師",
      description:
        "了解水印大師如何處理照片、EXIF 拍攝資訊、Apple 登入、應用程式內購買與故障診斷資料，以及如何聯絡我們管理你的資訊。",
    },
  },
  common: {
    skipToMain: "跳至主要內容",
    skipToPolicy: "跳至隱私政策內文",
    home: "產品首頁",
    privacy: "隱私政策",
    exploreStyles: "向下探索浮水印樣式",
  },
  header: {
    brandAria: "水印大師首頁",
    navAria: "主導覽",
    navStyles: "浮水印美學",
    navDetails: "創作細節",
    navPrivacy: "隱私政策",
    cta: "體驗浮水印",
    backToHome: "返回產品首頁",
    languageAria: "切換語言",
    languageMenuAria: "語言清單",
  },
  footer: {
    tagline: "留住瞬間，也留下故事。",
    navAria: "頁尾導覽",
    contact: "聯絡我們",
    copyright: "© 2026 水印大師",
  },
  hero: {
    introNote: "獻給每一次認真按下快門的你",
    titleLines: ["為照片，", "留下你的印記"],
    titleMark: "。",
    description:
      "照片記住瞬間，浮水印留下故事。\n把拍攝的參數、走過的地方和當時的心情，一起裝進畫面裡。",
    primaryCta: "親手試一試",
    secondaryCta: "看看浮水印樣式",
    footnote: "照片在本機處理，創作安心一點。",
    artAria: "水印大師作品展示",
    backCaption: "屬於你的影像記憶",
    printTitle: "花開的時候",
    printStory: "把這一刻，留在光裡。",
    tagSmall: "照片裡的小細節",
    tagStrong: "每一幀，都有來處。",
    signature: "好照片，值得一個落款。",
    stampLines: ["留住", "此刻"],
    photoAlt: "陽光下，黃色與紫色的花朵簇擁成一片花園",
    bottomLead: "用你喜歡的方式，",
    bottomLeadStrong: "重新認識一張照片。",
    chips: ["浮水印樣式", "拍攝資訊", "照片精修", "本機匯出"],
  },
  styles: {
    kicker: "浮水印，是照片的另一種表達",
    titleLines: ["同一個瞬間，", "不止一種模樣。"],
    blurb:
      "克制的留白，完整的拍攝參數，\n或一張寄給自己的旅行郵票。\n找到適合這張照片的那一個。",
    filterAria: "依方案篩選浮水印",
    filterAll: "全部樣式",
    filterBasic: "基本樣式",
    filterPro: "Pro 樣式",
    labelAll: "全部",
    labelBasic: "基本",
    labelPro: "Pro",
    hint: "點開照片，看看細節",
    tierPro: "Pro",
    tierBasic: "基本",
    count: "正在顯示{label} {count} 款浮水印樣式",
    closeAria: "關閉浮水印預覽",
    dialogPro: "Pro 樣式",
    dialogBasic: "基本樣式",
    items: {
      classic: {
        name: "經典影像",
        description: "品牌、參數與描述，讓每個瞬間都有完整的記錄。",
        tagline: "品牌、參數與描述",
        alt: "經典影像浮水印，白色底框中展示品牌、標題與相機參數",
      },
      hasselblad: {
        name: "哈蘇簽名",
        description: "簡潔簽名與相機標識，給畫面更多呼吸的空間。",
        tagline: "簡潔簽名與相機標識",
        alt: "哈蘇簽名浮水印，用簡潔相機標識點綴花園照片",
      },
      "postage-stamp": {
        name: "旅行郵票",
        description: "用郵票畫框、地點與拍攝時間，收藏旅途中的一站。",
        tagline: "把旅行裝進一枚郵票",
        alt: "旅行郵票浮水印，帶有齒孔邊框、地點與日期",
      },
      "centered-camera": {
        name: "留白經典",
        description: "居中品牌與拍攝參數，以留白襯托影像。",
        tagline: "留一點白，給畫面呼吸",
        alt: "留白經典浮水印，照片下方居中排列品牌與拍攝參數",
      },
      "hasselblad-frame": {
        name: "哈蘇畫框",
        description: "帶畫框的簽名版面，讓照片像一張收藏級畫片。",
        tagline: "為喜歡的照片，認真裝裱",
        alt: "哈蘇畫框浮水印，畫框與簽名環繞花園照片",
      },
      "profile-camera": {
        name: "個人相機",
        description: "個人資訊與拍攝參數，讓照片擁有你的署名。",
        tagline: "鏡頭之後，也有你的名字",
        alt: "個人相機浮水印，展示個人署名與照片拍攝資訊",
      },
      "airmail-stamp": {
        name: "航空郵票",
        description: "四邊齒孔、標題、地點與日期，像一封來自遠方的信。",
        tagline: "一封來自遠方的影像來信",
        alt: "航空郵票浮水印，四邊齒孔搭配標題、地點與日期",
      },
      "minimal-camera": {
        name: "留白紀實",
        description: "左對齊相機標識與拍攝參數，安靜地記錄真實。",
        tagline: "讓記錄，回到簡單",
        alt: "留白紀實浮水印，左對齊相機標識與照片參數",
      },
    },
  },
  playground: {
    kicker: "一點細節，很有你的感覺",
    titleLines: ["你的照片。", "你的表達方式。"],
    blurb: "換一種版式，寫下一句話。\n在這裡，先感受浮水印的變化。",
    stageLabel: "即時預覽",
    demoBrand: "Photo diary",
    initialCaption: "花開的時候",
    defaultCaption: "給時光一個落款",
    location: "上海 · 某個晴天",
    stageFootnote: "讓一張照片，多一點自己的樣子。",
    controlsTitle: "浮水印工作台",
    controlsBadge: "網頁演示",
    layoutLegend: "選擇一種版式",
    layoutClassic: "經典",
    layoutMinimal: "留白",
    layoutStamp: "郵票",
    captionLabel: "給照片一句話",
    captionLimit: 18,
    toneLegend: "畫框色調",
    toneLight: "紙白",
    toneDark: "墨黑",
    saturationLabel: "色彩飽和度",
    saturationLow: "黑白",
    saturationHigh: "鮮明",
    reset: "恢復初始效果",
    disclaimer:
      "此處展示版式與調色互動。完整樣式、照片匯入與匯出，請在應用程式內體驗。",
    photoAlt: "用於體驗浮水印的黃色與紫色花園照片",
  },
  workflow: {
    kicker: "幾步就好",
    title: "從一張照片，到一張作品。",
    blurb: "不必反覆切換應用程式，\n在同一個地方完成落款與精修。",
    steps: [
      {
        index: "01",
        title: "選擇照片",
        body: "從相簿一次匯入多張，整組一起編輯。",
      },
      {
        index: "02",
        title: "挑一種樣式",
        body: "八款浮水印版式，基本與 Pro 各有風格。",
      },
      {
        index: "03",
        title: "寫下你的落款",
        body: "標題、描述、地點、拍攝參數與相機 Logo，隨心編輯。",
      },
      {
        index: "04",
        title: "精修與匯出",
        body: "調整光影色彩與細節，匯出高解析原圖儲存到相簿。",
      },
    ],
  },
  details: {
    kicker: "從按下快門，到分享之前",
    title: "讓創作，順手一點。",
    blurb: "把繁瑣留給工具，\n把注意力還給照片。",
    exifFocal: "焦距",
    exifAperture: "光圈",
    exifShutter: "快門",
    exifIso: "感光度",
    exifDate: "日期",
    exifLocation: "地點",
    exifAuto: "自動讀取",
    exifConfirm: "來自照片的拍攝資訊",
    exifTitle: "每一次快門，都有跡可循。",
    exifBody:
      "讀取照片的拍攝資訊，把焦距、光圈、快門、感光度、日期與地點帶入浮水印。標題、描述與地點，也能依你的想法編輯。",
    exifNote: "拍攝資訊讀取可在 App 設定中關閉",
    retouchTitle: "調到你記憶裡的那束光。",
    retouchBody:
      "在 Pro 中調整光線、色彩與細節，精修後再加入浮水印，讓畫面與落款自然地融在一起。",
    retouchBadge: "Pro 照片精修",
    retouchHint: "輕點工具組，查看參數",
    retouchGroups: [
      {
        name: "光線",
        params: ["曝光", "亮度", "對比度", "高光", "暗部", "白色色階", "黑色色階"],
      },
      { name: "色階", params: ["色階", "曲線"] },
      { name: "色彩", params: ["飽和度", "自然飽和度", "色相"] },
      { name: "白平衡", params: ["色溫", "色調"] },
      { name: "色彩分級", params: ["暗部", "中間調", "高光"] },
      {
        name: "HSL 分色",
        params: ["紅", "橙", "黃", "綠", "青", "藍", "紫", "品紅"],
      },
      {
        name: "細節",
        params: ["清晰度", "銳利化", "半徑", "遮色片", "紋理", "去霧"],
      },
      { name: "降噪", params: ["亮度", "顏色"] },
      { name: "效果", params: ["暗角", "顆粒"] },
      { name: "人像", params: ["增強", "提亮", "冷暖", "濃度"] },
      { name: "裁切", params: ["原比例", "1:1", "4:5", "16:9"] },
    ],
  },
  capabilities: {
    kicker: "不止一款浮水印",
    title: "每個細節，都交給你。",
    blurb:
      "從相機 Logo 到字體，從一鍵反色到批次匯出，浮水印的每個角落都可以自己決定。",
    tiles: {
      logos: {
        meta: "29 個品牌",
        title: "相機 Logo 庫",
        body: "Apple、Canon、Nikon、Sony、Leica、Hasselblad、DJI 等主流相機與手機品牌，各有淺色與深色兩版。",
      },
      typography: {
        meta: "22 款字體",
        title: "逐項挑選字體",
        body: "品牌、標題、描述、地點、參數與日期可分別選擇字體，讓每一處文字都有自己的氣質。",
      },
      invert: {
        meta: "一鍵切換",
        title: "整體反色",
        body: "紙白與墨黑一鍵互換，讓浮水印適應明亮的照片，或更深沉的畫面。",
      },
      batch: {
        meta: "整組處理",
        title: "批次匯出",
        body: "一次匯入多張照片，樣式、字體與反色統一套用，匯出時一併儲存。",
      },
      export: {
        meta: "滿幅畫質",
        title: "高畫質匯出",
        body: "以最高品質的 JPEG 匯出，長邊不低於 2048 像素，分享與列印都清晰。",
      },
      languages: {
        meta: "96 種語言",
        title: "本地化格式",
        body: "單位與日期按你所在的地區顯示，焦距、光圈、快門與感光度自然表達。",
      },
    },
    statsAria: "產品能力概覽",
    stats: [
      { value: "8", label: "款浮水印樣式" },
      { value: "29", label: "個相機品牌 Logo" },
      { value: "22", label: "款可選字體" },
      { value: "96", label: "種語言支援" },
    ],
  },
  privacyBanner: {
    kicker: "好好創作，也好好保護",
    titleLines: ["照片屬於你，", "也留在你的裝置裡。"],
    body:
      "浮水印合成與照片精修在本機完成，照片不會由本應用程式上傳。\n照片存取與拍攝資訊讀取，由你決定。",
    link: "了解我們如何處理資料",
  },
  faq: {
    kicker: "開始之前",
    title: "你可能還想知道",
    writeUs: "寫信給我們",
    items: [
      {
        question: "基本樣式和 Pro 有什麼區別？",
        answer: [
          "基本方案包含經典影像、哈蘇簽名、留白經典，以及照片資訊編輯。Pro 包含基本功能、更多專屬浮水印樣式與照片精修功能。實際權益與可購買方案以應用程式內顯示為準。",
        ],
      },
      {
        question: "我的照片會被上傳嗎？",
        answer: [
          "本應用程式不會上傳你選擇的照片，浮水印合成與精修均於裝置本機進行。Apple 登入、購買以及啟用後的故障診斷可能涉及必要的網路通訊，詳情請參閱",
          { link: "隱私政策", href: "/privacy" },
          "。",
        ],
      },
      {
        question: "可以修改照片上的拍攝資訊嗎？",
        answer: [
          "可以。應用程式支援編輯浮水印中的標題、描述、地點與拍攝參數等欄位；不同樣式提供的欄位有所不同。你也可以關閉後續照片的拍攝資訊讀取，手動填寫內容。",
        ],
      },
      {
        question: "這個網頁可以匯出我的照片嗎？",
        answer: [
          "網頁提供浮水印樣式瀏覽、版式與飽和度的互動演示。匯入自己的照片、使用完整浮水印與將成品儲存到相簿，需要於應用程式中操作。",
        ],
      },
    ],
  },
  closing: {
    lead: "下一張照片，留點不一樣。",
    title: "讓瞬間，有你的落款。",
    cta: "開始一場小小的創作",
    note: "水印大師 · 為每一張你喜歡的照片",
  },
  privacy: {
    kicker: "你的照片，由你掌控",
    title: "隱私政策",
    intro:
      "我們希望你了解，哪些資訊用於提供功能，哪些內容留在裝置上，以及你可以如何作出選擇。",
    updatedLabel: "更新日期：",
    updatedValue: "2026 年 11 月 11 日",
    updatedDatetime: "2026-11-11",
    appliesLabel: "適用於：",
    appliesValue: "水印大師 App 與本產品網站",
    tocLabel: "閱讀導覽",
    tocAria: "隱私政策章節",
    contactLabel: "隱私回饋信箱",
    contactEmail: "lemonpaimc@163.com",
    summaryTitle: "先說你最關心的",
    summaryParagraphs: [
      "你選擇的照片於裝置本機完成浮水印合成與精修，本應用程式不會上傳這些照片，也不會將其用於廣告側寫或訓練模型。",
      "Apple 登入與購買由 Apple 提供；啟用故障診斷時，必要的錯誤資訊會傳送至 Sentry。照片內容於本機處理，不代表所有功能都沒有網路通訊。",
    ],
    sections: [
      {
        id: "scope",
        title: "1. 適用範圍與處理目的",
        nodes: [
          {
            kind: "p",
            content: [
              "本政策說明水印大師（以下簡稱「本應用程式」或「我們」）在提供照片預覽、浮水印編輯、照片精修、儲存成品、Apple 登入與購買權益等功能時如何處理資訊，也說明本產品網站的相關處理方式。",
            ],
          },
          {
            kind: "p",
            content: [
              "我們僅為提供對應功能、維護運作穩定性、回應你的請求以及履行必要義務而處理所需資訊。我們不會販售你的照片或個人資訊，也不會以這些資訊進行廣告側寫。",
            ],
          },
        ],
      },
      {
        id: "photos",
        title: "2. 照片與拍攝資訊",
        nodes: [
          { kind: "h3", text: "你選擇的照片" },
          {
            kind: "p",
            content: [
              "當你主動選擇照片時，本應用程式在裝置上讀取照片並完成預覽、浮水印合成或精修。本應用程式不會將所選照片上傳至我們的伺服器或 Sentry。唯有你主動選擇儲存時，成品才會寫入系統相簿。",
            ],
          },
          { kind: "h3", text: "EXIF 與浮水印內容" },
          {
            kind: "p",
            content: [
              "為協助填寫浮水印，我們可能讀取所選照片中既有的 EXIF 資訊，例如相機、鏡頭、焦距、光圈、快門、ISO、拍攝時間，以及照片中可用的地點資訊。EXIF 可能包含敏感的拍攝時間或位置線索，請在分享前檢查照片與浮水印內容。",
            ],
          },
          {
            kind: "p",
            content: [
              "你可以在應用程式設定中關閉後續照片的 EXIF 讀取，也可以手動編輯浮水印中的標題、描述、地點與相機參數。關閉 EXIF 讀取不會自動清除已匯入或已填寫的資訊，請於需要時另行編輯。",
            ],
          },
          {
            kind: "p",
            content: [
              "你保留對照片與文字的權利。本應用程式僅為在裝置上實現你請求的編輯與匯出而處理這些內容，不取得照片所有權，也不會將其用於公開展示或訓練模型。",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "3. 帳號與購買",
        nodes: [
          { kind: "h3", text: "Apple 登入與頭像" },
          {
            kind: "p",
            content: [
              "如果你使用 Apple 登入，本應用程式會接收 Apple 提供的帳號識別碼，以及你授權分享的姓名，用於建立本機登入狀態並顯示帳號資訊。目前的登入流程不會要求電子郵件權限；Apple 可能依其服務規則處理認證資訊。",
            ],
          },
          {
            kind: "p",
            content: [
              "你主動選擇的頭像會儲存於裝置本機，用於個人資料展示。登入資料會儲存於裝置的安全儲存空間中。你可以登出以清除本應用程式儲存的登入資料；登出不等於刪除 Apple 帳號或取消訂閱。",
            ],
          },
          { kind: "h3", text: "應用程式內購買" },
          {
            kind: "p",
            content: [
              "應用程式內購買由 Apple App Store 處理。本應用程式會讀取必要的商品、交易與權益狀態，以顯示方案、驗證或回復購買。支付卡資料由 Apple 管理，本應用程式不會取得完整的支付卡資訊。",
            ],
          },
          {
            kind: "p",
            content: [
              "購買記錄、帳單與訂閱管理請透過 Apple 帳號處理。解除安裝本應用程式或登出不會自動取消訂閱。",
            ],
          },
        ],
      },
      {
        id: "diagnostics",
        title: "4. 故障診斷與執行記錄",
        nodes: [
          {
            kind: "p",
            content: [
              "為定位當機、錯誤與購買驗證等功能異常，本應用程式整合了 Sentry。當正式版本啟用該服務時，必要的錯誤事件與執行記錄會透過網路傳送至 Sentry。",
            ],
          },
          {
            kind: "p",
            content: [
              "診斷資訊可能包括錯誤訊息、堆疊、應用程式版本、裝置與作業系統資訊、相關操作脈絡、請求資訊，以及服務連線產生的網路資訊（例如 IP 位址）。具體範圍隨故障類型與啟用的診斷功能而異。",
            ],
          },
          {
            kind: "p",
            content: [
              "我們不會主動向 Sentry 提供你的姓名或 Apple 登入帳號，也不會啟用照片附件、介面截圖或工作階段重播。我們不會透過故障診斷主動上傳所選照片。診斷記錄仍可能包含與錯誤相關的脈絡，因此請勿在向我們回報問題時主動傳送不必要的敏感內容。",
            ],
          },
          {
            kind: "p",
            content: [
              "診斷資料用於維護應用程式穩定性與排查故障。其伺服器端保留時間取決於實際啟用的服務設定及必要的排錯期限；如需查詢或請求處理相關資訊，請透過本政策所列的電子郵件信箱聯絡我們。詳見",
              {
                link: "Sentry 隱私政策",
                href: "https://sentry.io/privacy/",
                external: true,
              },
              "及其",
              {
                link: "資料處理說明",
                href: "https://docs.sentry.io/platforms/react-native/data-management/data-collected/",
                external: true,
              },
              "。",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "5. 權限與你的選擇",
        nodes: [
          {
            kind: "table",
            aria: "權限用途說明，可橫向捲動",
            head: ["權限或功能", "使用目的", "你的控制方式"],
            rows: [
              ["照片存取", "讀取你選擇的照片或頭像", "透過系統照片選擇器或裝置設定管理授權"],
              ["寫入相簿", "儲存你主動匯出的成品", "在裝置設定中允許或撤銷"],
              ["EXIF 讀取", "填入浮水印的拍攝資訊", "在應用程式設定中關閉後續讀取"],
              ["Apple 登入", "顯示帳號資料並儲存本機登入狀態", "登出，或在 Apple 帳號中管理授權"],
            ],
          },
          {
            kind: "note",
            content: [
              "拒絕或撤銷權限可能使相關功能無法使用，但不影響其他無需該權限的功能。目前的照片編輯流程不需要麥克風或即時定位權限，也不會透過這些權限主動錄音或追蹤位置。",
            ],
          },
        ],
      },
      {
        id: "storage",
        title: "6. 儲存期限與安全",
        nodes: [
          {
            kind: "p",
            content: [
              "照片預覽、編輯中繼檔案、頭像、設定與權益狀態可能儲存於本機記憶體、快取或應用程式儲存空間中。暫存檔案可能在快取清理或系統回收時刪除；其他本機資料則保留至被覆寫、主動清除或依系統規則移除。",
            ],
          },
          {
            kind: "p",
            content: [
              "登出會清除本應用程式儲存的登入資料，並嘗試刪除本應用程式管理的頭像檔案。解除安裝應用程式通常會移除應用程式沙盒資料，但系統安全儲存空間或裝置備份中的資料可能依系統機制保留。已匯出至相簿的成品不會因登出或解除安裝應用程式而自動刪除，請於系統相簿中管理。",
            ],
          },
          {
            kind: "p",
            content: [
              "我們使用裝置安全儲存空間等與處理目的相適應的措施保護資訊。Apple 管理的資料、裝置備份與 Sentry 診斷記錄各有其儲存機制；登出或解除安裝不會自動刪除這些伺服器端記錄。如需協助，請聯絡我們或對應的服務供應商。",
            ],
          },
        ],
      },
      {
        id: "providers",
        title: "7. 第三方服務與跨境處理",
        nodes: [
          {
            kind: "p",
            content: [
              "照片內容於裝置本機處理。下列服務可能為完成認證、購買、故障排查或應用程式更新而處理必要的網路資料：",
            ],
          },
          {
            kind: "list",
            items: [
              [
                { strong: "Apple：" },
                "提供 Apple 登入、App Store 購買、交易與訂閱管理。相關資訊依",
                {
                  link: "Apple 隱私政策",
                  href: "https://www.apple.com/legal/privacy/szh/",
                  external: true,
                },
                "處理。",
              ],
              [
                { strong: "Sentry：" },
                "在啟用故障診斷時接收錯誤與執行資訊，用於排查異常，詳見本政策第 4 節。",
              ],
              [
                { strong: "Expo 更新服務：" },
                "當應用程式檢查或下載更新時，可能與 Expo 更新服務通訊，處理應用程式版本、作業系統、用於判斷更新下載狀態的隨機識別碼，以及連線所需的技術資訊。該過程不用於上傳你的照片。詳見",
                {
                  link: "Expo 隱私政策",
                  href: "https://expo.dev/privacy",
                  external: true,
                },
                "。",
              ],
            ],
          },
          {
            kind: "p",
            content: [
              "上述服務可能依其服務部署在不同國家或地區處理相關資料。具體處理地點、保留安排與保護措施依各服務的實際設定及政策而定。當涉及新增處理方式或需要額外告知、授權時，我們會提供相應說明。",
            ],
          },
          {
            kind: "p",
            content: [
              "除提供上述功能所需的處理、你的主動指示或適用要求外，我們不會主動向其他方提供你的照片或個人資訊。你主動將匯出的照片分享至其他平台後，其後續處理由該平台的規則決定。",
            ],
          },
        ],
      },
      {
        id: "website",
        title: "8. 本產品網站",
        nodes: [
          {
            kind: "p",
            content: [
              "本網站的浮水印預覽、樣式篩選、文字編輯與飽和度調節於瀏覽器中完成。演示不要求你上傳個人照片，也不會將你輸入的演示文字傳送至伺服器；重新整理頁面後會恢復初始狀態。",
            ],
          },
          {
            kind: "p",
            content: [
              "本網站的頁面程式碼未整合廣告、造訪統計、追蹤 Cookie 或本機持久化儲存。字型與演示圖片隨網站本機提供。網站託管服務在交付頁面時可能依其設定記錄 IP 位址、造訪時間、請求路徑與瀏覽器資訊等必要的存取記錄；這些記錄不等同於浮水印演示內容上傳。",
            ],
          },
          {
            kind: "p",
            content: [
              "你點選外部政策連結或電子郵件連結後，將進入相應的第三方網站或郵件應用程式，其資訊處理規則由相關服務另行說明。",
            ],
          },
        ],
      },
      {
        id: "rights",
        title: "9. 你的資訊權利",
        nodes: [
          {
            kind: "p",
            content: [
              "你可以在裝置設定中管理照片權限，在應用程式中關閉 EXIF 讀取、編輯帳號頭像或登出，在相簿中刪除匯出的成品，並透過 Apple 帳號管理登入授權與購買記錄。",
            ],
          },
          {
            kind: "p",
            content: [
              "對於我們能夠控制的個人資訊，你可以聯絡我們提出查閱、複製、更正、刪除、撤回同意或其他適用的資訊權利請求。請說明所涉及的功能與請求內容；我們可能需要進行合理的身分核實，以防他人冒用你的身分操作。",
            ],
          },
          {
            kind: "p",
            content: [
              "我們會在適用要求規定的期限內處理請求，或向你說明需要補充的資訊與無法執行的原因。若相關資料僅存於你的裝置，我們無法遠端存取或代你刪除，但可協助你找到本機管理方式。",
            ],
          },
        ],
      },
      {
        id: "children",
        title: "10. 未成年人保護",
        nodes: [
          {
            kind: "p",
            content: [
              "未成年人應在監護人的指導與同意下使用本應用程式。我們不會以故障診斷或產品演示為目的主動索取兒童個人資訊。若監護人認為未成年人在未獲得適當同意的情況下向我們提供了個人資訊，請透過電子郵件信箱聯絡我們，我們會核實並採取適當措施。",
            ],
          },
        ],
      },
      {
        id: "updates",
        title: "11. 政策更新",
        nodes: [
          {
            kind: "p",
            content: [
              "我們可能隨著功能與資料處理方式的變化更新本政策，並於頁面標明更新日期。對於處理目的、資訊範圍或共享方式等實質變更，我們會透過應用程式內或商店頁面提供相應告知；依法需要另行徵得同意者，將履行相應程序。",
            ],
          },
        ],
      },
      {
        id: "contact",
        title: "12. 聯絡我們",
        nodes: [
          {
            kind: "contact",
            intro: ["如對本政策有疑問，或希望就你的個人資訊提出請求，請聯絡水印大師開發者："],
            email: "lemonpaimc@163.com",
            note: [
              "電子郵件主旨可註明「水印大師隱私回饋」。為便於定位問題，可提供應用程式版本、裝置系統與相關功能說明；請勿附上密碼、完整付款資料或不必要的私人照片。",
            ],
          },
        ],
      },
    ],
  },
};
