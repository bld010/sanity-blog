export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f581a1de6317e5c4be9f164',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-d6cum8ew',
                  apiId: 'f1bcc72c-a72c-4438-88fa-f00c57f0b048'
                },
                {
                  buildHookId: '5f581a1d148a546736aafc99',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-8q7h95ut',
                  apiId: '2e3a6a4c-33bd-4977-a1c2-25d0af2dec1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bld010/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-8q7h95ut.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
