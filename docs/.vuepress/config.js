module.exports = {
    title: '个人博客',
    description: '个人博客',
    theme: 'reco',
    base: '/learn-vue/',
    head: [
        ['link', { rel: 'icon', href: '/logo.jfif' }]
    ],
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/'},
            {
                text: '分类',
                items: [
                    { text: '快速上手', link: '/guide/' },
                ]
            },
            { text:'Github', link: '/to' }
        ],
        sidebar:{
            '/handbook':[
                {
                    title: '欢迎学习',
                    path: '/',
                    collapsable: false,
                    children: [
                        { title: '欢迎学习', path: '/' },
                    ]
                },
                {
                    title: '基础学习',
                    path: '/handbook/test1',
                    collapable: false,
                    children: [
                        { title: '条件类型', path: '/handbook/test1' },
                        { title: '函数类型', path: '/handbook/test2' },
                    ]
                },
                {
                    title: '高级学习',
                    path: '/handbook/test4',
                    collapsable: false,
                    children: [
                        { title: '类型断言', path: '/handbook/test4' },
                        { title: '类型转换', path: '/handbook/test5' },
                    ]
                },
                {
                    title: 'mybatis',
                    path: '/handbook/Mybatis'
                }
            ]
        } 
    },

    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },

    
}