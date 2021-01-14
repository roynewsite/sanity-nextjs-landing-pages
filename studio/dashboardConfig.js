export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fffa8f635154c116e7b5aab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3mdn6zah',
                  apiId: '7963335e-b38c-4796-9bc1-0dafcc88d7ae'
                },
                {
                  buildHookId: '5fffa8f6ae7b491127f7eefa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jrtb8ox1',
                  apiId: '44665e3a-5dfc-47de-8962-caa32dee9a9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roynewsite/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jrtb8ox1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
