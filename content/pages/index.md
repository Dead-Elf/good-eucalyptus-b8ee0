---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-b
    backgroundSize: full
    actions: []
    backgroundImage:
      type: BackgroundImage
      url: /images/DE_Banner.png
      backgroundSize: contain
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 85
    styles:
      self:
        height: auto
        width: full
        padding:
          - pt-20
          - pb-96
          - pr-0
          - pl-0
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
    quote: >
      Your one stop shop for TCGs, Collectible Figures, Board Games, Accessories
      and so much more!
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-2
          - pb-2
          - pr-4
          - pl-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
  - colors: colors-c
    elementId: ''
    title: Products
    images:
      - type: ImageBlock
        url: /images/pokemon.png
        altText: Pokémon
      - type: ImageBlock
        url: /images/Capture-1024x1022.png
        altText: Image two
      - type: ImageBlock
        url: /images/dragonball-b782a698.png
        altText: Image three
      - type: ImageBlock
        url: /images/wixoss.png
        altText: Image four
      - url: /images/vg_logo.png
        altText: altText of the image
        elementId: ''
        type: ImageBlock
      - url: /images/fleshblood.png
        altText: altText of the image
        elementId: ''
        type: ImageBlock
      - url: /images/pngwing.com.png
        altText: altText of the image
        elementId: ''
        type: ImageBlock
      - url: /images/metazoo.png
        altText: altText of the image
        elementId: ''
        type: ImageBlock
      - url: /images/Warhammer.png
        elementId: ''
        type: ImageBlock
        altText: Warhammer
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
          - pt-2
          - pb-2
          - pl-4
          - pr-4
        justifyContent: center
        borderColor: border-complementary
        borderWidth: 1
        borderStyle: none
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - colors: colors-c
    elementId: ''
    subtitle: Collectibles & Accessories
    images:
      - type: ImageBlock
        url: /images/20220319_132502.jpg
        altText: Image one
        caption: Anime figures
      - type: ImageBlock
        url: /images/20220319_132447.jpg
        altText: Image two
        caption: Accessories
      - type: ImageBlock
        url: /images/20220221_180705.jpg
        altText: Image three
        caption: Plushies
      - type: ImageBlock
        url: /images/20220319_132124.jpg
        altText: Image four
        caption: Various collectibles figures
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
          - pt-2
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - colors: colors-e
    elementId: ''
    title: Store Gallery
    subtitle: Store Front and Play Space
    images:
      - type: ImageBlock
        url: /images/3.jpg
        altText: Image one
        caption: Image one caption
      - type: ImageBlock
        url: /images/2.jpg
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: /images/1.jpg
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: /images/4.jpg
        altText: Image four
        caption: Image four caption
    spacing: 16
    columns: 4
    aspectRatio: '4:3'
    showCaption: false
    enableHover: true
    styles:
      self:
        height: auto
        width: full
        padding:
          - pt-12
          - pb-2
          - pl-4
          - pr-4
        justifyContent: center
        borderColor: border-secondary
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
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
          - pt-2
          - pb-2
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderColor: border-complementary
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - colors: colors-c
    elementId: ''
    variant: variant-a
    title: Testimonials
    subtitle: ''
    testimonials:
      - quote: >
          "Easily the best store in and around Charlotte for Pokémon! Every
          Saturday night then do a Pokémon night which we have become regulars
          at now. They are also the only place I have found that has a huge
          selection of plushies and anime products. If you haven’t been here you
          have to give them a shot!"
        name: Derek Dilbeck (Derek Media)
        title: Local Guide
        image:
          type: ImageBlock
          altText: A man fishing
      - quote: >
          “I've never been to a card shop before in my life so I'm so glad that
          my 1st experience has been Dead Elf. They have an amazing and fun
          atmosphere, tons of product for pretty much every card game and if
          you're not into that they also have comic books, funko pops, plushies
          and much more. I've met some new people here that I'm glad to call
          friends and I visit the store at a weekly basis. Love This Place!!!”
        name: Yubanny Lopez
        image:
          type: ImageBlock
          altText: Hilary ouse
      - quote: >
          “Best Card Store in Charlotte! All kinds of Pokémon cards and
          everything you could need as a collector! Such a clean and welcoming
          environment! Also, they sell and buy individual Pokémon cards
          EXCLUSIVE ONLY  I believe! And host events for trading! Definitely the
          place to go!”
        name: Joseph Walsh
        image:
          altText: Person photo
        elementId: ''
        styles:
          name:
            fontWeight: 400
            fontStyle: normal
          title:
            fontWeight: 400
            fontStyle: normal
      - quote: >
          “Went with my son to play Pokemon. They couldn't have been nicer!! The
          space is  super clean and they have everything! TCG's, comics, 
          miniature games, will definitely be going back again and again”
        name: Dan
        image:
          altText: Person photo
        elementId: ''
        styles:
          name:
            fontWeight: 400
            fontStyle: normal
          title:
            fontWeight: 400
            fontStyle: normal
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-2
          - pb-2
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
