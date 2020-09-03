export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f513a74900e4d00b1eeed24',
                  title: 'Sanity Studio',
                  name: 'jonathan-xues-blog-studio',
                  apiId: 'f4ba2566-d8f5-406d-b22e-d258a37e719a'
                },
                {
                  buildHookId: '5f513a74b6f25a0101c13c46',
                  title: 'Blog Website',
                  name: 'jonathan-xues-blog',
                  apiId: '019c100a-44c5-4234-bd31-0beb8ccf1bb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonathanxuexue/jonathan-xue-s-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jonathan-xues-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
