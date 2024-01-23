import React from "react";
import Welcome from "../../components/Welcome";
import Section from "../../components/Section";
import ProjectList from "../../components/ProjectList";

import "./style.css";
import skipping from "../../images/skipping.jpg";

const data = {
  videoProjects: [
    {
      title: "A Possession",
      img: "possessed-2.jpg",
      laurels: 3,
      year: "2023",
      type: "personal",
      shortDesc: "Short Film (EN) (Super 16mm) 16\'08\"",
      role: "Director, Writer, Editor",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt27614153/" }
      ],
      embed: "https://player.vimeo.com/video/854042803?h=91fb895bc6",
      description:
        "AKA \"Narcissus\": A mystical horror based off of Nathaniel Hawthorne's Young Goodman Brown. Mysterious forces threaten to tear apart a young couple's hiking honeymoon. A Possession was filmed in partial completion of a degree at the Columbia University School of the Arts Film MFA program. Released at NY Shorts International Film Festival in Oct. 2023, Prod. Ivan Rome, DP Daniel Cho."
    },
    {
      title: "Be Gay Tomorrow",
      img: "gmgd.jpg",
      laurels: 9,
      year: "2022",
      type: "personal",
      shortDesc: "Short Film (EN) 13\'01\"",
      role: "Director, Writer, Editor",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt19813834/" },
        { title: "Distributed Worldwide by Gonella Productions, France", url: "https://gonella-productions.com/begaytomorrow" }
      ],
      embed: "https://player.vimeo.com/video/808790247",
      description:
        "Released at the Montecatini International Short Film Festival in November, 2022. Hannah (Allie McCulloch), single, struggling mother of three, wants to host her parents for Thanksgiving, but her kids seem to keep getting in the way, especially her oldest son, Allen, (Josh Rosenzweig) who wants to come out to his grandparents. Produced by Daniel Beltis and Samantha Lori Glass. DP Hangcheng Xu. We made a new webseries pilot cut in early 2023. 9 Official Selections."
    },
    {
      title: "Missing",
      img: "missing.jpg",
      laurels: 1,
      wins: 3,
      year: "2021",
      type: "personal",
      shortDesc: "Short Film (EN) 4\'51\"",
      role: "Writer, Director, DP",
      embed: "https://player.vimeo.com/video/501150588",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt13876104/" }
      ],
      description:
        "A young girl delivers a bitter message across a beautiful park. 3 Official Selections (including the Oakland Film Festival). 1 Semi-Finalist (Madrid Film Awards). 1 Award Winner (Gladiator Film Festival)."
    },
    {
      title: "Super 180s",
      img: "super180s.jpg",
      laurels: 4,
      wins: 2,
      year: "2020",
      type: "personal",
      shortDesc: "Short Film (EN) 5\'05\"",
      role: "Director, Writer, Editor",
      embed: "https://player.vimeo.com/video/513660162",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt11646262/" }
      ],
      description:
        "A story about implicit bias, a young couple, and a finance bro. Filmed in the financial district in NYC in December 2019. Super 180s was my first semester capstone directing assignment at Columbia University School of the Arts Film MFA. I wrote it with the guidance of writing professor Jamal Joseph and directed it with the guidance of directing professor Ian Olds. DP Erin Ramirez. 5 Official Selections. 1 Semi-Finalist. 1 Award Winner."
    },
    {
      title: "Rehearsal",
      img: "rehearsal.jpg",
      laurels: 2,
      year: "2020",
      type: "personal",
      shortDesc: "Short Film (EN) 4\'40\"",
      role: "Director, Writer, Editor",
      embed: "https://player.vimeo.com/video/449512564",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt14426652/" }
      ],
      description:
        "Official Selection at Carmarthen Bay Film Festival 2020. Emily asks Adrien to accompany her for an upcoming recital. She's got a bigger ask that he doesn't know about. This is the third short exercise I completed for the Columbia Film MFA. Filmed in November 2019 and re-finished post in August 2020. 1 Official Selection at the Carmarthen Bay Film Festival."
    },
    {
      title: "En Rose",
      img: "enrose.jpg",
      laurels: 6,
      wins: 3,
      year: "2018",
      type: "personal",
      shortDesc: "Short Film (FR) 12\'04\"",
      role: "Director, Editor, Producer, DP",
      links: [
        { title: "Previously on Amazon Prime Video", url: "https://www.amazon.com/En-Rose-Margaux-Ilona-L%C3%A9touche/dp/B07NBWTQD4" },
        { title: "IMDB page", url: "https://www.imdb.com/title/tt3681356/" }
      ],
      embed: "https://player.vimeo.com/video/667939342?h=6f59f8e4b7",
      description:
        "Released in 2018, a drama about two best friends and a young man who creates a divide between them. French-language film shot on location in Aix-en-Provence. Three festival wins and six more official selections. Distributed by Shami Media Group."
    },
    {
      title: "Safe and Sound",
      img: "safe-and-sound.jpg",
      year: "2020",
      type: "personal",
      shortDesc: "Short Film 5\'29\"",
      role: "Cinematographer",
      embed: "https://player.vimeo.com/video/386108542",
      description:
        "John becomes obsessed with all the sounds around him and as his behavior worsens, so does his personal life. Dir. Camille Hamadé"
    },
    {
      title: "Glass",
      img: "glass.jpg",
      laurels: 1,
      year: "2020",
      type: "personal",
      shortDesc: "Short Film 2\'36\"",
      role: "Director, Writer, Editor, DP",
      embed: "https://player.vimeo.com/video/438760465",
      description:
        "A whimsical short exercise. A photographer follows a homeless man with a secret. This is the second short exercise I completed for the Columbia Film MFA. Filmed in October 2019 and re-finished post in July 2020. Selected as a OneDumbVideo daily winner 2020."
    },
    {
      title: "Compartmentalize",
      img: "compartmentalize.jpg",
      laurels: 1,
      year: "2020",
      type: "personal",
      shortDesc: "Short Film 3\'31\"",
      role: "Director, Writer, Editor, DP",
      embed: "https://player.vimeo.com/video/435194741",
      description:
        "A psychological horror short exercise. This is the first short exercise I completed for the Columbia Film MFA. Filmed in October 2019 and re-finished post in July 2020. Selected as a OneDumbVideo daily winner 2020."
    },
    {
      title: "Talk",
      img: "talk.jpg",
      bigImg: "talk_big.jpg",
      year: "2019",
      type: "personal",
      shortDesc: "Short Film (EN) 4\'43\"",
      role: "Producer, Director, Writer, Editor, DP",
      embed: "https://player.vimeo.com/video/435206895",
      description:
        "Talk was a submission which eventually led to my acceptance to AFI conservatory in Los Angeles and Columbia University SOA in New York City. I challenged myself by limiting the cast to one person and the camera frame to one single angle. Joe is played by Tony Gapastione. 1 Official Selection."
    },
    {
      title: "Don't Fall in, Love",
      laurels: 1,
      img: "dfil.jpg",
      bigImg: "dfil_big.jpg",
      year: "2014",
      type: "personal",
      shortDesc: "Feature Film (EN) 90\'",
      role: "Director, Writer, Actor, Editor, Producer",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt2733432/" },
        {
          title: "Watch Full Film on Youtube",
          url: "https://www.youtube.com/watch?v=jrI1WVq9lPA"
        }
      ],
      description:
        "Don't Fall in, Love was produced between the years of 2010-2013 with a cast and crew of 122 people and a budget of only $10,000. A romantic comedy story about a businessman-to-be and a vagabond hippie girl. One festival nomination."
    },
    {
      title: "Nocturnal by the Chickadees",
      img: "nocturnal.jpg",
      year: "2011",
      type: "personal",
      shortDesc: "PBS: Kids Puppetry Spot (EN) 3\'36\"",
      role: "Director, Puppeteer, DP",
      embed: "https://www.youtube.com/embed/LSPxgxUea14",
      links: [
        {
          title: "Visit UWM PSOA Film Homepage",
          url: "https://uwm.edu/arts/film/"
        }
      ],
      description:
        "Nocturnal was produced by the students of UWM-Puppetry in Spring, 2011. In my role as Director, I succesfully ran a team of 22 artists to complete the fabrication of materials and finish the project within one week of assignment."
    },
    {
      title: "One of a Kind",
      img: "otis.jpg",
      year: "2015",
      type: "personal",
      shortDesc: "Music Video (EN) 3\'24\"",
      role: "Director, Writer, DP",
      embed: "https://www.youtube.com/embed/A_z56mand9A",
      description:
        "One of a Kind by rap artist Otis was filmed and produced in Summer, 2015 in Madison, WI. His unique rap style and storytelling convinced me to take on this project with a modest budget and a cast/crew of twelve."
    },
    {
      title: "Ovation",
      img: "ovation.jpg",
      wins: 1,
      year: "2013",
      type: "personal",
      shortDesc: "Music Video (EN) 4\'55\"",
      role: "Director, Writer, DP",
      embed: "https://www.youtube.com/embed/8c_VIXAgPeg",
      description:
        'Ovation is a music video in the style of a gospel ballad by Madison, WI artist Anthony Lamarr. I was contracted to direct this job in Summer, 2013. Nominated for "Best Music Video" in the 2014 Madison Area Music Awards.'
    },
    {
      title: "Purpose",
      img: "purpose.jpg",
      year: "2010",
      type: "personal",
      shortDesc: "Short Animation 1\'36\"",
      role: "Animator, Writer",
      embed: "https://www.youtube.com/embed/bYzzbFpvexA",
      description:
        "Purpose is a 90-second hand-drawn and hand-colored animation produced in Tim Decker's advanced animation class in Fall, 2010. It was nominated for best short animation in UWM's first Animation film festival."
    },
    {
      title: "Break your Security out of the Ice Age",
      img: "smash.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "© 2019 Yubico, Inc.",
      role: "Producer, Writer, Director, DP",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      embed: "https://www.youtube.com/embed/V-h3qHo8y2Q",
      description: "A product launch video"
    },
    {
      title: 'Say Hello to Secure Login on iOS with the YubiKey 5Ci',
      img: "5ci.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "© 2019 Yubico Inc - Director's Cut",
      role: "Director, Writer, DP, Editing, Effects, Color, Sound",
      links: [
        { title: "Visit yubico.com", url: "https://www.yubico.com/" },
        { title: "See the final cut by Yubico on Youtube", url: "https://www.youtube.com/watch?v=GL97M-h77a0" }
      ],
      embed: "https://www.youtube.com/embed/ckrt6QuWZOA",
      description: "3-week turnaround for the biggest product launch in the history of the company. Prepped for about 5 days. Shot in one day. Effects and editing over 2 weeks."
    },
    {
      title: 'Dolphin Adventure Pilot Episode',
      img: "edge.jpg",
      year: "2020",
      type: "promo",
      shortDesc: "© 2020 Edge Innovations",
      role: "Media Producer and Zoom Director",
      links: [
        {
          title: "Visit edgefx.com", url: "https://www.edgefx.com/"
        },
        {
          title: "Watch the episode on Youtube", url: "https://www.youtube.com/watch?v=vcVRY5q_QmQ"
        }
      ],
      bigImg: "edge-big.jpg",
      description: "Live television - An underwater dolphin adventure for ages 4-9 streamed out on Zoom. Gathered and licensed media and B-Roll and sound effects, set up Zoom Cast infrastructure, and ran the show going out to the world - over 500 classrooms and students attended."
    },
    {
      title: 'Shorelines',
      img: "shorelines.jpg",
      year: "2023",
      type: "promo",
      shortDesc: "© 2023 Reimagine Well",
      role: "Writer and Director",
      links: [
        { title: "Visit reimaginewell.com", url: "https://reimaginewell.com/" }
      ],
      bigImg: "shorelines_big.jpg",
      description: "A 20-minute long found-footage narrative film, commissioned by the Miami Cancer Institute, intended for therapeutic use in a clinical setting. Written and directed over two months, artistically guided by Roger Holzberg."
    },
    {
      title: 'Home To Me Is',
      img: "home.jpg",
      year: "2021",
      type: "promo",
      shortDesc: "© 2021 Reimagine Well",
      role: "Writer and Director",
      links: [
        { title: "Visit reimaginewell.com", url: "https://reimaginewell.com/" }
      ],
      bigImg: "home-big.jpg",
      description: "A 20-minute long found-footage narrative film, intended for therapeutic use in a clinical setting. Written and directed over two months, artistically guided by Roger Holzberg and Doug Weiser."
    },
    {
      title: 'Introducing the YubiKey 5C NFC',
      img: "yk5cnfc-short.jpg",
      year: "2020",
      type: "promo",
      shortDesc: "© 2020 Yubico Inc",
      role: "Animator and Consultant - Messaging and Edit",
      links: [
        { title: "Visit yubico.com", url: "https://www.yubico.com/" }
      ],
      embed: "https://www.youtube.com/embed/JWjCsQBB7kg",
      description: "A second simpler release video for the YubiKey 5C NFC: I did the animation and consulted on the messaging, shot selection, and design."
    },
    {
      title: 'YubiKey 5C NFC Launch Video',
      img: "yk5cnfc.jpg",
      year: "2020",
      type: "promo",
      shortDesc: "© 2020 Yubico Inc - Director's Cut",
      role: "Director, Writer, Editing, Animation, DP",
      links: [
        { title: "Visit yubico.com", url: "https://www.yubico.com/" },
        { title: "Watch the shortened release version", url: "https://www.youtube.com/watch?v=8ykCYFqMuPo" }
      ],
      embed: "https://www.youtube.com/embed/JkQn0G_ks-Y",
      description: "Shot at the Cinema Exchange in Milpitas in July 2020, during COVID."
    },
    {
      title: 'YubiEnterprise Delivery Launch Video',
      img: "yubienterprise.jpg",
      year: "2020",
      type: "promo",
      shortDesc: "© 2020 Yubico Inc",
      role: "Director, Co-Writer, Editing, Animation",
      links: [
        { title: "Visit yubico.com", url: "https://www.yubico.com/" },
      ],
      embed: "https://www.youtube.com/embed/vK4GIqG43Dw",
      description: "1-week turnaround for a completely COVID-19 compliant video, B2B service launch."
    },
    {
      title: 'BraveMaker Promotional Coverage - "I\'ll Push You"',
      img: "bravemaker.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "© 2019 BraveMaker",
      role: "Director, Editor, DP",
      links: [
        { title: "Visit bravemaker.com", url: "https://www.bravemaker.com/" }
      ],
      embed: "https://www.youtube.com/embed/MTOpw6ouLnY",
      description: "Event and promotional storytelling"
    },
    {
      title: "How-To: Go Passwordless with Microsoft Accounts & YubiKey",
      img: "passwordless-demo.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Consultant",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      embed: "https://www.youtube.com/embed/mqrclOOgzcY",
      description: "A software/hardware demo video."
    },
    {
      title: "Multi-Factor Passwordless Login with YubiKey 5 NFC",
      img: "yk_win_yk5.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Producer, Director, Editing, DP",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      embed: "https://www.youtube.com/embed/FUrOHAWKwIo",
      description: "A software/hardware demo video."
    },
    {
      title: "Meet Yubico",
      img: "yk_mty.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Producer, Director, Co-Writer, Editing, DP",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      embed: "https://www.youtube.com/embed/aAr41uSC4vs",
      description: "A kickstarter-style company video with interviews."
    },
    {
      title: "YubiKey 5 Series",
      img: "yk_5series.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Producer, Director, Editing, DP",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      embed: "https://www.youtube.com/embed/Y7jMarlnxac",
      description: "A product launch video."
    },
    {
      title: "Tweet Securely with the YubiKey",
      img: "yk_twitter.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Consultant - Directing, Story, and Editing",
      embed: "https://www.youtube.com/embed/-4pLuq0JNUA",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "An advertisment for Twitter desktop making support for YubiKeys"
    },
    {
      title: "The YubiKey Comes to iPhone",
      img: "yk_ios.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Producer, Director, Writer, Editing, DP",
      embed: "https://www.youtube.com/embed/CNpsqEjcJRI",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "An advertisement for Lastpass making iOS support for YubiKey one-time-password. Concept to completion in a single day. Revenue from video exceeded 30,000% of video costs."
    },
    {
      title: "The Future of Passwordless with YubiKey & Microsoft Azure AD",
      img: "yk_msft.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Consultant - Editing & Story",
      embed: "https://www.youtube.com/embed/wl479T2t6eo",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "for partnership between Microsoft and Yubico. Produced by Alex Yakubov. I was called in for story and editing help."
    },
    {
      title: "Discover the YubiKey",
      img: "yk_diver.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Director, Compositing, Editing, Actor, DP",
      embed: "https://www.youtube.com/embed/RxaCOEOZM74",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "Filmed in my apartment complex's swimming pool over three days. DSLR in underwater enclosure. I am the diver. For RSA Conference 2018."
    },
    {
      title: "Demo: Passwordless Login with YubiKey & Microsoft",
      img: "yk_msft_demo.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Consultant - Directing & Editing",
      embed: "https://www.youtube.com/embed/-KPzJowGRtw",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "Promotional demo video for partnership between Microsoft and Yubico"
    },
    {
      title: "Little YubiKey, Big Security",
      img: "yk_lybs.jpg",
      year: "2018",
      type: "promo",
      shortDesc: "© 2018 Yubico, Inc.",
      role: "Director, Writer, Compositing, Editing, DP",
      embed: "https://www.youtube.com/embed/sX7_Fyw1MWI",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "Promotional video for the YubiKey 4C Nano at the SXSW Innovation Awards"
    },
    {
      title: "Keep your Facebook Account Safe with YubiKey",
      img: "yk_facebook.jpg",
      year: "2017",
      type: "promo",
      shortDesc: "© 2017 Yubico, Inc.",
      role: "Director, Writer, Compositing, Editing, DP",
      embed: "https://www.youtube.com/embed/jHPW--sL_es",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description: "Promotional video for Facebook support of YubiKeys."
    },
    {
      title: "Introducing YubiKey for Windows Hello",
      img: "yk_winhello.jpg",
      year: "2016",
      type: "promo",
      shortDesc: "© 2016 Yubico, Inc.",
      role: "Director, Writer, Compositing, Editing, DP",
      embed: "https://www.youtube.com/embed/8TokpxO6J7Q",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "Promotional video for an app I built connecting YubiKeys with the Microsoft Companion Device Framework."
    },
    {
      title: "Secure your GOV.UK Verify account with YubiKey",
      img: "yk_govuk.jpg",
      year: "2016",
      type: "promo",
      shortDesc: "© 2016 Yubico, Inc.",
      role: "Actor, Consultant - Story",
      embed: "https://www.youtube.com/embed/DWmTR6wKbfg",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "My first day on the job at Yubico, I starred in and consulted on this video for GOV.UK and YubiKeys."
    },
    {
      title: "Hamm's Beer Advert",
      img: "hamms.jpg",
      year: "2013",
      type: "promo",
      shortDesc: "Student Business Rebranding project",
      role: "Director, Editor, DP",
      embed: "https://www.youtube.com/embed/rHGwEYli6iM",
      links: [
        {
          title: "Visit the Business School website at UW-Madison",
          url: "https://wsb.wisc.edu/"
        }
      ],
      description: "Made by students at the Business school at UW-Madison."
    },
    {
      title: "3D Animation and Effects Reel",
      img: "3d.jpg",
      year: "2015",
      type: "promo",
      shortDesc: "3D Animation and Effects Reel",
      role: "Animator, Rigger",
      embed: "https://www.youtube.com/embed/9wv-IJ664yg",
      description:
        "Integrated 3D graphics and effects have been a staple of my video storytelling. I have animated and integrated trains, romantic night skies with twinkling stars, logos, and I have even created and animated video game characters for a friend's project."
    }
  ],
  graphicProjects: [
    {
      title: "Drawings, Paintings, and Art",
      img: "art.jpg",
      year: "2010-Present",
      type: "promo",
      shortDesc:
        "Characters, Backgrounds, Situations: Physical and Digital Media",
      role: "Artist",
      links: [
        {
          title: "See new art at my Instagram",
          url: "https://www.instagram.com/joshua_kellerman/"
        },
        {
          title: "See the full collection at my DeviantArt",
          url: "https://www.deviantart.com/y0shek/gallery"
        }
      ],
      description:
        "I believe that drawing 3D shapes is more closely related to sculpture than to other two-dimensional art forms such as calligraphy. Lighting, shading, pose, composition, and above all, form must be taken into consideration. I have been studying 2D art since I was very young, but I refined it when I attended Tim Decker's Figure Drawing and Animation classes while at UWM Film. See more pieces at my DeviantArt.",
      gallery: [
        {
          original: "https://i.postimg.cc/bwRXTYwq/IMG-2586.jpg",
          thumbnail: "https://i.postimg.cc/BtWNWFNR/IMG-2586.jpg"
        },
        {
          original: "https://i.postimg.cc/2yB82kWY/frogs.jpg",
          thumbnail: "https://i.postimg.cc/Lg2psMvQ/frogs.jpg"
        },
        {
          original: "https://s15.postimg.cc/v2j6k9sob/girl_apple.jpg",
          thumbnail: "https://s15.postimg.cc/pd2y0bp6j/girl_apple.jpg"
        },
        {
          original: "https://i.postimg.cc/BQVqZkP6/to-the-village.jpg",
          thumbnail: "https://i.postimg.cc/jLyVZ8X0/to-the-village.jpg"
        },
        {
          original: "https://s15.postimg.cc/n9sis9k4b/dancer-latina.jpg",
          thumbnail: "https://s15.postimg.cc/n8ikz6xtn/dancer-latina.jpg"
        },
        {
          original: "https://i.postimg.cc/hPf3ZJhT/mlk.jpg",
          thumbnail: "https://i.postimg.cc/CzpNzxGx/mlk.jpg"
        },
        {
          original: "https://s15.postimg.cc/7ob78e86z/Speechless.jpg",
          thumbnail: "https://s15.postimg.cc/ykv6h394b/Speechless.jpg"
        },
        {
          original: "https://s15.postimg.cc/sl7fd0o7f/Crying_Girl.jpg",
          thumbnail: "https://s15.postimg.cc/ah4espqmj/Crying_Girl.jpg"
        },
        {
          original: "https://i.postimg.cc/YSBkQvQf/prussian.jpg",
          thumbnail: "https://i.postimg.cc/PCyBjr3P/prussian.jpg"
        },
        {
          original: "https://s15.postimg.cc/av5qrwaln/Cranky.jpg",
          thumbnail: "https://s15.postimg.cc/k1o1fivd7/Cranky.jpg"
        },
        {
          original: "https://i.postimg.cc/mr850JHv/poverty.jpg",
          thumbnail: "https://i.postimg.cc/QBKm76Sm/poverty.jpg"
        },
        {
          original: "https://i.postimg.cc/BZ2krJ46/capitalism.jpg",
          thumbnail: "https://i.postimg.cc/G4ZfJMWP/capitalism.jpg"
        },
        {
          original: "https://i.postimg.cc/pd6BFCYS/vulture-girl.jpg",
          thumbnail: "https://i.postimg.cc/rd5W6SHG/vulture-girl.jpg"
        },
        {
          original: "https://i.postimg.cc/0NwsTWQG/buttermilk.jpg",
          thumbnail: "https://i.postimg.cc/p9R48BKy/buttermilk.jpg"
        },
        {
          original: "https://s15.postimg.cc/or9dqgpaz/picking-apples.jpg",
          thumbnail: "https://s15.postimg.cc/naxv8ariz/picking-apples.jpg"
        },
        {
          original: "https://s15.postimg.cc/u0901t263/sketch01_color.jpg",
          thumbnail: "https://s15.postimg.cc/lth0am9mz/sketch01_color.jpg"
        },
        {
          original: "https://s15.postimg.cc/nzbb4lxij/davinci_study.jpg",
          thumbnail: "https://s15.postimg.cc/43fbpf3q3/davinci_study.jpg"
        },
        {
          original: "https://i.postimg.cc/0yT5ZW1S/augustus.jpg",
          thumbnail: "https://i.postimg.cc/mPSGgSDZ/augustus.jpg"
        },
        {
          original: "https://s15.postimg.cc/czq3t0miz/first-wacom.jpg",
          thumbnail: "https://s15.postimg.cc/vqs13jc23/first-wacom.jpg"
        },
        {
          original: "https://s15.postimg.cc/ib50dplgb/diver.jpg",
          thumbnail: "https://s15.postimg.cc/bjelb7bzv/diver.jpg"
        },
        {
          original: "https://i.postimg.cc/7ZdhdP0f/bike-rider.jpg",
          thumbnail: "https://i.postimg.cc/bZ0q2h6h/bike-rider.jpg"
        },
        {
          original: "https://s15.postimg.cc/474jrzh9n/practice-01.jpg",
          thumbnail: "https://s15.postimg.cc/rwtzgmpwr/practice-01.jpg"
        },
        {
          original: "https://s15.postimg.cc/g6knco9jv/komainu-final.jpg",
          thumbnail: "https://s15.postimg.cc/bw5zhg757/komainu-final.jpg"
        },
        {
          original: "https://s15.postimg.cc/k2xz8nmtn/Discovery.jpg",
          thumbnail: "https://s15.postimg.cc/4sy41tekb/Discovery.jpg"
        },
        {
          original: "https://s15.postimg.cc/bkoj4b8l7/Girl_With_Towel.jpg",
          thumbnail: "https://s15.postimg.cc/ve0mxdwd7/Girl_With_Towel.jpg"
        },
        {
          original: "https://s15.postimg.cc/qtegi57ff/pastel_girl_02.jpg",
          thumbnail: "https://s15.postimg.cc/wgatfzcmj/pastel_girl_02.jpg"
        },
        {
          original: "https://s15.postimg.cc/u0901rcfv/scribble2.jpg",
          thumbnail: "https://s15.postimg.cc/t9g9wczwb/scribble2.jpg"
        },
        {
          original: "https://s15.postimg.cc/6m10pr9x7/First_Mate.jpg",
          thumbnail: "https://s15.postimg.cc/4g6pvltpn/First_Mate.jpg"
        },
        {
          original: "https://i.postimg.cc/j5mrdCq7/pirate2.jpg",
          thumbnail: "https://i.postimg.cc/5YBrs4C4/pirate2.jpg"
        },
        {
          original: "https://s15.postimg.cc/zbnwmg3nf/Fox_Squirrel.jpg",
          thumbnail: "https://s15.postimg.cc/c8xdnn4uj/Fox_Squirrel.jpg"
        },
        {
          original: "https://s15.postimg.cc/5jqu79w9n/Jessy_Cartoon.jpg",
          thumbnail: "https://s15.postimg.cc/55pi821zv/Jessy_Cartoon.jpg"
        },
        {
          original: "https://s15.postimg.cc/5jqu7ajez/Robot_Love.jpg",
          thumbnail: "https://s15.postimg.cc/immgqx4ln/Robot_Love.jpg"
        },
        {
          original: "https://i.postimg.cc/gkD504wb/self-portrait.jpg",
          thumbnail: "https://i.postimg.cc/xJQFBXTc/self-portrait.jpg"
        }
      ]
    },
    {
      title: "Animations",
      img: "animation.jpg",
      year: "2020",
      type: "promo",
      shortDesc:
        "Character and Product Animations",
      role: "Animator",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "2D Animated characters and products.",
      gallery: [
        {
          original: "https://i.postimg.cc/zBbtZ2Db/IMG-2492.gif",
          thumbnail: "https://i.postimg.cc/k6CFWcbq/IMG-2492.gif"
        },
        {
          original: "https://i.postimg.cc/hjhBgTjx/yk-speak.gif",
          thumbnail: "https://i.postimg.cc/YGcVz4Qq/yk-speak.gif"
        },
        {
          original: "https://i.postimg.cc/W48Nss7R/anim-board-02.jpg",
          thumbnail: "https://i.postimg.cc/mccfwfqV/anim-board-02.jpg"
        },
        {
          original: "https://i.postimg.cc/hvfPCNxk/anim-board-01.jpg",
          thumbnail: "https://i.postimg.cc/QKZ3C4fm/anim-board-01.jpg"
        }
      ]
    },
    {
      title: "Graphics and Logos",
      img: "graphics.jpg",
      year: "2012-2017",
      type: "promo",
      shortDesc:
        "Website and Desktop / Mobile Application related Graphics and Designs",
      role: "Digital Graphic Artist",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "While at Yubico, I created innumerable pieces of graphic art in support of Engineering and Marketing projects. Throughout my life, I have found basic design and animation skills crucial to success.",
      gallery: [
        {
          original: "https://s15.postimg.cc/xsx3vdmij/start_page.jpg",
          thumbnail: "https://s15.postimg.cc/r2gmlvmh7/start_page.jpg"
        },
        {
          original: "https://s15.postimg.cc/l08zvqdkb/led.jpg",
          thumbnail: "https://s15.postimg.cc/yh5yeesyz/led.jpg"
        },
        {
          original: "https://s15.postimg.cc/n4tcws4wb/logo3.jpg",
          thumbnail: "https://s15.postimg.cc/fc2p4m40b/logo3.jpg"
        },
        {
          original: "https://s15.postimg.cc/rdy2yynl7/frontend_Example.jpg",
          thumbnail: "https://s15.postimg.cc/s3gvb4t7v/frontend_Example.jpg"
        },
        {
          original: "https://s15.postimg.cc/qbnwggf2j/vox_Multis_title2.jpg",
          thumbnail: "https://s15.postimg.cc/chzjr7rkb/vox_Multis_title2.jpg"
        },
        {
          original: "https://s15.postimg.cc/vn2t14j4r/Logo_Enrose.jpg",
          thumbnail: "https://s15.postimg.cc/x24dpnpaz/Logo_Enrose.jpg"
        },
        {
          original: "https://s15.postimg.cc/4chht83d7/poster1.jpg",
          thumbnail: "https://s15.postimg.cc/uksmiesjv/poster1.jpg"
        },
        {
          original: "https://s15.postimg.cc/jl7f6ymqz/Comp_Card_Back.jpg",
          thumbnail: "https://s15.postimg.cc/owmbrhlmj/Comp_Card_Back.jpg"
        },
        {
          original: "https://s15.postimg.cc/3mypgvpyz/equals_title.jpg",
          thumbnail: "https://s15.postimg.cc/d7ic3kke3/equals_title.jpg"
        }
      ]
    }
  ],
  engProjects: [
    {
      title: "Echo360: Capture Team",
      img: "echo360.jpg",
      year: "2022-2023",
      type: "promo",
      shortDesc: "Full-Stack Engineer managing projects",
      role: "Principal Scala, Java, CPP, and React Engineer",
      links: [{ title: "Visit echo360.com", url: "https://www.echo360.com/" }],
      description:
        "After being let go from Twitter in July 2022 because of the Elon Musk purchase, I joined Echo360 in October as a principal engineer, managing several junior engineers and leading projects on the Capture side of their service."
    },
    {
      title: "Twitter: Health Org",
      img: "reportflow.jpg",
      year: "2020-2022",
      type: "promo",
      shortDesc: "Full-Stack Engineer working on a variety of projects",
      role: "Sr. Scala, Python, and React Engineer",
      links: [{ title: "Visit twitter.com", url: "https://www.twitter.com/" }],
      description:
        "I joined the Health and User Experience team at Twitter to help out during the U.S. presidential transition in 2021. Since joining, I have worked on various projects in the Health org, including the reporting flow, safety mode, safety ML, and SRE. A great place to work!"
    },
    {
      title: "Mosaix.ai",
      img: "mosaix.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "Re-architected Natural Language Engine in Scala and Python",
      role: "Engineer",
      links: [{ title: "Visit mosaix.ai", url: "https://www.mosaix.ai/" }],
      description:
        "I joined Mosaix in 2019 as an Engineer, and quickly moved from API back-end engineering to rearchitecting the business logic of Mosaix's Natural Language Engine, the efficacy and accuracy of which are now comparable to that of Google's natural language processing engine."
    },
    {
      title: "U2F Flow, YubiKey Manager, and Windows Login Tool UX",
      img: "u2f.jpg",
      year: "2017-2018",
      type: "promo",
      shortDesc: "Projects to enhance UX at Yubico, based on User Research",
      role: "Lead UX Engineer",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "Oversaw research, design, and implementation of UX / UI on desktop/mobile, web applications, packaging, and media. Spearheaded remake of the Windows Login Tool through UX research. Designed a common User-Flow experience for all of U2F web-facing apps, for technology partners."
    },
    {
      title: "www.yubico.com",
      img: "y.com.jpg",
      bigImg: "y.com_big.jpg",
      year: "2016-2018",
      type: "promo",
      shortDesc: "Wordpress, React.js and Magento (PHP, MySQL)",
      role: "Full-Stack Lead Web Engineer",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "I was the lead developer, designer, and maintainer of Yubico.com from 2016 to 2018 and helped oversee the 2019 transition from Wordpress to Magento and React.js."
    },
    {
      title: "YubiKey for Windows Hello",
      img: "winhello.jpg",
      bigImg: "winhello_big.jpg",
      year: "2016",
      type: "promo",
      shortDesc:
        "One of the first Windows 10 Apps to use the Windows Companion Device Framework",
      role: "Lead Architect / C# & XAML Engineer",
      links: [
        {
          title: "See it in the Windows Store",
          url:
            "https://www.microsoft.com/en-us/store/p/yubikey-for-windows-hello/9nblggh511m5"
        },
        { title: "Visit Yubico.com", url: "https://www.yubico.com/" }
      ],
      description:
        "Shown on the main stage in front of hundreds at Microsoft Ignite Conference 2016, this was one of the very first Windows 10 Creator's Update Apps to leverage the new Companion Device Framework and the OATH Smart Card functionality of the YubiKey. Together, they make a seamless unlock experience. I had the honor to program and collaborate with Yubico's CTO and inventor of the YubiKey to make this app."
    }
  ],
  education: [
    {
      title: "La Femis Filmmaking Certificate",
      img: "femis.jpg",
      year: "2023",
      shortDesc: "Attended La Femis Film School in Paris",
      role: "Documentary, Photography, and Sound",
      description:
        'I studied for a semester\'s worth of classes at the filmmaking program in Paris. I studied documentary approach with masterclasses from famous French directors such as Nicolas Philibert, Photography with Frédéric Serve, and Sound Design with Daniel Deshays.',
      bigImg: "femis-cert.jpg",
      links: [
        { title: "Visit La Femis Website", url: "https://www.femis.fr" }
      ]
    },
    {
      title: "Columbia MFA Film Directing / Screenwriting",
      img: "columbia.jpg",
      year: "2019-present",
      shortDesc: "Attended Columbia University",
      role: "Film Directing / Screenwriting",
      description:
        'I studied in the world-renowned filmmaking program at Columbia School of the Arts.',
      bigImg: "columbia_big.jpg",
      links: [
        { title: "Visit Columbia Film Website", url: "https://arts.columbia.edu/film" }
      ]
    },
    {
      title: "International Political Education",
      img: "iep.jpg",
      year: "2013-2014",
      shortDesc: "Attended L'Institut d'Études Politiques in Aix-en-Provence",
      role: "Politics and Journalism",
      description:
        'I studied for a year in France at a "Grande École" (French Ivy League), concentrating on Geopolitics, Economy, International Diplomacy, French Language, and Journalism. I also produced my French-language short film and wrote several French newspaper articles while at school.',
      bigImg: "iep_big.jpg",
      links: [
        { title: "Visit IEP Website", url: "https://www.sciencespo-aix.fr/" }
      ]
    },
    {
      title: "English Literature B.A. from UW-Madison",
      img: "uw.jpg",
      year: "2011-2013",
      shortDesc: "Attended UW-Madison for English and Computer Science",
      role: "English, Comp-Sci, and French",
      description:
        'I transferred from the Animation / Puppetry department at UW-Milwaukee to UW-Madison in order to study literature and the source of storytelling. While at UW-Madison, I took the first two year curriculum for Comp Sci, learning Algorithms and Data Structures, which has allowed me to pursue a career in Technology.',
      links: [
        { title: "Visit UW-Madison Website", url: "https://www.wisc.edu/" }
      ]
    },
    {
      title: "3 Years of Animation and Film Studies at UW-Milwaukee PSOA",
      img: "uwm.jpg",
      year: "2008-2010",
      shortDesc: "Attended UW-Milwaukee for Film, Animation, and Puppetry",
      role: "Film, 2D Animation, and Puppetry",
      description:
        'I attended UW-Milwaukee for a Film BFA, but I was not challenged by the curriculum. I ended up spending all of my time under the mentorship of Tim Decker, ex-Disney animator. I learned the advanced CalArts method of 2D animation as well as figure drawing, stop-motion, fabrication, and puppetry (construction and performance) under Tim.',
      bigImg: "uwm-puppetry.jpg",
      links: [
        { title: "Visit UW-Milwaukee PSOA Website", url: "https://www.uwm.edu/arts" }
      ]
    }
  ],
  leadershipProjects: [
    {
      title: "Film Production",
      img: "film_leader.jpg",
      bigImg: "film_leader_big.jpg",
      year: "2009-Present",
      type: "personal",
      shortDesc: "Led Casts and Crews up to 130 people",
      role: "Producer, Director",
      links: [
        {
          title: "My IMDB page",
          url: "https://www.imdb.com/name/nm2976276/?ref_=fn_al_nm_1"
        }
      ],
      description:
        "I have been making films since I was about 10, but only seriously since about 8 years ago. I started my filmmaking journey at UW-Milwaukee in Tim Decker's classroom. I wrote, directed, and produced a feature film in 2014. I own a small indie film production company and have produced several commercials for Silicon Valley companies and non-profits."
    },
    {
      title: "Student Mentorship",
      img: "mentorship.jpg",
      bigImg: "mentorship_big.jpg",
      year: "2013-2015",
      shortDesc:
        "Taught both disadvantaged and talented youth English, Math, Filmmaking, Web Design",
      role: "Mentor, Instructor",
      links: [
        {
          title: "Visit Wisconsin Center for Academically Talented Youth",
          url: "https://wcaty.wisc.edu/"
        },
        {
          title: "Visit Oxford Tutoring",
          url: "http://www.oxfordtutoring.com/"
        }
      ],
      description:
        "While in France, I mentored a film student who would P.A. and D.A. in a short film I produced and directed. She would go on to start film school at the École de Cinéma in Paris. I continued mentorship at the Wisconsin Center for Academically Talented Youth, where I taught filmmaking and graphic design in a summer camp setting. When I moved to California, I worked briefly for Oxford tutoring, a government contractor tutoring disadvantaged youth."
    },
    {
      title: "Engineering Hiring and Team Building",
      img: "eng_hiring.jpg",
      year: "2017-2023",
      shortDesc: "Hired the Web team for Yubico. Hired for Infrastructure team for Mosaix.ai",
      role: "Teamleader, Hiring Manager",
      links: [
        {
          title: "Echo360",
          url: "https://www.echo360.com/"
        },
        {
          title: "Twitter",
          url: "https://www.twitter.com/"
        },
        {
          title: "Yubico",
          url: "https://www.yubico.com/"
        },
        {
          title: "Mosaix.ai",
          url: "https://www.mosaix.ai/"
        }
      ],
      description:
        "I hired for and ran the Web team at Yubico, making sure that my hiree would have at least 3 months without other team members giving him tasks, so he could be completely up to speed and in a position to not make mistakes and bring down crucial business infrastructure. I also hired for the Mosaix.ai backend engineering team and contributed to senior culture."
    },
    {
      title: "Camino of Santiago",
      img: "camino.jpg",
      year: "2014",
      shortDesc: "Walked 1000 KM and Volunteered",
      role: "Peregrino y Hospitaleiro",
      description:
        "This one time I walked 1000 kilometers across all of Spain, from Toulouse, France to Cape Finisterre, Spain. I couldn't have done it without these wonderful people. We helped eachother every step of the way. I learned conversational Spanish in the process.",
      bigImg: "camino_friends.jpg"
    },
    {
      title: "Private English Teacher",
      img: "lessons.jpg",
      year: "2013-2014",
      shortDesc: "Taught Francophones English",
      role: "Instructor",
      description:
        "During my year abroad in France, I ran a small personal business as a private English instructor. With my Bachelor's degree in English Composition and Literature, my students all passed their ESL courses and exams with flying colors."
    }
  ]
};

export default class Portfolio extends React.Component {
  handleScrollTo = ref => {
    const distance = this.refs[ref].offsetTop - 100;
    window.scrollTo({ top: distance, behavior: "smooth" });
  };

  render() {
    return (
      <div className="portfolio">
        <Welcome
          playing={this.props.playing}
          toggleVideo={this.props.toggleVideo}
          atTop={this.props.atTop}
        />
        <Section theName="Overview" style={{ padding: "20px 0 0 0" }}>
          <div style={{ padding: "0 40px" }}>
            <h2 id="portfolio" style={{ textAlign: "center" }}>
              <span className="special_text">Thanks for visiting my</span>{" "}
              <strong>Portfolio</strong>!
            </h2>
            <blockquote className="portfolio__overview__blockquote">
              <h4 style={{ textAlign: "center", marginBottom: 0 }}>
                <span className="special_text">Joshua M Kellerman</span>
              </h4>
              <h4 style={{ textAlign: "center", marginTop: "10px", marginBottom: 0 }}>
                <span className="special_text">
                  Director - Writer - Engineer - Artist - <strong>Storyteller</strong> </span>
              </h4>
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                <span className="special_text">
                  Columbia University Film MFA</span>
                <br />
                <span className="special_text">
                  Ex Senior Software Engineer at Twitter</span>
              </h4>
            </blockquote>
            <h4 style={{ textAlign: "center" }}>
              Projects:
            </h4>
            <div className="portfolio__subnav" ref="subnav">
              <a onClick={() => this.handleScrollTo("film")}>Film</a>
              <a onClick={() => this.handleScrollTo("art")}>2D Art</a>
              <a onClick={() => this.handleScrollTo("eng")}>Engineering</a>
              <a onClick={() => this.handleScrollTo("leadership")}>
                Leadership
              </a>
            </div>
          </div>
        </Section >
        <Section
          theName="Film, Animation, and Video"
          style={{ padding: "10px 0 20px 0" }}
        >
          <h2 id="film" ref="film">
            Film, Animation, and Video
          </h2>{" "}
          <hr />
          <h3 className="special_text">Narrative</h3>
          <ProjectList
            id="personal"
            projects={data.videoProjects.filter(project => {
              return project.type === "personal";
            })}
          />
          <h3 className="special_text">Commercial</h3>
          <ProjectList
            id="promos"
            projects={data.videoProjects.filter(project => {
              return project.type === "promo";
            })}
          />
        </Section>
        <Section theName="2D Art and Design">
          <h2 id="art" ref="art">
            2D Art and Design
          </h2>{" "}
          <hr />
          <ProjectList id="art" projects={data.graphicProjects} />
        </Section>
        <Section theName="UX and Software Engineering">
          <h2 id="eng" ref="eng">
            Software Engineering / User Experience
          </h2>{" "}
          <hr />
          <ProjectList id="eng" projects={data.engProjects} />
        </Section>
        <Section theName="Leadership and Personal Growth">
          <h2 id="leadership" ref="leadership">
            Leadership and Personal Growth
          </h2>{" "}
          <hr />
          <ProjectList id="leadership" projects={data.leadershipProjects} />
        </Section>
        <Section theName="Education">
          <h2 id="education" ref="education">
            Education
          </h2>{" "}
          <hr />
          <ProjectList id="education" projects={data.education} />
        </Section>
        <Section theName="Summary">
          <div style={{ textAlign: "center" }}>
            <div className="portfolio__bannerImg">
              <img alt="Skipping in Madrid" src={skipping} />
            </div>
            <h3>Thanks for visiting!</h3>
            <p>
              Life's an adventure. It's short, so enjoy it to the fullest with people you
              love.
            </p>
            <p>
              <strong>
                Come be part of my awesome life, and I'll be part of yours.
              </strong>
            </p>
          </div>
        </Section>
      </div >
    );
  }
}
