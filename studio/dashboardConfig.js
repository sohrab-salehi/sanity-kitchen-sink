export default {
  widgets: [
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
                  buildHookId: '60f1971955430220515d9d70',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nx9f5i6k',
                  apiId: '5d8e0e8c-3166-4f01-99ba-a62d5aaf6a62'
                },
                {
                  buildHookId: '60f1971abdfeb838feea1029',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7qrnzsjn',
                  apiId: 'b121146e-1a59-4efa-a053-d13b5168795d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sohrab-salehi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7qrnzsjn.netlify.app', category: 'apps'}
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
