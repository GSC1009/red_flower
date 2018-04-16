import React, { Component } from 'react'
import { columns } from '../data/ArticleListData'
import { Table, Button, Pagination} from 'antd'
import { GetNormalArticle, DeleteArticle } from "../../API/Api"
import { normalizeTime, judgePullAjax, judgePushAjax } from '../../common/scripts/utils'
class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      selectedRowKeys: [],
      page: 0
    }
  }
  pageChange = (page) => {
    this.setState({
      page: page
    })
    GetNormalArticle({page: page - 1})
      .then(res => JSON.parse(res))
      .then(res => {
        if (typeof res.data !== 'undefined') {
          res.data.map(item => {
            item.createTime = normalizeTime(item.createTime)
          })
          this.setState({
            dataSource: res.data
          })
        }
      })
      .catch(err => {
        this.setState({
          dataSource: []
        })
      })
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({
      selectedRowKeys
    })
  }
  onDeleteClick = () => {
    const deleteArticleArray = []
    this.state.selectedRowKeys.map((item, index) => {
      deleteArticleArray.push({
        articleId: this.state.dataSource[item].id,
        id: index
      })
    })
    deleteArticleArray.map(item => {
      DeleteArticle({id: item.articleId, value: {reason: '不符合要求'}})
        .then(() => {
          this.setState({
            dataSource: this.state.dataSource.filter(articleItem => articleItem.id !== item.articleId),
            selectedRowKeys: this.state.selectedRowKeys.filter(selectedItem => selectedItem !== item.id)
          })
        })
    })
  }
  componentDidMount() {
    GetNormalArticle({page: 0})
      .then(res => JSON.parse(res))
      .then(res => {
        if (typeof res.data !== 'undefined') {
          res.data.map(item => {
            item.createTime = normalizeTime(item.createTime)
          })
          this.setState({
            dataSource: res.data
          })
        }
      })
  }

  render() {
    const { selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const hasSelected = selectedRowKeys.length > 0;
    const style = {
      container: {
        paddingTop: 20 + 'px'
      }
    }
    return (
      <div style={style.container}>
        <h4>过审文章</h4>
        <Table dataSource={this.state.dataSource} columns={columns} bordered={true}  rowSelection={rowSelection} pagination={false}/>
        <br/>
        <Pagination current={this.state.page} onChange={this.pageChange} total={100}/>
        <br/>
        <Button onClick={this.onDeleteClick}>删除</Button>
        <br/>
        <br/>
      </div>
    )
  }
}

export default ArticleList