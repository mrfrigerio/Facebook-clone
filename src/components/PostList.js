import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcântara",
          avatar: "assets/julio-alcantara.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "assets/diego-fernandes.jpg"
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "assets/gabriel-lisboa.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera beleza? Estou fazendo o bootcamp da Rocketseat e está muito massa. Mais alguém aí fazendo? Comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "assets/clara-lisboa.png"
            },
            content: "Também estou fazendo e estou adorando! Estou no terceiro módulo sobre Node.js e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "assets/cezar-toledo.png"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever para a próxima turma para ver qual é a desse bootcampGoStack! Dizem que os devs saem de lá com superpoderes."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "assets/gabriel-lisboa.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera beleza? Estou fazendo o bootcamp da Rocketseat e está muito massa. Mais alguém aí fazendo? Comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "assets/clara-lisboa.png"
            },
            content: "Também estou fazendo e estou adorando! Estou no terceiro módulo sobre Node.js e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "assets/cezar-toledo.png"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever para a próxima turma para ver qual é a desse bootcampGoStack! Dizem que os devs saem de lá com superpoderes."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Júlio Alcântara",
          avatar: "assets/julio-alcantara.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "assets/diego-fernandes.jpg"
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <>
        {this.state.posts.map((post, index) => (
          <Post
            key={index}
            avatar={post.author.avatar}
            author={post.author.name}
            date={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}

      </>
    )
  }

}


export default PostList