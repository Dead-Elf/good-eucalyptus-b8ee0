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
    subtitle: Holding Text
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
    quote: |
      Holding Text for some phrase
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
  - colors: colors-d
    elementId: ''
    title: Products
    subtitle: What we carry
    images:
      - type: ImageBlock
        url: /images/2__69672.1644349236.jpg
        caption: Pokémon
        altText: Pokémon
      - type: ImageBlock
        url: /images/gallery-2.jpg
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: /images/gallery-3.jpg
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: /images/gallery-4.jpg
        altText: Image four
        caption: Image four caption
    spacing: 16
    columns: 3
    aspectRatio: '16:9'
    showCaption: true
    enableHover: false
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
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
    text: |+
      <p>
      <address>5309 E Independence Blvd.
      Suite F
      Charlotte, NC, 28212
      United States of America</address>
      </p>
      <p>
       Call: 980-207-3003
      </p>

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
  - colors: colors-d
    elementId: ''
    variant: variant-a
    title: ''
    subtitle: ''
    testimonials:
      - quote: >-
          "This team is experienced, personable and just fun to be with. You
          will have the best fishing experience of your life."
        name: Oliver Mills
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/gallery-2.jpg
          altText: A man fishing
      - quote: >
          “I have been fishing steelhead and salmon with the SB for over 5
          years. I have never been disappointed.”
        name: Hilary Ouse
        title: Product Marketing Manager at Acme
        image:
          type: ImageBlock
          url: /images/hilary-ouse.png
          altText: Hilary ouse
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-28
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: TestimonialsSection
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
