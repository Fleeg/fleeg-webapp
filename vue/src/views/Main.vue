<template lang='pug'>
div
  Header(bg-dark=false, with-search=true)

  .container-fluid.px-0.pt-1
    Nav(:type='type' :active='active' :param='param')

    .row.mx-0.mt-2.mt-md-4(v-if='fullPage')

      // top links
      .col-md-7.col-lg-5.offset-lg-2
        .row.mx-0
          TopCard(v-for='post in posts.slice(0, 3)' :key='post.id'
            :id='post.id',
            :type='post.type',
            :title='post.title',
            :url='post.url',
            :description='post.description',
            :media='post.media',
            :published='post.published',
            :bookmarks='post.bookmarks',
            :bookmarkColor='post.bookmarkColor',
            :username='post.username',
            :fullName='post.fullName',
            :avatar='post.avatar')

      // people
      .col-md-5.col-lg-3.mt-4.bg-lightergrey.border

        h2.mt-3.mt-md-4
          span.text-capitalize.ml-3 People

        .row.mx-0.px-3
          People(v-for='item in people.slice(0, 4)' :key='item.username'
                 top4=true,
                 :following='item.following',
                 :avatar='item.avatar',
                 :username='item.username',
                 :fullName='item.fullName',
                 :userJoined='item.userJoined',
                 :userFollowers='item.userFollowers')

        .row.px-0.pb-2(v-if='people.length > 4')
          .col.text-right.px-4.py-2
            a.h5.text-success.text-uppercase.cursor-pointer(@click='toPeople') See More People >

    // more links
    .row.mx-0.mt-2.mt-md-3
      .col-lg-8.offset-lg-2.p-0

        h3.mt-2.mt-md-4.border-bottom.py-1(v-if='fullPage')
          span.ml-2.px-3.title-card-list More Links

        .row.mx-0
          Card(v-if='active !== "people"' v-for='post in posts' :key='post.id+1'
            :id='post.id+1',
            :type='post.type',
            :title='post.title',
            :url='post.url',
            :description='post.description',
            :media='post.media',
            :published='post.published',
            :bookmarks='post.bookmarks',
            :bookmarkColor='post.bookmarkColor',
            :username='post.username',
            :fullName='post.fullName',
            :avatar='post.avatar')

        .row.mx-0
          People(v-if='active === "people"' v-for='item in people' :key='item.username'
                 top4=false,
                 :following='item.following',
                 :avatar='item.avatar',
                 :username='item.username',
                 :fullName='item.fullName',
                 :userJoined='item.userJoined',
                 :userFollowers='item.userFollowers')

        //.row.mx-0
          +article(['lHVdOD-zSEdfvq77', '0*lI5-avJvcBbQDmA2.jpeg'])
          +media(['https://i.vimeocdn.com/video/641846397_1280x720.jpg', '1*rR9BfHWbucraC-JqekVjcQ.jpeg'], true)
          +article(['aZlilaPzxXZeBzwp.', '1*WEDSxCrKyHQFewfsE9yKAQ.png'])
          +article(['', '1*WEDSxCrKyHQFewfsE9yKAQ.png'], 'doc')
          +article(['2rS1lwtMx1lYgIEH', '0*lI5-avJvcBbQDmA2.jpeg'])
          +article(['qcgD8m1RVn-0Grss', '1*WEDSxCrKyHQFewfsE9yKAQ.png'])
          +media(['https://cdn-images-1.medium.com/max/1600/1*ReOoy5DvE7BHJZ46UM5Zsw.jpeg', '0*c1uTLwrFqb4M7P4y.jpeg'])
          +article(['5Ydk4DROjj7bNVOB', '0*lI5-avJvcBbQDmA2.jpeg'])
          +article(['', '0*c1uTLwrFqb4M7P4y.jpeg'], 'none')
          +media(['https://grabr.io/assets/ac99c6c.jpg', '1*rR9BfHWbucraC-JqekVjcQ.jpeg'])
  Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import Card from '@/components/Card.vue'
import TopCard from '@/components/TopCard.vue'
import People from '@/components/People.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Nav,
    Card,
    TopCard,
    People
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      active: '',
      param: '',
      fullPage: false
    }
  },
  created () {
    this.onLoadPage()
  },
  watch: {
    '$route' () {
      this.onLoadPage()
    }
  },
  methods: {
    onLoadPage () {
      if (this.type === 'search') {
        const query = this.$route.query.q
        const view = this.$route.query.t
        this.param = query
        this.active = view || 'all'
      }

      this.fullPage = ['all', 'profile', 'for you'].includes(this.active)
    },
    toPeople () {
      let toPath
      let queries

      if (this.type === 'search') {
        toPath = '/search'
        queries = { q: this.param, t: 'people' }
      }

      this.$router.push({ path: toPath, query: queries })
    }
  },
  computed: {
    people () {
      return [
        {
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/0*lI5-avJvcBbQDmA2.jpeg',
          following: false,
          username: 'angelj',
          fullName: 'Angel Johnyson',
          userJoined: new Date('2018-02-05'),
          userFollowers: 12398
        },
        {
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/0*c1uTLwrFqb4M7P4y.jpeg',
          following: false,
          username: 'micsmapet',
          fullName: 'Michelle Smawtz Petz',
          userJoined: new Date('2017-12-11'),
          userFollowers: 239
        },
        {
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/1*rR9BfHWbucraC-JqekVjcQ.jpeg',
          following: true,
          username: 'robertkw',
          fullName: 'Robert Kalinwvisk Wisebells',
          userJoined: new Date('2017-11-18'),
          userFollowers: 2398
        },
        {
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/1*WEDSxCrKyHQFewfsE9yKAQ.png',
          following: false,
          username: 'johnstratmaj',
          fullName: 'Johny Stratuss Anntjel Majetkwonlooyk',
          userJoined: new Date('2018-09-28'),
          userFollowers: 704
        },
        {
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/1*BsvrL330ex3VkgPsTxDsCw.jpeg',
          following: true,
          username: 'gregwill',
          fullName: 'Greg Willson',
          userJoined: new Date('2016-10-08'),
          userFollowers: 85
        }
      ]
    },
    posts () {
      return [
        {
          id: 'etiam-sapien-magna-aliquet-ut-eros-sed-a36s09',
          type: 'article',
          title: 'Etiam Sapien Magna, Aliquet ut Eros Sed',
          url: 'https://mylink.test.com/article/a-title-of-some-link',
          description: 'Praesent gravida suscipit mauris, at vestibulum est ' +
                      'cursus vehicula. Duis ac sollicitudin felis.',
          media: 'https://cdn-images-1.medium.com/max/400/0*Eu_lLnqjWKGm2UK1',
          published: new Date(),
          bookmarks: 3210,
          bookmarkColor: '#ff0000',
          username: 'angelj',
          fullName: 'Angel Johnyson',
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/0*lI5-avJvcBbQDmA2.jpeg'
        },
        {
          id: 'etiam-sapien-magna-aliquet-ut-eros-sed-cv85fgh',
          type: 'doc',
          title: 'Etiam Sapien Magna, Aliquet ut Eros Sed',
          url: 'https://mylink.test.com/article/a-title-of-some-link',
          description: 'Praesent gravida suscipit mauris, at vestibulum est ' +
                      'cursus vehicula. Duis ac sollicitudin felis.',
          published: new Date(),
          bookmarks: 3210,
          username: 'angelj',
          fullName: 'Angel Johnyson',
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/0*lI5-avJvcBbQDmA2.jpeg'
        },
        {
          id: 'etiam-sapien-magna-aliquet-ut-eros-sed-acbdfg',
          type: 'video',
          title: 'Etiam Sapien Magna, Aliquet ut Eros Sed',
          url: 'https://mylink.test.com/article/a-title-of-some-link',
          media: 'https://cdn-images-1.medium.com/max/400/0*Eu_lLnqjWKGm2UK1',
          published: new Date(),
          bookmarks: 2130,
          username: 'angelj',
          fullName: 'Angel Johnyson',
          avatar: 'https://cdn-images-1.medium.com/fit/c/80/80/0*lI5-avJvcBbQDmA2.jpeg'
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
.title-card-list {
  border-bottom: 3px solid $black;
}
</style>
