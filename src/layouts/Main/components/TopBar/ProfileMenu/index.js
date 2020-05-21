import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Avatar } from 'antd'
import { FormattedMessage } from 'react-intl'
import {config} from '../../../../../config'
import styles from './style.module.scss'

@connect(({ user }) => ({ user }))
class ProfileMenu extends React.Component {

  logout = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  render() {
    const { user } = this.props
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <strong>
            <FormattedMessage id="topBar.profileMenu.hello" />, {user.name || 'Anonymous'}
          </strong>
          <div>
            {user.email}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="/author/profile">
            <i className={`${styles.menuIcon} icmn-user`} />
            Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="/article/edit">
            <i className={`${styles.menuIcon} icmn-quill`} />
            New story
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="/author/drafts">
            <i className={`${styles.menuIcon} icmn-stack`} />
            Drafts
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="javascript: void(0);" onClick={this.logout}>
            <i className={`${styles.menuIcon} icmn-exit`} />
            <FormattedMessage id="topBar.profileMenu.logout" />
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <div className={styles.dropdown}>
          {user.avatar && <Avatar className={styles.avatar} shape="round" size="large" src={`${config.apiUrl}/users/${user.id}/avatar`} />}
          {!user.avatar && <Avatar className={styles.avatar} shape="round" size="large" icon="user" />}
        </div>
      </Dropdown>
    )
  }
}

export default ProfileMenu
