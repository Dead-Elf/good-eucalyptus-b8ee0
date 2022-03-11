---
title: Home
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-0
          - pb-6
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-d
    backgroundSize: inset
    subtitle: Fresh. Better. Faster.
    actions: []
    backgroundImage:
      type: BackgroundImage
      url: /images/deadelf_standing_New_arivals_Hero_tile.png
      backgroundSize: contain
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 85
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-20
          - pb-96
          - pr-12
          - pl-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: QuoteSection
    colors: colors-d
    quote: >-
      “It’s great to see someone taking action while still maintaining a
      sustainable fish supply to home cooks.”
    name: Isabelle Parks
    title: Head chef at Parks
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pr-4
          - pl-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
  - elementId: ''
    colors: colors-c
    variant: variant-a
    title: Seasonal adventures
    actions:
      - type: Link
        label: See all adventures
        url: /blog
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/post-five.md
      - content/pages/blog/post-four.md
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedPostsSection
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    showAuthor: false
  - type: TextSection
    colors: colors-e
    variant: variant-a
    text: '## [Follow us on Instagram](https://www.stackbit.com/)'
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-36
          - pr-4
          - pl-4
        justifyContent: center
      text:
        textAlign: center
  - type: FeatureHighlightSection
    colors: colors-d
    backgroundSize: full
    title: Time to leave your desk. Let’s go flying
    text: |
      We’re local, seasonal fisherman, supporting fishing restrictions.
    actions:
      - type: Link
        label: Join adventure
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
    backgroundImage:
      type: BackgroundImage
      url: /images/hero-3.webp
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 90
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-72
          - pr-4
          - pl-4
        justifyContent: flex-start
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Locate Us
    text: ''
    actions:
      - type: Button
        showIcon: true
        icon: arrowRight
        style: primary
        url: >-
          https://www.google.com/maps/place/Dead+Elf+Collectibles/@35.1862592,-80.7598516,17z/data=!4m5!3m4!1s0x885421a6c442e923:0x59a66c0f6dba4dbc!8m2!3d35.1876104!4d-80.7573782
        label: Map Us
        altText: Map Link for Dead Elf
    media:
      type: ImageBlock
      url: /images/location-ad3f6473.png
      altText: Hero image
    backgroundImage: null
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
addTitleSuffix: true
metaTags: []
---
