// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-game-dev",
          title: "Game Dev",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/game-dev/";
          },
        },{id: "projects-bring-me-a-star",
          title: 'Bring Me a Star',
          description: "An unexpected space expedition...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-bring-me-a-star/";
            },},{id: "projects-medieval-mayhem",
          title: 'Medieval Mayhem',
          description: "Nothing can go wrong...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-medieval-mayhem/";
            },},{id: "projects-nadia-on-the-line",
          title: 'Nadia on the Line',
          description: "Use your powers to clear the path!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-nadia-on-the-line/";
            },},{id: "projects-pawerpoint",
          title: 'PawerPoint',
          description: "Please, get her out! She needs help!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-pawer-point/";
            },},{id: "projects-tadpole-tunes",
          title: 'Tadpole Tunes',
          description: "Play the right tunes to trigger their metamorphoses!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-tadpole-tunes/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jKRp_wYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://alvarogi.itch.io", "_blank");
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
