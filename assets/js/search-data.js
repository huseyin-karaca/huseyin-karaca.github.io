// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "A personal archive of my reading journey on Kobo since last year, featuring unedited highlights, raw notes, and book reviews.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bookshelf/";
          },
        },{id: "nav-brewshelf",
          title: "brewshelf",
          description: "My journal of specialty coffee explorations, detailing brew recipes and flavor profiles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/brewshelf/";
          },
        },{id: "post-düşünsel-üretimde-formun-önemi-üzerine",
        
          title: "Düşünsel Üretimde Formun Önemi Üzerine",
        
        description: "Zihinsel kaosu anlamlı bir bütüne çevirmek: Üretim süreçlerinde nihai formun düzenleyici ve kolaylaştırıcı gücü üzerine bir inceleme.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/essay-form/";
          
        },
      },{id: "post-my-coffee-setup",
        
          title: "My Coffee Setup",
        
        description: "What I think is the best for pour-over, for exploiters?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/coffee-setup/";
          
        },
      },{id: "post-revisiting-an-old-paper",
        
          title: "Revisiting an old paper",
        
        description: "Can we reformulate an old universal randomized switching paper with respect to Bayesian terminology?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/randomized-switching-paper-revisited/";
          
        },
      },{id: "post-ai-agent-for-automated-research-paper-drafting",
        
          title: "AI Agent for Automated Research Paper Drafting",
        
        description: "Can we greatly automate our research paper writing process with flexible ai agents?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/research-paper-ai-agent/";
          
        },
      },{id: "post-i̇letişim-gerçeklik-ve-anlaşılmak-üzerine",
        
          title: "İletişim, Gerçeklik ve Anlaşılmak Üzerine",
        
        description: "Ortada tek bir gerçeklik mi var, yoksa herkesin kendi gerçekliği mi?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/third-blog-post/";
          
        },
      },{id: "post-phd-applications-as-a-joint-optimization-problem",
        
          title: "PhD applications (as a joint optimization problem)",
        
        description: "let&#39;s continue",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/second_blog_post/";
          
        },
      },{id: "post-the-manifesto-of-the-blog",
        
          title: "The manifesto of the blog",
        
        description: "let&#39;s get started",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first_blog_post/";
          
        },
      },{id: "post-ey-sareban-draft",
        
          title: "Ey Sareban (draft)",
        
        description: "Exploring Mohsen Namjoo&#39;s version of an old Persian poem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first-poetry-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "brewshelf-switch-yirgacheffe",
          title: 'Switch Yirgacheffe',
          description: "",
          section: "Brewshelf",handler: () => {
              window.location.href = "/brewshelf/Switch-Yirgacheffe/";
            },},{id: "brewshelf-aeropress-narino",
          title: 'Aeropress Narino',
          description: "",
          section: "Brewshelf",handler: () => {
              window.location.href = "/brewshelf/Aeropress-Narino/";
            },},{id: "brewshelf-v60-kenya-kathakwa",
          title: 'V60 Kenya Kathakwa',
          description: "",
          section: "Brewshelf",handler: () => {
              window.location.href = "/brewshelf/V60-Kenya-Kathakwa/";
            },},{id: "library-a-people-39-s-history-of-the-united-states",
          title: 'A People&amp;#39;s History of the United States',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/A_Peoples_History_of_the_United_States/";
            },},{id: "library-bu-diyar-baştanbaşa-1-nuhun-gemisi",
          title: 'Bu Diyar Baştanbaşa 1 - Nuhun Gemisi',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Bu_Diyar_Bastanbasa_1_-_Nuhun_Gemisi/";
            },},{id: "library-eski-dünya-seyahatnamesi",
          title: 'Eski Dünya Seyahatnamesi',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Eski_Dunya_Seyahatnamesi/";
            },},{id: "library-ethics",
          title: 'Ethics',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Ethics/";
            },},{id: "library-i̇mkansızın-şarkısı",
          title: 'İmkansızın Şarkısı',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Imkansizin_Sarkisi/";
            },},{id: "library-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Mans_Search_for_Meaning/";
            },},{id: "library-renksiz-tsukuru-tazaki-39-nin-hac-yılları",
          title: 'Renksiz Tsukuru Tazaki&amp;#39;nin Hac Yılları',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Renksiz_Tsukuru_Tazakinin_Hac_Yillari/";
            },},{id: "library-savaş-ve-barış-cilt-i",
          title: 'Savaş ve Barış Cilt I',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Savas_ve_Baris_Cilt_I/";
            },},{id: "library-savaş-ve-barış-cilt-ii",
          title: 'Savaş ve Barış Cilt II',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Savas_ve_Baris_Cilt_II/";
            },},{id: "library-siddhartha",
          title: 'Siddhartha',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/Siddhartha/";
            },},{id: "library-the-door",
          title: 'The Door',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/The_Door/";
            },},{id: "library-the-happiness-trap-how-to-stop-struggling-and-start-living-second-edition",
          title: 'The Happiness Trap: How to Stop Struggling and Start Living (Second Edition)',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/The_Happiness_Trap/";
            },},{id: "library-the-wind-up-bird-chronicle",
          title: 'The Wind-Up Bird Chronicle',
          description: "",
          section: "Library",handler: () => {
              window.location.href = "/bookshelf/The_Wind-Up_Bird_Chronicle/";
            },},{id: "news-i-ranked-1st-among-1-4-million-participants-in-the-national-high-school-entrance-examination-teog",
          title: 'I ranked 1st among 1.4 million participants in the National High School Entrance...',
          description: "",
          section: "News",},{id: "news-i-represented-turkey-at-the-asian-physics-olympiad-apho-held-in-russia",
          title: 'I represented Turkey at the Asian Physics Olympiad (APhO) held in Russia.',
          description: "",
          section: "News",},{id: "news-i-represented-turkey-at-the-european-physics-olympiad-eupho-held-in-estonia",
          title: 'I represented Turkey at the European Physics Olympiad (EuPhO) held in Estonia.',
          description: "",
          section: "News",},{id: "news-i-won-a-bronze-medal-in-the-national-physics-olympiads",
          title: 'I won a Bronze Medal in the National Physics Olympiads.',
          description: "",
          section: "News",},{id: "news-i-achieved-the-24th-rank-among-2-6-million-participants-in-the-national-university-entrance-examination-yks",
          title: 'I achieved the 24th rank among 2.6 million participants in the National University...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-tübi̇tak-2205-undergraduate-scholarship-for-my-undergraduate-studies",
          title: 'I was awarded the TÜBİTAK 2205 Undergraduate Scholarship for my undergraduate studies.',
          description: "",
          section: "News",},{id: "news-i-won-the-3rd-place-award-in-the-metu-eee-star-departmental-undergraduate-research-program",
          title: 'I won the 3rd Place Award in the METU EEE STAR Departmental Undergraduate...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-tübi̇tak-2224-d-scientific-activities-abroad-support-program-grant-for-my-research-visit-to-ucla",
          title: 'I was awarded the TÜBİTAK 2224-D Scientific Activities Abroad Support Program grant for...',
          description: "",
          section: "News",},{id: "news-i-completed-my-summer-research-internship-at-ucla-where-i-had-the-privilege-of-working-with-prof-aydogan-ozcan",
          title: 'I completed my summer research internship at UCLA, where I had the privilege...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-all-optical-image-denoising-using-a-diffractive-visual-processor-was-published-in-light-science-amp-amp-applications",
          title: 'Our paper titled “All-optical image denoising using a diffractive visual processor” was published...',
          description: "",
          section: "News",},{id: "news-i-graduated-from-middle-east-technical-university-metu-with-a-b-s-degree-in-electrical-and-electronics-engineering",
          title: 'I graduated from Middle East Technical University (METU) with a B.S. degree in...',
          description: "",
          section: "News",},{id: "news-i-started-my-master-s-degree-at-bilkent-university-and-received-the-tübi̇tak-2210-a-national-graduate-scholarship",
          title: 'I started my Master’s degree at Bilkent University and received the TÜBİTAK 2210-A...',
          description: "",
          section: "News",},{id: "news-my-paper-titled-hierarchical-ensemble-based-feature-selection-for-time-series-prediction-was-published-in-digital-signal-processing",
          title: 'My paper titled “Hierarchical ensemble-based feature selection for time series prediction” was published...',
          description: "",
          section: "News",},{id: "news-i-was-honored-with-the-ict-authority-of-türkiye-5g-and-beyond-graduate-research-fellowship-for-my-graduate-studies",
          title: 'I was honored with the ICT Authority of Türkiye 5G and Beyond Graduate...',
          description: "",
          section: "News",},{id: "news-my-paper-titled-soft-gradient-boosting-with-learnable-feature-transforms-for-sequential-regression-was-published-in-ieee-signal-processing-letters",
          title: 'My paper titled “Soft Gradient Boosting with Learnable Feature Transforms for Sequential Regression”...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
