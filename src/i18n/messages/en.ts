import type { Messages } from "../types";

export const en: Messages = {
  localeLabel: "English",
  brand: "Watermark Master",
  meta: {
    home: {
      title: "Watermark Master · Leave your mark on every photo",
      description:
        "Watermark Master lets you leave your mark on every photo. Explore eight watermarks, from Classic to Travel stamp, edit your shot details, retouch your photos, and create it all locally on your device.",
    },
    privacy: {
      title: "Privacy Policy · Watermark Master",
      description:
        "Learn how Watermark Master handles photos, EXIF shot details, Sign in with Apple, in-app purchases, and diagnostics data, and how to contact us to manage your information.",
    },
  },
  common: {
    skipToMain: "Skip to main content",
    skipToPolicy: "Skip to policy content",
    home: "Home",
    privacy: "Privacy Policy",
    exploreStyles: "Explore watermark styles",
  },
  header: {
    brandAria: "Watermark Master home",
    navAria: "Main navigation",
    navStyles: "Watermark styles",
    navDetails: "Creation details",
    navPrivacy: "Privacy Policy",
    cta: "Try the watermark",
    backToHome: "Back to home",
    languageAria: "Change language",
    languageMenuAria: "Language list",
  },
  footer: {
    tagline: "Keep the moment, and the story too.",
    navAria: "Footer navigation",
    contact: "Contact us",
    copyright: "© 2026 Watermark Master",
  },
  hero: {
    introNote: "For everyone who takes every shutter press seriously",
    titleLines: ["For every photo,", "leave your mark"],
    titleMark: ".",
    description:
      "Photos hold the moment. Watermarks hold the story.\nYour camera settings, the places you've been, and how you felt, all in one frame.",
    primaryCta: "Try it yourself",
    secondaryCta: "See watermark styles",
    footnote: "Photos are processed on your device. Create with peace of mind.",
    artAria: "A Watermark Master showcase",
    backCaption: "A visual memory that's yours",
    printTitle: "When the flowers bloom",
    printStory: "Keep this moment in the light.",
    tagSmall: "The little details in a photo",
    tagStrong: "Every frame comes from somewhere.",
    signature: "A good photo deserves a signature.",
    stampLines: ["Hold", "this moment"],
    photoAlt: "Yellow and purple flowers gathered into a garden under the sun",
    bottomLead: "In the way you love,",
    bottomLeadStrong: "rediscover a photo.",
    chips: ["Watermark styles", "Shot details", "Photo retouch", "Local export"],
  },
  styles: {
    kicker: "A watermark is another way a photo speaks",
    titleLines: ["One moment,", "many ways to look."],
    blurb:
      "A quiet amount of white space, the full camera settings,\nor a travel stamp you mail to yourself.\nFind the one that suits this photo.",
    filterAria: "Filter watermarks by plan",
    filterAll: "All styles",
    filterBasic: "Basic styles",
    filterPro: "Pro styles",
    labelAll: "All",
    labelBasic: "Basic",
    labelPro: "Pro",
    hint: "Open a photo to see the details",
    tierPro: "Pro",
    tierBasic: "Basic",
    count: "Showing {label} {count} watermark styles",
    closeAria: "Close watermark preview",
    dialogPro: "Pro style",
    dialogBasic: "Basic style",
    items: {
      classic: {
        name: "Classic",
        description: "Brand, settings, and a caption, so every moment is fully recorded.",
        tagline: "Brand, settings, and a caption",
        alt: "Classic watermark showing brand, title, and camera settings in a white frame",
      },
      hasselblad: {
        name: "Hasselblad signature",
        description: "A simple signature and camera mark, giving the image more room to breathe.",
        tagline: "A simple signature and camera mark",
        alt: "Hasselblad signature watermark accenting a garden photo with a simple camera mark",
      },
      "postage-stamp": {
        name: "Travel stamp",
        description: "A stamp frame, location, and time, collecting one stop of your journey.",
        tagline: "A journey inside a single stamp",
        alt: "Travel stamp watermark with a perforated border, location, and date",
      },
      "centered-camera": {
        name: "Classic white frame",
        description: "Brand and shot settings centered, set off by white space.",
        tagline: "A little white space to let the image breathe",
        alt: "Classic white frame watermark with brand and shot settings centered below the photo",
      },
      "hasselblad-frame": {
        name: "Hasselblad frame",
        description: "A framed signature layout that makes a photo feel like a collectible print.",
        tagline: "Framed carefully for a photo you love",
        alt: "Hasselblad frame watermark with a frame and signature surrounding a garden photo",
      },
      "profile-camera": {
        name: "Personal camera",
        description: "Your personal details and shot settings, so the photo carries your name.",
        tagline: "Your name behind the lens, too",
        alt: "Personal camera watermark showing a personal signature and photo shot details",
      },
      "airmail-stamp": {
        name: "Airmail stamp",
        description: "Perforated edges, title, location, and date, like a letter from far away.",
        tagline: "An image letter from somewhere far away",
        alt: "Airmail stamp watermark with perforated edges alongside a title, location, and date",
      },
      "minimal-camera": {
        name: "Documentary frame",
        description: "A left-aligned camera mark and shot settings, quietly recording what's real.",
        tagline: "Record simply, back to basics",
        alt: "Documentary frame watermark with a left-aligned camera mark and photo settings",
      },
    },
  },
  playground: {
    kicker: "A little detail that feels like you",
    titleLines: ["Your photo.", "Your way of saying it."],
    blurb: "Switch to another layout, write a line or two.\nGet a feel for how a watermark changes things.",
    stageLabel: "Live preview",
    demoBrand: "Photo diary",
    initialCaption: "When the flowers bloom",
    defaultCaption: "Give time a signature",
    location: "Shanghai · a clear day",
    stageFootnote: "Give a photo a little more of yourself.",
    controlsTitle: "Watermark workbench",
    controlsBadge: "Web demo",
    layoutLegend: "Choose a layout",
    layoutClassic: "Classic",
    layoutMinimal: "Minimal",
    layoutStamp: "Stamp",
    captionLabel: "Give the photo a line",
    captionLimit: 32,
    toneLegend: "Frame tone",
    toneLight: "Paper white",
    toneDark: "Ink black",
    saturationLabel: "Color saturation",
    saturationLow: "Black & white",
    saturationHigh: "Vivid",
    reset: "Reset to default",
    disclaimer:
      "This shows layout and color interaction. For full styles, photo import, and export, try the app.",
    photoAlt: "A yellow and purple garden photo for trying out watermarks",
  },
  workflow: {
    kicker: "Just a few steps",
    title: "From a photo, to a finished piece.",
    blurb: "No switching between apps,\nand signature and retouch in one place.",
    steps: [
      {
        index: "01",
        title: "Choose your photos",
        body: "Import several from the album at once and edit the whole set together.",
      },
      {
        index: "02",
        title: "Pick a style",
        body: "Eight watermark layouts, with Basic and Pro each holding its own look.",
      },
      {
        index: "03",
        title: "Write your caption",
        body: "Edit the title, description, location, shooting parameters and camera logo just as you like.",
      },
      {
        index: "04",
        title: "Retouch and export",
        body: "Adjust light, color and detail, then export a high-resolution image to the photo album.",
      },
    ],
  },
  details: {
    kicker: "From shutter press to just before sharing",
    title: "Let creating feel a little easier.",
    blurb: "Leave the fuss to the tool,\nand give your attention back to the photo.",
    exifFocal: "Focal length",
    exifAperture: "Aperture",
    exifShutter: "Shutter",
    exifIso: "ISO",
    exifDate: "Date",
    exifLocation: "Location",
    exifAuto: "Read automatically",
    exifConfirm: "From your photo's shooting data",
    exifTitle: "Every shutter press leaves a trace.",
    exifBody:
      "Read a photo's shooting data and carry the focal length, aperture, shutter, ISO, date and location into the watermark. Titles, descriptions and locations can be edited just as you like.",
    exifNote: "Shooting-data reading can be turned off in the app settings",
    retouchTitle: "Tune it to the light you remember.",
    retouchBody:
      "Adjust light, color and detail in Pro, then add the watermark after retouching, so the image and its signature settle together naturally.",
    retouchBadge: "Pro photo retouch",
    retouchHint: "Tap a tool group to see its controls",
    retouchGroups: [
      {
        name: "Light",
        params: ["Exposure", "Brightness", "Contrast", "Highlights", "Shadows", "Whites", "Blacks"],
      },
      { name: "Levels", params: ["Levels", "Curves"] },
      { name: "Color", params: ["Saturation", "Vibrance", "Hue"] },
      { name: "White balance", params: ["Temperature", "Tint"] },
      { name: "Color grading", params: ["Shadows", "Midtones", "Highlights"] },
      {
        name: "HSL",
        params: ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Purple", "Magenta"],
      },
      {
        name: "Detail",
        params: ["Clarity", "Sharpen", "Radius", "Masking", "Texture", "Dehaze"],
      },
      { name: "Noise reduction", params: ["Luminance", "Color"] },
      { name: "Effects", params: ["Vignette", "Grain"] },
      { name: "Portrait", params: ["Enhance", "Brighten", "Warmth", "Intensity"] },
      { name: "Crop", params: ["Original", "1:1", "4:5", "16:9"] },
    ],
  },
  capabilities: {
    kicker: "More than a single watermark",
    title: "Every detail, handed over to you.",
    blurb:
      "From camera logos to typefaces, from one-tap inversion to batch export, every corner of the watermark is yours to decide.",
    tiles: {
      logos: {
        meta: "29 brands",
        title: "Camera logo library",
        body: "Apple, Canon, Nikon, Sony, Leica, Hasselblad, DJI and more — the major camera and phone brands, each in a light and a dark version.",
      },
      typography: {
        meta: "22 typefaces",
        title: "Choose each typeface",
        body: "Pick the typeface for the brand, title, description, location, shooting data and date separately, so every line has its own character.",
      },
      invert: {
        meta: "One-tap switch",
        title: "Invert the whole mark",
        body: "Swap paper white and ink black in one tap, so the mark sits well on a bright photo or a moodier frame.",
      },
      batch: {
        meta: "Edit the whole set",
        title: "Batch export",
        body: "Import several photos at once — style, typeface and inversion apply together, and they save together on export.",
      },
      export: {
        meta: "Full resolution",
        title: "High-resolution export",
        body: "Export as top-quality JPEG with a long edge of at least 2048 pixels, sharp for sharing and printing alike.",
      },
      languages: {
        meta: "96 languages",
        title: "Localized formatting",
        body: "Units and dates follow your region, and focal length, aperture, shutter and ISO read the way they should.",
      },
    },
    statsAria: "Product capabilities at a glance",
    stats: [
      { value: "8", label: "watermark styles" },
      { value: "29", label: "camera brand logos" },
      { value: "22", label: "typefaces" },
      { value: "96", label: "languages supported" },
    ],
  },
  privacyBanner: {
    kicker: "Create well, and protect well",
    titleLines: ["Your photos are yours,", "and stay on your device."],
    body:
      "Watermark compositing and photo retouching happen on your device, and the app doesn't upload your photos.\nPhoto access and reading shot details are up to you.",
    link: "Learn how we handle data",
  },
  faq: {
    kicker: "Before you start",
    title: "You might also want to know",
    writeUs: "Write to us",
    items: [
      {
        question: "What's the difference between Basic and Pro?",
        answer: [
          "The Basic plan includes Classic, Hasselblad signature, and Classic white frame, plus photo info editing. Pro includes everything in Basic, along with more exclusive watermark styles and photo retouching. Exact entitlements and available plans are shown in the app.",
        ],
      },
      {
        question: "Will my photos be uploaded?",
        answer: [
          "The app doesn't upload the photos you choose; watermark compositing and retouching all happen locally on your device. Sign in with Apple, purchases, and diagnostics once enabled may involve necessary network communication. For details, see the ",
          { link: "Privacy Policy", href: "/privacy" },
          ".",
        ],
      },
      {
        question: "Can I edit the shot details on a photo?",
        answer: [
          "Yes. The app lets you edit fields in the watermark such as title, description, location, and shot settings, and different styles offer different fields. You can also turn off reading shot details for later photos and fill in the details manually.",
        ],
      },
      {
        question: "Can this website export my photos?",
        answer: [
          "The website offers an interactive demo of watermark styles, layout, and saturation. Importing your own photos, using the full watermarks, and saving the result to your photo library all happen in the app.",
        ],
      },
    ],
  },
  closing: {
    lead: "Make the next photo a little different.",
    title: "Give the moment your signature.",
    cta: "Start a small creation",
    note: "Watermark Master · For every photo you love",
  },
  privacy: {
    kicker: "Your photos, in your control",
    title: "Privacy Policy",
    intro:
      "We want you to know which information is used to provide features, what stays on your device, and how you can make choices.",
    updatedLabel: "Updated:",
    updatedValue: "November 11, 2026",
    updatedDatetime: "2026-11-11",
    appliesLabel: "Applies to:",
    appliesValue: "The Watermark Master app and this product website",
    tocLabel: "Contents",
    tocAria: "Privacy policy sections",
    contactLabel: "Privacy feedback email",
    contactEmail: "lemonpaimc@163.com",
    summaryTitle: "First, what matters most to you",
    summaryParagraphs: [
      "The photos you choose are composited and retouched locally on your device. The app doesn't upload them, and doesn't use them for ad profiling or model training.",
      "Sign in with Apple and purchases are provided by Apple; when diagnostics are enabled, necessary error information is sent to Sentry. Local processing of photo content doesn't mean every feature works without network communication.",
    ],
    sections: [
      {
        id: "scope",
        title: "1. Scope and purpose of processing",
        nodes: [
          {
            kind: "p",
            content: [
              "This policy explains how Watermark Master (referred to here as \"the app\" or \"we\") handles information when providing features such as photo preview, watermark editing, photo retouching, saving results, Sign in with Apple, and purchase entitlements, and it also explains how this product website handles information.",
            ],
          },
          {
            kind: "p",
            content: [
              "We process the information we need only to provide the relevant features, keep the app running reliably, respond to your requests, and meet necessary obligations. We don't sell your photos or personal information, and we don't use that information for ad profiling.",
            ],
          },
        ],
      },
      {
        id: "photos",
        title: "2. Photos and shot details",
        nodes: [
          { kind: "h3", text: "The photos you choose" },
          {
            kind: "p",
            content: [
              "When you actively choose a photo, the app reads it on your device to provide preview, watermark compositing, or retouching. The app doesn't upload your chosen photos to our servers or to Sentry. Only when you actively choose to save does the result get written to your system photo library.",
            ],
          },
          { kind: "h3", text: "EXIF and watermark content" },
          {
            kind: "p",
            content: [
              "To help fill in the watermark, we may read existing EXIF information from the photo you choose, such as camera, lens, focal length, aperture, shutter, ISO, capture time, and any location information available in the photo. EXIF can contain sensitive capture-time or location clues, so please check the photo and watermark content before sharing.",
            ],
          },
          {
            kind: "p",
            content: [
              "You can turn off EXIF reading for later photos in the app's settings, and you can also manually edit the title, description, location, and camera settings in the watermark. Turning off EXIF reading doesn't automatically clear information already imported or entered, so edit it separately if needed.",
            ],
          },
          {
            kind: "p",
            content: [
              "You keep your rights to your photos and text. The app processes this content only to carry out the editing and export you request on your device; it doesn't claim ownership of your photos or use them for public display or model training.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "3. Account and purchases",
        nodes: [
          { kind: "h3", text: "Sign in with Apple and profile photo" },
          {
            kind: "p",
            content: [
              "If you use Sign in with Apple, the app receives the account identifier provided by Apple, along with any name you authorize to share, in order to establish a local sign-in state and display account information. The current sign-in flow doesn't request email permission; Apple may handle authentication information under its own service terms.",
            ],
          },
          {
            kind: "p",
            content: [
              "Any profile photo you actively choose is stored locally on your device for profile display. Sign-in data is stored in your device's secure storage. You can sign out to clear the sign-in data saved by the app; signing out doesn't mean deleting your Apple account or canceling a subscription.",
            ],
          },
          { kind: "h3", text: "In-app purchases" },
          {
            kind: "p",
            content: [
              "In-app purchases are handled by the Apple App Store. The app reads the necessary product, transaction, and entitlement status to display plans and to verify or restore purchases. Payment card details are managed by Apple; the app doesn't obtain full payment card information.",
            ],
          },
          {
            kind: "p",
            content: [
              "Purchase history, billing, and subscription management are handled through your Apple account. Uninstalling the app or signing out doesn't automatically cancel a subscription.",
            ],
          },
        ],
      },
      {
        id: "diagnostics",
        title: "4. Diagnostics and runtime logs",
        nodes: [
          {
            kind: "p",
            content: [
              "To diagnose crashes, errors, and feature issues such as purchase verification, the app integrates Sentry. When the service is enabled in a release build, the necessary error events and runtime logs are sent to Sentry over the network.",
            ],
          },
          {
            kind: "p",
            content: [
              "Diagnostic information may include error messages, stack traces, app version, device and operating system information, relevant operation context, request information, and network information produced by connecting to the service (such as IP address). The exact scope varies with the type of failure and the diagnostic features enabled.",
            ],
          },
          {
            kind: "p",
            content: [
              "We don't actively provide Sentry with your name or Apple sign-in account, and we don't enable photo attachments, interface screenshots, or session replay. We don't actively upload your chosen photos through diagnostics. Diagnostic logs may still contain context related to an error, so please don't send unnecessary sensitive content when reporting a problem to us.",
            ],
          },
          {
            kind: "p",
            content: [
              "Diagnostic data is used to keep the app stable and to troubleshoot failures. Its server-side retention period depends on the service configuration actually enabled and the period needed for troubleshooting; to inquire about or request handling of related information, contact us at the email listed in this policy. See the ",
              {
                link: "Sentry Privacy Policy",
                href: "https://sentry.io/privacy/",
                external: true,
              },
              " and its ",
              {
                link: "Data Management",
                href: "https://docs.sentry.io/platforms/react-native/data-management/data-collected/",
                external: true,
              },
              ".",
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "5. Permissions and your choices",
        nodes: [
          {
            kind: "table",
            aria: "Permission usage table, scroll horizontally",
            head: ["Permission or feature", "Purpose", "How you control it"],
            rows: [
              ["Photo access", "Read the photos or profile photo you choose", "Manage authorization through the system photo picker or device settings"],
              ["Write to photo library", "Save the results you actively export", "Allow or revoke in device settings"],
              ["EXIF reading", "Fill in the watermark's shot details", "Turn off future reading in the app's settings"],
              ["Sign in with Apple", "Display account details and save local sign-in state", "Sign out, or manage authorization in your Apple account"],
            ],
          },
          {
            kind: "note",
            content: [
              "Denying or revoking a permission may make related features unavailable, but it doesn't affect other features that don't need that permission. The current photo editing flow doesn't require microphone or real-time location permission, and doesn't use them to actively record audio or track location.",
            ],
          },
        ],
      },
      {
        id: "storage",
        title: "6. Storage periods and security",
        nodes: [
          {
            kind: "p",
            content: [
              "Photo previews, editing intermediate files, profile photos, settings, and entitlement status may be stored in your device's memory, cache, or app storage. Temporary files may be deleted during cache cleanup or system reclamation; other local data is kept until it's overwritten, actively cleared, or removed under system rules.",
            ],
          },
          {
            kind: "p",
            content: [
              "Signing out clears the sign-in data saved by the app and attempts to delete profile photo files managed by the app. Uninstalling the app usually removes app sandbox data, but data in system secure storage or device backups may remain according to system mechanisms. Results already exported to your photo library aren't automatically deleted by signing out or uninstalling the app, so manage them in your system photo library.",
            ],
          },
          {
            kind: "p",
            content: [
              "We protect information using measures such as device secure storage that are appropriate to the purpose of processing. Data managed by Apple, device backups, and Sentry diagnostic records each have their own storage mechanisms; signing out or uninstalling won't automatically delete these server-side records. For assistance, contact us or the relevant service provider.",
            ],
          },
        ],
      },
      {
        id: "providers",
        title: "7. Third-party services and cross-border processing",
        nodes: [
          {
            kind: "p",
            content: [
              "Photo content is processed locally on your device. The following services may process the necessary network data to complete authentication, purchases, troubleshooting, or app updates:",
            ],
          },
          {
            kind: "list",
            items: [
              [
                { strong: "Apple: " },
                "provides Sign in with Apple, App Store purchases, and transaction and subscription management. Related information is handled under the ",
                {
                  link: "Apple Privacy Policy",
                  href: "https://www.apple.com/legal/privacy/szh/",
                  external: true,
                },
                ".",
              ],
              [
                { strong: "Sentry: " },
                "receives error and runtime information when diagnostics are enabled, to troubleshoot anomalies; see Section 4 of this policy.",
              ],
              [
                { strong: "Expo Updates service: " },
                "when the app checks for or downloads updates, it may communicate with the Expo Updates service, processing app version, operating system, a random identifier used to determine update download status, and technical information needed for the connection. This process isn't used to upload your photos. See the ",
                {
                  link: "Expo Privacy Policy",
                  href: "https://expo.dev/privacy",
                  external: true,
                },
                ".",
              ],
            ],
          },
          {
            kind: "p",
            content: [
              "The services above may process related data in different countries or regions according to their deployments. The specific processing locations, retention arrangements, and protection measures depend on each service's actual configuration and policies. Where new processing methods or additional notice or authorization are required, we'll provide the relevant explanation.",
            ],
          },
          {
            kind: "p",
            content: [
              "Except for the processing needed to provide the features above, your active instructions, or applicable requirements, we won't actively provide your photos or personal information to others. Once you actively share exported photos to another platform, its onward handling is governed by that platform's rules.",
            ],
          },
        ],
      },
      {
        id: "website",
        title: "8. This product website",
        nodes: [
          {
            kind: "p",
            content: [
              "The watermark preview, style filtering, text editing, and saturation adjustment on this website all happen in your browser. The demo doesn't require you to upload personal photos, and the demo text you type isn't sent to a server; refreshing the page restores the initial state.",
            ],
          },
          {
            kind: "p",
            content: [
              "The page code for this website doesn't integrate advertising, analytics, tracking cookies, or local persistent storage. Fonts and demo images are served locally with the website. When delivering pages, the website hosting service may, according to its configuration, record necessary access logs such as IP address, access time, request path, and browser information; these records aren't the same as uploading watermark demo content.",
            ],
          },
          {
            kind: "p",
            content: [
              "When you click an external policy link or email link, you'll go to the corresponding third-party website or email app, whose information handling rules are explained separately by those services.",
            ],
          },
        ],
      },
      {
        id: "rights",
        title: "9. Your information rights",
        nodes: [
          {
            kind: "p",
            content: [
              "You can manage photo permissions in device settings, turn off EXIF reading, edit your account profile photo, or sign out in the app, delete exported results in your photo library, and manage sign-in authorization and purchase records through your Apple account.",
            ],
          },
          {
            kind: "p",
            content: [
              "For personal information we can control, you can contact us to request access, a copy, correction, deletion, withdrawal of consent, or other applicable information rights. Please describe the relevant feature and the nature of your request; we may need to carry out reasonable identity verification to prevent someone else from acting under your identity.",
            ],
          },
          {
            kind: "p",
            content: [
              "We'll handle requests within the period required by applicable rules, or explain to you what additional information is needed and why we can't fulfill it. If the relevant data exists only on your device, we can't access it remotely or delete it for you, but we can help you find how to manage it locally.",
            ],
          },
        ],
      },
      {
        id: "children",
        title: "10. Protection of minors",
        nodes: [
          {
            kind: "p",
            content: [
              "Minors should use the app under the guidance and consent of a guardian. We don't actively request children's personal information for the purposes of diagnostics or product demos. If a guardian believes a minor has provided us with personal information without appropriate consent, please contact us by email, and we'll verify and take appropriate measures.",
            ],
          },
        ],
      },
      {
        id: "updates",
        title: "11. Policy updates",
        nodes: [
          {
            kind: "p",
            content: [
              "We may update this policy as features and data handling change, and we'll display the update date on the page. For material changes such as the purpose of processing, the scope of information, or how it's shared, we'll provide the relevant notice in the app or on the store page; where separate consent is required by law, we'll follow the applicable process.",
            ],
          },
        ],
      },
      {
        id: "contact",
        title: "12. Contact us",
        nodes: [
          {
            kind: "contact",
            intro: ["If you have questions about this policy, or wish to make a request about your personal information, please contact the Watermark Master developer:"],
            email: "lemonpaimc@163.com",
            note: [
              "You can use \"Watermark Master privacy feedback\" as the email subject. To help locate the issue, you may provide the app version, device system, and a description of the relevant feature; please don't attach passwords, full payment details, or unnecessary private photos.",
            ],
          },
        ],
      },
    ],
  },
};
