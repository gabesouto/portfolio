// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

import Intro from "./components/intro.mdx" // introduction or about me

const siteData: any = {
    author: "Gabriel Dos Santos Souto",  // author name
    logo: {
        // how to change the favicon of the website?
        // change the app/favicon.ico file directly，or refer to the document below
        // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

        // you can use image or text as the logo, you can choose both, but the image will be displayed first
        image: "/logoIcon.png", //  the file path of the logo in the public directory
        text: "Gabriel Souto Dev", // null || text

        // whether the logo is a link to the home page
        isHomeLink: true, // true | false
    },

    // website title
    title: "Gabriel Souto Portfólio",

    // website description
    description: "a",

    // light | dark
    theme: "light",

    // your blog repo || your github repo || null
    githubRepo: "https://github.com/gabesouto",

    // routes
    routes: [
        // {
        //     name: 'Blog',
        //     value: '/blog'
        // },
        {
            name: "Currículo",
            value:
              "https://drive.google.com/file/d/16KdkrB3akIBXO9YBxZXRv1RouG2-t3cQ/view?usp=drive_link",
          },
        {
            name: 'Projetos',
            value: '/project'
        },
    ],

    // home page config
    home: {
        title: "Portfólio",
        description: "Meu nome é Gabriel Dos Santos Souto, sou um desenvolvedor fullstack e acadêmico de Análise e Desenvolvimento de Sistemas, seja bem vindo(a) ao meu blog pessoal, aqui você encontrará todas as informações relacionadas a minha vida no desenvolvimento.",

        // introduction or about me
        intro: Intro, // file path of the introduction

        socials: {
            email: "soutogabriel04@gmail.com",
            github: "https://github.com/gabesouto",
            linkedin: "https://www.linkedin.com/in/gabrielsouto-developer/",
      
        },
    },

    // blog page config
    blog: {
        title: 'My Blog',
        description: 'All of my long-fesign, and more, collected in chronological order.',
        comment: {
            enabled: true,
            engine: "giscus", // giscus | utterances
            // giscus doc: https://giscus.app
            giscus: {
                repo: "imyuanli/next-blog",
                repoId: "R_kgDOKTZ_kQ",
                category: "Announcements",
                categoryId: "DIC_kwDOKTZ_kc4CfMXK",
                mapping: "pathname",
                reactionsEnabled: "1",
                emitMetadata: "0",
                inputPosition: "top",
                theme: "light",
                lang: "en",
                loading: "lazy",
            },

            // utterances doc: https://utteranc.es
            utterances: {
                src: "https://utteranc.es/client.js",
                repo: "imyuanli/next-blog",
                "issue-term": "pathname",
                theme: "github-light",
                crossorigin: "anonymous",
                label: "",
                async: true
            }
        },
    },

    // tags page config
    tags: {
        title: 'Tags',
        description: 'All of my tags, collected in alphabetical order.',
    },

    // project page config
    project: {
        title: "Projetos",
        description: "Projetos construídos com: Java, Node.js, React.js",

        // status color and text
        getStatus: (status: string) => {
            // you can customize the status color and text！

            // dev: Under development or planning.
            // active: Currently focused on this project.
            // filed: Not upgrading will only fix bugs.
            // offline: Going offline soon.
            // none: Keep running.
            if (!status) return {}

            switch (status) {
                case "active":
                    return {
                        variant: "default",
                        text: "ACTIVE",
                    }
                case "dev":
                    return {
                        variant: "secondary",
                        text: "DEV",
                    }
                case "filed":
                    return {
                        variant: "outline",
                        text: "FILED",
                    }
                case "offline":
                    return {
                        variant: "destructive",
                        text: "OFFLINE",
                    }
            }
        },

        // name, description, href are required
        // github: username/repo
        // status: getStatus return value
        // and so on
        // you can add more fields according to your needs ,but you need to modify the code in the project/page.tsx file
        projects: [
            {
                name: "TODOs com QUALIDADE",
                description: "um simples TODO list com foco em qualidade e organização do código.",
                href: "https://github.com/gabesouto/todos-com-qualidade",
                github: "https://github.com/gabesouto/todos-com-qualidade",
            },
            {
                name: "AGRIX",
                description: "Agrix é uma API para gerenciamento agrícola que permite aos usuários manipular informações sobre fazendas, cultivos e fertilizantes.",
                href: "https://github.com/gabesouto/agrix-system",
                github: "https://github.com/gabesouto/agrix-system",

            },
            {
                name: "MY MANAGER",
                description: "O Sistema consiste em um API de gerenciamento de clientes e vendas, sendo possível fazer cadastro de usuários, login de usuários com autenticação, cadastro, edição e exclusão de clientes, produtos e vendas",
                href: "https://github.com/gabesouto/my-manager",
                github: "https://github.com/gabesouto/my-manager",
            },
            {
                name: "TFC",
                description: "O TFC é uma aplicação full-stack para gerenciamento de partidas de futebol, sendo possível visualizar, adicionar, deletar e editar as partidas, essas funções são protegidas sendo possível o acesso apenas com autenticação.",
                href: "https://github.com/gabesouto/Trybe-Football-Club",
                github: "https://github.com/gabesouto/Trybe-Football-Club",

            },
            {
                name: "MY STORAGE",
                description: "O My Storage é um sistema de gerenciamento de inventário para lojas com recursos de CRUD, fornecendo uma interface para adicionar, editar e excluir produtos.",
                href: "https://github.com/gabesouto/my-storage",
                github: "https://github.com/gabesouto/my-storage",

            },
        ],
    },

    // search config
    search: {
        enabled: false,
        engine: "cmdk", //  cmdk | algolia
        // todo algolia search
        // algolia: {
        //     appId: "",
        //     apiKey: "",
        // }
    },

    // footer config
    footer: {
        isShow: true,
        // whether to display the "Powered by NextBlog" in the footer，you can set it to false，but I hope you can keep it，thank you！
        isShowPoweredBy: true,
    },
}

export default siteData