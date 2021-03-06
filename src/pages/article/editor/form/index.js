import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'
import { Redirect } from 'react-router-dom'
import { Button, Form, Icon, Input, Select, Upload } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import {imageService, articleService} from '../../../../services';
import {config} from '../../../../config'
import styles from './style.module.scss'

@Form.create()
class PublishForm extends React.Component {

  state = {
    loading: false,
    tags:[],
    title: '',
    subtitle: '',
  }

  componentWillReceiveProps() {
    const {draft} = this.props;
    if(draft.published){
      const { article } = draft;
      this.setState({draftId: draft.id, title: article.title, subtitle: article.subtitle, imageId: draft.imageId, languageId: article.languageId, tags:article.tags.map(tag => tag.name)});
    }
    else{
      this.setState({draftId: draft.id, title: draft.title, subtitle: draft.subtitle, imageId: draft.imageId});
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const { form } = this.props
    const { draftId } = this.state
    form.validateFields((error, values) => {
      if (!error && draftId) {
        this.setState({loading: true})
        values.draftId = draftId;
        articleService.publishDraft(values).then(result => {
          this.setState({ article: result, published: true, loading: false });
        });
      }
    })
  }

  handleFileChange =(file) => {
    imageService.upload(file).then(result => {
      this.props.handleImage(result);
    })
    return false;
  }

  removeImage = () => {
    this.setState({imageId: null});
    this.props.handleImage(null);
  }

  render() {
    const { enabled, toggleForm, form, intl } = this.props
    const { tags, title, subtitle, imageId, languageId, loading, published, article } = this.state;

    if (published) {
      return (
        <Redirect
          to={{
            pathname: '/home', // TODO update path to article details view
            state: { article, published:true },
          }}
        />
      );
    }

    return (
      <div
        className={enabled ? `${styles.settings} ${styles.settingsOpened}` : styles.settings}
      >
        <Scrollbars style={{ height: '100vh' }}>
          <div className={styles.container}>
            <div className={styles.title}>
              <FormattedMessage id='article.editor.form.header' />
              <button
                className={`${styles.close} fa fa-times`}
                onClick={() => toggleForm()}
                type="button"
              />
            </div>
            <div className={styles.description}>
              <strong><FormattedMessage id='article.editor.form.preview' /></strong>
            </div>
            <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
              <div className="form-group">
                {imageId &&
                  <div
                    className={`${styles.imageItem} ${styles.withControls}`}
                    style={{ backgroundImage: `url(${config.apiUrl}/images/${imageId})`, marginBottom: 30 }}
                    key={Math.random()}
                  >
                    <div className={styles.cover}>
                      <div className={styles.itemControls}>
                        <Button.Group size="default">
                          <Button onClick={this.removeImage}>
                            <Icon type="delete" />
                          </Button>
                        </Button.Group>
                      </div>
                    </div>
                  </div>
                }
                {!imageId &&
                  <Form.Item>
                    {form.getFieldDecorator('file')(
                      <Upload.Dragger multiple={false} customRequest={(e)=> this.handleFileChange(e.file)} showUploadList={false}>
                        <p className="ant-upload-drag-icon">
                          <Icon type="camera" />
                        </p>
                        <p className="ant-upload-text"><FormattedMessage id='article.editor.form.imagePick' /></p>
                        <p className="ant-upload-hint"><FormattedMessage id='article.editor.form.imagePickMessage' /></p>
                      </Upload.Dragger>,
                    )}
                  </Form.Item>
                }
              </div>
              <div className="form-group">
                <Form.Item>
                  {form.getFieldDecorator('title', {
                    initialValue: title,
                    rules: [{ required: true, message: intl.formatMessage({id: 'article.editor.form.titleMessage'}) }],
                  })(
                    <Input placeholder={intl.formatMessage({id: 'article.editor.form.title'})} />,
                  )}
                </Form.Item>

                <Form.Item>
                  {form.getFieldDecorator('subtitle', {
                    initialValue: subtitle,
                    rules: [{ required: true, message: intl.formatMessage({id: 'article.editor.form.subtitleMessage'}) }],
                  }, tags)(
                    <Input placeholder={intl.formatMessage({id: 'article.editor.form.subtitle'})} />,
                  )}
                </Form.Item>
              </div>

              <div className={styles.description}>
                <strong><FormattedMessage id='article.editor.form.note' />:</strong>
                <FormattedMessage id='article.editor.form.noteMessage' />
              </div>
              <hr />
              <div className={styles.description}><FormattedMessage id='article.editor.form.tagDescription' /></div>

              <div className="form-group">
                <Form.Item>
                  {form.getFieldDecorator('tags', {
                    initialValue: tags,
                    rules: [
                      {
                        validator: (rule, value, callback) => {
                          if (value) {
                            if (value.length > 5) {
                              callback(intl.formatMessage({id: 'article.editor.form.tagMessage'}));
                            } else if (value.length <= 5) {
                              callback();
                            }
                          }
                        }
                      }
                    ]
                  })(
                    <Select
                      mode="tags"
                      size="default"
                      placeholder={intl.formatMessage({id: 'article.editor.form.tag'})}
                      style={{ width: '100%' }}
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {form.getFieldDecorator('languageId', {
                    initialValue: languageId
                  })(
                    <Select
                      allowClear
                      size="default"
                      placeholder={intl.formatMessage({id: 'article.editor.form.language'})}
                      style={{ width: '100%' }}
                    >
                      <Select.Option value={1}>
                        <span role="img" aria-label="Кыргызча" className="mr-2">
                          🇰🇬
                        </span>
                        Кыргызча
                      </Select.Option>
                      <Select.Option value={2}>
                        <span role="img" aria-label="Кыргызча" className="mr-2">
                          🇷🇺
                        </span>
                        Русский
                      </Select.Option>
                      <Select.Option value={3}>
                        <span role="img" aria-label="English" className="mr-2">
                          🇬🇧
                        </span>
                        English
                      </Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </div>

              <div className="form-actions" style={{textAlign: 'center'}}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  <FormattedMessage id='article.editor.form.publish' />
                </Button>
              </div>
            </Form>
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default injectIntl(PublishForm);
