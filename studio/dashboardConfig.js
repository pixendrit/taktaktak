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
                  buildHookId: '604b5c6ca4df4db39b0d8b01',
                  title: 'Sanity Studio',
                  name: 'taktaktak-studio',
                  apiId: '5984c1e7-ad15-4197-9fde-81325007f699'
                },
                {
                  buildHookId: '604b5c6c7415c6a8baf0fed9',
                  title: 'Blog Website',
                  name: 'taktaktak',
                  apiId: 'e717bd49-1f4f-43da-8107-d6bf67af3afb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixendrit/taktaktak',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://taktaktak.netlify.app', category: 'apps'}
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
