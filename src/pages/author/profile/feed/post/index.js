import React from 'react'
import moment from 'moment'
import { Button } from 'antd'
import Avatar from 'components/CleanUIComponents/Avatar'
import styles from './style.module.scss'
import { config } from '../../../../../config'

class Post extends React.Component {


  render() {
    const { article, author } = this.props
    return (
      <section className="card">
        <div className="card-header">
          <div className="clearfix">
            <div className="pull-left mr-2">
              <div className={`${styles.commentAvatar}`}>
                {author.avatar && <Avatar size="50" src={`${config.apiUrl}/users/${author.id}/avatar`} border={false} href={`/author/profile?id=${author.id}`} />}
                {!author.avatar && <Avatar size="50" src="/resources/images/avatar.jpg" border={false} href={`/author/profile?id=${author.id}`} />}
              </div>
            </div>
            <div className="pull-left">
              <a href={`/author/profile?id=${author.id}`}><strong>{`${author.name} ${author.surname}`}</strong></a>
              <br />
              <span className="text-muted">{moment(new Date(article.createdAt)).fromNow()}</span>
            </div>
            <div className="pull-right">
              <a href="javascript: void(0);">
                <i className="font-size-20 fa fa-bookmark-o" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className={styles.blogFeed}>
            <div className="row">
              <div className="col-lg-12">
                <main>
                  <article className={styles.article} key={article.id}>
                    {article.imageId &&
                      <div className={styles.articleMedia}>
                        <a href={`/article/details?id=${article.id}`} className={styles.link}>
                          <img src={`${config.apiUrl}/images/${article.imageId}`} alt={article.title} />
                        </a>
                      </div>
                    }

                    <div className={styles.information}>
                      <div className={styles.title}>
                        <h1>
                          <a href={`/article/details?id=${article.id}`}>{article.title}</a>
                        </h1>
                      </div>
                    </div>

                    <div className={styles.content}>
                      <div dangerouslySetInnerHTML={{ __html: article.subtitle }} />
                      <div className={styles.articleMore}>
                        <a href={`/article/details?id=${article.id}`}>
                          <Button type="default">
                            Read more
                            <i className="ml-2 fa fa-angle-right" aria-hidden="true" />
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <a href="javascript: void(0);">
                          <i className="font-size-20 fa fa-heart-o" />
                        </a>
                      </div>
                      <div className="col-6">
                        <ul className={styles.share}>
                          <li className={`${styles.shareItem} mr-3`}>
                            <i className="font-size-20 fa fa-comments-o mr-1" /> {article.comments}
                          </li>
                          <li className={styles.shareItem}>
                            <i className="font-size-20 fa fa-eye mr-1" /> {article.views}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Post
