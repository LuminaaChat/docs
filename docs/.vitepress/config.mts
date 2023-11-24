import {withMermaid} from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
    title: "luminaa.chat",
    description: "Technische Dokumentation für Luminaa",
    base: "/",
    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // @ts-ignore
    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Dokumentation', link: '/arc42/german/01_introduction_and_goals'},
            {text: 'Konzept', link: '/concept/index'},
            {text: 'Links', link: '/links/index'}
        ],


        sidebar: {
            "/arc42/german/": [
                {text: '01 Einführung und Ziele', link: '/arc42/german/01_introduction_and_goals'},
                {text: '02 Randbedingungen', link: '/arc42/german/02_architecture_constraints'},
                {text: '03 Kontextabgrenzung', link: '/arc42/german/03_system_scope_and_context'},
                {text: '04 Lösungsstrategie', link: '/arc42/german/04_solution_strategy'},
                {text: '05 Bausteinsicht', link: '/arc42/german/05_building_block_view'},
                {text: '06 Laufzeitsicht', link: '/arc42/german/06_runtime_view'},
                {text: '07 Verteilungssicht', link: '/arc42/german/07_deployment_view'},
                {text: '08 Querschnittliche Konzepte', link: '/arc42/german/08_concepts'},
                {text: '09 Architekturentscheidungen', link: '/arc42/german/09_architecture_decisions'},
                {text: '10 Qualitätsanforderungen', link: '/arc42/german/10_quality_requirements'},
                {text: '11 Risiken und technische Schulden', link: '/arc42/german/11_technical_risks'},
                {text: '12 Glossar', link: '/arc42/german/12_glossary'},
                {text: 'Über arc42', link: '/arc42/german/about-arc42'},
                {text: 'Arc42 Template', link: '/arc42/german/arc42-template'}
            ],
            "/concept/": [
                {text: 'Einleitung', link: '/concept/index'},
                {text: 'Benutzergruppenprofile', link: '/concept/benutzergruppenprofile/benutzergruppenprofile'},
                {text: 'Kommunikation zwischen', link: '/concept/kommunikation/kommunikation'}
            ],
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/LuminaaChat'},
        ]
    }
})
