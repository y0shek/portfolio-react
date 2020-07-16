import React from "react";
import Welcome from "../../components/Welcome";
import Section from "../../components/Section";
import ProjectList from "../../components/ProjectList";

import "./style.css";
import skipping from "../../images/skipping.jpg";

const data = {
  videoProjects: [
    {
      title: "En Rose",
      img: "enrose.jpg",
      laurels: 6,
      year: "2018",
      type: "personal",
      shortDesc: "Short Film (FR)",
      role: "Director, Editor, Producer, Story",
      links: [
        { title: "Watch free now with Amazon Prime Video", url: "https://www.amazon.com/En-Rose-Margaux-Ilona-L%C3%A9touche/dp/B07NBWTQD4" },
        { title: "IMDB page", url: "https://www.imdb.com/title/tt3681356/" }
      ],
      embed: "https://player.vimeo.com/video/435219189",
      description:
        "En Rose was filmed in May-July 2014 in Aix-en-Provence, France. A five-minute cut called Comme ses Parents was released for the cast and crew of 12 in late 2014. Finally released in 2018, a drama about two best friends and a young man who creates a divide between them. French-language film shot on location in Aix-en-Provence. Five festival wins and one official selection. Distributed by Shami Media Group."
    }, 
    {
      title: "Super 180s",
      img: "super180s.jpg",
      bigImg: "super180s_big.jpg",
      year: "2020",
      type: "personal",
      shortDesc: "Short Film (EN)",
      role: "Director, Writer, Editor",
      links: [
        { title: "IMDB page", url: "https://www.imdb.com/title/tt11646262/" }
      ],
      description:
        "A story about implicit bias, a young couple, and a finance bro. Filmed in the financial district in NYC in December 2019. Super 180s was my first semester capstone directing assignment at Columbia University School of the Arts Film MFA. I wrote it with the guidance of writing professor Jamal Joseph and directed it with the guidance of directing professor Ian Olds. To be released in 2020."
    },
    {
      title: "Glass",
      img: "glass.jpg",
      year: "2020",
      type: "personal",
      shortDesc: "Short Film",
      role: "Director, Writer, Editor",
      embed: "https://player.vimeo.com/video/438760465", 
      description:
        "A whimsical myth of a photographer and a homeless man with a secret. This is the second short exercise I completed for the Columbia Film MFA. Filmed in October 2019 and re-finished post in July 2020."
    },
    {
      title: "Compartmentalize",
      img: "compartmentalize.jpg",
      year: "2020",
      type: "personal",
      shortDesc: "Short Film",
      role: "Director, Writer, Editor",
      embed: "https://player.vimeo.com/video/435194741", 
      description:
        "A psychological horror short exercise. This is the first short exercise I completed for the Columbia Film MFA. Filmed in October 2019 and re-finished post in July 2020."
    },
    {
      title: "Talk",
      img: "talk.jpg",
      bigImg: "talk_big.jpg",
      year: "2019",
      type: "personal",
      shortDesc: "Short Film (EN)",
      role: "Producer, Director, Writer, Editor",
      embed: "https://player.vimeo.com/video/435206895",
      description:
        "Talk was a submission which eventually led to my acceptance to AFI conservatory in Los Angeles and Columbia University SOA in New York City. I challenged myself by limiting the cast to one person and the camera frame to one single angle. Joe is played by Tony Gapastione."
    },
    {
      title: "Don't Fall in, Love",
      laurels: 1,
      img: "dfil.jpg",
      bigImg: "dfil_big.jpg",
      year: "2014",
      type: "personal",
      shortDesc: "Feature Film (EN)",
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
      shortDesc: "PBS: Kids Puppetry Spot (EN)",
      role: "Director, Puppeteer",
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
      shortDesc: "Music Video (EN)",
      role: "Director, Writer",
      embed: "https://www.youtube.com/embed/A_z56mand9A",
      description:
        "One of a Kind by rap artist Otis was filmed and produced in Summer, 2015 in Madison, WI. His unique rap style and storytelling convinced me to take on this project with a modest budget and a cast/crew of twelve."
    },
    {
      title: "Ovation",
      img: "ovation.jpg",
      year: "2013",
      type: "personal",
      shortDesc: "Music Video (EN)",
      role: "Director, Writer",
      embed: "https://www.youtube.com/embed/8c_VIXAgPeg",
      description:
        'Ovation is a music video in the style of a gospel ballad by Madison, WI artist Anthony Lamarr. I was contracted to direct this job in Summer, 2013. Nominated for "Best Music Video" in the 2014 Madison Area Music Awards.'
    },
    {
      title: "Purpose",
      img: "purpose.jpg",
      year: "2010",
      type: "personal",
      shortDesc: "Short Animation",
      role: "Animator, Writer",
      embed: "https://www.youtube.com/embed/bYzzbFpvexA",
      description:
        "Purpose is a 90-second hand-drawn and hand-colored animation produced in Tim Decker's advanced animation class in Fall, 2010. It was nominated for best short animation in UWM's first Animation film festival."
    },
    {
      title: "3D Animation and Effects Reel",
      img: "3d.jpg",
      year: "2015",
      type: "personal",
      shortDesc: "3D Animation and Effects Reel",
      role: "Animator, Rigger",
      embed: "https://www.youtube.com/embed/9wv-IJ664yg",
      description:
        "Integrated 3D graphics and effects have been a staple of my video storytelling. I have animated and integrated trains, romantic night skies with twinkling stars, logos, and I have even created and animated video game characters for a friend's project."
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
      title: 'Say Hello to Secure Login on iOS with the YubiKey 5Ci',
      img: "5ci.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "© 2019 Yubico Inc - Director's Cut",
      role: "Director, Writer, Camera, Editing, Effects, Color, Sound",
      links: [
        { title: "Visit yubico.com", url: "https://www.yubico.com/" },
        { title: "See the final cut by Yubico on Youtube", url: "https://www.youtube.com/watch?v=GL97M-h77a0" }
      ],
      embed: "https://www.youtube.com/embed/ckrt6QuWZOA",
      description: "3-week turnaround for the biggest product launch in the history of the company. Prepped for about 5 days. Shot in one day. Effects and editing over 2 weeks."
    },
    {
      title: 'BraveMaker Promotional Coverage - "I\'ll Push You"',
      img: "bravemaker.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "© 2019 BraveMaker",
      role: "Director, Editor",
      links: [
        { title: "Visit bravemaker.com", url: "https://www.bravemaker.com/" }
      ],
      embed: "https://www.youtube.com/embed/MTOpw6ouLnY",
      description: "Event and promotional storytelling"
    },
    {
      title: "Break your Security out of the Ice Age",
      img: "smash.jpg",
      year: "2019",
      type: "promo",
      shortDesc: "© 2019 Yubico, Inc.",
      role: "Producer, Writer, Director, Cinematography",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      embed: "https://www.youtube.com/embed/V-h3qHo8y2Q",
      description: "A product launch video"
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
      role: "Producer, Director, Editing",
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
      role: "Producer, Director, Co-Writer, Editing",
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
      role: "Producer, Director, Editing",
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
      role: "Producer, Director, Writer, Editing",
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
      role: "Director, Compositing, Editing, Actor",
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
      role: "Director, Writer, Compositing, Editing",
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
      role: "Director, Writer, Compositing, Editing",
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
      role: "Director, Writer, Compositing, Editing",
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
      role: "Director, Editor",
      embed: "https://www.youtube.com/embed/rHGwEYli6iM",
      links: [
        {
          title: "Visit the Business School website at UW-Madison",
          url: "https://wsb.wisc.edu/"
        }
      ],
      description: "Made by students at the Business school at UW-Madison."
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
        "The most distinguished 2D artists agree that drawing 3D shapes is more closely related to sculpture than to other two-dimensional art forms such as calligraphy. Lighting, shading, pose, composition, and above all, form must be taken into consideration. I have been studying 2D art since I was very young, but I refined it when I attended Tim Decker's Figure Drawing and Animation classes while at UWM Film. See more pieces at my DeviantArt.",
      gallery: [
        {
          original: "https://s15.postimg.cc/n9sis9k4b/dancer-latina.jpg",
          thumbnail: "https://s15.postimg.cc/n8ikz6xtn/dancer-latina.jpg"
        },
        {
          original: "https://i.postimg.cc/BQVqZkP6/to-the-village.jpg",
          thumbnail: "https://i.postimg.cc/jLyVZ8X0/to-the-village.jpg"
        },
        {
          original: "https://i.postimg.cc/2yB82kWY/frogs.jpg",
          thumbnail: "https://i.postimg.cc/Lg2psMvQ/frogs.jpg"
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
          original: "https://s15.postimg.cc/v2j6k9sob/girl_apple.jpg",
          thumbnail: "https://s15.postimg.cc/pd2y0bp6j/girl_apple.jpg"
        },
        {
          original: "https://s15.postimg.cc/av5qrwaln/Cranky.jpg",
          thumbnail: "https://s15.postimg.cc/k1o1fivd7/Cranky.jpg"
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
    },
    {
      title: "Animations",
      img: "animation.jpg",
      year: "2020",
      type: "promo",
      shortDesc:
        "Character and Product Animations",
      bigImg: "yk-speak.gif",
      role: "Animator",
      links: [{ title: "Visit Yubico.com", url: "https://www.yubico.com/" }],
      description:
        "2D Animated characters and products.",
    }
  ],
  engProjects: [
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
      title: "Columbia MFA Film Directing / Screenwriting",
      img: "columbia.jpg",
      year: "2019-present",
      shortDesc: "Attended Columbia University",
      role: "Student in Film Directing / Screenwriting",
      description:
        'I studied in the world-renowned Film program at Columbia School of the Arts.',
      links: [
        { title: "Visit Columbia Film Website", url: "https://arts.columbia.edu/film" }
      ]
    },
    {
      title: "International Political Education",
      img: "iep.jpg",
      year: "2013-2014",
      shortDesc: "Attended L'Institut d'Études Politiques in Aix-en-Provence",
      role: "Student in Politics, Journalism",
      description:
        'I studied for a year in France at a "Grande École" (French Ivy League), concentrating on Geopolitics, Economy, International Diplomacy, French Language, and Journalism. I also produced my French-language short film and wrote several French newspaper articles while at school.',
      bigImg: "iep_big.jpg",
      links: [
        { title: "Visit IEP Website", url: "https://www.sciencespo-aix.fr/" }
      ]
    },
    {
      title: "Literature B.A. from UW-Madison",
      img: "uw.jpg",
      year: "2011-2013",
      shortDesc: "Attended UW-Madison for English and Computer Science",
      role: "Student in English, Comp-Sci, & French",
      description:
        'I transferred from the Animation / Puppetry department at UW-Milwaukee to UW-Madison in order to study literature and the source of storytelling. While at UW-Madison, I took the first two year curriculum for Comp Sci, learning Algorithms and Data Structures, which has allowed me to pursue a career in Technology.',
      links: [
        { title: "Visit UW-Madison Website", url: "https://www.wisc.edu/" }
      ]
    },
    {
      title: "Animation and Film at UW-Milwaukee PSOA",
      img: "uwm.jpg",
      year: "2008-2010",
      shortDesc: "Attended UW-Milwaukee for Film, Animation, and Puppetry",
      role: "Student in Film, 2D Animation, Puppetry",
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
      year: "2015-2019",
      shortDesc: "Hired the Web team for Yubico. Hired for Infrastructure team for Mosaix.ai",
      role: "Teamleader, Hiring Manager",
      links: [
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
        />
        <Section theName="Overview" style={{ padding: "20px 0 0 0" }}>
          <div style={{ padding: "0 40px" }}>
            <h2 id="portfolio" style={{ textAlign: "center" }}>
              <span className="special_text">Thanks for visiting my</span>{" "}
              <strong>Portfolio</strong>!
            </h2>
            <blockquote className="portfolio__overview__blockquote">
              <h4 style={{ textAlign: "center", marginBottom: 0 }}>
                <span className="special_text">My name is Joshua M Kellerman</span>
              </h4>
              <h4 style={{ textAlign: "center", marginTop: "10px", marginBottom: 0 }}>
                <span className="special_text">
                  Director - Writer - Engineer - Artist - <strong>Storyteller</strong> </span>
              </h4>
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                <span className="special_text">
                 Columbia MFA Film Directing, NYC </span>
              </h4>
            </blockquote>
            <h4 style={{ textAlign: "center" }}>
              Scroll down{" "}
              <span className="special_text">
                to see some of my projects, below:
              </span>
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
        </Section>
        <Section
          theName="Film, Animation, and Video"
          style={{ padding: "10px 0 20px 0" }}
        >
          <h2 id="film" ref="film">
            Film, Animation, and Video
          </h2>{" "}
          <hr />
          <h3 className="special_text">Artistic</h3>
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
              Life's too short not to enjoy it to the fullest with people you
              love.{" "}
              <strong>
                Come be part of my awesome life, and I'll be part of yours
              </strong>
              .
            </p>
          </div>
        </Section>
      </div>
    );
  }
}
